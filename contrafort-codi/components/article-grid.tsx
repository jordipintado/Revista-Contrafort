import Link from "next/link"
import { BiasIndicator } from "@/components/bias-indicator"
import { getAllArticles } from "@/lib/articles-data"

export function ArticleGrid() {
  const articles = getAllArticles()

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {articles.map((article) => (
        <article key={article.id} className="group">
          <Link href={`/article/${article.id}`} className="block">
            <div className="bg-card border border-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article image placeholder */}
              <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>

              <div className="p-6">
                {/* Section badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{article.section}</span>
                  <BiasIndicator bias={article.bias} size="sm" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-balance leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
