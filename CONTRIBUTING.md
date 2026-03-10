# Návod pro správu obsahu - AMČR web

Tento návod popisuje, jak přidat nové novinky, blog články, aktualizovat překlady a deployovat web.

## Obsah

1. [Přidání novinky](#přidání-novinky)
2. [Přidání blog článku](#přidání-blog-článku-amčr-pas)
3. [Správa sekcí ke stažení](#správa-sekcí-ke-stažení)
4. [Internacionalizace (překlady)](#internacionalizace-překlady)
5. [Optimalizace obrázků](#optimalizace-obrázků)
6. [Build a deployment](#build-a-deployment)
7. [GitHub Release](#github-release)
8. [Časté problémy a řešení](#časté-problémy-a-řešení)

---

## Přidání novinky

Novinky se zobrazují na hlavní stránce AMČR v sekci "Aktuality".

### 1. Vytvoření markdown souboru

Vytvoř nový soubor v `src/content/news/` s konvencí `YYYY-MM-DD_locale.md`:

```markdown
---
slug: nazev-novinky
title: Název novinky
excerpt: Krátký popis pro náhled (1-2 věty).
date: 2025-06-15
time: "10:00"
badge: Novinka
published: true
locale: cs
image: /images/blog/placeholder.webp
---

# Obsah novinky

Text v markdown formátu...
```

### 2. Parametry frontmatter

| Parametr | Povinný | Popis | Příklad |
|----------|---------|-------|---------|
| `slug` | Ano | URL (bez diakritiky, pomlčky) | `nova-verze-amcr` |
| `title` | Ano | Název novinky | `"Nová verze AMČR"` |
| `excerpt` | Ano | Krátký popis pro preview | `"Představujeme..."` |
| `date` | Ano | Datum ve formátu `YYYY-MM-DD` | `"2025-06-15"` |
| `time` | Ne | Čas publikace | `"10:00"` |
| `badge` | Ano | Štítek | `"Novinka"`, `"Událost"`, `"Aktualizace"` |
| `published` | Ano | Publikovat? | `true` nebo `false` |
| `locale` | Ano | Jazyk | `"cs"` nebo `"en"` |
| `image` | Ano | Cesta k náhledovému obrázku | `/images/blog/placeholder.webp` |

### 3. Anglická verze

Pro anglickou verzi vytvoř soubor se suffixem `_en.md`:

```
src/content/news/
├── 2025-06-15_cs.md    # Česká verze
└── 2025-06-15_en.md    # Anglická verze
```

### 4. Aktualizace prerender konfigurace

Po přidání novinky aktualizuj `svelte.config.js`:

```javascript
prerender: {
    entries: [
        // ... existující cesty
        '/aktuality/nazev-novinky',
        '/en/aktuality/nazev-novinky',
    ]
}
```

---

## Přidání blog článku (AMČR-PAS)

Blog články se zobrazují v sekci AMČR-PAS.

### 1. Vytvoření souboru

Vytvoř soubor v `src/content/blog/`:

```markdown
---
slug: nazev-clanku
title: "Název článku"
excerpt: "Krátký popis (1-2 věty)"
date: "2025-06-15"
category: "Návody"
published: true
locale: "cs"
readingTime: "5 minut"
author: "Jméno Autora"
authorRole: "Role"
authorImage: "/images/blog/author/foto.webp"
image: "/images/blog/nahled.webp"
---

## Úvod

Text článku...

![Popis obrázku](/images/blog/foto.webp)
```

### 2. Přidání slug do svelte.config.js

```javascript
prerender: {
    entries: [
        // ... existující cesty
        '/blog/nazev-clanku',
        '/en/blog/nazev-clanku',
    ]
}
```

### 3. Více autorů

Oddělte čárkou (name, role i image musí mít stejný počet položek):

```yaml
author: "Jan Novák, Marie Nováková"
authorRole: "Archeolog, Datová kurátorka"
authorImage: "/images/blog/author/novak.webp, /images/blog/author/novakova.webp"
```

---

## Správa sekcí ke stažení

Sekce "Ke stažení" se spravují přes i18n soubory v `messages/cs.json` a `messages/en.json`.

### Struktura

Ke stažení se dělí na dva kontexty:

| Kontext | Prefix v i18n | Stránka |
|---------|---------------|---------|
| Hlavní ke stažení | `downloadsPage.downloads.*` | `/downloads` |
| AMČR-PAS ke stažení | `amcrPas.downloads.*` | `/amcr-pas` |

### Přidání nového dokumentu

1. Přidej klíče do `messages/cs.json`:

```json
{
  "amcrPas.downloads.cat1.doc8.title": "Název dokumentu",
  "amcrPas.downloads.cat1.doc8.description": "Popis dokumentu",
  "amcrPas.downloads.cat1.doc8.file": "https://url-k-souboru.pdf",
  "amcrPas.downloads.cat1.doc8.type": "file",
  "amcrPas.downloads.cat1.doc8.buttonType": "download"
}
```

2. Přidej překlady do `messages/en.json`

3. Aktualizuj počet dokumentů v `DownloadsSection.svelte` ve funkci `getDocumentsForCategory()`:

```typescript
if (categoryKey === 'cat1') return [
  { key: 'doc1' }, { key: 'doc2' }, ..., { key: 'doc8' }
];
```

### Typy dokumentů

| `type` | `buttonType` | Ikona | Tlačítko |
|--------|-------------|-------|----------|
| `"file"` | `"download"` | FileText | "Stáhnout" |
| `"link"` | `"visit"` | Globe | "Přejít" |
| `"link"` | `"read"` | Globe | "Číst" |
| `"link"` | `"watch"` | Globe | "Sledovat" |

---

## Internacionalizace (překlady)

Překlady jsou v `messages/cs.json` a `messages/en.json`.

### Přidání nového překladu

1. Přidej klíč do obou souborů
2. Použij v komponentě: `{m['klíč']()}`

### HTML v překladech

```json
{
    "about.intro": "AIS CR je <strong>komplexní infrastruktura</strong>..."
}
```

V komponentě: `{@html m['about.intro']()}`

### Dynamické klíče

```svelte
{(m as any)[`section.${item.key}.title`]()}
```

### URL locale handling

- Česká verze: `/` (výchozí)
- Anglická verze: `/en/`

Odkazy v komponentách musí respektovat locale:

```svelte
<script>
    import { getLocale } from '$lib/paraglide/runtime';
    const locale = getLocale();
    const basePath = locale === 'en' ? '/en' : '';
</script>

<a href="{basePath}/amcr-pas">AMČR-PAS</a>
```

---

## Optimalizace obrázků

### Doporučené rozměry

| Typ obrázku | Max rozměry | Formát |
|-------------|-------------|--------|
| Hero pozadí | 2400px šířka | WebP |
| Blog náhledy | 800x450px | WebP, 85% |
| Blog obrázky v článku | 1600px šířka | WebP, 85% |
| Sekce pozadí | 2600px šířka | WebP |
| Loga | 800px | PNG/WebP |

### Manuální optimalizace (ImageMagick)

```bash
# Resize + WebP konverze
magick obrazek.png -resize "1600x1600>" -quality 85 obrazek.webp
```

---

## Build a deployment

### Příkazy

```bash
pnpm dev            # Dev server (http://localhost:5173)
pnpm build          # Production build (output do build/)
pnpm preview        # Preview buildu (http://localhost:4173)
pnpm check          # TypeScript kontrola
pnpm format         # Prettier formátování
pnpm lint           # ESLint
```

### Automatický deployment (GitHub Actions)

1. Push do `main` → automatický build
2. Vytvoření release na GitHubu → automaticky přidá ZIP

### Manuální deployment

```bash
pnpm build
# Web je čistě statický - stačí nakopírovat build/ na server
rsync -av build/ /var/www/amcr-info.aiscr.cz/
```

---

## GitHub Release

1. Commitni a pushni změny do `main`
2. Na GitHubu: **Releases** > **Draft a new release**
3. Vytvoř tag (např. `v1.1.0`), napiš popis, **Publish release**
4. Workflow automaticky stáhne build a přidá ZIP k release

---

## Časté problémy a řešení

### Obrázek se nenačítá (404)

Zkontroluj cestu a formát:
```bash
ls -la static/images/amcr-pas/bg-amcr-pas-hero.webp
# V kódu: /images/amcr-pas/bg-amcr-pas-hero.webp
```

### Novinka/článek se nezobrazuje

1. Zkontroluj frontmatter: `published: true`
2. Zkontroluj `locale: cs` (nebo `en`)
3. Přidej slug do `svelte.config.js` prerender entries
4. Rebuild: `pnpm build`

### Překlady nefungují

```bash
grep "hero.title" messages/cs.json messages/en.json
```

Zkontroluj, že klíč existuje v obou souborech a volá se správně: `m['hero.title']()`.

### Build padá na chybějících cestách

Přidej novou cestu do `svelte.config.js` prerender entries:
```javascript
prerender: { entries: [ ..., '/novy/url' ] }
```

---

## Checklist pro novou novinku

- [ ] Markdown soubor má správný frontmatter (všechna povinná pole)
- [ ] Slug je unikátní
- [ ] Obrázky jsou optimalizované (WebP, správné rozměry)
- [ ] Cesty k obrázkům jsou správné
- [ ] Slug přidán do `svelte.config.js` prerender entries
- [ ] Build projde bez chyb (`pnpm build`)
- [ ] Novinky se zobrazují na hlavní stránce (CS i EN)
- [ ] Detail novinky funguje (`/aktuality/slug` i `/en/aktuality/slug`)

---

## Kontakty

Pro dotazy ohledně technické stránky webu:
- **Web:** [https://www.aiscr.cz](https://www.aiscr.cz)
