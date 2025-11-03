import Link from "next/link"
import { ContrafortLogo } from "@/components/contrafort-logo"
import { IntellectualNav } from "@/components/intellectual-nav"
import { BiasIndicator } from "@/components/bias-indicator"
import { getArticlesBySection } from "@/lib/articles-data"

const sections = {
  gaziel: {
    name: "Gaziel",
    fullName: "Agustí Calvet (Gaziel)",
    years: "1887-1964",
    description:
      "Periodista, escriptor i crític d'art català, considerat un dels millors periodistes en llengua catalana del segle XX.",
    justification:
      "Gaziel va ser un mestre del periodisme internacional i l'anàlisi política. La seva capacitat per interpretar els esdeveniments europeus amb lucidesa i elegància literària el converteix en el referent perfecte per a la secció de periodisme internacional i anàlisi de Contrafort.",
    color: "bg-primary",
  },
  fuster: {
    name: "Joan Fuster",
    fullName: "Joan Fuster i Ortells",
    years: "1922-1992",
    description: "Assagista, escriptor i intel·lectual valencià, figura clau del catalanisme contemporani.",
    justification:
      "Joan Fuster va ser un pensador incisiu sobre la identitat, la llengua i la societat catalanes. El seu esperit crític i la seva capacitat d'anàlisi social el fan el referent ideal per a la secció de periodisme nacional i social de Contrafort.",
    color: "bg-secondary",
  },
  "sales-rodoreda": {
    name: "Sales/Rodoreda",
    fullName: "Joan Sales i Mercè Rodoreda",
    years: "1912-1983 / 1908-1983",
    description: "Dos dels escriptors catalans més importants del segle XX, mestres de la narrativa literària.",
    justification:
      "Joan Sales i Mercè Rodoreda representen l'excel·lència de la literatura catalana. La seva capacitat per capturar la condició humana a través de la ficció els converteix en els referents perfectes per a la secció de periodisme literari de Contrafort.",
    color: "bg-accent",
  },
  espriu: {
    name: "Salvador Espriu",
    fullName: "Salvador Espriu i Castelló",
    years: "1913-1985",
    description: "Poeta i escriptor català, una de les veus més importants de la literatura catalana del segle XX.",
    justification:
      "Salvador Espriu va ser un poeta profund i reflexiu, capaç de combinar la tradició amb la modernitat. La seva veu poètica i contemplativa el fa el referent ideal per a la secció de podcast de Contrafort, on la paraula parlada i la reflexió es troben.",
    color: "bg-muted",
  },
}

export default function SectionPage({ params }: { params: { slug: string } }) {
  const section = sections[params.slug as keyof typeof sections]

  if (!section) {
    return <div>Secció no trobada</div>
  }

  const sectionArticles = getArticlesBySection(params.slug)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ContrafortLogo />
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Contrafort</h1>
                <p className="text-sm text-muted-foreground">Revista d'Assaig</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Intellectual Navigation */}
      <IntellectualNav />

      {/* Section Hero */}
      <div className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-8 mb-8">
              {/* Silhouette */}
              <div
                className={`w-32 h-32 rounded-full ${section.color} opacity-20 flex items-center justify-center flex-shrink-0`}
              >
                <div className="w-24 h-24 rounded-full bg-foreground/10" />
              </div>

              <div>
                <h2 className="text-5xl font-bold mb-2 text-balance">{section.fullName}</h2>
                <p className="text-lg text-muted-foreground mb-4">{section.years}</p>
                <p className="text-lg leading-relaxed text-pretty">{section.description}</p>
              </div>
            </div>

            {/* Justification */}
            <div className="bg-card border border-border rounded-sm p-6">
              <h3 className="text-xl font-bold mb-3">Per què {section.name}?</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{section.justification}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Articles</h3>

          <div className="space-y-8">
            {sectionArticles.map((article) => (
              <article key={article.id} className="group">
                <Link href={`/article/${article.id}`} className="block">
                  <div className="bg-card border border-border rounded-sm p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">{section.name}</span>
                      <BiasIndicator bias={article.bias} size="sm" />
                    </div>

                    <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">
                      {article.title}
                    </h4>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{article.excerpt}</p>

                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
