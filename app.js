const blades = [
  {id:'viscaria',brand:'Butterfly',name:'Viscaria',speed:82,control:70,spin:86,feel:'pružný',type:'ALC'},
  {id:'fzd-alc',brand:'Butterfly',name:'Fan Zhendong ALC',speed:84,control:68,spin:85,feel:'pevný',type:'ALC'},
  {id:'innerforce',brand:'Butterfly',name:'Innerforce Layer ALC',speed:76,control:76,spin:87,feel:'mäkký',type:'inner ALC'},
  {id:'acoustic',brand:'Nittaku',name:'Acoustic',speed:72,control:79,spin:84,feel:'drevený',type:'5-vrstvové drevo'},
  {id:'violin',brand:'Nittaku',name:'Violin',speed:69,control:82,spin:82,feel:'mäkký',type:'5-vrstvové drevo'},
  {id:'hurricane-long-5',brand:'DHS',name:'Hurricane Long 5',speed:80,control:72,spin:87,feel:'pružný',type:'5+2 carbon'},
  {id:'w968',brand:'DHS',name:'W968',speed:85,control:70,spin:90,feel:'pružný',type:'5+2 carbon'},
  {id:'clipper',brand:'Stiga',name:'Clipper Wood',speed:75,control:73,spin:78,feel:'pevný',type:'7-vrstvové drevo'},
  {id:'infinity',brand:'Stiga',name:'Infinity VPS V',speed:78,control:72,spin:82,feel:'stredný',type:'5-vrstvové drevo'},
  {id:'mleo',brand:'Yasaka',name:'Ma Lin Extra Offensive',speed:71,control:78,spin:81,feel:'drevitý',type:'5-vrstvové drevo'},
  {id:'hugo',brand:'Xiom',name:'Hugo Calderano SAL',speed:84,control:69,spin:84,feel:'pevný',type:'carbon'},
  {id:'ovtcharov',brand:'Donic',name:'Ovtcharov True Carbon',speed:86,control:65,spin:80,feel:'tvrdý',type:'carbon'},
  {id:'samsonov',brand:'Tibhar',name:'Samsonov Force Pro Black',speed:74,control:75,spin:81,feel:'stredný',type:'7-vrstvové drevo'},
  {id:'rossi',brand:'Joola',name:'Rossi Emotion',speed:79,control:72,spin:82,feel:'stredný',type:'carbon'},
  {id:'treiber',brand:'andro',name:'Treiber FO OFF/S',speed:83,control:68,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'barwell-fleet',brand:'Nittaku',name:'Barwell Fleet',speed:82,control:69,spin:84,feel:'tvrdý',type:'7+2 glass fiber'}
  ,{id:'hl5x',brand:'DHS',name:'Hurricane Long 5X',speed:89,control:66,spin:88,feel:'pevný',type:'5+2 arylate-carbon'}
  ,{id:'hl5h',brand:'DHS',name:'Hurricane Long 5H',speed:85,control:70,spin:89,feel:'pružný',type:'5+2 arylate-carbon'}
  ,{id:'hl5gold',brand:'DHS',name:'Hurricane Long 5 Golden',speed:87,control:68,spin:89,feel:'pevný',type:'5+2 arylate-carbon'}
  ,{id:'hl5-6gold',brand:'DHS',name:'Hurricane Long 5 6 Gold',speed:90,control:65,spin:88,feel:'pevný',type:'5+2 arylate-carbon'}
  ,{id:'hl3',brand:'DHS',name:'Hurricane Long 3',speed:82,control:72,spin:87,feel:'pružný',type:'5+2 arylate-carbon'}
  ,{id:'h301',brand:'DHS',name:'Hurricane 301',speed:81,control:73,spin:87,feel:'pružný',type:'inner carbon'}
  ,{id:'h301z',brand:'DHS',name:'Hurricane 301Z',speed:83,control:71,spin:87,feel:'pevný',type:'carbon'}
  ,{id:'wangchuqin',brand:'DHS',name:'Hurricane Wang Chuqin',speed:86,control:69,spin:88,feel:'pevný',type:'carbon'}
  ,{id:'hurricane-wl',brand:'DHS',name:'Hurricane WL',speed:84,control:70,spin:86,feel:'pevný',type:'5-vrstvové drevo'}
  ,{id:'hurricane-king',brand:'DHS',name:'Hurricane King',speed:83,control:70,spin:86,feel:'pevný',type:'carbon'}
  ,{id:'hurricane-hao',brand:'DHS',name:'Hurricane Hao',speed:80,control:74,spin:86,feel:'pružný',type:'carbon'}
  ,{id:'powerg7',brand:'DHS',name:'Power G7',speed:74,control:76,spin:81,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'powerg8',brand:'DHS',name:'Power G8',speed:78,control:73,spin:82,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'powerg9',brand:'DHS',name:'Power G9',speed:80,control:71,spin:83,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'powerg10',brand:'DHS',name:'Power G10',speed:81,control:70,spin:84,feel:'pevný',type:'carbon'}
  ,{id:'pg7',brand:'DHS',name:'PG7',speed:72,control:78,spin:80,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'pg8',brand:'DHS',name:'PG8',speed:76,control:75,spin:82,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'pg9',brand:'DHS',name:'PG9',speed:79,control:72,spin:83,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'classic08x',brand:'DHS',name:'Hurricane Classic 08X',speed:65,control:84,spin:78,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'fangbo-b2',brand:'DHS',name:'Fang Bo B2',speed:82,control:71,spin:86,feel:'pevný',type:'carbon'}
  ,{id:'cyber-truls',brand:'Stiga',name:'Cybershape Carbon CWT Truls Edition',speed:87,control:70,spin:88,feel:'pevný',type:'carbon CWT'}
  ,{id:'cyber-carbon',brand:'Stiga',name:'Cybershape Carbon',speed:85,control:71,spin:87,feel:'pevný',type:'carbon'}
  ,{id:'cyber-wood',brand:'Stiga',name:'Cybershape Wood',speed:74,control:79,spin:83,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'inspira',brand:'Stiga',name:'Inspira Hybrid Carbon',speed:86,control:72,spin:89,feel:'pružný',type:'hybrid carbon'}
  ,{id:'aura',brand:'Stiga',name:'Aura Hybrid Carbon Cybershape',speed:88,control:69,spin:88,feel:'pevný',type:'hybrid carbon'}
  ,{id:'dynasty-xuxin',brand:'Stiga',name:'Dynasty Carbon Xu Xin Edition',speed:86,control:70,spin:88,feel:'pevný',type:'carbon'}
  ,{id:'dynasty-cyber',brand:'Stiga',name:'Dynasty Carbon Cybershape',speed:87,control:69,spin:88,feel:'pevný',type:'carbon'}
  ,{id:'carbonado45',brand:'Stiga',name:'Carbonado 45',speed:82,control:74,spin:86,feel:'pružný',type:'TeXtreme carbon'}
  ,{id:'carbonado145',brand:'Stiga',name:'Carbonado 145',speed:85,control:70,spin:86,feel:'pevný',type:'TeXtreme carbon'}
  ,{id:'carbonado190',brand:'Stiga',name:'Carbonado 190',speed:87,control:67,spin:85,feel:'pevný',type:'TeXtreme carbon'}
  ,{id:'carbonado290',brand:'Stiga',name:'Carbonado 290',speed:90,control:63,spin:84,feel:'tvrdý',type:'TeXtreme carbon'}
  ,{id:'legacy',brand:'Stiga',name:'Legacy Carbon',speed:84,control:71,spin:86,feel:'pevný',type:'carbon'}
  ,{id:'intensity',brand:'Stiga',name:'Intensity Carbon',speed:85,control:70,spin:87,feel:'pevný',type:'carbon'}
  ,{id:'rosewood7',brand:'Stiga',name:'Rosewood NCT VII',speed:83,control:68,spin:84,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'ebenholz7',brand:'Stiga',name:'Ebenholz NCT VII',speed:85,control:66,spin:84,feel:'tvrdý',type:'7-vrstvové drevo'}
  ,{id:'nostalgic7',brand:'Stiga',name:'Nostalgic VII',speed:81,control:70,spin:83,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'nostalgic5',brand:'Stiga',name:'Nostalgic Offensive',speed:74,control:78,spin:83,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'clipper-cr',brand:'Stiga',name:'Clipper CR',speed:78,control:73,spin:80,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'offensive-classic',brand:'Stiga',name:'Offensive Classic',speed:69,control:81,spin:82,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'offensive-classic-carbon',brand:'Stiga',name:'Offensive Classic Carbon',speed:78,control:75,spin:84,feel:'pevný',type:'carbon'}
  ,{id:'allround-evo',brand:'Stiga',name:'Allround Evolution',speed:63,control:86,spin:78,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'allround-cr',brand:'Stiga',name:'Allround Classic CR',speed:61,control:87,spin:77,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'energy-v2',brand:'Stiga',name:'Energy Wood V2',speed:73,control:78,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'def-classic',brand:'Stiga',name:'Defensive Classic',speed:54,control:90,spin:72,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'h301nxd',brand:'Nittaku',name:'H301 NXD',speed:83,control:72,spin:88,feel:'stredný',type:'inner arylate-carbon'}
  ,{id:'hino522',brand:'Nittaku',name:'Hino Blade 5.22',speed:80,control:73,spin:85,feel:'pružný',type:'hinoki composite'}
  ,{id:'hino722',brand:'Nittaku',name:'Hino Blade 7.22',speed:74,control:78,spin:83,feel:'mäkký',type:'hinoki composite'}
  ,{id:'hina-h2',brand:'Nittaku',name:'Hina Hayata H2',speed:83,control:72,spin:87,feel:'pevný',type:'PKC carbon'}
  ,{id:'hina-t2',brand:'Nittaku',name:'Hina Hayata T2',speed:76,control:77,spin:84,feel:'stredný',type:'thin carbon'}
  ,{id:'hina-e2',brand:'Nittaku',name:'Hina Hayata E2',speed:72,control:79,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'acoustic-grev',brand:'Nittaku',name:'Acoustic G-Revision',speed:74,control:79,spin:85,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'acoustic-carbon-grev',brand:'Nittaku',name:'Acoustic Carbon G-Revision',speed:84,control:70,spin:87,feel:'pevný',type:'outer FE carbon'}
  ,{id:'acoustic-carbon-inner-grev',brand:'Nittaku',name:'Acoustic Carbon Inner G-Revision',speed:80,control:75,spin:89,feel:'pružný',type:'inner FE carbon'}
  ,{id:'acoustic-carbon',brand:'Nittaku',name:'Acoustic Carbon',speed:84,control:70,spin:86,feel:'pevný',type:'outer FE carbon'}
  ,{id:'acoustic-carbon-inner',brand:'Nittaku',name:'Acoustic Carbon Inner',speed:80,control:75,spin:88,feel:'pružný',type:'inner FE carbon'}
  ,{id:'violin-carbon',brand:'Nittaku',name:'Violin Carbon',speed:80,control:74,spin:87,feel:'stredný',type:'carbon'}
  ,{id:'violoncello',brand:'Nittaku',name:'Violoncello',speed:76,control:77,spin:84,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'ma-long-carbon',brand:'Nittaku',name:'Ma Long Carbon',speed:85,control:69,spin:87,feel:'pevný',type:'FE carbon'}
  ,{id:'mima-carbon',brand:'Nittaku',name:'Mima Ito Carbon',speed:84,control:70,spin:86,feel:'pevný',type:'FE carbon'}
  ,{id:'kyo-hyo-wang',brand:'Nittaku',name:'Kyo Hyo Wang',speed:84,control:71,spin:88,feel:'stredný',type:'arylate-carbon'}
  ,{id:'kyo-hyo-soh',brand:'Nittaku',name:'Kyo Hyo Soh',speed:84,control:71,spin:88,feel:'stredný',type:'arylate-carbon'}
  ,{id:'kyo-hyo-long5',brand:'Nittaku',name:'Kyo Hyo Long 5',speed:84,control:71,spin:88,feel:'pružný',type:'arylate-carbon'}
  ,{id:'arc-bolt',brand:'Nittaku',name:'Arc Bolt',speed:79,control:75,spin:85,feel:'pružný',type:'inner aramid-carbon'}
  ,{id:'adv-carbon',brand:'Nittaku',name:'Advance Carbon',speed:79,control:75,spin:84,feel:'pevný',type:'outer carbon'}
  ,{id:'flyatt-carbon',brand:'Nittaku',name:'Flyatt Carbon',speed:74,control:79,spin:82,feel:'stredný',type:'thin carbon'}
  ,{id:'ebony',brand:'Nittaku',name:'Ebony Wood',speed:74,control:78,spin:83,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'neves',brand:'Nittaku',name:'Neves Wood',speed:78,control:74,spin:83,feel:'pevný',type:'5-vrstvové drevo'}
  ,{id:'latika',brand:'Nittaku',name:'Latika',speed:71,control:80,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'factive7',brand:'Nittaku',name:'Factive 7',speed:76,control:75,spin:81,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'fzd-salc',brand:'Butterfly',name:'Fan Zhendong Super ALC',speed:91,control:64,spin:88,feel:'pevný',type:'Super ALC'}
  ,{id:'fzd-zlc',brand:'Butterfly',name:'Fan Zhendong ZLC',speed:89,control:65,spin:87,feel:'pevný',type:'ZLC'}
  ,{id:'fzd-szlc',brand:'Butterfly',name:'Fan Zhendong Super ZLC',speed:95,control:58,spin:87,feel:'tvrdý',type:'Super ZLC'}
  ,{id:'fzd-cnf',brand:'Butterfly',name:'Fan Zhendong CNF',speed:88,control:67,spin:86,feel:'stredný',type:'CNF'}
  ,{id:'timo-alc',brand:'Butterfly',name:'Timo Boll ALC',speed:83,control:70,spin:86,feel:'pevný',type:'ALC'}
  ,{id:'timo-zlc',brand:'Butterfly',name:'Timo Boll ZLC',speed:88,control:66,spin:86,feel:'pevný',type:'ZLC'}
  ,{id:'timo-zlf',brand:'Butterfly',name:'Timo Boll ZLF',speed:77,control:76,spin:85,feel:'mäkký',type:'ZLF'}
  ,{id:'timo-spirit',brand:'Butterfly',name:'Timo Boll Spirit',speed:82,control:71,spin:85,feel:'pevný',type:'ALC'}
  ,{id:'timo-caf',brand:'Butterfly',name:'Timo Boll CAF',speed:75,control:77,spin:83,feel:'stredný',type:'CAF'}
  ,{id:'timo-tj',brand:'Butterfly',name:'Timo Boll TJ',speed:83,control:70,spin:83,feel:'pevný',type:'T5000'}
  ,{id:'timo-j',brand:'Butterfly',name:'Timo Boll J',speed:68,control:80,spin:79,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'mizutani-szlc',brand:'Butterfly',name:'Mizutani Jun Super ZLC',speed:94,control:59,spin:88,feel:'tvrdý',type:'Super ZLC'}
  ,{id:'mizutani-zlc',brand:'Butterfly',name:'Mizutani Jun ZLC',speed:88,control:66,spin:86,feel:'pevný',type:'ZLC'}
  ,{id:'harimoto-szlc',brand:'Butterfly',name:'Harimoto Innerforce Super ZLC',speed:90,control:67,spin:90,feel:'pružný',type:'inner Super ZLC'}
  ,{id:'harimoto-zlc',brand:'Butterfly',name:'Harimoto Innerforce ZLC',speed:84,control:73,spin:89,feel:'pružný',type:'inner ZLC'}
  ,{id:'harimoto-alc',brand:'Butterfly',name:'Harimoto Innerforce ALC',speed:80,control:75,spin:88,feel:'pružný',type:'inner ALC'}
  ,{id:'lin-yunju',brand:'Butterfly',name:'Lin Yun-Ju Super ZLC',speed:93,control:61,spin:88,feel:'pevný',type:'Super ZLC'}
  ,{id:'ovtcharov-if',brand:'Butterfly',name:'Ovtcharov Innerforce ALC',speed:81,control:74,spin:88,feel:'pružný',type:'inner ALC'}
  ,{id:'franziska',brand:'Butterfly',name:'Franziska Innerforce ZLC',speed:85,control:72,spin:90,feel:'pružný',type:'inner ZLC'}
  ,{id:'inner-zlc',brand:'Butterfly',name:'Innerforce Layer ZLC',speed:83,control:74,spin:88,feel:'pružný',type:'inner ZLC'}
  ,{id:'inner-alcs',brand:'Butterfly',name:'Innerforce Layer ALC.S',speed:79,control:77,spin:87,feel:'mäkký',type:'inner ALC'}
  ,{id:'freitas',brand:'Butterfly',name:'Freitas ALC',speed:83,control:70,spin:86,feel:'pevný',type:'ALC'}
  ,{id:'apolonia',brand:'Butterfly',name:'Apolonia ZLC',speed:86,control:68,spin:87,feel:'pevný',type:'ZLC'}
  ,{id:'revoldia',brand:'Butterfly',name:'Revoldia CNF',speed:88,control:67,spin:87,feel:'stredný',type:'CNF'}
  ,{id:'viscaria-salc',brand:'Butterfly',name:'Viscaria Super ALC',speed:89,control:66,spin:87,feel:'pevný',type:'Super ALC'}
  ,{id:'primorac-carbon',brand:'Butterfly',name:'Primorac Carbon',speed:87,control:64,spin:82,feel:'tvrdý',type:'carbon'}
  ,{id:'sk-carbon',brand:'Butterfly',name:'SK Carbon',speed:83,control:69,spin:82,feel:'pevný',type:'carbon'}
  ,{id:'sardius',brand:'Butterfly',name:'Sardius',speed:91,control:58,spin:80,feel:'tvrdý',type:'T5000'}
  ,{id:'kumpuru',brand:'Butterfly',name:'Kumpuru',speed:80,control:72,spin:84,feel:'stredný',type:'carbon'}
  ,{id:'sk7',brand:'Butterfly',name:'SK7 Classic',speed:74,control:75,spin:80,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'korbel-sk7',brand:'Butterfly',name:'Korbel SK7',speed:76,control:74,spin:81,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'petr-korbel',brand:'Butterfly',name:'Petr Korbel',speed:72,control:78,spin:83,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'petr-korbel-japan',brand:'Butterfly',name:'Petr Korbel Japan',speed:72,control:78,spin:83,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'maze-advance',brand:'Butterfly',name:'Maze Advance',speed:70,control:79,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'primorac',brand:'Butterfly',name:'Primorac',speed:68,control:81,spin:80,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'tb5alpha',brand:'Butterfly',name:'TB5α',speed:66,control:82,spin:79,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'xstar',brand:'Butterfly',name:'Xstar V',speed:65,control:83,spin:77,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'innershield',brand:'Butterfly',name:'Innershield Layer ZLF',speed:61,control:86,spin:78,feel:'mäkký',type:'inner ZLF'}
  ,{id:'diode-v',brand:'Butterfly',name:'Diode V',speed:60,control:87,spin:76,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'yinhe-pro01',brand:'Yinhe',name:'Pro-01',speed:81,control:72,spin:86,feel:'pružný',type:'inner carbon'}
  ,{id:'fextra7',brand:'Sanwei',name:'Fextra 7',speed:75,control:75,spin:80,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'aruna-carbon',brand:'Gewo',name:'Aruna Carbon',speed:82,control:69,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'zx-gear',brand:'Victas',name:'ZX-Gear OUT',speed:85,control:67,spin:84,feel:'tvrdý',type:'Zexion carbon'}
  ,{id:'swat',brand:'TSP',name:'Swat',speed:70,control:80,spin:81,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'729-2080',brand:'Friendship 729',name:'729 2080',speed:72,control:77,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'matador',brand:'Dr. Neubauer',name:'Matador TEXA',speed:66,control:85,spin:71,feel:'pevný',type:'kombinačné drevo'}
  ,{id:'the-wall',brand:'Der Materialspezialist',name:'The Wall',speed:61,control:88,spin:70,feel:'pevný',type:'defenzívne drevo'}
  ,{id:'speed90',brand:'Darker',name:'Speed 90',speed:88,control:65,spin:83,feel:'tvrdý',type:'1-vrstvové hinoki'}
  ,{id:'fire',brand:'Gambler',name:'Fire',speed:73,control:76,spin:80,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'combination',brand:'Hallmark',name:'Combination',speed:63,control:86,spin:70,feel:'mäkký',type:'kombinačné drevo'}
  ,{id:'barna-classic',brand:'Barna Original',name:'Classic Defensive',speed:57,control:90,spin:69,feel:'mäkký',type:'defenzívne drevo'}
];
const rubbers = [
  {id:'zyre03',brand:'Butterfly',name:'Zyre 03 · 2.5 mm',speed:92,control:62,spin:96,hardness:52},
  {id:'d09c',brand:'Butterfly',name:'Dignics 09C · 2.1 mm',speed:82,control:72,spin:95,hardness:54},
  {id:'d05',brand:'Butterfly',name:'Dignics 05 · 2.1 mm',speed:86,control:68,spin:93,hardness:40},
  {id:'t05',brand:'Butterfly',name:'Tenergy 05 · 2.1 mm',speed:83,control:70,spin:91,hardness:36},
  {id:'g1',brand:'Nittaku',name:'Fastarc G-1 · 2.0 mm',speed:79,control:75,spin:91,hardness:47},
  {id:'c1',brand:'Nittaku',name:'Fastarc C-1 · 2.0 mm',speed:72,control:82,spin:85,hardness:43},
  {id:'h3neo',brand:'DHS',name:'Hurricane 3 Neo · 2.15 mm',speed:70,control:73,spin:97,hardness:50},
  {id:'h8',brand:'DHS',name:'Hurricane 8 · 2.15 mm',speed:76,control:70,spin:94,hardness:50},
  {id:'dna-pro',brand:'Stiga',name:'DNA Platinum XH · 2.3 mm',speed:87,control:65,spin:91,hardness:52},
  {id:'rakza7',brand:'Yasaka',name:'Rakza 7 · 2.0 mm',speed:75,control:78,spin:86,hardness:45},
  {id:'vega-pro',brand:'Xiom',name:'Vega Pro · 2.0 mm',speed:76,control:76,spin:88,hardness:47},
  {id:'v15',brand:'Victas',name:'V > 15 Extra · 2.0 mm',speed:83,control:69,spin:90,hardness:47},
  {id:'mxp',brand:'Tibhar',name:'Evolution MX-P · 2.1 mm',speed:84,control:68,spin:91,hardness:47},
  {id:'bluestorm',brand:'Donic',name:'Bluestorm Z1 · 2.1 mm',speed:86,control:65,spin:89,hardness:48},
  {id:'rasanter',brand:'andro',name:'Rasanter R53 · 2.1 mm',speed:88,control:63,spin:90,hardness:53},
  {id:'dynaryz',brand:'Joola',name:'Dynaryz AGR · 2.0 mm',speed:87,control:65,spin:91,hardness:50},
  {id:'moon-speed',brand:'Yinhe',name:'Moon Speed · 2.1 mm',speed:75,control:74,spin:88,hardness:47},
  {id:'target-national',brand:'Sanwei',name:'Target National · 2.1 mm',speed:78,control:73,spin:92,hardness:50},
  {id:'nexxus',brand:'Gewo',name:'Nexxus EL Pro 53 · 2.1 mm',speed:86,control:65,spin:90,hardness:53},
  {id:'battle2',brand:'Friendship 729',name:'Battle II Provincial · 2.15 mm',speed:75,control:73,spin:95,hardness:50},
  {id:'curl-p1v',brand:'TSP',name:'Curl P1V · 1.0 mm',speed:48,control:80,spin:67,hardness:30},
  {id:'desperado',brand:'Dr. Neubauer',name:'Desperado Reloaded · OX',speed:38,control:84,spin:60,hardness:20},
  {id:'palio-ak47',brand:'Palio',name:'AK47 Blue · 2.0 mm',speed:70,control:78,spin:84,hardness:42},
  {id:'loki-arthur',brand:'Loki',name:'Arthur China · 2.1 mm',speed:80,control:70,spin:92,hardness:50}
  ,{id:'bugler',brand:'Butterfly',name:'Bugler · 2.1 mm',speed:76,control:71,spin:86,hardness:42}
  ,{id:'glayzer',brand:'Butterfly',name:'Glayzer · 2.1 mm',speed:78,control:76,spin:89,hardness:38}
  ,{id:'glayzer09c',brand:'Butterfly',name:'Glayzer 09C · 2.1 mm',speed:75,control:78,spin:91,hardness:42}
  ,{id:'ilius-b',brand:'Butterfly',name:'Ilius B · 1.3 mm',speed:58,control:77,spin:70,hardness:35}
  ,{id:'ilius-b05',brand:'Butterfly',name:'Ilius B · 0.5 mm',speed:49,control:82,spin:65,hardness:30}
  ,{id:'ilius-s',brand:'Butterfly',name:'Ilius S · 1.3 mm',speed:60,control:76,spin:72,hardness:35}
  ,{id:'ilius-s05',brand:'Butterfly',name:'Ilius S · 0.5 mm',speed:50,control:81,spin:66,hardness:30}
  ,{id:'t19',brand:'Butterfly',name:'Tenergy 19 · 2.1 mm',speed:84,control:71,spin:92,hardness:36}
  ,{id:'d80',brand:'Butterfly',name:'Dignics 80 · 2.1 mm',speed:84,control:71,spin:91,hardness:40}
  ,{id:'d64',brand:'Butterfly',name:'Dignics 64 · 2.1 mm',speed:88,control:66,spin:89,hardness:40}
  ,{id:'t05hard',brand:'Butterfly',name:'Tenergy 05 Hard · 2.1 mm',speed:85,control:68,spin:94,hardness:43}
  ,{id:'rozena',brand:'Butterfly',name:'Rozena · 2.1 mm',speed:74,control:80,spin:84,hardness:35}
  ,{id:'impartial-xb',brand:'Butterfly',name:'Impartial XB · 2.0 mm',speed:68,control:76,spin:71,hardness:35}
  ,{id:'impartial-xs',brand:'Butterfly',name:'Impartial XS · 2.0 mm',speed:69,control:76,spin:72,hardness:35}
  ,{id:'t80fx',brand:'Butterfly',name:'Tenergy 80 FX · 2.1 mm',speed:79,control:75,spin:88,hardness:32}
  ,{id:'largespin',brand:'Butterfly',name:'Large Storm Spin · 2.1 mm',speed:69,control:77,spin:78,hardness:35}
  ,{id:'t80',brand:'Butterfly',name:'Tenergy 80 · 2.1 mm',speed:82,control:71,spin:89,hardness:36}
  ,{id:'t64fx',brand:'Butterfly',name:'Tenergy 64 FX · 2.1 mm',speed:81,control:73,spin:85,hardness:32}
  ,{id:'t25fx',brand:'Butterfly',name:'Tenergy 25 FX · 2.1 mm',speed:77,control:76,spin:85,hardness:32}
  ,{id:'t05fx',brand:'Butterfly',name:'Tenergy 05 FX · 2.1 mm',speed:78,control:75,spin:89,hardness:32}
  ,{id:'roundell',brand:'Butterfly',name:'Roundell · 2.1 mm',speed:68,control:81,spin:80,hardness:35}
  ,{id:'t64',brand:'Butterfly',name:'Tenergy 64 · 2.1 mm',speed:86,control:68,spin:87,hardness:36}
  ,{id:'t25',brand:'Butterfly',name:'Tenergy 25 · 2.1 mm',speed:80,control:72,spin:87,hardness:36}
  ,{id:'large44',brand:'Butterfly',name:'Large 44 DX · 2.1 mm',speed:67,control:76,spin:76,hardness:35}
  ,{id:'fl3',brand:'Butterfly',name:'Feint Long III · 1.1 mm',speed:45,control:82,spin:64,hardness:25}
  ,{id:'fl3ox',brand:'Butterfly',name:'Feint Long III · OX',speed:35,control:83,spin:61,hardness:20}
  ,{id:'fl3-05',brand:'Butterfly',name:'Feint Long III · 0.5 mm',speed:40,control:84,spin:62,hardness:22}
  ,{id:'fl2',brand:'Butterfly',name:'Feint Long II · 1.1 mm',speed:43,control:83,spin:63,hardness:25}
  ,{id:'fl2ox',brand:'Butterfly',name:'Feint Long II · OX',speed:33,control:85,spin:60,hardness:20}
  ,{id:'fl2-05',brand:'Butterfly',name:'Feint Long II · 0.5 mm',speed:39,control:85,spin:61,hardness:22}
  ,{id:'speedypo',brand:'Butterfly',name:'Speedy P.O. · 1.5 mm',speed:65,control:78,spin:69,hardness:35}
  ,{id:'sriverel',brand:'Butterfly',name:'Sriver EL · 2.1 mm',speed:65,control:82,spin:79,hardness:32}
  ,{id:'challenger',brand:'Butterfly',name:'Challenger Attack · 1.9 mm',speed:62,control:80,spin:68,hardness:35}
  ,{id:'flextra',brand:'Butterfly',name:'Flextra · 2.1 mm',speed:57,control:86,spin:74,hardness:32}
  ,{id:'superanti',brand:'Butterfly',name:'Super Anti · 1.5 mm',speed:35,control:85,spin:52,hardness:20}
  ,{id:'orthodox',brand:'Butterfly',name:'Orthodox DX · OX',speed:42,control:83,spin:58,hardness:20}
  ,{id:'feintox',brand:'Butterfly',name:'Feint OX · OX',speed:36,control:83,spin:60,hardness:20}
  ,{id:'feintsoft',brand:'Butterfly',name:'Feint Soft · 1.5 mm',speed:45,control:82,spin:65,hardness:25}
  ,{id:'sriver',brand:'Butterfly',name:'Sriver · 2.1 mm',speed:63,control:83,spin:79,hardness:32}
  ,{id:'tackiness',brand:'Butterfly',name:'Tackiness Chop · 1.9 mm',speed:48,control:86,spin:86,hardness:32}
];
const defaults={current:{blade:'viscaria',fh:'d09c',bh:'d09c'},target:{blade:'fzd-alc',fh:'d09c',bh:'d09c'}};
const values={level:{beginner:1,club:2,league:3,advanced:4},training:{1:1,2:2,4:3},'fh-skill':{basic:1,regular:2,advanced:3},'bh-skill':{basic:1,regular:2,advanced:3},footwork:{basic:1,average:2,good:3,excellent:4}};
const thicknessOptions=['1.9 mm','2.0 mm','2.1 mm','INÉ'];
const $=id=>document.getElementById(id);
const collection=part=>part==='blade'?blades:rubbers;
const option=(value,text,selected=false)=>`<option value="${value}" ${selected?'selected':''}>${text}</option>`;
const modelLabel=item=>item.name.replace(/\s·\s(?:[0-9.]+\s*mm|OX|MAX)$/,'');
const thicknessFrom=item=>{const match=item.name.match(/·\s*([0-9.]+\s*mm|OX|MAX)$/);return match?match[1]:'2.0 mm';};
const thicknessNumber=value=>value==='OX'?0:value==='MAX'?2.4:parseFloat(value)||2;
const clamp=value=>Math.max(1,Math.min(99,Math.round(value)));

function renderThickness(setup,part,modelId){const modelIdToUse=modelId||$( `${setup}-${part}` ).value;const item=collection(part).find(product=>product.id===modelIdToUse);const nominal=item?thicknessFrom(item):'2.0 mm',chosen=thicknessOptions.includes(nominal)?nominal:'INÉ';$( `${setup}-${part}-thickness` ).innerHTML=thicknessOptions.map(value=>option(value,value,value===chosen)).join('');}

function renderModels(setup,part,modelId){
  const items=collection(part), brand=$( `${setup}-${part}-brand` ).value;
  const allowed=items.filter(item=>item.brand===brand).sort((a,b)=>a.name.localeCompare(b.name,'en'));
  const model=$( `${setup}-${part}` );
  const other=$( `${setup}-${part}-other` );
  if(brand==='__other__'){
    model.innerHTML=option('__custom__',document.documentElement.lang==='en'?'Custom model / Vlastný model':'Vlastný model / Custom model',true); model.disabled=true;
    other.classList.remove('hidden'); return;
  }
  model.disabled=false; other.classList.add('hidden');
  model.innerHTML=allowed.map(item=>option(item.id,part==='blade'?item.name:modelLabel(item),item.id===modelId)).join('');
  if(!model.value) model.value=allowed[0].id;
  if(part!=='blade')renderThickness(setup,part,model.value);
}
function initialize(){
  ['current','target'].forEach(setup=>['blade','fh','bh'].forEach(part=>{
    const chosen=collection(part).find(item=>item.id===defaults[setup][part]);
    const brand=$( `${setup}-${part}-brand` );
    brand.innerHTML=[...new Set(collection(part).map(item=>item.brand))].map(item=>option(item,item,item===chosen.brand)).join('')+option('__other__','INÉ / OTHER');
    renderModels(setup,part,chosen.id);
    brand.addEventListener('change',()=>{renderModels(setup,part);updateStats();});
    $( `${setup}-${part}` ).addEventListener('change',()=>{if(part!=='blade')renderThickness(setup,part);updateStats();});
    if(part!=='blade')$( `${setup}-${part}-thickness` ).addEventListener('change',updateStats);
    [$( `${setup}-${part}-other-brand` ),$( `${setup}-${part}-other-model` )].forEach(input=>input.addEventListener('input',updateStats));
  }));
  $('player-status').addEventListener('change',toggleLeague);
  $('language-toggle').addEventListener('click',toggleLanguage);
  toggleLeague();
  updateStats();
}
function selected(setup,part){
  const isRubber=part!=='blade';
  const custom=$( `${setup}-${part}-brand` ).value==='__other__';
  const item=custom?{brand:$( `${setup}-${part}-other-brand` ).value||'INÉ',name:$( `${setup}-${part}-other-model` ).value||'Vlastný model',speed:70,control:70,spin:70,hardness:45}:collection(part).find(item=>item.id===$( `${setup}-${part}` ).value);
  if(!isRubber)return item;
  const thickness=$( `${setup}-${part}-thickness` ).value||'2.0 mm',displayThickness=thickness==='INÉ'?thicknessFrom(item):thickness,difference=thicknessNumber(displayThickness)-thicknessNumber(custom?'2.0 mm':thicknessFrom(item));
  return {...item,name:`${modelLabel(item)} · ${displayThickness}`,speed:clamp(item.speed+difference*13),control:clamp(item.control-difference*9),spin:clamp(item.spin+difference*5),thickness};
}
function toggleLeague(){const isRegistered=$('player-status').value==='registered',leagueWrap=$('league-wrap'),equivalentWrap=$('equivalent-wrap'),leagueSelect=$('league-level'),equivalentSelect=$('equivalent-level');leagueWrap.classList.toggle('hidden',!isRegistered);equivalentWrap.classList.toggle('hidden',isRegistered);leagueSelect.disabled=!isRegistered;equivalentSelect.disabled=isRegistered;}
function submitFeedback(event){event.preventDefault();const message=$('feedback-message').value.trim();if(!message)return;const suggestions=JSON.parse(localStorage.getItem('racket-comparator-feedback')||'[]');suggestions.push({topic:$('feedback-type').value,email:$('feedback-email').value,message,createdAt:new Date().toISOString()});localStorage.setItem('racket-comparator-feedback',JSON.stringify(suggestions));$('feedback-status').textContent='Ďakujeme — návrh je uložený v tomto prehliadači a pripravený na budúce odoslanie.';event.currentTarget.reset();}
function toggleLanguage(){
  const english=document.documentElement.lang!=='en';document.documentElement.lang=english?'en':'sk';$('language-toggle').textContent=english?'SK':'ENG';
  document.querySelector('.brand span:last-child').textContent=english?'RACKET COMPARATOR':'POROVNÁVAČ RAKIET';
  document.querySelector('.header-note').textContent=english?'Choose better. Buy less blindly.':'Lepšia voľba, menej nákupov naslepo.';
  document.querySelector('.hero-title').innerHTML=english?'RACKET<br>COMPARATOR':'POROVNÁVAČ<br>RAKIET';
  document.querySelector('.hero .eyebrow').textContent=english?'EQUIPMENT THAT FITS YOUR GAME':'VÝBAVA, KTORÁ SEDÍ TVOJEJ HRE';
  document.querySelector('.hero-copy').textContent=english?'See how a blade and rubber change can affect your real game — not just a catalog rating.':'Zisti, ako sa zmena dreva a poťahov prejaví v tvojej hre — nie iba v katalógu.';
  document.querySelector('.scroll-cta').innerHTML=english?'Start comparing <span>↓</span>':'Začať porovnanie <span>↓</span>';
  document.querySelectorAll('.localized').forEach(element=>element.textContent=english?element.dataset.en:element.dataset.sk);
  document.querySelectorAll('.localized-secondary').forEach(element=>element.textContent=english?element.dataset.en:element.dataset.sk);
  document.querySelectorAll('option[value="__other__"]').forEach(optionElement=>optionElement.textContent=english?'OTHER / INÉ':'INÉ / OTHER');
  ['current','target'].forEach(setup=>['blade','fh','bh'].forEach(part=>{
    $( `${setup}-${part}-other-brand` ).placeholder=english?(part==='blade'?'Other blade brand':'Other rubber brand'):(part==='blade'?'Iná značka dreva':'Iná značka poťahu');
    $( `${setup}-${part}-other-model` ).placeholder=english?(part==='blade'?'Blade model':'Rubber model'):(part==='blade'?'Model dreva':'Model poťahu');
  }));
}
function setupData(setup){const blade=selected(setup,'blade'),fh=selected(setup,'fh'),bh=selected(setup,'bh');return{blade,fh,bh,speed:Math.round(blade.speed*.48+fh.speed*.30+bh.speed*.22),control:Math.round(blade.control*.48+fh.control*.30+bh.control*.22),spin:Math.round(blade.spin*.38+fh.spin*.37+bh.spin*.25)};}
function updateStats(){['current','target'].forEach(setup=>{const d=setupData(setup);$( `${setup}-stats` ).innerHTML=[['RÝCHLOSŤ',d.speed],['KONTROLA',d.control],['SPIN',d.spin]].map(([n,v])=>`<span class="mini-stat">${n}<b>${v}</b></span>`).join('');});}
function profile(){return Object.fromEntries(Object.keys(values).map(key=>[key,values[key][$(key).value]]));}
function wordDelta(value){const abs=Math.abs(value);return abs<3?'takmer bez zmeny':abs<9?'mierne':abs<18?'citeľne':'výrazne';}
function score10(value){return (Math.max(1,Math.min(10,value/10))).toFixed(1).replace('.',',')+'/10';}
function bladeName(setup){return modelLabel(selected(setup,'blade'));}
function briefResult(current,target,delta){
  const currentBlade=bladeName('current'),targetBlade=bladeName('target'),sameRubbers=current.fh.name===target.fh.name&&current.bh.name===target.bh.name;
  const faster=delta.speed>=0?targetBlade:currentBlade,controlled=delta.control>=0?targetBlade:currentBlade,spinny=delta.spin>=0?targetBlade:currentBlade;
  const hardCurrent=current.blade.feel==='tvrdý'||current.blade.feel==='pevný',hardTarget=target.blade.feel==='tvrdý'||target.blade.feel==='pevný';
  const closeTable=hardCurrent!==hardTarget?(hardCurrent?currentBlade:targetBlade):faster;
  const rows=[['Rýchlosť',score10(current.speed),score10(target.speed)],['Kontrola pri pomalej hre',score10(current.control),score10(target.control)],['Cit v ruke',current.blade.feel==='mäkký'?'9,0/10':current.blade.feel==='pružný'?'8,5/10':'7,0/10',target.blade.feel==='mäkký'?'9,0/10':target.blade.feel==='pružný'?'8,5/10':'7,0/10'],['Stabilita pri tvrdom údere',score10(current.speed+8),score10(target.speed+8)],['Krátka hra',score10(current.control+3),score10(target.control+3)],['Blok a protiútok',score10(current.speed+4),score10(target.speed+4)],['Prvý topspin',score10(current.spin),score10(target.spin)],['Hra v polodistancii',score10(current.speed+2),score10(target.speed+2)]];
  const rubberLine=sameRubbers?`Obe zostavy používajú <b>${current.fh.name}</b> na FH a <b>${current.bh.name}</b> na BH.`:`Poťahy sa medzi zostavami líšia, preto porovnanie zohľadňuje aj ich rýchlosť, spin a zvolenú hrúbku.`;
  return `<div class="brief-result"><p class="brief-rubber">${rubberLine}</p><table class="brief-table"><thead><tr><th>Vlastnosť</th><th>${currentBlade}</th><th>${targetBlade}</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}</tbody></table><div class="brief-grid"><section><h3>Hra pri stole</h3><p>Pri krátkej hre a príjme bude viac istoty ponúkať <b>${controlled}</b>. Pre aktívny blok, BH punch a rýchly flick má väčší potenciál <b>${closeTable}</b>.</p></section><section><h3>Topspiny</h3><p>Viac spinu a oblúka prinesie <b>${spinny}</b>. <b>${faster}</b> bude pri správnom načasovaní nebezpečnejší v druhom topspine a pri zakončení.</p></section><section><h3>Blok a protiútok</h3><p>Pri silnej lopte sú výhodou pevnejší kontakt a rýchlosť — tu má prednosť <b>${faster}</b>. <b>${controlled}</b> dá viac času na tlmenie a zmenu tempa.</p></section><section><h3>Polodistancia</h3><p><b>${faster}</b> poskytne väčšiu rezervu hĺbky a prieniku. <b>${controlled}</b> lepšie pomáha pri vysokom oblúku a bezpečnejších spinových sériách.</p></section></div><div class="brief-takeaway"><h3>Čo pocítiš najviac</h3><ul><li>${faster}: rýchlejší odchod lopty a viac rezervy pri útoku.</li><li>${controlled}: viac spätnej väzby a pokojnejšia krátka hra.</li><li>Presný výsledok ešte ovplyvní hmotnosť konkrétneho kusu a tvoje načasovanie.</li></ul></div><p class="brief-method">Porovnanie vychádza z konštrukcie dreva, parametrov poťahov a zvolenej hrúbky. Je to praktická predikcia, nie náhrada fyzického testu.</p></div>${longAnalysis(current,target,delta)}`;
}
function longAnalysis(current,target,delta){
  const a=bladeName('current'),b=bladeName('target'),faster=delta.speed>=0?b:a,controlled=delta.control>=0?b:a,spinny=delta.spin>=0?b:a;
  const same=current.fh.name===target.fh.name&&current.bh.name===target.bh.name;
  return `<section class="long-analysis"><h2>DLHŠIA ANALÝZA:</h2><p class="long-lead">Porovnávame <b>${a}</b> a <b>${b}</b>. ${same?'Poťahy sú rovnaké, preto rozdiel v hre bude vychádzať hlavne z dreva.':'Drevo aj poťahy sa líšia, preto výsledný pocit vytvára celá zostava.'}</p><div class="long-analysis-grid"><article><h3>1. Konštrukcia a základný charakter</h3><p><b>${a}</b> je v databáze vedené ako ${current.blade.type} s ${current.blade.feel} pocitom. <b>${b}</b> používa ${target.blade.type} a má ${target.blade.feel} charakter. Materiál, poloha kompozitu a tvrdosť kontaktu rozhodujú o tom, ako skoro drevo začne vracať energiu.</p></article><article><h3>2. Prvé lopty po výmene</h3><p>Najrýchlejšie si všimneš rozdiel v tom, ako skoro lopta opúšťa raketu. <b>${faster}</b> bude pôsobiť pri aktívnom kontakte priamejšie a s väčšou rezervou. <b>${controlled}</b> dá viac času cítiť kontakt a upraviť uhol rakety.</p></article><article><h3>3. Krátka hra a príjem podania</h3><p>Pri krátkom príjme, stop-balle a jemnom dotyku má prednosť <b>${controlled}</b>. Pri agresívnom flicku, banáne alebo priamom útoku z podania poskytne viac tlaku <b>${faster}</b>. Pri citlivých poťahoch rozhoduje presnosť uhla a aktívna ruka.</p></article><article><h3>4. Prvý FH topspin proti spodnej rotácii</h3><p><b>${controlled}</b> bude typicky jednoduchší na bezpečný, oblúkovejší prvý topspin a tenký kontakt. <b>${faster}</b> potrebuje lepšie zrýchlenie a kontakt pred telom, no pri správnej technike vytvorí rýchlejšiu a prenikavejšiu loptu.</p></article><article><h3>5. Druhý topspin a tlak do bloku</h3><p>Keď je lopta vyššie alebo sa vráti súperov blok, <b>${faster}</b> má väčší potenciál hrať viac dopredu, tvrdo a hlboko. <b>${controlled}</b> je výhodný, keď chceš držať bezpečnú spinovú sériu a meniť tempo.</p></article><article><h3>6. BH topspin, blok a protiútok</h3><p>Na BH bude pevnejšie a rýchlejšie drevo odmeňovať krátky aktívny pohyb, punch a blok. Citlivejšie drevo poskytne viac času na otvorenie proti spodnej rotácii. Pri silnom súperovom topspine má <b>${faster}</b> väčšiu stabilitu, <b>${controlled}</b> viac možností tlmenia.</p></article><article><h3>7. Polodistancia a hra ďalej od stola</h3><p>V polodistancii má <b>${faster}</b> väčšiu rezervu hĺbky a menej vyžaduje maximálny švih. <b>${controlled}</b> viac pomáha vysokým oblúkom a vytiahnutím nízkej lopty, ale energiu musíš častejšie vytvoriť vlastným telom a predlaktím.</p></article><article><h3>8. Servis a odpustenie chýb</h3><p>Pri servise je dôležitejší dotyk a poťah než samotná maximálna rýchlosť dreva. <b>${controlled}</b> má výhodu pri jemnom krátkom servise; <b>${faster}</b> pri rýchlom dlhom servise. Pomalé technické chyby odpúšťa viac citlivejšie drevo, silné údery stabilnejšie drevo.</p></article><article><h3>9. Vplyv konkrétneho kusu</h3><p>Hmotnosť, vyváženie, tvar rukoväte a skutočná hrúbka poťahov môžu rozdiel citeľne zmeniť. Pri dvoch tvrdších poťahoch môže aj rozdiel niekoľkých gramov rozhodnúť o rýchlosti BH prepínania a únave predlaktia.</p></article><article><h3>10. Verdikt pre výber</h3><p>Vyber <b>${controlled}</b>, ak je prioritou cit, krátka hra, bezpečný prvý topspin a technický tréning. Vyber <b>${faster}</b>, ak chceš aktívny blok, protiútok, tlak v polodistancii a tvrdšie zakončenie. Najlepšie rozhodnutie stále potvrdí test s vlastnými poťahmi.</p></article></div></section>`;
}
function compare(){
  const current=setupData('current'),target=setupData('target'),p=profile(),delta={speed:target.speed-current.speed,control:target.control-current.control,spin:target.spin-current.spin};
  const demanded=(target.speed>75?2:0)+(target.fh.hardness>47?1:0)+(target.bh.hardness>47?1:0),readiness=p.level+p.training+p['fh-skill']+p['bh-skill']+Math.max(0,p.footwork-1);
  let score=Math.max(42,Math.min(96,82-Math.max(0,demanded*3-readiness)*6+(delta.control>0?5:0)+(delta.spin>0?3:0)-(delta.speed>18?5:0)));score=Math.round(score);
  const label=score>=80?'Veľmi sľubná zmena':score>=65?'Zmena s rozumným potenciálom':'Zmena si vyžiada adaptáciu',biggest=Object.entries(delta).sort((a,b)=>Math.abs(b[1])-Math.abs(a[1]))[0],names={speed:'rýchlosti',control:'kontroly',spin:'rotácie'};
  $('result-title').textContent=`${bladeName('current')} vs. ${bladeName('target')}`;$('result-summary').textContent=`Rýchle porovnanie dvoch zostáv podľa dreva, poťahov a zvolenej hrúbky.`;$('score-value').textContent=score;$('score-ring').style.setProperty('--score',score);$('compatibility-label').textContent=label;$('compatibility-detail').textContent=score>=80?'Zmena zodpovedá tvojej technike a frekvencii tréningov.':score>=65?'Zostava dáva zmysel, no bude vyžadovať vedomú adaptáciu.':'Potenciál je vysoký, ale zostava môže byť menej odpúšťajúca.';
  document.querySelector('.comparison-details').innerHTML=briefResult(current,target,delta);
  const results=$('results');results.classList.remove('hidden');results.scrollIntoView({behavior:'smooth',block:'start'});
}
$('compare-button').addEventListener('click',compare);$('feedback-form').addEventListener('submit',submitFeedback);initialize();
