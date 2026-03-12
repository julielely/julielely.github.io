import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useTheme } from "../../contexts/ThemeContext";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function ResumePanel() {
  const { theme } = useTheme();
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  const pdfFile = theme === 'dark' ? '/LELY_JULIE_DARK.pdf' : '/LELY_JULIE.pdf';

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        // Get container width minus padding, max out at 1000px for readability
        const width = Math.min(containerRef.current.clientWidth - 32, 1000);
        setContainerWidth(width);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div ref={containerRef} className="w-full h-full bg-bg-primary overflow-y-auto">
      <div className="flex flex-col items-center py-4 px-4">
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-[600px]">
              <p className="text-content-secondary">Loading resume...</p>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center h-[600px] gap-4">
              <p className="text-content-secondary">Failed to load PDF.</p>
              <a href={pdfFile} className="text-blue-500 underline">
                Download instead
              </a>
            </div>
          }
        >
          {numPages &&
            Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                className="mb-4 [&_canvas]:!border-0 [&_canvas]:!outline-none"
                width={containerWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                canvasBackground={theme === 'dark' ? 'transparent' : '#ffffff'}
              />
            ))}
        </Document>
      </div>
    </div>
  );
}
