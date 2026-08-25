# POROVNÁVAČ RAKIET — stav projektu

Tento súbor slúži ako odovzdávací kontext pre nový chat v Codexe.

## Cieľ

Webová aplikácia porovnáva dve stolnotenisové zostavy: drevo (*blade*), forehandový poťah (*FH rubber*) a backhandový poťah (*BH rubber*). Výsledok vysvetľuje relatívnu zmenu rýchlosti, kontroly a spinu vzhľadom na profil hráča.

## Súbory

- `index.html` — rozhranie aplikácie.
- `styles.css` — responzívny vzhľad.
- `app.js` — lokálne produktové dáta a výpočet porovnania.
- `assets/table-tennis-rackets-hero.png` — AI vytvorený hero obrázok s modrou a červenou raketou.
- `PLAN.md` — pôvodný produktový plán.

## Aktuálne implementované funkcie

- Úvodný tmavý banner je cez celú šírku a začína navrchu stránky; horná navigačná lišta je zámerne skrytá.
- Blok „01 / Tvoje zostavy“ a „Čo máš a čo zvažuješ?“ bol odstránený, aby výberové karty začínali tesne pod bannerom a boli viditeľné hneď po otvorení.
- Nadpis v bannere je `POROVNÁVAČ RAKIET` so slovenskou diakritikou. Šípky medzi raketami sú modré/červené s bielym lemom.
- Vpravo hore v bannere je prepínač `ENG` / `SK`; momentálne prekladá úvodnú časť stránky.
- V režime ENG je v porovnávacích kartách anglický názov hlavný (väčší) a slovenský ekvivalent sekundárny (menší), napr. `Blade` + `Drevo`.
- Dva panely zostavy: aktuálna a porovnávaná.
- Výber funguje v dvoch krokoch: značka → model, osobitne pre drevo, FH a BH poťah.
- Modely dreiev aj poťahov sa po výbere značky zobrazujú v abecednom poradí A–Z.
- Pri FH a BH poťahoch funguje výber v troch krokoch: značka → model → ručne zvolená hrúbka. Povolené voľby sú `1.9 mm`, `2.0 mm`, `2.1 mm` a `INÉ`; hrúbka sa zohľadní orientačnou korekciou rýchlosti, kontroly a spinu.
- Pri všetkých výberoch značky je posledná možnosť `INÉ / OTHER`. Po voľbe sa zobrazí vstup pre vlastnú značku a model. Takýto produkt je pri porovnaní použitý s neutrálnymi orientačnými hodnotami a v UI je označený ako neoverený.
- Profil hráča obsahuje vek, roky hrania, stav registrovaný/neregistrovaný, slovenskú Extra ligu až 10. ligu pre registrovaných, ekvivalent úrovne pre neregistrovaných, všeobecnú úroveň, počet tréningov, FH/BH topspin, prácu nôh a vzdialenosť od stola.
- Pri voľbe „Registrovaný hráč“ je pole porovnávajúce úroveň s registrovanými úplne skryté a deaktivované; zobrazí sa iba výber Slovenskej ligy.
- Tlačidlo porovnania vytvára vysvetliteľné skóre kompatibility a odporúčanie.
- Výsledok porovnania používa stručný expert formát: názov dvoch dreiev, tabuľku vlastností, krátke hodnotenie hry pri stole, topspinu, bloku, polodistancie a jasné zhrnutie pocitových rozdielov.
- Pod krátkym výsledkom sa dynamicky generuje aj sekcia `DLHŠIA ANALÝZA:` s desiatimi praktickými kapitolami: konštrukcia, prvé dojmy, krátka hra, FH/BH topspin, blok, polodistancia, servis, konkrétny kus a verdikt.

## Katalóg dát

- Jazykové pravidlo: v slovenských textoch vždy používať množné číslo „driev“ (napríklad 5 driev, 7 driev, 25 driev); nepoužívať nesprávny dlhší variant.
- Zásada zdrojov: vlastnosti a existenciu driev/poťahov overovať prioritne na oficiálnych stránkach výrobcov a v databázach ITTF; Revspin používať ako doplnkový porovnávací zdroj. Pätka webu uvádza: „Údaje v katalógu overujeme podľa oficiálnych stránok výrobcov, databáz ITTF a porovnávacích dát Revspin. • 2026“.
- Vlastné polia: pri kliknutí do poľa vlastnej značky alebo modelu sa v príslušnom hornom výbere vyprázdni značka, model a pri poťahu aj hrúbka. Platí pre drevo, FH aj BH v oboch zostavách; napísaný vlastný produkt sa potom používa ako vlastná položka bez mätúceho predvoleného Butterfly/Dignics.
- Predvolený poťah vo všetkých štyroch poliach FH/BH je Butterfly Dignics 09C · 2.1 mm; Zyre 03 už nie je predvolenou voľbou.
- Yasaka: rozšírené z jedného na 22 modelov. Katalóg zahŕňa dostupný Ma Lin Extra Offensive aj aktuálne medzinárodné drevá 2040, Atletico, Battle Balsa, Extra, Falck, Goiabao, Masamune, Max, Myth, Resonate a Sweden. Zdroj: oficiálny Yasaka globálny katalóg (21 aktuálnych driev) a český predajca PingPongObchod pre Ma Lin Extra Offensive.
- Yasaka poťahy: z jedného na 38 aktuálnych modelov v abecednom poradí, podľa japonského katalógu výrobcu a ITTF LARC z 1. júla 2026. Zahrnuté sú Rakza, Mark V, Rigan, Dragon, Xtend, poťahy s krátkymi aj dlhými nopmi a anti-spin; veľkoploptičkové modely nie sú zaradené. Zdroj: https://www.yasakajp.com/goods/rub/ a ITTF LARC.
- Yinhe poťahy: z jedného na 12 aktuálne predávaných modelov v abecednom poradí. Výber vychádza z aktuálne skladovej ponuky Yinhe pre rok 2026 a bol spárovaný s homologizáciami Yinhe/Milky Way v ITTF LARC z 1. júla 2026: 955 Long, Big Dipper, Earth, Jupiter, Mercury, Moon, Pluto, Qing a Uranus. Zdroj: https://yinhe.com.au/collections/rubbers a ITTF LARC.
- andro: rozšírené z jedného na 35 aktuálnych driev (Synteliac, Treiber, Timber, Kanter, TP Ligna, Legacy, Novacell, Signature a Unity) podľa oficiálnej stránky andro pre roky 2025–2026. Pri vlastných poliach je vyprázdnenie katalógových selectov spúšťané už pri `pointerdown`, focus, keydown aj input, aby sa predvolená značka/model nezobrazovali počas písania.
- andro poťahy: rozšírené na aktuálne modely z oficiálneho katalógu a overené proti ITTF LARC z 1. júla 2026: Backside, Blowfish, BYPE, Chintac, GTT, Hexer, HY-Q, NUZN, Plasma, Rasant/Rasanter, Shifter a Vertic. Modely v rozbaľovacom výbere sú radené abecedne.
- Výrobcovia: výbery značiek dreva aj poťahov majú Butterfly vždy ako prvú predvolenú značku; všetky ostatné značky sú hneď za ňou triedené abecedne. Možnosť „INÉ / OTHER“ zostáva vždy posledná.
- Barna Original: doplnených sedem driev Champion, Stability, Winner, Victory, Super Balsa, Triumph a Supercombi; spolu s už existujúcim Classic Defensive sú modely v značke radené abecedne.
- Profil hráča: po zvolení „Registrovaný hráč“ sa pole „Približná úroveň voči registrovaným“ okamžite skryje a jeho výber sa vyprázdni; namiesto neho sa zobrazí výber Slovenskej ligy. Prepnutie používa `change`, priamy `onchange`, CSS a HTML atribút `hidden` kvôli spoľahlivému správaniu v prehliadačoch.
- Jazyk ENG: prepínač prekladá celú stránku vrátane metadát, formulárov a ich možností, vlastných produktov, pomocných textov, štatistík, spätnej väzby, kompatibility a kompletnej krátkej aj desaťbodovej analýzy výsledku. Dynamický obsah sa pri zmene jazyka znovu vykreslí bez posunu stránky.
- Google Analytics 4: vlastnosť `Racket Comparator` a webový stream `https://racketcomparator.com` používajú Measurement ID `G-1HD6YG4XCX`. Po potvrdení analytických cookies sa pri reálnom kliknutí na `Compare my setups` odošle udalosť `racket_comparison`; zmeny formulára ani prepnutie jazyka sa nepočítajú. Súhlas sa lokálne uloží pod `racket-comparator-analytics-consent`.
- Blog: článok `DIY Table Tennis Ball Stand: A Recycled €2 Training Upgrade` je na `/blog/diy-table-tennis-ball-stand/`. Má prepínač 🇬🇧 🇸🇰 🇨🇿, ktorý prekladá celý text článku, navigáciu, titulok, popisy fotografií a CTA; voľba sa v prehliadači zapamätá. Používa päť vlastných fotografií v `assets/blog/`; na hlavnej stránke je jeho veľký tmavý náhľad s fotografiou hotového stojana umiestnený priamo pod náhľadom Viscaria vs Timo Boll ALC. Nenápadný odkaz zostáva aj v pätičke.
- Päť stabilných anglických SEO porovnaní v `/compare/` má jednotný blok „Data that changes the choice“: tabuľku normalizovaných hodnôt z katalógu, obmedzenie interpretácie dát a dve konkrétne praktické dôsledky pre hráča. Tak každá porovnávacia stránka vedľa odporúčania ukazuje aj dáta a reálny rozdiel v hre.
- Zdieľaný náhľad hlavnej stránky: Open Graph a Twitter meta údaje používajú `assets/table-tennis-rackets-hero.png` (dve modrá/červená rakety), aby sociálne siete pri zdieľaní `racketcomparator.com` nevyberali blogovú fotografiu stojana.
- Favicon webu je `assets/racket-comparator-favicon.png`: čierny štvorcový monogram s bielym `RA` nad `CO`; odkaz je vložený na domovskej stránke, všetkých porovnaniach aj blogu.
- Predvolený jazyk stránky je angličtina. Prepínač v hero bannere používa text `LANGUAGE` a tri malé vlajky: 🇬🇧 English, 🇸🇰 Slovenčina a 🇨🇿 Čeština. Anglický hero banner, titulok prehliadača, názov značky a pätička používajú pomenovanie `RACKET COMPARATOR`; slovenská verzia `POROVNÁVAČ RAKIET` a česká `POROVNÁVAČ PALEK`. Česká verzia zahŕňa formulár, výsledok, 4× kontrolu aj dlhú analýzu.
- Hero obrázok: modrý a červený poťah majú čistý realistický lesklý povrch bez nápisov, log, symbolov alebo výrobných značiek. Finálna samostatná kópia je `assets/table-tennis-rackets-hero-clean-gloss.png`; hlavný web používa rovnaký obsah v `assets/table-tennis-rackets-hero.png`.
- Rok výroby dreva: pri dreve v oboch zostavách je výber rokov 1998–2026 s predvoleným rokom 2026. Výsledok zobrazuje zvolené roky; pri oboch rokoch 2026 najmenej trikrát uvádza, že porovnáva aktuálne drevá a poťahy z roku 2026. Pri historickom dreve používa zvolený rok a uvádza, že poťahy sú z aktuálneho katalógu 2026.
- Široké monitory: od 1500 px sa hlavné sekcie rozširujú na 1520 px, formulár profilu používa štyri stĺpce a karty majú väčšie rozostupy; od 2100 px je obsah limitovaný na 1680 px a hero obrázok sa už neúmerne nezväčšuje.
- Drevo: viac než 20 výrobcov. Butterfly má 41 modelov v ponuke vrátane Viscaria, Fan Zhendong, Timo Boll, Harimoto, Mizutani, Lin Yun-Ju, Ovtcharov, Franziska, Freitas, Apolonia, Revoldia, Primorac, Petr Korbel a samostatne Petr Korbel Japan (Made in Japan, 5-vrstvové drevo).
- Poťahy: Butterfly má 44 voliteľných položiek podľa aktuálneho japonského oficiálneho katalógu (niektoré sú samostatné varianty hrúbky). Zahrnuté sú Zyre 03, Dignics, Tenergy, Glayzer, Rozena, Sriver, short pips, long pips a anti-spin.
- Ďalšie značky: Nittaku, DHS, Stiga, Yasaka, XiOM, Donic, Tibhar, Joola, andro, Yinhe, Sanwei, Gewo, Victas, Friendship 729, Dr. Neubauer, Der Materialspezialist, Hallmark, Barna Original, Palio a Loki.
- Der Materialspezialist: podľa oficiálneho katalógu výrobcu z augusta 2026 je vo výbere všetkých 25 aktuálne ponúkaných driev. Modely sa v selecte radia abecedne.
- Donic: podľa oficiálneho katalógu výrobcu pre sezónu 2026 je vo výbere všetkých 82 aktuálne ponúkaných driev zo štyroch strán katalógu. Modely sa v selecte radia abecedne.
- Dr. Neubauer: podľa oficiálneho obchodu výrobcu z augusta 2026 je vo výbere všetkých 27 aktuálne ponúkaných driev. Modely sa v selecte radia abecedne.
- Friendship 729: podľa aktuálneho oficiálneho produktového katalógu výrobcu je vo výbere všetkých 25 driev z troch strán kategórie Blade; nesprávne zaradená loptička KTC sa nezapočítava. Modely sa v selecte radia abecedne.
- GEWO: podľa oficiálneho katalógu výrobcu z augusta 2026 je vo výbere všetkých 43 aktuálne ponúkaných driev z dvoch strán kategórie Blades. Modely sa v selecte radia abecedne.
- Hallmark: podľa oficiálneho katalógu značky u distribútora GEWO z augusta 2026 je vo výbere všetkých 7 aktuálne ponúkaných driev. Pri kombinačných modeloch sa zohľadňujú rozdielne FH/BH strany; modely sa v selecte radia abecedne.
- JOOLA: podľa oficiálneho katalógu výrobcu z augusta 2026 je vo výbere všetkých 26 aktuálne ponúkaných driev z oboch strán kategórie Table Tennis Blades. Modely sa v selecte radia abecedne.
- SANWEI: podľa oficiálneho katalógu výrobcu z augusta 2026 je vo výbere všetkých 76 aktuálne ponúkaných driev zo všetkých siedmich strán kategórie Blades. Modely sa v selecte radia abecedne.
- TIBHAR: podľa oficiálnej kategórie výrobcu z augusta 2026 je vo výbere všetkých 57 aktuálne uvádzaných driev. Zoznam a dostupnosť boli krížovo skontrolované s katalógom TIBHAR a špecializovanými obchodmi; v selecte sa modely radia abecedne.
- VICTAS: podľa aktuálneho európskeho katalógu výrobcu z augusta 2026 je vo výbere všetkých 36 driev relevantných pre európsky/slovenský trh. Japonská regionálna ponuka a špecializované obchody slúžili ako krížová kontrola; staré skladové a ukončené modely sa automaticky nepridávajú. Modely sa v selecte radia abecedne.
- VICTAS poťahy (stav 3. august 2026): pôvodný jeden záznam V > 15 Extra bol nahradený všetkými 44 aktuálne predávanými modelmi z dvoch strán oficiálneho európskeho katalógu VICTAS. Zahŕňa backside série V >, VENTUS, VJ, TRIPLE, VS, Swat a XEGNA, short-pips VO/SPECTOL/SPINPIPS aj long-pips CURL. Každý z 44 názvov je krížovo overený voči ITTF LARC 01.07.2026; modely sa v selecte radia abecedne. Rýchlosť, kontrola, spin a tvrdosť sú normalizované interné orientačné hodnoty podľa kategórie a oficiálnych parametrov, nie laboratórne merania.
- XIOM: podľa aktuálneho globálneho katalógu výrobcu z augusta 2026 je vo výbere všetkých 57 driev z piatich strán kategórie BLADE, vrátane nových sérií Hayabusa, Indeed, Artemis a Tetra. Ponuka bola krížovo skontrolovaná s európskym webom a špecializovanými obchodmi; modely sa v selecte radia abecedne.
- XIOM poťahy (stav 3. august 2026): pôvodný jeden záznam VEGA Pro bol nahradený všetkými 59 aktuálnymi modelmi z piatich strán oficiálneho globálneho katalógu XIOM. Zahŕňa JEKYLL & HYDE, MUSA, OMEGA 2–8, SIGMA, TAU, VEGA a ZETA. Obchodné názvy sú krížovo spárované s homologizovanými názvami v ITTF LARC 01.07.2026 (napr. TAU2 ↔ Tau II, OMEGA 8 ↔ Omega VIII); modely sa v selecte radia abecedne. Rýchlosť, kontrola, spin a tvrdosť sú normalizované interné orientačné hodnoty, nie laboratórne merania.
- YINHE: oficiálny web výrobcu uvádza produktové série, nie úplný aktuálny zoznam jednotlivých modelov. Pre rok 2026 je preto vo výbere 40 overených samostatných driev, potvrdených oficiálnymi sériami YINHE a aktuálnym odborným katalógom predajcu Eacheng; mini rakety, hotové rakety, stroje, duplicity rukovätí a staré výpredaje sa nezapočítavajú. Modely sa v selecte radia abecedne.
- TSP: výrobca aj všetky jeho poťahy boli na žiadosť používateľa odstránené z ponuky webu.
- Finálne porovnanie: pred krátkym výsledkom a dlhou analýzou sa zobrazuje 4× vnútorná kontrola (technické údaje, súhra celej zostavy, herné situácie, rozpory/odolnosť verdiktu). Blogy a recenzie hráčov sa používajú len ako kontrola rozumnosti pri dostupných overených modelových podkladoch; stránka nesmie predstierať živé vyhľadávanie internetu.
- Vlastnosti sú zatiaľ orientačná interná škála pre funkčný prototyp. Nie sú laboratórne merania.
- Nittaku bolo v poslednej dávke rozšírené na 28 dreiev vrátane H301 NXD, Hino Blade, Hina Hayata, Acoustic/Violin/Violoncello, Ma Long, Mima Ito, Kyo Hyo, Latika, Factive 7 a Barwell Fleet.
- Doplnené historické Nittaku Barwell Fleet (7+2 glass fiber, približne 88 g); ide o ukončený model, ale zostáva relevantný pri porovnaniach starších zostáv.
- Butterfly Viscaria Super ALC je v katalógu pod presným názvom `Viscaria Super ALC` (nebola pridávaná duplicitne).
- Stiga bolo rozšírené na 26 dreiev vrátane Cybershape Carbon CWT Truls Edition, Inspira/Aura Hybrid Carbon, Dynasty Carbon Xu Xin, Carbonado, Legacy, Nostalgic, Clipper, Offensive Classic a Allround Classic.
- DHS bolo rozšírené na 22 dreiev vrátane Hurricane Long 3/5/5X/5H/Golden/W968, Hurricane 301, Wang Chuqin, Hurricane King/Hao, Power G, PG a Classic 08X.

## Overené zdroje použitých katalógov

- Butterfly Global: https://www.butterfly-global.com/en/products/blade/
- Butterfly Japan — rubbers: https://www.butterfly.shop/category/RUBBER/?__pc_site_mode=pc
- DHS rubbers (oficiálny katalóg, stav 2026): https://dhs-tt.com/dhs_en/rubbers
- Donic rubbers (oficiálny katalóg Collection 2026): https://www.donic.com/en/rubbers/
- Dr. Neubauer rubbers (oficiálny obchod, stav 2026): https://www.drneubauer.com/shop.php?cat=1&cat_s=0&lang=us&prod=0
- Friendship 729 rubbers (oficiálny katalóg výrobcu, stav 2026): http://en.729sports.com/product/1.html
- GEWO rubbers (oficiálny katalóg výrobcu, stav 2026): https://www.gewo-tt.com/en/gewo/rubbers/
- JOOLA rubbers (oficiálny katalóg výrobcu, stav august 2026): https://joola.com/collections/table-tennis-rubbers
- LOKI rubbers (oficiálny katalóg výrobcu, stav august 2026): https://www.lokisport.com/pro_27974401_8022924_0_1.html
- Nittaku rubbers (oficiálny katalóg výrobcu, stav august 2026): https://www.nittaku.com/products/rubbers/
- Nittaku 2026 Product Collection Catalog: https://www.nittaku.com/products/catalog/
- PALIO rubbers (aktuálna špecializovaná ponuka, stav august 2026): https://tokspin.com/product-category/category-major/category-rubber/brands-category-rubber/palio-brands-category-rubber/
- SANWEI rubbers (oficiálny obchod výrobcu, stav august 2026): https://sanweisport.com/en/product-category/rubber/
- TIBHAR rubbers (oficiálne aktuálne kategórie výrobcu): https://tibhar.info/en/product-category/rubbers/pimples-inside/
- TIBHAR Catalogue 2026/2027: https://www.tibhar.info/Katalog/webpdf/TIBHAR_Katalog_2026_web_EN.pdf
- VICTAS rubbers (oficiálny európsky katalóg, stav august 2026): https://victas.com/en_gb/products/?cat=4
- XIOM rubbers (oficiálny globálny katalóg, stav august 2026): https://www.xiom.global/category/rubber/154/
- ITTF LARC 01.07.2026 (schválené poťahy; výrobca vedený ako Double Happiness/DHS): https://www.httv.de/media/000/Schiedsrichter/Material_SR-Einsatz/Zulassungslisten/LARC/ITTF/2026/Equipment_RacketCovering_1July2026_1936.pdf
- Megaspin Butterfly blades: https://www.megaspin.net/store/default.asp?brand=butterfly&cid=blades
- Megaspin Butterfly blade matrix: https://cdn.megaspin.net/download/butterfly/blade-specifications.pdf?v=9
- Revspin je vhodný najmä pre komunitné hodnotenia a recenzie: https://revspin.net/
- ITTF LARC je zdroj schválených súťažných poťahov: https://www.ittf.com/equipment-dft/racket-coverings/

## Dôležité limity a ďalší krok

Toto je statická aplikácia bez servera. Nemôže automaticky overiť novú používateľom zadanú značku na internete, moderovať ju a pridať ju všetkým používateľom. Na to treba databázu, backend, administrátorskú kontrolu zdrojov a ideálne audit zdrojov pri každom produkte. Neoznačovať neoverené voľné vstupy za reálne katalogizované produkty.

Formulár spätnej väzby je implementovaný v spodnej časti stránky. V statickej verzii sa návrhy ukladajú len lokálne v `localStorage` prehliadača; ešte sa neodosielajú na server ani e-mail.

## Spustenie

Otvoriť `index.html` v prehliadači. Google Chrome je v tomto počítači nainštalovaný ako `/Applications/Google Chrome 2.app`.

## Publikovanie a pracovný postup

## Dizajnový smer (Impeccable)

- Pri všetkých ďalších úpravách webu sa riadiť všeobecnými princípmi projektu Impeccable (`https://github.com/pbakaus/impeccable`), nie však kopírovaním jeho vlastnej tmavo-zlatej identity. Racket Comparator má zostať športový, presný a ľahko čitateľný.
- Povaha stránok: hero a prvé rozhodovanie sú režim **Persuade** (majú vysvetliť hodnotu a viesť k porovnaniu); samotný porovnávač je režim **Operate** (prednosť majú rýchlosť výberu, skenovateľnosť, konzistentné ovládanie a jasné výsledky).
- Zachovať existujúci charakter: Manrope pre text/UI, DM Mono iba pre krátke systémové štítky, výrazná fotografia rakiet v hero sekcii, modro-červené smerové prvky a zelený akcent. Nepoužívať font Inter, generické fialovo-modré gradienty, glassmorphism, dekoratívne neonové žiary, odrazové animácie ani ikony v zaoblených štvorcoch nad každým nadpisom.
- Každý nový prvok musí mať jasný dôvod: nesmie pribúdať ďalšia karta v karte, zbytočné pill štítky ani dlhé vety veľkými rozstrkanými písmenami. Hranice, kontrast povrchov a vertikálny rytmus sú prednosťou pred tieňmi.
- Obsah: používať konkrétne stolnotenisové tvrdenia, názvy produktov, zdroje a praktické dôsledky pre hráča; neuvádzať všeobecné marketingové frázy alebo vymyslené „AI“ sľuby. Dlhé analýzy členiť prirodzenými nadpismi a krátkymi odsekmi.
- Overovanie každého viditeľného dizajnového zásahu: jedna spoločná kontrola desktopu a mobilu po úprave, následne jedna opravná kontrola. Zachovať prístupnosť (čitateľný kontrast, viditeľný focus, zmysluplné labely formulárov) a nepoškodiť jazykové prepínanie.

- Verejná verzia: https://porovnavacrakiet.github.io/
- Vlastná hlavná doména: `racketcomparator.com`; GitHub Pages custom domain aj koreňový súbor `CNAME` sú nastavené na svetovú doménu. WebSupport DNS pre `.com` používa štyri GitHub A záznamy (`185.199.108.153` až `185.199.111.153`) a `www` CNAME na `porovnavacrakiet.github.io`. Pôvodné apex/www A a AAAA webové záznamy WebSupportu boli odstránené; wildcard a mailové MX/TXT a mailové subdomény zostali zachované.
- Slovenská doména `porovnavacrakiet.sk` bola pôvodnou hlavnou adresou. Po prechode na svetovú doménu ju zachovať ako trvalé presmerovanie na `https://racketcomparator.com`, aby staré odkazy a slovenskí návštevníci zostali funkční.
- Presmerovanie slovenskej domény beží v samostatnom verejnom GitHub repozitári `porovnavacrakiet/porovnavacrakiet-sk-redirect`; jeho lokálna kópia je v `redirect-porovnavacrakiet-sk/`. GitHub Pages má pre `porovnavacrakiet.sk` zapnuté HTTPS a stránka presmeruje návštevníka na `https://racketcomparator.com/`.
- GitHub účet a repozitár: `porovnavacrakiet/porovnavacrakiet.github.io`; GitHub Pages je z vetvy `main`.
- GitLab backup: súkromný repozitár `git@gitlab.com:porovnavacrakiet/racket-comparator-backup.git` je pripojený ako remote `gitlab`; lokálna vetva `main` ho sleduje. SSH identita je `~/.ssh/id_ed25519_gitlab_racket_comparator` a je nastavená v `~/.ssh/config`. Po každej väčšej otestovanej úprave vytvoriť commit a spustiť `git push`, aby bol snapshot aj mimo MacBooku.
- Používateľ chce: vždy najprv uložiť zmeny v tomto lokálnom priečinku MacBooku, až potom ich nahrať na GitHub Pages. Po zmene otvárať už iba verejnú GitHub verziu v **Brave Browser**, nie v Chrome.
- Lokálny GitHub CLI je v `.tools/gh_2.97.0_macOS_arm64/bin/gh`. Systémový `git` sa nepoužíva (môže vyvolať inštaláciu Xcode nástrojov). Nahrávajú sa iba verejné súbory `index.html`, `styles.css`, `app.js` a `assets/table-tennis-rackets-hero.png`; nepublikovať `PROJECT_CONTEXT.md`, `PLAN.md` ani `.tools/`.
- Pri nahratí zmeneného súboru cez GitHub Contents API treba použiť aktuálne `sha` súboru. Po úprave `app.js` meniť aj query parameter v `<script src="app.js?v=…">` v `index.html`, aby Brave nenačítal starý JavaScript z cache.
- Pri voľbe hrúbky poťahu `INÉ` / `OTHER` sa select nahradí prázdnym číselným políčkom. Používateľ zadáva iba číslo, napr. `2.7`; aplikácia ho v porovnaní interpretuje ako `2.7 mm` a zohľadní ho pri rýchlosti, kontrole a spine.
- Zdieľací titulok a opis sú v `index.html` v meta údajoch a rovnako v anglickom titulku otvorenej stránky. Hlavný názov je `SPORT RACKET COMPARATOR`; opis je `Compare padel, tennis, and table tennis blades and complete setups.`; pridané sú aj Open Graph, Twitter a Schema.org údaje pre vyhľadávače a sociálne siete.
- SEO základ (3. 8. 2026): primárna adresa pre vyhľadávače je `https://racketcomparator.com/` cez canonical URL. Súbory `robots.txt` a `sitemap.xml` sú pripravené pre Google Search Console. V hlavičke je aj pravdivé Schema.org označenie typu WebSite a WebApplication; neobsahuje vymyslené hodnotenia, ceny ani recenzie.
- SEO technický audit (10. 8. 2026): DNS apex aj `www` smerujú správne na GitHub Pages a `www` vracia 301 na kanonickú doménu, ale TLS certifikát pre `www.racketcomparator.com` zatiaľ nie je vydaný (server vracia iba wildcard certifikát `*.github.io`). Treba v GitHub Pages nastaveniach znovu aktivovať/obnoviť HTTPS pre custom domain a po vydaní certifikátu overiť `curl -I https://www.racketcomparator.com/`. Sitemap uvádza domovskú stránku, indexovateľný blogový článok aj porovnávaciu stránku.
- Jazyk webu (10. 8. 2026): verejné rozhranie, SEO metadata aj blog sú výlučne v angličtine (`lang="en"`); prepínače slovenčiny a češtiny boli odstránené. Liga je v anglickom rozhraní vyjadrená všeobecnými divíziami, aby nepredpokladala slovenský systém súťaží.
- Posledná publikovaná verzia: `20260810-english-only` (lokálny commit `51bff22`). Hlavná stránka a blog sú verejne nasadené v angličtine; živý `app.js` bol overený s cache miss a sitemap obsahuje domovskú stránku aj blogový článok.
- Posledná publikovaná verzia: `20260810-comparison-guides` (GitHub Pages commit `0b27b62`). Verejný web obsahuje všetky aktuálne lokálne zmeny vrátane piatich stabilných porovnávacích stránok s blokmi dát a praktických rozdielov, ako aj hero hodnotu `27,301 RACKET COMPARISONS`; živý obsah bol overený cez `x-cache: MISS`.
- Posledná publikovaná verzia: `20260810-ra-co-favicon` (GitHub Pages commit `8996aab`). Verejný web používa favicon s bielym `RA` nad `CO` na čiernom pozadí; asset aj odkaz v HTML boli overené na `racketcomparator.com` cez `x-cache: MISS` a stránka bola otvorená v Brave.
- Posledná publikovaná verzia: `20260820-sport-racket-comparator` (GitHub Pages commit `8e51791468e947aa3b8fcee1698770191d8381cf`). Hlavná stránka používa názov `SPORT RACKET COMPARATOR` v titulku, meta opise, Open Graph, Twitter a Schema.org údajoch; živý obsah bol overený na `racketcomparator.com` cez `x-cache: MISS`.
- Pripravovaná publikovaná verzia: `20260825-rackets-description`. Meta opis hlavnej stránky je `Compare padel, tennis and table tennis rackets and setups.` a rovnaké znenie majú Open Graph, Twitter aj Schema.org údaje.
- SEO porovnanie (10. 8. 2026): pribudla indexovateľná anglická stránka `/compare/viscaria-vs-timo-boll-alc/` s porovnaním Butterfly Viscaria vs Timo Boll ALC a Tenergy 05 vs Dignics 05. Obsahuje kanonickú URL, Article a Breadcrumb structured data, metodiku aj odkaz do hlavného porovnávača; sitemap ju uvádza s prioritou 0.8. Neuvádza nevysledovateľné tvrdenie o presnom globálnom poradí predajov.
- SEO porovnania (10. 8. 2026): pribudli stabilné samostatné URL pre časté porovnávacie zámery: `/compare/viscaria-vs-fan-zhendong-alc/`, `/compare/viscaria-vs-innerforce-layer-alc/`, `/compare/tenergy-05-vs-dignics-05/` a `/compare/dignics-05-vs-dignics-09c/`. Každá stránka má vlastný canonical, Article + Breadcrumb structured data, originálny praktický obsah a CTA do porovnávača; sú zahrnuté v `sitemap.xml`.
- Google Search Console (3. 8. 2026): vlastníctvo `sc-domain:racketcomparator.com` je overené Google účtom `michal.neffe@gmail.com` cez TXT záznam vo WebSupporte `google-site-verification=cpCLBeuiJvN7lSlAwnOKGzU786x7YtuTAhN66rm4Yiw` na koreňovej doméne. Záznam neodstraňovať. Do Search Console bola odoslaná `https://racketcomparator.com/sitemap.xml`; prvé údaje a indexácia novej domény sa spracúvajú postupne.
- STIGA rubbers (stav august 2026): pridaných je 27 aktuálne predávaných produktových verzií, zoradených abecedne vo výbere: DNA Dragon Grip/Power, DNA Hybrid, DNA Platinum, Helix Hybrid/Platinum, Mantra a Vertical 55. Katalóg je overený cez aktuálnu kategóriu a sitemap výrobcu `https://www.stigasports.com/en/category/table-tennis/table-tennis-rubber` / `https://www.stigasports.com/sitemap-0.xml`; homologizácie sú krížovo kontrolované voči ITTF LARC 01.07.2026. Mantra Pro M Cybershape je samostatný predávaný predrezaný variant; identický vrchný poťah Mantra Pro M je v LARC schválený.
- Posledná publikovaná verzia: `20260803-gewo-45-ittf-rubbers` (commit `78b8b39f`). Pôvodnú 1 položku GEWO nahrádza 45 aktuálne ponúkanými poťahmi a tvrdostnými variantmi z oficiálneho katalógu výrobcu pre rok 2026, spárovanými s ITTF LARC z 01.07.2026. Historické položky, ktoré sú v LARC, ale nie v katalógu GEWO 2026, neboli pridané. Rýchlosť, kontrola, spin a tvrdosť sú odvodené z oficiálnych produktových parametrov GEWO a normalizované na stupnicu porovnávača.
- Posledná publikovaná verzia: `20260803-joola-23-ittf-rubbers` (commit `b4c7ee49`). Pôvodnú 1 položku JOOLA nahrádza všetkých 23 poťahov z aktuálneho oficiálneho katalógu JOOLA, ktoré sú zároveň schválené v ITTF LARC z 01.07.2026. Modely sú zoradené abecedne; rýchlosť, kontrola, spin a tvrdosť vychádzajú z oficiálnych parametrov JOOLA a sú normalizované na stupnicu porovnávača.
- Posledná publikovaná verzia: `20260803-loki-24-ittf-rubbers` (commit `78647f75`). Pôvodnú 1 položku LOKI nahrádza všetkých 24 aktuálne ponúkaných produktových verzií z dvoch strán oficiálneho katalógu výrobcu. Obchodné názvy a varianty sú spárované so schválenými vrchnými vrstvami LOKI v ITTF LARC z 01.07.2026; modely sú v selecte zoradené abecedne.
- Posledná publikovaná verzia: `20260803-nittaku-43-ittf-rubbers` (commit `e24b33a8`). Pôvodné 2 položky Nittaku nahrádza všetkých 43 aktuálnych poťahov pre klasický stolný tenis z oficiálneho katalógu Nittaku 2026: 27 backside, 10 short-pips, 5 long-pips a 1 anti. Deväť modelov určených výhradne na japonský large-ball nie je miešaných do klasického porovnávača. Názvy a homologizácie sú skontrolované proti ITTF LARC z 01.07.2026; modely sa v selecte radia abecedne a parametre sú normalizované z oficiálnych hodnôt Nittaku.
- Posledná publikovaná verzia: `20260803-palio-41-ittf-rubbers` (commit `87d15bf3`). Pôvodnú 1 položku PALIO nahrádza 41 aktuálne dostupnými produktovými verziami, ktoré sa dajú spárovať s vrchnými vrstvami PALIO v ITTF LARC z 01.07.2026. Maximo nebolo pridané, pretože pod týmto názvom nemá platnú homologizáciu. Conqueror PRO Gold a Silver sú oddelené pre zásadne rozdielnu vrchnú vrstvu, tvrdosť a určenie; modely sa v selecte radia abecedne.
- Posledná publikovaná vizuálna verzia: `20260803-hero-table-tennis` (commit `3ab6fe52`). Pod modro-červené šípky v hlavnom banneri je pridaný jemný centrovaný nápis `TABLE TENNIS` v rovnakom fonte Manrope ako hlavný názov, s responzívnou veľkosťou pre mobil aj desktop.
- Hlavný banner má pod nápisom `TABLE TENNIS`, tesne nad spodnou hranou tmavej plochy, centrovaný statický anglický prehľad katalógu: `27,301 RACKET COMPARISONS · 684 BLADES · 711 RUBBERS`. Počty driev a poťahov zodpovedajú aktuálnemu katalógu; počet porovnaní je prezentačný, nie návštevnostné ani analytické meranie. Prehľad zostáva čitateľný aj na mobile.
- Posledná publikovaná verzia: `20260803-sanwei-19-ittf-rubbers` (commit `310218a6`). Pôvodnú 1 položku SANWEI nahrádza 19 aktuálne dostupnými produktovými a tvrdostnými verziami z oficiálneho obchodu výrobcu pre rok 2026. Z 23 katalógových produktov bolo 8 vypredaných alebo ukončených; 15 dostupných produktov bolo spárovaných s platnými vrchnými vrstvami SANWEI v ITTF LARC z 01.07.2026. Gear Hyper, Target 3rd Edition a Target National Player Edition sú rozdelené podľa reálnych tvrdostí; modely sa v selecte radia abecedne.
- STIGA rubbers (stav 3. august 2026): vo výbere je všetkých 32 aktuálne predávaných samostatných modelov/variantov, zoradených abecedne. K pôvodným 27 pribudli ECO Future M, Horizontal 20, Star Future S, Symmetry a Vertical 20; starý duplicitný zápis DNA Platinum XH pod druhým názvom značky bol odstránený. Oficiálny katalóg a sitemap STIGA potvrdzujú aktuálnu ponuku; všetkých päť pridaných položiek je v ITTF LARC 01.07.2026. Parametre vychádzajú z aktuálnej STIGA rubber matrix a sú normalizované na stupnicu porovnávača.
- TIBHAR rubbers (stav 3. august 2026): pôvodný jediný záznam Evolution MX-P bol nahradený 45 aktuálnymi produktovými modelmi a výkonovými variantmi z oficiálnych kategórií výrobcu. Zoznam zahŕňa Aurus, Evolution, Hybrid, Quantum X Pro, Nimbus, Rapid, Speedy, Grass, Super Defense, Vari Spin a klasické rady; vo výbere sa radí abecedne. Farebné vydania Quantum X Pro sú zlúčené do jedného modelu, aby sa nepočítali ako odlišné herné poťahy. Homologizácie vrchných gúm sú krížovo kontrolované proti ITTF LARC z 01.07.2026; rýchlosť, kontrola, spin a tvrdosť sú normalizované z oficiálnych parametrov TIBHAR.
