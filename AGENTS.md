# Pravidlá projektu Racket Comparator

- Tento priečinok je Git repozitár a je lokálnym zdrojom pravdy pre webstránku Racket Comparator.
- Po každej podstatnej a otestovanej zmene (nové katalógové dáta, vizuálny redizajn, nová funkcia, konfigurácia domény/nasadenia, alebo skupina súvisiacich opráv) automaticky vytvor Git commit ako časovú pečiatku predtým, než prácu vrátiš.
- Commit message píš krátky a vecný, v angličtine. Necommituj rozpracované experimenty, súkromné kľúče, prihlasovacie údaje, `.env` súbory, priečinok `.tools/` ani operačný systémový bordel.
- Vetva `main` musí zostať nasaditeľná. Pred commitom over relevantnú zmenu.
- Otestované snapshoty pushni na GitLab remote, keď je nakonfigurovaný. Nasadenie na GitHub Pages ostáva oddelené a naďalej používa existujúci GitHub repozitár.
- Udržiavaj `PROJECT_CONTEXT.md` aktuálny, aby nový chat mohol bezpečne pokračovať v projekte.
- `PLAN.md` je autoritatívny zdroj pravdy o tom, čo web má/má robiť. Pri akejkoľvek funkčnej zmene webu (nový katalóg, nová funkcia, zmena UI, zmena algoritmu, nový jazyk, nová sekcia) vždy aktualizuj `PLAN.md` v rovnakom commite, v ktorom meníš `app.js` / `index.html` / `styles.css`. Držme sa ho: žiadna funkcia mimo `PLAN.md` by sa nemala dostať do produkcie bez toho, aby tam bola najprv zapísaná.

# Pre-publish brána kvality

Pred každým z nasledujúcich úkonov spusti `node tools/check.mjs`:

- `git commit`, ak mení `app.js`, `index.html`, `styles.css`, `CNAME` alebo priečinok `assets/`.
- Upload `app.js`, `index.html` alebo `styles.css` na GitHub Pages cez GitHub Contents API (`gh api .../contents/...`).
- Vytvorenie alebo aktualizácia GitLab backup snapshotu, ktorý mirroruje `main`.

Node 22+ je nainštalovaný cez Homebrew v `/opt/homebrew/bin/node` a **nie je na default PATH** — volaj ho plnou cestou alebo dočasne `export PATH=/opt/homebrew/bin:$PATH`.

Skript musí skončiť správou `All N checks passed.` a exit kódom 0. **Kým vypisuje akýkoľvek riadok `FAIL`, nepublikuj, necommituj ani nepushuj.**

Skript kontroluje:

- `app.js` sa parsuje ako platný JavaScript (chytí chýbajúce čiarky, neukončené literály, vis objekty — presne tú chybu, ktorá po commit-e `99b2554` vyprázdnila všetky select boxy).
- Polia `blades` a `rubbers` sa dajú naparsovať, nie sú prázdne, obsahujú značku `Butterfly`, každá položka má `id` + `brand` + `name` a všetky `id` sú unikátne naprieč oboma poliami.
- `index.html` odkazuje na `app.js?v=<token>` a `styles.css?v=<token>` a názov súboru v `<script src>` sa zhoduje so súborom na disku.
- `CNAME` stále smeruje na `racketcomparator.com`.

Konvencia pre token: pridaj ku dnešnému dátumu v tvare `YYYYMMDD-` krátky popisný slug, napr. `20260804-fix-app-js-comma`. Po každej zmene `app.js` alebo `styles.css` posuň príslušný `?v=` token v `index.html`, aby prehliadač nepodával z cache rozbitý skript.

# Pravidlo publishovania

**Publishovanie na GitHub Pages a push na GitLab sa vykonávajú výlučne na tvoj explicitný príkaz** (napr. „publishni“, „daj to na produkciu“). Bez explicitného súhlasu agent:

- nevolá `git push` na žiadny remote,
- nerobí upload cez GitHub Contents API,
- nespúšťa Pages rebuild cez `POST /pages/builds`,
- nepublikuje cez žiadny iný kanál.

Pred samotným publikovaním navyše musia v plnom rozsahu prejsť kontroly z `tools/check.mjs`. Ak skript vráti akýkoľvek `FAIL`, najprv chybu oprav a skript znovu spusti, až potom môžeš dať príkaz na publish.

# GitHub Pages — protokol publikovania

Po každom pushi na `main`, ktorý má byť live na `racketcomparator.com`:

1. Každý zmenený súbor uploadni cez GitHub Contents API (`PUT /repos/porovnavacrakiet/porovnavacrakiet.github.io/contents/<path>`), vždy s **aktuálnym `sha`** súboru získaným cez `GET` na rovnakej ceste. Uploady cez Contents API v rýchlom slede občas spustia prechodný build failure, pri ktorom Pages drží predchádzajúci úspešný build.
2. Bezprostredne po poslednom uploade spusti manuálny rebuild: `gh api -X POST repos/porovnavacrakiet/porovnavacrakiet.github.io/pages/builds`. Tento krok je idempotentný a donúti Pages usadiť sa na novom commite.
3. Over cez `curl -s https://racketcomparator.com/app.js?v=<nový-token> | sed -n '1385p'` (alebo riadok, kde predtým žila chyba), že servírovaný súbor sedí s lokálnym súborom. Pages agresívne cachuje (`cache-control: max-age=600`, `x-cache: HIT`); nevyhlasuj úspech na základe cache hitu — opakuj curl, kým neuvidíš `x-cache: MISS` alebo kým sa neobjaví nový obsah.
4. Po úspešnom nasadení aktualizuj `PROJECT_CONTEXT.md` o riadok „Posledná publikovaná verzia“ v rovnakom štýle ako existujúce záznamy.

# Čo tento projekt zámerne nemá

- Žiadny bundler, žiadny `package.json`, žiadny `node_modules`. Web je jeden HTML súbor, jeden CSS súbor, jeden JS súbor. Nezavádzaj build krok.
- Žiadny CI server. Kvalitu pred publikovaním vynucuje lokálne volanie `node tools/check.mjs` popísané vyššie.
- Žiadny unit test framework. Invarianty katalógu v `tools/check.mjs` sú regresná sieť — pri pridávaní nových štrukturálnych pravidiel rozšír volania `check(...)` tam, namiesto zavádzania testovacieho frameworku.
- Žiadne automatické publikovanie. Každý push na GitHub Pages aj GitLab prechádza cez tvoj explicitný príkaz.