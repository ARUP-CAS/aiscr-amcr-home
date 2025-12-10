# AIS ČR & AMČR – Domovská stránka

Webová prezentace **Archeologického informačního systému České republiky (AIS ČR)** a **Archeologické mapy České republiky (AMČR)**. Projekt je vytvořen pomocí SvelteKit 2 a Svelte 5.

---

## 📋 Obsah

- [Technologie](#-technologie)
- [Instalace](#-instalace)
- [Vývoj](#-vývoj)
- [Struktura projektu](#-struktura-projektu)
- [Lokalizace](#-lokalizace)
- [Správa obsahu](#-správa-obsahu)
- [Build a nasazení](#-build-a-nasazení)

---

## 🛠 Technologie

| Technologie | Verze | Popis |
|-------------|-------|-------|
| [SvelteKit](https://kit.svelte.dev/) | 2.x | Full-stack framework |
| [Svelte](https://svelte.dev/) | 5.x | UI framework s runes API |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) | 2.x | i18n lokalizace |
| [MDsveX](https://mdsvex.pngwn.io/) | 0.12 | Markdown pro Svelte |
| [Lucide](https://lucide.dev/) | - | Ikony |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Typová kontrola |

---

## 🚀 Instalace

### Požadavky

- **Node.js** 18+ (doporučeno 20+)
- **pnpm** (doporučeno) nebo npm

### Kroky

```bash
# Klonování repozitáře
git clone https://github.com/ARUP-CAS/aiscr-amcr-home.git
cd aiscr-amcr-home

# Instalace závislostí
pnpm install

# Spuštění vývojového serveru
pnpm dev
```

Aplikace poběží na `http://localhost:5173`

---

## 💻 Vývoj

### Příkazy

| Příkaz | Popis |
|--------|-------|
| `pnpm dev` | Spustí vývojový server |
| `pnpm dev --open` | Spustí server a otevře prohlížeč |
| `pnpm build` | Vytvoří produkční build |
| `pnpm preview` | Náhled produkčního buildu |
| `pnpm check` | Kontrola TypeScript typů |
| `pnpm lint` | Spustí ESLint a Prettier |
| `pnpm format` | Formátování kódu |

---

## 📁 Struktura projektu

```
aiscr-amcr-home/
├── messages/                    # Lokalizační soubory
│   ├── cs.json                  # Čeština
│   └── en.json                  # Angličtina
├── src/
│   ├── content/                 # Markdown obsah
│   │   ├── news/                # Novinky (hlavní stránka)
│   │   └── blog/                # Blog články (AMČR-PAS)
│   ├── lib/
│   │   ├── components/          # Svelte komponenty
│   │   │   ├── amcr-pas/        # Komponenty pro AMČR-PAS
│   │   │   └── *.svelte         # Sdílené komponenty
│   │   └── paraglide/           # Generované i18n soubory
│   └── routes/                  # SvelteKit routes
│       ├── +page.svelte         # Hlavní stránka
│       ├── amcr-pas/            # AMČR-PAS sekce
│       ├── aktuality/           # Detail novinek
│       ├── blog/                # Blog sekce
│       └── downloads/           # Ke stažení
├── static/                      # Statické soubory
│   ├── images/                  # Obrázky
│   └── files/                   # Soubory ke stažení (PDF, ...)
├── svelte.config.js             # Konfigurace SvelteKit
├── vite.config.ts               # Konfigurace Vite
└── tailwind.config.js           # Konfigurace Tailwind
```

---

## 🌍 Lokalizace

Projekt používá **Paraglide** pro vícejazyčnou podporu (čeština, angličtina).

### Soubory překladů

- `messages/cs.json` – české texty
- `messages/en.json` – anglické texty

### Přidání nového textu

1. Přidej klíč do `messages/cs.json`:
   ```json
   {
     "mojeKomponenta.nadpis": "Můj nadpis",
     "mojeKomponenta.popis": "Popis s {promenna}"
   }
   ```

2. Přidej anglický překlad do `messages/en.json`:
   ```json
   {
     "mojeKomponenta.nadpis": "My Title",
     "mojeKomponenta.popis": "Description with {promenna}"
   }
   ```

3. Použij v komponentě:
   ```svelte
   <script>
     import { m } from '$lib/paraglide/messages.js';
   </script>
   
   <h1>{m['mojeKomponenta.nadpis']()}</h1>
   <p>{m['mojeKomponenta.popis']({ promenna: 'hodnota' })}</p>
   ```

### URL struktura

- Čeština: `/` (výchozí)
- Angličtina: `/en/`

---

## 📝 Správa obsahu

### Přidání novinky

Vytvoř nový soubor v `src/content/news/`:

```markdown
---
slug: nazev-novinky
title: Název novinky
excerpt: Krátký popis pro náhled (1-2 věty).
date: 2024-12-10
time: "10:00"
badge: Událost
published: true
locale: cs
image: /images/blog/placeholder.webp
---

# Obsah novinky

Text v markdown formátu...
```

| Pole | Popis |
|------|-------|
| `slug` | URL adresa (bez diakritiky, pomlčky místo mezer) |
| `title` | Název novinky |
| `excerpt` | Krátký popis pro náhled |
| `date` | Datum ve formátu `YYYY-MM-DD` |
| `time` | Čas publikace (volitelné) |
| `badge` | Štítek: "Událost", "Novinka", "Aktualizace" |
| `published` | `true` = zobrazit, `false` = skrýt |
| `locale` | `cs` pro češtinu, `en` pro angličtinu |
| `image` | Cesta k obrázku |

### Přidání blog článku (AMČR-PAS)

Stejná struktura jako novinky, ale soubor vytvoř v `src/content/blog/`.

### Přidání souboru ke stažení

1. Vlož soubor do `static/files/`, např. `static/files/dokument.pdf`
2. Soubor bude dostupný na URL: `/files/dokument.pdf`
3. V komponentě odkazuj pomocí `{base}`:
   ```svelte
   <a href="{base}/files/dokument.pdf" download>Stáhnout</a>
   ```

### Přidání obrázku

1. Vlož obrázek do `static/images/`
2. Pro optimalizaci použij WebP formát
3. Doporučené rozměry:
   - Hero obrázky: max 2400px šířka
   - Blog náhledy: 800x450px
   - Ikony/loga: SVG nebo PNG

---

## 🏗 Build a nasazení

### Build

```bash
pnpm build
```

Výstup je ve složce `build/`.

### Náhled buildu

```bash
pnpm preview
```

### Konfigurace

Projekt používá `@sveltejs/adapter-static` pro generování statických HTML souborů.

---

## 📄 Stránky

| URL | Popis |
|-----|-------|
| `/` | Hlavní stránka AIS ČR |
| `/amcr-pas` | AMČR-PAS – Portál amatérských spolupracovníků |
| `/downloads` | Ke stažení |
| `/aktuality/[slug]` | Detail novinky |
| `/blog` | Blog AMČR-PAS |
| `/blog/[slug]` | Detail blog článku |

---

## 🤝 Přispívání

1. Vytvoř fork repozitáře
2. Vytvoř feature branch: `git checkout -b feature/nova-funkce`
3. Commitni změny: `git commit -m 'Přidána nová funkce'`
4. Pushni branch: `git push origin feature/nova-funkce`
5. Vytvoř Pull Request

---

## 📜 Licence

© 2024 Archeologický ústav AV ČR, Praha, v. v. i. & Archeologický ústav AV ČR, Brno, v. v. i.

---

## 📞 Kontakt

- **Web:** [https://www.aiscr.cz](https://www.aiscr.cz)
- **Email:** info@aiscr.cz
- **GitHub:** [https://github.com/ARUP-CAS](https://github.com/ARUP-CAS)
