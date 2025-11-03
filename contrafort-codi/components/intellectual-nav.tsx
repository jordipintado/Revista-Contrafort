import Link from "next/link"

const intellectuals = [
  {
    name: "Gaziel",
    slug: "gaziel",
    description: "Periodisme internacional i anàlisi",
  },
  {
    name: "Joan Fuster",
    slug: "fuster",
    description: "Periodisme nacional i social",
  },
  {
    name: "Sales/Rodoreda",
    slug: "sales-rodoreda",
    description: "Periodisme literari",
  },
  {
    name: "Salvador Espriu",
    slug: "espriu",
    description: "Podcast",
  },
]

export function IntellectualNav() {
  return (
    <nav className="border-b-2 border-foreground bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {intellectuals.map((intellectual, index) => (
            <Link
              key={intellectual.slug}
              href={`/seccio/${intellectual.slug}`}
              className={`group bg-background hover:bg-muted transition-colors p-8 flex flex-col items-center gap-4 ${
                index < intellectuals.length - 1 ? "border-r-2 border-foreground" : ""
              }`}
            >
              <div className="w-20 h-20 relative">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-foreground opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  {/* Detailed profile silhouette */}
                  <ellipse cx="50" cy="35" rx="18" ry="22" fill="currentColor" />
                  <path
                    d="M32,55 Q32,48 38,45 L38,58 Q35,62 35,68 L35,85 Q40,90 50,90 Q60,90 65,85 L65,68 Q65,62 62,58 L62,45 Q68,48 68,55 L68,95 L32,95 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base mb-1 tracking-wide uppercase">{intellectual.name}</h3>
                <p className="text-xs text-muted-foreground tracking-wide">{intellectual.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
