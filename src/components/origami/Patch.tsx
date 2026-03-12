import { GearIcon } from "./PatchIcons";

// Main Patch component - matches Figma Origami patch design
export interface PatchProps {
  type:
    | "Splitter"
    | "Loop"
    | "JSON"
    | "Variable Receiver"
    | "Variable Broadcaster"
    | "Property";
  title?: string;
  subtitle?: string;
  rows?: Array<{
    input?: {
      label?: string;
      value?: string;
      showLabel?: boolean;
      showValue?: boolean;
      startElement?: "dot" | "object" | "pulse" | "receiver";
    };
    output?: {
      label?: string;
      value?: string;
      showLabel?: boolean;
      showValue?: boolean;
      endElement?: "dot" | "broadcaster";
    };
  }>;
  showIcon?: boolean;
  className?: string;
}

export function Patch({
  type = "Splitter",
  title,
  subtitle,
  rows = [],
  showIcon = false,
  className = "",
}: PatchProps) {
  // Determine background color based on type - matches Figma exactly
  const bgColor: Record<string, string> = {
    Splitter: "#5F6B76",
    Loop: "#3773DA",
    JSON: "#D97706",
    "Variable Receiver": "#7C3AED",
    "Variable Broadcaster": "#7C3AED",
    Property: "#3773DA",
  };

  const headerBg = bgColor[type] || "#5F6B76";

  return (
    <div
      className={`flex flex-col rounded-[3px] overflow-hidden ${className}`}
      style={{ minWidth: "80px", maxWidth: "140px" }}
    >
      {/* Header */}
      <div
        className="px-2 py-[2px] text-center"
        style={{ backgroundColor: headerBg }}
      >
        <p className="text-[9px] font-bold text-white leading-tight whitespace-nowrap">
          {title}
        </p>
        {subtitle && (
          <p className="text-[7px] font-medium text-white/70 leading-tight whitespace-nowrap">
            {subtitle}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="bg-[#1B1F24] px-1 py-1 flex flex-col gap-[2px]">
        {rows.map((row, idx) => (
          <div key={idx} className="flex items-center justify-between gap-1">
            {/* Input side */}
            <div className="flex items-center gap-[2px] min-w-0 flex-shrink">
              {row.input?.startElement === "receiver" ? (
                <span className="text-[7px] text-purple-400">◆</span>
              ) : row.input?.startElement === "pulse" ? (
                <span className="text-[7px] text-yellow-400">◆</span>
              ) : row.input?.startElement === "object" ? (
                <span className="text-[7px] text-orange-400">●</span>
              ) : (
                <span className="text-[7px] text-white/60">•</span>
              )}
              {row.input?.showLabel !== false && row.input?.label && (
                <span className="text-[7px] text-white/70 whitespace-nowrap">
                  {row.input.label}
                </span>
              )}
              {row.input?.showValue !== false && row.input?.value && (
                <span className="text-[7px] text-white whitespace-nowrap">
                  {row.input.value}
                </span>
              )}
            </div>

            {/* Output side */}
            <div className="flex items-center gap-[2px] min-w-0 flex-shrink justify-end">
              {row.output?.showValue !== false && row.output?.value && (
                <span className="text-[7px] text-white whitespace-nowrap">
                  {row.output.value}
                </span>
              )}
              {row.output?.showLabel !== false && row.output?.label && (
                <span className="text-[7px] text-white/70 whitespace-nowrap">
                  {row.output.label}
                </span>
              )}
              {row.output?.endElement === "broadcaster" ? (
                <span className="text-[7px] text-purple-400">◆</span>
              ) : row.output?.label || row.output?.value ? (
                <span className="text-[7px] text-white/60">•</span>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Icon footer (only for Property type with showIcon) */}
      {showIcon && (
        <div className="bg-[#1B1F24]/50 flex items-center px-1 py-[2px]">
          <div className="border border-white/20 rounded-[2px] p-[1px]">
            <GearIcon />
          </div>
        </div>
      )}
    </div>
  );
}
