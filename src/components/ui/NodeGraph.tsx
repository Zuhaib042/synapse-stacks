/**
 * NodeGraph — decorative SVG background used on hero sections.
 * Replaces the colorful circle motif with a technical node-graph pattern
 * that references the engineering/infrastructure theme.
 */

interface NodeGraphProps {
  viewBox?: string
  className?: string
  opacity?: number
}

export function NodeGraph({
  viewBox = '0 0 1440 900',
  className = '',
  opacity = 1,
}: NodeGraphProps) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* Connection lines */}
      <g stroke="#1C1914" strokeWidth="1" fill="none" opacity="0.12">
        <line x1="72" y1="180" x2="260" y2="135" />
        <line x1="72" y1="180" x2="170" y2="400" />
        <line x1="170" y1="400" x2="115" y2="630" />
        <line x1="260" y1="135" x2="430" y2="90" />
        <line x1="260" y1="135" x2="400" y2="315" />
        <line x1="170" y1="400" x2="400" y2="315" />
        <line x1="400" y1="315" x2="430" y2="90" />
        <line x1="400" y1="315" x2="605" y2="225" />
        <line x1="430" y1="90" x2="648" y2="45" />
        <line x1="648" y1="45" x2="605" y2="225" />
        <line x1="605" y1="225" x2="690" y2="450" />
        <line x1="690" y1="450" x2="505" y2="585" />
        <line x1="690" y1="450" x2="865" y2="390" />
        <line x1="865" y1="390" x2="865" y2="135" />
        <line x1="865" y1="135" x2="648" y2="45" />
        <line x1="865" y1="135" x2="1080" y2="90" />
        <line x1="865" y1="390" x2="1010" y2="585" />
        <line x1="1080" y1="90" x2="1225" y2="180" />
        <line x1="1225" y1="180" x2="1080" y2="405" />
        <line x1="1080" y1="405" x2="1010" y2="585" />
        <line x1="1225" y1="180" x2="1370" y2="300" />
        <line x1="1370" y1="300" x2="1300" y2="540" />
        <line x1="1300" y1="540" x2="1080" y2="405" />
        <line x1="115" y1="630" x2="505" y2="585" />
        <line x1="505" y1="585" x2="790" y2="720" />
        <line x1="1010" y1="585" x2="790" y2="720" />
        <line x1="1185" y1="720" x2="1300" y2="540" />
      </g>

      {/* Nodes */}
      <g fill="#1C1914" opacity="0.18">
        <circle cx="72" cy="180" r="3.5" />
        <circle cx="170" cy="400" r="3.5" />
        <circle cx="115" cy="630" r="3.5" />
        <circle cx="260" cy="135" r="3.5" />
        <circle cx="400" cy="315" r="3.5" />
        <circle cx="430" cy="90" r="3.5" />
        <circle cx="505" cy="585" r="3.5" />
        <circle cx="648" cy="45" r="3.5" />
        <circle cx="605" cy="225" r="3.5" />
        <circle cx="690" cy="450" r="3.5" />
        <circle cx="790" cy="720" r="3.5" />
        <circle cx="865" cy="135" r="3.5" />
        <circle cx="865" cy="390" r="3.5" />
        <circle cx="1010" cy="585" r="3.5" />
        <circle cx="1080" cy="90" r="3.5" />
        <circle cx="1080" cy="405" r="3.5" />
        <circle cx="1185" cy="720" r="3.5" />
        <circle cx="1225" cy="180" r="3.5" />
        <circle cx="1300" cy="540" r="3.5" />
        <circle cx="1370" cy="300" r="3.5" />
      </g>

      {/* Highlighted accent nodes */}
      <circle cx="865" cy="135" r="6" fill="#3B5BDB" opacity="0.35" />
      <circle cx="605" cy="225" r="5" fill="#D9AE2A" opacity="0.45" />
      <circle cx="1225" cy="180" r="5" fill="#3B5BDB" opacity="0.3" />
      <circle cx="690" cy="450" r="5" fill="#D9AE2A" opacity="0.35" />
    </svg>
  )
}

/* Smaller variant for page heroes (right-side decoration) */
export function NodeGraphSmall({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#1C1914" strokeWidth="1" fill="none" opacity="0.08">
        <line x1="900" y1="40" x2="1100" y2="120" />
        <line x1="1100" y1="120" x2="1280" y2="60" />
        <line x1="1100" y1="120" x2="1060" y2="280" />
        <line x1="1280" y1="60" x2="1380" y2="200" />
        <line x1="1380" y1="200" x2="1060" y2="280" />
        <line x1="900" y1="40" x2="1060" y2="280" />
        <line x1="1060" y1="280" x2="1200" y2="400" />
        <line x1="1380" y1="200" x2="1420" y2="380" />
      </g>
      <g fill="#1C1914" opacity="0.15">
        <circle cx="900" cy="40" r="3" />
        <circle cx="1100" cy="120" r="3" />
        <circle cx="1280" cy="60" r="3" />
        <circle cx="1060" cy="280" r="3" />
        <circle cx="1380" cy="200" r="3" />
        <circle cx="1200" cy="400" r="3" />
        <circle cx="1420" cy="380" r="3" />
      </g>
      <circle cx="1100" cy="120" r="5" fill="#3B5BDB" opacity="0.3" />
      <circle cx="1280" cy="60" r="4" fill="#D9AE2A" opacity="0.4" />
    </svg>
  )
}
