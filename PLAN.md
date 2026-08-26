# Sport Racket Comparator — plán produktu

Tento `PLAN.md` je autoritatívny zdroj pravdy o tom, čo web má/má robiť. Akákoľvek funkčná zmena webu (nový katalóg, nová funkcia, zmena UI, zmena algoritmu, nový jazyk, nová sekcia) musí byť najprv zapísaná sem a potom implementovaná v rovnakom commite. Žiadna funkcia mimo `PLAN.md` by sa nemala dostať do produkcie bez toho, aby tam bola najprv zapísaná.

## 1. Cieľ projektu

Vytvoriť **globálny Sport Racket Comparator**: jeden dôveryhodný web na porovnávanie vybavenia pre tri raketové športy — **stolný tenis, padel a tenis**. Značka, názov, SEO, zdieľacie metadáta a budúce informačné architektúry majú tento širší účel komunikovať konzistentne.

Aktuálne sú verejne funkčné moduly **stolný tenis** a **padel**. Padelový katalóg sa priebežne rozširuje o zdrojovo overené modely; interné porovnávacie metriky sú orientačné a web to musí jasne uvádzať. Tenis zostáva plánovaným rozšírením a nesmie byť prezentovaný ako dostupná funkcia.

Vytvoriť webovú aplikáciu, ktorá hráčovi pomôže **porovnať dve kompletné stolnotenisové zostavy**:

- drevo (*blade*),
- poťah na forehande (*forehand rubber / FH rubber*),
- poťah na backhande (*backhand rubber / BH rubber*).

Výsledok nemá nahrádzať fyzické vyskúšanie rakety. Má však na základe dát o vybavení, hernom štýle a úrovni hráča vysvetliť, **aké rozdiely môže hráč reálne očakávať**, či je zmena vhodná a či pravdepodobne stojí za peniaze. Cieľom je obmedziť nákupy naslepo a následný predaj nevhodného vybavenia.

Vlastnosti pri porovnaní sú **orientačná interná škála**, nie laboratórne merania. Web to priebežne priznáva v texte.

## 2. Hlavný používateľský scenár

1. Hráč zadá svoju aktuálnu zostavu do ľavého panelu.
2. Do pravého panelu zadá zostavu, ktorú zvažuje kúpiť alebo s ňou chce porovnávať.
3. Vyplní profil hráča (sekcia 02).
4. Klikne na **Porovnať moje zostavy** a dostane:
   - štatistiku aktuálnej aj porovnávanej zostavy (rýchlosť, kontrola, spin);
   - krátky výsledok s tabuľkou vlastností a jasným zhrnutím;
   - vnútornú 4-krokovú kontrolu (technické údaje, súhra celej zostavy, herné situácie, rozpory/odolnosť verdiktu);
   - dlhšiu analýzu s desiatimi praktickými kapitolami.

## 3. Vstupy

### 3.1 Aktuálna zostava (`01`)

- Trojstupňový výber **drevo**: značka → model → rok výroby (predvolený `2026`, rozsah `1950`–`2026`). Vlastná značka/model + vlastný rok cez `INÉ / OTHER`.
- Trojstupňový výber **FH poťah**: značka → model → hrúbka špongie (`1.9 mm`, `2.0 mm`, `2.1 mm`, `INÉ` — pri voľbe `INÉ` sa select nahradí číselným vstupom v rozsahu `0–4`, krok `0.1`). Vlastná značka/model cez `INÉ / OTHER`.
- Rovnaký výber pre **BH poťah**.

### 3.2 Porovnávaná zostava (`02`)

Rovnaké polia ako pri aktuálnej zostave.

### 3.3 Profil hráča (`02 / Tvoj profil`)

- Vek (`<13`, `13–17`, `18–34` (predvolené), `35–49`, `50–64`, `65+`).
- Počet rokov hrania (`<1`, `1–3`, `4–7`, `8–15`, `15+`).
- Stav hráča: **Registrovaný** ↔ **Neregistrovaný** (predvolené). Prepnutie okamžite skryje/deaktivuje druhý z dvojice polí nižšie.
- Pre registrovaných: **Slovenská liga** (`Extra liga`…`10. liga`). Pre neregistrovaných: **Približná úroveň** (`Pod úrovňou 10. ligy` … `Približne Extra liga`).
- Všeobecná úroveň (`Začiatočník`, `Klubový hráč` (predvolené), `Ligový hráč`, `Výkonnostný hráč`).
- Tréningy za týždeň (`1×`, `2–3×` (predvolené), `4× a viac`).
- FH topspin (`Základný`, `Pravidelný` (predvolené), `Pokročilý`).
- BH topspin (`Základný` (predvolené), `Pravidelný`, `Pokročilý`).
- Práca nôh (`Základná`, `Priemerná` (predvolené), `Dobrá`, `Veľmi dobrá`).
- Vzdialenosť od stola (`Pri stole` (predvolené), `Stredná vzdialenosť`, `Ďalej od stola`).

### 3.4 Vlastné produkty

Každý select značky (drevo, FH, BH v oboch zostavách) má ako poslednú možnosť `INÉ / OTHER`. Po jej zvolení sa:

- zobrazia vstupné polia pre **vlastnú značku** a **vlastný model**;
- pri dreve navyše pole pre **vlastný rok výroby**;
- pri poťahu sa v katalógu označí ako neoverený a v porovnaní sa použije s neutrálnymi orientačnými hodnotami (`speed:70, control:70, spin:70, hardness:45`).

Ak hráč do poľa vlastnej značky/modelu začne písať, príslušný select sa mu automaticky prepne na `INÉ / OTHER`, aby sa nezobrazovala mätúca predvolená hodnota.

## 4. Výstupy

### 4.1 Štatistiky v kartách

Po výbere zostavy sa v jej karte zobrazia tri mini-štatistiky: **RÝCHLOSŤ**, **KONTROLA**, **SPIN** (v angličtine `SPEED`, `CONTROL`, `SPIN`; v češtine `RYCHLOST`, `KONTROLA`, `SPIN`). Po preklade do iného jazyka sa štatistiky prepočítajú.

### 4.2 Krátky výsledok

- Názvy dvoch driev, tabuľka vlastností, krátke hodnotenie hry pri stole, topspinu, bloku, polodistancia, jasné zhrnutie pocitových rozdielov.
- Skóre kompatibility s profilom hráča vyjadrené ako **X.X/10** (slovenské desatinné čiarky), slovne `takmer bez zmeny` / `mierne` / `citeľne` / `výrazne`.
- „Istota odporúčania" sa neukazuje ako samostatné číslo, ale v texte sa vždy vysvetľujú dôvody verdiktu.

### 4.3 Vnútorná 4-kroková kontrola

Pred krátkym výsledkom sa generuje blok so štyrmi kontrolami:

1. **Technické údaje** — interná konzistencia `type` / `feel` / `speed` / `control` / `spin` dvoch driev.
2. **Súhra celej zostavy** — počet tvrdých poťahov (≥48 hardness) v kombinácii `FH` + `BH` aktuálnej a porovnávanej zostavy. Ak ≥3, dostávajú váhu timing, fyzika a tuhosť dreva.
3. **Krízová kontrola herných situácií** — krátka hra, otvorenie topspinu, blok/kontra, polodistancia sa vyhodnocujú samostatne.
4. **Rozpory/odolnosť verdiktu** — overí, či sa verdikt nemení pri malých odchýlkach profilu.

Texty sú samostatne implementované pre `en`, `cs`, `sk`.

### 4.4 Dlhšia analýza

Dynamicky generovaná sekcia `DLHŠIA ANALÝZA:` (v `en` `LONGER ANALYSIS`, v `cs` `DELŠÍ ANALÝZA`) s desiatimi kapitolami:

1. konštrukcia,
2. prvé dojmy,
3. krátka hra,
4. FH topspin,
5. BH topspin,
6. blok,
7. polodistancia,
8. servis,
9. konkrétny kus (kusová variabilita),
10. verdikt.

### 4.5 Rok výroby dreva

V oboch zostavách ide zvoliť rok `1950`–`2026`. Pri oboch `2026` výsledok najmenej trikrát upozorní, že porovnáva aktuálne drevo a poťahy z roku 2026. Pri historických drevoch texty uvádzajú zvolené roky driev a zároveň, že poťahy sú z aktuálneho katalógu 2026.

## 5. Interný model porovnania

### 5.1 Normalizované vlastnosti

Každý produkt v katalógu `app.js` má normalizované vlastnosti na stupnici `0–100`:

- **Drevo**: `speed`, `control`, `spin`, `feel`, `type`.
- **Poťah**: `speed`, `control`, `spin`, `hardness`.

Hodnoty nie sú laboratórne merania — sú to interné orientačné hodnoty odvodené z oficiálnych parametrov výrobcu.

### 5.2 Váhy pre zostavu

- `speed_zostavy = round(blade.speed * 0.48 + fh.speed * 0.30 + bh.speed * 0.22)`
- `control_zostavy = round(blade.control * 0.48 + fh.control * 0.30 + bh.control * 0.22)`
- `spin_zostavy = round(blade.spin * 0.38 + fh.spin * 0.37 + bh.spin * 0.25)`

### 5.3 Vplyv hrúbky poťahu

Rozdiel v hrúbke oproti nominálnej hodnote (`2.0 mm`) sa prepočíta:

- `speed' = clamp(speed + dt * 13)`
- `control' = clamp(control − dt * 9)`
- `spin' = clamp(spin + dt * 5)`

kde `dt` je rozdiel v milimetroch.

### 5.4 Vlastné produkty

Použijú sa neutrálne hodnoty `speed:70, control:70, spin:70, hardness:45`, názov sa doplní zadaným textom a v UI sú označené ako neoverené.

## 6. Katalóg dát

### 6.1 Charakteristika

- Dva katalógy priamo v `app.js`: `const blades = [...]` a `const rubbers = [...]`.
- Každá položka má unikátne `id`, vždy uvádza `brand` a `name`. Poťahy majú navyše `hardness`. Dreva majú navyše `feel`, `type`, niektoré historické `weight`/`ply`.
- Poradie v rámci značky je abecedné.
- Butterfly je v každej kategórii **vždy prvá** (predvolená značka), ostatné značky sú za ňou abecedne, `INÉ / OTHER` je vždy posledné.

### 6.2 Aktuálny rozsah

- **Dreva**: 684 modelov od viac než 20 výrobcov (Butterfly 41, Nittaku 28, DHS 22, Stiga 26, Yasaka 22, Donic 82, Tibhar 57, Xiom 57, JOOLA 26, Sanwei 76, VICTAS 36, Victas, Dr. Neubauer 27, Hallmark 7, Barna Original 8, GEWO 43, Friendship 729 25, Yinhe 40, Andro 35, Der Materialspezialist 25, Palio, Loki atď.).
- **Poťahy**: 711 modelov od výrobcov Butterfly 44, Nittaku 43, DHS, Stiga 32, Yasaka 38, Xiom 59, VICTAS 44, Tibhar 45, GEWO 45, JOOLA 23, Sanwei 19, Loki 24, Yinhe 12, Palio 41, Friendship, Donic, Dr. Neubauer, Andro, Der Materialspezialist, Hallmark a ďalšie.
- Súhrn: 1 395 unikátnych ID. Počty držia aj statický banner v hero (`684 BLADES · 711 RUBBERS` a prezentačné `27 301 RACKET COMPARISONS`).

### 6.3 Pravidlá kvality dát

- Vlastnosti overené prioritne z oficiálnych stránok výrobcov a databáz ITTF LARC (`Equipment_RacketCovering_1July2026_1936.pdf`). Revspin a recenzie slúžia len ako kontrola rozumnosti.
- TSP bolo odstránené z katalógu na žiadosť používateľa.
- Homologizácie, ktoré sú v LARC, ale nie v oficiálnom katalógu výrobcu pre aktuálnu sezónu, sa nepridávajú.
- Farebné/redakčné varianty sa v LARC nespájajú; ak majú zásadne odlišné vlastnosti, sú samostatné položky (napr. Mantra Pro M Cybershape, Quantum X Pro farebné edície — každá uvádzaná raz a s internými parametrami).
- Viacero záznamov rovnakej položky (napr. duplicitný zápis DNA Platinum XH pod druhým názvom značky) sa odstráni, aby katalóg nerobil duplicity.

### 6.4 Plánované športové moduly

- **Stolný tenis** je prvý aktívny modul: porovnáva drevá, FH/BH poťahy a kompletné zostavy.
- **Padel** je verejne dostupná podstránka `/padel/`: porovnáva výhradne dve kompletné padelové paly (bez stolnotenisových poťahov a driev) cez značku → model. Ak model nie je v katalógu, `INÉ / NOT LISTED` otvorí tri prázdne polia: značka, model a rok výroby (`1950`–`2026`). Jej profil používa padelové vstupy: skúsenosť, frekvenciu, typ súťaženia, hernú stranu, prioritu hry a komfort ruky. Katalóg má 154 modelov: kompletnú základnú 28-modelovú kolekciu Adidas Padel 2026 z oficiálneho obchodu All For Padel, 16 aktuálnych modelov Babolat 2026 z oficiálneho katalógu, 24 komerčných modelov Bullpadel 2026 z oficiálnych stránok Bullpadel a overeného oficiálneho predajcu, 11 aktuálnych sezónnych modelov HEAD 2026 z oficiálneho obchodu HEAD (Coello, Radical, Bolt a Vibe), 25 aktuálne predávaných odlišných typov KUIKMA podľa Decathlonu (bez farebných verzií, setov a použitých kusov), 16 aktuálne predávaných odlišných typov NOX 2026 z oficiálnej kolekcie (bez duplicitných farebných verzií X-Hero a X-Zero), 16 nových typov OXDOG 2026 z oficiálnej kolekcie (Ultimate, Hyper 2.0, Pure a Woman Air), 3 aktuálne predávané odlišné typy Siux 2026 z oficiálneho obchodu (Electra Pro, Trilogy Pro a Trilogy Elite), 2 aktuálne predávané Siux 2025 (Fenix Pro 5, Pegasus 3), 1 aktuálne predávaný Siux 2024 (Electra Stupa Pro ST3) a 12 aktuálne predávaných odlišných typov Wilson (Bela V3, Defy V1, Endure V1, Blade V4 a Carbon Force C; bez farebných a SE variánt). Katalóg pri starších palách zobrazí správny ročník modelu. Po prvom otvorení je ľavá strana predvolene nastavená na Babolat Technical Viper 3.0, najvýkonnejší Babolat v internom profile katalógu. Modelové názvy a fyzické špecifikácie sú overené na oficiálnom zdroji; interné metriky sú orientačné. FIP pravidlá požadujú palu vyrobenú podľa homologizačnej prílohy, ale verejný FIP zoznam certifikácií uvádza lopty, nie samostatný zoznam schválených pal; web preto nesmie pri individuálnom modeli tvrdiť „FIP approved“. Stránka je indexovateľná, má canonical URL a je v sitemape. Hero používa samostatný obrázok dvoch okrúhlych padelových pal: ľavá má čiernu karbónovú plochu s veľkým diagonálnym bielym ťahom štetcom, pravá čierno-biely striekaný vzor na úderovej ploche, a text zdôrazňuje padelové metriky power, control a spin. Na mobile sú tri vstupné športové karty zobrazené samostatne pod sebou; na desktope zostávajú vedľa seba. Na podstránke nie sú stolnotenisové články ani DIY článok o stojane na loptičky.
- **Tenis** je verejne dostupná podstránka `/tennis/`: porovnáva dve kompletné tenisové rakety cez značku → model a obsahuje voľný neoverený model (značka, model, rok výroby `1950`–`2026`). Katalóg má 57 reprezentatívnych modelov od 12 výrobcov: Artengo, Babolat, Diadem, Dunlop, HEAD, Prince, ProKennex, Solinco, Tecnifibre, Volkl, Wilson a Yonex. ARTENGO obsahuje osem aktuálne predávaných odlišných dospelých typov z oficiálneho Decathlon katalógu 2026: TR 190 Lite V2, TR 500, TR 500 Lite, TR 930 Spin 285, TR 930 Spin Pro, TR 990 Power Lite, TR 990 Power a TR 990 Power Pro; farebný Softfeel variant TR 500 nie je duplicitný model. BABOLAT obsahuje 18 aktuálnych odlišných dospelých typov 2026 z oficiálneho katalógu: Pure Aero Gen9 (98, štandard, Lite, +, S Lite, Team), Pure Drive Gen11 (107, 98, štandard, Lite, +, S Lite, Team) a Evo Gen2 (Aero, Aero Lite, Drive, Drive Lite, Strike). Farebné edície a viac-kusové balenia sa nepočítajú ako samostatné modely. Pri každom modeli uvádza rok, hmotnosť bez výpletu, veľkosť hlavy a vzor výpletu; metriky power, control a spin sú orientačné hodnoty komparátora, nie hodnotenia výrobcu. Po prvom otvorení formulár predvolene porovnáva Babolat Pure Aero 98 Gen9 (ľavá strana; 305 g, 630 cm², 16×20) s HEAD Speed MP (pravá strana). Profil používa tenisové vstupy pre skúsenosť, frekvenciu, súťažný kontext, štýl hry, prioritu a komfort ruky. World Tennis (predtým ITF) nezverejňuje register schválených značiek alebo štandardných rakiet: turnajová raketa musí spĺňať Appendix II pravidiel tenisu. Stránka preto neuvádza individuálne „ITF approved“ tvrdenia; upozorňuje, že ide o konvenčné, neupravené rámové rakety a organizátor môže mať doplnkové podmienky. Je indexovateľná, má canonical URL, odkaz z domáceho výberu a záznam v sitemape. Výplet môže pribudnúť neskôr iba s vlastnými dátami a zrozumiteľnou metodikou.
- Každý nový šport sa do verejného porovnávača pridá až spolu s vlastným katalógom, vysvetlením vlastností, metodikou, SEO stránkami a rozšírením kontrol v `tools/check.mjs`.
- Domovská stránka je spoločným vstupom značky: pri prvom otvorení zobrazuje iba vizuálny výber **Padel / Tennis / Table Tennis** cez `assets/sport-racket-comparator-launcher-v3.png`. Všetky tri karty vedú na funkčný modul. Padelová pala leží na hladkom modrom kurte, tenisová raketa je zelená, leží na antuke s pravidelným výpletom a žltou omotávkou, a stolnotenisová karta má čistý čierny stôl bez sieťky a červeného okraja. Na mobile má každá z troch kariet rovnakú plnú šírku a pomer strán.

## 7. Jazyk

Verejná stránka používa výlučne **angličtinu** (`<html lang="en">`) vrátane SEO metadát, formulára, výsledkov porovnania a blogu. Prepínač jazykov nie je súčasťou rozhrania. Úroveň registrovaného hráča je uvádzaná všeobecne ako liga/divízia, nie ako slovenská liga.

## 8. Spätná väzba a analytika

### 8.1 Spätná väzba

Formulár v spodnej časti stránky (`feedback-section`):

- Typ: `Chýbajúce drevo alebo poťah` / `Návrh funkcie` / `Chyba v údajoch` / `Iné`.
- E-mail (nepovinný).
- Text (1–1000 znakov).

Spracovanie: návrhy sa ukladajú iba do `localStorage` prehliadača (kľúč `racket-comparator-feedback`). Server ani e-mail nie sú pripojené — text sa zobrazí ako „uložené v tomto prehliadači".

### 8.2 Google Analytics 4

- Vlastnosť `Racket Comparator`, webový stream `https://racketcomparator.com`, Measurement ID `G-1HD6YG4XCX`.
- Consent default: `analytics_storage: 'denied'`. Prepne sa na `'granted'` len po kliknutí na **Súhlasím**.
- Súhlas sa ukladá do `localStorage` (`racket-comparator-analytics-consent`).
- Po uložení súhlasu sa pri reálnom kliknutí na **Porovnať moje zostavy** odošle udalosť `racket_comparison` (`event_category: 'engagement'`, `event_label: 'Compare my setups'`). Zmeny formuláru a prepnutie jazyka sa **nepočítajú**.

## 9. Blog

- Článok `DIY Table Tennis Ball Stand: A Recycled €2 Training Upgrade` je na `blog/diy-table-tennis-ball-stand/`. Vlastný priečinok s vlastným `index.html`, `blog.js`, lokálnym prepínačom 🇬🇧 🇸🇰 🇨🇿, 5 vlastnými fotografiami v `assets/blog/`.
- Web zobrazuje pod tlačidlom **Porovnať moje zostavy** dva veľké tmavé náhľady: najprv porovnanie Viscaria vs Timo Boll ALC, pod ním článok o DIY stojane na loptičky. Nenápadný blog odkaz zostáva aj v pätičke.

## 10. Dizajnový smer (Impeccable)

- Riadiť sa všeobecnými princípmi projektu Impeccable, nie však jeho vlastnou tmavo-zlatou identitou. Racket Comparator zostáva športový, presný a ľahko čitateľný.
- **Persuade** režim: hero a prvé rozhodovanie (majú vysvetliť hodnotu a viesť k porovnaniu).
- **Operate** režim: samotný porovnávač (prednosť majú rýchlosť výberu, skenovateľnosť, konzistentné ovládanie a jasné výsledky).
- Fonty: **Manrope** pre text/UI, **DM Mono** iba pre krátke systémové štítky. Žiadne Inter, žiadne generické gradienty, žiadne glassmorphism, žiadne dekoratívne neonové žiary, žiadne ikony v zaoblených štvorcoch nad každým nadpisom.
- Podpora veľkých monitorov: od `1500 px` sa hlavné sekcie rozširujú na `1520 px`, od `2100 px` je obsah limitovaný na `1680 px`.

## 11. Publikovanie

- Web je **statická stránka** bez servera. Build krok neexistuje.
- Lokálny Git repozitár je zdroj pravdy.
- Verejná verzia: `https://porovnavacrakiet.github.io/` s vlastnou doménou `racketcomparator.com`. `CNAME` je v repozitári a vždy obsahuje presne `racketcomparator.com`.
- Slovenská doména `porovnavacrakiet.sk` je vedená v samostatnom verejnom GitHub repozitári `porovnavacrakiet/porovnavacrakiet-sk-redirect` (lokálna kópia `redirect-porovnavacrakiet-sk/`) a trvalo presmeruje na `https://racketcomparator.com`.
- DNS pre `.com`: štyri GitHub A záznamy `185.199.108.153` – `185.199.111.153` a `www` CNAME na `porovnavacrakiet.github.io`.
- Push na GitHub prechádza cez GitHub Contents API; po každom push sa spúšťa `POST /pages/builds` a overuje sa cez `curl`, kým Pages neservíruje nový obsah.
- GitLab je mirror/backup remote `git@gitlab.com:porovnavacrakiet/racket-comparator-backup.git`, SSH kľúč `~/.ssh/id_ed25519_gitlab_racket_comparator`. Po každej otestovanej úprave sa pushuje aj tam.
- Pred každým publishnutím (commit, Contents API upload, Pages rebuild, push na GitLab) musí prejsť `node tools/check.mjs` (`All N checks passed.`). Výslovne bez explicitného príkazu používateľa agent **nepublishuje**.

## 12. SEO základ

- `canonical`: `https://racketcomparator.com/`.
- Hlavný názov značky pre vyhľadávače, zdieľanie a structured data je `SPORT RACKET COMPARATOR`; anglický opis domovskej stránky je `Compare two rackets for your playing style.`.
- SEO sa buduje oddelene pre šport a zámer používateľa: relevantné viditeľné texty, presné titulky, opisy a samostatné indexovateľné porovnávacie stránky. Nepoužíva skrytý text, nesúvisiace kľúčové slová ani tvrdenia o dostupnosti modulov, ktoré ešte neexistujú.
- `robots.txt` a `sitemap.xml` sú pripravené pre Google Search Console; sitemap uvádza kanonickú domovskú stránku aj každú indexovateľnú stránku blogu alebo porovnania.
- Stabilné anglické SEO porovnávacie stránky majú vlastné kanonické URL, Article a Breadcrumb structured data, praktické odporúčanie, metodiku a odkaz do porovnávača. Každá obsahuje aj jednotný blok „Data that changes the choice“ s normalizovanými dátami katalógu, stručným vysvetlením ich hraníc a konkrétnym dopadom na hru. Aktuálne pokrývajú `viscaria-vs-timo-boll-alc`, `viscaria-vs-fan-zhendong-alc`, `viscaria-vs-innerforce-layer-alc`, `tenergy-05-vs-dignics-05` a `dignics-05-vs-dignics-09c`; všetky sú v sitemape s prioritou 0.8.
- Schema.org `WebSite` a `WebApplication` (bez vymyslených recenzií/ceny).
- OG / Twitter card `assets/table-tennis-rackets-hero.png`.
- Favicon `assets/racket-comparator-favicon.png`: čierny štvorcový monogram s bielym `RA` nad `CO`, pripojený na domovskej stránke, v porovnaniach aj na blogu.
- Vlastníctvo v Google Search Console: `sc-domain:racketcomparator.com`, overené cez WebSupport TXT `google-site-verification=cpCLBeuiJvN7lSlAwnOKGzU786x7YtuTAhN66rm4Yiw` (neodstraňovať).

## 13. Čo tento web zámerne nemá

- Žiadny bundler, `package.json`, `node_modules`.
- Žiadny CI server.
- Žiadny unit test framework (katalógové invarianty v `tools/check.mjs` slúžia ako regresná sieť).
- Žiadne backendové API (vlastné produkty sa ukladajú len do `localStorage`).
- Žiadna real-time integrácia na internete (stránka nesmie predstierať živé vyhľadávanie internetu pri overovaní produktov).
