"use strict"

const chartData = {
  "sizes" : [ "100", "1K", "10K", "100K", "1M", "10M" ],
  "IntToInt" : [ {
    "name" : "ec",
    "data" : [ {
      "size" : "100",
      "get" : 0.0080315,
      "put" : 0.022011,
      "remove" : 0.020367
    }, {
      "size" : "1K",
      "get" : 0.041501,
      "put" : 0.102588,
      "remove" : 0.1705085
    }, {
      "size" : "10K",
      "get" : 0.1255015,
      "put" : 0.523468,
      "remove" : 0.4717365
    }, {
      "size" : "100K",
      "get" : 1.9016016,
      "put" : 5.715468,
      "remove" : 5.167286
    }, {
      "size" : "1M",
      "get" : 29.158005,
      "put" : 81.847534,
      "remove" : 66.02454
    }, {
      "size" : "10M",
      "get" : 378.67673,
      "put" : 1160.2894,
      "remove" : 909.394
    } ]
  }, {
    "name" : "fastutil",
    "data" : [ {
      "size" : "100",
      "get" : 0.0039665,
      "put" : 0.0206395,
      "remove" : 0.0178995
    }, {
      "size" : "1K",
      "get" : 0.0312805,
      "put" : 0.089745,
      "remove" : 0.090018
    }, {
      "size" : "10K",
      "get" : 0.1473665,
      "put" : 0.410173,
      "remove" : 0.463545
    }, {
      "size" : "100K",
      "get" : 1.4167235,
      "put" : 5.9613085,
      "remove" : 5.071176
    }, {
      "size" : "1M",
      "get" : 32.938488,
      "put" : 79.68289,
      "remove" : 57.567085
    }, {
      "size" : "10M",
      "get" : 585.849,
      "put" : 1215.4427,
      "remove" : 1014.43036
    } ]
  }, {
    "name" : "hppc",
    "data" : [ {
      "size" : "100",
      "get" : 0.004323,
      "put" : 0.0319035,
      "remove" : 0.03079
    }, {
      "size" : "1K",
      "get" : 0.0351065,
      "put" : 0.092666,
      "remove" : 0.090845
    }, {
      "size" : "10K",
      "get" : 0.1602475,
      "put" : 0.462221,
      "remove" : 0.530898
    }, {
      "size" : "100K",
      "get" : 1.6107095,
      "put" : 6.1505365,
      "remove" : 5.717331
    }, {
      "size" : "1M",
      "get" : 36.006565,
      "put" : 93.08832,
      "remove" : 55.32709
    }, {
      "size" : "10M",
      "get" : 683.16113,
      "put" : 1484.7208,
      "remove" : 1159.6781
    } ]
  }, {
    "name" : "java",
    "data" : [ {
      "size" : "100",
      "get" : 0.011142,
      "put" : 0.027573,
      "remove" : 0.0225705
    }, {
      "size" : "1K",
      "get" : 0.081961,
      "put" : 0.197296,
      "remove" : 0.1323175
    }, {
      "size" : "10K",
      "get" : 0.2345715,
      "put" : 0.9428385,
      "remove" : 0.63732
    }, {
      "size" : "100K",
      "get" : 3.6113925,
      "put" : 13.928774,
      "remove" : 7.5820866
    }, {
      "size" : "1M",
      "get" : 63.687157,
      "put" : 264.9735,
      "remove" : 138.33104
    }, {
      "size" : "10M",
      "get" : 836.8616,
      "put" : 5011.241,
      "remove" : 2417.3723
    } ]
  }, {
    "name" : "koloboke",
    "data" : [ {
      "size" : "100",
      "get" : 0.0055325,
      "put" : 0.038352,
      "remove" : 0.0345075
    }, {
      "size" : "1K",
      "get" : 0.047127,
      "put" : 0.069214,
      "remove" : 0.108535
    }, {
      "size" : "10K",
      "get" : 0.114052,
      "put" : 0.3950485,
      "remove" : 0.4361965
    }, {
      "size" : "100K",
      "get" : 1.094776,
      "put" : 4.483302,
      "remove" : 4.826659
    }, {
      "size" : "1M",
      "get" : 26.136576,
      "put" : 71.04274,
      "remove" : 42.729893
    }, {
      "size" : "10M",
      "get" : 496.49805,
      "put" : 1138.9137,
      "remove" : 902.0211
    } ]
  }, {
    "name" : "trove",
    "data" : [ {
      "size" : "100",
      "get" : 0.0059745,
      "put" : 0.022993,
      "remove" : 0.039516
    }, {
      "size" : "1K",
      "get" : 0.0591215,
      "put" : 0.1053255,
      "remove" : 0.2374405
    }, {
      "size" : "10K",
      "get" : 0.267444,
      "put" : 0.6818475,
      "remove" : 0.9572145
    }, {
      "size" : "100K",
      "get" : 3.372165,
      "put" : 8.403984,
      "remove" : 10.42459
    }, {
      "size" : "1M",
      "get" : 61.354446,
      "put" : 135.00208,
      "remove" : 115.80654
    }, {
      "size" : "10M",
      "get" : 1271.564,
      "put" : 2414.9468,
      "remove" : 2110.2632
    } ]
  }, {
    "name" : "trove-jb",
    "data" : [ {
      "size" : "100",
      "get" : 0.0061735,
      "put" : 0.0233915,
      "remove" : 0.0265875
    }, {
      "size" : "1K",
      "get" : 0.0498355,
      "put" : 0.0921705,
      "remove" : 0.111073
    }, {
      "size" : "10K",
      "get" : 0.269886,
      "put" : 0.7269325,
      "remove" : 0.807549
    }, {
      "size" : "100K",
      "get" : 3.5730464,
      "put" : 8.711247,
      "remove" : 6.5464034
    }, {
      "size" : "1M",
      "get" : 55.67692,
      "put" : 136.70392,
      "remove" : 72.787254
    }, {
      "size" : "10M",
      "get" : 1267.8524,
      "put" : 2566.4663,
      "remove" : 1786.5869
    } ]
  } ],
  "IntToObject" : [ {
    "name" : "ec",
    "data" : [ {
      "size" : "100",
      "get" : 0.006235,
      "put" : 0.017767,
      "remove" : 0.0219305
    }, {
      "size" : "1K",
      "get" : 0.037632,
      "put" : 0.0790335,
      "remove" : 0.1399935
    }, {
      "size" : "10K",
      "get" : 0.12163,
      "put" : 0.608282,
      "remove" : 0.420009
    }, {
      "size" : "100K",
      "get" : 1.8545135,
      "put" : 6.9482884,
      "remove" : 7.5432873
    }, {
      "size" : "1M",
      "get" : 36.884304,
      "put" : 116.01763,
      "remove" : 78.97176
    }, {
      "size" : "10M",
      "get" : 425.5107,
      "put" : 1914.8558,
      "remove" : 1195.0326
    } ]
  }, {
    "name" : "fastutil",
    "data" : [ {
      "size" : "100",
      "get" : 0.004578,
      "put" : 0.0198285,
      "remove" : 0.019861
    }, {
      "size" : "1K",
      "get" : 0.0334395,
      "put" : 0.086103,
      "remove" : 0.0938095
    }, {
      "size" : "10K",
      "get" : 0.139539,
      "put" : 0.483056,
      "remove" : 0.6272135
    }, {
      "size" : "100K",
      "get" : 1.346939,
      "put" : 6.846854,
      "remove" : 5.638914
    }, {
      "size" : "1M",
      "get" : 33.364765,
      "put" : 105.64427,
      "remove" : 58.030483
    }, {
      "size" : "10M",
      "get" : 593.7629,
      "put" : 1583.558,
      "remove" : 1260.1393
    } ]
  }, {
    "name" : "hppc",
    "data" : [ {
      "size" : "100",
      "get" : 0.0044345,
      "put" : 0.0316545,
      "remove" : 0.030453
    }, {
      "size" : "1K",
      "get" : 0.0368355,
      "put" : 0.0989695,
      "remove" : 0.1049305
    }, {
      "size" : "10K",
      "get" : 0.215243,
      "put" : 0.575374,
      "remove" : 0.5643665
    }, {
      "size" : "100K",
      "get" : 1.6281205,
      "put" : 7.2958517,
      "remove" : 5.981156
    }, {
      "size" : "1M",
      "get" : 36.282093,
      "put" : 130.16737,
      "remove" : 68.69238
    }, {
      "size" : "10M",
      "get" : 684.4896,
      "put" : 2040.748,
      "remove" : 1423.3705
    } ]
  }, {
    "name" : "java",
    "data" : [ {
      "size" : "100",
      "get" : 0.008971,
      "put" : 0.028455,
      "remove" : 0.021422
    }, {
      "size" : "1K",
      "get" : 0.0533165,
      "put" : 0.1685865,
      "remove" : 0.154537
    }, {
      "size" : "10K",
      "get" : 0.2455535,
      "put" : 0.819658,
      "remove" : 0.4735735
    }, {
      "size" : "100K",
      "get" : 3.3096275,
      "put" : 13.000278,
      "remove" : 5.2295737
    }, {
      "size" : "1M",
      "get" : 59.741634,
      "put" : 256.75955,
      "remove" : 117.2963
    }, {
      "size" : "10M",
      "get" : 754.0341,
      "put" : 4247.891,
      "remove" : 2252.2712
    } ]
  }, {
    "name" : "koloboke",
    "data" : [ {
      "size" : "100",
      "get" : 0.0061075,
      "put" : 0.033307,
      "remove" : 0.033767
    }, {
      "size" : "1K",
      "get" : 0.0476405,
      "put" : 0.096161,
      "remove" : 0.123109
    }, {
      "size" : "10K",
      "get" : 0.127778,
      "put" : 0.541564,
      "remove" : 0.53202
    }, {
      "size" : "100K",
      "get" : 1.259562,
      "put" : 7.423894,
      "remove" : 5.65798
    }, {
      "size" : "1M",
      "get" : 29.221348,
      "put" : 108.38472,
      "remove" : 63.11839
    }, {
      "size" : "10M",
      "get" : 642.5677,
      "put" : 1689.6279,
      "remove" : 1252.9207
    } ]
  }, {
    "name" : "trove",
    "data" : [ {
      "size" : "100",
      "get" : 0.0066975,
      "put" : 0.0277275,
      "remove" : 0.032377
    }, {
      "size" : "1K",
      "get" : 0.047564,
      "put" : 0.111475,
      "remove" : 0.219511
    }, {
      "size" : "10K",
      "get" : 0.2676835,
      "put" : 0.76082,
      "remove" : 1.0565705
    }, {
      "size" : "100K",
      "get" : 3.337071,
      "put" : 8.938158,
      "remove" : 11.661347
    }, {
      "size" : "1M",
      "get" : 57.71461,
      "put" : 157.99658,
      "remove" : 145.39558
    }, {
      "size" : "10M",
      "get" : 1280.5773,
      "put" : 2855.3145,
      "remove" : 2610.8677
    } ]
  }, {
    "name" : "trove-jb",
    "data" : [ {
      "size" : "100",
      "get" : 0.0078395,
      "put" : 0.023957,
      "remove" : 0.025112
    }, {
      "size" : "1K",
      "get" : 0.0471535,
      "put" : 0.1093975,
      "remove" : 0.1048355
    }, {
      "size" : "10K",
      "get" : 0.2833575,
      "put" : 0.8041685,
      "remove" : 0.716566
    }, {
      "size" : "100K",
      "get" : 3.6838524,
      "put" : 9.723541,
      "remove" : 6.924487
    }, {
      "size" : "1M",
      "get" : 69.55455,
      "put" : 155.90248,
      "remove" : 79.25712
    }, {
      "size" : "10M",
      "get" : 1441.912,
      "put" : 3043.117,
      "remove" : 2341.5562
    } ]
  } ],
  "ObjectToInt" : [ {
    "name" : "ec",
    "data" : [ {
      "size" : "100",
      "get" : 0.0086195,
      "put" : 0.0382345,
      "remove" : 0.02517
    }, {
      "size" : "1K",
      "get" : 0.0408245,
      "put" : 0.114231,
      "remove" : 0.113361
    }, {
      "size" : "10K",
      "get" : 0.227775,
      "put" : 0.790359,
      "remove" : 0.500675
    }, {
      "size" : "100K",
      "get" : 3.0791254,
      "put" : 13.48118,
      "remove" : 9.207136
    }, {
      "size" : "1M",
      "get" : 84.46253,
      "put" : 226.56474,
      "remove" : 171.93544
    }, {
      "size" : "10M",
      "get" : 936.2517,
      "put" : 4070.4932,
      "remove" : 2675.389
    } ]
  }, {
    "name" : "fastutil",
    "data" : [ {
      "size" : "100",
      "get" : 0.0056425,
      "put" : 0.0221285,
      "remove" : 0.0245265
    }, {
      "size" : "1K",
      "get" : 0.0360105,
      "put" : 0.0884825,
      "remove" : 0.1057655
    }, {
      "size" : "10K",
      "get" : 0.220666,
      "put" : 0.9559395,
      "remove" : 0.6412075
    }, {
      "size" : "100K",
      "get" : 2.5310905,
      "put" : 11.787717,
      "remove" : 8.853743
    }, {
      "size" : "1M",
      "get" : 71.50008,
      "put" : 270.90448,
      "remove" : 165.9786
    }, {
      "size" : "10M",
      "get" : 1164.7382,
      "put" : 3815.3127,
      "remove" : 3082.2031
    } ]
  }, {
    "name" : "hppc",
    "data" : [ {
      "size" : "100",
      "get" : 0.005934,
      "put" : 0.035338,
      "remove" : 0.037548
    }, {
      "size" : "1K",
      "get" : 0.035607,
      "put" : 0.121151,
      "remove" : 0.1212955
    }, {
      "size" : "10K",
      "get" : 0.193887,
      "put" : 0.6671045,
      "remove" : 0.644824
    }, {
      "size" : "100K",
      "get" : 2.1180246,
      "put" : 11.535633,
      "remove" : 11.7302065
    }, {
      "size" : "1M",
      "get" : 72.61844,
      "put" : 351.33267,
      "remove" : 197.22656
    }, {
      "size" : "10M",
      "get" : 1222.7092,
      "put" : 4926.462,
      "remove" : 3663.0127
    } ]
  }, {
    "name" : "java",
    "data" : [ {
      "size" : "100",
      "get" : 0.013922,
      "put" : 0.045055,
      "remove" : 0.0230775
    }, {
      "size" : "1K",
      "get" : 0.0790355,
      "put" : 0.191412,
      "remove" : 0.144224
    }, {
      "size" : "10K",
      "get" : 0.1774965,
      "put" : 1.079389,
      "remove" : 0.401735
    }, {
      "size" : "100K",
      "get" : 3.3051496,
      "put" : 25.567705,
      "remove" : 9.858629
    }, {
      "size" : "1M",
      "get" : 85.98234,
      "put" : 367.3399,
      "remove" : 152.5658
    }, {
      "size" : "10M",
      "get" : 1158.1367,
      "put" : 5752.08,
      "remove" : 2852.249
    } ]
  }, {
    "name" : "koloboke",
    "data" : [ {
      "size" : "100",
      "get" : 0.008097,
      "put" : 0.053224,
      "remove" : 0.0361695
    }, {
      "size" : "1K",
      "get" : 0.0475075,
      "put" : 0.137496,
      "remove" : 0.1655915
    }, {
      "size" : "10K",
      "get" : 0.1847835,
      "put" : 0.7130555,
      "remove" : 0.631527
    }, {
      "size" : "100K",
      "get" : 2.0404346,
      "put" : 11.885549,
      "remove" : 8.569263
    }, {
      "size" : "1M",
      "get" : 63.086067,
      "put" : 265.74905,
      "remove" : 163.73323
    }, {
      "size" : "10M",
      "get" : 1201.9933,
      "put" : 3747.8047,
      "remove" : 3026.4167
    } ]
  }, {
    "name" : "trove",
    "data" : [ {
      "size" : "100",
      "get" : 0.0093585,
      "put" : 0.035437,
      "remove" : 0.037781
    }, {
      "size" : "1K",
      "get" : 0.0531965,
      "put" : 0.1778375,
      "remove" : 0.291905
    }, {
      "size" : "10K",
      "get" : 0.3063925,
      "put" : 1.0592065,
      "remove" : 1.037424
    }, {
      "size" : "100K",
      "get" : 5.1668606,
      "put" : 15.001596,
      "remove" : 12.288244
    }, {
      "size" : "1M",
      "get" : 124.184685,
      "put" : 341.49304,
      "remove" : 249.78647
    }, {
      "size" : "10M",
      "get" : 1939.1031,
      "put" : 6177.4487,
      "remove" : 6937.709
    } ]
  }, {
    "name" : "trove-jb",
    "data" : [ {
      "size" : "100",
      "get" : 0.0098035,
      "put" : 0.03029,
      "remove" : 0.0280885
    }, {
      "size" : "1K",
      "get" : 0.0495605,
      "put" : 0.1185385,
      "remove" : 0.137295
    }, {
      "size" : "10K",
      "get" : 0.309111,
      "put" : 0.9668095,
      "remove" : 0.753324
    }, {
      "size" : "100K",
      "get" : 4.006422,
      "put" : 14.969391,
      "remove" : 8.434234
    }, {
      "size" : "1M",
      "get" : 125.72248,
      "put" : 344.18088,
      "remove" : 168.49246
    }, {
      "size" : "10M",
      "get" : 1939.4814,
      "put" : 5763.399,
      "remove" : 3923.5637
    } ]
  } ],
  "ObjectToObject" : [ {
    "name" : "ec",
    "data" : [ {
      "size" : "100",
      "get" : 0.006841,
      "put" : 0.031523,
      "remove" : 0.0253155
    }, {
      "size" : "1K",
      "get" : 0.036407,
      "put" : 0.284286,
      "remove" : 0.1949305
    }, {
      "size" : "10K",
      "get" : 0.181114,
      "put" : 0.748858,
      "remove" : 0.5229175
    }, {
      "size" : "100K",
      "get" : 2.5099175,
      "put" : 20.467468,
      "remove" : 9.515686
    }, {
      "size" : "1M",
      "get" : 76.50351,
      "put" : 328.99817,
      "remove" : 174.89987
    }, {
      "size" : "10M",
      "get" : 977.3793,
      "put" : 4540.307,
      "remove" : 3048.1611
    } ]
  }, {
    "name" : "fastutil",
    "data" : [ {
      "size" : "100",
      "get" : 0.005563,
      "put" : 0.0264895,
      "remove" : 0.0264245
    }, {
      "size" : "1K",
      "get" : 0.0369615,
      "put" : 0.1120085,
      "remove" : 0.121456
    }, {
      "size" : "10K",
      "get" : 0.195435,
      "put" : 0.720246,
      "remove" : 0.6603055
    }, {
      "size" : "100K",
      "get" : 2.319805,
      "put" : 15.544702,
      "remove" : 9.547209
    }, {
      "size" : "1M",
      "get" : 69.98551,
      "put" : 347.02454,
      "remove" : 179.61249
    }, {
      "size" : "10M",
      "get" : 1173.4994,
      "put" : 4354.3657,
      "remove" : 3473.4236
    } ]
  }, {
    "name" : "hppc",
    "data" : [ {
      "size" : "100",
      "get" : 0.0064495,
      "put" : 0.036789,
      "remove" : 0.03882
    }, {
      "size" : "1K",
      "get" : 0.037634,
      "put" : 0.144204,
      "remove" : 0.1287755
    }, {
      "size" : "10K",
      "get" : 0.202523,
      "put" : 0.703556,
      "remove" : 0.6565075
    }, {
      "size" : "100K",
      "get" : 2.321375,
      "put" : 15.461485,
      "remove" : 10.033352
    }, {
      "size" : "1M",
      "get" : 73.97027,
      "put" : 385.59314,
      "remove" : 197.29889
    }, {
      "size" : "10M",
      "get" : 1293.9185,
      "put" : 4481.855,
      "remove" : 3857.216
    } ]
  }, {
    "name" : "java",
    "data" : [ {
      "size" : "100",
      "get" : 0.004413,
      "put" : 0.0232725,
      "remove" : 0.017775
    }, {
      "size" : "1K",
      "get" : 0.0341765,
      "put" : 0.124181,
      "remove" : 0.1034275
    }, {
      "size" : "10K",
      "get" : 0.1211345,
      "put" : 0.549057,
      "remove" : 0.360477
    }, {
      "size" : "100K",
      "get" : 2.413882,
      "put" : 21.246664,
      "remove" : 6.78315
    }, {
      "size" : "1M",
      "get" : 74.86373,
      "put" : 303.40466,
      "remove" : 141.00145
    }, {
      "size" : "10M",
      "get" : 985.5966,
      "put" : 4805.395,
      "remove" : 2604.8525
    } ]
  }, {
    "name" : "koloboke",
    "data" : [ {
      "size" : "100",
      "get" : 0.0076615,
      "put" : 0.041938,
      "remove" : 0.0384075
    }, {
      "size" : "1K",
      "get" : 0.0479675,
      "put" : 0.1506835,
      "remove" : 0.159575
    }, {
      "size" : "10K",
      "get" : 0.1936885,
      "put" : 0.700354,
      "remove" : 0.6299295
    }, {
      "size" : "100K",
      "get" : 2.269804,
      "put" : 16.674797,
      "remove" : 9.646634
    }, {
      "size" : "1M",
      "get" : 73.57521,
      "put" : 317.15073,
      "remove" : 186.68573
    }, {
      "size" : "10M",
      "get" : 1145.5355,
      "put" : 4093.1614,
      "remove" : 3337.6733
    } ]
  }, {
    "name" : "trove",
    "data" : [ {
      "size" : "100",
      "get" : 0.008895,
      "put" : 0.033943,
      "remove" : 0.041717
    }, {
      "size" : "1K",
      "get" : 0.0507205,
      "put" : 0.1868015,
      "remove" : 0.2393885
    }, {
      "size" : "10K",
      "get" : 0.335877,
      "put" : 1.0825665,
      "remove" : 1.026948
    }, {
      "size" : "100K",
      "get" : 4.5905514,
      "put" : 13.411609,
      "remove" : 11.935393
    }, {
      "size" : "1M",
      "get" : 131.70155,
      "put" : 392.09225,
      "remove" : 233.58446
    }, {
      "size" : "10M",
      "get" : 2030.8428,
      "put" : 6175.8247,
      "remove" : 6903.488
    } ]
  }, {
    "name" : "trove-jb",
    "data" : [ {
      "size" : "100",
      "get" : 0.009341,
      "put" : 0.027377,
      "remove" : 0.0320555
    }, {
      "size" : "1K",
      "get" : 0.054608,
      "put" : 0.128316,
      "remove" : 0.138629
    }, {
      "size" : "10K",
      "get" : 0.309464,
      "put" : 1.0135955,
      "remove" : 0.79233
    }, {
      "size" : "100K",
      "get" : 4.0623364,
      "put" : 15.308026,
      "remove" : 8.5198555
    }, {
      "size" : "1M",
      "get" : 129.7029,
      "put" : 365.41953,
      "remove" : 174.6151
    }, {
      "size" : "10M",
      "get" : 1937.3118,
      "put" : 5999.4185,
      "remove" : 4038.3716
    } ]
  } ],
  "ReferenceToObject" : [ {
    "name" : "ec",
    "data" : [ {
      "size" : "100",
      "get" : 0.005827,
      "put" : 0.0282685,
      "remove" : 0.0231735
    }, {
      "size" : "1K",
      "get" : 0.0345895,
      "put" : 0.1974155,
      "remove" : 0.179424
    }, {
      "size" : "10K",
      "get" : 0.1420265,
      "put" : 0.692013,
      "remove" : 0.4921175
    }, {
      "size" : "100K",
      "get" : 1.9136015,
      "put" : 15.03251,
      "remove" : 7.6237016
    }, {
      "size" : "1M",
      "get" : 52.40549,
      "put" : 302.4895,
      "remove" : 156.33466
    }, {
      "size" : "10M",
      "get" : 672.21356,
      "put" : 4008.615,
      "remove" : 2508.5205
    } ]
  }, {
    "name" : "fastutil",
    "data" : [ {
      "size" : "100",
      "get" : 0.004442,
      "put" : 0.03413,
      "remove" : 0.0270825
    }, {
      "size" : "1K",
      "get" : 0.0342235,
      "put" : 0.0976145,
      "remove" : 0.1056195
    }, {
      "size" : "10K",
      "get" : 0.147415,
      "put" : 0.6290645,
      "remove" : 0.617065
    }, {
      "size" : "100K",
      "get" : 1.244627,
      "put" : 9.374819,
      "remove" : 8.138181
    }, {
      "size" : "1M",
      "get" : 37.84039,
      "put" : 226.15338,
      "remove" : 151.03302
    }, {
      "size" : "10M",
      "get" : 615.85004,
      "put" : 2994.8882,
      "remove" : 2623.3428
    } ]
  }, {
    "name" : "hppc",
    "data" : [ {
      "size" : "100",
      "get" : 0.005359,
      "put" : 0.0425765,
      "remove" : 0.0453875
    }, {
      "size" : "1K",
      "get" : 0.0352745,
      "put" : 0.127553,
      "remove" : 0.135235
    }, {
      "size" : "10K",
      "get" : 0.136936,
      "put" : 0.6785755,
      "remove" : 0.6742975
    }, {
      "size" : "100K",
      "get" : 1.7270665,
      "put" : 15.719857,
      "remove" : 12.681777
    }, {
      "size" : "1M",
      "get" : 43.622566,
      "put" : 336.591,
      "remove" : 215.34727
    }, {
      "size" : "10M",
      "get" : 728.945,
      "put" : 4084.5444,
      "remove" : 3554.6218
    } ]
  }, {
    "name" : "java",
    "data" : [ {
      "size" : "100",
      "get" : 0.0043815,
      "put" : 0.017234,
      "remove" : 0.018183
    }, {
      "size" : "1K",
      "get" : 0.0324295,
      "put" : 0.0965685,
      "remove" : 0.095106
    }, {
      "size" : "10K",
      "get" : 0.1484295,
      "put" : 0.5660955,
      "remove" : 0.519266
    }, {
      "size" : "100K",
      "get" : 1.3922975,
      "put" : 8.501694,
      "remove" : 6.5591717
    }, {
      "size" : "1M",
      "get" : 40.071407,
      "put" : 208.74379,
      "remove" : 136.26874
    }, {
      "size" : "10M",
      "get" : 640.2538,
      "put" : 2662.1733,
      "remove" : 2362.6357
    } ]
  }, {
    "name" : "koloboke",
    "data" : [ {
      "size" : "100",
      "get" : 0.00761,
      "put" : 0.058757,
      "remove" : 0.044415
    }, {
      "size" : "1K",
      "get" : 0.04661,
      "put" : 0.1631555,
      "remove" : 0.136602
    }, {
      "size" : "10K",
      "get" : 0.155199,
      "put" : 0.664766,
      "remove" : 0.645912
    }, {
      "size" : "100K",
      "get" : 1.654133,
      "put" : 16.530851,
      "remove" : 8.645323
    }, {
      "size" : "1M",
      "get" : 55.956013,
      "put" : 263.2949,
      "remove" : 173.21257
    }, {
      "size" : "10M",
      "get" : 716.94977,
      "put" : 3357.2256,
      "remove" : 2995.734
    } ]
  }, {
    "name" : "trove",
    "data" : [ {
      "size" : "100",
      "get" : 0.0091705,
      "put" : 0.0381075,
      "remove" : 0.033675
    }, {
      "size" : "1K",
      "get" : 0.04794,
      "put" : 0.19096,
      "remove" : 0.3111595
    }, {
      "size" : "10K",
      "get" : 0.274888,
      "put" : 0.974086,
      "remove" : 1.027809
    }, {
      "size" : "100K",
      "get" : 3.7083106,
      "put" : 11.586402,
      "remove" : 10.951916
    }, {
      "size" : "1M",
      "get" : 61.24948,
      "put" : 316.4182,
      "remove" : 227.53119
    }, {
      "size" : "10M",
      "get" : 1186.6163,
      "put" : 5325.308,
      "remove" : 6297.6113
    } ]
  }, {
    "name" : "trove-jb",
    "data" : [ {
      "size" : "100",
      "get" : 0.0086045,
      "put" : 0.0280245,
      "remove" : 0.0275155
    }, {
      "size" : "1K",
      "get" : 0.049708,
      "put" : 0.1435815,
      "remove" : 0.128661
    }, {
      "size" : "10K",
      "get" : 0.2764715,
      "put" : 0.9203335,
      "remove" : 0.750069
    }, {
      "size" : "100K",
      "get" : 3.500547,
      "put" : 11.69577,
      "remove" : 7.8935394
    }, {
      "size" : "1M",
      "get" : 57.335693,
      "put" : 314.98328,
      "remove" : 136.25735
    }, {
      "size" : "10M",
      "get" : 1184.6683,
      "put" : 5077.98,
      "remove" : 3315.179
    } ]
  } ]
}