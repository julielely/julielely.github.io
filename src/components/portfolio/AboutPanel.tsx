import { useState, useRef, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import imgPolaroid1 from "../../assets/2757f1e99649a39c150bee644ab1b48bd51886c3.png";
import imgPolaroid2 from "../../assets/f3f1530a08140b51d2b2c20b3c387da8194e930a.png";
import imgCamera from "../../assets/a4406e52fdfd6edad3f6f88a86f4eaa4433d2008.png";
import imgCameraScreen from "../../assets/fbac732d73d43676b34590e16924214137d5562d.png";
import img8BallSphere from "../../assets/89de2767489abb5efd478ab59161a2634e0e73e8.svg";
import img8BallScreen from "../../assets/68d30fdf72cb623a1c5e28daa8de54c6c1c8bd07.svg";
import img8BallTriangle from "../../assets/487c26e551b521be658964047ed90c51f29e314a.svg";
import img8BallStar from "../../assets/3d4993c07c9644410954c74e529bca05f941d494.svg";

const MAGIC_8_BALL_RESPONSES = [
  "No cap, signs point to yes.",
  "Yes, absolutely",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Don't count on it",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

export function AboutPanel() {
  const { theme } = useTheme();
  const [response, setResponse] = useState<string | null>("No cap, signs point to yes.");
  const [isShaking, setIsShaking] = useState(false);
  const [kindlePage, setKindlePage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageBreaks, setPageBreaks] = useState<number[]>([0]);
  const [pageHeight, setPageHeight] = useState(0);
  const [textScrollHeight, setTextScrollHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      if (!contentRef.current || !textRef.current) return;
      const pageH = contentRef.current.clientHeight;
      const containerTop = textRef.current.getBoundingClientRect().top;

      // Collect line-level rects: use Range for <p> (gives one rect per visual line),
      // treat other elements (header div, etc.) as a single block.
      const allLines: { top: number; bottom: number }[] = [];
      const children = Array.from(textRef.current.children) as HTMLElement[];
      for (const child of children) {
        if (child.tagName === "P") {
          const range = document.createRange();
          range.selectNodeContents(child);
          for (const rect of range.getClientRects()) {
            allLines.push({
              top: rect.top - containerTop,
              bottom: rect.bottom - containerTop,
            });
          }
        } else {
          const rect = child.getBoundingClientRect();
          allLines.push({
            top: rect.top - containerTop,
            bottom: rect.bottom - containerTop,
          });
        }
      }

      // Compute page breaks: push a break whenever a line won't fit on the current page.
      const breaks: number[] = [0];
      let pageStart = 0;
      for (const line of allLines) {
        if (line.bottom > pageStart + pageH) {
          breaks.push(line.top);
          pageStart = line.top;
        }
      }

      setPageHeight(pageH);
      setTextScrollHeight(textRef.current.scrollHeight);
      setPageBreaks(breaks);
      setTotalPages(breaks.length);
      setKindlePage(0);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const handleShake = () => {
    setIsShaking(true);
    setResponse(null);

    setTimeout(() => {
      const randomResponse =
        MAGIC_8_BALL_RESPONSES[
          Math.floor(Math.random() * MAGIC_8_BALL_RESPONSES.length)
        ];
      setResponse(randomResponse);
      setIsShaking(false);
    }, 600);
  };

  return (
    <div
      className="relative w-full bg-bg-primary overflow-auto hide-scrollbar"
      style={{
        backgroundImage: `radial-gradient(circle, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'} 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        style={{
          width: '100%',
          minHeight: 1100,
          position: 'relative',
          margin: '0 auto',
        }}
      >
        {/* Purple Smiski Character - Top Left */}
        <div className="absolute left-[199px] top-[-10px] w-[170px] h-[139px]">
          <img
            src="/images/about/2164d7f2979586fc93ae744a7c0f6244b78b4219.png"
            alt="Purple Smiski character"
            className="w-full h-auto"
          />
        </div>

        {/* Kindle E-Reader - Left */}
        <div className="absolute left-[209px] top-[129px] w-[437px] h-[596px] bg-[#252525] rounded-xl px-6 pt-6 pb-[90px]">
          <button
            className={`relative w-full h-full rounded-lg p-6 flex flex-col cursor-pointer focus:outline-none ${theme === 'dark' ? 'bg-[#1a1d21]' : 'bg-white'}`}
            onClick={() => setKindlePage((p) => (p + 1) % totalPages)}
            aria-label="Turn page"
          >
            {/* Scrollable text area — overflows are clipped, translateY drives pagination */}
            <div
              ref={contentRef}
              className="flex-1 overflow-hidden min-h-0"
              style={(() => {
                if (!pageHeight) return undefined;
                const nextBreak = pageBreaks[kindlePage + 1];
                const pageContentH = nextBreak !== undefined
                  ? nextBreak - pageBreaks[kindlePage]
                  : Math.max(0, textScrollHeight - pageBreaks[kindlePage]);
                const clipBottom = pageHeight - pageContentH;
                return clipBottom > 0
                  ? { clipPath: `inset(0 0 ${clipBottom}px 0)` }
                  : undefined;
              })()}
            >
              <div
                ref={textRef}
                className={`relative space-y-4 text-sm leading-[1.5] font-serif text-left ${theme === 'dark' ? 'text-[#e0e2e5]' : 'text-[#252525]'}`}
                style={{
                  transform: `translateY(-${pageBreaks[kindlePage] ?? 0}px)`,
                }}
              >
                {/* Chapter header — part of the text flow, naturally scrolls away after page 1 */}
                <div className="text-center pb-2">
                  <p className={`text-sm font-normal tracking-wide uppercase font-serif ${theme === 'dark' ? 'text-[#a8b0b9]' : 'text-black'}`}>CHAPTER 1</p>
                  <div className="flex justify-center mt-2">
                    <svg
                      width="50"
                      height="52"
                      viewBox="0 0 31.9043 34.006"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{}}
                    >
                      <path d="M15.9521 7.54516L18.33 14.3279L24.3591 17.003L18.33 19.6781L15.9521 26.4609L13.5743 19.6781L7.54516 17.003L13.5743 14.3279L15.9521 7.54516Z" fill="#3773DA"/>
                    </svg>
                  </div>
                </div>
                <p>
                  I'm a Product Designer based in Seattle, Washington. I design intuitive, thoughtful experiences and move fluidly between big-picture thinking and detailed execution.
                </p>
                <p>
                  I iterate quickly and validate ideas early through high-fidelity prototyping, bringing complex interactions and flows to life. With a strong foundation in design systems, I design at scale—balancing consistency, flexibility, and real-world product constraints.
                </p>
                <p>
                  Prototyping is central to how I work. I enjoy bringing static screens to life and using interactive prototypes to explore ideas, test behaviors, and communicate nuance that static designs often miss. As my prototyping tools of choice have evolved—from vanilla HTML/CSS/JS, to Origami, to today's AI-assisted coding tools—my goal has remained the same: <strong>crafting high-quality, interactive experiences that feel lively and real.</strong>
                </p>
                <p>
                  My path into design began while studying Computer Science at Wellesley College. In a Human-Computer Interaction course, I learned about Norman Doors—everyday objects whose design makes it unclear how to use them. A door that should be pushed has a handle you'd naturally pull. That concept reshaped how I think about design and sparked my interest in creating systems that feel clear, intuitive, and effortless.
                </p>
                <p>
                  The best designs often go unnoticed. I strive to create experiences that feel natural and obvious—where the interface fades into the background and people can focus on what they're trying to accomplish.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className={`flex justify-between items-center text-[8px] font-serif pt-3 flex-shrink-0 ${theme === 'dark' ? 'text-[#a8b0b9]' : 'text-black'}`}>
              <span>{kindlePage < totalPages - 1 ? "tap to continue" : "tap to restart"}</span>
              <span>{Math.round(((kindlePage + 1) / totalPages) * 100)}%</span>
            </div>
          </button>
        </div>

        {/* Magic 8 Ball - Top Right */}
        <div className="absolute left-[670px] top-[54.76px] w-[401.63px] h-[401.63px]">
          <button
            onClick={handleShake}
            disabled={isShaking}
            className={`relative w-full h-full focus:outline-none transition-transform hover:scale-105 disabled:hover:scale-100 ${isShaking ? 'animate-bounce' : ''}`}
            style={{ transform: 'rotate(13.33deg)' }}
            aria-label="Shake Magic 8 Ball"
          >
            {/* Sphere */}
            <img
              src={img8BallSphere}
              alt=""
              className="absolute"
              style={{ left: 34, top: 34, width: 333.694, height: 333.694 }}
            />
            {/* Screen (dark navy circle) */}
            <img
              src={img8BallScreen}
              alt=""
              className="absolute"
              style={{ left: 127.82, top: 127.82, width: 145.991, height: 145.991 }}
            />
            {/* Triangle + text as a single layered group */}
            <div className="absolute" style={{ left: 148.6, top: 143, width: 104.411, height: 90.42 }}>
              <img src={img8BallTriangle} alt="" className="w-full h-full" />
              {response && (
                <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingTop: 28 }}>
                  <p
                    className="text-center uppercase font-bold text-white"
                    style={{ fontSize: 7.5, lineHeight: 1.35, width: 58 }}
                  >
                    {response}
                  </p>
                </div>
              )}
            </div>
            {/* Pink star — upper-left of screen window */}
            <img
              src={img8BallStar}
              alt=""
              className="absolute"
              style={{
                left: 124,
                top: 121,
                width: 50,
                height: 52,
                animation: 'sparkle-float 3s ease-in-out infinite',
                filter: 'drop-shadow(0 0 6px rgba(222,150,255,0.85))',
              }}
            />
          </button>
        </div>

        {/* Polaroid Photo 1 - girl smiling */}
        <div
          className="absolute left-[730px] top-[467px]"
          style={{ transform: 'rotate(12.77deg)' }}
        >
          <div className={`${theme === 'dark' ? 'bg-[#252525]' : 'bg-bg-secondary'} border-2 border-[rgba(0,0,0,0.08)] rounded-lg p-2.5 pb-14 w-[240px]`}>
            <img
              src={imgPolaroid1}
              alt="Polaroid photo"
              className="w-full h-[200px] object-cover rounded-sm grayscale"
            />
          </div>
        </div>

        {/* Polaroid Photo 2 - girl with dog */}
        <div
          className="absolute left-[870px] top-[659px]"
          style={{ transform: 'rotate(-8.46deg)' }}
        >
          <div className={`${theme === 'dark' ? 'bg-[#252525]' : 'bg-bg-secondary'} border-2 border-[rgba(0,0,0,0.08)] rounded-lg p-2.5 pb-14 w-[240px]`}>
            <img
              src={imgPolaroid2}
              alt="Polaroid photo"
              className="w-full h-[200px] object-cover rounded-sm grayscale"
            />
          </div>
        </div>

        {/* Camera - Bottom Left */}
        <div className="absolute left-[183px] top-[753px] w-[489px] h-[309px]">
          <img
            src={imgCamera}
            alt="Ricoh camera"
            className="w-full h-full object-cover"
          />
          {/* Camera screen overlay */}
          <div className="absolute left-[37px] top-[82px] w-[304px] h-[192px]">
            <img
              src={imgCameraScreen}
              alt="Camera screen landscape"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
