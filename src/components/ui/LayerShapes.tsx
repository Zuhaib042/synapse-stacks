/**
 * LayerShapes — decorative SVG showing stacked wireframe rectangles.
 * Used inside dark "visual" panels to reinforce the infrastructure/layering metaphor.
 * Replaces colorful circles with a technical engineering motif.
 */
export function LayerShapes({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 420"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <rect
        x="40" y="24" width="400" height="64" rx="6"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none"
      />
      <rect
        x="24" y="104" width="400" height="64" rx="6"
        stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none"
      />
      <rect
        x="8" y="184" width="400" height="64" rx="6"
        stroke="rgba(255,255,255,0.06)" strokeWidth="1" fill="none"
      />
      {/* Connector lines between layers */}
      <line x1="100" y1="88" x2="84" y2="104" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="300" y1="88" x2="284" y2="104" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="84" y1="168" x2="68" y2="184" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      <line x1="284" y1="168" x2="268" y2="184" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      {/* Node dots */}
      <circle cx="100" cy="56" r="3" fill="rgba(242,200,75,0.5)" />
      <circle cx="200" cy="56" r="3" fill="rgba(255,255,255,0.2)" />
      <circle cx="300" cy="56" r="3" fill="rgba(255,255,255,0.2)" />
      <circle cx="84" cy="136" r="3" fill="rgba(91,142,240,0.5)" />
      <circle cx="184" cy="136" r="3" fill="rgba(255,255,255,0.2)" />
      <circle cx="284" cy="136" r="3" fill="rgba(255,255,255,0.2)" />
    </svg>
  )
}
