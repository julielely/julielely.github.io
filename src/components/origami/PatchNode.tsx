import { Handle, Position } from "reactflow";
import { Patch, PatchProps } from "./Patch";

interface PatchNodeProps {
  data: PatchProps & {
    hasInputs?: boolean;
    hasOutputs?: boolean;
  };
}

export function PatchNode({ data }: PatchNodeProps) {
  const { hasInputs = true, hasOutputs = true, ...patchProps } = data;

  const handleStyle = {
    width: "4px",
    height: "4px",
    background: "white",
    border: "none",
    borderRadius: "50%",
    opacity: 0.6,
  };

  const headerHeight = patchProps.subtitle ? 24 : 18;
  const rowHeight = 10;
  const rowGap = 2;
  const contentPadding = 4;

  const getRowPosition = (rowIndex: number) => {
    return headerHeight + contentPadding + rowIndex * (rowHeight + rowGap) + rowHeight / 2;
  };

  return (
    <div className="patch-node">
      {hasInputs &&
        patchProps.rows?.map((row, idx) =>
          row.input ? (
            <Handle
              key={`input-${idx}`}
              type="target"
              position={Position.Left}
              id={`input-${idx}`}
              style={{ ...handleStyle, top: `${getRowPosition(idx)}px`, left: "-2px" }}
            />
          ) : null
        )}

      <Patch {...patchProps} />

      {hasOutputs &&
        patchProps.rows?.map((row, idx) =>
          row.output && (row.output.label || row.output.value) ? (
            <Handle
              key={`output-${idx}`}
              type="source"
              position={Position.Right}
              id={`output-${idx}`}
              style={{ ...handleStyle, top: `${getRowPosition(idx)}px`, right: "-2px" }}
            />
          ) : null
        )}
    </div>
  );
}
