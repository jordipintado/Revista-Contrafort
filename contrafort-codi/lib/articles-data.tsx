// ============================================
// CONTRAFORT - ARTICLE DATA
// ============================================
// This file contains all articles for the magazine.
// To add a new article, simply copy the template below and fill in the fields.

// ============================================
// ARTICLE TEMPLATE - Copy this to add a new article
// ============================================
/*
{
  id: 999, // Use a unique number
  title: "El títol del teu article",
  section: "Gaziel", // Options: "Gaziel", "Joan Fuster", "Sales/Rodoreda", "Salvador Espriu"
  sectionSlug: "gaziel", // Options: "gaziel", "fuster", "sales-rodoreda", "espriu"
  excerpt: "Un resum breu de l'article que apareixerà a la portada i a les seccions.",
  author: "Nom de l'autor/a",
  date: "DD de mes, AAAA", // Example: "15 de gener, 2025"
  readTime: "XX min", // Example: "12 min" or "45 min" for podcasts
  
  // Nolan Chart coordinates (ideological orientation)
  // x: -1 (left) to 1 (right) | y: -1 (authoritarian) to 1 (libertarian)
  bias: { x: 0, y: 0 },
  
  // Full article content (use HTML tags)
  content: `
    <p>Primer paràgraf del teu article...</p>
    
    <h2>Subtítol</h2>
    
    <p>Més contingut...</p>
  `,
  
  // Inspirational figures (who influenced this article)
  inspirations: [
    { name: "Nom de la figura", influence: 0.8 }, // influence: 0 to 1
    { name: "Altra figura", influence: 0.6 },
  ],
},
*/

// ============================================
// ARTICLE TYPE DEFINITION
// ============================================
export type Article = {
  id: number
  title: string
  section: string
  sectionSlug: string
  excerpt: string
  author: string
  date: string
  readTime: string
  bias: { x: number; y: number }
  content: string
  inspirations: Array<{ name: string; influence: number }>
}

// ============================================
// ALL ARTICLES
// ============================================
export const articles: Article[] = [
  {
    id: 1,
    title: "La crisi europea i el futur de la democràcia",
    section: "Gaziel",
    sectionSlug: "gaziel",
    excerpt:
      "Una anàlisi profunda sobre els reptes que enfronta Europa en l'era de la globalització i els populismes emergents.",
    author: "Maria Puig",
    date: "15 de gener, 2025",
    readTime: "12 min",
    bias: { x: -0.3, y: 0.5 },
    content: `
      <p>Europa es troba en un moment crític de la seva història. Les institucions democràtiques que van sorgir després de la Segona Guerra Mundial s'enfronten a reptes sense precedents en l'era de la globalització i els populismes emergents.</p>

      <p>La crisi financera del 2008 va marcar un punt d'inflexió. Les polítiques d'austeritat imposades van erosionar la confiança ciutadana en les institucions europees, creant un terreny fèrtil per a moviments populistes que qüestionen els fonaments mateixos del projecte europeu.</p>

      <h2>El repte de la identitat europea</h2>

      <p>Un dels problemes centrals és la manca d'una identitat europea compartida. Mentre que els estats-nació mantenen identitats fortes, Europa com a projecte polític continua sent una abstracció per a molts ciutadans.</p>

      <p>Aquesta fragmentació identitària es manifesta en la creixent polarització política, amb moviments que reivindiquen tant la sobirania nacional com una major integració europea, però sense trobar un punt de trobada.</p>

      <h2>Perspectives de futur</h2>

      <p>El futur de la democràcia europea dependrà de la capacitat de les institucions per adaptar-se a les noves realitats socials i tecnològiques. La participació ciutadana, la transparència i la rendició de comptes seran claus per recuperar la confiança perduda.</p>
    `,
    inspirations: [
      { name: "Hannah Arendt", influence: 0.8 },
      { name: "Jürgen Habermas", influence: 0.6 },
      { name: "Josep Pla", influence: 0.4 },
    ],
  },
  {
    id: 2,
    title: "Identitat i llengua al segle XXI",
    section: "Joan Fuster",
    sectionSlug: "fuster",
    excerpt:
      "Reflexions sobre la identitat catalana contemporània i el paper de la llengua en la construcció nacional.",
    author: "Jordi Martí",
    date: "12 de gener, 2025",
    readTime: "15 min",
    bias: { x: -0.5, y: -0.2 },
    content: `
      <p>La identitat catalana al segle XXI es troba en un moment de redefinició. La globalització, les migracions i les noves tecnologies han transformat radicalment el context en què es desenvolupa la identitat col·lectiva.</p>

      <p>La llengua catalana, tradicionalment considerada un dels pilars de la identitat nacional, enfronta nous reptes en un món cada cop més interconnectat i multilingüe.</p>

      <h2>La llengua com a eina de cohesió</h2>

      <p>Malgrat els reptes, la llengua continua sent un element fonamental de cohesió social. No es tracta només d'un instrument de comunicació, sinó d'un vehicle de transmissió cultural i de construcció d'una comunitat imaginada.</p>

      <p>El futur de la identitat catalana dependrà de la capacitat d'integrar la diversitat sense perdre els elements que la fan única.</p>
    `,
    inspirations: [
      { name: "Joan Fuster", influence: 0.9 },
      { name: "Benedict Anderson", influence: 0.5 },
      { name: "Ernest Gellner", influence: 0.4 },
    ],
  },
  {
    id: 3,
    title: "Memòria i ficció: els límits de la narrativa",
    section: "Sales/Rodoreda",
    sectionSlug: "sales-rodoreda",
    excerpt: "Un assaig sobre com la literatura pot capturar la memòria col·lectiva i individual.",
    author: "Anna Soler",
    date: "10 de gener, 2025",
    readTime: "18 min",
    bias: { x: 0.1, y: 0.3 },
    content: `
      <p>La relació entre memòria i ficció ha estat sempre complexa i fascinant. La literatura, en particular, ha demostrat una capacitat única per capturar tant la memòria individual com la col·lectiva.</p>

      <p>Escriptors com Joan Sales i Mercè Rodoreda van explorar aquesta frontera amb una sensibilitat extraordinària, creant obres que transcendeixen la simple narració per convertir-se en testimonis d'una època.</p>

      <h2>La ficció com a veritat</h2>

      <p>Paradoxalment, la ficció pot revelar veritats més profundes que el simple relat factual. A través de la imaginació literària, els escriptors poden accedir a dimensions de l'experiència humana que romanen inaccessibles per altres mitjans.</p>

      <p>La memòria, sempre selectiva i subjectiva, troba en la ficció un aliat per donar forma i sentit a l'experiència viscuda.</p>
    `,
    inspirations: [
      { name: "Mercè Rodoreda", influence: 0.9 },
      { name: "Joan Sales", influence: 0.8 },
      { name: "Marcel Proust", influence: 0.6 },
    ],
  },
  {
    id: 4,
    title: "Conversa amb Carme Riera sobre literatura catalana",
    section: "Salvador Espriu",
    sectionSlug: "espriu",
    excerpt: "Un podcast on explorem la trajectòria literària i les reflexions de l'escriptora mallorquina.",
    author: "Podcast Contrafort",
    date: "8 de gener, 2025",
    readTime: "45 min",
    bias: { x: 0, y: 0 },
    content: `
      <p><strong>Nota:</strong> Aquest és un episodi de podcast. Pots escoltar-lo a les principals plataformes de podcasts.</p>

      <p>En aquest episodi, conversem amb Carme Riera, una de les veus més importants de la literatura catalana contemporània. Explorem la seva trajectòria literària, des dels seus primers contes fins a les seves novel·les més recents.</p>

      <h2>Temes tractats</h2>

      <p>Durant la conversa, abordem qüestions com la memòria històrica, la identitat mallorquina, el paper de les dones en la literatura catalana, i els reptes de l'escriptura en un context globalitzat.</p>

      <p>Carme Riera comparteix també les seves reflexions sobre el futur de la literatura catalana i el paper dels escriptors en la societat contemporània.</p>
    `,
    inspirations: [
      { name: "Salvador Espriu", influence: 0.7 },
      { name: "Maria Àngels Anglada", influence: 0.6 },
      { name: "Montserrat Roig", influence: 0.5 },
    ],
  },
  {
    id: 5,
    title: "Geopolítica mediterrània: entre Orient i Occident",
    section: "Gaziel",
    sectionSlug: "gaziel",
    excerpt: "Les tensions al Mediterrani i el paper de Catalunya com a pont cultural.",
    author: "Pere Rovira",
    date: "5 de gener, 2025",
    readTime: "14 min",
    bias: { x: 0.2, y: 0.4 },
    content: `
      <p>El Mediterrani ha estat sempre un espai de trobada i conflicte entre civilitzacions. En el context actual, les tensions geopolítiques a la regió s'han intensificat, amb implicacions que van més enllà de les fronteres regionals.</p>

      <p>Catalunya, per la seva posició geogràfica i la seva història, ha jugat tradicionalment un paper de pont entre Orient i Occident. Aquesta posició privilegiada comporta tant oportunitats com responsabilitats.</p>

      <h2>Els nous reptes mediterranis</h2>

      <p>La crisi migratòria, els conflictes al Pròxim Orient, i les tensions entre potències globals han convertit el Mediterrani en un dels escenaris més complexos de la geopolítica contemporània.</p>

      <p>Entendre aquestes dinàmiques és essencial per comprendre el futur de la regió i el paper que Catalunya pot jugar en la construcció d'un Mediterrani més pacífic i pròsper.</p>
    `,
    inspirations: [
      { name: "Fernand Braudel", influence: 0.7 },
      { name: "Edward Said", influence: 0.6 },
      { name: "Gaziel", influence: 0.8 },
    ],
  },
]

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get article by ID
export function getArticleById(id: number): Article | undefined {
  return articles.find((article) => article.id === id)
}

// Get articles by section
export function getArticlesBySection(sectionSlug: string): Article[] {
  return articles.filter((article) => article.sectionSlug === sectionSlug)
}

// Get all articles
export function getAllArticles(): Article[] {
  return articles
}
