import React from "react";

interface GroupNodeProps {
  data: {
    label: string;
    borderColor: string;
    width: number;
    height: number;
  };
}

export function GroupNode({ data }: GroupNodeProps) {
  const { label, borderColor, width, height } = data;

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: `1px solid ${borderColor}`,
        borderRadius: "4px",
        position: "relative",
        pointerEvents: "none",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "-10px",
          left: "8px",
          backgroundColor: "#2d2d2d",
          padding: "0 4px",
          fontSize: "11px",
          color: borderColor,
          fontFamily: "monospace",
        }}
      >
        {label}
      </span>
    </div>
  );
}
