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
  {id:'yasaka-2040',brand:'Yasaka',name:'2040',speed:68,control:80,spin:80,feel:'mäkký',type:'5-vrstvové drevo'},
  {id:'yasaka-atletico-power',brand:'Yasaka',name:'Atletico Power',speed:80,control:70,spin:82,feel:'pevný',type:'7-vrstvové drevo'},
  {id:'yasaka-battle-balsa',brand:'Yasaka',name:'Battle Balsa',speed:78,control:74,spin:78,feel:'mäkký',type:'3-vrstvové balsa drevo'},
  {id:'yasaka-extra-3d',brand:'Yasaka',name:'Extra 3D',speed:73,control:77,spin:82,feel:'pružný',type:'5-vrstvové drevo'},
  {id:'yasaka-extra-offensive-7-power',brand:'Yasaka',name:'Extra Offensive 7 Power',speed:81,control:69,spin:82,feel:'pevný',type:'7-vrstvové drevo'},
  {id:'yasaka-falck-carbon',brand:'Yasaka',name:'Falck Carbon',speed:84,control:70,spin:84,feel:'pevný',type:'5+2 carbon'},
  {id:'yasaka-falck-w7',brand:'Yasaka',name:'Falck W7',speed:80,control:73,spin:83,feel:'pevný',type:'7-vrstvové drevo'},
  {id:'yasaka-goiabao-5',brand:'Yasaka',name:'Goiabao 5',speed:70,control:78,spin:82,feel:'stredný',type:'5-vrstvové drevo'},
  {id:'yasaka-masamune',brand:'Yasaka',name:'Masamune',speed:77,control:74,spin:83,feel:'pružný',type:'5-vrstvové drevo'},
  {id:'yasaka-max-carbon-3d',brand:'Yasaka',name:'Max Carbon 3D',speed:83,control:69,spin:82,feel:'tvrdý',type:'5+2 carbon'},
  {id:'yasaka-max-wood',brand:'Yasaka',name:'Max Wood',speed:78,control:72,spin:81,feel:'pevný',type:'7-vrstvové drevo'},
  {id:'yasaka-myth-carbon',brand:'Yasaka',name:'Myth Carbon',speed:85,control:68,spin:84,feel:'pevný',type:'5+2 carbon'},
  {id:'yasaka-myth-extra-offensive',brand:'Yasaka',name:'Myth Extra Offensive',speed:74,control:76,spin:83,feel:'pružný',type:'5-vrstvové drevo'},
  {id:'yasaka-myth-extra-special',brand:'Yasaka',name:'Myth Extra Special',speed:76,control:75,spin:83,feel:'stredný',type:'5-vrstvové drevo'},
  {id:'yasaka-myth-soft-carbon',brand:'Yasaka',name:'Myth Soft Carbon',speed:81,control:73,spin:84,feel:'mäkký',type:'5+2 carbon'},
  {id:'yasaka-resonate-gi',brand:'Yasaka',name:'Resonate GI',speed:82,control:71,spin:84,feel:'pevný',type:'5+2 carbon'},
  {id:'yasaka-resonate-go',brand:'Yasaka',name:'Resonate GO',speed:78,control:74,spin:84,feel:'pružný',type:'5+2 carbon'},
  {id:'yasaka-sweden-classic',brand:'Yasaka',name:'Sweden Classic',speed:63,control:86,spin:80,feel:'mäkký',type:'5-vrstvové drevo'},
  {id:'yasaka-sweden-defensive',brand:'Yasaka',name:'Sweden Defensive',speed:57,control:90,spin:78,feel:'mäkký',type:'5-vrstvové drevo'},
  {id:'yasaka-sweden-ek-carbon',brand:'Yasaka',name:'Sweden Ek Carbon',speed:82,control:70,spin:83,feel:'pevný',type:'5+2 carbon'},
  {id:'yasaka-sweden-extra',brand:'Yasaka',name:'Sweden Extra',speed:69,control:80,spin:82,feel:'pružný',type:'5-vrstvové drevo'},
  {id:'xiom-2-face',brand:'Xiom',name:'2 FACE',speed:88,control:69,spin:87,feel:'kombinovaný',type:'asymetrické inner/outer hybrid carbon OFF drevo'},
  {id:'xiom-36-5-alx',brand:'Xiom',name:'36.5 ALX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-36-5-alxi',brand:'Xiom',name:'36.5 ALXi',speed:86,control:73,spin:88,feel:'stredný',type:'inner kompozitné OFF drevo'},
  {id:'xiom-aigis-7',brand:'Xiom',name:'AIGIS 7',speed:77,control:82,spin:82,feel:'stredný',type:'7-vrstvové ALL+/OFF- drevo'},
  {id:'xiom-aigis-al',brand:'Xiom',name:'AIGIS AL',speed:72,control:86,spin:82,feel:'mäkký',type:'arylate ALL+ drevo'},
  {id:'xiom-artemis-alx',brand:'Xiom',name:'ARTEMIS ALX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-artemis-alxi',brand:'Xiom',name:'ARTEMIS ALXi',speed:86,control:73,spin:88,feel:'stredný',type:'inner kompozitné OFF drevo'},
  {id:'xiom-chrome-xaxi',brand:'Xiom',name:'CHROME XAXi',speed:88,control:69,spin:87,feel:'kombinovaný',type:'asymetrické inner/outer hybrid carbon OFF drevo'},
  {id:'xiom-feel-ax',brand:'Xiom',name:'FEEL AX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-feel-hx',brand:'Xiom',name:'FEEL HX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-feel-hx-pro',brand:'Xiom',name:'FEEL HX Pro',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-feel-s7',brand:'Xiom',name:'FEEL S7',speed:83,control:76,spin:84,feel:'stredný',type:'7-vrstvové OFF drevo'},
  {id:'xiom-feel-sx',brand:'Xiom',name:'FEEL SX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-feel-zx-1',brand:'Xiom',name:'FEEL ZX 1',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-feel-zx-2',brand:'Xiom',name:'FEEL ZX 2',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-feel-zx-3',brand:'Xiom',name:'FEEL ZX 3',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-alx-pro',brand:'Xiom',name:'HAYABUSA ALX PRO',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-arx',brand:'Xiom',name:'HAYABUSA ARX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-arx-pro',brand:'Xiom',name:'HAYABUSA ARX PRO',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-hx-pro',brand:'Xiom',name:'HAYABUSA HX PRO',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-off-pro',brand:'Xiom',name:'HAYABUSA OFF PRO',speed:87,control:71,spin:85,feel:'tvrdý',type:'ofenzívne drevo'},
  {id:'xiom-hayabusa-zl-pro',brand:'Xiom',name:'HAYABUSA ZL PRO',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-zlx',brand:'Xiom',name:'HAYABUSA ZLX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hayabusa-zxl-pro',brand:'Xiom',name:'HAYABUSA ZXL PRO',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hibi-o',brand:'Xiom',name:'HIBI O',speed:90,control:67,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-hibi-o-pro',brand:'Xiom',name:'HIBI O Pro',speed:92,control:65,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-hibi-o-tour',brand:'Xiom',name:'HIBI O Tour',speed:90,control:67,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-hugo-alx-pro',brand:'Xiom',name:'HUGO ALX PRO',speed:91,control:66,spin:86,feel:'tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-hugo-alxi-pro',brand:'Xiom',name:'HUGO ALXi PRO',speed:88,control:71,spin:88,feel:'tvrdý',type:'inner kompozitné OFF drevo'},
  {id:'xiom-ice-cream-azx',brand:'Xiom',name:'Ice Cream AZX',speed:88,control:69,spin:87,feel:'kombinovaný',type:'asymetrické inner/outer hybrid carbon OFF drevo'},
  {id:'xiom-ice-cream-azx-pro',brand:'Xiom',name:'Ice Cream AZX PRO',speed:90,control:67,spin:87,feel:'tvrdý',type:'asymetrické inner/outer hybrid carbon OFF drevo'},
  {id:'xiom-ice-cream-azxi',brand:'Xiom',name:'Ice Cream AZXi',speed:88,control:69,spin:87,feel:'kombinovaný',type:'asymetrické inner/outer hybrid carbon OFF drevo'},
  {id:'xiom-ice-cream-azxi-pro',brand:'Xiom',name:'Ice Cream AZXi PRO',speed:90,control:67,spin:87,feel:'tvrdý',type:'asymetrické inner/outer hybrid carbon OFF drevo'},
  {id:'xiom-indeed-zlx',brand:'Xiom',name:'INDEED ZLX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-indeed-zlxi',brand:'Xiom',name:'INDEED ZLXi',speed:86,control:73,spin:88,feel:'stredný',type:'inner kompozitné OFF drevo'},
  {id:'xiom-katana-gold',brand:'Xiom',name:'KATANA Gold',speed:90,control:67,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-katana-platinum',brand:'Xiom',name:'KATANA Platinum',speed:90,control:67,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-katana-silver',brand:'Xiom',name:'KATANA Silver',speed:90,control:67,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-lss-alx-lite',brand:'Xiom',name:'LSS ALX LITE',speed:87,control:71,spin:86,feel:'mäkký',type:'ľahké kompozitné OFF drevo'},
  {id:'xiom-lss-alxi-lite',brand:'Xiom',name:'LSS ALXi LITE',speed:84,control:76,spin:88,feel:'mäkký',type:'ľahké kompozitné OFF drevo'},
  {id:'xiom-m-power',brand:'Xiom',name:'M Power',speed:88,control:69,spin:84,feel:'tvrdý',type:'penhold OFF+ drevo'},
  {id:'xiom-novus-aigis',brand:'Xiom',name:'NOVUS Aigis',speed:77,control:82,spin:82,feel:'stredný',type:'7-vrstvové ALL+/OFF- drevo'},
  {id:'xiom-novus-allround-s',brand:'Xiom',name:'NOVUS Allround S',speed:68,control:88,spin:80,feel:'mäkký',type:'celodrevené ALL drevo'},
  {id:'xiom-novus-axelo',brand:'Xiom',name:'NOVUS Axelo',speed:91,control:64,spin:84,feel:'tvrdý',type:'rýchle OFF+ drevo'},
  {id:'xiom-novus-extreme-s',brand:'Xiom',name:'NOVUS Extreme S',speed:91,control:64,spin:84,feel:'tvrdý',type:'rýchle OFF+ drevo'},
  {id:'xiom-novus-ignito',brand:'Xiom',name:'NOVUS Ignito',speed:91,control:64,spin:84,feel:'tvrdý',type:'rýchle OFF+ drevo'},
  {id:'xiom-novus-offensive-s',brand:'Xiom',name:'NOVUS Offensive S',speed:80,control:78,spin:83,feel:'stredný',type:'5-vrstvové OFF- drevo'},
  {id:'xiom-novus-stadivarius',brand:'Xiom',name:'NOVUS Stadivarius',speed:87,control:70,spin:86,feel:'stredne tvrdý',type:'kompozitné OFF drevo'},
  {id:'xiom-novus-strato',brand:'Xiom',name:'NOVUS Strato',speed:87,control:70,spin:86,feel:'stredne tvrdý',type:'kompozitné OFF drevo'},
  {id:'xiom-novus-zetro-quad',brand:'Xiom',name:'NOVUS Zetro Quad',speed:87,control:70,spin:86,feel:'stredne tvrdý',type:'kompozitné OFF drevo'},
  {id:'xiom-paltida',brand:'Xiom',name:'PALTIDA',speed:79,control:79,spin:84,feel:'pružný',type:'celodrevené OFF- drevo'},
  {id:'xiom-power-hinoki-seung',brand:'Xiom',name:'POWER HINOKI Seung',speed:90,control:67,spin:84,feel:'tvrdý',type:'hinoki penhold OFF+ drevo'},
  {id:'xiom-striker',brand:'Xiom',name:'STRIKER',speed:82,control:77,spin:83,feel:'stredný',type:'celodrevené OFF drevo'},
  {id:'xiom-tetra-tmx',brand:'Xiom',name:'TETRA TMX',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'outer kompozitné OFF+ drevo'},
  {id:'xiom-tetra-tmxi',brand:'Xiom',name:'TETRA TMXi',speed:86,control:73,spin:88,feel:'stredný',type:'inner kompozitné OFF drevo'},
  {id:'xiom-vivid',brand:'Xiom',name:'VIVID',speed:91,control:64,spin:84,feel:'tvrdý',type:'rýchle OFF+ drevo'},
  {id:'xiom-zeta-spin',brand:'Xiom',name:'ZETA Spin',speed:85,control:75,spin:90,feel:'stredne tvrdý',type:'ofenzívne drevo'},
  {id:'donic-alligator-combi',brand:'Donic',name:'Alligator Combi',speed:58,control:90,spin:70,feel:'kombinovaný',type:'kombinačné drevo'},
  {id:'donic-anders-lind-exceptional',brand:'Donic',name:'Anders Lind Exceptional',speed:87,control:68,spin:86,feel:'pevný',type:'inner Axontex carbon'},
  {id:'donic-anders-lind-hexa-carbon',brand:'Donic',name:'Anders Lind Hexa Carbon',speed:84,control:71,spin:85,feel:'pevný',type:'carbon'},
  {id:'donic-appelgren-allplay',brand:'Donic',name:'Appelgren Allplay',speed:63,control:88,spin:79,feel:'mäkký',type:'5-vrstvové drevo'},
  {id:'donic-appelgren-all-world-champion-89',brand:'Donic',name:'Appelgren ALL+ World Champion 89',speed:72,control:84,spin:81,feel:'pružný',type:'allround drevo'},
  {id:'donic-appelgren-dotec-control',brand:'Donic',name:'Appelgren Dotec Control',speed:69,control:86,spin:80,feel:'mäkký',type:'Dotec drevo'},
  {id:'donic-appelgren-exclusive-ar',brand:'Donic',name:'Appelgren Exclusive AR',speed:64,control:87,spin:78,feel:'mäkký',type:'allround drevo'},
  {id:'donic-appelgren-senso-allplay-v1',brand:'Donic',name:'Appelgren Senso Allplay V1',speed:66,control:86,spin:80,feel:'pružný',type:'5-vrstvové drevo'},
  {id:'donic-appelgren-senso-allplay-v2',brand:'Donic',name:'Appelgren Senso Allplay V2',speed:62,control:89,spin:79,feel:'mäkký',type:'5-vrstvové drevo'},
  {id:'donic-balsa-carbo-certran-fibre',brand:'Donic',name:'Balsa Carbo Certran Fibre',speed:91,control:61,spin:80,feel:'tvrdý',type:'balsa + carbon'},
  {id:'donic-balsa-carbo-fleece',brand:'Donic',name:'Balsa Carbo Fleece',speed:86,control:68,spin:81,feel:'pevný',type:'balsa + carbon fleece'},
  {id:'donic-burn-all-plus',brand:'Donic',name:'Burn ALL+',speed:72,control:83,spin:80,feel:'stredný',type:'allround drevo'},
  {id:'donic-burn-off',brand:'Donic',name:'Burn OFF',speed:87,control:66,spin:82,feel:'tvrdý',type:'útočné drevo'},
  {id:'donic-burn-off-minus',brand:'Donic',name:'Burn OFF-',speed:79,control:75,spin:82,feel:'stredný',type:'útočné drevo'},
  {id:'donic-cayman',brand:'Donic',name:'Cayman',speed:64,control:87,spin:70,feel:'pevný',type:'drevo pre poťahy s nopkami'},
  {id:'donic-classic-allround',brand:'Donic',name:'Classic Allround',speed:70,control:84,spin:81,feel:'pružný',type:'6+3 fiber'},
  {id:'donic-classic-offensive',brand:'Donic',name:'Classic Offensive',speed:82,control:72,spin:84,feel:'pevný',type:'fiber drevo'},
  {id:'donic-classic-power-allround',brand:'Donic',name:'Classic Power Allround',speed:76,control:79,spin:82,feel:'stredný',type:'flax fiber'},
  {id:'donic-coton-relevant',brand:'Donic',name:'Coton Relevant',speed:77,control:78,spin:83,feel:'stredný',type:'fiber drevo'},
  {id:'donic-defplay-classic-senso',brand:'Donic',name:'Defplay Classic Senso',speed:53,control:92,spin:72,feel:'mäkký',type:'defenzívne drevo'},
  {id:'donic-defplay-inner-carbon',brand:'Donic',name:'Defplay Inner Carbon',speed:62,control:88,spin:75,feel:'pružný',type:'inner carbon'},
  {id:'donic-defplay-senso',brand:'Donic',name:'Defplay Senso',speed:57,control:91,spin:74,feel:'mäkký',type:'defenzívne drevo'},
  {id:'donic-dotec-impuls',brand:'Donic',name:'Dotec Impuls',speed:80,control:76,spin:82,feel:'pružný',type:'Dotec drevo'},
  {id:'donic-dotec-true-carbon-inner',brand:'Donic',name:'Dotec True Carbon Inner',speed:81,control:75,spin:85,feel:'pružný',type:'inner carbon'},
  {id:'donic-epox-control',brand:'Donic',name:'Epox Control',speed:67,control:86,spin:79,feel:'mäkký',type:'allround drevo'},
  {id:'donic-epox-offensiv',brand:'Donic',name:'Epox Offensiv',speed:81,control:73,spin:82,feel:'pevný',type:'útočné drevo'},
  {id:'donic-epox-powerallround',brand:'Donic',name:'Epox Powerallround',speed:74,control:81,spin:81,feel:'stredný',type:'allround drevo'},
  {id:'donic-epox-topspeed',brand:'Donic',name:'Epox Topspeed',speed:89,control:63,spin:82,feel:'tvrdý',type:'útočné drevo'},
  {id:'donic-esprit',brand:'Donic',name:'Esprit',speed:81,control:74,spin:85,feel:'pružný',type:'útočné drevo'},
  {id:'donic-jo-waldner-gold-edition',brand:'Donic',name:'J.O. Waldner Gold Edition',speed:85,control:70,spin:85,feel:'pevný',type:'carbon'},
  {id:'donic-new-impuls-65',brand:'Donic',name:'New Impuls 6.5',speed:69,control:86,spin:80,feel:'mäkký',type:'allround drevo'},
  {id:'donic-new-impuls-70',brand:'Donic',name:'New Impuls 7.0',speed:79,control:77,spin:82,feel:'stredný',type:'útočné drevo'},
  {id:'donic-new-impuls-75',brand:'Donic',name:'New Impuls 7.5',speed:89,control:64,spin:81,feel:'tvrdý',type:'útočné drevo'},
  {id:'donic-original-carbospeed',brand:'Donic',name:'Original Carbospeed',speed:93,control:57,spin:80,feel:'tvrdý',type:'carbon'},
  {id:'donic-original-dotec-all',brand:'Donic',name:'Original Dotec ALL',speed:68,control:87,spin:80,feel:'mäkký',type:'Dotec drevo'},
  {id:'donic-original-dotec-all-plus',brand:'Donic',name:'Original Dotec ALL+',speed:74,control:82,spin:81,feel:'stredný',type:'Dotec fiber'},
  {id:'donic-original-dotec-off',brand:'Donic',name:'Original Dotec OFF',speed:83,control:71,spin:83,feel:'pevný',type:'Dotec fiber'},
  {id:'donic-original-exclusive-carbon',brand:'Donic',name:'Original Exclusive Carbon',speed:80,control:73,spin:81,feel:'pevný',type:'carbon'},
  {id:'donic-original-no1',brand:'Donic',name:'Original No. 1',speed:88,control:64,spin:84,feel:'tvrdý',type:'acryl carbon'},
  {id:'donic-original-no1-senso',brand:'Donic',name:'Original No. 1 Senso',speed:89,control:63,spin:84,feel:'tvrdý',type:'acryl carbon'},
  {id:'donic-original-senso-carbon',brand:'Donic',name:'Original Senso Carbon',speed:78,control:77,spin:82,feel:'pevný',type:'carbon'},
  {id:'donic-original-senso-v1',brand:'Donic',name:'Original Senso V1',speed:85,control:68,spin:83,feel:'pevný',type:'útočné drevo'},
  {id:'donic-original-senso-v2',brand:'Donic',name:'Original Senso V2',speed:76,control:79,spin:82,feel:'stredný',type:'allround/ofenzívne drevo'},
  {id:'donic-original-true-carbon',brand:'Donic',name:'Original True Carbon',speed:86,control:68,spin:85,feel:'pevný',type:'carbon'},
  {id:'donic-original-true-carbon-inner',brand:'Donic',name:'Original True Carbon Inner',speed:80,control:76,spin:86,feel:'pružný',type:'inner carbon'},
  {id:'donic-persson-dotec-off',brand:'Donic',name:'Persson Dotec OFF',speed:82,control:73,spin:82,feel:'pevný',type:'Dotec drevo'},
  {id:'donic-persson-exclusive-off',brand:'Donic',name:'Persson Exclusive OFF',speed:78,control:76,spin:81,feel:'stredný',type:'útočné drevo'},
  {id:'donic-persson-jubilee-40',brand:'Donic',name:'Persson Jubilee 40',speed:84,control:71,spin:84,feel:'pevný',type:'útočné drevo'},
  {id:'donic-persson-off-plus-world-champion-89',brand:'Donic',name:'Persson OFF+ World Champion 89',speed:92,control:59,spin:82,feel:'tvrdý',type:'útočné drevo'},
  {id:'donic-persson-power-carbon',brand:'Donic',name:'Persson Power Carbon',speed:91,control:60,spin:81,feel:'tvrdý',type:'carbon'},
  {id:'donic-persson-powerallround',brand:'Donic',name:'Persson Powerallround',speed:72,control:83,spin:81,feel:'stredný',type:'allround drevo'},
  {id:'donic-persson-powerallround-senso-v1',brand:'Donic',name:'Persson Powerallround Senso V1',speed:74,control:81,spin:81,feel:'pružný',type:'allround drevo'},
  {id:'donic-persson-powerallround-senso-v2',brand:'Donic',name:'Persson Powerallround Senso V2',speed:70,control:85,spin:80,feel:'mäkký',type:'allround drevo'},
  {id:'donic-persson-powerplay',brand:'Donic',name:'Persson Powerplay',speed:79,control:75,spin:81,feel:'pevný',type:'útočné drevo'},
  {id:'donic-persson-powerplay-senso-v1',brand:'Donic',name:'Persson Powerplay Senso V1',speed:81,control:73,spin:81,feel:'pevný',type:'útočné drevo'},
  {id:'donic-persson-powerplay-senso-v2',brand:'Donic',name:'Persson Powerplay Senso V2',speed:76,control:78,spin:81,feel:'stredný',type:'útočné drevo'},
  {id:'donic-persson-seven',brand:'Donic',name:'Persson Seven',speed:77,control:78,spin:82,feel:'mäkký',type:'7-vrstvové drevo'},
  {id:'donic-persson-youngstar',brand:'Donic',name:'Persson Youngstar',speed:68,control:84,spin:78,feel:'mäkký',type:'juniorské drevo'},
  {id:'donic-relevant',brand:'Donic',name:'Relevant',speed:78,control:77,spin:83,feel:'pružný',type:'útočné drevo'},
  {id:'donic-waldner-allplay',brand:'Donic',name:'Waldner Allplay',speed:64,control:87,spin:79,feel:'mäkký',type:'allround drevo'},
  {id:'donic-waldner-black-devil-cb',brand:'Donic',name:'Waldner Black Devil CB',speed:88,control:65,spin:81,feel:'tvrdý',type:'carbon balsa'},
  {id:'donic-waldner-dicon',brand:'Donic',name:'Waldner Dicon',speed:80,control:75,spin:81,feel:'pevný',type:'útočné drevo'},
  {id:'donic-waldner-dotec-ar',brand:'Donic',name:'Waldner Dotec AR',speed:75,control:80,spin:81,feel:'pevný',type:'Dotec drevo'},
  {id:'donic-waldner-dotec-carbon',brand:'Donic',name:'Waldner Dotec Carbon',speed:83,control:72,spin:82,feel:'tvrdý',type:'Dotec carbon'},
  {id:'donic-waldner-exclusive-ar-plus',brand:'Donic',name:'Waldner Exclusive AR+',speed:71,control:82,spin:80,feel:'stredný',type:'allround drevo'},
  {id:'donic-waldner-legend-carbon',brand:'Donic',name:'Waldner Legend Carbon',speed:89,control:63,spin:82,feel:'tvrdý',type:'carbon'},
  {id:'donic-waldner-off-world-champion-89',brand:'Donic',name:'Waldner OFF World Champion 89',speed:84,control:71,spin:84,feel:'pevný',type:'útočné drevo'},
  {id:'donic-waldner-offensiv',brand:'Donic',name:'Waldner Offensiv',speed:82,control:74,spin:83,feel:'pružný',type:'5-vrstvové drevo'},
  {id:'donic-waldner-senso-carbon',brand:'Donic',name:'Waldner Senso Carbon',speed:79,control:76,spin:83,feel:'pružný',type:'carbon'},
  {id:'donic-waldner-senso-ultra-carbon',brand:'Donic',name:'Waldner Senso Ultra Carbon',speed:84,control:70,spin:82,feel:'pevný',type:'carbon'},
  {id:'donic-waldner-senso-v1',brand:'Donic',name:'Waldner Senso V1',speed:78,control:77,spin:82,feel:'pružný',type:'útočné drevo'},
  {id:'donic-waldner-senso-v2',brand:'Donic',name:'Waldner Senso V2',speed:73,control:82,spin:81,feel:'mäkký',type:'allround/ofenzívne drevo'},
  {id:'donic-waldner-youngstar',brand:'Donic',name:'Waldner Youngstar',speed:61,control:88,spin:76,feel:'mäkký',type:'juniorské drevo'},
  {id:'donic-wang-xi-dotec-control-plus',brand:'Donic',name:'Wang Xi Dotec Control Plus',speed:64,control:88,spin:75,feel:'mäkký',type:'defenzívne Dotec drevo'},
  {id:'donic-whiper-inner-carbon',brand:'Donic',name:'Whiper Inner Carbon',speed:80,control:76,spin:85,feel:'pružný',type:'inner carbon'},
  {id:'donic-whiper-outer-carbon',brand:'Donic',name:'Whiper Outer Carbon',speed:85,control:69,spin:83,feel:'pevný',type:'outer carbon'},
  {id:'donic-xtreme',brand:'Donic',name:'Xtreme',speed:92,control:60,spin:84,feel:'tvrdý',type:'carbon'},
  {id:'donic-zentra-first-allround',brand:'Donic',name:'Zentra First Allround',speed:61,control:89,spin:77,feel:'mäkký',type:'začiatočnícke allround drevo'},
  {id:'donic-zentra-next-carbon',brand:'Donic',name:'Zentra Next Carbon',speed:72,control:82,spin:80,feel:'stredný',type:'carbon'},
  {id:'donic-zhang-jike-new-era',brand:'Donic',name:'Zhang Jike New Era',speed:82,control:74,spin:85,feel:'pružný',type:'carbon'},
  {id:'donic-zhang-jike-original-carbon',brand:'Donic',name:'Zhang Jike Original Carbon',speed:88,control:66,spin:86,feel:'pevný',type:'carbon'},
  {id:'donic-zhang-jike-true-carbon',brand:'Donic',name:'Zhang Jike True Carbon',speed:90,control:64,spin:86,feel:'pevný',type:'carbon'},
  {id:'tibhar-ak-23',brand:'Tibhar',name:'AK 23',speed:87,control:73,spin:85,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-alexis-lebrun-all',brand:'Tibhar',name:'ALEXIS LEBRUN ALL+',speed:70,control:90,spin:85,feel:'mäkký',type:'5-vrstvové ALL drevo'},
  {id:'tibhar-alexis-lebrun-krypto-carbon',brand:'Tibhar',name:'ALEXIS LEBRUN KRYPTO CARBON',speed:90,control:70,spin:85,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-alexis-lebrun-off',brand:'Tibhar',name:'ALEXIS LEBRUN OFF',speed:83,control:80,spin:86,feel:'stredný',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-allround-classic',brand:'Tibhar',name:'ALLROUND CLASSIC',speed:63,control:83,spin:78,feel:'stredný',type:'5-vrstvové ALL drevo'},
  {id:'tibhar-balsa-allround-50',brand:'Tibhar',name:'BALSA ALLROUND 50',speed:67,control:90,spin:83,feel:'mäkký',type:'5-vrstvové ALL drevo'},
  {id:'tibhar-balsa-def-25',brand:'Tibhar',name:'BALSA DEF 25',speed:33,control:100,spin:71,feel:'mäkký',type:'5-vrstvové DEF drevo'},
  {id:'tibhar-balsa-fibre-off-60',brand:'Tibhar',name:'BALSA FIBRE OFF 60',speed:80,control:80,spin:85,feel:'stredný',type:'7-vrstvové OFF- drevo'},
  {id:'tibhar-balsa-fibretec-75',brand:'Tibhar',name:'BALSA FIBRETEC 75',speed:87,control:77,spin:87,feel:'stredne tvrdý',type:'5-vrstvové OFF drevo'},
  {id:'tibhar-black-carbon',brand:'Tibhar',name:'BLACK CARBON',speed:93,control:63,spin:83,feel:'tvrdý',type:'7-vrstvové OFF+ drevo'},
  {id:'tibhar-champ',brand:'Tibhar',name:'CHAMP',speed:70,control:50,spin:65,feel:'stredný',type:'4-vrstvové ALL drevo'},
  {id:'tibhar-chila-off',brand:'Tibhar',name:'CHILA OFF',speed:73,control:80,spin:81,feel:'stredný',type:'5-vrstvové OFF drevo'},
  {id:'tibhar-co-s-3',brand:'Tibhar',name:'CO-S-3',speed:33,control:97,spin:70,feel:'mäkký',type:'3-vrstvové DEF drevo'},
  {id:'tibhar-darko-jorgic-infinity-carbon',brand:'Tibhar',name:'Darko Jorgic Infinity Carbon',speed:90,control:70,spin:85,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-defense-plus',brand:'Tibhar',name:'DEFENSE PLUS',speed:33,control:100,spin:71,feel:'mäkký',type:'5-vrstvové DEF drevo'},
  {id:'tibhar-drinkhall-power-spin-carbon',brand:'Tibhar',name:'DRINKHALL POWER SPIN CARBON',speed:93,control:73,spin:88,feel:'tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-dynamic-j7',brand:'Tibhar',name:'DYNAMIC J7',speed:83,control:87,spin:90,feel:'stredný',type:'7-vrstvové OFF- drevo'},
  {id:'tibhar-e-lebesson',brand:'Tibhar',name:'E. LEBESSON',speed:80,control:80,spin:85,feel:'stredný',type:'5-vrstvové OFF- drevo'},
  {id:'tibhar-force-pro-black-edition',brand:'Tibhar',name:'FORCE PRO BLACK EDITION',speed:87,control:73,spin:85,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-fortino-force',brand:'Tibhar',name:'FORTINO FORCE',speed:93,control:77,spin:90,feel:'tvrdý',type:'5+2 kompozitné OFF- drevo'},
  {id:'tibhar-fortino-performance',brand:'Tibhar',name:'FORTINO PERFORMANCE',speed:83,control:90,spin:91,feel:'mäkký',type:'7+2 kompozitné OFF- drevo'},
  {id:'tibhar-fortino-pro',brand:'Tibhar',name:'FORTINO PRO',speed:100,control:73,spin:91,feel:'tvrdý',type:'5+2 kompozitné OFF+ drevo'},
  {id:'tibhar-fortino-pro-dc-inside',brand:'Tibhar',name:'FORTINO PRO DC INSIDE',speed:90,control:70,spin:85,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-f-lix-lebrun-all',brand:'Tibhar',name:'FÉLIX LEBRUN ALL',speed:67,control:93,spin:85,feel:'mäkký',type:'7-vrstvové ALL drevo'},
  {id:'tibhar-f-lix-lebrun-hyper-carbon',brand:'Tibhar',name:'FÉLIX LEBRUN HYPER CARBON',speed:87,control:77,spin:87,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-f-lix-lebrun-off',brand:'Tibhar',name:'FÉLIX LEBRUN OFF-',speed:80,control:77,spin:83,feel:'stredný',type:'5+2 kompozitné OFF- drevo'},
  {id:'tibhar-hybrid-ac-inside',brand:'Tibhar',name:'HYBRID AC INSIDE',speed:80,control:80,spin:85,feel:'stredný',type:'7-vrstvové OFF- drevo'},
  {id:'tibhar-iv-l',brand:'Tibhar',name:'IV-L',speed:70,control:87,spin:83,feel:'stredný',type:'4-vrstvové ALL drevo'},
  {id:'tibhar-iv-l-balsa',brand:'Tibhar',name:'IV-L BALSA',speed:60,control:93,spin:81,feel:'mäkký',type:'6-vrstvové ALL drevo'},
  {id:'tibhar-iv-l-light-contact',brand:'Tibhar',name:'IV-L LIGHT CONTACT',speed:70,control:80,spin:80,feel:'stredný',type:'4-vrstvové OFF/ALL drevo'},
  {id:'tibhar-iv-s',brand:'Tibhar',name:'IV-S',speed:83,control:73,spin:83,feel:'stredný',type:'5-vrstvové OFF- drevo'},
  {id:'tibhar-kinetic-speed',brand:'Tibhar',name:'KINETIC SPEED',speed:90,control:70,spin:85,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-kratos',brand:'Tibhar',name:'KRATOS',speed:97,control:60,spin:83,feel:'tvrdý',type:'5-vrstvové OFF drevo'},
  {id:'tibhar-li-qian',brand:'Tibhar',name:'LI QIAN',speed:37,control:100,spin:73,feel:'mäkký',type:'5-vrstvové DEF drevo'},
  {id:'tibhar-libra-zac-zodiac-series',brand:'Tibhar',name:'LIBRA ZAC -ZODIAC SERIES',speed:87,control:80,spin:88,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-match',brand:'Tibhar',name:'MATCH',speed:67,control:57,spin:67,feel:'stredný',type:'5-vrstvové ALL drevo'},
  {id:'tibhar-mk-7',brand:'Tibhar',name:'MK 7',speed:87,control:80,spin:88,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-mk-all',brand:'Tibhar',name:'MK ALL',speed:63,control:90,spin:81,feel:'mäkký',type:'5-vrstvové ALL+ drevo'},
  {id:'tibhar-mk-carbon',brand:'Tibhar',name:'MK CARBON',speed:90,control:73,spin:86,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'tibhar-nimbus-all',brand:'Tibhar',name:'NIMBUS ALL',speed:77,control:93,spin:90,feel:'mäkký',type:'7-vrstvové ALL+ drevo'},
  {id:'tibhar-nuytinck-hybrid-zc',brand:'Tibhar',name:'NUYTINCK HYBRID ZC',speed:87,control:70,spin:83,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-oh-junsung',brand:'Tibhar',name:'Oh Junsung',speed:93,control:67,spin:85,feel:'tvrdý',type:'5+2 kompozitné OFF+ drevo'},
  {id:'tibhar-rapid-carbon-light',brand:'Tibhar',name:'RAPID CARBON LIGHT',speed:93,control:57,spin:80,feel:'tvrdý',type:'7-vrstvové OFF+ drevo'},
  {id:'tibhar-samsonov-alpha',brand:'Tibhar',name:'SAMSONOV ALPHA',speed:80,control:77,spin:83,feel:'stredný',type:'5-vrstvové OFF- drevo'},
  {id:'tibhar-samsonov-carbon',brand:'Tibhar',name:'SAMSONOV CARBON',speed:100,control:53,spin:81,feel:'tvrdý',type:'7-vrstvové OFF+ drevo'},
  {id:'tibhar-samsonov-force-pro',brand:'Tibhar',name:'SAMSONOV FORCE PRO',speed:87,control:70,spin:83,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-samsonov-premium-contact',brand:'Tibhar',name:'SAMSONOV PREMIUM CONTACT',speed:77,control:80,spin:83,feel:'stredný',type:'5-vrstvové OFF/ALL drevo'},
  {id:'tibhar-samsonov-premium-junior',brand:'Tibhar',name:'SAMSONOV PREMIUM JUNIOR',speed:70,control:60,spin:70,feel:'stredný',type:'5-vrstvové ALL+ drevo'},
  {id:'tibhar-samsonov-stratus-carbon',brand:'Tibhar',name:'SAMSONOV STRATUS CARBON',speed:97,control:67,spin:87,feel:'tvrdý',type:'7-vrstvové OFF+ drevo'},
  {id:'tibhar-smash',brand:'Tibhar',name:'SMASH',speed:57,control:67,spin:67,feel:'stredný',type:'4-vrstvové ALL drevo'},
  {id:'tibhar-stratus-powerdefense',brand:'Tibhar',name:'STRATUS POWERDEFENSE',speed:63,control:100,spin:86,feel:'mäkký',type:'5-vrstvové ALL drevo'},
  {id:'tibhar-stratus-powerwood',brand:'Tibhar',name:'STRATUS POWERWOOD',speed:90,control:73,spin:86,feel:'stredne tvrdý',type:'5-vrstvové OFF- drevo'},
  {id:'tibhar-sz-cs-signature-1',brand:'Tibhar',name:'SZÖCS SIGNATURE 1',speed:77,control:83,spin:85,feel:'stredný',type:'7-vrstvové OFF- drevo'},
  {id:'tibhar-techno-power-contact',brand:'Tibhar',name:'TECHNO POWER CONTACT',speed:67,control:77,spin:77,feel:'stredný',type:'5-vrstvové ALL+ drevo'},
  {id:'tibhar-triple-carbon',brand:'Tibhar',name:'TRIPLE CARBON',speed:100,control:57,spin:83,feel:'tvrdý',type:'11-vrstvové OFF+ drevo'},
  {id:'tibhar-vs-unlimited',brand:'Tibhar',name:'VS UNLIMITED',speed:90,control:83,spin:91,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'},
  {id:'tibhar-lvaro-robles-estoque',brand:'Tibhar',name:'ÁLVARO ROBLES ESTOQUE',speed:90,control:70,spin:85,feel:'stredne tvrdý',type:'5+2 kompozitné OFF drevo'},
  {id:'joola-baseline-all',brand:'Joola',name:'BASEline ALL',speed:66,control:86,spin:79,feel:'stredný',type:'5-vrstvové ALL drevo'},
  {id:'joola-baseline-carbon',brand:'Joola',name:'BASEline CARBON',speed:79,control:75,spin:82,feel:'stredne tvrdý',type:'carbon OFF drevo'},
  {id:'joola-baseline-jr',brand:'Joola',name:'BASEline Jr',speed:61,control:89,spin:76,feel:'mäkký',type:'juniorské ALL drevo'},
  {id:'joola-baseline-off',brand:'Joola',name:'BASEline OFF',speed:76,control:78,spin:81,feel:'stredný',type:'ofenzívne celodrevené drevo'},
  {id:'joola-cwx',brand:'Joola',name:'CWX',speed:68,control:86,spin:77,feel:'mäkký',type:'defenzívne kompozitné drevo'},
  {id:'joola-hugo-calderano-ary-c',brand:'Joola',name:'Hugo Calderano ARY-C',speed:90,control:64,spin:88,feel:'tvrdý',type:'arylate-carbon OFF+ drevo'},
  {id:'joola-hugo-calderano-ary-x',brand:'Joola',name:'Hugo Calderano ARY-X',speed:92,control:61,spin:87,feel:'tvrdý',type:'arylate kompozitné OFF+ drevo'},
  {id:'joola-hugo-calderano-aw-7',brand:'Joola',name:'Hugo Calderano AW-7',speed:81,control:73,spin:83,feel:'stredne tvrdý',type:'7-vrstvové celodrevené OFF drevo'},
  {id:'joola-hugo-calderano-kl-c-inner',brand:'Joola',name:'Hugo Calderano KL-c Inner',speed:85,control:70,spin:88,feel:'stredne tvrdý',type:'inner KL-c OFF drevo'},
  {id:'joola-nobilis-pbo-c',brand:'Joola',name:'Nobilis PBO-c',speed:88,control:66,spin:86,feel:'tvrdý',type:'3+2 PBO-c hinoki OFF+ drevo'},
  {id:'joola-proline-aw5',brand:'Joola',name:'PROline AW5',speed:74,control:80,spin:83,feel:'stredný',type:'5-vrstvové celodrevené drevo'},
  {id:'joola-proline-aw7',brand:'Joola',name:'PROline AW7',speed:81,control:73,spin:83,feel:'stredne tvrdý',type:'7-vrstvové celodrevené drevo'},
  {id:'joola-proline-iac',brand:'Joola',name:'PROline IAC',speed:84,control:72,spin:87,feel:'stredne tvrdý',type:'inner arylate-carbon OFF drevo'},
  {id:'joola-proline-oac',brand:'Joola',name:'PROline OAC',speed:87,control:68,spin:85,feel:'tvrdý',type:'outer arylate-carbon OFF+ drevo'},
  {id:'joola-proline-one',brand:'Joola',name:'PROline One',speed:83,control:72,spin:84,feel:'stredne tvrdý',type:'kompozitné OFF drevo'},
  {id:'joola-santoru-3k-c',brand:'Joola',name:'Santoru 3K-c',speed:87,control:67,spin:84,feel:'tvrdý',type:'3K-carbon OFF+ drevo'},
  {id:'joola-santoru-kl-c-outer',brand:'Joola',name:'Santoru KL-c Outer',speed:86,control:69,spin:85,feel:'tvrdý',type:'outer KL-c OFF+ drevo'},
  {id:'joola-tezzo-guardian',brand:'Joola',name:'Tezzo Guardian',speed:70,control:84,spin:80,feel:'mäkký',type:'kontrolné ALL drevo'},
  {id:'joola-tezzo-paladin',brand:'Joola',name:'Tezzo Paladin',speed:77,control:78,spin:82,feel:'stredný',type:'ALL+/OFF- drevo'},
  {id:'joola-tezzo-spartan',brand:'Joola',name:'Tezzo Spartan',speed:82,control:72,spin:83,feel:'stredne tvrdý',type:'ofenzívne celodrevené drevo'},
  {id:'joola-tezzo-warrior',brand:'Joola',name:'Tezzo Warrior',speed:86,control:68,spin:84,feel:'tvrdý',type:'kompozitné OFF+ drevo'},
  {id:'joola-vyzaryz-freeze',brand:'Joola',name:'Vyzaryz Freeze',speed:86,control:69,spin:85,feel:'stredne tvrdý',type:'PBO-c OFF drevo'},
  {id:'joola-vyzaryz-freeze-hrd',brand:'Joola',name:'Vyzaryz Freeze HRD',speed:90,control:63,spin:85,feel:'tvrdý',type:'tvrdé PBO-c OFF+ drevo'},
  {id:'joola-vyzaryz-hybrid',brand:'Joola',name:'Vyzaryz Hybrid',speed:89,control:65,spin:87,feel:'kombinovaný',type:'asymetrické Super PBO-c/PBO-c drevo'},
  {id:'joola-vyzaryz-trinity',brand:'Joola',name:'Vyzaryz Trinity',speed:92,control:60,spin:88,feel:'tvrdý',type:'prémiové kompozitné OFF+ drevo'},
  {id:'joola-xylo-7',brand:'Joola',name:'Xylo 7',speed:82,control:73,spin:83,feel:'stredne tvrdý',type:'7-vrstvové celodrevené OFF drevo'},
  {id:'treiber',brand:'andro',name:'Treiber FO OFF/S',speed:83,control:68,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'andro-achanta',brand:'andro',name:'andro Achanta',speed:83,control:71,spin:84,feel:'pevný',type:'carbon'}
  ,{id:'andro-achanta-legacy-off',brand:'andro',name:'Achanta Legacy OFF',speed:75,control:76,spin:82,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'andro-eloi-legacy-offs',brand:'andro',name:'Eloi Legacy OFF/S',speed:72,control:78,spin:82,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'andro-heister-legacy-off',brand:'andro',name:'Heister Legacy OFF',speed:75,control:76,spin:81,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'andro-kanter-co-off',brand:'andro',name:'Kanter CO OFF',speed:85,control:69,spin:83,feel:'pevný',type:'balsa + outer carbon'}
  ,{id:'andro-kanter-fo-alls',brand:'andro',name:'Kanter FO ALL/S',speed:74,control:78,spin:82,feel:'pružný',type:'balsa + outer fiber'}
  ,{id:'andro-kanter-fo-off',brand:'andro',name:'Kanter FO OFF',speed:82,control:71,spin:83,feel:'pevný',type:'balsa + outer fiber'}
  ,{id:'andro-novacell-alls',brand:'andro',name:'Novacell ALL/S',speed:68,control:82,spin:80,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'andro-novacell-off',brand:'andro',name:'Novacell OFF',speed:76,control:75,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'andro-novacell-offs',brand:'andro',name:'Novacell OFF/S',speed:73,control:77,spin:82,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'andro-synteliac-vci',brand:'andro',name:'Synteliac VCI',speed:82,control:72,spin:84,feel:'pružný',type:'inner Voltema-carbon'}
  ,{id:'andro-synteliac-vci-gauzy',brand:'andro',name:'Synteliac VCI Gauzy Original',speed:83,control:72,spin:85,feel:'pružný',type:'inner Voltema-carbon'}
  ,{id:'andro-synteliac-vco',brand:'andro',name:'Synteliac VCO',speed:85,control:69,spin:84,feel:'pevný',type:'outer Voltema-carbon'}
  ,{id:'andro-synteliac-zci',brand:'andro',name:'Synteliac ZCI',speed:84,control:70,spin:84,feel:'pevný',type:'inner Zyreema-carbon'}
  ,{id:'andro-synteliac-zco',brand:'andro',name:'Synteliac ZCO',speed:88,control:66,spin:84,feel:'tvrdý',type:'outer Zyreema-carbon'}
  ,{id:'andro-timber-5-all',brand:'andro',name:'Timber 5 ALL',speed:64,control:85,spin:80,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'andro-timber-5-alls',brand:'andro',name:'Timber 5 ALL/S',speed:68,control:81,spin:81,feel:'pružný',type:'5-vrstvové drevo'}
  ,{id:'andro-timber-5-def',brand:'andro',name:'Timber 5 DEF',speed:56,control:90,spin:78,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'andro-timber-5-off',brand:'andro',name:'Timber 5 OFF',speed:73,control:77,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'andro-timber-7-off',brand:'andro',name:'Timber 7 OFF',speed:79,control:72,spin:82,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'andro-timber-7-offs',brand:'andro',name:'Timber 7 OFF/S',speed:76,control:74,spin:82,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'andro-tp-ligna-all',brand:'andro',name:'TP Ligna ALL',speed:68,control:82,spin:81,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'andro-tp-ligna-basalt-inner',brand:'andro',name:'TP Ligna Basalt Inner',speed:80,control:73,spin:84,feel:'pružný',type:'inner basalt fiber'}
  ,{id:'andro-tp-ligna-ci',brand:'andro',name:'TP Ligna CI',speed:83,control:70,spin:84,feel:'pružný',type:'inner carbon'}
  ,{id:'andro-tp-ligna-co',brand:'andro',name:'TP Ligna CO',speed:85,control:68,spin:83,feel:'pevný',type:'outer carbon'}
  ,{id:'andro-tp-ligna-def',brand:'andro',name:'TP Ligna DEF',speed:58,control:90,spin:79,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'andro-treiber-ci-off',brand:'andro',name:'Treiber CI OFF',speed:82,control:72,spin:84,feel:'pružný',type:'inner carbon'}
  ,{id:'andro-treiber-co-alls',brand:'andro',name:'Treiber CO ALL/S',speed:75,control:76,spin:82,feel:'pevný',type:'outer carbon'}
  ,{id:'andro-treiber-co-offs',brand:'andro',name:'Treiber CO OFF/S',speed:84,control:69,spin:83,feel:'pevný',type:'outer carbon'}
  ,{id:'andro-treiber-fi-off',brand:'andro',name:'Treiber FI OFF',speed:80,control:73,spin:84,feel:'pružný',type:'inner fiber'}
  ,{id:'andro-unity-5-all',brand:'andro',name:'Unity 5 ALL',speed:65,control:84,spin:80,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'andro-unity-5-off',brand:'andro',name:'Unity 5 OFF',speed:73,control:77,spin:81,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'andro-unity-7-off',brand:'andro',name:'Unity 7 OFF',speed:78,control:73,spin:82,feel:'pevný',type:'7-vrstvové drevo'}
  ,{id:'andro-wosik-legacy-off',brand:'andro',name:'Wosik Legacy OFF',speed:75,control:76,spin:82,feel:'pružný',type:'5-vrstvové drevo'}
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
  ,{id:'yinhe-437s',brand:'Yinhe',name:'437S Provincial',speed:82,control:76,spin:84,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'}
  ,{id:'yinhe-896',brand:'Yinhe',name:'896',speed:70,control:86,spin:80,feel:'mäkký',type:'5-vrstvové ALL+ drevo'}
  ,{id:'yinhe-970xx-k',brand:'Yinhe',name:'970XX-K',speed:88,control:70,spin:85,feel:'tvrdý',type:'K-carbon OFF+ drevo'}
  ,{id:'yinhe-980',brand:'Yinhe',name:'980',speed:59,control:92,spin:75,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'yinhe-980-d1',brand:'Yinhe',name:'980 D1',speed:52,control:95,spin:73,feel:'mäkký',type:'DEF drevo'}
  ,{id:'yinhe-980-d2',brand:'Yinhe',name:'980 D2',speed:56,control:93,spin:75,feel:'mäkký',type:'DEF+ drevo'}
  ,{id:'yinhe-980xx',brand:'Yinhe',name:'980XX',speed:63,control:91,spin:77,feel:'stredný',type:'kompozitné DEF+ drevo'}
  ,{id:'yinhe-982',brand:'Yinhe',name:'982',speed:87,control:70,spin:83,feel:'tvrdý',type:'1-vrstvové kiso hinoki penhold drevo'}
  ,{id:'yinhe-984',brand:'Yinhe',name:'984',speed:82,control:76,spin:83,feel:'stredne tvrdý',type:'carbon OFF drevo'}
  ,{id:'yinhe-985',brand:'Yinhe',name:'985',speed:78,control:81,spin:83,feel:'stredný',type:'5-vrstvové celodrevené drevo'}
  ,{id:'yinhe-988',brand:'Yinhe',name:'988',speed:83,control:75,spin:83,feel:'stredne tvrdý',type:'carbon OFF drevo'}
  ,{id:'yinhe-cn5',brand:'Yinhe',name:'CN5 Junior',speed:61,control:90,spin:76,feel:'mäkký',type:'juniorské tréningové drevo'}
  ,{id:'yinhe-e1',brand:'Yinhe',name:'Earth E-1',speed:77,control:82,spin:83,feel:'pružný',type:'5-vrstvové OFF- drevo'}
  ,{id:'yinhe-e3',brand:'Yinhe',name:'Earth E-3',speed:81,control:78,spin:84,feel:'stredný',type:'7-vrstvové OFF drevo'}
  ,{id:'yinhe-j1',brand:'Yinhe',name:'J-1',speed:82,control:76,spin:81,feel:'tvrdý',type:'1-vrstvové ayous penhold drevo'}
  ,{id:'yinhe-mc2',brand:'Yinhe',name:'MC-2',speed:76,control:83,spin:83,feel:'pružný',type:'microcrystalline carbon OFF- drevo'}
  ,{id:'yinhe-n10s',brand:'Yinhe',name:'N10s',speed:72,control:86,spin:80,feel:'mäkký',type:'5-vrstvové tréningové drevo'}
  ,{id:'yinhe-n11s',brand:'Yinhe',name:'N11s',speed:75,control:83,spin:81,feel:'stredný',type:'5-vrstvové tréningové drevo'}
  ,{id:'yinhe-n12',brand:'Yinhe',name:'N12',speed:78,control:81,spin:82,feel:'stredný',type:'5-vrstvové OFF- drevo'}
  ,{id:'yinhe-n8s',brand:'Yinhe',name:'N8s',speed:70,control:87,spin:80,feel:'mäkký',type:'5-vrstvové ALL+ drevo'}
  ,{id:'yinhe-n9s',brand:'Yinhe',name:'N9s',speed:73,control:85,spin:81,feel:'mäkký',type:'5-vrstvové ALL+/OFF- drevo'}
  ,{id:'yinhe-ne70',brand:'Yinhe',name:'NE-70',speed:86,control:72,spin:85,feel:'stredne tvrdý',type:'prémiové kompozitné OFF drevo'}
  ,{id:'yinhe-pro01',brand:'Yinhe',name:'PRO-01',speed:87,control:71,spin:87,feel:'stredne tvrdý',type:'outer ALC OFF drevo'}
  ,{id:'yinhe-pro01g',brand:'Yinhe',name:'PRO-01G',speed:88,control:71,spin:87,feel:'stredne tvrdý',type:'5+2 outer Green ALC OFF drevo'}
  ,{id:'yinhe-pro03',brand:'Yinhe',name:'PRO-03',speed:85,control:74,spin:87,feel:'stredný',type:'inner ALC OFF drevo'}
  ,{id:'yinhe-purple-dragon-537s',brand:'Yinhe',name:'Purple Dragon 537S',speed:82,control:76,spin:84,feel:'stredne tvrdý',type:'provinčné 7-vrstvové OFF drevo'}
  ,{id:'yinhe-t10s',brand:'Yinhe',name:'T-10S',speed:90,control:65,spin:84,feel:'tvrdý',type:'ľahké balsa carbon OFF+ drevo'}
  ,{id:'yinhe-t11s',brand:'Yinhe',name:'T-11S',speed:88,control:69,spin:84,feel:'tvrdý',type:'ľahké balsa carbon OFF+ drevo'}
  ,{id:'yinhe-t9',brand:'Yinhe',name:'T-9',speed:73,control:85,spin:78,feel:'kombinovaný',type:'drevo pre hru s dlhými zúbkami'}
  ,{id:'yinhe-t9-pro',brand:'Yinhe',name:'T-9 PRO',speed:80,control:79,spin:82,feel:'stredne tvrdý',type:'rosewood kompozitné OFF- drevo'}
  ,{id:'yinhe-t1s',brand:'Yinhe',name:'T1s',speed:84,control:73,spin:83,feel:'stredne tvrdý',type:'hinoki carbon OFF drevo'}
  ,{id:'yinhe-t2s',brand:'Yinhe',name:'T2s',speed:85,control:72,spin:84,feel:'stredne tvrdý',type:'hinoki carbon OFF drevo'}
  ,{id:'yinhe-t8s',brand:'Yinhe',name:'T8s',speed:86,control:71,spin:84,feel:'stredne tvrdý',type:'hinoki carbon OFF drevo'}
  ,{id:'yinhe-u2',brand:'Yinhe',name:'U-2',speed:81,control:78,spin:83,feel:'stredne tvrdý',type:'7-vrstvové celodrevené OFF drevo'}
  ,{id:'yinhe-u2s',brand:'Yinhe',name:'U-2S',speed:79,control:81,spin:84,feel:'pružný',type:'7-vrstvové spinové drevo'}
  ,{id:'yinhe-u3',brand:'Yinhe',name:'U-3',speed:83,control:76,spin:83,feel:'stredne tvrdý',type:'7-vrstvové OFF drevo'}
  ,{id:'yinhe-v14-pro',brand:'Yinhe',name:'V14 PRO',speed:88,control:69,spin:86,feel:'tvrdý',type:'5+2 outer ALC OFF+ drevo'}
  ,{id:'yinhe-w6',brand:'Yinhe',name:'W-6 Loop King',speed:78,control:81,spin:86,feel:'pružný',type:'5-vrstvové loop OFF- drevo'}
  ,{id:'yinhe-y13',brand:'Yinhe',name:'Y-13',speed:82,control:75,spin:84,feel:'stredne tvrdý',type:'fiber OFF drevo'}
  ,{id:'yinhe-y4',brand:'Yinhe',name:'Y-4',speed:80,control:77,spin:82,feel:'stredný',type:'tenké carbon OFF- drevo'}
  ,{id:'sanwei-a9',brand:'Sanwei',name:'A9',speed:78,control:77,spin:80,feel:'stredný',type:'ofenzívne drevo'}
  ,{id:'sanwei-accumulator-c',brand:'Sanwei',name:'Accumulator C',speed:86,control:70,spin:84,feel:'tvrdý',type:'carbon OFF drevo'}
  ,{id:'sanwei-accumulator-j',brand:'Sanwei',name:'Accumulator J',speed:81,control:75,spin:83,feel:'stredný',type:'ofenzívne drevo'}
  ,{id:'sanwei-accumulator-s',brand:'Sanwei',name:'Accumulator S',speed:83,control:73,spin:83,feel:'stredne tvrdý',type:'ofenzívne drevo'}
  ,{id:'sanwei-b1-spotless-white',brand:'Sanwei',name:'B1 Spotless White',speed:76,control:80,spin:79,feel:'stredný',type:'celodrevené OFF- drevo'}
  ,{id:'sanwei-breeze',brand:'Sanwei',name:'Breeze',speed:82,control:77,spin:83,feel:'mäkký',type:'5+2 basaltové OFF drevo'}
  ,{id:'sanwei-by1091-even',brand:'Sanwei',name:'BY1091 even',speed:84,control:72,spin:82,feel:'stredne tvrdý',type:'viacvrstvové kompozitné drevo'}
  ,{id:'sanwei-c-c',brand:'Sanwei',name:'C&C',speed:77,control:82,spin:80,feel:'stredný',type:'5+2 LD-carbon tréningové drevo'}
  ,{id:'sanwei-c2',brand:'Sanwei',name:'C2',speed:86,control:69,spin:82,feel:'tvrdý',type:'5+2 LD-carbon OFF+ drevo'}
  ,{id:'sanwei-c5',brand:'Sanwei',name:'C5',speed:83,control:72,spin:82,feel:'stredne tvrdý',type:'carbon OFF drevo'}
  ,{id:'sanwei-c6-ld',brand:'Sanwei',name:'C6 LD',speed:85,control:70,spin:82,feel:'tvrdý',type:'LD-carbon OFF+ drevo'}
  ,{id:'sanwei-ca-ld',brand:'Sanwei',name:'CA LD',speed:84,control:71,spin:83,feel:'stredne tvrdý',type:'LD-carbon OFF drevo'}
  ,{id:'sanwei-cannon-carbon',brand:'Sanwei',name:'Cannon Carbon',speed:89,control:65,spin:82,feel:'tvrdý',type:'carbon OFF+ drevo'}
  ,{id:'sanwei-cc',brand:'Sanwei',name:'CC',speed:78,control:80,spin:81,feel:'stredný',type:'tréningové kompozitné drevo'}
  ,{id:'sanwei-cs',brand:'Sanwei',name:'CS',speed:74,control:83,spin:80,feel:'mäkký',type:'kontrolné tréningové drevo'}
  ,{id:'sanwei-defense-alpha',brand:'Sanwei',name:'Defense Alpha',speed:59,control:92,spin:75,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'sanwei-dynamo',brand:'Sanwei',name:'Dynamo',speed:83,control:73,spin:82,feel:'stredne tvrdý',type:'ofenzívne drevo'}
  ,{id:'sanwei-echo',brand:'Sanwei',name:'Echo',speed:78,control:80,spin:82,feel:'stredný',type:'celodrevené ALL+/OFF- drevo'}
  ,{id:'sanwei-even-981',brand:'Sanwei',name:'Even 981',speed:87,control:73,spin:84,feel:'stredne tvrdý',type:'9+8 soft-carbon OFF drevo'}
  ,{id:'sanwei-even7',brand:'Sanwei',name:'even7',speed:81,control:76,spin:82,feel:'stredne tvrdý',type:'7-vrstvové celodrevené drevo'}
  ,{id:'sanwei-f1-classic',brand:'Sanwei',name:'F1 Classic',speed:85,control:70,spin:84,feel:'stredne tvrdý',type:'AL-carbon OFF drevo'}
  ,{id:'sanwei-f3-bulldozer',brand:'Sanwei',name:'F3 Bulldozer',speed:88,control:66,spin:86,feel:'tvrdý',type:'carbon OFF+ drevo'}
  ,{id:'sanwei-f3-classic',brand:'Sanwei',name:'F3 Classic',speed:84,control:71,spin:85,feel:'stredne tvrdý',type:'carbon OFF drevo'}
  ,{id:'sanwei-f3-pro',brand:'Sanwei',name:'F3 PRO',speed:87,control:68,spin:86,feel:'tvrdý',type:'carbon OFF+ drevo'}
  ,{id:'sanwei-feather-carbon',brand:'Sanwei',name:'Feather Carbon',speed:79,control:79,spin:81,feel:'mäkký',type:'ľahké carbon drevo'}
  ,{id:'sanwei-fextra',brand:'Sanwei',name:'FEXTRA',speed:80,control:77,spin:83,feel:'stredne tvrdý',type:'7-vrstvové celodrevené OFF drevo'}
  ,{id:'sanwei-fextra-allround',brand:'Sanwei',name:'FEXTRA Allround',speed:70,control:87,spin:80,feel:'mäkký',type:'celodrevené ALL drevo'}
  ,{id:'sanwei-fextra-one',brand:'Sanwei',name:'Fextra One',speed:83,control:74,spin:84,feel:'stredne tvrdý',type:'ofenzívne drevo'}
  ,{id:'sanwei-froster',brand:'Sanwei',name:'Froster',speed:86,control:70,spin:86,feel:'stredne tvrdý',type:'arylate-carbon OFF drevo'}
  ,{id:'sanwei-froster-pbo',brand:'Sanwei',name:'Froster PBO',speed:90,control:64,spin:87,feel:'tvrdý',type:'PBO-carbon OFF+ drevo'}
  ,{id:'sanwei-froster-pro',brand:'Sanwei',name:'Froster Pro',speed:91,control:64,spin:87,feel:'tvrdý',type:'5+2 outer PLC OFF+ drevo'}
  ,{id:'sanwei-froster-pro-pingsunday',brand:'Sanwei',name:'Froster Pro Pingsunday Edition',speed:92,control:62,spin:87,feel:'tvrdý',type:'5+2 outer PLC OFF+ drevo'}
  ,{id:'sanwei-h1',brand:'Sanwei',name:'H1',speed:76,control:80,spin:82,feel:'stredný',type:'hinoki drevo'}
  ,{id:'sanwei-h10-hinoki',brand:'Sanwei',name:'H10 Hinoki',speed:85,control:72,spin:83,feel:'mäkký',type:'10-vrstvové hinoki drevo'}
  ,{id:'sanwei-h3',brand:'Sanwei',name:'H3',speed:79,control:77,spin:82,feel:'mäkký',type:'hinoki drevo'}
  ,{id:'sanwei-h5',brand:'Sanwei',name:'H5',speed:81,control:75,spin:83,feel:'mäkký',type:'hinoki drevo'}
  ,{id:'sanwei-hc-speed-light',brand:'Sanwei',name:'HC Speed Light',speed:82,control:77,spin:82,feel:'mäkký',type:'ľahké hinoki-carbon drevo'}
  ,{id:'sanwei-hc-1s',brand:'Sanwei',name:'HC-1S',speed:80,control:78,spin:82,feel:'mäkký',type:'hinoki-carbon drevo'}
  ,{id:'sanwei-hc-3s',brand:'Sanwei',name:'HC-3S',speed:83,control:74,spin:83,feel:'stredný',type:'hinoki-carbon drevo'}
  ,{id:'sanwei-hc-5s',brand:'Sanwei',name:'HC-5S',speed:85,control:71,spin:83,feel:'stredne tvrdý',type:'hinoki-carbon drevo'}
  ,{id:'sanwei-hc-6s',brand:'Sanwei',name:'HC-6S',speed:87,control:68,spin:83,feel:'tvrdý',type:'hinoki-carbon OFF+ drevo'}
  ,{id:'sanwei-hynover',brand:'Sanwei',name:'Hynover',speed:85,control:71,spin:85,feel:'stredne tvrdý',type:'kompozitné OFF drevo'}
  ,{id:'sanwei-king-carbon-t1091a',brand:'Sanwei',name:'King of Carbon – T1091A',speed:91,control:62,spin:84,feel:'tvrdý',type:'carbon OFF+ drevo'}
  ,{id:'sanwei-king-hinoki-t1091aa',brand:'Sanwei',name:'King of Hinoki Carbon – T1091AA',speed:89,control:65,spin:85,feel:'tvrdý',type:'hinoki-carbon OFF+ drevo'}
  ,{id:'sanwei-l1',brand:'Sanwei',name:'L1',speed:72,control:84,spin:79,feel:'mäkký',type:'kontrolné drevo'}
  ,{id:'sanwei-ld-light',brand:'Sanwei',name:'LD Light',speed:76,control:82,spin:80,feel:'mäkký',type:'ľahké LD-carbon drevo'}
  ,{id:'sanwei-ly1091-even',brand:'Sanwei',name:'LY1091 even',speed:84,control:72,spin:83,feel:'stredne tvrdý',type:'viacvrstvové kompozitné drevo'}
  ,{id:'sanwei-m1',brand:'Sanwei',name:'M1',speed:77,control:80,spin:80,feel:'stredný',type:'celodrevené drevo'}
  ,{id:'sanwei-multilayer-1',brand:'Sanwei',name:'Multilayer 1',speed:82,control:75,spin:82,feel:'stredne tvrdý',type:'viacvrstvové drevo'}
  ,{id:'sanwei-multilayer-c',brand:'Sanwei',name:'Multilayer C',speed:91,control:63,spin:86,feel:'tvrdý',type:'9+8 soft-carbon OFF+ drevo'}
  ,{id:'sanwei-multilayer-w',brand:'Sanwei',name:'Multilayer W',speed:84,control:72,spin:84,feel:'stredne tvrdý',type:'viacvrstvové celodrevené drevo'}
  ,{id:'sanwei-multilayer-z',brand:'Sanwei',name:'Multilayer Z',speed:90,control:64,spin:85,feel:'stredný',type:'10+9 LD-carbon drevo'}
  ,{id:'sanwei-nitro',brand:'Sanwei',name:'Nitro',speed:86,control:71,spin:85,feel:'stredne tvrdý',type:'5+2 outer ALC OFF drevo'}
  ,{id:'sanwei-nova-carbon',brand:'Sanwei',name:'NOVA Carbon',speed:86,control:71,spin:84,feel:'stredný',type:'hinoki-carbon OFF drevo'}
  ,{id:'sanwei-paramid',brand:'Sanwei',name:'Paramid',speed:85,control:72,spin:85,feel:'stredne tvrdý',type:'kompozitné OFF drevo'}
  ,{id:'sanwei-parla',brand:'Sanwei',name:'Parla',speed:80,control:78,spin:83,feel:'stredný',type:'celodrevené OFF- drevo'}
  ,{id:'sanwei-prism',brand:'Sanwei',name:'Prism',speed:83,control:76,spin:87,feel:'mäkký',type:'5+2 inner ALC OFF- drevo'}
  ,{id:'sanwei-r1-kongno-hinoki',brand:'Sanwei',name:'R1 KONGNO HINOKI',speed:83,control:74,spin:83,feel:'mäkký',type:'kiso hinoki drevo'}
  ,{id:'sanwei-r2-america-hinoki',brand:'Sanwei',name:'R2 – America HINOKI',speed:81,control:76,spin:82,feel:'mäkký',type:'hinoki drevo'}
  ,{id:'sanwei-r3-storm-cloud',brand:'Sanwei',name:'R3 – STORM CLOUD',speed:84,control:72,spin:83,feel:'stredne tvrdý',type:'ofenzívne drevo'}
  ,{id:'sanwei-reson',brand:'Sanwei',name:'Reson',speed:76,control:84,spin:84,feel:'stredný',type:'7-vrstvové celodrevené ALL+/OFF- drevo'}
  ,{id:'sanwei-s1-kiso-hinoki',brand:'Sanwei',name:'S1 – Kiso Hinoki',speed:82,control:75,spin:83,feel:'mäkký',type:'kiso hinoki drevo'}
  ,{id:'sanwei-s5-4',brand:'Sanwei',name:'S5.4',speed:84,control:72,spin:83,feel:'stredne tvrdý',type:'viacvrstvové carbon drevo'}
  ,{id:'sanwei-s6-5',brand:'Sanwei',name:'S6.5',speed:88,control:67,spin:84,feel:'stredný',type:'6+5 soft-carbon OFF+ drevo'}
  ,{id:'sanwei-s7-6',brand:'Sanwei',name:'S7.6',speed:90,control:64,spin:84,feel:'tvrdý',type:'7+6 carbon OFF+ drevo'}
  ,{id:'sanwei-shrafton',brand:'Sanwei',name:'Shrafton',speed:84,control:72,spin:84,feel:'stredne tvrdý',type:'ofenzívne kompozitné drevo'}
  ,{id:'sanwei-two-face',brand:'Sanwei',name:'TWO FACE',speed:70,control:86,spin:78,feel:'kombinovaný',type:'asymetrické DEF/OFF drevo'}
  ,{id:'sanwei-two-face-alc',brand:'Sanwei',name:'Two Face ALC',speed:75,control:84,spin:82,feel:'kombinovaný',type:'asymetrické DEF/ALC OFF drevo'}
  ,{id:'sanwei-two-face-soft-punch',brand:'Sanwei',name:'Two Face-Soft Punch',speed:57,control:93,spin:73,feel:'mäkký',type:'asymetrické 4-vrstvové balsa DEF- drevo'}
  ,{id:'sanwei-v1',brand:'Sanwei',name:'V1',speed:76,control:80,spin:81,feel:'stredný',type:'celodrevené drevo'}
  ,{id:'sanwei-v2',brand:'Sanwei',name:'V2',speed:79,control:77,spin:82,feel:'stredný',type:'ofenzívne drevo'}
  ,{id:'sanwei-v5-pro',brand:'Sanwei',name:'V5 PRO',speed:85,control:71,spin:84,feel:'stredne tvrdý',type:'kompozitné OFF drevo'}
  ,{id:'sanwei-v9-pro',brand:'Sanwei',name:'V9 PRO',speed:88,control:66,spin:84,feel:'tvrdý',type:'kompozitné OFF+ drevo'}
  ,{id:'sanwei-verdi',brand:'Sanwei',name:'Verdi',speed:89,control:67,spin:86,feel:'tvrdý',type:'outer VerdiX carbon OFF+ drevo'}
  ,{id:'sanwei-verdi-inner',brand:'Sanwei',name:'Verdi Inner',speed:85,control:72,spin:88,feel:'stredný',type:'inner VerdiX carbon OFF drevo'}
  ,{id:'sanwei-yj-constellation',brand:'Sanwei',name:'YJ Constellation Series Table Tennis Blade',speed:78,control:80,spin:81,feel:'stredný',type:'celodrevené drevo'}
  ,{id:'gewo-allround-basic',brand:'Gewo',name:'ALLround Basic',speed:65,control:87,spin:78,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'gewo-allround-classic',brand:'Gewo',name:'Allround Classic',speed:68,control:86,spin:80,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'gewo-an-jaehyun-carbon-basic',brand:'Gewo',name:'An Jaehyun Carbon Basic',speed:88,control:72,spin:85,feel:'kombinovaný',type:'asymetrické ARC carbon'}
  ,{id:'gewo-aruna-carbon-all-plus',brand:'Gewo',name:'Aruna Carbon ALL+',speed:74,control:82,spin:82,feel:'pružný',type:'carbon'}
  ,{id:'gewo-aruna-carbon-basic',brand:'Gewo',name:'Aruna Carbon Basic',speed:82,control:74,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'gewo-aruna-energy-arc-off',brand:'Gewo',name:'Aruna Energy ARC OFF',speed:86,control:70,spin:85,feel:'pružný',type:'aramid carbon'}
  ,{id:'gewo-aruna-hinoki-carbon-off',brand:'Gewo',name:'Aruna Hinoki Carbon OFF',speed:85,control:71,spin:84,feel:'pevný',type:'hinoki carbon'}
  ,{id:'gewo-aruna-kids',brand:'Gewo',name:'Aruna Kids',speed:64,control:88,spin:77,feel:'mäkký',type:'juniorské drevo'}
  ,{id:'gewo-aruna-off',brand:'Gewo',name:'Aruna OFF',speed:81,control:74,spin:82,feel:'pevný',type:'útočné drevo'}
  ,{id:'gewo-balsa-carbon-375',brand:'Gewo',name:'Balsa Carbon 375',speed:71,control:84,spin:79,feel:'mäkký',type:'balsa carbon'}
  ,{id:'gewo-balsa-carbon-575',brand:'Gewo',name:'Balsa Carbon 575',speed:80,control:76,spin:81,feel:'stredný',type:'balsa carbon'}
  ,{id:'gewo-balsa-carbon-775',brand:'Gewo',name:'Balsa Carbon 775',speed:89,control:64,spin:80,feel:'tvrdý',type:'balsa carbon'}
  ,{id:'gewo-celexxis-allround-classic',brand:'Gewo',name:'Celexxis Allround Classic',speed:69,control:85,spin:80,feel:'mäkký',type:'allround drevo'}
  ,{id:'gewo-celexxis-fortissimo-carbon-off',brand:'Gewo',name:'Celexxis Fortissimo Carbon OFF',speed:88,control:66,spin:83,feel:'tvrdý',type:'carbon'}
  ,{id:'gewo-celexxis-hinoki-ex-carbon-off',brand:'Gewo',name:'Celexxis Hinoki Ex-Carbon OFF',speed:86,control:69,spin:84,feel:'pevný',type:'hinoki carbon'}
  ,{id:'gewo-celexxis-offensive-classic',brand:'Gewo',name:'Celexxis Offensive Classic',speed:79,control:76,spin:82,feel:'stredný',type:'útočné drevo'}
  ,{id:'gewo-ex-force-pbo-pc-off',brand:'Gewo',name:'Ex-Force PBO-PC OFF',speed:90,control:63,spin:86,feel:'tvrdý',type:'PBO power carbon'}
  ,{id:'gewo-force-arc-off',brand:'Gewo',name:'Force ARC OFF',speed:85,control:70,spin:85,feel:'pevný',type:'aramid carbon'}
  ,{id:'gewo-hybrid-carbon-a-speed-all-plus',brand:'Gewo',name:'Hybrid Carbon A/Speed ALL+',speed:74,control:83,spin:82,feel:'pružný',type:'hybrid carbon'}
  ,{id:'gewo-hybrid-carbon-m-speed-off-minus',brand:'Gewo',name:'Hybrid Carbon M/Speed OFF-',speed:82,control:75,spin:84,feel:'stredný',type:'hybrid carbon'}
  ,{id:'gewo-hybrid-carbon-x-speed-off',brand:'Gewo',name:'Hybrid Carbon X/Speed OFF',speed:89,control:68,spin:84,feel:'pevný',type:'hybrid carbon'}
  ,{id:'gewo-in-force-arc-off-minus',brand:'Gewo',name:'In-Force ARC OFF-',speed:80,control:78,spin:86,feel:'pružný',type:'inner aramid carbon'}
  ,{id:'gewo-in-force-pbo-pc-off',brand:'Gewo',name:'In-Force PBO-PC OFF',speed:87,control:69,spin:87,feel:'pružný',type:'inner PBO power carbon'}
  ,{id:'gewo-in-force-s-hac-off',brand:'Gewo',name:'In-Force S-HAC OFF',speed:86,control:70,spin:86,feel:'pružný',type:'inner S-HAC fiber'}
  ,{id:'gewo-matrixx-arc-off',brand:'Gewo',name:'Matrixx ARC OFF',speed:86,control:70,spin:85,feel:'pevný',type:'aramid carbon'}
  ,{id:'gewo-matrixx-hybrid-arc-inner-off-minus',brand:'Gewo',name:'Matrixx Hybrid ARC Inner OFF-',speed:81,control:77,spin:86,feel:'pružný',type:'inner hybrid aramid carbon'}
  ,{id:'gewo-matrixx-magic-off',brand:'Gewo',name:'Matrixx Magic OFF',speed:84,control:72,spin:85,feel:'stredný',type:'útočné drevo'}
  ,{id:'gewo-offense-basic',brand:'Gewo',name:'OFFense Basic',speed:78,control:77,spin:81,feel:'stredný',type:'útočné drevo'}
  ,{id:'gewo-power-control',brand:'Gewo',name:'Power Control',speed:72,control:84,spin:81,feel:'mäkký',type:'allround drevo'}
  ,{id:'gewo-prithika-pavade-arc-off',brand:'Gewo',name:'Prithika Pavade ARC OFF',speed:86,control:70,spin:86,feel:'pevný',type:'aramid carbon'}
  ,{id:'gewo-prithika-pavade-blaze-off-minus',brand:'Gewo',name:'Prithika Pavade Blaze OFF-',speed:80,control:77,spin:84,feel:'pružný',type:'útočné drevo'}
  ,{id:'gewo-prithika-pavade-carbon-basic',brand:'Gewo',name:'Prithika Pavade Carbon Basic',speed:83,control:74,spin:84,feel:'pevný',type:'carbon'}
  ,{id:'gewo-prithika-pavade-sense-all-plus',brand:'Gewo',name:'Prithika Pavade Sense ALL+',speed:73,control:84,spin:82,feel:'mäkký',type:'allround drevo'}
  ,{id:'gewo-talent-all',brand:'Gewo',name:'Talent ALL',speed:65,control:88,spin:78,feel:'mäkký',type:'juniorské allround drevo'}
  ,{id:'gewo-talent-off-minus',brand:'Gewo',name:'Talent OFF-',speed:76,control:80,spin:81,feel:'stredný',type:'juniorské útočné drevo'}
  ,{id:'gewo-velox-alpha-def',brand:'Gewo',name:'Velox Alpha DEF',speed:56,control:93,spin:72,feel:'pevný',type:'defenzívne drevo'}
  ,{id:'gewo-xolo-allround',brand:'Gewo',name:'Xolo ALLround',speed:68,control:86,spin:80,feel:'mäkký',type:'allround drevo'}
  ,{id:'gewo-xolo-offensive',brand:'Gewo',name:'Xolo Offensive',speed:79,control:76,spin:82,feel:'stredný',type:'útočné drevo'}
  ,{id:'gewo-xolo-offensive-carbon',brand:'Gewo',name:'Xolo Offensive Carbon',speed:84,control:71,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'gewo-youngster',brand:'Gewo',name:'Youngster',speed:64,control:89,spin:77,feel:'mäkký',type:'juniorské allround drevo'}
  ,{id:'gewo-zoom-balance-all-plus',brand:'Gewo',name:'Zoom Balance ALL+',speed:72,control:87,spin:81,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'gewo-zoom-pro-light-off-minus',brand:'Gewo',name:'Zoom Pro Light OFF-',speed:78,control:79,spin:82,feel:'mäkký',type:'ľahké útočné drevo'}
  ,{id:'gewo-zoom-pro-off-minus',brand:'Gewo',name:'Zoom Pro OFF-',speed:80,control:77,spin:82,feel:'stredný',type:'útočné drevo'}
  ,{id:'victas-balsa-2-5',brand:'Victas',name:'BALSA 2.5',speed:48,control:95,spin:72,feel:'mäkký',type:'balsa DEF drevo'}
  ,{id:'victas-balsa-3-5',brand:'Victas',name:'BALSA 3.5',speed:53,control:93,spin:74,feel:'mäkký',type:'balsa DEF drevo'}
  ,{id:'victas-balsa-4-5',brand:'Victas',name:'BALSA 4.5',speed:66,control:90,spin:79,feel:'mäkký',type:'balsa ALL drevo'}
  ,{id:'victas-balsa-5-5',brand:'Victas',name:'BALSA 5.5',speed:72,control:87,spin:81,feel:'mäkký',type:'balsa ALL+ drevo'}
  ,{id:'victas-benedikt-duda-afc',brand:'Victas',name:'BENEDIKT DUDA AFC',speed:89,control:69,spin:87,feel:'stredne tvrdý',type:'aramid fleece carbon OFF+ drevo'}
  ,{id:'victas-dyna-carbon',brand:'Victas',name:'DYNA CARBON',speed:78,control:81,spin:83,feel:'stredný',type:'carbon OFF- drevo'}
  ,{id:'victas-dyna-five',brand:'Victas',name:'DYNA FIVE',speed:76,control:83,spin:83,feel:'pružný',type:'5-vrstvové OFF- drevo'}
  ,{id:'victas-dyna-seven',brand:'Victas',name:'DYNA SEVEN',speed:83,control:77,spin:84,feel:'stredný',type:'7-vrstvové OFF drevo'}
  ,{id:'victas-fire-fall-ac',brand:'Victas',name:'FIRE FALL AC',speed:88,control:69,spin:86,feel:'stredne tvrdý',type:'aramid carbon OFF+ drevo'}
  ,{id:'victas-fire-fall-fc',brand:'Victas',name:'FIRE FALL FC',speed:82,control:77,spin:84,feel:'mäkký',type:'fleece carbon OFF drevo'}
  ,{id:'victas-fire-fall-hc',brand:'Victas',name:'FIRE FALL HC',speed:91,control:65,spin:86,feel:'tvrdý',type:'hybrid carbon OFF+ drevo'}
  ,{id:'victas-fire-fall-lc',brand:'Victas',name:'FIRE FALL LC',speed:87,control:71,spin:85,feel:'stredný',type:'light carbon OFF+ drevo'}
  ,{id:'victas-fire-fall-sc',brand:'Victas',name:'FIRE FALL SC',speed:90,control:67,spin:85,feel:'tvrdý',type:'silver carbon OFF+ drevo'}
  ,{id:'victas-fire-fall-vc',brand:'Victas',name:'FIRE FALL VC',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'Vectran carbon OFF+ drevo'}
  ,{id:'victas-gladias-ar',brand:'Victas',name:'GLADIAS AR',speed:87,control:71,spin:86,feel:'pružný',type:'aramid carbon OFF+ drevo'}
  ,{id:'victas-gladias-ex',brand:'Victas',name:'GLADIAS EX',speed:91,control:65,spin:85,feel:'tvrdý',type:'carbon OFF+ drevo'}
  ,{id:'victas-gladias-ha',brand:'Victas',name:'GLADIAS HA',speed:89,control:68,spin:86,feel:'stredne tvrdý',type:'hybrid aramid carbon OFF+ drevo'}
  ,{id:'victas-hino-carbon-power',brand:'Victas',name:'HINO-CARBON POWER',speed:85,control:73,spin:84,feel:'stredne tvrdý',type:'hinoki carbon OFF drevo'}
  ,{id:'victas-koji-matsushita',brand:'Victas',name:'KOJI MATSUSHITA',speed:54,control:95,spin:75,feel:'mäkký',type:'5-vrstvové DEF drevo'}
  ,{id:'victas-koji-matsushita-defensive',brand:'Victas',name:'KOJI MATSUSHITA DEFENSIVE',speed:48,control:97,spin:73,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'victas-koji-matsushita-offensive',brand:'Victas',name:'KOJI MATSUSHITA OFFENSIVE',speed:75,control:85,spin:82,feel:'stredný',type:'OFF- moderné defenzívne drevo'}
  ,{id:'victas-koji-matsushita-special',brand:'Victas',name:'KOJI MATSUSHITA SPECIAL',speed:67,control:91,spin:79,feel:'stredný',type:'fleece carbon ALL drevo'}
  ,{id:'victas-koji-matsushita-zc',brand:'Victas',name:'KOJI MATSUSHITA ZC',speed:61,control:91,spin:78,feel:'stredne tvrdý',type:'Zexion carbon DEF drevo'}
  ,{id:'victas-koki-niwa',brand:'Victas',name:'KOKI NIWA',speed:91,control:65,spin:87,feel:'tvrdý',type:'fleece carbon OFF+ drevo'}
  ,{id:'victas-koki-niwa-blue-edge',brand:'Victas',name:'KOKI NIWA Blue Edge 10th Limited Edition',speed:91,control:65,spin:87,feel:'tvrdý',type:'fleece carbon OFF+ drevo'}
  ,{id:'victas-koki-niwa-regias',brand:'Victas',name:'KOKI NIWA REGIAS',speed:72,control:87,spin:82,feel:'mäkký',type:'ALL+ drevo'}
  ,{id:'victas-koki-niwa-wood',brand:'Victas',name:'KOKI NIWA WOOD',speed:87,control:71,spin:86,feel:'stredne tvrdý',type:'7-vrstvové OFF+ drevo'}
  ,{id:'victas-koki-niwa-wood-blue-edge',brand:'Victas',name:'KOKI NIWA Wood Blue Edge 10th Limited Edition',speed:87,control:71,spin:86,feel:'stredne tvrdý',type:'7-vrstvové OFF+ drevo'}
  ,{id:'victas-koki-niwa-zc',brand:'Victas',name:'KOKI NIWA ZC',speed:90,control:67,spin:87,feel:'tvrdý',type:'Zexion carbon OFF+ drevo'}
  ,{id:'victas-koki-niwa-zc-blue-edge',brand:'Victas',name:'KOKI NIWA ZC Blue Edge 10th Limited Edition',speed:90,control:67,spin:87,feel:'tvrdý',type:'Zexion carbon OFF+ drevo'}
  ,{id:'victas-koki-niwa-zc-inner',brand:'Victas',name:'KOKI NIWA ZC INNER',speed:87,control:72,spin:88,feel:'stredný',type:'inner Zexion carbon OFF+ drevo'}
  ,{id:'victas-koki-niwa-zf-blue-edge',brand:'Victas',name:'KOKI NIWA ZF Blue Edge 10th Limited Edition',speed:89,control:69,spin:87,feel:'stredne tvrdý',type:'Zexion fleece carbon OFF+ drevo'}
  ,{id:'victas-magnass',brand:'Victas',name:'MAGNASS',speed:92,control:64,spin:86,feel:'tvrdý',type:'kompozitné OFF+ drevo'}
  ,{id:'victas-zx-gear-fiber',brand:'Victas',name:'ZX-GEAR FIBER',speed:83,control:76,spin:85,feel:'pružný',type:'Zexion fiber OFF drevo'}
  ,{id:'victas-zx-gear-in',brand:'Victas',name:'ZX-GEAR IN',speed:87,control:71,spin:87,feel:'stredný',type:'inner Zexion carbon OFF+ drevo'}
  ,{id:'victas-zx-gear-out',brand:'Victas',name:'ZX-GEAR OUT',speed:90,control:66,spin:86,feel:'tvrdý',type:'outer Zexion carbon OFF+ drevo'}
  ,{id:'729-black-carbon',brand:'Friendship 729',name:'Black Carbon',speed:85,control:69,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'729-blue-arylate-carbon',brand:'Friendship 729',name:'Blue Arylate Carbon',speed:83,control:72,spin:85,feel:'pružný',type:'arylate carbon'}
  ,{id:'729-c3',brand:'Friendship 729',name:'C3',speed:72,control:79,spin:81,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'729-c5-max',brand:'Friendship 729',name:'C5 Max',speed:79,control:74,spin:82,feel:'pevný',type:'5-vrstvové drevo'}
  ,{id:'729-enlight-1',brand:'Friendship 729',name:'Enlight 1',speed:65,control:86,spin:78,feel:'mäkký',type:'allround drevo'}
  ,{id:'729-enlight-2',brand:'Friendship 729',name:'Enlight 2',speed:70,control:82,spin:80,feel:'stredný',type:'allround drevo'}
  ,{id:'729-k300',brand:'Friendship 729',name:'K300',speed:70,control:82,spin:80,feel:'mäkký',type:'5-vrstvové drevo'}
  ,{id:'729-k350',brand:'Friendship 729',name:'K350',speed:73,control:79,spin:81,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'729-k500',brand:'Friendship 729',name:'K500',speed:77,control:76,spin:82,feel:'stredný',type:'útočné drevo'}
  ,{id:'729-k850',brand:'Friendship 729',name:'K850',speed:82,control:71,spin:83,feel:'pevný',type:'útočné drevo'}
  ,{id:'729-k950',brand:'Friendship 729',name:'K950',speed:86,control:67,spin:83,feel:'tvrdý',type:'útočné drevo'}
  ,{id:'729-precious-ebony',brand:'Friendship 729',name:'Precious Ebony Wood',speed:82,control:70,spin:83,feel:'tvrdý',type:'ebony drevo'}
  ,{id:'729-precious-green-sandalwood',brand:'Friendship 729',name:'Precious Green Sandal Wood',speed:80,control:72,spin:84,feel:'pevný',type:'sandal wood'}
  ,{id:'729-precious-red-sandalwood',brand:'Friendship 729',name:'Precious Red Sandal Wood',speed:81,control:71,spin:84,feel:'pevný',type:'sandal wood'}
  ,{id:'729-precious-rosewood',brand:'Friendship 729',name:'Precious Rosewood',speed:80,control:73,spin:84,feel:'pevný',type:'rosewood drevo'}
  ,{id:'729-rage-1',brand:'Friendship 729',name:'Rage 1',speed:78,control:75,spin:82,feel:'stredný',type:'útočné drevo'}
  ,{id:'729-rage-2',brand:'Friendship 729',name:'Rage 2',speed:82,control:71,spin:83,feel:'pevný',type:'útočné drevo'}
  ,{id:'729-rage-nb49',brand:'Friendship 729',name:'Rage NB49',speed:84,control:69,spin:83,feel:'pevný',type:'carbon'}
  ,{id:'729-rage-nb50',brand:'Friendship 729',name:'Rage NB50',speed:86,control:67,spin:83,feel:'tvrdý',type:'carbon'}
  ,{id:'729-rose-5',brand:'Friendship 729',name:'Rose 5',speed:73,control:79,spin:83,feel:'pružný',type:'5-vrstvové rosewood'}
  ,{id:'729-rose-7',brand:'Friendship 729',name:'Rose 7',speed:80,control:73,spin:83,feel:'pevný',type:'7-vrstvové rosewood'}
  ,{id:'729-v5',brand:'Friendship 729',name:'V-5',speed:76,control:77,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'729-yellow-arylate-carbon',brand:'Friendship 729',name:'Yellow Arylate Carbon',speed:84,control:70,spin:85,feel:'pevný',type:'arylate carbon'}
  ,{id:'729-z1',brand:'Friendship 729',name:'Z-1',speed:75,control:78,spin:82,feel:'stredný',type:'5-vrstvové drevo'}
  ,{id:'729-z2',brand:'Friendship 729',name:'Z-2',speed:80,control:73,spin:83,feel:'pevný',type:'útočné drevo'}
  ,{id:'dn-barricade-def',brand:'Dr. Neubauer',name:'Barricade DEF',speed:52,control:93,spin:70,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'dn-bloodhound',brand:'Dr. Neubauer',name:'Bloodhound',speed:60,control:89,spin:70,feel:'pevný',type:'ALL- kombinačné drevo'}
  ,{id:'dn-bloodhound-all-plus',brand:'Dr. Neubauer',name:'Bloodhound ALL+',speed:72,control:83,spin:75,feel:'pevný',type:'kombinačné drevo'}
  ,{id:'dn-bulldog',brand:'Dr. Neubauer',name:'Bulldog',speed:70,control:85,spin:73,feel:'stredný',type:'allround kombinačné drevo'}
  ,{id:'dn-colossus',brand:'Dr. Neubauer',name:'Colossus',speed:66,control:92,spin:70,feel:'kombinovaný',type:'asymetrické kombinačné drevo'}
  ,{id:'dn-combination-effect',brand:'Dr. Neubauer',name:'Combination Effect',speed:64,control:88,spin:70,feel:'kombinovaný',type:'kombinačné drevo'}
  ,{id:'dn-firewall-plus',brand:'Dr. Neubauer',name:'Firewall Plus',speed:69,control:86,spin:76,feel:'mäkký',type:'allround drevo'}
  ,{id:'dn-gladiator',brand:'Dr. Neubauer',name:'Gladiator',speed:75,control:81,spin:77,feel:'pevný',type:'kombinačné drevo'}
  ,{id:'dn-grand-master',brand:'Dr. Neubauer',name:'Grand Master',speed:62,control:90,spin:72,feel:'mäkký',type:'kombinačné drevo'}
  ,{id:'dn-grand-master-plus',brand:'Dr. Neubauer',name:'Grand Master+',speed:68,control:87,spin:74,feel:'stredný',type:'kombinačné drevo'}
  ,{id:'dn-hercules',brand:'Dr. Neubauer',name:'Hercules',speed:72,control:85,spin:76,feel:'pevný',type:'Kiso Hinoki fiber kombinačné drevo'}
  ,{id:'dn-high-tech-cypress-carbon',brand:'Dr. Neubauer',name:'High Tech Cypress Carbon',speed:86,control:69,spin:82,feel:'pevný',type:'cypress carbon'}
  ,{id:'dn-high-technology-plus',brand:'Dr. Neubauer',name:'High Technology Plus',speed:82,control:74,spin:80,feel:'pevný',type:'útočné drevo'}
  ,{id:'dn-jackpot',brand:'Dr. Neubauer',name:'Jackpot',speed:76,control:80,spin:78,feel:'stredný',type:'kombinačné drevo'}
  ,{id:'dn-kung-fu',brand:'Dr. Neubauer',name:'Kung Fu',speed:71,control:84,spin:75,feel:'pevný',type:'kombinačné drevo'}
  ,{id:'dn-magical-touch',brand:'Dr. Neubauer',name:'Magical Touch',speed:79,control:79,spin:83,feel:'pružný',type:'Kiso Hinoki drevo'}
  ,{id:'dn-matador',brand:'Dr. Neubauer',name:'Matador',speed:78,control:79,spin:76,feel:'pevný',type:'OFF- kombinačné drevo'}
  ,{id:'dn-matador-hybrid-carbon',brand:'Dr. Neubauer',name:'Matador Hybrid Carbon',speed:90,control:64,spin:83,feel:'pevný',type:'OFF+ hybrid carbon'}
  ,{id:'dn-matador-texa',brand:'Dr. Neubauer',name:'Matador Texa',speed:84,control:72,spin:80,feel:'tvrdý',type:'OFF kombinačné drevo'}
  ,{id:'dn-matador-texa-balsa',brand:'Dr. Neubauer',name:'Matador Texa Balsa',speed:81,control:76,spin:79,feel:'stredný',type:'OFF- balsa fiber'}
  ,{id:'dn-matador-texa-carbon',brand:'Dr. Neubauer',name:'Matador Texa Carbon',speed:89,control:66,spin:82,feel:'tvrdý',type:'OFF carbon'}
  ,{id:'dn-matador-titan',brand:'Dr. Neubauer',name:'Matador Titan',speed:92,control:61,spin:82,feel:'tvrdý',type:'OFF+ kombinačné drevo'}
  ,{id:'dn-phenomenon',brand:'Dr. Neubauer',name:'Phenomenon',speed:68,control:88,spin:74,feel:'mäkký',type:'allround kombinačné drevo'}
  ,{id:'dn-special',brand:'Dr. Neubauer',name:'Special',speed:63,control:89,spin:70,feel:'kombinovaný',type:'kombinačné drevo'}
  ,{id:'dn-titan',brand:'Dr. Neubauer',name:'Titan',speed:68,control:91,spin:71,feel:'kombinovaný',type:'asymetrické kombinačné drevo'}
  ,{id:'dn-world-champion',brand:'Dr. Neubauer',name:'World Champion',speed:74,control:83,spin:78,feel:'stredný',type:'allround/ofenzívne drevo'}
  ,{id:'dn-world-champion-carbon',brand:'Dr. Neubauer',name:'World Champion Carbon',speed:84,control:72,spin:81,feel:'pevný',type:'carbon'}
  ,{id:'dms-blockbuster',brand:'Der Materialspezialist',name:'Blockbuster',speed:64,control:87,spin:71,feel:'pevný',type:'defenzívne drevo'}
  ,{id:'dms-cubixx-100',brand:'Der Materialspezialist',name:'Cubixx 100',speed:72,control:82,spin:76,feel:'stredný',type:'allround drevo'}
  ,{id:'dms-defensor',brand:'Der Materialspezialist',name:'Defensor',speed:55,control:91,spin:69,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'dms-deluxe-carbon',brand:'Der Materialspezialist',name:'Deluxe Carbon',speed:82,control:74,spin:82,feel:'pevný',type:'carbon'}
  ,{id:'dms-destroyer',brand:'Der Materialspezialist',name:'Destroyer',speed:90,control:62,spin:82,feel:'tvrdý',type:'útočné carbon drevo'}
  ,{id:'dms-dr-jekyll-mr-hyde',brand:'Der Materialspezialist',name:'Dr. Jekyll & Mr. Hyde',speed:74,control:81,spin:75,feel:'kombinovaný',type:'kombinačné drevo'}
  ,{id:'dms-excalibur',brand:'Der Materialspezialist',name:'Excalibur',speed:84,control:71,spin:83,feel:'pevný',type:'útočné drevo'}
  ,{id:'dms-invictus',brand:'Der Materialspezialist',name:'Invictus',speed:79,control:75,spin:82,feel:'stredný',type:'allround/ofenzívne drevo'}
  ,{id:'dms-magic-defence',brand:'Der Materialspezialist',name:'Magic Defence',speed:56,control:92,spin:71,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'dms-olympea',brand:'Der Materialspezialist',name:'Olympea',speed:76,control:79,spin:81,feel:'pružný',type:'allround drevo'}
  ,{id:'dms-power-control',brand:'Der Materialspezialist',name:'Power Control',speed:73,control:83,spin:80,feel:'stredný',type:'allround drevo'}
  ,{id:'dms-protector',brand:'Der Materialspezialist',name:'Protector',speed:60,control:89,spin:70,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'dms-revolution',brand:'Der Materialspezialist',name:'Revolution',speed:86,control:68,spin:84,feel:'pevný',type:'útočné drevo'}
  ,{id:'dms-scooper-ar-plus',brand:'Der Materialspezialist',name:'Scooper AR+',speed:72,control:84,spin:78,feel:'stredný',type:'allround drevo'}
  ,{id:'dms-scooper-combi',brand:'Der Materialspezialist',name:'Scooper Combi',speed:69,control:86,spin:74,feel:'kombinovaný',type:'kombinačné drevo'}
  ,{id:'dms-scooper-defensive',brand:'Der Materialspezialist',name:'Scooper Defensive',speed:57,control:91,spin:70,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'dms-scooper-offensive',brand:'Der Materialspezialist',name:'Scooper Offensive',speed:84,control:70,spin:81,feel:'pevný',type:'útočné drevo'}
  ,{id:'dms-super-control',brand:'Der Materialspezialist',name:'Super Control',speed:62,control:90,spin:73,feel:'mäkký',type:'defenzívne/allround drevo'}
  ,{id:'dms-terror',brand:'Der Materialspezialist',name:'Terror',speed:80,control:73,spin:78,feel:'tvrdý',type:'útočné drevo'}
  ,{id:'dms-the-wall',brand:'Der Materialspezialist',name:'The Wall',speed:61,control:88,spin:70,feel:'pevný',type:'defenzívne drevo'}
  ,{id:'dms-the-wall-carbon',brand:'Der Materialspezialist',name:'The Wall Carbon',speed:68,control:85,spin:73,feel:'pevný',type:'defenzívne carbon drevo'}
  ,{id:'dms-tomahawk-next-generation',brand:'Der Materialspezialist',name:'Tomahawk Next Generation',speed:75,control:79,spin:79,feel:'stredný',type:'allround drevo'}
  ,{id:'dms-trouble',brand:'Der Materialspezialist',name:'Trouble',speed:69,control:84,spin:74,feel:'kombinovaný',type:'kombinačné drevo'}
  ,{id:'dms-wizard',brand:'Der Materialspezialist',name:'Wizard',speed:66,control:87,spin:74,feel:'mäkký',type:'defenzívne/allround drevo'}
  ,{id:'dms-wizard-fire',brand:'Der Materialspezialist',name:'Wizard Fire',speed:81,control:74,spin:81,feel:'pevný',type:'útočné drevo'}
  ,{id:'hallmark-aurora',brand:'Hallmark',name:'Aurora',speed:67,control:96,spin:72,feel:'kombinovaný',type:'asymetrické DEF/ALL drevo'}
  ,{id:'hallmark-carbon-extreme',brand:'Hallmark',name:'Carbon Extreme',speed:91,control:79,spin:81,feel:'tvrdý',type:'7-vrstvové balsa carbon'}
  ,{id:'hallmark-combination',brand:'Hallmark',name:'Combination',speed:71,control:93,spin:72,feel:'kombinovaný',type:'asymetrické DEF/OFF drevo'}
  ,{id:'hallmark-enigma',brand:'Hallmark',name:'Enigma',speed:70,control:88,spin:73,feel:'mäkký',type:'5-vrstvové balsa DEF drevo'}
  ,{id:'hallmark-strategy',brand:'Hallmark',name:'Strategy',speed:48,control:95,spin:69,feel:'mäkký',type:'5-vrstvové defenzívne drevo'}
  ,{id:'hallmark-super-balsa',brand:'Hallmark',name:'Super Balsa',speed:80,control:88,spin:80,feel:'mäkký',type:'5+2 balsa carbon'}
  ,{id:'hallmark-ultra',brand:'Hallmark',name:'Ultra',speed:81,control:85,spin:75,feel:'kombinovaný',type:'asymetrické ALL+/OFF- balsa drevo'}
  ,{id:'barna-classic',brand:'Barna Original',name:'Classic Defensive',speed:57,control:90,spin:69,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'barna-champion',brand:'Barna Original',name:'Champion',speed:65,control:90,spin:78,feel:'mäkký',type:'defenzívne drevo'}
  ,{id:'barna-stability',brand:'Barna Original',name:'Stability',speed:69,control:84,spin:80,feel:'stredný',type:'allround drevo'}
  ,{id:'barna-super-balsa',brand:'Barna Original',name:'Super Balsa',speed:71,control:83,spin:78,feel:'mäkký',type:'balsa drevo'}
  ,{id:'barna-supercombi',brand:'Barna Original',name:'Supercombi',speed:74,control:82,spin:79,feel:'kombinovaný',type:'kombinačné OFF/DEF drevo'}
  ,{id:'barna-triumph',brand:'Barna Original',name:'Triumph',speed:82,control:76,spin:84,feel:'pevný',type:'útočné drevo'}
  ,{id:'barna-victory',brand:'Barna Original',name:'Victory',speed:79,control:78,spin:83,feel:'stredný',type:'útočné drevo'}
  ,{id:'barna-winner',brand:'Barna Original',name:'Winner',speed:73,control:81,spin:81,feel:'pružný',type:'allround/ofenzívne drevo'}
];
const rubbers = [
  {id:'zyre03',brand:'Butterfly',name:'Zyre 03 · 2.5 mm',speed:92,control:62,spin:96,hardness:52},
  {id:'d09c',brand:'Butterfly',name:'Dignics 09C · 2.1 mm',speed:82,control:72,spin:95,hardness:54},
  {id:'d05',brand:'Butterfly',name:'Dignics 05 · 2.1 mm',speed:86,control:68,spin:93,hardness:40},
  {id:'t05',brand:'Butterfly',name:'Tenergy 05 · 2.1 mm',speed:83,control:70,spin:91,hardness:36},
  {id:'nittaku-best-anti',brand:'Nittaku',name:'Best Anti · 1.5 mm',speed:24,control:96,spin:19,hardness:20},
  {id:'nittaku-blastac',brand:'Nittaku',name:'Blastac · 2.0 mm',speed:91,control:77,spin:77,hardness:35},
  {id:'nittaku-do-knuckle-long-1',brand:'Nittaku',name:'DO Knuckle LONG-1 · 0.5 mm',speed:33,control:93,spin:35,hardness:45},
  {id:'nittaku-do-knuckle-one',brand:'Nittaku',name:'DO Knuckle One · OX',speed:42,control:96,spin:39,hardness:20},
  {id:'nittaku-do-knuckle',brand:'Nittaku',name:'DO Knuckle · 0.5 mm',speed:45,control:95,spin:39,hardness:32.5},
  {id:'nittaku-express',brand:'Nittaku',name:'Express · 2.0 mm',speed:61,control:90,spin:47,hardness:30},
  {id:'nittaku-factive',brand:'Nittaku',name:'Factive · 2.0 mm',speed:89,control:74,spin:76,hardness:45},
  {id:'nittaku-fastarc-c-1',brand:'Nittaku',name:'Fastarc C-1 · 2.0 mm',speed:92,control:73,spin:79,hardness:45},
  {id:'nittaku-fastarc-g-1',brand:'Nittaku',name:'Fastarc G-1 · 2.0 mm',speed:91,control:72,spin:81,hardness:47.5},
  {id:'nittaku-fastarc-s-1',brand:'Nittaku',name:'Fastarc S-1 · 2.0 mm',speed:94,control:72,spin:76,hardness:45},
  {id:'nittaku-flyatt-evo',brand:'Nittaku',name:'Flyatt EVO · 2.0 mm',speed:92,control:79,spin:74,hardness:30},
  {id:'nittaku-flyatt-spin',brand:'Nittaku',name:'Flyatt Spin · 2.0 mm',speed:86,control:79,spin:79,hardness:35},
  {id:'nittaku-genextion-v2c',brand:'Nittaku',name:'Genextion V2C · 2.0 mm',speed:97,control:67,spin:90,hardness:52.5},
  {id:'nittaku-genextion',brand:'Nittaku',name:'Genextion · 2.0 mm',speed:100,control:66,spin:87,hardness:52.5},
  {id:'nittaku-hammond-fa',brand:'Nittaku',name:'Hammond FA · 2.0 mm',speed:77,control:82,spin:45,hardness:35},
  {id:'nittaku-hammond-z2-custom',brand:'Nittaku',name:'Hammond Z2 Custom · 2.0 mm',speed:97,control:75,spin:84,hardness:35},
  {id:'nittaku-hammond-z2',brand:'Nittaku',name:'Hammond Z2 · 2.0 mm',speed:97,control:73,spin:84,hardness:40},
  {id:'nittaku-hammond',brand:'Nittaku',name:'Hammond · 2.0 mm',speed:76,control:85,spin:65,hardness:30},
  {id:'nittaku-hurricane-3-national-blue',brand:'Nittaku',name:'Hurricane 3 National Blue · 2.1 mm',speed:89,control:75,spin:97,hardness:42.5},
  {id:'nittaku-hurricane-3',brand:'Nittaku',name:'Hurricane 3 · 2.1 mm',speed:62,control:86,spin:94,hardness:37.5},
  {id:'nittaku-hurricane-8-80-power',brand:'Nittaku',name:'Hurricane 8-80 Power · 2.1 mm',speed:92,control:75,spin:94,hardness:40},
  {id:'nittaku-hurricane-8-80',brand:'Nittaku',name:'Hurricane 8-80 · 2.1 mm',speed:91,control:74,spin:94,hardness:42.5},
  {id:'nittaku-hurricane-neo-3',brand:'Nittaku',name:'Hurricane NEO 3 · 2.1 mm',speed:68,control:82,spin:97,hardness:42.5},
  {id:'nittaku-hurricane-pro-2',brand:'Nittaku',name:'Hurricane Pro 2 · 2.1 mm',speed:59,control:85,spin:100,hardness:42.5},
  {id:'nittaku-hurricane-pro-3-turbo-blue',brand:'Nittaku',name:'Hurricane Pro 3 Turbo Blue · 2.1 mm',speed:89,control:71,spin:97,hardness:50},
  {id:'nittaku-hurricane-pro-3-turbo-orange',brand:'Nittaku',name:'Hurricane Pro 3 Turbo Orange · 2.1 mm',speed:89,control:74,spin:97,hardness:45},
  {id:'nittaku-hurricane-pro-3',brand:'Nittaku',name:'Hurricane Pro 3 · 2.1 mm',speed:62,control:84,spin:97,hardness:42.5},
  {id:'nittaku-inception',brand:'Nittaku',name:'Inception · 1.8 mm',speed:64,control:83,spin:68,hardness:42.5},
  {id:'nittaku-lebest',brand:'Nittaku',name:'Lebest · 1.8 mm',speed:50,control:91,spin:60,hardness:37.5},
  {id:'nittaku-magic-carbon',brand:'Nittaku',name:'Magic Carbon · 2.0 mm',speed:53,control:90,spin:60,hardness:37.5},
  {id:'nittaku-moristo-df',brand:'Nittaku',name:'Moristo DF · 2.0 mm',speed:71,control:82,spin:71,hardness:40},
  {id:'nittaku-moristo-lp-one',brand:'Nittaku',name:'Moristo LP One · OX',speed:36,control:96,spin:32,hardness:20},
  {id:'nittaku-moristo-lp',brand:'Nittaku',name:'Moristo LP · 0.5 mm',speed:39,control:89,spin:32,hardness:50},
  {id:'nittaku-moristo-sp-ax',brand:'Nittaku',name:'Moristo SP AX · 2.0 mm',speed:79,control:79,spin:55,hardness:40},
  {id:'nittaku-moristo-sp',brand:'Nittaku',name:'Moristo SP · 2.0 mm',speed:76,control:80,spin:48,hardness:40},
  {id:'nittaku-pimple-slide',brand:'Nittaku',name:'Pimple Slide · 0.5 mm',speed:45,control:96,spin:42,hardness:20},
  {id:'nittaku-sonic-ar',brand:'Nittaku',name:'Sonic AR · 2.0 mm',speed:83,control:81,spin:47,hardness:32.5},
  {id:'nittaku-steluck',brand:'Nittaku',name:'Steluck · 1.8 mm',speed:52,control:90,spin:58,hardness:37.5},
  {id:'nittaku-super-do-knuckle-one',brand:'Nittaku',name:'Super DO Knuckle One · OX',speed:44,control:96,spin:37,hardness:20},
  {id:'nittaku-super-do-knuckle',brand:'Nittaku',name:'Super DO Knuckle · 0.5 mm',speed:47,control:94,spin:37,hardness:32.5},
  {id:'nittaku-ultec',brand:'Nittaku',name:'Ultec · 1.8 mm',speed:55,control:92,spin:65,hardness:30},
  {id:'nittaku-wallest-one',brand:'Nittaku',name:'Wallest One · OX',speed:32,control:96,spin:37,hardness:20},
  {id:'nittaku-wallest',brand:'Nittaku',name:'Wallest · 0.5 mm',speed:35,control:96,spin:37,hardness:32.5},
  {id:'dhs-6512',brand:'DHS',name:'6512',speed:76,control:76,spin:73,hardness:42},
  {id:'dhs-652',brand:'DHS',name:'652',speed:78,control:74,spin:71,hardness:43},
  {id:'dhs-c7',brand:'DHS',name:'C7',speed:72,control:78,spin:69,hardness:41},
  {id:'dhs-c8',brand:'DHS',name:'C8',speed:66,control:83,spin:75,hardness:40},
  {id:'dhs-cloud-fog-3',brand:'DHS',name:'Cloud & Fog 3',speed:55,control:84,spin:80,hardness:40},
  {id:'dhs-g666',brand:'DHS',name:'G666',speed:66,control:80,spin:93,hardness:47},
  {id:'dhs-g888',brand:'DHS',name:'G888',speed:65,control:82,spin:91,hardness:46},
  {id:'dhs-goldarc-8-475',brand:'DHS',name:'GoldArc 8 · 47,5°',speed:88,control:76,spin:91,hardness:48},
  {id:'dhs-goldarc-8-500',brand:'DHS',name:'GoldArc 8 · 50,0°',speed:91,control:72,spin:92,hardness:50},
  {id:'dhs-hurricane-2-neo',brand:'DHS',name:'Hurricane 2 Neo',speed:73,control:72,spin:96,hardness:50},
  {id:'dhs-hurricane-3',brand:'DHS',name:'Hurricane 3',speed:68,control:77,spin:96,hardness:49},
  {id:'dhs-hurricane-3-national-39',brand:'DHS',name:'Hurricane 3 National · 39° · modrá špongia',speed:83,control:75,spin:98,hardness:49},
  {id:'dhs-hurricane-3-neo',brand:'DHS',name:'Hurricane 3 Neo',speed:75,control:75,spin:97,hardness:50},
  {id:'dhs-hurricane-3-neo-provincial-39',brand:'DHS',name:'Hurricane 3 Neo Provincial · 39°',speed:79,control:76,spin:98,hardness:49},
  {id:'dhs-hurricane-3-provincial-40',brand:'DHS',name:'Hurricane 3 Provincial · 40°',speed:78,control:75,spin:97,hardness:50},
  {id:'dhs-hurricane-3-50-37',brand:'DHS',name:'Hurricane 3-50 · 37°',speed:75,control:81,spin:94,hardness:44},
  {id:'dhs-hurricane-8-mid-hard',brand:'DHS',name:'Hurricane 8 Mid-Hard',speed:78,control:76,spin:95,hardness:49},
  {id:'dhs-hurricane-8-80-37',brand:'DHS',name:'Hurricane 8-80 · 37°',speed:82,control:79,spin:94,hardness:45},
  {id:'dhs-pf4-50',brand:'DHS',name:'PF4-50',speed:65,control:84,spin:89,hardness:45},
  {id:'dna-pro',brand:'Stiga',name:'DNA Platinum XH · 2.3 mm',speed:87,control:65,spin:91,hardness:52},
  {id:'rakza7',brand:'Yasaka',name:'Rakza 7 · 2.0 mm',speed:75,control:78,spin:86,hardness:45},
  {id:'vega-pro',brand:'Xiom',name:'Vega Pro · 2.0 mm',speed:76,control:76,spin:88,hardness:47},
  {id:'v15',brand:'Victas',name:'V > 15 Extra · 2.0 mm',speed:83,control:69,spin:90,hardness:47},
  {id:'mxp',brand:'Tibhar',name:'Evolution MX-P · 2.1 mm',speed:84,control:68,spin:91,hardness:47},
  {id:'donic-acuda-s1',brand:'Donic',name:'Acuda S1',speed:88,control:70,spin:91,hardness:48},
  {id:'donic-acuda-s1-turbo',brand:'Donic',name:'Acuda S1 Turbo',speed:91,control:66,spin:92,hardness:50},
  {id:'donic-acuda-s2',brand:'Donic',name:'Acuda S2',speed:84,control:75,spin:91,hardness:43},
  {id:'donic-acuda-s3',brand:'Donic',name:'Acuda S3',speed:79,control:82,spin:89,hardness:38},
  {id:'donic-akkadi-taichi',brand:'Donic',name:'Akkadi Taichi',speed:68,control:83,spin:91,hardness:45},
  {id:'donic-alligator-anti',brand:'Donic',name:'Alligator Anti',speed:42,control:89,spin:25,hardness:40},
  {id:'donic-alligator-def',brand:'Donic',name:'Alligator Def',speed:48,control:87,spin:76,hardness:39},
  {id:'donic-baracuda',brand:'Donic',name:'Baracuda',speed:82,control:77,spin:94,hardness:48},
  {id:'donic-baracuda-big-slam',brand:'Donic',name:'Baracuda Big Slam',speed:77,control:84,spin:92,hardness:40},
  {id:'donic-baxster-f1-a',brand:'Donic',name:'Baxster F1-A',speed:80,control:73,spin:72,hardness:43},
  {id:'donic-bluefire-m1',brand:'Donic',name:'Bluefire M1',speed:90,control:68,spin:93,hardness:48},
  {id:'donic-bluefire-m1-turbo',brand:'Donic',name:'Bluefire M1 Turbo',speed:93,control:64,spin:94,hardness:50},
  {id:'donic-bluefire-m2',brand:'Donic',name:'Bluefire M2',speed:87,control:73,spin:93,hardness:45},
  {id:'donic-bluefire-m3',brand:'Donic',name:'Bluefire M3',speed:82,control:80,spin:91,hardness:40},
  {id:'donic-bluegrip-c1',brand:'Donic',name:'BlueGrip C1',speed:91,control:67,spin:98,hardness:60},
  {id:'donic-bluegrip-c2',brand:'Donic',name:'BlueGrip C2',speed:89,control:70,spin:97,hardness:55},
  {id:'donic-bluegrip-j1',brand:'Donic',name:'BlueGrip J1',speed:88,control:72,spin:98,hardness:55},
  {id:'donic-bluegrip-j2',brand:'Donic',name:'BlueGrip J2',speed:86,control:76,spin:97,hardness:53},
  {id:'donic-bluegrip-j3',brand:'Donic',name:'BlueGrip J3',speed:83,control:80,spin:96,hardness:50},
  {id:'donic-bluegrip-s1',brand:'Donic',name:'BlueGrip S1',speed:84,control:78,spin:95,hardness:47},
  {id:'donic-bluegrip-s2',brand:'Donic',name:'BlueGrip S2',speed:80,control:83,spin:94,hardness:42},
  {id:'donic-bluestar-a1',brand:'Donic',name:'BlueStar A1',speed:94,control:66,spin:97,hardness:53},
  {id:'donic-bluestar-a2',brand:'Donic',name:'BlueStar A2',speed:91,control:70,spin:96,hardness:50},
  {id:'donic-bluestar-a3',brand:'Donic',name:'BlueStar A3',speed:88,control:75,spin:95,hardness:48},
  {id:'donic-bluestorm-big-slam',brand:'Donic',name:'Bluestorm Big Slam',speed:82,control:82,spin:89,hardness:42},
  {id:'donic-bluestorm-pro',brand:'Donic',name:'Bluestorm Pro',speed:94,control:64,spin:94,hardness:50},
  {id:'donic-bluestorm-pro-am',brand:'Donic',name:'Bluestorm Pro AM',speed:91,control:70,spin:93,hardness:47},
  {id:'donic-bluestorm-z1',brand:'Donic',name:'Bluestorm Z1',speed:91,control:67,spin:92,hardness:48},
  {id:'donic-bluestorm-z1-turbo',brand:'Donic',name:'Bluestorm Z1 Turbo',speed:94,control:63,spin:93,hardness:50},
  {id:'donic-bluestorm-z2',brand:'Donic',name:'Bluestorm Z2',speed:88,control:72,spin:92,hardness:47},
  {id:'donic-bluestorm-z3',brand:'Donic',name:'Bluestorm Z3',speed:83,control:79,spin:90,hardness:42},
  {id:'donic-coppa',brand:'Donic',name:'Coppa',speed:75,control:82,spin:83,hardness:40},
  {id:'donic-coppa-e1',brand:'Donic',name:'Coppa E1',speed:87,control:72,spin:88,hardness:47},
  {id:'donic-coppa-e2',brand:'Donic',name:'Coppa E2',speed:83,control:77,spin:87,hardness:42},
  {id:'donic-coppa-e3',brand:'Donic',name:'Coppa E3',speed:78,control:83,spin:85,hardness:37},
  {id:'donic-coppa-tenero',brand:'Donic',name:'Coppa Tenero',speed:69,control:87,spin:81,hardness:35},
  {id:'donic-coppa-x1-gold',brand:'Donic',name:'Coppa X1 (Gold)',speed:88,control:71,spin:89,hardness:48},
  {id:'donic-coppa-x1-turbo-platin',brand:'Donic',name:'Coppa X1 Turbo (Platin)',speed:92,control:66,spin:90,hardness:50},
  {id:'donic-coppa-x2-platin-soft',brand:'Donic',name:'Coppa X2 (Platin Soft)',speed:84,control:76,spin:88,hardness:45},
  {id:'donic-coppa-x3-silver',brand:'Donic',name:'Coppa X3 (Silver)',speed:79,control:82,spin:86,hardness:40},
  {id:'donic-desto-f1',brand:'Donic',name:'Desto F1',speed:89,control:68,spin:85,hardness:45},
  {id:'donic-desto-f1-plus',brand:'Donic',name:'Desto F1 Plus',speed:92,control:64,spin:86,hardness:47},
  {id:'donic-desto-f2',brand:'Donic',name:'Desto F2',speed:84,control:75,spin:83,hardness:42},
  {id:'donic-desto-f3',brand:'Donic',name:'Desto F3',speed:78,control:82,spin:81,hardness:38},
  {id:'donic-desto-f3-bigslam',brand:'Donic',name:'Desto F3 BigSlam',speed:75,control:86,spin:80,hardness:35},
  {id:'donic-desto-f4',brand:'Donic',name:'Desto F4',speed:72,control:87,spin:78,hardness:35},
  {id:'donic-desto-first',brand:'Donic',name:'Desto F1rst',speed:90,control:70,spin:88,hardness:48},
  {id:'donic-desto-next',brand:'Donic',name:'Desto N2xt',speed:84,control:77,spin:86,hardness:42},
  {id:'donic-liga',brand:'Donic',name:'Liga',speed:65,control:89,spin:77,hardness:38},
  {id:'donic-liga-plus',brand:'Donic',name:'Liga Plus',speed:70,control:86,spin:79,hardness:40},
  {id:'donic-piranja-cd',brand:'Donic',name:'Piranja CD',speed:52,control:86,spin:78,hardness:38},
  {id:'donic-piranja-tec',brand:'Donic',name:'Piranja Tec',speed:49,control:88,spin:80,hardness:37},
  {id:'donic-quattro',brand:'Donic',name:'Quattro',speed:70,control:88,spin:80,hardness:38},
  {id:'donic-quattro-aconda-medium',brand:'Donic',name:"Quattro A'Conda Medium",speed:73,control:86,spin:83,hardness:40},
  {id:'donic-quattro-aconda-soft',brand:'Donic',name:"Quattro A'Conda Soft",speed:68,control:90,spin:81,hardness:35},
  {id:'donic-slice-40-cd',brand:'Donic',name:'Slice 40 CD',speed:55,control:91,spin:91,hardness:40},
  {id:'donic-slice-40-cs',brand:'Donic',name:'Slice 40 CS',speed:58,control:89,spin:92,hardness:42},
  {id:'donic-twingo',brand:'Donic',name:'Twingo',speed:62,control:91,spin:75,hardness:35},
  {id:'donic-twingo-plus',brand:'Donic',name:'Twingo Plus',speed:67,control:88,spin:78,hardness:38},
  {id:'donic-vario',brand:'Donic',name:'Vario',speed:73,control:86,spin:82,hardness:40},
  {id:'donic-vario-big-slam',brand:'Donic',name:'Vario Big Slam',speed:70,control:89,spin:81,hardness:37},
  {id:'donic-vario-soft',brand:'Donic',name:'Vario Soft',speed:68,control:90,spin:80,hardness:35},
  {id:'rasanter',brand:'andro',name:'Rasanter R53 · 2.1 mm',speed:88,control:63,spin:90,hardness:53},
  {id:'andro-backside-3',brand:'andro',name:'Backside 3.0 · 2.0 mm',speed:66,control:78,spin:80,hardness:42},
  {id:'andro-blowfish',brand:'andro',name:'Blowfish · 2.0 mm',speed:69,control:76,spin:73,hardness:38},
  {id:'andro-blowfish-plus',brand:'andro',name:'Blowfish+ · 2.0 mm',speed:72,control:74,spin:75,hardness:40},
  {id:'andro-bype',brand:'andro',name:'BYPE · 2.0 mm',speed:73,control:78,spin:83,hardness:45},
  {id:'andro-bype-sfx',brand:'andro',name:'BYPE SFX · 2.0 mm',speed:68,control:83,spin:81,hardness:40},
  {id:'andro-chintac-52s',brand:'andro',name:'Chintac 52S · 2.1 mm',speed:80,control:73,spin:94,hardness:52},
  {id:'andro-chintac-57s',brand:'andro',name:'Chintac 57S · 2.1 mm',speed:84,control:69,spin:95,hardness:57},
  {id:'andro-good',brand:'andro',name:'Good! · 2.0 mm',speed:60,control:84,spin:76,hardness:37},
  {id:'andro-gtt-40',brand:'andro',name:'GTT 40 · 2.0 mm',speed:66,control:83,spin:80,hardness:40},
  {id:'andro-gtt-45',brand:'andro',name:'GTT 45 · 2.0 mm',speed:71,control:79,spin:82,hardness:45},
  {id:'andro-hexer',brand:'andro',name:'Hexer · 2.0 mm',speed:75,control:75,spin:85,hardness:47},
  {id:'andro-hexer-plus',brand:'andro',name:'Hexer + · 2.0 mm',speed:77,control:73,spin:86,hardness:47},
  {id:'andro-hexer-duro',brand:'andro',name:'Hexer Duro · 2.0 mm',speed:80,control:70,spin:87,hardness:50},
  {id:'andro-hexer-grip',brand:'andro',name:'Hexer Grip · 2.1 mm',speed:78,control:73,spin:88,hardness:47},
  {id:'andro-hexer-grip-sfx',brand:'andro',name:'Hexer Grip SFX · 2.0 mm',speed:70,control:82,spin:86,hardness:40},
  {id:'andro-hexer-hd',brand:'andro',name:'Hexer HD · 2.1 mm',speed:83,control:68,spin:89,hardness:50},
  {id:'andro-hexer-powergrip',brand:'andro',name:'Hexer Powergrip · 2.1 mm',speed:81,control:70,spin:89,hardness:47},
  {id:'andro-hexer-powergrip-sfx',brand:'andro',name:'Hexer Powergrip SFX · 2.0 mm',speed:73,control:80,spin:87,hardness:40},
  {id:'andro-impuls-powersponge',brand:'andro',name:'Impuls Powersponge · 2.0 mm',speed:69,control:81,spin:82,hardness:37},
  {id:'andro-impuls-speed',brand:'andro',name:'Impuls Speed · 2.0 mm',speed:71,control:79,spin:82,hardness:40},
  {id:'andro-hyq-42',brand:'andro',name:'HY-Q 42 · 2.0 mm',speed:74,control:80,spin:88,hardness:42},
  {id:'andro-hyq-48',brand:'andro',name:'HY-Q 48 · 2.1 mm',speed:80,control:74,spin:90,hardness:48},
  {id:'andro-nuzn-45',brand:'andro',name:'NUZN 45 · 2.0 mm',speed:80,control:76,spin:91,hardness:45},
  {id:'andro-nuzn-48',brand:'andro',name:'NUZN 48 · 2.0 mm',speed:83,control:72,spin:92,hardness:48},
  {id:'andro-nuzn-50',brand:'andro',name:'NUZN 50 · 2.1 mm',speed:86,control:69,spin:93,hardness:50},
  {id:'andro-nuzn-55',brand:'andro',name:'NUZN 55 · 2.1 mm',speed:89,control:65,spin:94,hardness:55},
  {id:'andro-plasma-500s',brand:'andro',name:'Plasma 500S · 2.0 mm',speed:76,control:75,spin:85,hardness:45},
  {id:'andro-rasant-chaos',brand:'andro',name:'Rasant Chaos · 1.9 mm',speed:55,control:84,spin:72,hardness:35},
  {id:'andro-rasanter-c45',brand:'andro',name:'Rasanter C45 · 2.0 mm',speed:78,control:77,spin:90,hardness:45},
  {id:'andro-rasanter-c48',brand:'andro',name:'Rasanter C48 · 2.0 mm',speed:82,control:72,spin:91,hardness:48},
  {id:'andro-rasanter-c53',brand:'andro',name:'Rasanter C53 · 2.1 mm',speed:86,control:67,spin:92,hardness:53},
  {id:'andro-rasanter-r37',brand:'andro',name:'Rasanter R37 · 2.0 mm',speed:69,control:83,spin:86,hardness:37},
  {id:'andro-rasanter-r42',brand:'andro',name:'Rasanter R42 · 2.0 mm',speed:74,control:79,spin:88,hardness:42},
  {id:'andro-rasanter-r45',brand:'andro',name:'Rasanter R45 · 2.0 mm',speed:78,control:75,spin:89,hardness:45},
  {id:'andro-rasanter-r47',brand:'andro',name:'Rasanter R47 · 2.1 mm',speed:81,control:72,spin:90,hardness:47},
  {id:'andro-rasanter-r48',brand:'andro',name:'Rasanter R48 · 2.1 mm',speed:83,control:70,spin:91,hardness:48},
  {id:'andro-rasanter-r50',brand:'andro',name:'Rasanter R50 · 2.1 mm',speed:85,control:68,spin:91,hardness:50},
  {id:'andro-rasanter-v42',brand:'andro',name:'Rasanter V42 · 2.0 mm',speed:77,control:76,spin:86,hardness:42},
  {id:'andro-rasanter-v47',brand:'andro',name:'Rasanter V47 · 2.1 mm',speed:83,control:70,spin:88,hardness:47},
  {id:'andro-shifter',brand:'andro',name:'Shifter · 2.0 mm',speed:65,control:82,spin:78,hardness:40},
  {id:'andro-vertic',brand:'andro',name:'Vertic · 2.0 mm',speed:66,control:81,spin:80,hardness:42},
  {id:'joola-cwx-rubber',brand:'Joola',name:'CWX · 0.5 mm',speed:55,control:91,spin:76,hardness:50},
  {id:'joola-dynaryz-acc',brand:'Joola',name:'Dynaryz ACC · 2.0 mm',speed:85,control:72,spin:88,hardness:47.5},
  {id:'joola-dynaryz-agr',brand:'Joola',name:'Dynaryz AGR · 2.0 mm',speed:89,control:65,spin:91,hardness:50},
  {id:'joola-dynaryz-cmd',brand:'Joola',name:'Dynaryz CMD · 2.0 mm',speed:73,control:82,spin:88,hardness:42.5},
  {id:'joola-dynaryz-inferno',brand:'Joola',name:'Dynaryz Inferno · 2.0 mm',speed:96,control:61,spin:88,hardness:50},
  {id:'joola-dynaryz-zgr',brand:'Joola',name:'Dynaryz ZGR · 2.0 mm',speed:85,control:69,spin:92,hardness:57.5},
  {id:'joola-dynaryz-zgx',brand:'Joola',name:'Dynaryz ZGX · 2.0 mm',speed:89,control:72,spin:88,hardness:55},
  {id:'joola-express-ultra',brand:'Joola',name:'Express Ultra · 2.0 mm',speed:79,control:75,spin:72,hardness:35},
  {id:'joola-hugo-calderano-trinity-charged',brand:'Joola',name:'Hugo Calderano Trinity Charged · 2.0 mm',speed:95,control:68,spin:96,hardness:57.5},
  {id:'joola-hugo-calderano-trinity-dynamic',brand:'Joola',name:'Hugo Calderano Trinity Dynamic · 2.0 mm',speed:91,control:74,spin:94,hardness:52.5},
  {id:'joola-micron',brand:'Joola',name:'Micron · 2.0 mm',speed:66,control:90,spin:79,hardness:40},
  {id:'joola-rhyzen-cmd',brand:'Joola',name:'Rhyzen CMD · 2.0 mm',speed:63,control:84,spin:78,hardness:45},
  {id:'joola-rhyzen-fire',brand:'Joola',name:'Rhyzen FIRE · 2.0 mm',speed:72,control:76,spin:82,hardness:47.5},
  {id:'joola-rhyzen-ice',brand:'Joola',name:'Rhyzen ICE · 2.0 mm',speed:55,control:89,spin:79,hardness:40},
  {id:'joola-rhyzen-zgr',brand:'Joola',name:'Rhyzen ZGR · 2.0 mm',speed:76,control:73,spin:93,hardness:55},
  {id:'joola-rhyzen-zgx',brand:'Joola',name:'Rhyzen ZGX · 2.0 mm',speed:80,control:76,spin:90,hardness:50},
  {id:'joola-rhyzer-48',brand:'Joola',name:'Rhyzer 48 · 2.0 mm',speed:76,control:75,spin:82,hardness:48},
  {id:'joola-rhyzer-pro-45',brand:'Joola',name:'Rhyzer Pro 45 · 2.0 mm',speed:76,control:78,spin:82,hardness:45},
  {id:'joola-rhyzer-pro-50',brand:'Joola',name:'Rhyzer Pro 50 · MAX',speed:84,control:69,spin:86,hardness:50},
  {id:'joola-tango-ultra',brand:'Joola',name:'Tango Ultra · 2.0 mm',speed:75,control:80,spin:67,hardness:35},
  {id:'joola-tronix-acc',brand:'Joola',name:'Tronix ACC · 2.0 mm',speed:85,control:68,spin:79,hardness:47.5},
  {id:'joola-tronix-cmd',brand:'Joola',name:'Tronix CMD · 2.0 mm',speed:73,control:79,spin:79,hardness:42.5},
  {id:'joola-tronix-zgr',brand:'Joola',name:'Tronix ZGR · 2.0 mm',speed:76,control:72,spin:96,hardness:55},
  {id:'moon-speed',brand:'Yinhe',name:'Moon Speed · 2.1 mm',speed:75,control:74,spin:88,hardness:47},
  {id:'sanwei-dz-ox',brand:'Sanwei',name:'DZ Dizzy · OX',speed:23,control:91,spin:25,hardness:20},
  {id:'sanwei-gear-hyper-37',brand:'Sanwei',name:'Gear Hyper 37° · 2.1 mm',speed:90,control:79,spin:87,hardness:37},
  {id:'sanwei-gear-hyper-38',brand:'Sanwei',name:'Gear Hyper 38° · 2.1 mm',speed:92,control:77,spin:87,hardness:38},
  {id:'sanwei-gear-hyper-39',brand:'Sanwei',name:'Gear Hyper 39° · 2.1 mm',speed:93,control:75,spin:87,hardness:39},
  {id:'sanwei-new-target-national',brand:'Sanwei',name:'New Target National · 2.15 mm',speed:87,control:74,spin:90,hardness:40},
  {id:'sanwei-t88-1s',brand:'Sanwei',name:'T88-1S · 2.1 mm',speed:90,control:77,spin:73,hardness:37},
  {id:'sanwei-t88-iii',brand:'Sanwei',name:'T88-III · MAX',speed:70,control:88,spin:78,hardness:35},
  {id:'sanwei-t88-taiji-plus-2023',brand:'Sanwei',name:'T88-Taiji Plus 2023 · 2.0 mm',speed:77,control:85,spin:93,hardness:35},
  {id:'sanwei-taiji-light',brand:'Sanwei',name:'Taiji Light · MAX',speed:68,control:90,spin:82,hardness:33},
  {id:'sanwei-target-3rd-39',brand:'Sanwei',name:'Target 3rd Edition 39° · 2.1 mm',speed:80,control:80,spin:80,hardness:39},
  {id:'sanwei-target-3rd-40',brand:'Sanwei',name:'Target 3rd Edition 40° · 2.1 mm',speed:81,control:78,spin:80,hardness:40},
  {id:'sanwei-target-europe-40',brand:'Sanwei',name:'Target Europe 40+ · MAX',speed:83,control:79,spin:86,hardness:40},
  {id:'sanwei-target-europe-40-fx',brand:'Sanwei',name:'Target Europe 40+ FX · MAX',speed:78,control:84,spin:88,hardness:37},
  {id:'sanwei-target-europe-soft',brand:'Sanwei',name:'Target Europe Soft · 2.1 mm',speed:70,control:87,spin:80,hardness:37},
  {id:'sanwei-target-national-player-37',brand:'Sanwei',name:'Target National Player Edition 37° · 2.1 mm',speed:73,control:84,spin:87,hardness:37},
  {id:'sanwei-target-national-player-39',brand:'Sanwei',name:'Target National Player Edition 39° · 2.1 mm',speed:87,control:76,spin:80,hardness:39},
  {id:'sanwei-target-pro-blue',brand:'Sanwei',name:'Target PRO Blue · 2.0 mm',speed:100,control:65,spin:80,hardness:40},
  {id:'sanwei-ultra-spin',brand:'Sanwei',name:'Ultra Spin · MAX',speed:88,control:77,spin:90,hardness:38},
  {id:'sanwei-ultra-spin-blue',brand:'Sanwei',name:'Ultra Spin Blue · 2.1 mm',speed:87,control:76,spin:90,hardness:40},
  {id:'gewo-codexx-ef-pro-54',brand:'Gewo',name:'Codexx EF Pro 54',speed:91,control:79,spin:85,hardness:54},
  {id:'gewo-codexx-el-pro-52',brand:'Gewo',name:'Codexx EL Pro 52',speed:90,control:81,spin:85,hardness:52},
  {id:'gewo-codexx-pro-53-superselect',brand:'Gewo',name:'Codexx Pro 53 SuperSelect',speed:93,control:77,spin:87,hardness:53},
  {id:'gewo-codexx-pro-55-superselect',brand:'Gewo',name:'Codexx Pro 55 SuperSelect',speed:95,control:75,spin:86,hardness:55},
  {id:'gewo-cs-powerspeed',brand:'Gewo',name:'CS Powerspeed',speed:61,control:99,spin:66,hardness:42},
  {id:'gewo-elaxxon-eft-45-0',brand:'Gewo',name:'Elaxxon eFT 45.0',speed:69,control:96,spin:77,hardness:45},
  {id:'gewo-elaxxon-eft-50-0',brand:'Gewo',name:'Elaxxon eFT 50.0',speed:71,control:93,spin:79,hardness:50},
  {id:'gewo-hype-el-pro-42-5',brand:'Gewo',name:'Hype EL Pro 42.5',speed:77,control:97,spin:80,hardness:42.5},
  {id:'gewo-hype-el-pro-47-5',brand:'Gewo',name:'Hype EL Pro 47.5',speed:81,control:92,spin:80,hardness:47.5},
  {id:'gewo-hype-kr-pro-47-5',brand:'Gewo',name:'Hype KR Pro 47.5',speed:83,control:92,spin:81,hardness:47.5},
  {id:'gewo-hype-xt-pro-40-0',brand:'Gewo',name:'Hype XT Pro 40.0',speed:75,control:99,spin:83,hardness:40},
  {id:'gewo-hype-xt-pro-50-0',brand:'Gewo',name:'Hype XT Pro 50.0',speed:83,control:93,spin:81,hardness:50},
  {id:'gewo-iconixx-hybrid-hxt-pro-45-0',brand:'Gewo',name:'Iconixx Hybrid HXT Pro 45.0',speed:85,control:90,spin:87,hardness:45},
  {id:'gewo-iconixx-hybrid-hxt-pro-48-0',brand:'Gewo',name:'Iconixx Hybrid HXT Pro 48.0',speed:95,control:79,spin:87,hardness:48},
  {id:'gewo-iconixx-hybrid-hxt-pro-50-0',brand:'Gewo',name:'Iconixx Hybrid HXT Pro 50.0',speed:96,control:77,spin:89,hardness:50},
  {id:'gewo-iconixx-hybrid-hxt-pro-55-0',brand:'Gewo',name:'Iconixx Hybrid HXT Pro 55.0',speed:98,control:75,spin:90,hardness:55},
  {id:'gewo-inventus-xt-pro-47-5',brand:'Gewo',name:'Inventus XT Pro 47.5',speed:85,control:88,spin:85,hardness:47.5},
  {id:'gewo-inventus-xt-pro-50-0',brand:'Gewo',name:'Inventus XT Pro 50.0',speed:88,control:85,spin:83,hardness:50},
  {id:'gewo-inventus-xt-pro-52-5',brand:'Gewo',name:'Inventus XT Pro 52.5',speed:90,control:82,spin:82,hardness:52.5},
  {id:'gewo-mega-flex-control',brand:'Gewo',name:'Mega Flex Control',speed:59,control:99,spin:65,hardness:42},
  {id:'gewo-nano-s-speed-control',brand:'Gewo',name:'Nano S/Speed Control',speed:61,control:99,spin:67,hardness:38},
  {id:'gewo-nanoflex-ft48',brand:'Gewo',name:'nanoFLEX FT48',speed:80,control:91,spin:77,hardness:48},
  {id:'gewo-neoflexx-eft-40',brand:'Gewo',name:'Neoflexx eFT 40',speed:62,control:99,spin:72,hardness:40},
  {id:'gewo-neoflexx-eft-45',brand:'Gewo',name:'Neoflexx eFT 45',speed:64,control:97,spin:73,hardness:45},
  {id:'gewo-neoflexx-eft-48',brand:'Gewo',name:'Neoflexx eFT 48',speed:65,control:94,spin:75,hardness:48},
  {id:'gewo-nexxus-el-pro-38',brand:'Gewo',name:'Nexxus EL Pro 38',speed:73,control:99,spin:85,hardness:38},
  {id:'gewo-nexxus-el-pro-43',brand:'Gewo',name:'Nexxus EL Pro 43',speed:79,control:96,spin:85,hardness:43},
  {id:'gewo-nexxus-el-pro-45-superselect',brand:'Gewo',name:'Nexxus EL Pro 45 SuperSelect',speed:85,control:95,spin:83,hardness:45},
  {id:'gewo-nexxus-el-pro-48',brand:'Gewo',name:'Nexxus EL Pro 48',speed:83,control:91,spin:83,hardness:48},
  {id:'gewo-nexxus-el-pro-48-superselect',brand:'Gewo',name:'Nexxus EL Pro 48 SuperSelect',speed:89,control:88,spin:84,hardness:48},
  {id:'gewo-nexxus-el-pro-50-hard',brand:'Gewo',name:'Nexxus EL Pro 50 Hard',speed:87,control:87,spin:83,hardness:50},
  {id:'gewo-nexxus-el-pro-50-superselect',brand:'Gewo',name:'Nexxus EL Pro 50 SuperSelect',speed:91,control:83,spin:84,hardness:50},
  {id:'gewo-nexxus-el-pro-53-hard',brand:'Gewo',name:'Nexxus EL Pro 53 Hard',speed:89,control:83,spin:83,hardness:53},
  {id:'gewo-nexxus-el-pro-53-superselect',brand:'Gewo',name:'Nexxus EL Pro 53 SuperSelect',speed:93,control:77,spin:85,hardness:53},
  {id:'gewo-nexxus-xt-pro-48',brand:'Gewo',name:'Nexxus XT Pro 48',speed:84,control:90,spin:82,hardness:48},
  {id:'gewo-nexxus-xt-pro-50-hard',brand:'Gewo',name:'Nexxus XT Pro 50 Hard',speed:88,control:85,spin:81,hardness:50},
  {id:'gewo-proton-neo-325',brand:'Gewo',name:'Proton Neo 325',speed:68,control:99,spin:72,hardness:32.5},
  {id:'gewo-proton-neo-375',brand:'Gewo',name:'Proton Neo 375',speed:70,control:99,spin:70,hardness:37.5},
  {id:'gewo-proton-neo-450',brand:'Gewo',name:'Proton Neo 450',speed:72,control:96,spin:70,hardness:45},
  {id:'gewo-proton-neo-475',brand:'Gewo',name:'Proton Neo 475',speed:75,control:95,spin:69,hardness:47.5},
  {id:'gewo-return-pro',brand:'Gewo',name:'Return Pro',speed:59,control:99,spin:68,hardness:42},
  {id:'gewo-rose',brand:'Gewo',name:'Rose',speed:64,control:92,spin:65,hardness:42},
  {id:'gewo-target-airtec-fx',brand:'Gewo',name:'Target airTEC FX',speed:63,control:94,spin:63,hardness:40},
  {id:'gewo-target-airtec-l',brand:'Gewo',name:'Target airTEC L',speed:63,control:94,spin:63,hardness:42},
  {id:'gewo-thunderball2',brand:'Gewo',name:'Thunderball²',speed:57,control:99,spin:63,hardness:42},
  {id:'f729-563-pro-sponge',brand:'Friendship 729',name:'563 Pro Sponge',speed:69,control:80,spin:70,hardness:38},
  {id:'f729-563-semi-long-pimples',brand:'Friendship 729',name:'563 Semi-Long Pimples',speed:69,control:80,spin:70,hardness:39},
  {id:'f729-563-sponge',brand:'Friendship 729',name:'563 Sponge',speed:69,control:80,spin:70,hardness:38},
  {id:'f729-729-pro-dragon-colored-sponge',brand:'Friendship 729',name:'729 Pro Dragon (Colored Sponge)',speed:67,control:73,spin:80,hardness:45},
  {id:'f729-729-08',brand:'Friendship 729',name:'729-08',speed:73,control:73,spin:80,hardness:45},
  {id:'f729-729-08-es',brand:'Friendship 729',name:'729-08 ES',speed:80,control:73,spin:80,hardness:45},
  {id:'f729-729-2-new',brand:'Friendship 729',name:'729-2 New',speed:80,control:67,spin:73,hardness:42},
  {id:'f729-729-5',brand:'Friendship 729',name:'729-5',speed:80,control:80,spin:67,hardness:42},
  {id:'f729-755-long-pimples',brand:'Friendship 729',name:'755 Long Pimples',speed:51,control:84,spin:76,hardness:38},
  {id:'f729-755-sponge',brand:'Friendship 729',name:'755 Sponge',speed:51,control:84,spin:76,hardness:38},
  {id:'f729-802-pimples-out',brand:'Friendship 729',name:'802 Pimples-Out',speed:69,control:80,spin:70,hardness:39},
  {id:'f729-802-sponge',brand:'Friendship 729',name:'802 Sponge',speed:69,control:80,spin:70,hardness:35},
  {id:'f729-802-40-sponge',brand:'Friendship 729',name:'802-40 Sponge',speed:69,control:80,spin:70,hardness:36},
  {id:'f729-837-long-pimples',brand:'Friendship 729',name:'837 Long Pimples',speed:51,control:84,spin:76,hardness:38},
  {id:'f729-837-sponge',brand:'Friendship 729',name:'837 Sponge',speed:51,control:84,spin:76,hardness:38},
  {id:'f729-aurora-max-colored-sponge',brand:'Friendship 729',name:'Aurora Max (Colored Sponge)',speed:67,control:73,spin:80,hardness:45},
  {id:'f729-battle-ii-direct-supply-provincial-teams-blue-sponge',brand:'Friendship 729',name:'Battle II Direct Supply Provincial Teams (Blue Sponge)',speed:87,control:87,spin:83,hardness:38},
  {id:'f729-battle-ii-national',brand:'Friendship 729',name:'Battle II National',speed:87,control:87,spin:83,hardness:38},
  {id:'f729-battle-ii-provincial-common',brand:'Friendship 729',name:'Battle II Provincial (Common)',speed:83,control:80,spin:80,hardness:38},
  {id:'f729-battle-ii-provincial-golden',brand:'Friendship 729',name:'Battle II Provincial (Golden)',speed:87,control:87,spin:80,hardness:40},
  {id:'f729-battle-iii',brand:'Friendship 729',name:'Battle III',speed:90,control:87,spin:93,hardness:38},
  {id:'f729-bloom-power',brand:'Friendship 729',name:'Bloom Power',speed:73,control:67,spin:67,hardness:45},
  {id:'f729-bloom-spin',brand:'Friendship 729',name:'Bloom Spin',speed:67,control:67,spin:80,hardness:45},
  {id:'f729-cross-729-2',brand:'Friendship 729',name:'Cross 729-2',speed:60,control:67,spin:60,hardness:45},
  {id:'f729-cross-general',brand:'Friendship 729',name:'Cross General',speed:60,control:73,spin:73,hardness:42},
  {id:'f729-cross-popular-colored-sponge',brand:'Friendship 729',name:'Cross Popular (Colored Sponge)',speed:60,control:73,spin:73,hardness:42},
  {id:'f729-focus-i',brand:'Friendship 729',name:'Focus I',speed:80,control:80,spin:60,hardness:45},
  {id:'f729-focus-ii',brand:'Friendship 729',name:'Focus II',speed:73,control:80,spin:67,hardness:45},
  {id:'f729-focus-iii',brand:'Friendship 729',name:'Focus III',speed:73,control:80,spin:73,hardness:45},
  {id:'f729-gs',brand:'Friendship 729',name:'GS',speed:60,control:67,spin:60,hardness:45},
  {id:'f729-heart-to-heart-563',brand:'Friendship 729',name:'Heart to Heart 563',speed:69,control:80,spin:70,hardness:38},
  {id:'f729-heart-to-heart-755',brand:'Friendship 729',name:'Heart to Heart 755',speed:51,control:84,spin:76,hardness:38},
  {id:'f729-heart-to-heart-802-40',brand:'Friendship 729',name:'Heart to Heart 802-40',speed:69,control:80,spin:70,hardness:40},
  {id:'f729-legend-563-semi-long-pimples',brand:'Friendship 729',name:'Legend 563 Semi-Long Pimples',speed:69,control:80,spin:70,hardness:39},
  {id:'f729-legend-563-sponge',brand:'Friendship 729',name:'Legend 563 Sponge',speed:47,control:53,spin:70,hardness:39},
  {id:'f729-legend-802-pimples-out',brand:'Friendship 729',name:'Legend 802 Pimples-Out',speed:69,control:80,spin:70,hardness:39},
  {id:'f729-legend-802-sponge',brand:'Friendship 729',name:'Legend 802 Sponge',speed:47,control:53,spin:70,hardness:39},
  {id:'f729-origin',brand:'Friendship 729',name:'Origin',speed:74,control:80,spin:91,hardness:45},
  {id:'f729-presto-max-speed',brand:'Friendship 729',name:'Presto Max Speed',speed:87,control:90,spin:80,hardness:46},
  {id:'f729-presto-max-spin',brand:'Friendship 729',name:'Presto Max Spin',speed:87,control:87,spin:90,hardness:46},
  {id:'f729-presto-national',brand:'Friendship 729',name:'Presto National',speed:83,control:87,spin:80,hardness:42},
  {id:'f729-presto-national-blue-sponge',brand:'Friendship 729',name:'Presto National (Blue Sponge)',speed:83,control:87,spin:80,hardness:42},
  {id:'f729-presto-speed',brand:'Friendship 729',name:'Presto Speed',speed:83,control:87,spin:80,hardness:42},
  {id:'f729-presto-spin',brand:'Friendship 729',name:'Presto Spin',speed:87,control:87,spin:73,hardness:42},
  {id:'f729-ritc',brand:'Friendship 729',name:'RITC',speed:74,control:80,spin:91,hardness:45},
  {id:'f729-sky-wing',brand:'Friendship 729',name:'Sky Wing',speed:67,control:87,spin:73,hardness:40},
  {id:'curl-p1v',brand:'TSP',name:'Curl P1V · 1.0 mm',speed:48,control:80,spin:67,hardness:30},
  {id:'drn-a-b-s-62',brand:'Dr. Neubauer',name:'A-B-S',speed:54,control:85,spin:22,hardness:28},
  {id:'drn-a-b-s-2-129',brand:'Dr. Neubauer',name:'A-B-S 2',speed:46,control:92,spin:22,hardness:28},
  {id:'drn-a-b-s-2-evo-145',brand:'Dr. Neubauer',name:'A-B-S 2 EVO',speed:45,control:94,spin:22,hardness:28},
  {id:'drn-a-b-s-2-pro-160',brand:'Dr. Neubauer',name:'A-B-S 2 PRO',speed:47,control:94,spin:22,hardness:28},
  {id:'drn-a-b-s-2-soft-138',brand:'Dr. Neubauer',name:'A-B-S 2 SOFT',speed:46,control:93,spin:22,hardness:28},
  {id:'drn-a-b-s-3-161',brand:'Dr. Neubauer',name:'A-B-S 3',speed:41,control:99,spin:22,hardness:28},
  {id:'drn-a-b-s-3-pro-178',brand:'Dr. Neubauer',name:'A-B-S 3 Pro',speed:43,control:96,spin:22,hardness:28},
  {id:'drn-aggressor-100',brand:'Dr. Neubauer',name:'Aggressor',speed:84,control:93,spin:79,hardness:40},
  {id:'drn-aggressor-evo-147',brand:'Dr. Neubauer',name:'Aggressor Evo',speed:87,control:92,spin:80,hardness:40},
  {id:'drn-aggressor-pro-139',brand:'Dr. Neubauer',name:'Aggressor Pro',speed:86,control:92,spin:79,hardness:40},
  {id:'drn-allround-premium-79',brand:'Dr. Neubauer',name:'Allround Premium',speed:50,control:85,spin:85,hardness:25},
  {id:'drn-allround-premium-2-130',brand:'Dr. Neubauer',name:'Allround Premium 2',speed:50,control:85,spin:86,hardness:25},
  {id:'drn-anti-special-61',brand:'Dr. Neubauer',name:'ANTI SPECIAL',speed:59,control:85,spin:22,hardness:28},
  {id:'drn-bison-95',brand:'Dr. Neubauer',name:'Bison',speed:54,control:82,spin:22,hardness:28},
  {id:'drn-bison-plus-116',brand:'Dr. Neubauer',name:'Bison+',speed:54,control:82,spin:22,hardness:28},
  {id:'drn-boomerang-classic-54',brand:'Dr. Neubauer',name:'Boomerang Classic',speed:45,control:91,spin:75,hardness:25},
  {id:'drn-buffalo-92',brand:'Dr. Neubauer',name:'Buffalo',speed:59,control:83,spin:22,hardness:28},
  {id:'drn-buffalo-plus-117',brand:'Dr. Neubauer',name:'Buffalo+',speed:50,control:83,spin:22,hardness:28},
  {id:'drn-defence-master-165',brand:'Dr. Neubauer',name:'Defence Master',speed:67,control:96,spin:99,hardness:45},
  {id:'drn-desperado-76',brand:'Dr. Neubauer',name:'Desperado',speed:50,control:83,spin:81,hardness:25},
  {id:'drn-desperado-2-118',brand:'Dr. Neubauer',name:'Desperado 2',speed:46,control:87,spin:83,hardness:25},
  {id:'drn-desperado-reloaded-168',brand:'Dr. Neubauer',name:'Desperado Reloaded',speed:50,control:90,spin:88,hardness:25},
  {id:'drn-desperado-reloaded-slow-version-with-dampening-sponge-169',brand:'Dr. Neubauer',name:'Desperado Reloaded - Slow version with dampening sponge',speed:41,control:90,spin:88,hardness:25},
  {id:'drn-diamant-40',brand:'Dr. Neubauer',name:'Diamant',speed:81,control:96,spin:78,hardness:40},
  {id:'drn-django-107',brand:'Dr. Neubauer',name:'Django',speed:59,control:90,spin:22,hardness:28},
  {id:'drn-dominance-166',brand:'Dr. Neubauer',name:'Dominance',speed:95,control:84,spin:99,hardness:45},
  {id:'drn-dominance-speed-157',brand:'Dr. Neubauer',name:'Dominance Speed',speed:95,control:76,spin:99,hardness:45},
  {id:'drn-dominance-speed-hard-180',brand:'Dr. Neubauer',name:'Dominance Speed Hard',speed:99,control:74,spin:99,hardness:45},
  {id:'drn-dominance-spin-156',brand:'Dr. Neubauer',name:'Dominance Spin',speed:95,control:76,spin:99,hardness:45},
  {id:'drn-dominance-spin-hard-167',brand:'Dr. Neubauer',name:'Dominance Spin Hard',speed:99,control:74,spin:99,hardness:45},
  {id:'drn-domination-23',brand:'Dr. Neubauer',name:'Domination',speed:86,control:78,spin:99,hardness:45},
  {id:'drn-domination-speed-2-96',brand:'Dr. Neubauer',name:'Domination Speed 2',speed:95,control:76,spin:98,hardness:45},
  {id:'drn-domination-speed-soft-125',brand:'Dr. Neubauer',name:'Domination Speed Soft',speed:95,control:80,spin:96,hardness:45},
  {id:'drn-explosion-132',brand:'Dr. Neubauer',name:'Explosion',speed:85,control:94,spin:83,hardness:42},
  {id:'drn-explosion-extreme-155',brand:'Dr. Neubauer',name:'Explosion Extreme',speed:95,control:93,spin:85,hardness:42},
  {id:'drn-explosion-pro-143',brand:'Dr. Neubauer',name:'Explosion Pro',speed:88,control:94,spin:85,hardness:42},
  {id:'drn-explosion-soft-164',brand:'Dr. Neubauer',name:'Explosion Soft',speed:95,control:98,spin:85,hardness:42},
  {id:'drn-fighter-66',brand:'Dr. Neubauer',name:'Fighter',speed:54,control:75,spin:75,hardness:25},
  {id:'drn-gangster-104',brand:'Dr. Neubauer',name:'Gangster',speed:49,control:87,spin:85,hardness:25},
  {id:'drn-gorilla-51',brand:'Dr. Neubauer',name:'Gorilla',speed:68,control:80,spin:22,hardness:28},
  {id:'drn-gorilla-new-version-with-a-b-s-dampening-sponge-69',brand:'Dr. Neubauer',name:'Gorilla - New version with A-B-S dampening sponge',speed:60,control:81,spin:22,hardness:28},
  {id:'drn-grizzly-52',brand:'Dr. Neubauer',name:'Grizzly',speed:69,control:85,spin:22,hardness:28},
  {id:'drn-grizzly-new-version-with-a-b-s-sponge-65',brand:'Dr. Neubauer',name:'Grizzly - New version with A-B-S sponge',speed:62,control:81,spin:22,hardness:28},
  {id:'drn-k-o-106',brand:'Dr. Neubauer',name:'K.O.',speed:83,control:94,spin:81,hardness:40},
  {id:'drn-k-o-extreme-170',brand:'Dr. Neubauer',name:'K.O. EXTREME',speed:85,control:84,spin:78,hardness:40},
  {id:'drn-k-o-pro-122',brand:'Dr. Neubauer',name:'K.O. PRO',speed:85,control:92,spin:82,hardness:40},
  {id:'drn-killer-81',brand:'Dr. Neubauer',name:'Killer',speed:85,control:94,spin:75,hardness:42},
  {id:'drn-killer-extreme-154',brand:'Dr. Neubauer',name:'Killer Extreme',speed:92,control:88,spin:80,hardness:42},
  {id:'drn-killer-pro-93',brand:'Dr. Neubauer',name:'Killer Pro',speed:88,control:88,spin:75,hardness:42},
  {id:'drn-killer-pro-evo-137',brand:'Dr. Neubauer',name:'Killer Pro Evo',speed:90,control:90,spin:80,hardness:42},
  {id:'drn-killer-soft-142',brand:'Dr. Neubauer',name:'Killer Soft',speed:88,control:96,spin:80,hardness:42},
  {id:'drn-leopard-11',brand:'Dr. Neubauer',name:'Leopard',speed:79,control:75,spin:75,hardness:42},
  {id:'drn-monster-classic-53',brand:'Dr. Neubauer',name:'Monster Classic',speed:68,control:85,spin:75,hardness:25},
  {id:'drn-nugget-114',brand:'Dr. Neubauer',name:'Nugget',speed:79,control:96,spin:80,hardness:42},
  {id:'drn-number-1-88',brand:'Dr. Neubauer',name:'Number 1',speed:50,control:87,spin:80,hardness:25},
  {id:'drn-pistol-34',brand:'Dr. Neubauer',name:'Pistol',speed:90,control:90,spin:75,hardness:42},
  {id:'drn-pistol-2-124',brand:'Dr. Neubauer',name:'Pistol 2',speed:90,control:90,spin:80,hardness:42},
  {id:'drn-power-attack-97',brand:'Dr. Neubauer',name:'Power Attack',speed:61,control:88,spin:22,hardness:28},
  {id:'drn-punch-162',brand:'Dr. Neubauer',name:'Punch',speed:52,control:83,spin:88,hardness:25},
  {id:'drn-rhino-105',brand:'Dr. Neubauer',name:'Rhino',speed:54,control:84,spin:22,hardness:28},
  {id:'drn-rhino-plus-115',brand:'Dr. Neubauer',name:'Rhino+',speed:54,control:84,spin:22,hardness:28},
  {id:'drn-special-defence-49',brand:'Dr. Neubauer',name:'Special Defence',speed:67,control:99,spin:96,hardness:45},
  {id:'drn-tarantula-119',brand:'Dr. Neubauer',name:'Tarantula',speed:50,control:90,spin:22,hardness:28},
  {id:'drn-terminator-77',brand:'Dr. Neubauer',name:'Terminator',speed:76,control:76,spin:81,hardness:42},
  {id:'drn-tornado-extreme-146',brand:'Dr. Neubauer',name:'Tornado Extreme',speed:95,control:88,spin:88,hardness:42},
  {id:'drn-tornado-supreme-153',brand:'Dr. Neubauer',name:'Tornado Supreme',speed:99,control:86,spin:88,hardness:42},
  {id:'drn-tornado-supreme-soft-163',brand:'Dr. Neubauer',name:'Tornado Supreme Soft',speed:99,control:88,spin:88,hardness:42},
  {id:'drn-tornado-ultra-10',brand:'Dr. Neubauer',name:'Tornado Ultra',speed:90,control:72,spin:75,hardness:42},
  {id:'drn-trouble-maker-131',brand:'Dr. Neubauer',name:'Trouble Maker',speed:47,control:89,spin:86,hardness:25},
  {id:'drn-trouble-maker-reloaded-179',brand:'Dr. Neubauer',name:'Trouble Maker Reloaded',speed:49,control:88,spin:75,hardness:25},
  {id:'drn-trouble-maker-reloaded-slow-version-with-dampening-sponge-184',brand:'Dr. Neubauer',name:'Trouble Maker Reloaded - Slow version with dampening sponge',speed:41,control:88,spin:75,hardness:25},
  {id:'drn-viper-91',brand:'Dr. Neubauer',name:'Viper',speed:50,control:85,spin:82,hardness:25},
  {id:'drn-viper-soft-94',brand:'Dr. Neubauer',name:'Viper Soft',speed:48,control:85,spin:85,hardness:25},
  {id:'palio-aeolus',brand:'Palio',name:'Aeolus · MAX',speed:91,control:67,spin:90,hardness:45},
  {id:'palio-ak47-blue',brand:'Palio',name:'AK47 Blue Sponge · 2.2 mm',speed:73,control:84,spin:80,hardness:39},
  {id:'palio-ak47-red',brand:'Palio',name:'AK47 Red Sponge · 2.2 mm',speed:86,control:72,spin:83,hardness:46},
  {id:'palio-ak47-yellow',brand:'Palio',name:'AK47 Yellow Sponge · 2.2 mm',speed:79,control:79,spin:82,hardness:43},
  {id:'palio-amigo',brand:'Palio',name:'Amigo · 2.2 mm',speed:72,control:82,spin:88,hardness:41.5},
  {id:'palio-blitz',brand:'Palio',name:'Blitz · MAX',speed:89,control:69,spin:91,hardness:45},
  {id:'palio-cj8000-38-41',brand:'Palio',name:'CJ8000 38–41° · 2.2 mm',speed:68,control:87,spin:86,hardness:39.5},
  {id:'palio-cj8000-40-42',brand:'Palio',name:'CJ8000 40–42° · 2.2 mm',speed:72,control:84,spin:87,hardness:41},
  {id:'palio-cj8000-42-44',brand:'Palio',name:'CJ8000 42–44° · 2.2 mm',speed:76,control:81,spin:88,hardness:43},
  {id:'palio-cj8000-45-47',brand:'Palio',name:'CJ8000 45–47° · 2.2 mm',speed:82,control:75,spin:89,hardness:46},
  {id:'palio-cj8000-allround',brand:'Palio',name:'CJ8000 Allround · 2.2 mm',speed:66,control:89,spin:83,hardness:40},
  {id:'palio-cj8000-biotech-39-41',brand:'Palio',name:'CJ8000 Biotech 39–41° · 2.2 mm',speed:72,control:85,spin:88,hardness:40},
  {id:'palio-cj8000-biotech-40-42',brand:'Palio',name:'CJ8000 Biotech 40–42° · 2.2 mm',speed:76,control:82,spin:89,hardness:41},
  {id:'palio-cj8000-biotech-42-44',brand:'Palio',name:'CJ8000 Biotech 42–44° · 2.2 mm',speed:80,control:78,spin:90,hardness:43},
  {id:'palio-cj8000-light-fast',brand:'Palio',name:'CJ8000 Light Fast · 2.2 mm',speed:79,control:82,spin:82,hardness:39.5},
  {id:'palio-cj8000-light-fast-pro',brand:'Palio',name:'CJ8000 Light Fast PRO Blue Sponge · 2.2 mm',speed:84,control:77,spin:85,hardness:38.5},
  {id:'palio-cj8000-loop',brand:'Palio',name:'CJ8000 Loop · 2.2 mm',speed:72,control:84,spin:91,hardness:37},
  {id:'palio-cj8000-loop-biotech',brand:'Palio',name:'CJ8000 Loop Biotech · 2.2 mm',speed:77,control:80,spin:93,hardness:37},
  {id:'palio-cj8000-loop-type',brand:'Palio',name:'CJ8000 Loop Type · 2.2 mm',speed:70,control:86,spin:90,hardness:38},
  {id:'palio-cj8000-pro-blue',brand:'Palio',name:'CJ8000 PRO Blue Sponge · 2.2 mm',speed:85,control:74,spin:92,hardness:44.5},
  {id:'palio-cj8000-provincial-blue',brand:'Palio',name:'CJ8000 Provincial Blue Sponge · 2.2 mm',speed:87,control:72,spin:94,hardness:44},
  {id:'palio-cj8000-provincial-orange',brand:'Palio',name:'CJ8000 Provincial Orange Sponge · 2.2 mm',speed:83,control:77,spin:93,hardness:42},
  {id:'palio-ck531a',brand:'Palio',name:'CK531A · OX',speed:42,control:88,spin:70,hardness:25},
  {id:'palio-conqueror',brand:'Palio',name:'Conqueror · 2.0 mm',speed:86,control:72,spin:90,hardness:45},
  {id:'palio-conqueror-pro-gold',brand:'Palio',name:'Conqueror PRO Gold · 2.15 mm',speed:90,control:68,spin:95,hardness:52},
  {id:'palio-conqueror-pro-silver',brand:'Palio',name:'Conqueror PRO Silver · 2.15 mm',speed:87,control:75,spin:88,hardness:40},
  {id:'palio-drunken-dragon-backhand',brand:'Palio',name:'Drunken Dragon Backhand Tensor · 2.2 mm',speed:82,control:78,spin:88,hardness:38.5},
  {id:'palio-drunken-dragon-large-pore',brand:'Palio',name:'Drunken Dragon Large Pore · 2.2 mm',speed:84,control:75,spin:89,hardness:41.5},
  {id:'palio-emperor-dragon',brand:'Palio',name:'Emperor Dragon · 2.2 mm',speed:86,control:71,spin:90,hardness:42},
  {id:'palio-flying-dragon',brand:'Palio',name:'Flying Dragon · 2.0 mm',speed:82,control:77,spin:72,hardness:37},
  {id:'palio-hadou',brand:'Palio',name:'Hadou 40+ · 2.2 mm',speed:79,control:78,spin:91,hardness:42},
  {id:'palio-hidden-dragon-non-sticky',brand:'Palio',name:'Hidden Dragon Non-Sticky · 2.2 mm',speed:70,control:88,spin:89,hardness:35},
  {id:'palio-hidden-dragon-tensor',brand:'Palio',name:'Hidden Dragon Tensor · 2.2 mm',speed:78,control:81,spin:90,hardness:37.5},
  {id:'palio-hk1997-biotech',brand:'Palio',name:'HK1997 Biotech · 2.2 mm',speed:76,control:82,spin:90,hardness:37},
  {id:'palio-macro',brand:'Palio',name:'Macro · MAX',speed:82,control:78,spin:88,hardness:32.5},
  {id:'palio-macro-pro',brand:'Palio',name:'Macro Pro · MAX',speed:89,control:70,spin:91,hardness:47},
  {id:'palio-power-dragon',brand:'Palio',name:'Power Dragon · 2.0 mm',speed:86,control:72,spin:75,hardness:37},
  {id:'palio-the-way',brand:'Palio',name:'The Way · MAX',speed:80,control:76,spin:93,hardness:45},
  {id:'palio-thors',brand:'Palio',name:'Thor’s · MAX',speed:87,control:68,spin:96,hardness:54},
  {id:'palio-wildish-dragon',brand:'Palio',name:'Wildish Dragon · 2.2 mm',speed:91,control:65,spin:86,hardness:50},
  {id:'palio-wp1013',brand:'Palio',name:'WP1013 · 1.8 mm',speed:65,control:84,spin:65,hardness:38},
  {id:'loki-arthur-asia',brand:'Loki',name:'Arthur Asia · 2.1 mm',speed:85,control:70,spin:93,hardness:52},
  {id:'loki-arthur-china',brand:'Loki',name:'Arthur China · 2.1 mm',speed:82,control:72,spin:95,hardness:50},
  {id:'loki-arthur-diamond',brand:'Loki',name:'Arthur Diamond · 2.1 mm',speed:87,control:68,spin:94,hardness:53},
  {id:'loki-arthur-europe',brand:'Loki',name:'Arthur Europe · 2.1 mm',speed:84,control:71,spin:91,hardness:50},
  {id:'loki-kirin-k1',brand:'Loki',name:'Kirin K1 · 2.1 mm',speed:68,control:84,spin:82,hardness:42},
  {id:'loki-kirin-k3',brand:'Loki',name:'Kirin K3 · 2.1 mm',speed:73,control:80,spin:85,hardness:44},
  {id:'loki-kirin-k5',brand:'Loki',name:'Kirin K5 · 2.1 mm',speed:78,control:76,spin:87,hardness:46},
  {id:'loki-kirin-lp',brand:'Loki',name:'Kirin LP · OX',speed:43,control:86,spin:72,hardness:25},
  {id:'loki-kirin-mp',brand:'Loki',name:'Kirin MP · 1.8 mm',speed:72,control:81,spin:69,hardness:38},
  {id:'loki-kirin-sp',brand:'Loki',name:'Kirin SP · 2.0 mm',speed:77,control:78,spin:65,hardness:40},
  {id:'loki-rxton-i',brand:'Loki',name:'Rxton I · 2.1 mm',speed:66,control:85,spin:86,hardness:40},
  {id:'loki-rxton-i-gold',brand:'Loki',name:'Rxton I Gold · 2.1 mm',speed:68,control:84,spin:87,hardness:40},
  {id:'loki-rxton-i-super-tacky',brand:'Loki',name:'Rxton I Super Tacky · 2.1 mm',speed:65,control:86,spin:90,hardness:41},
  {id:'loki-rxton-iii-max',brand:'Loki',name:'Rxton III MAX · 2.1 mm',speed:74,control:80,spin:89,hardness:42},
  {id:'loki-rxton-iii-pro',brand:'Loki',name:'Rxton III PRO · 2.1 mm',speed:77,control:77,spin:91,hardness:43},
  {id:'loki-rxton-v-max',brand:'Loki',name:'Rxton V MAX · 2.1 mm',speed:80,control:75,spin:91,hardness:44},
  {id:'loki-rxton-v-neo-blue-sponge',brand:'Loki',name:'Rxton V NEO Blue Sponge · 2.1 mm',speed:82,control:73,spin:92,hardness:45},
  {id:'loki-rxton-vii',brand:'Loki',name:'Rxton VII · 2.1 mm',speed:84,control:71,spin:94,hardness:47},
  {id:'loki-rxton-ix-national',brand:'Loki',name:'Rxton IX National · 2.1 mm',speed:88,control:67,spin:95,hardness:50},
  {id:'loki-rxton-9-pro-player-edition',brand:'Loki',name:'Rxton 9 PRO Player Edition · 2.1 mm',speed:90,control:65,spin:95,hardness:51},
  {id:'loki-telson-100',brand:'Loki',name:'Telson 100 · 2.1 mm',speed:86,control:70,spin:87,hardness:48},
  {id:'loki-telson-china',brand:'Loki',name:'Telson China · 2.1 mm',speed:84,control:72,spin:92,hardness:50},
  {id:'loki-telson-germany',brand:'Loki',name:'Telson Germany · 2.1 mm',speed:88,control:68,spin:89,hardness:47.5},
  {id:'loki-telson-speed',brand:'Loki',name:'Telson Speed · 2.1 mm',speed:91,control:64,spin:86,hardness:49}
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
  ,{id:'stiga-dna-dragon-grip-55',brand:'STIGA',name:'DNA Dragon Grip 55 · 2.1 mm',speed:84,control:80,spin:95,hardness:55}
  ,{id:'stiga-dna-dragon-power-525',brand:'STIGA',name:'DNA Dragon Power 52.5 · 2.1 mm',speed:86,control:72,spin:94,hardness:52.5}
  ,{id:'stiga-dna-dragon-power-55',brand:'STIGA',name:'DNA Dragon Power 55 · 2.1 mm',speed:89,control:69,spin:95,hardness:55}
  ,{id:'stiga-dna-dragon-power-575',brand:'STIGA',name:'DNA Dragon Power 57.5 · 2.1 mm',speed:92,control:65,spin:95,hardness:57.5}
  ,{id:'stiga-dna-hybrid-55',brand:'STIGA',name:'DNA Hybrid 55 · 2.1 mm',speed:90,control:67,spin:94,hardness:55}
  ,{id:'stiga-dna-hybrid-h',brand:'STIGA',name:'DNA Hybrid H · 2.1 mm',speed:84,control:72,spin:93,hardness:50}
  ,{id:'stiga-dna-hybrid-m',brand:'STIGA',name:'DNA Hybrid M · 2.1 mm',speed:80,control:76,spin:91,hardness:47.5}
  ,{id:'stiga-dna-hybrid-xh',brand:'STIGA',name:'DNA Hybrid XH · 2.1 mm',speed:88,control:68,spin:94,hardness:52.5}
  ,{id:'stiga-dna-platinum-h',brand:'STIGA',name:'DNA Platinum H · 2.1 mm',speed:86,control:72,spin:92,hardness:50}
  ,{id:'stiga-dna-platinum-m',brand:'STIGA',name:'DNA Platinum M · 2.1 mm',speed:82,control:76,spin:91,hardness:47.5}
  ,{id:'stiga-dna-platinum-s',brand:'STIGA',name:'DNA Platinum S · 2.1 mm',speed:77,control:80,spin:90,hardness:42.5}
  ,{id:'stiga-dna-platinum-xh',brand:'STIGA',name:'DNA Platinum XH · 2.1 mm',speed:89,control:68,spin:93,hardness:52.5}
  ,{id:'stiga-eco-future-m',brand:'STIGA',name:'ECO Future M · 2.0 mm',speed:62,control:82,spin:78,hardness:47.5}
  ,{id:'stiga-helix-hybrid-55',brand:'STIGA',name:'Helix Hybrid 55 · 2.2 mm',speed:92,control:65,spin:96,hardness:55}
  ,{id:'stiga-helix-hybrid-h',brand:'STIGA',name:'Helix Hybrid H · 2.2 mm',speed:86,control:72,spin:95,hardness:50}
  ,{id:'stiga-helix-hybrid-m',brand:'STIGA',name:'Helix Hybrid M · 2.2 mm',speed:83,control:76,spin:94,hardness:47.5}
  ,{id:'stiga-helix-hybrid-xh',brand:'STIGA',name:'Helix Hybrid XH · 2.2 mm',speed:90,control:68,spin:95,hardness:52.5}
  ,{id:'stiga-helix-platinum-55',brand:'STIGA',name:'Helix Platinum 55 · 2.2 mm',speed:91,control:66,spin:94,hardness:55}
  ,{id:'stiga-helix-platinum-h',brand:'STIGA',name:'Helix Platinum H · 2.2 mm',speed:86,control:71,spin:94,hardness:50}
  ,{id:'stiga-helix-platinum-m',brand:'STIGA',name:'Helix Platinum M · 2.2 mm',speed:83,control:75,spin:93,hardness:47.5}
  ,{id:'stiga-helix-platinum-xh',brand:'STIGA',name:'Helix Platinum XH · 2.2 mm',speed:90,control:67,spin:94,hardness:52.5}
  ,{id:'stiga-horizontal-20',brand:'STIGA',name:'Horizontal 20 · 1.0 mm',speed:42,control:91,spin:55,hardness:20}
  ,{id:'stiga-mantra-control',brand:'STIGA',name:'Mantra Control · 2.0 mm',speed:65,control:86,spin:84,hardness:45}
  ,{id:'stiga-mantra-pro-h',brand:'STIGA',name:'Mantra Pro H · 2.1 mm',speed:84,control:72,spin:91,hardness:50}
  ,{id:'stiga-mantra-pro-m',brand:'STIGA',name:'Mantra Pro M · 2.1 mm',speed:80,control:77,spin:90,hardness:47}
  ,{id:'stiga-mantra-pro-m-cybershape',brand:'STIGA',name:'Mantra Pro M Cybershape · 2.1 mm',speed:80,control:77,spin:90,hardness:47}
  ,{id:'stiga-mantra-pro-xh',brand:'STIGA',name:'Mantra Pro XH · 2.1 mm',speed:87,control:69,spin:92,hardness:53}
  ,{id:'stiga-mantra-sound',brand:'STIGA',name:'Mantra Sound · 2.1 mm',speed:72,control:82,spin:86,hardness:40}
  ,{id:'stiga-star-future-s',brand:'STIGA',name:'Star Future S · 2.0 mm',speed:55,control:88,spin:72,hardness:45}
  ,{id:'stiga-symmetry',brand:'STIGA',name:'Symmetry · 1.8 mm',speed:65,control:78,spin:76,hardness:47.5}
  ,{id:'stiga-vertical-20',brand:'STIGA',name:'Vertical 20 · 1.0 mm',speed:40,control:89,spin:58,hardness:20}
  ,{id:'stiga-vertical-55',brand:'STIGA',name:'Vertical 55 · 1.0 mm',speed:45,control:85,spin:58,hardness:22}
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

function customThicknessPlaceholder(){return isEnglish()?'Other thickness (mm)':'Iná hrúbka (mm)';}
function activateCustomThickness(setup,part){
  const field=$( `${setup}-${part}-thickness` );
  if(field.tagName==='INPUT'){field.value='';field.focus();return;}
  const input=document.createElement('input');
  input.id=field.id;input.type='number';input.min='0';input.max='4';input.step='0.1';input.inputMode='decimal';input.className='thickness-input';input.placeholder=customThicknessPlaceholder();input.setAttribute('aria-label',customThicknessPlaceholder());input.dataset.customThickness='true';
  input.addEventListener('input',updateStats);input.addEventListener('change',updateStats);
  field.replaceWith(input);input.focus();
}
function renderThickness(setup,part,modelId){
  const modelIdToUse=modelId||$( `${setup}-${part}` ).value;const item=collection(part).find(product=>product.id===modelIdToUse);const nominal=item?thicknessFrom(item):'2.0 mm',chosen=thicknessOptions.includes(nominal)?nominal:'INÉ',id=`${setup}-${part}-thickness`;
  let field=$(id);
  if(field.tagName!=='SELECT'){const select=document.createElement('select');select.id=id;select.setAttribute('aria-label',isEnglish()?'Rubber thickness':'Hrúbka poťahu');field.replaceWith(select);field=select;}
  field.innerHTML=thicknessOptions.map(value=>option(value,isEnglish()&&value==='INÉ'?'OTHER':value,value===chosen)).join('');
  field.onchange=()=>{if(field.value==='INÉ')activateCustomThickness(setup,part);else updateStats();};
}

function renderModels(setup,part,modelId){
  const items=collection(part), brand=$( `${setup}-${part}-brand` ).value;
  const allowed=items.filter(item=>item.brand===brand).sort((a,b)=>a.name.localeCompare(b.name,'en'));
  const model=$( `${setup}-${part}` );
  const other=$( `${setup}-${part}-other` );
  if(!brand){
    model.innerHTML=option('','',true); model.disabled=true;
    if(part!=='blade')$( `${setup}-${part}-thickness` ).innerHTML=option('','',true);
    other.classList.remove('hidden'); return;
  }
  if(brand==='__other__'){
    model.innerHTML=option('__custom__',document.documentElement.lang==='en'?'Custom model':'Vlastný model / Custom model',true); model.disabled=true;
    other.classList.remove('hidden'); return;
  }
  model.disabled=false; other.classList.add('hidden');
  model.innerHTML=allowed.map(item=>option(item.id,part==='blade'?item.name:modelLabel(item),item.id===modelId)).join('');
  if(!model.value) model.value=allowed[0].id;
  if(part!=='blade')renderThickness(setup,part,model.value);
}
function initialize(){
  const bladeYears=Array.from({length:29},(_,index)=>2026-index);
  ['current','target'].forEach(setup=>{
    const yearSelect=$( `${setup}-blade-year` );
    yearSelect.innerHTML=bladeYears.map(year=>option(String(year),String(year),year===2026)).join('');
    yearSelect.addEventListener('change',()=>{if(!$('results').classList.contains('hidden'))compare(false);});
  });
  ['current','target'].forEach(setup=>['blade','fh','bh'].forEach(part=>{
    const chosen=collection(part).find(item=>item.id===defaults[setup][part]);
    const brand=$( `${setup}-${part}-brand` );
    const brands=[...new Set(collection(part).map(item=>item.brand))].sort((first,second)=>{
      if(first==='Butterfly')return -1;
      if(second==='Butterfly')return 1;
      return first.localeCompare(second,'en',{sensitivity:'base'});
    });
    brand.innerHTML=option('','')+brands.map(item=>option(item,item,item===chosen.brand)).join('')+option('__other__','INÉ / OTHER');
    renderModels(setup,part,chosen.id);
    brand.addEventListener('change',()=>{renderModels(setup,part);updateStats();});
    $( `${setup}-${part}` ).addEventListener('change',()=>{if(part!=='blade')renderThickness(setup,part);updateStats();});
    const clearCatalogChoice=()=>{
      brand.selectedIndex=0;
      $( `${setup}-${part}` ).selectedIndex=-1;
      if(part!=='blade')$( `${setup}-${part}-thickness` ).selectedIndex=-1;
    };
    [$( `${setup}-${part}-other-brand` ),$( `${setup}-${part}-other-model` )].forEach(input=>{
      input.addEventListener('pointerdown',clearCatalogChoice);
      input.addEventListener('focus',clearCatalogChoice);
      input.addEventListener('keydown',clearCatalogChoice);
      input.addEventListener('input',()=>{clearCatalogChoice();updateStats();});
    });
  }));
  $('player-status').addEventListener('change',toggleLeague);
  $('language-toggle').addEventListener('click',toggleLanguage);
  toggleLeague();
  updateStats();
}
function selected(setup,part){
  const isRubber=part!=='blade';
  const selectedBrand=$( `${setup}-${part}-brand` ).value,otherBrand=$( `${setup}-${part}-other-brand` ).value.trim(),otherModel=$( `${setup}-${part}-other-model` ).value.trim();
  const custom=selectedBrand==='__other__'||(!selectedBrand&&Boolean(otherBrand||otherModel));
  const item=custom?{brand:otherBrand||(isEnglish()?'OTHER':'INÉ'),name:otherModel||(isEnglish()?'Custom model':'Vlastný model'),speed:70,control:70,spin:70,hardness:45}:collection(part).find(item=>item.id===$( `${setup}-${part}` ).value)||{brand:'',name:isEnglish()?'Custom model':'Vlastný model',speed:70,control:70,spin:70,hardness:45};
  if(!isRubber)return item;
  const thicknessField=$( `${setup}-${part}-thickness` ),customThickness=thicknessField.dataset.customThickness==='true',rawThickness=thicknessField.value||(customThickness?'2.0':'2.0 mm'),thickness=customThickness?`${rawThickness} mm`:rawThickness,displayThickness=thickness==='INÉ'?thicknessFrom(item):thickness,difference=thicknessNumber(displayThickness)-thicknessNumber(custom?'2.0 mm':thicknessFrom(item));
  return {...item,name:`${modelLabel(item)} · ${displayThickness}`,speed:clamp(item.speed+difference*13),control:clamp(item.control-difference*9),spin:clamp(item.spin+difference*5),thickness};
}
function toggleLeague(){const isRegistered=$('player-status').value==='registered',leagueWrap=$('league-wrap'),equivalentWrap=$('equivalent-wrap'),leagueSelect=$('league-level'),equivalentSelect=$('equivalent-level');leagueWrap.hidden=!isRegistered;equivalentWrap.hidden=isRegistered;leagueWrap.classList.toggle('hidden',!isRegistered);equivalentWrap.classList.toggle('hidden',isRegistered);leagueWrap.style.display=isRegistered?'block':'none';equivalentWrap.style.display=isRegistered?'none':'block';leagueSelect.disabled=!isRegistered;equivalentSelect.disabled=isRegistered;if(isRegistered)equivalentSelect.selectedIndex=-1;}
function isEnglish(){return document.documentElement.lang==='en';}
function submitFeedback(event){event.preventDefault();const message=$('feedback-message').value.trim();if(!message)return;const suggestions=JSON.parse(localStorage.getItem('racket-comparator-feedback')||'[]');suggestions.push({topic:$('feedback-type').value,email:$('feedback-email').value,message,createdAt:new Date().toISOString()});localStorage.setItem('racket-comparator-feedback',JSON.stringify(suggestions));$('feedback-status').textContent=isEnglish()?'Thank you — your suggestion is saved in this browser and ready for future submission.':'Ďakujeme — návrh je uložený v tomto prehliadači a pripravený na budúce odoslanie.';event.currentTarget.reset();}
function toggleLanguage(){
  const english=document.documentElement.lang!=='en',languageToggle=$('language-toggle');document.documentElement.lang=english?'en':'sk';
  languageToggle.innerHTML=`<span class="language-label">LANGUAGE</span><span class="language-flag" aria-hidden="true">${english?'🇸🇰':'🇬🇧'}</span>`;
  languageToggle.setAttribute('aria-label',english?'Prepnúť stránku do slovenčiny':'Switch page to English');
  languageToggle.title=english?'Slovenčina':'English';
  document.title=english?'RACKET COMPARATOR — compare table tennis setups':'POROVNÁVAČ RAKIET — porovnanie stolnotenisových zostáv';
  document.querySelector('meta[name="description"]').content=english?'Compare two table tennis setups based on your playing style.':'Porovnajte dve stolnotenisové zostavy podľa vášho herného štýlu.';
  document.querySelector('.brand span:last-child').textContent=english?'RACKET COMPARATOR':'POROVNÁVAČ RAKIET';
  document.querySelector('.header-note').textContent=english?'Choose better. Buy less blindly.':'Lepšia voľba, menej nákupov naslepo.';
  document.querySelector('.hero-title').innerHTML=english?'RACKET<br>COMPARATOR':'POROVNÁVAČ<br>RAKIET';
  document.querySelector('.hero .eyebrow').textContent=english?'EQUIPMENT THAT FITS YOUR GAME':'VÝBAVA, KTORÁ SEDÍ TVOJEJ HRE';
  document.querySelector('.hero-copy').textContent=english?'See how a blade and rubber change can affect your real game — not just a catalog rating.':'Zisti, ako sa zmena dreva a poťahov prejaví v tvojej hre — nie iba v katalógu.';
  document.querySelector('.scroll-cta').innerHTML=english?'Start comparing <span>↓</span>':'Začať porovnanie <span>↓</span>';
  document.querySelectorAll('[data-sk][data-en]').forEach(element=>element.textContent=english?element.dataset.en:element.dataset.sk);
  document.querySelectorAll('[data-placeholder-sk][data-placeholder-en]').forEach(element=>element.placeholder=english?element.dataset.placeholderEn:element.dataset.placeholderSk);
  document.querySelectorAll('[data-aria-sk][data-aria-en]').forEach(element=>element.setAttribute('aria-label',english?element.dataset.ariaEn:element.dataset.ariaSk));
  document.querySelectorAll('option[value="__other__"]').forEach(optionElement=>optionElement.textContent=english?'OTHER':'INÉ / OTHER');
  document.querySelectorAll('option[value="__custom__"]').forEach(optionElement=>optionElement.textContent=english?'Custom model':'Vlastný model / Custom model');
  ['current','target'].forEach(setup=>['blade','fh','bh'].forEach(part=>{
    $( `${setup}-${part}-other-brand` ).placeholder=english?(part==='blade'?'Other blade brand':'Other rubber brand'):(part==='blade'?'Iná značka dreva':'Iná značka poťahu');
    $( `${setup}-${part}-other-model` ).placeholder=english?(part==='blade'?'Blade model':'Rubber model'):(part==='blade'?'Model dreva':'Model poťahu');
  }));
  ['current','target'].forEach(setup=>['fh','bh'].forEach(part=>renderThickness(setup,part)));
  $('feedback-status').textContent='';
  updateStats();
  if(!$('results').classList.contains('hidden'))compare(false);
}
function setupData(setup){const blade=selected(setup,'blade'),fh=selected(setup,'fh'),bh=selected(setup,'bh'),year=Number($( `${setup}-blade-year` ).value)||2026;return{blade,fh,bh,year,speed:Math.round(blade.speed*.48+fh.speed*.30+bh.speed*.22),control:Math.round(blade.control*.48+fh.control*.30+bh.control*.22),spin:Math.round(blade.spin*.38+fh.spin*.37+bh.spin*.25)};}
function updateStats(){const labels=isEnglish()?['SPEED','CONTROL','SPIN']:['RÝCHLOSŤ','KONTROLA','SPIN'];['current','target'].forEach(setup=>{const d=setupData(setup);$( `${setup}-stats` ).innerHTML=labels.map((name,index)=>`<span class="mini-stat">${name}<b>${[d.speed,d.control,d.spin][index]}</b></span>`).join('');});}
function profile(){return Object.fromEntries(Object.keys(values).map(key=>[key,values[key][$(key).value]]));}
function wordDelta(value){const abs=Math.abs(value);return abs<3?'takmer bez zmeny':abs<9?'mierne':abs<18?'citeľne':'výrazne';}
function score10(value){const score=(Math.max(1,Math.min(10,value/10))).toFixed(1);return (isEnglish()?score:score.replace('.',','))+'/10';}
function bladeName(setup){return modelLabel(selected(setup,'blade'));}
function comparisonYearNotices(current,target,english=false){
  const current2026=current.year===2026&&target.year===2026;
  if(english)return current2026?[
    'We are comparing current 2026 blades and rubbers.',
    'The playing assessment also uses current 2026 blades and rubbers.',
    'The final verdict compares current 2026 blades and rubbers.'
  ]:[
    `The selected blade versions are from ${current.year} and ${target.year}; rubbers use the current 2026 catalogue.`,
    `The analysis respects blade years ${current.year} and ${target.year}, with current 2026 rubber data.`,
    `The final verdict uses the selected blade years and current 2026 rubbers.`
  ];
  return current2026?[
    'Porovnávame aktuálne drevá a poťahy z roku 2026.',
    'Aj hodnotenie hry porovnáva aktuálne drevá a poťahy z roku 2026.',
    'Záverečný verdikt porovnáva aktuálne drevá a poťahy z roku 2026.'
  ]:[
    `Vybrané verzie driev sú z rokov ${current.year} a ${target.year}; poťahy používajú aktuálny katalóg 2026.`,
    `Analýza rešpektuje roky driev ${current.year} a ${target.year} a aktuálne údaje poťahov 2026.`,
    `Záverečný verdikt používa vybrané roky driev a aktuálne poťahy 2026.`
  ];
}
function fourWayAudit(current,target,delta,english=false){
  const a=bladeName('current'),b=bladeName('target');
  const closeResult=Math.abs(delta.speed)<4&&Math.abs(delta.control)<4&&Math.abs(delta.spin)<4;
  const hardRubbers=[current.fh,current.bh,target.fh,target.bh].filter(rubber=>rubber.hardness>=48).length;
  const constructionOk=Boolean(current.blade.type&&target.blade.type&&current.blade.feel&&target.blade.feel);
  if(english){
    const checks=[
      ['1 / Technical data',constructionOk?`The construction, feel, speed, control and spin records for ${a} and ${b} are internally consistent.`:'The catalogue lacks part of the construction data, so the verdict is intentionally more cautious.'],
      ['2 / Complete-setup synergy',hardRubbers>=3?'The check detected a predominantly hard rubber combination; timing, physical input and blade stiffness therefore carry extra weight.':'The blade–FH–BH interaction does not show an unusually high hardness risk.'],
      ['3 / Playing-situation cross-check',`The direction of the verdict was checked separately for short play, opening topspin, block/counterattack and mid-distance play.`],
      ['4 / Contradiction and robustness check',closeResult?'The numerical differences are small. The result is presented as a tendency, not as a decisive winner.':'The main differences remain in the same direction after checking speed, control and spin separately.']
    ];
    return `<section class="validation-audit"><div class="validation-heading"><div><span>4× SELF-CHECK COMPLETED</span><h3>Result verification before the verdict</h3></div><b>4/4</b></div><div class="validation-grid">${checks.map(check=>`<article><h4>${check[0]}</h4><p>${check[1]}</p></article>`).join('')}</div><div class="review-check"><strong>Blogs and player reviews:</strong> community experience is used as a reasonableness check where verified model-specific review data is available. It never overrides official construction data, and the page does not claim a live web search.</div></section>`;
  }
  const checks=[
    ['1 / Technické údaje',constructionOk?`Konštrukcia, pocit, rýchlosť, kontrola a spin modelov ${a} a ${b} sú vnútorne konzistentné.`:'V katalógu chýba časť konštrukčných údajov, preto je verdikt zámerne opatrnejší.'],
    ['2 / Súhra celej zostavy',hardRubbers>=3?'Kontrola zachytila prevažne tvrdú kombináciu poťahov; väčšiu váhu preto dostáva načasovanie, fyzické nasadenie a tuhosť dreva.':'Vzájomné pôsobenie dreva, FH a BH nevykazuje neobvykle vysoké riziko tvrdosti.'],
    ['3 / Kontrola herných situácií','Smer verdiktu bol samostatne preverený pri krátkej hre, prvom topspine, bloku/protiútoku a hre v polodistancii.'],
    ['4 / Kontrola rozporov a odolnosti',closeResult?'Číselné rozdiely sú malé. Výsledok sa preto uvádza ako tendencia, nie ako jednoznačný víťaz.':'Hlavné rozdiely zostali v rovnakom smere aj po oddelenej kontrole rýchlosti, kontroly a spinu.']
  ];
  return `<section class="validation-audit"><div class="validation-heading"><div><span>4× VNÚTORNÁ KONTROLA DOKONČENÁ</span><h3>Overenie výsledku pred verdiktom</h3></div><b>4/4</b></div><div class="validation-grid">${checks.map(check=>`<article><h4>${check[0]}</h4><p>${check[1]}</p></article>`).join('')}</div><div class="review-check"><strong>Blogy a recenzie hráčov:</strong> skúsenosti komunity slúžia ako kontrola rozumnosti tam, kde máme overené recenzie ku konkrétnemu modelu. Nikdy neprepisujú oficiálne konštrukčné údaje a stránka netvrdí, že pri kliknutí vykonáva živé vyhľadávanie webu.</div></section>`;
}
function briefResult(current,target,delta){
  if(isEnglish())return briefResultEnglish(current,target,delta);
  const currentBlade=bladeName('current'),targetBlade=bladeName('target'),sameRubbers=current.fh.name===target.fh.name&&current.bh.name===target.bh.name;
  const faster=delta.speed>=0?targetBlade:currentBlade,controlled=delta.control>=0?targetBlade:currentBlade,spinny=delta.spin>=0?targetBlade:currentBlade;
  const hardCurrent=current.blade.feel==='tvrdý'||current.blade.feel==='pevný',hardTarget=target.blade.feel==='tvrdý'||target.blade.feel==='pevný';
  const closeTable=hardCurrent!==hardTarget?(hardCurrent?currentBlade:targetBlade):faster;
  const rows=[['Rýchlosť',score10(current.speed),score10(target.speed)],['Kontrola pri pomalej hre',score10(current.control),score10(target.control)],['Cit v ruke',current.blade.feel==='mäkký'?'9,0/10':current.blade.feel==='pružný'?'8,5/10':'7,0/10',target.blade.feel==='mäkký'?'9,0/10':target.blade.feel==='pružný'?'8,5/10':'7,0/10'],['Stabilita pri tvrdom údere',score10(current.speed+8),score10(target.speed+8)],['Krátka hra',score10(current.control+3),score10(target.control+3)],['Blok a protiútok',score10(current.speed+4),score10(target.speed+4)],['Prvý topspin',score10(current.spin),score10(target.spin)],['Hra v polodistancii',score10(current.speed+2),score10(target.speed+2)]];
  const notices=comparisonYearNotices(current,target),rubberLine=sameRubbers?`Obe zostavy používajú <b>${current.fh.name}</b> na FH a <b>${current.bh.name}</b> na BH.`:`Poťahy sa medzi zostavami líšia, preto porovnanie zohľadňuje aj ich rýchlosť, spin a zvolenú hrúbku.`;
  return `<div class="brief-result"><p class="brief-rubber"><b>${notices[0]}</b> ${rubberLine}</p>${fourWayAudit(current,target,delta)}<h2 class="short-result-title">KRÁTKY VÝSLEDOK</h2><table class="brief-table"><thead><tr><th>Vlastnosť</th><th>${currentBlade} (${current.year})</th><th>${targetBlade} (${target.year})</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}</tbody></table><div class="brief-grid"><section><h3>Hra pri stole</h3><p>Pri krátkej hre a príjme bude viac istoty ponúkať <b>${controlled}</b>. Pre aktívny blok, BH punch a rýchly flick má väčší potenciál <b>${closeTable}</b>.</p></section><section><h3>Topspiny</h3><p>Viac spinu a oblúka prinesie <b>${spinny}</b>. <b>${faster}</b> bude pri správnom načasovaní nebezpečnejší v druhom topspine a pri zakončení.</p></section><section><h3>Blok a protiútok</h3><p>Pri silnej lopte sú výhodou pevnejší kontakt a rýchlosť — tu má prednosť <b>${faster}</b>. <b>${controlled}</b> dá viac času na tlmenie a zmenu tempa.</p></section><section><h3>Polodistancia</h3><p><b>${faster}</b> poskytne väčšiu rezervu hĺbky a prieniku. <b>${controlled}</b> lepšie pomáha pri vysokom oblúku a bezpečnejších spinových sériách.</p></section></div><div class="brief-takeaway"><h3>Čo pocítiš najviac</h3><ul><li>${faster}: rýchlejší odchod lopty a viac rezervy pri útoku.</li><li>${controlled}: viac spätnej väzby a pokojnejšia krátka hra.</li><li>${notices[1]}</li><li>Presný výsledok ešte ovplyvní hmotnosť konkrétneho kusu a tvoje načasovanie.</li></ul></div><p class="brief-method"><b>${notices[2]}</b> Porovnanie vychádza z konštrukcie dreva, parametrov poťahov a zvolenej hrúbky. Je to praktická predikcia, nie náhrada fyzického testu.</p></div>${longAnalysis(current,target,delta)}`;
}
function englishBladeTerm(value){const exact={'drevený':'woody','drevitý':'woody','kombinovaný':'combined','mäkký':'soft','pevný':'solid','pružný':'flexible','stredný':'medium','tvrdý':'hard'};if(exact[value])return exact[value];return value.replace('1-vrstvové','1-ply').replace('3-vrstvové','3-ply').replace('5-vrstvové','5-ply').replace('7-vrstvové','7-ply').replaceAll('drevo','wood').replace('defenzívne','defensive').replace('útočné','offensive').replace('kombinačné','combination').replace('ofenzívne','offensive');}
function briefResultEnglish(current,target,delta){
  const currentBlade=bladeName('current'),targetBlade=bladeName('target'),sameRubbers=current.fh.name===target.fh.name&&current.bh.name===target.bh.name;
  const faster=delta.speed>=0?targetBlade:currentBlade,controlled=delta.control>=0?targetBlade:currentBlade,spinny=delta.spin>=0?targetBlade:currentBlade;
  const hardCurrent=['tvrdý','pevný'].includes(current.blade.feel),hardTarget=['tvrdý','pevný'].includes(target.blade.feel);
  const closeTable=hardCurrent!==hardTarget?(hardCurrent?currentBlade:targetBlade):faster;
  const feelScore=blade=>blade.feel==='mäkký'?'9.0/10':blade.feel==='pružný'?'8.5/10':'7.0/10';
  const rows=[['Speed',score10(current.speed),score10(target.speed)],['Control in the slow game',score10(current.control),score10(target.control)],['Hand feedback',feelScore(current.blade),feelScore(target.blade)],['Stability on hard shots',score10(current.speed+8),score10(target.speed+8)],['Short game',score10(current.control+3),score10(target.control+3)],['Block and counterattack',score10(current.speed+4),score10(target.speed+4)],['Opening topspin',score10(current.spin),score10(target.spin)],['Mid-distance play',score10(current.speed+2),score10(target.speed+2)]];
  const notices=comparisonYearNotices(current,target,true),rubberLine=sameRubbers?`Both setups use <b>${current.fh.name}</b> on the FH and <b>${current.bh.name}</b> on the BH.`:`The rubbers differ between the setups, so the comparison also accounts for their speed, spin and selected thickness.`;
  return `<div class="brief-result"><p class="brief-rubber"><b>${notices[0]}</b> ${rubberLine}</p>${fourWayAudit(current,target,delta,true)}<h2 class="short-result-title">SHORT RESULT</h2><table class="brief-table"><thead><tr><th>Attribute</th><th>${currentBlade} (${current.year})</th><th>${targetBlade} (${target.year})</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join('')}</tbody></table><div class="brief-grid"><section><h3>Close-to-table play</h3><p><b>${controlled}</b> should offer more confidence in the short game and receive. <b>${closeTable}</b> has greater potential for active blocks, BH punches and quick flicks.</p></section><section><h3>Topspins</h3><p><b>${spinny}</b> should produce more spin and arc. With good timing, <b>${faster}</b> will be more dangerous on the second topspin and finishing shots.</p></section><section><h3>Block and counterattack</h3><p>A firmer contact and speed help against powerful balls, giving <b>${faster}</b> the edge. <b>${controlled}</b> gives you more time to absorb pace and change rhythm.</p></section><section><h3>Mid-distance</h3><p><b>${faster}</b> provides more depth and penetration in reserve. <b>${controlled}</b> better supports a higher arc and safer spin rallies.</p></section></div><div class="brief-takeaway"><h3>What you will feel most</h3><ul><li>${faster}: quicker ball release and more attacking reserve.</li><li>${controlled}: more feedback and a calmer short game.</li><li>${notices[1]}</li><li>The exact result also depends on the weight of your specific blade and your timing.</li></ul></div><p class="brief-method"><b>${notices[2]}</b> This comparison is based on blade construction, rubber parameters and selected thickness. It is a practical prediction, not a substitute for a physical test.</p></div>${longAnalysisEnglish(current,target,delta)}`;
}
function longAnalysisEnglish(current,target,delta){
  const a=bladeName('current'),b=bladeName('target'),faster=delta.speed>=0?b:a,controlled=delta.control>=0?b:a;
  const same=current.fh.name===target.fh.name&&current.bh.name===target.bh.name;
  return `<section class="long-analysis"><h2>DETAILED ANALYSIS:</h2><p class="long-lead">We compare <b>${a}</b> and <b>${b}</b>. ${same?'The rubbers are identical, so the difference in play will mainly come from the blade.':'Both blade and rubbers differ, so the complete setup creates the final feel.'}</p><div class="long-analysis-grid"><article><h3>1. Construction and basic character</h3><p><b>${a}</b> is listed as ${englishBladeTerm(current.blade.type)} with a ${englishBladeTerm(current.blade.feel)} feel. <b>${b}</b> uses ${englishBladeTerm(target.blade.type)} and has a ${englishBladeTerm(target.blade.feel)} character. Material, composite placement and contact hardness determine how early the blade returns energy.</p></article><article><h3>2. First balls after switching</h3><p>You will first notice how quickly the ball leaves the racket. <b>${faster}</b> will feel more direct on active contact and provide more reserve. <b>${controlled}</b> gives you more time to feel contact and adjust the racket angle.</p></article><article><h3>3. Short game and serve receive</h3><p><b>${controlled}</b> has the edge on short receives, drop shots and delicate touches. <b>${faster}</b> provides more pressure for aggressive flicks, banana flicks and direct attacks from serve.</p></article><article><h3>4. Opening FH topspin against backspin</h3><p><b>${controlled}</b> will usually make a safe, arcing opening topspin and thin contact easier. <b>${faster}</b> demands better acceleration and contact in front of the body, but produces a quicker, more penetrating ball with correct technique.</p></article><article><h3>5. Second topspin and pressure into block</h3><p>When the ball is higher or the opponent's block returns, <b>${faster}</b> has more potential to play forward, hard and deep. <b>${controlled}</b> helps when you want to maintain a safe spin rally and vary the pace.</p></article><article><h3>6. BH topspin, block and counterattack</h3><p>On the BH side, the firmer and faster blade rewards a short active stroke, punch and block. The more sensitive blade gives you extra time to open against backspin. Against a strong topspin, <b>${faster}</b> offers more stability and <b>${controlled}</b> more absorption options.</p></article><article><h3>7. Mid-distance and play away from the table</h3><p><b>${faster}</b> has more depth in reserve and needs less of a maximum swing. <b>${controlled}</b> helps with a higher arc and lifting low balls, but you will need to generate energy more often with your body and forearm.</p></article><article><h3>8. Serves and forgiveness</h3><p>Touch and rubber matter more on serve than the blade's maximum speed. <b>${controlled}</b> has an advantage on delicate short serves; <b>${faster}</b> on fast long serves. A sensitive blade forgives slow technical errors, while a stable blade handles powerful strokes better.</p></article><article><h3>9. Effect of the specific blade</h3><p>Weight, balance, handle shape and actual rubber thickness can noticeably alter the difference. With two harder rubbers, even a few grams can affect BH switching speed and forearm fatigue.</p></article><article><h3>10. Selection verdict</h3><p>Choose <b>${controlled}</b> if feel, short game, a safe opening topspin and technical training are priorities. Choose <b>${faster}</b> for active blocks, counterattacks, mid-distance pressure and harder finishing. Testing with your own rubbers remains the best confirmation.</p></article></div></section>`;
}
function longAnalysis(current,target,delta){
  const a=bladeName('current'),b=bladeName('target'),faster=delta.speed>=0?b:a,controlled=delta.control>=0?b:a,spinny=delta.spin>=0?b:a;
  const same=current.fh.name===target.fh.name&&current.bh.name===target.bh.name;
  return `<section class="long-analysis"><h2>DLHŠIA ANALÝZA:</h2><p class="long-lead">Porovnávame <b>${a}</b> a <b>${b}</b>. ${same?'Poťahy sú rovnaké, preto rozdiel v hre bude vychádzať hlavne z dreva.':'Drevo aj poťahy sa líšia, preto výsledný pocit vytvára celá zostava.'}</p><div class="long-analysis-grid"><article><h3>1. Konštrukcia a základný charakter</h3><p><b>${a}</b> je v databáze vedené ako ${current.blade.type} s ${current.blade.feel} pocitom. <b>${b}</b> používa ${target.blade.type} a má ${target.blade.feel} charakter. Materiál, poloha kompozitu a tvrdosť kontaktu rozhodujú o tom, ako skoro drevo začne vracať energiu.</p></article><article><h3>2. Prvé lopty po výmene</h3><p>Najrýchlejšie si všimneš rozdiel v tom, ako skoro lopta opúšťa raketu. <b>${faster}</b> bude pôsobiť pri aktívnom kontakte priamejšie a s väčšou rezervou. <b>${controlled}</b> dá viac času cítiť kontakt a upraviť uhol rakety.</p></article><article><h3>3. Krátka hra a príjem podania</h3><p>Pri krátkom príjme, stop-balle a jemnom dotyku má prednosť <b>${controlled}</b>. Pri agresívnom flicku, banáne alebo priamom útoku z podania poskytne viac tlaku <b>${faster}</b>. Pri citlivých poťahoch rozhoduje presnosť uhla a aktívna ruka.</p></article><article><h3>4. Prvý FH topspin proti spodnej rotácii</h3><p><b>${controlled}</b> bude typicky jednoduchší na bezpečný, oblúkovejší prvý topspin a tenký kontakt. <b>${faster}</b> potrebuje lepšie zrýchlenie a kontakt pred telom, no pri správnej technike vytvorí rýchlejšiu a prenikavejšiu loptu.</p></article><article><h3>5. Druhý topspin a tlak do bloku</h3><p>Keď je lopta vyššie alebo sa vráti súperov blok, <b>${faster}</b> má väčší potenciál hrať viac dopredu, tvrdo a hlboko. <b>${controlled}</b> je výhodný, keď chceš držať bezpečnú spinovú sériu a meniť tempo.</p></article><article><h3>6. BH topspin, blok a protiútok</h3><p>Na BH bude pevnejšie a rýchlejšie drevo odmeňovať krátky aktívny pohyb, punch a blok. Citlivejšie drevo poskytne viac času na otvorenie proti spodnej rotácii. Pri silnom súperovom topspine má <b>${faster}</b> väčšiu stabilitu, <b>${controlled}</b> viac možností tlmenia.</p></article><article><h3>7. Polodistancia a hra ďalej od stola</h3><p>V polodistancii má <b>${faster}</b> väčšiu rezervu hĺbky a menej vyžaduje maximálny švih. <b>${controlled}</b> viac pomáha vysokým oblúkom a vytiahnutím nízkej lopty, ale energiu musíš častejšie vytvoriť vlastným telom a predlaktím.</p></article><article><h3>8. Servis a odpustenie chýb</h3><p>Pri servise je dôležitejší dotyk a poťah než samotná maximálna rýchlosť dreva. <b>${controlled}</b> má výhodu pri jemnom krátkom servise; <b>${faster}</b> pri rýchlom dlhom servise. Pomalé technické chyby odpúšťa viac citlivejšie drevo, silné údery stabilnejšie drevo.</p></article><article><h3>9. Vplyv konkrétneho kusu</h3><p>Hmotnosť, vyváženie, tvar rukoväte a skutočná hrúbka poťahov môžu rozdiel citeľne zmeniť. Pri dvoch tvrdších poťahoch môže aj rozdiel niekoľkých gramov rozhodnúť o rýchlosti BH prepínania a únave predlaktia.</p></article><article><h3>10. Verdikt pre výber</h3><p>Vyber <b>${controlled}</b>, ak je prioritou cit, krátka hra, bezpečný prvý topspin a technický tréning. Vyber <b>${faster}</b>, ak chceš aktívny blok, protiútok, tlak v polodistancii a tvrdšie zakončenie. Najlepšie rozhodnutie stále potvrdí test s vlastnými poťahmi.</p></article></div></section>`;
}
function compare(shouldScroll=true){
  const current=setupData('current'),target=setupData('target'),p=profile(),delta={speed:target.speed-current.speed,control:target.control-current.control,spin:target.spin-current.spin};
  const demanded=(target.speed>75?2:0)+(target.fh.hardness>47?1:0)+(target.bh.hardness>47?1:0),readiness=p.level+p.training+p['fh-skill']+p['bh-skill']+Math.max(0,p.footwork-1);
  let score=Math.max(42,Math.min(96,82-Math.max(0,demanded*3-readiness)*6+(delta.control>0?5:0)+(delta.spin>0?3:0)-(delta.speed>18?5:0)));score=Math.round(score);
  const english=isEnglish();
  const label=english?(score>=80?'A very promising change':score>=65?'A change with reasonable potential':'This change will require adaptation'):(score>=80?'Veľmi sľubná zmena':score>=65?'Zmena s rozumným potenciálom':'Zmena si vyžiada adaptáciu');
  $('result-title').textContent=`${bladeName('current')} (${current.year}) vs. ${bladeName('target')} (${target.year})`;$('result-summary').textContent=english?`A quick comparison of blade versions from ${current.year} and ${target.year}, with rubbers and selected thickness.`:`Rýchle porovnanie verzií driev z rokov ${current.year} a ${target.year}, poťahov a zvolenej hrúbky.`;$('score-value').textContent=score;$('score-ring').style.setProperty('--score',score);$('compatibility-label').textContent=label;$('compatibility-detail').textContent=english?(score>=80?'The change matches your technique and training frequency.':score>=65?'The setup makes sense, but it will require deliberate adaptation.':'The potential is high, but the setup may be less forgiving.'):(score>=80?'Zmena zodpovedá tvojej technike a frekvencii tréningov.':score>=65?'Zostava dáva zmysel, no bude vyžadovať vedomú adaptáciu.':'Potenciál je vysoký, ale zostava môže byť menej odpúšťajúca.');
  document.querySelector('.comparison-details').innerHTML=briefResult(current,target,delta);
  const results=$('results');results.classList.remove('hidden');if(shouldScroll)results.scrollIntoView({behavior:'smooth',block:'start'});
}
$('compare-button').addEventListener('click',compare);$('feedback-form').addEventListener('submit',submitFeedback);initialize();toggleLanguage();
