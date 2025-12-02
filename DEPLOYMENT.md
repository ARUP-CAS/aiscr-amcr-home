# Nasazení aplikace do podsložky

Aplikace je nyní nakonfigurována pro použití **relativních cest**, což umožňuje nasazení do libovolné podsložky na serveru.

## Konfigurace

V `svelte.config.js` bylo přidáno:

```javascript
paths: {
  base: process.env.BASE_PATH || '',
  relative: true
}
```

## Nasazení

### Varianta 1: Nasazení do root složky serveru

```bash
pnpm build
```

Vygeneruje se složka `build/` s relativními cestami, kterou můžete nasadit přímo do root složky webu.

### Varianta 2: Nasazení do konkrétní podsložky

```bash
BASE_PATH=/myapp pnpm build
```

Vygeneruje se složka `build/` optimalizovaná pro nasazení do podsložky `/myapp`.

## Jak to funguje

Aplikace používá `base` z `$app/paths` pro všechny:
- **Interní odkazy** (`href`) - navigace mezi stránkami
- **Obrázky** (`src`) - všechny obrázky včetně CSS backgrounds
- **SvelteKit assety** - JS a CSS soubory

### Příklady vygenerovaných cest

Pro **root stránku** (`index.html`):
- Obrázky: `./images/logo.svg`
- Odkazy: `./amcr-pas`
- Assety: `./_app/immutable/...`

Pro **vnořené stránky** (`/en/amcr-pas.html`):
- Obrázky: `../images/logo.svg`
- Odkazy: `../blog`
- Assety: `../_app/immutable/...`

## Testování

Web můžete otestovat lokálně:

```bash
cd build
python3 -m http.server 8000
```

Nebo v podsložce:

```bash
mkdir -p /tmp/test/mysubdir
cp -r build/* /tmp/test/mysubdir/
cd /tmp/test
python3 -m http.server 8000
# Otevřete http://localhost:8000/mysubdir/
```

## Změněné soubory

### Konfigurace
- `svelte.config.js` - přidáno `paths.relative` a `paths.base`

### Komponenty
Všechny komponenty nyní používají `base` z `$app/paths`:
- `Header.svelte`, `Footer.svelte`, `NewsBanner.svelte`
- `Hero.svelte`, `Features.svelte`, `News.svelte`
- `FAQ.svelte`, `AdditionalServices.svelte`
- `Tools.svelte`, `QuickApps.svelte`, `DownloadsSection.svelte`
- `amcr-pas/` komponenty

### Stránky
- `+layout.svelte` - detekce locale s respektováním base
- `blog/[slug]/+page.svelte` - helper pro transformaci cest
- `aktuality/[slug]/+page.svelte` - helper pro transformaci cest
- `blog/+page.svelte` - helper pro transformaci cest

### Load funkce
Load funkce ponechávají originální cesty z markdown metadat a transformace probíhá v komponentách pomocí `base`.

## Důležité poznámky

- Všechny **externí odkazy** (https://...) zůstávají beze změny
- **Hash odkazy** (#aktuality, #kontakty) fungují správně
- **Language switcher** respektuje base path
- Web funguje **s i bez** JavaScriptu

