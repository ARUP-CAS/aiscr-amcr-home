# Architektura aplikace AMČR

Tento dokument popisuje obecné principy, architektonické rozhodnutí a konvence používané v této aplikaci.

## Obsah

1. [Technologický stack](#technologický-stack)
2. [Struktura projektu](#struktura-projektu)
3. [Svelte 5 Runes](#svelte-5-runes)
4. [Komponenty a prop drilling](#komponenty-a-prop-drilling)
5. [Styling s Tailwind CSS 4.0](#styling-s-tailwind-css-40)
6. [Internacionalizace (i18n)](#internacionalizace-i18n)
7. [Routing a prerenderování](#routing-a-prerenderování)
8. [Markdown obsah](#markdown-obsah)
9. [Konvence a best practices](#konvence-a-best-practices)
10. [Deployment](#deployment)

---

## Technologický stack

### Core technologie
- **SvelteKit 2.x** - Full-stack framework pro Svelte
- **Svelte 5** - UI framework s novými runes API
- **TypeScript** - Type-safe JavaScript
- **Vite 7** - Build tool a dev server
- **pnpm** - Rychlý package manager

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **@tailwindcss/forms** - Formulářové styly
- **@tailwindcss/typography** - Typografické styly pro markdown
- **Scoped CSS** - Vlastní styly v `<style>` blocích komponent

### Další nástroje
- **Paraglide JS** - i18n řešení pro vícejazyčnost (cs/en)
- **MDSvex** - Markdown preprocessor pro Svelte
- **Lucide Svelte** - Ikony
- **ESLint + Prettier** - Code linting a formátování

---

## Struktura projektu

```
aiscr-amcr-home/
├── src/
│   ├── lib/
│   │   ├── components/          # Svelte komponenty
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Features.svelte
│   │   │   ├── QuickApps.svelte
│   │   │   ├── Tools.svelte
│   │   │   ├── AdditionalServices.svelte
│   │   │   ├── News.svelte
│   │   │   ├── NewsBanner.svelte
│   │   │   ├── FAQ.svelte
│   │   │   ├── CookieBanner.svelte
│   │   │   ├── DownloadsHero.svelte
│   │   │   ├── DownloadsSection.svelte
│   │   │   ├── amcr-pas/        # Komponenty specifické pro AMČR-PAS
│   │   │   │   ├── AmcrPasHero.svelte
│   │   │   │   ├── AmcrPasAbout.svelte
│   │   │   │   ├── AmcrPasBlog.svelte
│   │   │   │   ├── AmcrPasFAQ.svelte
│   │   │   │   ├── UsefulInfo.svelte
│   │   │   │   └── Downloads.svelte
│   │   │   └── markdown-layout.svelte
│   │   └── paraglide/           # Generované i18n soubory
│   ├── routes/                  # SvelteKit routing
│   │   ├── +layout.svelte       # Root layout
│   │   ├── +layout.ts           # Root layout load
│   │   ├── +page.svelte         # Homepage (AMČR)
│   │   ├── +page.ts             # Homepage data load (novinky)
│   │   ├── amcr-pas/            # AMČR-PAS sekce
│   │   │   └── +page.svelte
│   │   ├── downloads/           # Ke stažení
│   │   │   └── +page.svelte
│   │   ├── aktuality/[slug]/    # Detail novinky
│   │   │   ├── +page.svelte
│   │   │   └── +page.ts
│   │   ├── blog/                # Blog (AMČR-PAS)
│   │   │   ├── +page.svelte
│   │   │   ├── +page.server.ts
│   │   │   └── [slug]/
│   │   │       ├── +page.svelte
│   │   │       └── +page.ts
│   │   └── en/                  # Anglické varianty
│   │       ├── +page.svelte
│   │       └── aktuality/[slug]/
│   ├── content/                 # Markdown obsah
│   │   ├── news/                # Novinky (hlavní stránka)
│   │   │   ├── *_cs.md
│   │   │   └── *_en.md
│   │   └── blog/                # Blog články (AMČR-PAS)
│   ├── app.css                  # Globální Tailwind import a design systém
│   ├── app.html                 # HTML template s GA4
│   ├── hooks.server.ts          # Server hooks (i18n middleware)
│   └── hooks.ts                 # Client hooks (rerouting)
├── static/                      # Statické soubory
│   └── images/
│       ├── amcr-pas/            # Obrázky pro AMČR-PAS sekci
│       ├── logos/               # Loga
│       └── *.webp               # Pozadí sekcí
├── messages/                    # i18n překlady
│   ├── cs.json
│   └── en.json
├── project.inlang/              # Inlang konfigurace
└── build/                       # Output statického buildu
```

### Principy organizace

1. **Komponenty v `src/lib/components/`** - Všechny znovupoužitelné UI komponenty
2. **AMČR-PAS komponenty v `src/lib/components/amcr-pas/`** - Specifické pro sekci AMČR-PAS
3. **Routes v `src/routes/`** - File-based routing dle SvelteKit konvencí
4. **Obsah v `src/content/`** - Markdown soubory (novinky, blog články)
5. **Statické soubory v `static/`** - Obrázky, fonty, robots.txt
6. **Překlady v `messages/`** - JSON soubory pro i18n

### Stránky

| URL | Popis | Komponenty |
|-----|-------|------------|
| `/` | Hlavní stránka AMČR | Hero, Features, QuickApps, Tools, AdditionalServices, News, FAQ |
| `/amcr-pas` | AMČR-PAS portál | AmcrPasHero, AmcrPasAbout, UsefulInfo, AmcrPasBlog, AmcrPasFAQ, Downloads |
| `/downloads` | Ke stažení | DownloadsHero, DownloadsSection |
| `/aktuality/[slug]` | Detail novinky | Markdown layout |
| `/blog` | Blog AMČR-PAS | Blog listing |
| `/blog/[slug]` | Detail blog článku | Blog detail |

---

## Svelte 5 Runes

Tento projekt používá **Svelte 5** s novým **runes API**. Runes jsou nový způsob práce s reaktivitou v Svelte.

---

## Komponenty a prop drilling

### Pure components

Projekt používá **pure components** - komponenty jsou čisté funkce svých props bez globálního stavu.

**Výhody:**
- Předvídatelné chování
- Snadné testování
- Explicitní datový tok
- Žádné skryté závislosti

### Prop drilling pattern

Data se předávají explicitně skrze props z rodičovské komponenty do potomků.

**Příklad z projektu:**

```svelte
<!-- routes/+page.svelte - Homepage -->
<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Features from '$lib/components/Features.svelte';
  import QuickApps from '$lib/components/QuickApps.svelte';
  import Tools from '$lib/components/Tools.svelte';
  import News from '$lib/components/News.svelte';
</script>

<Hero {isBannerClosed} {isScrolled} />
<Features />
<QuickApps />
<Tools />
<News news={data.news} />
```

Komponenty jsou **autonomní** - získávají data buď:
1. Z props (když data přicházejí z rodiče)
2. Z i18n (překlady)
3. Z vlastního načtení (např. blog listing načítá markdown soubory)

### Sdílené komponenty

Některé komponenty jsou sdílené mezi stránkami:

- **DownloadsSection** - používá se na `/downloads` (prefix `downloadsPage`) i na `/amcr-pas` (prefix `amcrPas`), s různým počtem kategorií a dokumentů dle prefixu
- **Header / Footer** - globální layout komponenty
- **CookieBanner** - GDPR cookie consent

### Server load functions

Pro server-side data loading se používají `+page.server.ts` a `+page.ts` soubory:

```typescript
// routes/+page.ts - načítání novinek pro homepage
export const load = async () => {
  const allModules = import.meta.glob('/src/content/news/*.md', { eager: true });
  const news = Object.entries(allModules)
    .map(([path, module]) => {
      const { metadata } = module as any;
      return { slug: metadata.slug, title: metadata.title, ... };
    })
    .filter(post => post.published && post.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return { news };
};
```

### Kompozice komponent

```svelte
<!-- +layout.svelte -->
<div class="min-h-screen flex flex-col">
  <Header />
  <main class="flex-1">
    {@render children?.()}
  </main>
  <Footer />
</div>
```

---

## Styling s Tailwind CSS 4.0

Projekt používá **Tailwind CSS 4.0** - nejnovější verzi s Vite pluginem.

### Import a konfigurace

```css
/* src/app.css */
@import 'tailwindcss';
@plugin '@tailwindcss/forms';
@plugin '@tailwindcss/typography';

body {
  font-family: 'Roboto', sans-serif;
}
```

### Design systém

**Barvy:**
- Primary (dark red): `#721C17`
- Primary dark: `#5a1612`
- Primary light: `#8f2219`
- Teal/zelená pozadí: `#DDF0EE`, `#f0faf9`

**Fonty:**
- Body: `'Roboto', sans-serif`
- Headings: `'Roboto Slab', serif`

**Spacing:**
- Max container width: `1312px` (custom class `.max-w-content`)
- Section padding: responsive `px-4 sm:px-6 lg:px-8`
- Standard gaps: `16px`, `24px`, `32px`

### Utility třídy definované v `app.css`

```css
.text-primary { color: #721C17; }
.bg-primary { background-color: #721C17; }
.border-primary { border-color: #721C17; }
.max-w-content { max-width: 1312px; margin-left: auto; margin-right: auto; }
```

### Pozadí sekcí

Mnoho sekcí používá CSS custom properties pro pozadí s overlay:

```svelte
<section class="features-section" style="--features-bg: url('{base}/images/bg-hero.webp');">
```

```css
.features-section {
  background-image: var(--features-bg);
  background-size: cover;
}
.features-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 0;
}
.features-section > * {
  position: relative;
  z-index: 1;
}
```

---

## Internacionalizace (i18n)

Projekt používá **Paraglide JS** - moderní i18n řešení s compile-time překlady.

### Konfigurace

```json
// project.inlang/settings.json
{
  "baseLocale": "cs",
  "locales": ["cs", "en"]
}
```

### Překlady

```json
// messages/cs.json
{
  "hero.title": "Archeologická mapa České republiky",
  "hero.subtitle": "Váš průvodce krajinou archeologických dat"
}

// messages/en.json
{
  "hero.title": "Archaeological Map of the Czech Republic",
  "hero.subtitle": "Your guide through the landscape of archaeological data"
}
```

### Použití v komponentách

```svelte
<script lang="ts">
  import { m } from '$lib/paraglide/messages.js';
</script>

<!-- Jednoduchý překlad -->
<h1>{m['hero.title']()}</h1>

<!-- HTML překlad -->
<p>{@html m['about.description']()}</p>

<!-- Dynamické klíče -->
{#each items as item}
  <p>{(m as any)[`section.${item.key}.title`]()}</p>
{/each}
```

### Konvence pojmenování klíčů

Klíče v JSON souborech jsou hierarchické, oddělené tečkou:

| Prefix | Účel | Příklad |
|--------|------|---------|
| `hero.*` | Hero sekce hlavní stránky | `hero.title` |
| `nav.*` | Navigace | `nav.downloads` |
| `faq.*` | FAQ hlavní stránky | `faq.q1`, `faq.a1` |
| `tools.*` | Nástroje | `tools.tool1.title` |
| `quickApps.*` | Rychlý výběr | `quickApps.app1.title` |
| `amcrPas.*` | Vše pro AMČR-PAS | `amcrPas.hero.title` |
| `amcrPas.downloads.*` | Ke stažení (AMČR-PAS) | `amcrPas.downloads.cat1.doc1.title` |
| `downloadsPage.*` | Ke stažení (hlavní) | `downloadsPage.downloads.cat1.title` |
| `footer.*` | Patička | `footer.pragueEmail` |

### Server-side i18n

```typescript
// hooks.server.ts
import { paraglideMiddleware } from '$lib/paraglide/server';

export const handle: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
    });
  });
```

### Rerouting

```typescript
// hooks.ts
import { deLocalizeUrl } from '$lib/paraglide/runtime';
export const reroute = (request) => deLocalizeUrl(request.url).pathname;
```

Umožňuje URL jako `/en/amcr-pas` -> směruje na `/amcr-pas` s locale nastavením.

---

## Routing a prerenderování

### File-based routing

SvelteKit používá file-system based routing:

```
routes/
├── +layout.svelte          → Layout pro všechny stránky
├── +layout.ts              → prerender = true
├── +page.svelte            → / (homepage)
├── +page.ts                → Data load (novinky)
├── amcr-pas/
│   └── +page.svelte        → /amcr-pas
├── downloads/
│   └── +page.svelte        → /downloads
├── aktuality/[slug]/
│   ├── +page.svelte        → /aktuality/[slug]
│   └── +page.ts
├── blog/
│   ├── +page.svelte        → /blog (listing)
│   ├── +page.server.ts     → Server load
│   └── [slug]/
│       ├── +page.svelte    → /blog/[slug]
│       └── +page.ts
└── en/                     → Anglické varianty
    ├── +page.svelte
    └── aktuality/[slug]/
```

### Prerenderování

```typescript
// routes/+layout.ts
export const prerender = true;
```

**Všechny stránky jsou prerendrovány** během buildu → statický web.

### Static adapter

```javascript
// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      strict: true
    }),
    paths: {
      base: process.env.BASE_PATH || ''
    },
    prerender: {
      entries: [
        '/', '/en', '/en/',
        '/amcr-pas', '/en/amcr-pas',
        '/downloads', '/en/downloads',
        '/blog', '/en/blog',
        // + dynamické slugy
      ]
    }
  }
};
```

---

## Markdown obsah

### MDSvex konfigurace

```javascript
// svelte.config.js
import { mdsvex } from 'mdsvex';

const config = {
  preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md', '.svx'] })],
  extensions: ['.svelte', '.svx', '.md']
};
```

### Novinky vs Blog

Projekt má dva typy markdown obsahu:

| Typ | Složka | Použití | Zobrazení |
|-----|--------|---------|-----------|
| Novinky | `src/content/news/` | Hlavní stránka AMČR | News komponenta + detail |
| Blog | `src/content/blog/` | AMČR-PAS sekce | Blog listing + detail |

### Frontmatter metadata

```markdown
---
slug: nazev-novinky
title: Název novinky
excerpt: Krátký popis pro náhled (1-2 věty).
date: 2025-01-22
time: "10:00"
badge: Novinka
published: true
locale: cs
image: /images/blog/placeholder.webp
---

# Obsah

Text v markdown formátu...
```

### Načítání obsahu

```typescript
const allModules = import.meta.glob('/src/content/news/*.md', { eager: true });
const news = Object.entries(allModules)
  .map(([path, module]) => {
    const { metadata } = module as any;
    return { slug: metadata.slug, title: metadata.title, ... };
  })
  .filter(post => post.published && post.locale === locale);
```

---

## Konvence a best practices

### TypeScript

- **Strict mode** zapnutý v `tsconfig.json`
- Type všech props a funkcí
- Avoid `any` kde je možné

### Komponenty

1. **Single Responsibility** - každá komponenta má jeden účel
2. **Autonomní** - komponenta má vše potřebné v sobě
3. **Prop drilling** - explicitní předávání dat
4. **Pure** - žádný globální stav (kromě i18n)

### Accessibility

- **ARIA labels** pro ikony a interaktivní prvky
- **Semantic HTML** (nav, main, section, article, footer)
- **Alt text** pro obrázky
- **Focus states** pro klavesovou navigaci

### Performance

1. **Image optimization** - webp formáty, správné velikosti
2. **Lazy loading** - pro obrázky mimo viewport
3. **Code splitting** - automatické díky SvelteKit
4. **Static prerendering** - žádný server runtime

### ESLint a Prettier

```bash
pnpm format        # Formátovat všechny soubory
pnpm lint          # Zkontrolovat code style
```

---

## Deployment

### Build proces

```bash
pnpm dev            # Vývojový server
pnpm check          # TypeScript kontrola
pnpm build          # Production build (output do build/)
pnpm preview        # Náhled buildu
```

### Static build output

```
build/
├── _app/                    # App assets (CSS, JS chunks)
├── index.html               # Homepage
├── en/                      # Anglické stránky
├── amcr-pas/                # AMČR-PAS
├── downloads/               # Ke stažení
├── blog/                    # Blog
├── aktuality/               # Novinky
├── images/                  # Statické obrázky
└── robots.txt
```

### Deployment targets

Statický build lze nasadit na:
- **Nginx** - `rsync -av build/ /var/www/amcr-info.aiscr.cz/`
- **Vercel** - automatický deployment (viz `vercel.json`)
- **GitHub Pages**, **Cloudflare Pages**, **AWS S3 + CloudFront**

Web je čistě statický - nepotřebuje Node.js runtime.

### GitHub Actions

- Push do `main` → automatický build
- Vytvoření release → automaticky přidá ZIP

---

## Shrnutí klíčových principů

### Svelte 5 Runes
1. **`$state`** - pro reaktivní stav
2. **`$derived`** - pro computed values
3. **`$props`** - pro props komponent
4. **`$effect`** - pro reaktivní side effects
5. **`$bindable`** - pro two-way binding

### Architektura
6. **Pure components** - bez globálního stavu
7. **Prop drilling** - explicitní data flow
8. **TypeScript** - type safety všude
9. **Semantic HTML** - accessibility

### Checklist nové komponenty

Při vytváření nové komponenty zkontrolovat:

- [ ] Používá `$state` místo `let` pro reaktivní stav?
- [ ] Používá `$props()` pro props?
- [ ] Používá `$derived` pro computed values?
- [ ] Má správné TypeScript typy?
- [ ] Má ARIA labels pro interaktivní elementy?
- [ ] Používá i18n pro texty (`m['key']()`)?
- [ ] Má responsive design (Tailwind breakpoints)?
- [ ] Neobsahuje `$inspect` v produkčním kódu?
