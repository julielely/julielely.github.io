// Static Origami Patch Graph - matches Figma design exactly
export function PatchGraph() {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden" style={{ background: "#2D2D2D" }}>
      <div className="absolute inset-0" style={{ transform: "scale(0.65)", transformOrigin: "top left", padding: 20 }}>

        {/* ===== LEFT SIDE ===== */}

        {/* experience.json - orange, outside groups */}
        <div className="absolute" style={{ left: 20, top: 160 }}>
          <Patch
            type="JSON"
            title="experience.json"
            rows={[
              { leftDot: true, leftText: "400", rightText: "400", rightLabel: "Array", rightDot: true },
              { leftText: "0", leftLabel: "Index", rightDot: true },
            ]}
          />
        </div>

        {/* Loop Over Array - blue */}
        <div className="absolute" style={{ left: 140, top: 147 }}>
          <Patch
            type="Loop"
            title="Loop Over Array"
            rows={[
              { leftDot: true, leftLabel: "Array", leftText: "400", rightText: "[...]", rightLabel: "Items", rightDot: true },
              { leftLabel: "Index", rightDot: true },
            ]}
          />
        </div>

        {/* card content group - BLUE border */}
        <Group label="card content" color="#3B82F6" x={190} y={125} width={290} height={235}>
          {/* companyName */}
          <div className="absolute" style={{ left: 0, top: 0 }}>
            <Patch
              type="Variable Receiver"
              title="companyName"
              subtitle="Value for Key"
              rows={[
                { leftObject: true, leftLabel: "Object", leftText: "{...}", rightText: "FIS", rightLabel: "Value", rightDot: true },
                { leftDot: true, leftLabel: "Key", leftText: "company" },
              ]}
            />
          </div>
          {/* Card */}
          <div className="absolute" style={{ left: 160, top: 3 }}>
            <Patch
              type="Property"
              title="Card"
              rows={[{ leftDot: true, leftLabel: "Content Company", leftText: "FIS" }]}
              hasIcon
            />
          </div>

          {/* teamName */}
          <div className="absolute" style={{ left: 0, top: 70 }}>
            <Patch
              type="Variable Receiver"
              title="teamName"
              subtitle="Value for Key"
              rows={[
                { leftObject: true, leftLabel: "Object", leftText: "{...}", rightText: "Design", rightLabel: "Value", rightDot: true },
                { leftDot: true, leftLabel: "Key", leftText: "team" },
              ]}
            />
          </div>
          {/* Card */}
          <div className="absolute" style={{ left: 160, top: 73 }}>
            <Patch
              type="Property"
              title="Card"
              rows={[{ leftDot: true, leftLabel: "Content Team", leftText: "Design" }]}
              hasIcon
            />
          </div>

          {/* description */}
          <div className="absolute" style={{ left: 0, top: 140 }}>
            <Patch
              type="Variable Receiver"
              title="description"
              subtitle="Value for Key"
              rows={[
                { leftObject: true, leftLabel: "Object", leftText: "{...}", rightText: "Built", rightLabel: "Value", rightDot: true },
                { leftDot: true, leftLabel: "Key", leftText: "description" },
              ]}
            />
          </div>
          {/* Card */}
          <div className="absolute" style={{ left: 160, top: 143 }}>
            <Patch
              type="Property"
              title="Card"
              rows={[{ leftDot: true, leftLabel: "Content Description", leftText: "B..." }]}
              hasIcon
            />
          </div>
        </Group>

        {/* logo.dev api group - ORANGE border */}
        <Group label="logo.dev api" color="#D97706" x={190} y={375} width={290} height={100}>
          <div className="absolute" style={{ left: 0, top: 0 }}>
            <Patch
              type="Variable Receiver"
              title="logo"
              subtitle="Value at Path"
              rows={[
                { leftObject: true, leftLabel: "Object", leftText: "{...}", rightText: "https", rightLabel: "Value", rightDot: true },
                { leftDot: true, leftLabel: "Key", leftText: "asset.logo" },
              ]}
            />
          </div>
          <div className="absolute" style={{ left: 160, top: 3 }}>
            <Patch
              type="Property"
              title="Card"
              rows={[{ leftDot: true, leftLabel: "Content Logo", leftText: "https" }]}
              hasIcon
            />
          </div>
        </Group>

        {/* ===== RIGHT SIDE ===== */}

        {/* scroll behavior group - BLUE border */}
        <Group label="scroll behavior" color="#3B82F6" x={500} y={35} width={620} height={185}>
          {/* cardWidth */}
          <div className="absolute" style={{ left: 0, top: 0 }}>
            <Patch
              type="Variable Receiver"
              title="cardWidth"
              rows={[{ leftReceiver: true, leftText: "368", rightText: "368", rightDot: true }]}
            />
          </div>
          {/* size */}
          <div className="absolute" style={{ left: 100, top: 0 }}>
            <Patch
              type="Splitter"
              title="size"
              rows={[
                { leftDot: true, leftLabel: "W", leftText: "368" },
                { leftDot: true, leftLabel: "H", leftText: "400" },
              ]}
            />
          </div>
          {/* Scroll Settings */}
          <div className="absolute" style={{ left: 180, top: 0 }}>
            <Patch
              type="Splitter"
              title="Scroll Settings"
              width={140}
              rows={[
                { leftLabel: "Content Size", leftText: "W 0", rightLabel: "H", rightText: "400" },
                { leftLabel: "Direction Locking", leftBool: true },
                { leftLabel: "Page Size", leftText: "W 368", rightLabel: "H", rightText: "400" },
                { leftLabel: "Page Padding", leftText: "W 16", rightLabel: "H", rightText: "0" },
                { leftLabel: "Jump State X", leftText: "Animate" },
                { leftLabel: "Jump State Y" },
                { leftLabel: "Jump to X", leftBool: true },
                { leftLabel: "Jump Position X", leftText: "-852" },
                { leftLabel: "Jump Style Y", leftText: "Instant" },
                { leftLabel: "Jump to Y" },
                { leftLabel: "Jump Position Y", leftText: "0" },
                { leftLabel: "Deceleration Rate", leftText: "Normal" },
              ]}
            />
          </div>
          {/* changePage */}
          <div className="absolute" style={{ left: 180, top: 120 }}>
            <Patch
              type="Variable Receiver"
              title="changePage"
              rows={[{ leftPulse: true }]}
            />
          </div>
          {/* Scroll */}
          <div className="absolute" style={{ left: 375, top: 0 }}>
            <Patch
              type="Splitter"
              title="Scroll"
              width={130}
              rows={[
                { leftDot: true, leftLabel: "Content Layer", leftText: "Content", rightText: "-852", rightDot: true },
                { leftDot: true, leftLabel: "Enable", leftBool: true, rightText: "0", rightLabel: "Y", rightDot: true },
                { leftLabel: "Scroll X", leftText: "Paging", rightText: "3", rightLabel: "Page X", rightDot: true },
                { leftLabel: "Scroll Y", rightText: "0", rightLabel: "Page Y", rightDot: true },
                { leftLabel: "Settings", leftText: "{...}" },
              ]}
              hasIcon
            />
          </div>
          {/* Card */}
          <div className="absolute" style={{ left: 515, top: 0 }}>
            <Patch
              type="Property"
              title="Card"
              rows={[{ leftDot: true, leftLabel: "Position X", leftText: "-852" }]}
              hasIcon
            />
          </div>
        </Group>

        {/* position based on card width/padding group - BLUE border */}
        <Group label="position based on card width/padding" color="#3B82F6" x={500} y={235} width={360} height={160}>
          {/* cardWidth */}
          <div className="absolute" style={{ left: 0, top: 0 }}>
            <Patch
              type="Variable Receiver"
              title="cardWidth"
              rows={[{ leftReceiver: true, leftText: "368", rightText: "368", rightDot: true }]}
            />
          </div>
          {/* width of card */}
          <div className="absolute" style={{ left: 100, top: 0 }}>
            <Patch
              type="Splitter"
              title="width of card"
              rows={[
                { leftDot: true, leftText: "368", rightText: "-184", rightDot: true },
                { leftDot: true, leftText: "-1" },
              ]}
            />
          </div>
          {/* padding */}
          <div className="absolute" style={{ left: 210, top: 0 }}>
            <Patch
              type="Splitter"
              title="padding"
              rows={[
                { leftText: "-184", leftDot: true, rightText: "-852", rightDot: true },
                { leftDot: true, leftText: "48" },
              ]}
            />
          </div>
          {/* page */}
          <div className="absolute" style={{ left: 0, top: 65 }}>
            <Patch
              type="Variable Receiver"
              title="page"
              rows={[{ leftReceiver: true, leftText: "3" }]}
            />
          </div>
          {/* padding */}
          <div className="absolute" style={{ left: 100, top: 75 }}>
            <Patch
              type="Splitter"
              title="padding"
              rows={[
                { leftDot: true, leftText: "3", rightText: "48", rightDot: true },
                { leftDot: true, leftText: "16" },
              ]}
            />
          </div>
        </Group>

        {/* back/next group - PURPLE/MAGENTA border */}
        <Group label="back/next" color="#A855F7" x={500} y={410} width={470} height={165}>
          {/* Interaction Next */}
          <div className="absolute" style={{ left: 0, top: 0 }}>
            <Patch
              type="Loop"
              title="Interaction"
              rows={[
                { leftDot: true, leftLabel: "Layer", leftText: "Next", rightLabel: "Down", rightDot: true },
                { leftDot: true, leftLabel: "Enable", leftBool: true, rightLabel: "Tap", rightDot: true },
                { rightLabel: "Position", rightDot: true },
                { rightText: "0", rightLabel: "Force", rightDot: true },
              ]}
            />
          </div>
          {/* Interaction Back */}
          <div className="absolute" style={{ left: 0, top: 80 }}>
            <Patch
              type="Loop"
              title="Interaction"
              rows={[
                { leftDot: true, leftLabel: "Layer", leftText: "Back", rightLabel: "Down", rightDot: true },
                { leftDot: true, leftLabel: "Enable", leftBool: true, rightLabel: "Tap", rightDot: true },
                { rightLabel: "Position", rightDot: true },
                { rightText: "0", rightLabel: "Force", rightDot: true },
              ]}
            />
          </div>
          {/* Counter */}
          <div className="absolute" style={{ left: 130, top: 0 }}>
            <Patch
              type="Splitter"
              title="Counter"
              rows={[
                { leftDot: true, leftLabel: "Increase", leftBool: true, rightText: "3", rightDot: true },
                { leftDot: true, leftLabel: "Decrease", leftBool: true },
                { leftDot: true, leftLabel: "Jump", leftBool: true },
                { leftDot: true, leftLabel: "Jump to Number", leftText: "0" },
                { leftLabel: "Maximum Count", leftText: "4" },
              ]}
            />
          </div>
          {/* page */}
          <div className="absolute" style={{ left: 265, top: 0 }}>
            <Patch
              type="Variable Broadcaster"
              title="page"
              rows={[{ leftDot: true, leftText: "3", rightBroadcaster: true }]}
            />
          </div>
          {/* Pulse on Change */}
          <div className="absolute" style={{ left: 265, top: 50 }}>
            <Patch
              type="Splitter"
              title="Pulse on Change"
              rows={[{ leftDot: true, leftLabel: "Value", leftText: "3", rightPulse: true }]}
            />
          </div>
          {/* changePage */}
          <div className="absolute" style={{ left: 370, top: 50 }}>
            <Patch
              type="Variable Broadcaster"
              title="changePage"
              rows={[{ leftPulse: true, rightBroadcaster: true }]}
            />
          </div>
        </Group>

        {/* slaps group - BLUE border */}
        <Group label="slaps" color="#3B82F6" x={500} y={590} width={400} height={85}>
          {/* page */}
          <div className="absolute" style={{ left: 0, top: 0 }}>
            <Patch
              type="Variable Receiver"
              title="page"
              rows={[{ leftReceiver: true, leftText: "3", rightText: "3", rightDot: true }]}
            />
          </div>
          {/* + */}
          <div className="absolute" style={{ left: 80, top: 0 }}>
            <Patch
              type="Splitter"
              title="+"
              rows={[
                { leftDot: true, leftText: "3", rightText: "4", rightDot: true },
                { leftDot: true, leftText: "1" },
              ]}
            />
          </div>
          {/* + */}
          <div className="absolute" style={{ left: 160, top: 0 }}>
            <Patch
              type="Splitter"
              title="+"
              rows={[
                { leftDot: true, leftText: "4", rightText: "4 of 4", rightDot: true },
                { leftDot: true, leftLabel: "of", leftText: "4" },
              ]}
            />
          </div>
          {/* Card */}
          <div className="absolute" style={{ left: 275, top: 0 }}>
            <Patch
              type="Property"
              title="Card"
              rows={[{ leftDot: true, leftLabel: "Typography Text", leftText: "4 of 4" }]}
              hasIcon
            />
          </div>
        </Group>

        {/* Connection lines (noodles) */}
        <svg className="absolute inset-0 pointer-events-none" style={{ width: 1200, height: 800 }}>
          {/* experience.json to Loop Over Array */}
          <path d="M 115 178 C 125 178 130 175 140 175" stroke="#9CA38F" strokeWidth="1.5" fill="none" />
          {/* Loop to card content patches */}
          <path d="M 230 165 C 245 165 200 155 205 165" stroke="#9CA38F" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </div>
  );
}

// Group container component - matches Figma commentWrapper design
function Group({
  label,
  color,
  x,
  y,
  width,
  height,
  children,
}: {
  label: string;
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute flex flex-col overflow-hidden"
      style={{
        left: x,
        top: y,
        width,
        height,
        border: `2px solid ${color}`,
        borderRadius: 4,
      }}
    >
      {/* Header with solid background */}
      <div
        className="shrink-0 w-full"
        style={{
          background: color,
          padding: "6px 14px 8px 14px",
        }}
      >
        <span
          className="font-medium text-white leading-[1.5] whitespace-nowrap"
          style={{
            fontSize: 12,
            letterSpacing: -0.24,
          }}
        >
          {label}
        </span>
      </div>
      {/* Content area */}
      <div className="relative flex-1" style={{ padding: "8px 14px" }}>
        {children}
      </div>
    </div>
  );
}

// Patch row type
interface PatchRow {
  leftDot?: boolean;
  leftObject?: boolean;
  leftReceiver?: boolean;
  leftPulse?: boolean;
  leftBool?: boolean;
  leftLabel?: string;
  leftText?: string;
  rightText?: string;
  rightLabel?: string;
  rightDot?: boolean;
  rightDot2?: boolean;
  rightBroadcaster?: boolean;
  rightPulse?: boolean;
}

// Color map for patch types
const patchColors: Record<string, string> = {
  Splitter: "#5F6B76",
  Loop: "#3773DA",
  JSON: "#D97706",
  "Variable Receiver": "#7C3AED",
  "Variable Broadcaster": "#7C3AED",
  Property: "#3773DA",
};

// Patch component matching Figma exactly
function Patch({
  type,
  title,
  subtitle,
  rows,
  hasIcon,
  width = 100,
}: {
  type: "Splitter" | "Loop" | "JSON" | "Variable Receiver" | "Variable Broadcaster" | "Property";
  title: string;
  subtitle?: string;
  rows: PatchRow[];
  hasIcon?: boolean;
  width?: number;
}) {
  const color = patchColors[type];

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{
        width,
        borderRadius: 4,
        border: `1px solid ${color}`,
        background: color,
      }}
    >
      {/* Header */}
      <div className="px-2 py-[3px] text-center">
        <div
          className="font-extrabold text-white leading-[1.5] whitespace-nowrap overflow-hidden text-ellipsis"
          style={{ fontSize: 10, letterSpacing: -0.2 }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            className="text-white/70 leading-[1.5] whitespace-nowrap"
            style={{ fontSize: 8, letterSpacing: -0.16 }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className="flex flex-col gap-1 px-1.5 py-1"
        style={{ background: "rgba(27,31,36,0.5)" }}
      >
        {rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between">
            {/* Left side */}
            <div className="flex items-center gap-1 overflow-hidden">
              {row.leftDot && <Dot />}
              {row.leftObject && <ObjectDot />}
              {row.leftReceiver && <Receiver />}
              {row.leftPulse && <Pulse />}
              {row.leftBool && <Bool />}
              {row.leftLabel && (
                <span className="text-white/60 whitespace-nowrap" style={{ fontSize: 8 }}>
                  {row.leftLabel}
                </span>
              )}
              {row.leftText && (
                <span className="text-white whitespace-nowrap" style={{ fontSize: 8 }}>
                  {row.leftText}
                </span>
              )}
            </div>
            {/* Right side */}
            <div className="flex items-center gap-1 overflow-hidden justify-end">
              {row.rightText && (
                <span className="text-white whitespace-nowrap" style={{ fontSize: 8 }}>
                  {row.rightText}
                </span>
              )}
              {row.rightLabel && (
                <span className="text-white/60 whitespace-nowrap" style={{ fontSize: 8 }}>
                  {row.rightLabel}
                </span>
              )}
              {row.rightDot && <Dot />}
              {row.rightDot2 && <Dot />}
              {row.rightBroadcaster && <Broadcaster />}
              {row.rightPulse && <PulseOut />}
            </div>
          </div>
        ))}
      </div>

      {/* Icon footer */}
      {hasIcon && (
        <div className="flex px-1.5 py-0.5" style={{ background: "rgba(27,31,36,0.25)" }}>
          <div
            className="flex items-center justify-center"
            style={{
              width: 14,
              height: 14,
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 2,
            }}
          >
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <circle cx="5" cy="5" r="3.5" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

// Small utility components for patch elements
function Dot() {
  return (
    <svg width="4" height="6" viewBox="0 0 4 6" fill="none" className="shrink-0">
      <circle cx="2" cy="4" r="2" fill="white" fillOpacity="0.6" />
    </svg>
  );
}

function ObjectDot() {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="shrink-0">
      <circle cx="3" cy="3" r="2.5" fill="#D97706" />
    </svg>
  );
}

function Receiver() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="shrink-0">
      <rect x="1" y="1" width="6" height="6" rx="1" fill="#7C3AED" fillOpacity="0.8" />
    </svg>
  );
}

function Broadcaster() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="shrink-0">
      <rect x="1" y="1" width="6" height="6" rx="1" fill="#7C3AED" fillOpacity="0.8" />
    </svg>
  );
}

function Pulse() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
      <path
        opacity="0.5"
        d="M8 0C9.10457 0 10 0.895431 10 2V8C10 9.10457 9.10457 10 8 10H2C0.895431 10 0 9.10457 0 8V2C0 0.895431 0.895431 0 2 0H8ZM5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5Z"
        fill="white"
      />
    </svg>
  );
}

function PulseOut() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
      <path
        opacity="0.5"
        d="M8 0C9.10457 0 10 0.895431 10 2V8C10 9.10457 9.10457 10 8 10H2C0.895431 10 0 9.10457 0 8V2C0 0.895431 0.895431 0 2 0H8ZM5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5Z"
        fill="white"
      />
    </svg>
  );
}

function Bool() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
      <rect x="1" y="1" width="8" height="8" rx="1" stroke="white" strokeOpacity="0.4" strokeWidth="1" />
    </svg>
  );
}
