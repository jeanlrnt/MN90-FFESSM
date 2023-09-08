	/*------------------------------------------------------* 
	* Définitions des profondeurs en mètre des tables MN90. *
	*-------------------------------------------------------*/
	var Mn90Prof = [6,8,10,12,15,18,20,22,25,28,30,32,35,38,40,42,45,48,50,52,55,58,60,62,65];
	var Mn90Prof2 = [12,15,18,20,22,25,28,30,32,35,38,40,42,45,48,50,52,55,58,60];

	/*--------------------------------------------------------------------------* 
	* Définitions des temps en minutes pour les 25 profondeurs des tables MN90. *
	*---------------------------------------------------------------------------*/
	var Mn90T = new Array();
	Mn90T[6]  = [15,30,45,75,105,135,180,240,315,360];  
	Mn90T[8]  = [15,30,45,60,90,105,135,165,195,255,300,360];  
	Mn90T[10] = [15,30,45,60,75,105,120,135,165,180,240,255,315,330,360];
	Mn90T[12] = [5,15,25,35,45,55,65,80,90,105,120,135,140,150,160,170,180,190,200,220,230,240,250,255,270,285,300,315,330,345,360];
	Mn90T[15] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,130,140];
	Mn90T[18] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,130,140,150];
	Mn90T[20] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120];
	Mn90T[22] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120];
	Mn90T[25] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120];
	Mn90T[28] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120];
	Mn90T[30] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
	Mn90T[32] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
	Mn90T[35] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
	Mn90T[38] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
	Mn90T[40] = [5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90];
	Mn90T[42] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[45] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[48] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[50] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[52] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[55] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[58] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[60] = [5,10,15,20,25,30,35,40,45,50,55,60];
	Mn90T[62] = [5,10,15];
	Mn90T[65] = [5,10,15];

	/*------------------------------------------------------------------------------ 
	* Définitions de paliers en fonction de la profondeur et du temps retenu.      *
	* Les tableaux comportent toujours 6 éléments avec les temps pour les paliers  *
	* et le GPS de la plongée en fonction de la relation suivante :                *
	*  - Elément 0 : Temps pour palier de 3m                                       *
	*  - Elément 1 : Temps pour palier de 6m	                                     *
	*  - Elément 2 : Temps pour palier de 9m	                                     *
	*  - Elément 3 : Temps pour palier de 12m                                      *
	*  - Elément 4 : Temps pour palier de 15m	 	                                   *
	*  - Elément 5 : GPS de la plongée.                                            *
	*------------------------------------------------------------------------------*/
	var Mn90P = new Array();
	
		// Table des 5m
	Mn90P[515]  = [0,0,0,0,0,'A'];
	Mn90P[530]  = [0,0,0,0,0,'B'];
	Mn90P[545]  = [0,0,0,0,0,'C'];
	Mn90P[575]  = [0,0,0,0,0,'D'];
	Mn90P[5105] = [0,0,0,0,0,'E'];
	Mn90P[5135] = [0,0,0,0,0,'F'];
	Mn90P[5180] = [0,0,0,0,0,'G'];
	Mn90P[5240] = [0,0,0,0,0,'H'];
	Mn90P[5315] = [0,0,0,0,0,'I'];
	Mn90P[5360] = [0,0,0,0,0,'J'];

	// Table des 8m
	Mn90P[815]  = [0,0,0,0,0,'B'];
	Mn90P[830]  = [0,0,0,0,0,'C'];
	Mn90P[845]  = [0,0,0,0,0,'D'];
	Mn90P[860]  = [0,0,0,0,0,'E'];
	Mn90P[890]  = [0,0,0,0,0,'F'];
	Mn90P[8105] = [0,0,0,0,0,'G'];
	Mn90P[8135] = [0,0,0,0,0,'H'];
	Mn90P[8165] = [0,0,0,0,0,'I'];
	Mn90P[8195] = [0,0,0,0,0,'J'];
	Mn90P[8255] = [0,0,0,0,0,'K'];
	Mn90P[8300] = [0,0,0,0,0,'L'];
	Mn90P[8360] = [0,0,0,0,0,'M'];

	// Table des 10m
	Mn90P[1015]  = [0,0,0,0,0,'B'];
	Mn90P[1030]  = [0,0,0,0,0,'C'];
	Mn90P[1045]  = [0,0,0,0,0,'D'];
	Mn90P[1060]  = [0,0,0,0,0,'F'];
	Mn90P[1075]  = [0,0,0,0,0,'G'];
	Mn90P[10105] = [0,0,0,0,0,'H'];
	Mn90P[10120] = [0,0,0,0,0,'I'];
	Mn90P[10135] = [0,0,0,0,0,'J'];
	Mn90P[10165] = [0,0,0,0,0,'K'];
	Mn90P[10180] = [0,0,0,0,0,'L'];
	Mn90P[10240] = [0,0,0,0,0,'M'];
	Mn90P[10255] = [0,0,0,0,0,'N'];
	Mn90P[10315] = [0,0,0,0,0,'O'];
	Mn90P[10330] = [0,0,0,0,0,'P'];
	Mn90P[10360] = [1,0,0,0,0,'P'];

	// Table des 12m
	Mn90P[125]   = [0,0,0,0,0,'A'];
	Mn90P[1215]  = [0,0,0,0,0,'B'];
	Mn90P[1225]  = [0,0,0,0,0,'C'];
	Mn90P[1235]  = [0,0,0,0,0,'D'];
	Mn90P[1245]  = [0,0,0,0,0,'E'];
	Mn90P[1255]  = [0,0,0,0,0,'F'];
	Mn90P[1265]  = [0,0,0,0,0,'G'];
	Mn90P[1280]  = [0,0,0,0,0,'H'];
	Mn90P[1290]  = [0,0,0,0,0,'I'];
	Mn90P[12105] = [0,0,0,0,0,'J'];
	Mn90P[12120] = [0,0,0,0,0,'K'];
	Mn90P[12135] = [0,0,0,0,0,'L'];
	Mn90P[12140] = [2,0,0,0,0,'L'];
	Mn90P[12150] = [4,0,0,0,0,'M'];
	Mn90P[12160] = [6,0,0,0,0,'M'];
	Mn90P[12170] = [7,0,0,0,0,'N'];
	Mn90P[12180] = [9,0,0,0,0,'N'];
	Mn90P[12190] = [11,0,0,0,0,'N'];
	Mn90P[12200] = [13,0,0,0,0,'O'];
	Mn90P[12210] = [14,0,0,0,0,'O'];
	Mn90P[12220] = [15,0,0,0,0,'O'];
	Mn90P[12230] = [16,0,0,0,0,'O'];
	Mn90P[12240] = [17,0,0,0,0,'O'];
	Mn90P[12250] = [18,0,0,0,0,'P'];
	Mn90P[12255] = [19,0,0,0,0,'P'];
	Mn90P[12270] = [22,0,0,0,0,'P'];
	Mn90P[12285] = [24,0,0,0,0,'P'];
	Mn90P[12300] = [26,0,0,0,0,'P'];
	Mn90P[12315] = [27,0,0,0,0,'*'];
	Mn90P[12330] = [29,0,0,0,0,'*'];
	Mn90P[12345] = [31,0,0,0,0,'*'];
	Mn90P[12360] = [33,0,0,0,0,'*'];
		
	// Table des 15m
	Mn90P[155]   = [0,0,0,0,0,'A'];
	Mn90P[1510]  = [0,0,0,0,0,'B'];
	Mn90P[1515]  = [0,0,0,0,0,'C'];
	Mn90P[1520]  = [0,0,0,0,0,'C'];
	Mn90P[1525]  = [0,0,0,0,0,'D'];
	Mn90P[1530]  = [0,0,0,0,0,'E'];
	Mn90P[1535]  = [0,0,0,0,0,'E'];
	Mn90P[1540]  = [0,0,0,0,0,'F'];
	Mn90P[1545]  = [0,0,0,0,0,'G'];
	Mn90P[1550]  = [0,0,0,0,0,'G'];
	Mn90P[1555]  = [0,0,0,0,0,'H'];
	Mn90P[1560]  = [0,0,0,0,0,'H'];
	Mn90P[1565]  = [0,0,0,0,0,'I'];
	Mn90P[1570]  = [0,0,0,0,0,'I'];
	Mn90P[1575]  = [0,0,0,0,0,'J'];
	Mn90P[1580]  = [2,0,0,0,0,'J'];
	Mn90P[1585]  = [4,0,0,0,0,'K'];
	Mn90P[1590]  = [6,0,0,0,0,'K'];
	Mn90P[1595]  = [8,0,0,0,0,'L'];
	Mn90P[15100] = [11,0,0,0,0,'L'];
	Mn90P[15105] = [13,0,0,0,0,'L'];
	Mn90P[15110] = [15,0,0,0,0,'M'];
	Mn90P[15115] = [17,0,0,0,0,'M'];
	Mn90P[15120] = [18,0,0,0,0,'M'];
	Mn90P[15130] = [22,0,0,0,0,'*'];
	Mn90P[15140] = [25,0,0,0,0,'*'];
		
	// Table des 18m
	Mn90P[185]   = [0,0,0,0,0,'B'];
	Mn90P[1810]  = [0,0,0,0,0,'B'];
	Mn90P[1815]  = [0,0,0,0,0,'C'];
	Mn90P[1820]  = [0,0,0,0,0,'D'];
	Mn90P[1825]  = [0,0,0,0,0,'E'];
	Mn90P[1830]  = [0,0,0,0,0,'F'];
	Mn90P[1835]  = [0,0,0,0,0,'F'];
	Mn90P[1840]  = [0,0,0,0,0,'G'];
	Mn90P[1845]  = [0,0,0,0,0,'H'];
	Mn90P[1850]  = [0,0,0,0,0,'H'];
	Mn90P[1855]  = [1,0,0,0,0,'I'];
	Mn90P[1860]  = [5,0,0,0,0,'J'];
	Mn90P[1865]  = [8,0,0,0,0,'J'];
	Mn90P[1870]  = [11,0,0,0,0,'K'];
	Mn90P[1875]  = [14,0,0,0,0,'K'];
	Mn90P[1880]  = [17,0,0,0,0,'L'];
	Mn90P[1885]  = [21,0,0,0,0,'L'];
	Mn90P[1890]  = [23,0,0,0,0,'M'];
	Mn90P[1895]  = [26,0,0,0,0,'M'];
	Mn90P[18100] = [28,0,0,0,0,'M'];
	Mn90P[18105] = [31,0,0,0,0,'N'];
	Mn90P[18110] = [34,0,0,0,0,'N'];
	Mn90P[18115] = [36,0,0,0,0,'N'];
	Mn90P[18120] = [38,0,0,0,0,'O'];
	Mn90P[18130] = [42,0,0,0,0,'*'];
	Mn90P[18140] = [46,0,0,0,0,'*'];
	Mn90P[18150] = [51,0,0,0,0,'*'];
	
	// Table des 20m
	Mn90P[205]   = [0,0,0,0,0,'B'];
	Mn90P[2010]  = [0,0,0,0,0,'B'];
	Mn90P[2015]  = [0,0,0,0,0,'D'];
	Mn90P[2020]  = [0,0,0,0,0,'D'];
	Mn90P[2025]  = [0,0,0,0,0,'E'];
	Mn90P[2030]  = [0,0,0,0,0,'F'];
	Mn90P[2035]  = [0,0,0,0,0,'G'];
	Mn90P[2040]  = [0,0,0,0,0,'H'];
	Mn90P[2045]  = [1,0,0,0,0,'I'];
	Mn90P[2050]  = [4,0,0,0,0,'I'];
	Mn90P[2055]  = [9,0,0,0,0,'J'];
	Mn90P[2060]  = [13,0,0,0,0,'K'];
	Mn90P[2065]  = [16,0,0,0,0,'K'];
	Mn90P[2070]  = [20,0,0,0,0,'L'];
	Mn90P[2075]  = [24,0,0,0,0,'L'];
	Mn90P[2080]  = [27,0,0,0,0,'M'];
	Mn90P[2085]  = [30,0,0,0,0,'M'];
	Mn90P[2090]  = [34,0,0,0,0,'M'];
	Mn90P[2095]  = [37,0,0,0,0,'*'];
	Mn90P[20100] = [40,0,0,0,0,'*'];
	Mn90P[20105] = [43,0,0,0,0,'*'];
	Mn90P[20110] = [45,0,0,0,0,'*'];
	Mn90P[20115] = [48,0,0,0,0,'*'];
	Mn90P[20120] = [49,1,0,0,0,'*'];

	// Table des 22m
	Mn90P[225]   = [0,0,0,0,0,'B'];
	Mn90P[2210]  = [0,0,0,0,0,'C'];
	Mn90P[2215]  = [0,0,0,0,0,'D'];
	Mn90P[2220]  = [0,0,0,0,0,'E'];
	Mn90P[2225]  = [0,0,0,0,0,'F'];
	Mn90P[2230]  = [0,0,0,0,0,'G'];
	Mn90P[2235]  = [0,0,0,0,0,'H'];
	Mn90P[2240]  = [2,0,0,0,0,'I'];
	Mn90P[2245]  = [7,0,0,0,0,'I'];
	Mn90P[2250]  = [12,0,0,0,0,'J'];
	Mn90P[2255]  = [16,0,0,0,0,'K'];
	Mn90P[2260]  = [20,0,0,0,0,'K'];
	Mn90P[2265]  = [25,0,0,0,0,'L'];
	Mn90P[2270]  = [29,0,0,0,0,'L'];
	Mn90P[2275]  = [33,0,0,0,0,'M'];
	Mn90P[2280]  = [37,0,0,0,0,'M'];
	Mn90P[2285]  = [41,0,0,0,0,'N'];
	Mn90P[2290]  = [44,0,0,0,0,'N'];
	Mn90P[2295]  = [46,2,0,0,0,'*'];
	Mn90P[22100] = [47,4,0,0,0,'*'];
	Mn90P[22105] = [49,5,0,0,0,'*'];
	Mn90P[22110] = [51,7,0,0,0,'*'];
	Mn90P[22115] = [53,9,0,0,0,'*'];
	Mn90P[22120] = [55,11,0,0,0,'*'];
	
	// Table des 25m
	Mn90P[255]   = [0,0,0,0,0,'B'];
	Mn90P[2510]  = [0,0,0,0,0,'C'];
	Mn90P[2515]  = [0,0,0,0,0,'D'];
	Mn90P[2520]  = [0,0,0,0,0,'E'];
	Mn90P[2525]  = [1,0,0,0,0,'F'];
	Mn90P[2530]  = [2,0,0,0,0,'H'];
	Mn90P[2535]  = [5,0,0,0,0,'I'];
	Mn90P[2540]  = [10,0,0,0,0,'J'];
	Mn90P[2545]  = [16,0,0,0,0,'J'];
	Mn90P[2550]  = [21,0,0,0,0,'K'];
	Mn90P[2555]  = [27,0,0,0,0,'L'];
	Mn90P[2560]  = [32,0,0,0,0,'L'];
	Mn90P[2565]  = [37,0,0,0,0,'M'];
	Mn90P[2570]  = [41,1,0,0,0,'M'];
	Mn90P[2575]  = [43,4,0,0,0,'N'];
	Mn90P[2580]  = [45,7,0,0,0,'N'];
	Mn90P[2585]  = [48,9,0,0,0,'O'];
	Mn90P[2590]  = [50,11,0,0,0,'O'];
	Mn90P[2595]  = [51,14,0,0,0,'*'];
	Mn90P[25100] = [54,16,0,0,0,'*'];
	Mn90P[25105] = [56,19,0,0,0,'*'];
	Mn90P[25110] = [59,21,0,0,0,'*'];
	Mn90P[25115] = [61,23,0,0,0,'*'];
	Mn90P[25120] = [63,24,0,0,0,'*'];
	
	// Table des 28m
	Mn90P[285]   = [0,0,0,0,0,'B'];
	Mn90P[2810]  = [0,0,0,0,0,'D'];
	Mn90P[2815]  = [0,0,0,0,0,'E'];
	Mn90P[2820]  = [1,0,0,0,0,'F'];
	Mn90P[2825]  = [2,0,0,0,0,'G'];
	Mn90P[2830]  = [6,0,0,0,0,'H'];
	Mn90P[2835]  = [12,0,0,0,0,'I'];
	Mn90P[2840]  = [19,0,0,0,0,'J'];
	Mn90P[2845]  = [25,0,0,0,0,'K'];
	Mn90P[2850]  = [32,0,0,0,0,'L'];
	Mn90P[2855]  = [36,2,0,0,0,'M'];
	Mn90P[2860]  = [40,4,0,0,0,'M'];
	Mn90P[2865]  = [43,8,0,0,0,'N'];
	Mn90P[2870]  = [46,11,0,0,0,'N'];
	Mn90P[2875]  = [48,14,0,0,0,'O'];
	Mn90P[2880]  = [50,17,0,0,0,'O'];
	Mn90P[2885]  = [53,20,0,0,0,'O'];
	Mn90P[2890]  = [56,23,0,0,0,'P'];
	Mn90P[2895]  = [58,26,0,0,0,'*'];
	Mn90P[28100] = [61,28,0,0,0,'*'];
	Mn90P[28105] = [64,30,0,0,0,'*'];
	Mn90P[28110] = [67,32,1,0,0,'*'];
	Mn90P[28115] = [70,34,2,0,0,'*'];
	Mn90P[28120] = [73,36,3,0,0,'*'];
	
	// Table des 30m
	Mn90P[305]   = [0,0,0,0,0,'B'];
	Mn90P[3010]  = [0,0,0,0,0,'D'];
	Mn90P[3015]  = [1,0,0,0,0,'E'];
	Mn90P[3020]  = [2,0,0,0,0,'F'];
	Mn90P[3025]  = [4,0,0,0,0,'H'];
	Mn90P[3030]  = [9,0,0,0,0,'I'];
	Mn90P[3035]  = [17,0,0,0,0,'J'];
	Mn90P[3040]  = [24,0,0,0,0,'K'];
	Mn90P[3045]  = [31,1,0,0,0,'L'];
	Mn90P[3050]  = [36,3,0,0,0,'M'];
	Mn90P[3055]  = [39,6,0,0,0,'M'];
	Mn90P[3060]  = [43,10,0,0,0,'N'];
	Mn90P[3065]  = [46,14,0,0,0,'N'];
	Mn90P[3070]  = [48,17,0,0,0,'O'];
	Mn90P[3075]  = [50,20,0,0,0,'*'];
	Mn90P[3080]  = [54,24,0,0,0,'*'];
	Mn90P[3085]  = [57,27,0,0,0,'*'];
	Mn90P[3090]  = [60,30,0,0,0,'*'];

	// Table des 32m
	Mn90P[325]   = [0,0,0,0,0,'B'];
	Mn90P[3210]  = [0,0,0,0,0,'D'];
	Mn90P[3215]  = [1,0,0,0,0,'E'];
	Mn90P[3220]  = [3,0,0,0,0,'G'];
	Mn90P[3225]  = [6,0,0,0,0,'H'];
	Mn90P[3230]  = [14,0,0,0,0,'I'];
	Mn90P[3235]  = [22,0,0,0,0,'K'];
	Mn90P[3240]  = [29,1,0,0,0,'K'];
	Mn90P[3245]  = [34,4,0,0,0,'L'];
	Mn90P[3250]  = [39,7,0,0,0,'M'];
	Mn90P[3255]  = [43,11,0,0,0,'N'];
	Mn90P[3260]  = [46,15,0,0,0,'N'];
	Mn90P[3265]  = [48,19,0,0,0,'O'];
	Mn90P[3270]  = [50,23,0,0,0,'O'];
	Mn90P[3275]  = [54,27,0,0,0,'*'];
	Mn90P[3280]  = [58,29,2,0,0,'*'];
	Mn90P[3285]  = [61,30,4,0,0,'*'];
	Mn90P[3290]  = [64,32,6,0,0,'*'];
	
	// Table des 35m
	Mn90P[355]   = [0,0,0,0,0,'C'];
	Mn90P[3510]  = [0,0,0,0,0,'D'];
	Mn90P[3515]  = [2,0,0,0,0,'F'];
	Mn90P[3520]  = [5,0,0,0,0,'H'];
	Mn90P[3525]  = [11,0,0,0,0,'I'];
	Mn90P[3530]  = [20,1,0,0,0,'J'];
	Mn90P[3535]  = [27,2,0,0,0,'K'];
	Mn90P[3540]  = [34,5,0,0,0,'L'];
	Mn90P[3545]  = [39,9,0,0,0,'M'];
	Mn90P[3550]  = [43,14,0,0,0,'N'];
	Mn90P[3555]  = [47,18,0,0,0,'N'];
	Mn90P[3560]  = [50,22,0,0,0,'O'];
	Mn90P[3565]  = [52,26,2,0,0,'*'];
	Mn90P[3570]  = [57,28,4,0,0,'*'];
	Mn90P[3575]  = [60,30,7,0,0,'*'];
	Mn90P[3580]  = [64,31,10,0,0,'*'];
	Mn90P[3585]  = [69,33,12,0,0,'*'];
	Mn90P[3590]  = [72,36,14,0,0,'*'];
	
	// Table des 38m
	Mn90P[385]   = [0,0,0,0,0,'C'];
	Mn90P[3810]  = [1,0,0,0,0,'E'];
	Mn90P[3815]  = [4,0,0,0,0,'F'];
	Mn90P[3820]  = [8,0,0,0,0,'H'];
	Mn90P[3825]  = [16,1,0,0,0,'J'];
	Mn90P[3830]  = [24,3,0,0,0,'K'];
	Mn90P[3835]  = [33,5,0,0,0,'L'];
	Mn90P[3840]  = [38,10,0,0,0,'M'];
	Mn90P[3845]  = [43,15,0,0,0,'N'];
	Mn90P[3850]  = [47,20,0,0,0,'N'];
	Mn90P[3855]  = [50,23,2,0,0,'O'];
	Mn90P[3860]  = [53,27,5,0,0,'P'];
	Mn90P[3865]  = [58,29,8,0,0,'*'];
	Mn90P[3870]  = [62,31,11,0,0,'*'];
	Mn90P[3875]  = [66,33,14,0,0,'*'];
	Mn90P[3880]  = [71,35,17,0,0,'*'];
	Mn90P[3885]  = [76,36,20,0,0,'*'];
	Mn90P[3890]  = [81,38,23,0,0,'*'];
		
	// Table des 40m
	Mn90P[405]   = [0,0,0,0,0,'C'];
	Mn90P[4010]  = [2,0,0,0,0,'E'];
	Mn90P[4015]  = [4,0,0,0,0,'G'];
	Mn90P[4020]  = [9,1,0,0,0,'H'];
	Mn90P[4025]  = [19,2,0,0,0,'J'];
	Mn90P[4030]  = [28,4,0,0,0,'K'];
	Mn90P[4035]  = [35,8,0,0,0,'L'];
	Mn90P[4040]  = [40,13,0,0,0,'M'];
	Mn90P[4045]  = [45,18,1,0,0,'N'];
	Mn90P[4050]  = [48,23,2,0,0,'O'];
	Mn90P[4055]  = [52,26,5,0,0,'O'];
	Mn90P[4060]  = [57,29,8,0,0,'P'];
	Mn90P[4065]  = [61,31,12,0,0,'*'];
	Mn90P[4070]  = [66,33,15,0,0,'*'];
	Mn90P[4075]  = [71,35,18,0,0,'*'];
	Mn90P[4080]  = [75,37,21,1,0,'*'];
	Mn90P[4085]  = [82,38,23,3,0,'*'];
	Mn90P[4090]  = [88,39,24,5,0,'*'];
	
	// Table des 42m
	Mn90P[425]   = [0,0,0,0,0,'C'];
	Mn90P[4210]  = [2,0,0,0,0,'E'];
	Mn90P[4215]  = [5,0,0,0,0,'G'];
	Mn90P[4220]  = [12,1,0,0,0,'I'];
	Mn90P[4225]  = [22,3,0,0,0,'J'];
	Mn90P[4230]  = [31,6,0,0,0,'L'];
	Mn90P[4235]  = [37,11,0,0,0,'M'];
	Mn90P[4240]  = [43,16,1,0,0,'N'];
	Mn90P[4245]  = [47,21,3,0,0,'*'];
	Mn90P[4250]  = [50,24,6,0,0,'*'];
	Mn90P[4255]  = [55,29,8,0,0,'*'];
	Mn90P[4260]  = [60,30,13,0,0,'*'];
	
	// Table des 45m
	Mn90P[455]   = [0,0,0,0,0,'C'];
	Mn90P[4510]  = [3,0,0,0,0,'F'];
	Mn90P[4515]  = [6,1,0,0,0,'H'];
	Mn90P[4520]  = [15,3,0,0,0,'I'];
	Mn90P[4525]  = [25,5,0,0,0,'K'];
	Mn90P[4530]  = [35,9,0,0,0,'L'];
	Mn90P[4535]  = [40,15,1,0,0,'M'];
	Mn90P[4540]  = [46,20,3,0,0,'N'];
	Mn90P[4545]  = [50,24,6,0,0,'*'];
	Mn90P[4550]  = [54,28,10,0,0,'*'];
	Mn90P[4555]  = [60,30,14,0,0,'*'];
	Mn90P[4560]  = [65,32,18,1,0,'*'];

	// Table des 48m
	Mn90P[485]   = [0,0,0,0,0,'D'];
	Mn90P[4810]  = [4,0,0,0,0,'F'];
	Mn90P[4815]  = [7,2,0,0,0,'H'];
	Mn90P[4820]  = [19,4,0,0,0,'J'];
	Mn90P[4825]  = [30,7,0,0,0,'K'];
	Mn90P[4830]  = [37,12,1,0,0,'M'];
	Mn90P[4835]  = [44,18,3,0,0,'N'];
	Mn90P[4840]  = [48,23,6,0,0,'O'];
	Mn90P[4845]  = [53,27,10,0,0,'*'];
	Mn90P[4850]  = [59,30,14,1,0,'*'];
	Mn90P[4855]  = [64,32,18,2,0,'*'];
	Mn90P[4860]  = [70,36,19,5,0,'*'];
	
	// Table des 50m
	Mn90P[505]   = [1,0,0,0,0,'D'];
	Mn90P[5010]  = [4,0,0,0,0,'F'];
	Mn90P[5015]  = [9,2,0,0,0,'H'];
	Mn90P[5020]  = [22,4,0,0,0,'J'];
	Mn90P[5025]  = [32,8,1,0,0,'L'];
	Mn90P[5030]  = [39,14,2,0,0,'M'];
	Mn90P[5035]  = [45,20,5,0,0,'N'];
	Mn90P[5040]  = [50,24,9,0,0,'O'];
	Mn90P[5045]  = [55,29,12,1,0,'*'];
	Mn90P[5050]  = [62,30,17,2,0,'*'];
	Mn90P[5055]  = [67,34,19,5,0,'*'];
	Mn90P[5060]  = [74,37,21,8,0,'*'];
	
	// Table des 52m
	Mn90P[525]   = [1,0,0,0,0,'D'];
	Mn90P[5210]  = [4,1,0,0,0,'G'];
	Mn90P[5215]  = [10,3,0,0,0,'I'];
	Mn90P[5220]  = [23,5,1,0,0,'K'];
	Mn90P[5225]  = [34,9,2,0,0,'M'];
	Mn90P[5230]  = [41,15,4,0,0,'N'];
	Mn90P[5235]  = [47,22,6,0,0,'O'];
	Mn90P[5240]  = [52,26,10,1,0,'P'];
	Mn90P[5245]  = [59,29,15,2,0,'*'];
	Mn90P[5250]  = [64,32,17,5,0,'*'];
	Mn90P[5255]  = [71,36,19,8,0,'*'];
	Mn90P[5260]  = [78,38,22,11,0,'*'];

	// Table des 55m
	Mn90P[555]   = [1,0,0,0,0,'D'];
	Mn90P[5510]  = [5,1,0,0,0,'G'];
	Mn90P[5515]  = [13,4,0,0,0,'I'];
	Mn90P[5520]  = [27,6,1,0,0,'K'];
	Mn90P[5525]  = [37,11,3,0,0,'M'];
	Mn90P[5530]  = [44,18,6,0,0,'N'];
	Mn90P[5535]  = [50,23,9,1,0,'O'];
	Mn90P[5540]  = [55,29,12,3,0,'P'];
	Mn90P[5545]  = [62,31,17,5,0,'*'];
	Mn90P[5550]  = [69,35,19,8,0,'*'];
	Mn90P[5555]  = [76,37,22,12,0,'*'];
	Mn90P[5560]  = [86,39,24,14,2,'*'];

	// Table des 58m
	Mn90P[585]   = [2,0,0,0,0,'D'];
	Mn90P[5810]  = [5,2,0,0,0,'G'];
	Mn90P[5815]  = [16,4,1,0,0,'J'];
	Mn90P[5820]  = [30,7,2,0,0,'K'];
	Mn90P[5825]  = [40,13,4,0,0,'M'];
	Mn90P[5830]  = [46,21,7,1,0,'N'];
	Mn90P[5835]  = [52,26,11,2,0,'O'];
	Mn90P[5840]  = [59,30,15,5,0,'P'];
	Mn90P[5845]  = [66,33,18,8,0,'*'];
	Mn90P[5850]  = [74,37,21,11,1,'*'];
	Mn90P[5855]  = [83,39,23,14,3,'*'];
	Mn90P[5860]  = [92,42,25,16,5,'*'];

	// Table des 60m
	Mn90P[605]   = [2,0,0,0,0,'D'];
	Mn90P[6010]  = [6,2,0,0,0,'G'];
	Mn90P[6015]  = [19,4,1,0,0,'J'];
	Mn90P[6020]  = [32,8,3,0,0,'L'];
	Mn90P[6025]  = [41,15,5,0,0,'M'];
	Mn90P[6030]  = [48,22,8,1,0,'O'];
	Mn90P[6035]  = [54,28,11,4,0,'P'];
	Mn90P[6040]  = [62,30,17,6,0,'P'];
	Mn90P[6045]  = [69,35,19,9,1,'*'];
	Mn90P[6050]  = [78,37,22,13,2,'*'];
	Mn90P[6055]  = [88,40,24,15,5,'*'];
	Mn90P[6060]  = [96,44,26,17,7,'*'];

	// Table des 60m
	Mn90P[605]   = [2,0,0,0,0,'D'];
	Mn90P[6010]  = [6,2,0,0,0,'G'];
	Mn90P[6015]  = [19,4,1,0,0,'J'];
	Mn90P[6020]  = [32,8,3,0,0,'L'];
	Mn90P[6025]  = [41,15,5,0,0,'M'];
	Mn90P[6030]  = [48,22,8,1,0,'O'];
	Mn90P[6035]  = [54,28,11,4,0,'P'];
	Mn90P[6040]  = [62,30,17,6,0,'P'];
	Mn90P[6045]  = [69,35,19,9,1,'*'];
	Mn90P[6050]  = [78,37,22,13,2,'*'];
	Mn90P[6055]  = [88,40,24,15,5,'*'];
	Mn90P[6060]  = [96,44,26,17,7,'*'];

	// Table des 62m
	Mn90P[625]   = [2,0,0,0,0,'*'];
	Mn90P[6210]  = [2,7,0,0,0,'*'];
	Mn90P[6215]  = [21,5,1,0,0,'*'];
	
	// Table des 65m
	Mn90P[655]   = [3,0,0,0,0,'*'];
	Mn90P[6510]  = [8,3,0,0,0,'*'];
	Mn90P[6515]  = [24,5,2,0,0,'*'];

	/*----------------------------------------------*
	* Définitions des coefficients d'azote résiduel *
	*-----------------------------------------------*/
	var Mn90Interval = [15, 30, 45, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720]
	var Mn90Cr = new Array();
	Mn90Cr['A'] = [0.84, 0.83, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['B'] = [0.88, 0.88, 0.87, 0.86, 0.85, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['C'] = [0.92, 0.91, 0.90, 0.89, 0.88, 0.87, 0.85, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['D'] = [0.97, 0.95, 0.94, 0.93, 0.91, 0.89, 0.88, 0.86, 0.85, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['E'] = [1.00, 0.98, 0.97, 0.96, 0.93, 0.91, 0.89, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['F'] = [1.05, 1.03, 1.01, 0.99, 0.96, 0.94, 0.91, 0.90, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['G'] = [1.08, 1.06, 1.04, 1.02, 0.98, 0.96, 0.93, 0.91, 0.89, 0.88, 0.87, 0.85, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['H'] = [1.13, 1.10, 1.08, 1.05, 1.01, 0.98, 0.95, 0.93, 0.91, 0.89, 0.88, 0.86, 0.85, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['I'] = [1.17, 1.14, 1.11, 1.08, 1.04, 1.00, 0.97, 0.94, 0.92, 0.90, 0.88, 0.87, 0.86, 0.85, 0.84, 0.84, 0.83, 0.83, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['J'] = [1.20, 1.17, 1.14, 1.11, 1.06, 1.02, 0.98, 0.96, 0.93, 0.91, 0.89, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['K'] = [1.25, 1.21, 1.18, 1.15, 1.09, 1.04, 1.01, 0.97, 0.95, 0.92, 0.90, 0.89, 0.87, 0.86, 0.85, 0.84, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['L'] = [1.29, 1.25, 1.21, 1.17, 1.12, 1.07, 1.02, 0.99, 0.96, 0.93, 0.91, 0.89, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81, 0.81]
	Mn90Cr['M'] = [1.33, 1.29, 1.25, 1.21, 1.14, 1.09, 1.04, 1.01, 0.97, 0.94, 0.92, 0.90, 0.89, 0.87, 0.86, 0.85, 0.84, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81]
	Mn90Cr['N'] = [1.37, 1.32, 1.28, 1.24, 1.17, 1.11, 1.06, 1.02, 0.98, 0.95, 0.93, 0.91, 0.89, 0.88, 0.87, 0.85, 0.85, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81]
	Mn90Cr['O'] = [1.41, 1.36, 1.32, 1.27, 1.20, 1.13, 1.08, 1.04, 1.00, 0.97, 0.94, 0.92, 0.90, 0.88, 0.87, 0.86, 0.85, 0.84, 0.84, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81, 0.81]
	Mn90Cr['P'] = [1.45, 1.40, 1.35, 1.30, 1.22, 1.15, 1.10, 1.05, 1.01, 0.98, 0.95, 0.93, 0.91, 0.89, 0.87, 0.86, 0.85, 0.84, 0.84, 0.83, 0.83, 0.82, 0.82, 0.82, 0.81, 0.81]

	/*---------------------------------------*
	* Définitions des majorations en minutes *
	*----------------------------------------*/
	var TbCoeff = [0.82,0.84,0.86,0.89,0.92,0.95,0.99,1.03,1.07,1.11,1.16,1.20,1.24,1.29,1.33,1.38,1.42,1.45]; 
	var Majo = new Array();
	Majo[12] = [4, 7, 11, 17, 23, 29, 38, 47, 57, 68, 81, 93, 106, 124, 139, 160, 180, 196];
	Majo[15] = [3, 6, 9, 13, 18, 23, 30, 37, 44, 52, 62, 70, 79, 91, 101, 114, 126, 135];
	Majo[18] = [2, 5, 7, 11, 15, 19, 24, 30, 36, 42, 50, 56, 63, 72, 79, 89, 97, 104];  
	Majo[20] = [2, 4, 7, 10, 13, 17, 22, 27, 32, 37, 44, 50, 56, 63, 70, 78, 85, 90];
	Majo[22] = [2, 4, 6, 9, 12, 15, 20, 24, 29, 34, 40, 45, 50, 56, 62, 69, 75, 80];
	Majo[25] = [2, 3, 5, 8, 11, 13, 17, 21, 25, 29, 34, 39, 43, 49, 53, 59, 64, 68];
	Majo[28] = [2, 3, 5, 7, 10, 12, 15, 19, 22, 26, 30, 34, 38, 43, 47, 52, 56, 59];
	Majo[30] = [1, 3, 4, 7, 9, 11, 14, 17, 21, 24, 28, 32, 35, 40, 43, 48, 52, 55];
	Majo[32] = [1, 3, 4, 6, 8, 10, 13, 16, 19, 22, 26, 29, 33, 37, 40, 44, 48, 51];
	Majo[35] = [1, 2, 4, 6, 8, 10, 12, 15, 18, 20, 24, 27, 30, 33, 36, 40, 43, 46];
	Majo[38] = [1, 2, 3, 5, 7, 9, 11, 14, 16, 19, 22, 24, 27, 30, 33, 37, 39, 42];
	Majo[40] = [1, 2, 3, 5, 7, 8, 11, 13, 15, 18, 21, 23, 26, 29, 31, 35, 37, 39];
	Majo[42] = [1, 2, 3, 5, 6, 8, 10, 12, 15, 17, 20, 22, 24, 27, 30, 33, 35, 37];
	Majo[45] = [1, 2, 3, 4, 6, 7, 9, 11, 13, 16, 18, 20, 23, 25, 28, 30, 33, 34];
	Majo[48] = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 17, 19, 21, 24, 26, 28, 30, 32];
	Majo[50] = [1, 2, 3, 4, 5, 7, 8, 10, 12, 14, 16, 18, 20, 23, 25, 27, 29, 31];
	Majo[52] = [1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 16, 18, 19, 22, 24, 26, 28, 29];
	Majo[55] = [1, 2, 2, 4, 5, 6, 8, 9, 11, 13, 15, 17, 18, 20, 22, 24, 26, 28];
	Majo[58] = [1, 1, 2, 3, 5, 6, 7, 9, 10, 12, 14, 16, 17, 19, 21, 23, 25, 26];
	Majo[60] = [1, 1, 2, 3, 4, 5, 7, 9, 10, 12, 13, 15, 17, 19, 20, 22, 24, 25];
	
		
	