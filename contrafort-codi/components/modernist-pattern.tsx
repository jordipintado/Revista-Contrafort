export function ModernistPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
      {/* Modernist cobblestone pattern inspired by Gaudí's trencadís */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cobblestone" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Irregular hexagonal cobblestones */}
            <path d="M30,10 L50,5 L70,10 L75,30 L70,50 L50,55 L30,50 L25,30 Z" fill="currentColor" />
            <path d="M80,15 L95,12 L110,18 L112,35 L105,50 L90,52 L78,45 L76,28 Z" fill="currentColor" />
            <path d="M10,60 L28,58 L42,65 L45,82 L38,98 L20,102 L8,95 L5,78 Z" fill="currentColor" />
            <path d="M60,70 L78,68 L92,75 L95,92 L88,108 L70,112 L58,105 L55,88 Z" fill="currentColor" />
            <path d="M100,80 L115,78 L125,88 L125,105 L115,115 L100,115 L92,105 L92,90 Z" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cobblestone)" />
      </svg>

      {/* Subtle author silhouettes in corners */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-50">
        <svg viewBox="0 0 200 200" fill="currentColor">
          {/* Abstract profile silhouette */}
          <path d="M100,20 Q120,25 130,45 Q135,65 130,85 Q125,95 115,100 L115,140 Q120,145 120,155 L120,180 L80,180 L80,155 Q80,145 85,140 L85,100 Q75,95 70,85 Q65,65 70,45 Q80,25 100,20 Z" />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 w-56 h-56 opacity-50">
        <svg viewBox="0 0 200 200" fill="currentColor">
          {/* Another abstract profile */}
          <path d="M90,30 Q105,28 115,40 Q122,55 120,70 Q118,85 110,95 L110,130 Q115,135 115,145 L115,170 L85,170 L85,145 Q85,135 90,130 L90,95 Q82,85 80,70 Q78,55 85,40 Q95,28 90,30 Z" />
        </svg>
      </div>
    </div>
  )
}
