
const customers= [
    {
      "_id": "63dd21471b4e6d9d922a7bfa",
      "name": "PORTICO",
      "ceo": "Ebony Orr",
      "status": "Rejected",
      "employees": 3475304,
      "turnover": 1418094,
      "year": 1924
    },
    {
      "_id": "63dd2147daa6c529213e735e",
      "name": "ZERBINA",
      "ceo": "Judy Bryant",
      "status": "Rejected",
      "employees": 2558910,
      "turnover": 463469,
      "year": 1970
    },
    {
      "_id": "63dd2147df0bd97cd2700895",
      "name": "DADABASE",
      "ceo": "Helen Shields",
      "status": "Rejected",
      "employees": 3002202,
      "turnover": 1834892,
      "year": 1974
    },
    {
      "_id": "63dd21473c9664e3757d4f6a",
      "name": "VITRICOMP",
      "ceo": "Bowers Harvey",
      "status": "New",
      "employees": 2313624,
      "turnover": 3255034,
      "year": 1988
    },
    {
      "_id": "63dd2147e9c8cdbd27d56f5f",
      "name": "MEDCOM",
      "ceo": "Estela Albert",
      "status": "New",
      "employees": 2190707,
      "turnover": 721720,
      "year": 1930
    },
    {
      "_id": "63dd2147b5fb011ecb9cd4ab",
      "name": "MYOPIUM",
      "ceo": "Leta Shepherd",
      "status": "Rejected",
      "employees": 2294189,
      "turnover": 2090381,
      "year": 1948
    },
    {
      "_id": "63dd2147e48d085b6d078927",
      "name": "MIRACULA",
      "ceo": "Boyle Mcmahon",
      "status": "Accepted",
      "employees": 1209804,
      "turnover": 1096535,
      "year": 1805
    },
    {
      "_id": "63dd2147ab59047e767365d1",
      "name": "CAXT",
      "ceo": "Leonard Barber",
      "status": "New",
      "employees": 3709968,
      "turnover": 1907372,
      "year": 1846
    },
    {
      "_id": "63dd2147ac1022e8d6c9d826",
      "name": "JUMPSTACK",
      "ceo": "Susie Grant",
      "status": "New",
      "employees": 47483,
      "turnover": 1521645,
      "year": 1919
    },
    {
      "_id": "63dd21478c3bca80dc029a15",
      "name": "RAMJOB",
      "ceo": "Lowery Reilly",
      "status": "Accepted",
      "employees": 653286,
      "turnover": 884274,
      "year": 2013
    },
    {
      "_id": "63dd2147fa4e75b01abba521",
      "name": "GLEAMINK",
      "ceo": "Leanne Padilla",
      "status": "New",
      "employees": 2373517,
      "turnover": 668605,
      "year": 1981
    },
    {
      "_id": "63dd21477ed97c332f4fcde9",
      "name": "ENAUT",
      "ceo": "Stevens Sullivan",
      "status": "New",
      "employees": 3118140,
      "turnover": 3609808,
      "year": 1810
    },
    {
      "_id": "63dd214780eb2c1d288adfc7",
      "name": "LINGOAGE",
      "ceo": "Kenya Mullins",
      "status": "New",
      "employees": 2133961,
      "turnover": 1950203,
      "year": 2018
    },
    {
      "_id": "63dd21475d188528b4885212",
      "name": "TOYLETRY",
      "ceo": "Constance Gordon",
      "status": "Rejected",
      "employees": 3771665,
      "turnover": 3806572,
      "year": 1809
    },
    {
      "_id": "63dd2147890861782d58fffa",
      "name": "CIRCUM",
      "ceo": "Audra Holman",
      "status": "Rejected",
      "employees": 1826729,
      "turnover": 2364948,
      "year": 1888
    },
    {
      "_id": "63dd2147be05775ae8bc87d1",
      "name": "EXOSIS",
      "ceo": "Mathis Walsh",
      "status": "New",
      "employees": 984135,
      "turnover": 3799986,
      "year": 2004
    },
    {
      "_id": "63dd2147bb2951881abb112b",
      "name": "TERRAGEN",
      "ceo": "Christi Harrison",
      "status": "New",
      "employees": 2424658,
      "turnover": 2554457,
      "year": 2015
    },
    {
      "_id": "63dd214737f859747907a919",
      "name": "FUTURITY",
      "ceo": "Sherri Sykes",
      "status": "New",
      "employees": 2450520,
      "turnover": 488940,
      "year": 1864
    },
    {
      "_id": "63dd2147e484f8422963c7d9",
      "name": "PAWNAGRA",
      "ceo": "Mari Mason",
      "status": "New",
      "employees": 1001168,
      "turnover": 817553,
      "year": 1869
    },
    {
      "_id": "63dd21475f97914ae72152d0",
      "name": "JUNIPOOR",
      "ceo": "Sallie Moss",
      "status": "New",
      "employees": 1276428,
      "turnover": 2706167,
      "year": 1906
    },
    {
      "_id": "63dd2147fd33ffb389d488e8",
      "name": "MITROC",
      "ceo": "Delia Steele",
      "status": "New",
      "employees": 1835602,
      "turnover": 3871896,
      "year": 1911
    },
    {
      "_id": "63dd2147c92f45844a52917d",
      "name": "BILLMED",
      "ceo": "Tyler Conley",
      "status": "Rejected",
      "employees": 2930977,
      "turnover": 3027096,
      "year": 1821
    },
    {
      "_id": "63dd2147bded8a68f54d7165",
      "name": "FLUMBO",
      "ceo": "Anderson Lara",
      "status": "Rejected",
      "employees": 2118363,
      "turnover": 1249833,
      "year": 1829
    },
    {
      "_id": "63dd2147962c012933558606",
      "name": "OCTOCORE",
      "ceo": "Felecia Rojas",
      "status": "Accepted",
      "employees": 1415105,
      "turnover": 2246349,
      "year": 2011
    },
    {
      "_id": "63dd2147e4a8d7abdba3b806",
      "name": "ZILCH",
      "ceo": "Massey Bennett",
      "status": "Accepted",
      "employees": 842354,
      "turnover": 1169715,
      "year": 1977
    },
    {
      "_id": "63dd21477fb3ec5879dc6ce9",
      "name": "ANARCO",
      "ceo": "Wood Frost",
      "status": "Accepted",
      "employees": 919115,
      "turnover": 3605479,
      "year": 2005
    },
    {
      "_id": "63dd2147952758aefa15ccc2",
      "name": "YURTURE",
      "ceo": "Mann Gallagher",
      "status": "New",
      "employees": 3730728,
      "turnover": 3824638,
      "year": 1940
    },
    {
      "_id": "63dd214776a245f560c46ec1",
      "name": "MUSAPHICS",
      "ceo": "Schultz Wall",
      "status": "New",
      "employees": 859017,
      "turnover": 988478,
      "year": 1915
    },
    {
      "_id": "63dd2147af727deed6e9aabe",
      "name": "COMTRAK",
      "ceo": "Twila Larson",
      "status": "Rejected",
      "employees": 2177462,
      "turnover": 379147,
      "year": 1819
    },
    {
      "_id": "63dd2147f144a1d2610886dc",
      "name": "NEWCUBE",
      "ceo": "Kelley Ward",
      "status": "New",
      "employees": 2427044,
      "turnover": 2603172,
      "year": 1876
    },
    {
      "_id": "63dd21470004d209647dce0b",
      "name": "STELAECOR",
      "ceo": "Lorie Slater",
      "status": "New",
      "employees": 778435,
      "turnover": 3811392,
      "year": 1997
    },
    {
      "_id": "63dd214782a1def4ff9fd2af",
      "name": "PORTICA",
      "ceo": "Joyner Cooper",
      "status": "Accepted",
      "employees": 984741,
      "turnover": 3328177,
      "year": 1843
    },
    {
      "_id": "63dd2147b548d4e3b635ffaf",
      "name": "MOTOVATE",
      "ceo": "Lakeisha Wise",
      "status": "New",
      "employees": 3462171,
      "turnover": 3674562,
      "year": 1830
    },
    {
      "_id": "63dd2147ca447c9e695d2279",
      "name": "QIMONK",
      "ceo": "Baxter Figueroa",
      "status": "New",
      "employees": 2163353,
      "turnover": 2236601,
      "year": 1990
    },
    {
      "_id": "63dd214787e75e0a7e03195e",
      "name": "BUNGA",
      "ceo": "Jacklyn Diaz",
      "status": "Accepted",
      "employees": 2814206,
      "turnover": 2294005,
      "year": 1956
    },
    {
      "_id": "63dd21471a556d70123ab09e",
      "name": "ZAGGLE",
      "ceo": "Hannah Hood",
      "status": "Rejected",
      "employees": 537474,
      "turnover": 978861,
      "year": 1871
    },
    {
      "_id": "63dd214712795059644c5691",
      "name": "ZOID",
      "ceo": "Leach Carrillo",
      "status": "Accepted",
      "employees": 3035763,
      "turnover": 3606723,
      "year": 1954
    },
    {
      "_id": "63dd2147534abe65fc6c503e",
      "name": "RENOVIZE",
      "ceo": "Pacheco Morse",
      "status": "Rejected",
      "employees": 2578137,
      "turnover": 3632413,
      "year": 1871
    },
    {
      "_id": "63dd21472dd75fbb7ec0b005",
      "name": "GYNK",
      "ceo": "Briggs Mercado",
      "status": "Accepted",
      "employees": 852298,
      "turnover": 1772018,
      "year": 1858
    },
    {
      "_id": "63dd2147111624e39e3d74b1",
      "name": "BLANET",
      "ceo": "Abbott Mcgee",
      "status": "Accepted",
      "employees": 3494302,
      "turnover": 3963733,
      "year": 1949
    },
    {
      "_id": "63dd2147d2215d043a6b2f7a",
      "name": "KOZGENE",
      "ceo": "Lacey Campbell",
      "status": "Accepted",
      "employees": 3924342,
      "turnover": 953827,
      "year": 1910
    },
    {
      "_id": "63dd2147dc2e56cd09ded9a6",
      "name": "XSPORTS",
      "ceo": "Banks Dixon",
      "status": "New",
      "employees": 2289076,
      "turnover": 2514150,
      "year": 1893
    },
    {
      "_id": "63dd214774b2c6587d5a93ed",
      "name": "DIGITALUS",
      "ceo": "Guzman Alford",
      "status": "New",
      "employees": 1577382,
      "turnover": 3144114,
      "year": 1920
    },
    {
      "_id": "63dd2147a9c593f5adde60e2",
      "name": "EXOBLUE",
      "ceo": "Ora Nelson",
      "status": "New",
      "employees": 1547548,
      "turnover": 1314186,
      "year": 1910
    },
    {
      "_id": "63dd2147e16267d19c80a2c2",
      "name": "BITTOR",
      "ceo": "Melanie Stafford",
      "status": "New",
      "employees": 1866629,
      "turnover": 2927017,
      "year": 1819
    },
    {
      "_id": "63dd2147214ee5ae5b528cfe",
      "name": "GEEKOL",
      "ceo": "Warren Snow",
      "status": "Rejected",
      "employees": 1890210,
      "turnover": 1983576,
      "year": 1830
    },
    {
      "_id": "63dd2147d06743b270036981",
      "name": "VERBUS",
      "ceo": "Lowe Kirby",
      "status": "New",
      "employees": 2034214,
      "turnover": 2166694,
      "year": 2001
    },
    {
      "_id": "63dd2147a6d30dd8cf347470",
      "name": "FANGOLD",
      "ceo": "Hood Middleton",
      "status": "New",
      "employees": 3445521,
      "turnover": 37678,
      "year": 1984
    },
    {
      "_id": "63dd2147e310e23fd9d3a240",
      "name": "VALPREAL",
      "ceo": "Lydia Wolfe",
      "status": "Accepted",
      "employees": 2506258,
      "turnover": 1641544,
      "year": 1953
    },
    {
      "_id": "63dd2147081c00dc3b1310ee",
      "name": "ACCUPRINT",
      "ceo": "Mayo Little",
      "status": "New",
      "employees": 1160055,
      "turnover": 1863883,
      "year": 1985
    },
    {
      "_id": "63dd2147e5b8ed7bb9199ed6",
      "name": "COMVEYOR",
      "ceo": "Miriam Morgan",
      "status": "Rejected",
      "employees": 824886,
      "turnover": 3209624,
      "year": 1817
    },
    {
      "_id": "63dd2147c77742f367011ed7",
      "name": "ISOTRACK",
      "ceo": "Gretchen Morris",
      "status": "Rejected",
      "employees": 3002919,
      "turnover": 938944,
      "year": 1954
    },
    {
      "_id": "63dd214708e505df98ed7111",
      "name": "EVIDENDS",
      "ceo": "Jordan England",
      "status": "Accepted",
      "employees": 1273335,
      "turnover": 1858066,
      "year": 1956
    },
    {
      "_id": "63dd21470899268005b97340",
      "name": "SHEPARD",
      "ceo": "Holt Hopkins",
      "status": "Rejected",
      "employees": 524761,
      "turnover": 3062323,
      "year": 1924
    },
    {
      "_id": "63dd21472d8e9a79a3536c90",
      "name": "PROSURE",
      "ceo": "Aida Hester",
      "status": "New",
      "employees": 2324710,
      "turnover": 924413,
      "year": 1847
    },
    {
      "_id": "63dd2147d092504dafc81938",
      "name": "NETROPIC",
      "ceo": "Fulton Goodman",
      "status": "Rejected",
      "employees": 3366664,
      "turnover": 252516,
      "year": 1854
    },
    {
      "_id": "63dd2147ebef7afb25637844",
      "name": "GEEKNET",
      "ceo": "Spears Page",
      "status": "Rejected",
      "employees": 3903096,
      "turnover": 1212016,
      "year": 1989
    },
    {
      "_id": "63dd21477c6b38cadbe00985",
      "name": "URBANSHEE",
      "ceo": "Alvarado Melendez",
      "status": "New",
      "employees": 1465426,
      "turnover": 1858949,
      "year": 1972
    },
    {
      "_id": "63dd21474c5cda47adc6e993",
      "name": "DECRATEX",
      "ceo": "Cobb Wilkerson",
      "status": "Accepted",
      "employees": 1770732,
      "turnover": 1261543,
      "year": 1970
    },
    {
      "_id": "63dd21479b54c069c2c60238",
      "name": "VORTEXACO",
      "ceo": "Delgado Bullock",
      "status": "Accepted",
      "employees": 534848,
      "turnover": 254876,
      "year": 1857
    },
    {
      "_id": "63dd214782cab90269a47b9f",
      "name": "MULTRON",
      "ceo": "Mays Ashley",
      "status": "Accepted",
      "employees": 2140308,
      "turnover": 640712,
      "year": 2011
    },
    {
      "_id": "63dd2147bbdc5ae95e9225ec",
      "name": "KINETICUT",
      "ceo": "Dillon Bray",
      "status": "New",
      "employees": 133111,
      "turnover": 3063357,
      "year": 1868
    },
    {
      "_id": "63dd21476be1ac360da2c389",
      "name": "ASSISTIX",
      "ceo": "Lynda Rodriquez",
      "status": "New",
      "employees": 507740,
      "turnover": 1248018,
      "year": 1860
    },
    {
      "_id": "63dd2147eaf1c4765e100320",
      "name": "QUONATA",
      "ceo": "Erika Stewart",
      "status": "Rejected",
      "employees": 2803885,
      "turnover": 3017534,
      "year": 1972
    },
    {
      "_id": "63dd21471cb0ba1b902a7ba6",
      "name": "SIGNIDYNE",
      "ceo": "Christian Fisher",
      "status": "New",
      "employees": 106532,
      "turnover": 3995174,
      "year": 1929
    },
    {
      "_id": "63dd21474bbb1ab02d93fc13",
      "name": "BRISTO",
      "ceo": "Stevenson Lopez",
      "status": "Accepted",
      "employees": 3899317,
      "turnover": 2742391,
      "year": 1929
    },
    {
      "_id": "63dd2147c1d3135cd00ca962",
      "name": "VELITY",
      "ceo": "Rosanna Norris",
      "status": "Rejected",
      "employees": 3318146,
      "turnover": 2825440,
      "year": 1979
    },
    {
      "_id": "63dd21472ccf845948daae88",
      "name": "CINASTER",
      "ceo": "Eunice Pittman",
      "status": "Rejected",
      "employees": 1588686,
      "turnover": 3305640,
      "year": 1808
    },
    {
      "_id": "63dd2147c7862852319b6e86",
      "name": "CUIZINE",
      "ceo": "Dudley Fitzgerald",
      "status": "Accepted",
      "employees": 1118025,
      "turnover": 2949108,
      "year": 2012
    },
    {
      "_id": "63dd21476d2540be3301ab7d",
      "name": "NAMEGEN",
      "ceo": "Good Evans",
      "status": "Accepted",
      "employees": 1728675,
      "turnover": 3042397,
      "year": 2016
    },
    {
      "_id": "63dd21475fb96a23e9c3d428",
      "name": "SPACEWAX",
      "ceo": "Natasha Hammond",
      "status": "Rejected",
      "employees": 1552748,
      "turnover": 2184409,
      "year": 1986
    },
    {
      "_id": "63dd2147d2f9f0185e22025c",
      "name": "PETICULAR",
      "ceo": "Melisa Sutton",
      "status": "Accepted",
      "employees": 3636649,
      "turnover": 953396,
      "year": 1949
    },
    {
      "_id": "63dd214759d6b22c590312be",
      "name": "SHOPABOUT",
      "ceo": "Deirdre Parsons",
      "status": "Accepted",
      "employees": 2337633,
      "turnover": 2981015,
      "year": 1948
    },
    {
      "_id": "63dd21474cce5d0178d82805",
      "name": "SCHOOLIO",
      "ceo": "Mara Solis",
      "status": "Accepted",
      "employees": 1365149,
      "turnover": 356835,
      "year": 1821
    },
    {
      "_id": "63dd21472224ac0ee232a3f2",
      "name": "WRAPTURE",
      "ceo": "Koch Fry",
      "status": "Accepted",
      "employees": 1374474,
      "turnover": 1483614,
      "year": 1918
    },
    {
      "_id": "63dd2147ef8bcb0f216ff879",
      "name": "LUXURIA",
      "ceo": "Castaneda Flynn",
      "status": "Accepted",
      "employees": 3527710,
      "turnover": 3586132,
      "year": 1991
    },
    {
      "_id": "63dd21470903bbb6213494f7",
      "name": "EARTHPURE",
      "ceo": "Washington Palmer",
      "status": "Rejected",
      "employees": 53430,
      "turnover": 856884,
      "year": 1931
    },
    {
      "_id": "63dd2147246277e096fd748d",
      "name": "FLUM",
      "ceo": "White Douglas",
      "status": "Accepted",
      "employees": 1754316,
      "turnover": 1755990,
      "year": 1898
    },
    {
      "_id": "63dd214774c56cbf3300db74",
      "name": "MENBRAIN",
      "ceo": "Rosella Foley",
      "status": "Rejected",
      "employees": 1132449,
      "turnover": 431419,
      "year": 1994
    },
    {
      "_id": "63dd21471b656e46e9a90ba9",
      "name": "SNOWPOKE",
      "ceo": "Claudine Giles",
      "status": "Rejected",
      "employees": 256442,
      "turnover": 528016,
      "year": 1849
    },
    {
      "_id": "63dd21478af0178612026c37",
      "name": "AQUOAVO",
      "ceo": "April Le",
      "status": "Rejected",
      "employees": 3716798,
      "turnover": 2114173,
      "year": 1917
    },
    {
      "_id": "63dd2147e29999f0e82c7036",
      "name": "SLAX",
      "ceo": "Cherry Schwartz",
      "status": "Rejected",
      "employees": 3338367,
      "turnover": 1113483,
      "year": 1952
    },
    {
      "_id": "63dd2147125695e5046811c9",
      "name": "VIRVA",
      "ceo": "Adriana Huber",
      "status": "New",
      "employees": 146707,
      "turnover": 1586444,
      "year": 1869
    },
    {
      "_id": "63dd214752273cdfc49dcc44",
      "name": "MAGNEATO",
      "ceo": "Douglas Russo",
      "status": "New",
      "employees": 721776,
      "turnover": 1029579,
      "year": 1893
    },
    {
      "_id": "63dd2147af0ed7e5ff3fa8ac",
      "name": "INSURON",
      "ceo": "Monique Davenport",
      "status": "Rejected",
      "employees": 1232112,
      "turnover": 2845464,
      "year": 2009
    },
    {
      "_id": "63dd21471a3eeaa6cc24c3c0",
      "name": "TRIPSCH",
      "ceo": "Inez Bradley",
      "status": "Accepted",
      "employees": 1599375,
      "turnover": 743901,
      "year": 1867
    },
    {
      "_id": "63dd2147a1cb50b36d1c0da8",
      "name": "IMKAN",
      "ceo": "Phillips Crane",
      "status": "New",
      "employees": 3661700,
      "turnover": 2958270,
      "year": 1896
    },
    {
      "_id": "63dd2147f4f6d43174857930",
      "name": "ZILENCIO",
      "ceo": "Hawkins Peters",
      "status": "Accepted",
      "employees": 3719430,
      "turnover": 1467656,
      "year": 1989
    },
    {
      "_id": "63dd21475d7c74607832f579",
      "name": "SURETECH",
      "ceo": "Rush Rivers",
      "status": "Rejected",
      "employees": 2417346,
      "turnover": 1440483,
      "year": 1865
    },
    {
      "_id": "63dd214767a17ba162df2820",
      "name": "LIQUIDOC",
      "ceo": "Barton Mcclain",
      "status": "New",
      "employees": 2722936,
      "turnover": 2663296,
      "year": 1957
    },
    {
      "_id": "63dd2147026f326a6c3d99cd",
      "name": "ULTRIMAX",
      "ceo": "Whitaker Brennan",
      "status": "Accepted",
      "employees": 3250891,
      "turnover": 2918774,
      "year": 1805
    },
    {
      "_id": "63dd2147cef9a6faa3ff7b44",
      "name": "COMTEST",
      "ceo": "Judith Oneill",
      "status": "Rejected",
      "employees": 3609240,
      "turnover": 99135,
      "year": 1896
    },
    {
      "_id": "63dd2147ac3e09381802b4df",
      "name": "CORPORANA",
      "ceo": "Roberta Rodgers",
      "status": "New",
      "employees": 3101982,
      "turnover": 3496040,
      "year": 1803
    },
    {
      "_id": "63dd214705ec7ebb6b76c0e8",
      "name": "GEOFARM",
      "ceo": "Rivera Pierce",
      "status": "New",
      "employees": 814337,
      "turnover": 770526,
      "year": 1975
    },
    {
      "_id": "63dd21478519add9c87b82ff",
      "name": "PATHWAYS",
      "ceo": "Darcy Conner",
      "status": "Rejected",
      "employees": 1556657,
      "turnover": 1327147,
      "year": 1945
    },
    {
      "_id": "63dd2147beef37e0f34f1006",
      "name": "TERRASYS",
      "ceo": "Duran Frye",
      "status": "Rejected",
      "employees": 835335,
      "turnover": 3256165,
      "year": 2009
    },
    {
      "_id": "63dd2147b12ddb863b10ea7a",
      "name": "ZENCO",
      "ceo": "Horn Swanson",
      "status": "New",
      "employees": 979382,
      "turnover": 2758481,
      "year": 1975
    },
    {
      "_id": "63dd21472a248379a9b6be71",
      "name": "VIAGREAT",
      "ceo": "Stacie Fox",
      "status": "Rejected",
      "employees": 82074,
      "turnover": 1601016,
      "year": 1995
    },
    {
      "_id": "63dd21472486da3e06d3e9dd",
      "name": "MARKETOID",
      "ceo": "Meagan Gray",
      "status": "Rejected",
      "employees": 1136220,
      "turnover": 2757111,
      "year": 1884
    },
    {
      "_id": "63dd2147239c2007d950c1d9",
      "name": "PRINTSPAN",
      "ceo": "Brianna Kirkland",
      "status": "Rejected",
      "employees": 2333347,
      "turnover": 2643266,
      "year": 1857
    },
    {
      "_id": "63dd214714ff04961c81d499",
      "name": "ACCUPHARM",
      "ceo": "Carolyn Greene",
      "status": "New",
      "employees": 176378,
      "turnover": 3694370,
      "year": 1805
    },
    {
      "_id": "63dd21473e221fa55c70e26f",
      "name": "NAXDIS",
      "ceo": "Patrick Simmons",
      "status": "Rejected",
      "employees": 3860248,
      "turnover": 1256134,
      "year": 1997
    },
    {
      "_id": "63dd21473fdd24c94e60829c",
      "name": "MAZUDA",
      "ceo": "Avila Cantrell",
      "status": "Rejected",
      "employees": 1242341,
      "turnover": 671819,
      "year": 1830
    },
    {
      "_id": "63dd2147355a1e38a3765e45",
      "name": "TELEQUIET",
      "ceo": "Glenna Hutchinson",
      "status": "Rejected",
      "employees": 3625393,
      "turnover": 2827196,
      "year": 1818
    },
    {
      "_id": "63dd214718e48039eb9bfea5",
      "name": "COMCUBINE",
      "ceo": "Heather Hobbs",
      "status": "Accepted",
      "employees": 2882655,
      "turnover": 433776,
      "year": 1830
    },
    {
      "_id": "63dd2147aeebed703e402a6e",
      "name": "COMVERGES",
      "ceo": "Willie Ellison",
      "status": "Accepted",
      "employees": 3084274,
      "turnover": 1292841,
      "year": 2008
    },
    {
      "_id": "63dd21474d11093c96fecdea",
      "name": "XYMONK",
      "ceo": "Laurie Durham",
      "status": "New",
      "employees": 1391027,
      "turnover": 146070,
      "year": 1844
    },
    {
      "_id": "63dd21474abe0a0c571e0ce4",
      "name": "ACRODANCE",
      "ceo": "Nielsen Tucker",
      "status": "Rejected",
      "employees": 1509800,
      "turnover": 841923,
      "year": 1907
    },
    {
      "_id": "63dd21472e61c72bd48f0d26",
      "name": "ISOSURE",
      "ceo": "Mack Myers",
      "status": "Rejected",
      "employees": 65443,
      "turnover": 2425271,
      "year": 1942
    },
    {
      "_id": "63dd21471b9b02aa72bfa931",
      "name": "BITREX",
      "ceo": "Cortez Jimenez",
      "status": "Rejected",
      "employees": 3502420,
      "turnover": 104685,
      "year": 1925
    },
    {
      "_id": "63dd214764d978034c3698ee",
      "name": "ENJOLA",
      "ceo": "Rosanne Atkins",
      "status": "Accepted",
      "employees": 1399776,
      "turnover": 1279151,
      "year": 1955
    },
    {
      "_id": "63dd2147bc36149ed2e9608b",
      "name": "ZEAM",
      "ceo": "Miller Ellis",
      "status": "Accepted",
      "employees": 608528,
      "turnover": 879878,
      "year": 1913
    },
    {
      "_id": "63dd21473fa7c787e6f5a0cc",
      "name": "BUZZOPIA",
      "ceo": "Maude Snider",
      "status": "New",
      "employees": 3816212,
      "turnover": 281349,
      "year": 1991
    },
    {
      "_id": "63dd2147f59239a5b96c01ea",
      "name": "PROGENEX",
      "ceo": "Campos Brooks",
      "status": "Rejected",
      "employees": 111921,
      "turnover": 2573298,
      "year": 1835
    },
    {
      "_id": "63dd21474897bb2ab376226c",
      "name": "FILODYNE",
      "ceo": "Charles Knowles",
      "status": "Rejected",
      "employees": 451302,
      "turnover": 1335850,
      "year": 1845
    },
    {
      "_id": "63dd21474ee1ebf4ac2098b5",
      "name": "SINGAVERA",
      "ceo": "Elaine Patton",
      "status": "New",
      "employees": 2586420,
      "turnover": 3409037,
      "year": 1910
    },
    {
      "_id": "63dd2147b788f4b4df7f7f92",
      "name": "SLOGANAUT",
      "ceo": "Strickland Burns",
      "status": "Rejected",
      "employees": 3661318,
      "turnover": 2926930,
      "year": 1851
    },
    {
      "_id": "63dd2147a52ebe451fc17696",
      "name": "ISONUS",
      "ceo": "Shirley Lyons",
      "status": "Rejected",
      "employees": 3587960,
      "turnover": 1539775,
      "year": 1979
    },
    {
      "_id": "63dd2147c5695a7b29e75b77",
      "name": "MULTIFLEX",
      "ceo": "Macdonald Gates",
      "status": "New",
      "employees": 604461,
      "turnover": 3208606,
      "year": 1950
    },
    {
      "_id": "63dd2147d771d74312e0db5a",
      "name": "VENOFLEX",
      "ceo": "Nadine Kline",
      "status": "Rejected",
      "employees": 1888379,
      "turnover": 3537266,
      "year": 1931
    },
    {
      "_id": "63dd2147d2986337c166daa3",
      "name": "PROSELY",
      "ceo": "Hattie Schneider",
      "status": "New",
      "employees": 2550776,
      "turnover": 3626877,
      "year": 1860
    },
    {
      "_id": "63dd214730a28c12d6b2739d",
      "name": "ZUVY",
      "ceo": "Livingston Briggs",
      "status": "Accepted",
      "employees": 1910110,
      "turnover": 3415370,
      "year": 1826
    },
    {
      "_id": "63dd21475844533ada0257da",
      "name": "QUARX",
      "ceo": "Nelson Mcguire",
      "status": "Accepted",
      "employees": 1963169,
      "turnover": 984932,
      "year": 1841
    },
    {
      "_id": "63dd2147926a0b29c3c84d55",
      "name": "AQUAZURE",
      "ceo": "Mia Puckett",
      "status": "Accepted",
      "employees": 110507,
      "turnover": 3144311,
      "year": 1880
    },
    {
      "_id": "63dd2147c1ff90a53d0d7559",
      "name": "ISOSPHERE",
      "ceo": "Saunders Richmond",
      "status": "New",
      "employees": 1593089,
      "turnover": 3338051,
      "year": 1835
    },
    {
      "_id": "63dd2147782df354249df7f5",
      "name": "ISOTERNIA",
      "ceo": "Ramona Robertson",
      "status": "New",
      "employees": 329934,
      "turnover": 3399173,
      "year": 2004
    },
    {
      "_id": "63dd21471908cbc8f6a8ceb2",
      "name": "SLOFAST",
      "ceo": "Bertha Bradshaw",
      "status": "Accepted",
      "employees": 1581728,
      "turnover": 1064999,
      "year": 1880
    },
    {
      "_id": "63dd2147c2a993c93bd174d4",
      "name": "SONGLINES",
      "ceo": "Horton Burnett",
      "status": "New",
      "employees": 2928442,
      "turnover": 1972217,
      "year": 1803
    },
    {
      "_id": "63dd2147d155c4952291913d",
      "name": "ZAGGLES",
      "ceo": "Esperanza Klein",
      "status": "New",
      "employees": 2485485,
      "turnover": 340942,
      "year": 2008
    },
    {
      "_id": "63dd214779b3ddf2e353beb0",
      "name": "CORECOM",
      "ceo": "Mcclure Taylor",
      "status": "Rejected",
      "employees": 2831121,
      "turnover": 2364054,
      "year": 1903
    },
    {
      "_id": "63dd2147cac8952d33665621",
      "name": "UPLINX",
      "ceo": "Hinton Quinn",
      "status": "New",
      "employees": 3883477,
      "turnover": 2967513,
      "year": 1862
    },
    {
      "_id": "63dd2147da8a903947fd9068",
      "name": "IPLAX",
      "ceo": "Viola Yates",
      "status": "Rejected",
      "employees": 3608306,
      "turnover": 857176,
      "year": 1855
    },
    {
      "_id": "63dd2147ba8446b7fdda7a1c",
      "name": "DATACATOR",
      "ceo": "Tania Vance",
      "status": "New",
      "employees": 3451253,
      "turnover": 3551830,
      "year": 1856
    },
    {
      "_id": "63dd2147006e1e25f40afa56",
      "name": "CEPRENE",
      "ceo": "Tammie Francis",
      "status": "Accepted",
      "employees": 2322651,
      "turnover": 715847,
      "year": 1915
    },
    {
      "_id": "63dd2147397dff6144a02793",
      "name": "COMSTRUCT",
      "ceo": "Lauri Monroe",
      "status": "New",
      "employees": 3967981,
      "turnover": 2221027,
      "year": 1899
    },
    {
      "_id": "63dd21476840f51b71551f0b",
      "name": "INTERGEEK",
      "ceo": "Leticia Caldwell",
      "status": "Accepted",
      "employees": 1921723,
      "turnover": 3547478,
      "year": 1865
    },
    {
      "_id": "63dd21478f34b542eb8a8565",
      "name": "EMERGENT",
      "ceo": "Mae Brown",
      "status": "New",
      "employees": 3754911,
      "turnover": 3152844,
      "year": 2017
    },
    {
      "_id": "63dd21474b104894f4f24776",
      "name": "REALMO",
      "ceo": "Addie Maddox",
      "status": "New",
      "employees": 1826277,
      "turnover": 2308493,
      "year": 1867
    },
    {
      "_id": "63dd2147775811e2239418db",
      "name": "ZIPAK",
      "ceo": "Mcleod Good",
      "status": "Rejected",
      "employees": 1424395,
      "turnover": 284630,
      "year": 1832
    },
    {
      "_id": "63dd21479c385ffb19dd1fe9",
      "name": "KNOWLYSIS",
      "ceo": "Carrie Hayes",
      "status": "Rejected",
      "employees": 3481111,
      "turnover": 1028580,
      "year": 1854
    },
    {
      "_id": "63dd2147bd5c94cb7328c311",
      "name": "FIBRODYNE",
      "ceo": "Terrell Baird",
      "status": "Rejected",
      "employees": 949605,
      "turnover": 1526200,
      "year": 1867
    },
    {
      "_id": "63dd21473ad7be1e4df10037",
      "name": "EVENTIX",
      "ceo": "Veronica Watson",
      "status": "Accepted",
      "employees": 1313803,
      "turnover": 2507365,
      "year": 1949
    },
    {
      "_id": "63dd21474f3a0d20238ffdc0",
      "name": "EARBANG",
      "ceo": "Cassie Gregory",
      "status": "Rejected",
      "employees": 1331173,
      "turnover": 1663173,
      "year": 1908
    },
    {
      "_id": "63dd2147cbb4a44586955839",
      "name": "NETUR",
      "ceo": "Maxine Bush",
      "status": "Accepted",
      "employees": 3205459,
      "turnover": 1775317,
      "year": 1841
    },
    {
      "_id": "63dd21477d9f68e251d9180f",
      "name": "CENTICE",
      "ceo": "Bullock Leon",
      "status": "New",
      "employees": 1403916,
      "turnover": 875442,
      "year": 1866
    },
    {
      "_id": "63dd214721dcee2085a55991",
      "name": "OLYMPIX",
      "ceo": "Hernandez Walters",
      "status": "Rejected",
      "employees": 3936012,
      "turnover": 3345167,
      "year": 1928
    },
    {
      "_id": "63dd2147e1d6ecd0d70c69f1",
      "name": "ORBIFLEX",
      "ceo": "Katherine Delacruz",
      "status": "New",
      "employees": 3475728,
      "turnover": 484766,
      "year": 1918
    },
    {
      "_id": "63dd214781c49e33214a2f46",
      "name": "CYCLONICA",
      "ceo": "Manuela Mcdonald",
      "status": "Rejected",
      "employees": 1322207,
      "turnover": 2922296,
      "year": 1802
    },
    {
      "_id": "63dd2147abd977296fbcf05c",
      "name": "EZENT",
      "ceo": "Curry Sanchez",
      "status": "Rejected",
      "employees": 3297896,
      "turnover": 2531793,
      "year": 1917
    },
    {
      "_id": "63dd21471efae92d912b9482",
      "name": "REMOTION",
      "ceo": "Maryanne Baker",
      "status": "Accepted",
      "employees": 1224923,
      "turnover": 2994741,
      "year": 1856
    },
    {
      "_id": "63dd21476a9892c8f00c5dcd",
      "name": "AQUASSEUR",
      "ceo": "Copeland Lester",
      "status": "New",
      "employees": 3423520,
      "turnover": 3638823,
      "year": 1977
    },
    {
      "_id": "63dd214720f73db1cc57c0ec",
      "name": "SENTIA",
      "ceo": "Shaffer Bass",
      "status": "New",
      "employees": 2529082,
      "turnover": 2996836,
      "year": 1912
    },
    {
      "_id": "63dd2147a22b2a50d0eefc84",
      "name": "RECRISYS",
      "ceo": "Meghan Melton",
      "status": "Rejected",
      "employees": 3046725,
      "turnover": 3842792,
      "year": 1824
    },
    {
      "_id": "63dd2147edfe1610ca297f02",
      "name": "ARTWORLDS",
      "ceo": "Nanette Reid",
      "status": "New",
      "employees": 679302,
      "turnover": 3344087,
      "year": 1908
    },
    {
      "_id": "63dd2147e52ab7e0b3be2029",
      "name": "OTHERWAY",
      "ceo": "Velazquez Porter",
      "status": "Accepted",
      "employees": 1282055,
      "turnover": 3541663,
      "year": 1803
    },
    {
      "_id": "63dd2147bfdde64e6489f814",
      "name": "CUBICIDE",
      "ceo": "Farrell Ortiz",
      "status": "Rejected",
      "employees": 1954326,
      "turnover": 3539670,
      "year": 1983
    },
    {
      "_id": "63dd2147066edc24f443263b",
      "name": "BEDLAM",
      "ceo": "Misty West",
      "status": "New",
      "employees": 3847041,
      "turnover": 108064,
      "year": 1823
    },
    {
      "_id": "63dd214743b5eb7616c04b7f",
      "name": "COMBOT",
      "ceo": "Sherry Crawford",
      "status": "New",
      "employees": 3879651,
      "turnover": 892957,
      "year": 1924
    },
    {
      "_id": "63dd214720029f9cdec16fe7",
      "name": "COMCUR",
      "ceo": "Cooke Ruiz",
      "status": "Accepted",
      "employees": 2140100,
      "turnover": 2253781,
      "year": 1920
    },
    {
      "_id": "63dd21475080d896c987d6cb",
      "name": "ENERVATE",
      "ceo": "Lynnette Richard",
      "status": "New",
      "employees": 521782,
      "turnover": 1931521,
      "year": 1903
    },
    {
      "_id": "63dd2147f86a0efe1c6c6bd4",
      "name": "AUTOMON",
      "ceo": "Felicia Leonard",
      "status": "Rejected",
      "employees": 1976111,
      "turnover": 441817,
      "year": 1940
    },
    {
      "_id": "63dd21475aec502d79144f9f",
      "name": "TWIIST",
      "ceo": "Riggs Ferrell",
      "status": "New",
      "employees": 2857819,
      "turnover": 3463222,
      "year": 1870
    },
    {
      "_id": "63dd21470c9b8ca8c0aee9a1",
      "name": "EQUITOX",
      "ceo": "Zamora Wade",
      "status": "Accepted",
      "employees": 1987431,
      "turnover": 2753551,
      "year": 1804
    },
    {
      "_id": "63dd214780465222ef8920cb",
      "name": "VIOCULAR",
      "ceo": "Morse Roth",
      "status": "Rejected",
      "employees": 3049274,
      "turnover": 3340206,
      "year": 1978
    },
    {
      "_id": "63dd21474b49a85c49359297",
      "name": "KOFFEE",
      "ceo": "Eula Nieves",
      "status": "Rejected",
      "employees": 3865463,
      "turnover": 2108643,
      "year": 1956
    },
    {
      "_id": "63dd21479272f950dfd78a3f",
      "name": "COMTENT",
      "ceo": "Dora Vega",
      "status": "New",
      "employees": 272718,
      "turnover": 622785,
      "year": 1834
    },
    {
      "_id": "63dd21477b1fe08694855e73",
      "name": "PORTALIS",
      "ceo": "Robin Short",
      "status": "Accepted",
      "employees": 2699906,
      "turnover": 3865725,
      "year": 1880
    },
    {
      "_id": "63dd2147e57ef345b4d1c01c",
      "name": "RETROTEX",
      "ceo": "Chang Mccormick",
      "status": "New",
      "employees": 1806495,
      "turnover": 3076141,
      "year": 1906
    },
    {
      "_id": "63dd214719f8d2b62f929898",
      "name": "UNDERTAP",
      "ceo": "Glass Rosario",
      "status": "Accepted",
      "employees": 2529684,
      "turnover": 3805191,
      "year": 1916
    },
    {
      "_id": "63dd21474d94c0bc5b653a20",
      "name": "ANIVET",
      "ceo": "Evangelina Langley",
      "status": "Accepted",
      "employees": 553338,
      "turnover": 499927,
      "year": 1917
    },
    {
      "_id": "63dd214716b8badcafc5491a",
      "name": "IDEALIS",
      "ceo": "Juanita Jordan",
      "status": "New",
      "employees": 108673,
      "turnover": 3071793,
      "year": 1949
    },
    {
      "_id": "63dd2147abe08bfc0101fb0b",
      "name": "POSHOME",
      "ceo": "Cantu Campos",
      "status": "New",
      "employees": 3317960,
      "turnover": 1963912,
      "year": 1978
    },
    {
      "_id": "63dd2147661ab02fee59e0df",
      "name": "KIGGLE",
      "ceo": "Wade Vazquez",
      "status": "Accepted",
      "employees": 585794,
      "turnover": 3972652,
      "year": 2017
    },
    {
      "_id": "63dd21477af5052aed34bc8a",
      "name": "CORIANDER",
      "ceo": "Erica Hinton",
      "status": "Accepted",
      "employees": 2176256,
      "turnover": 3393246,
      "year": 1968
    },
    {
      "_id": "63dd214710e77202b2ca3134",
      "name": "PRISMATIC",
      "ceo": "Mcconnell Bradford",
      "status": "Rejected",
      "employees": 3989868,
      "turnover": 695469,
      "year": 1921
    },
    {
      "_id": "63dd2147d62d80a8cdb3e1da",
      "name": "LUNCHPOD",
      "ceo": "Vicki Shelton",
      "status": "New",
      "employees": 513397,
      "turnover": 928225,
      "year": 1934
    },
    {
      "_id": "63dd2147b02fa272cbe1c438",
      "name": "COREPAN",
      "ceo": "Harrington Boyer",
      "status": "Rejected",
      "employees": 1163180,
      "turnover": 3704573,
      "year": 1882
    },
    {
      "_id": "63dd2147d49074e1f145ef99",
      "name": "QUILK",
      "ceo": "Tricia Shaffer",
      "status": "Rejected",
      "employees": 219961,
      "turnover": 129107,
      "year": 1803
    },
    {
      "_id": "63dd2147597c9dfd98d8991d",
      "name": "OVERPLEX",
      "ceo": "Ruby Mann",
      "status": "New",
      "employees": 1188194,
      "turnover": 605140,
      "year": 1946
    },
    {
      "_id": "63dd2147233cdd3b456084c2",
      "name": "COMTEXT",
      "ceo": "Grimes Barnett",
      "status": "Rejected",
      "employees": 2638700,
      "turnover": 3194379,
      "year": 1911
    },
    {
      "_id": "63dd2147f0b6d4a084721aa1",
      "name": "EARTHMARK",
      "ceo": "Christina Williamson",
      "status": "Rejected",
      "employees": 241832,
      "turnover": 1352519,
      "year": 1891
    },
    {
      "_id": "63dd2147c137fca490b2a366",
      "name": "ENTOGROK",
      "ceo": "Fry Cleveland",
      "status": "New",
      "employees": 1123909,
      "turnover": 1224543,
      "year": 1994
    },
    {
      "_id": "63dd21472659b7e13dc4fa1a",
      "name": "ZILLIDIUM",
      "ceo": "Trevino Rush",
      "status": "New",
      "employees": 412211,
      "turnover": 3606471,
      "year": 1887
    },
    {
      "_id": "63dd2147bab67c1df50df5c3",
      "name": "ACUSAGE",
      "ceo": "Ginger Torres",
      "status": "Rejected",
      "employees": 3599350,
      "turnover": 2399716,
      "year": 1816
    },
    {
      "_id": "63dd21477d8f2bbe3878fa8b",
      "name": "PARAGONIA",
      "ceo": "Lara Gillespie",
      "status": "Rejected",
      "employees": 1353587,
      "turnover": 3975263,
      "year": 1999
    }
  ];

module.exports.get = (req, res)=>{
    res.status(200).send(customers);
}

module.exports.add = (req, res)=>{
    const customer = req.body;
    customers.push(customer);
    res.status(200).send(customers);
}

module.exports.update = (req, res)=>{
    const customer = req.body;
    let foundCustomerIndex = customers.findIndex(c=> c.name==customer.name);
    customers[foundCustomerIndex]=customer;
    console.log(customers);
    res.status(200).send(customers);
}

module.exports.delete = (req, res)=>{
    const name = req.params.name;
    let foundCustomerIndex = customers.findIndex(c=> c.name==name);
    customers.splice(foundCustomerIndex, 1);
    console.log(customers);
    res.status(200).send(customers);
}

