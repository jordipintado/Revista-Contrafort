# Com afegir articles a Contrafort

Aquest document explica com afegir nous articles a la revista Contrafort sense necessitat de coneixements de programació.

## Pas 1: Obre el fitxer de dades

Tots els articles es troben en un únic fitxer: `lib/articles-data.ts`

## Pas 2: Copia la plantilla

Al principi del fitxer trobaràs una plantilla comentada que comença així:

\`\`\`
/*
{
  id: 999,
  title: "El títol del teu article",
  ...
}
*/
\`\`\`

Copia aquesta plantilla (sense els `/*` i `*/`).

## Pas 3: Omple els camps

### Camps bàsics:

- **id**: Un número únic (utilitza el següent número disponible)
- **title**: El títol del teu article
- **section**: La secció a la qual pertany. Opcions:
  - "Gaziel" (periodisme internacional)
  - "Joan Fuster" (periodisme nacional i social)
  - "Sales/Rodoreda" (periodisme literari)
  - "Salvador Espriu" (podcast)
- **sectionSlug**: La versió URL de la secció. Opcions:
  - "gaziel"
  - "fuster"
  - "sales-rodoreda"
  - "espriu"
- **excerpt**: Un resum breu (2-3 línies) que apareixerà a la portada
- **author**: El nom de l'autor/a
- **date**: La data de publicació (format: "15 de gener, 2025")
- **readTime**: Temps de lectura estimat (exemple: "12 min")

### Orientació ideològica (Diagrama de Nolan):

\`\`\`
bias: { x: 0, y: 0 }
\`\`\`

- **x**: De -1 (esquerra) a 1 (dreta)
- **y**: De -1 (autoritari) a 1 (llibertari)

Exemples:
- Centre: `{ x: 0, y: 0 }`
- Esquerra llibertària: `{ x: -0.5, y: 0.5 }`
- Dreta autoritària: `{ x: 0.5, y: -0.5 }`

### Contingut de l'article:

\`\`\`
content: `
  <p>Primer paràgraf...</p>
  
  <h2>Subtítol</h2>
  
  <p>Més contingut...</p>
`
\`\`\`

Utilitza aquestes etiquetes HTML:
- `<p>` per a paràgrafs
- `<h2>` per a subtítols
- `<strong>` per a text en negreta
- `<em>` per a text en cursiva

### Figures inspiradores:

\`\`\`
inspirations: [
  { name: "Hannah Arendt", influence: 0.8 },
  { name: "Jürgen Habermas", influence: 0.6 },
]
\`\`\`

- **name**: Nom de la figura intel·lectual
- **influence**: Grau d'influència de 0 a 1 (0 = cap, 1 = màxima)

## Pas 4: Afegeix l'article a la llista

Enganxa el teu nou article dins de l'array `articles`, després de l'últim article existent i abans del claudàtor final `]`.

**Important**: Assegura't d'afegir una coma (`,`) després de l'article anterior!

## Exemple complet:

\`\`\`typescript
export const articles: Article[] = [
  // ... articles existents ...
  {
    id: 6,
    title: "El futur de la intel·ligència artificial",
    section: "Gaziel",
    sectionSlug: "gaziel",
    excerpt: "Una reflexió sobre l'impacte de la IA en la societat contemporània.",
    author: "Laura Vidal",
    date: "20 de gener, 2025",
    readTime: "10 min",
    bias: { x: 0.2, y: 0.6 },
    content: `
      <p>La intel·ligència artificial està transformant radicalment la nostra societat...</p>
      
      <h2>Reptes ètics</h2>
      
      <p>Els reptes ètics que planteja la IA són enormes...</p>
    `,
    inspirations: [
      { name: "Nick Bostrom", influence: 0.7 },
      { name: "Yuval Noah Harari", influence: 0.5 },
    ],
  },
]
\`\`\`

## Consells:

1. Revisa que tots els camps estiguin omplerts
2. Assegura't que l'ID sigui únic
3. Verifica que la secció i el sectionSlug coincideixin
4. Prova l'article després d'afegir-lo per assegurar-te que es veu correctament

Això és tot! Ara pots afegir articles fàcilment sense tocar cap altre fitxer del projecte.
