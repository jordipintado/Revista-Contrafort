interface BiasIndicatorProps {
  bias: { x: number; y: number }
  size?: "sm" | "md" | "lg"
}

export function BiasIndicator({ bias, size = "md" }: BiasIndicatorProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  // Convert bias coordinates (-1 to 1) to position (0 to 100%)
  const x = ((bias.x + 1) / 2) * 100
  const y = ((1 - bias.y) / 2) * 100

  return (
    <div
      className={`${sizeClasses[size]} relative border border-border rounded-sm bg-muted/30`}
      title="Diagrama de Nolan"
    >
      {/* Grid lines */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
      </div>

      {/* Bias point */}
      <div
        className="absolute w-1.5 h-1.5 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${x}%`, top: `${y}%` }}
      />
    </div>
  )
}
