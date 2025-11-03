import Link from "next/link"
import { ContrafortLogo } from "@/components/contrafort-logo"
import { IntellectualNav } from "@/components/intellectual-nav"
import { ArticleGrid } from "@/components/article-grid"
import { ModernistPattern } from "@/components/modernist-pattern"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <ModernistPattern />

      {/* Header */}
      <header className="border-b-2 border-foreground bg-background relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <ContrafortLogo />
              <div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground">CONTRAFORT</h1>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-1">Revista d'Assaig</p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Intellectual Navigation */}
      <IntellectualNav />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-balance mb-6">Últimes Publicacions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Assaigs, anàlisis i periodisme narratiu inspirat pels grans intel·lectuals catalans
          </p>
        </div>

        <ArticleGrid />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-foreground bg-background mt-32 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground tracking-wide">© 2025 Contrafort. Tots els drets reservats.</p>
            <div className="flex gap-8">
              <Link
                href="/sobre"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                Sobre nosaltres
              </Link>
              <Link
                href="/contacte"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                Contacte
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
