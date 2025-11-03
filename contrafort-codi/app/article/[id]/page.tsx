import Link from "next/link"
import { ContrafortLogo } from "@/components/contrafort-logo"
import { BiasIndicator } from "@/components/bias-indicator"
import { getArticleById } from "@/lib/articles-data"

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(Number(params.id))

  if (!article) {
    return <div>Article no trobat</div>
  }

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

      {/* Article */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="mb-8">
            <Link
              href={`/seccio/${article.sectionSlug}`}
              className="text-sm font-semibold text-primary uppercase tracking-wide hover:underline"
            >
              {article.section}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 text-balance leading-tight">{article.title}</h1>

          {/* Author and meta */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex-1">
              <p className="font-semibold">{article.author}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Bias and Inspirations */}
          <div className="bg-muted/30 border border-border rounded-sm p-6 mb-12">
            <div className="flex items-start gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Orientació ideològica</h3>
                <BiasIndicator bias={article.bias} size="lg" />
                <p className="text-xs text-muted-foreground mt-2">Diagrama de Nolan</p>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">Figures inspiradores</h3>
                <div className="space-y-2">
                  {article.inspirations.map((inspiration) => (
                    <div key={inspiration.name} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-foreground/10" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{inspiration.name}</p>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${inspiration.influence * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75",
            }}
          />
        </div>
      </article>
    </div>
  )
}
