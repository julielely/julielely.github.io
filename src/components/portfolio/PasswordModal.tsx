import { useState, useEffect, useRef } from "react";
import type { Project } from "../../content/projects/schema";

// Change this to your desired password
const PORTFOLIO_PASSWORD = "smiley";

interface PasswordModalProps {
  project: Project;
  onClose: () => void;
}

export function PasswordModal({ project, onClose }: PasswordModalProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PORTFOLIO_PASSWORD) {
      window.open(project.primaryLink.url, "_blank", "noopener,noreferrer");
      onClose();
    } else {
      setError(true);
      setValue("");
      inputRef.current?.focus();
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (error) setError(false);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-bg-primary border border-stroke-primary rounded-2xl shadow-xl p-6 flex flex-col gap-5">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg text-content-secondary hover:bg-hover-bg hover:text-content-primary transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Header */}
        <div className="flex flex-col gap-1 pr-6">
          <p
            className="text-xs font-bold uppercase tracking-wide"
            style={{ color: project.company.brandColor }}
          >
            {project.company.name}
          </p>
          <h2
            id="modal-title"
            className="text-lg font-semibold text-content-primary leading-snug"
          >
            {project.card.title}
          </h2>
          <p className="text-sm text-content-secondary leading-relaxed">
            This case study is password protected. Enter the password to view it.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <input
              ref={inputRef}
              type="password"
              value={value}
              onChange={handleChange}
              placeholder="Password"
              aria-label="Password"
              aria-describedby={error ? "password-error" : undefined}
              aria-invalid={error}
              className={`w-full px-3 py-2.5 rounded-lg border text-sm bg-bg-secondary text-content-primary placeholder:text-content-secondary outline-none transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                error
                  ? "border-red-400 focus:ring-red-400"
                  : "border-stroke-primary"
              }`}
            />
            {error && (
              <p id="password-error" role="alert" className="text-xs text-red-500">
                Incorrect password. Try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-lg bg-content-primary text-bg-primary text-sm font-medium transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View case study
          </button>
        </form>
      </div>
    </div>
  );
}
