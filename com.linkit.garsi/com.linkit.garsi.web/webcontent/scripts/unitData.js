// JavaScript Document
// ��λ��������
var category  =["�ٶ�","���","����","����","���","�¶�"];
// ÿ������ľ��嵥λ����
var category_units =[
        ["��","��/��","��/��","ǧ��/Сʱ","Ӣ��/��","Ӣ��/Сʱ"],
        ["����","ƽ������","ƽ������","ƽ����","ƽ����","ƽ��ǧ��","ƽ��Ӣ��","ƽ��Ӣ��","ƽ��Ӣ��","�з�","����","��Ķ","����","ӢĶ"],
        ["��","��","��","����","����","����","����","��","��","��","����","ǧ��","˿��","΢��","Ӣ��","Ӣ��","Ӣ��","��"],
        ["��˾","��","����","�̶�","��","����","����","��","����","ǧ��","Ӣ��","Ӣʯ"],
        ["��������","������","����Ӣ��","����Ӣ��","������","����Ͱ","��","Ӣ����"],
        ["���϶�","���϶�"]
];
//��λת������
var unit_convert = [
                    [
                        [1.0000000000 ,30.8666700000 ,0.5144440000 ,1.8520000000 ,0.0191800000 ,1.1507790000 ],
                        [0.0323970000 ,1.0000000000 ,0.0166670000 ,0.0600000000 ,0.0006210000 ,0.0372820000 ],
				        [1.9438440000 ,60.0000000000 ,1.0000000000 ,3.6000000000 ,0.0373820000 ,2.2369360000 ],
				        [0.5399570000 ,16.6666670000 ,0.2777780000 ,1.0000000000 ,0.0103560000 ,0.6213710000 ],
				        [52.1385750000 ,1609.3440000000 ,26.8224000000 ,96.5606400000 ,1.0000000000 ,60.0000000000 ],
				        [0.8689760000 ,26.8224000000 ,0.4470400000 ,1.6093440000 ,0.0166670000 ,1.0000000000 ]
                    ],
                    [
                        [1.0000000000 ,1000000.0000000000 ,100000000.0000000000 ,11959.8600000000 ,10000.0000000000 ,100.0000000000 ,107639.1500000000 ,15503875.9700000000 ,38.7596900000 ,150.0000000000 ,1500.0000000000 ,15.0000000000 ,0.1500000000 ,2.4700000000 ],
				[0.0001000000 ,1.0000000000 ,100.0000000000 ,0.0119600000 ,0.0100000000 ,0.0001000000 ,0.1076390000 ,15.5038760000 ,0.0000390000 ,0.0001500000 ,0.0015000000 ,0.0000150000 ,0.0000001500 ,0.0000020000 ],
				[0.0000010000 ,0.1000000000 ,1.0000000000 ,0.0011960000 ,0.0010000000 ,0.0000010000 ,0.0107640000 ,1.5503880000 ,0.0000003862 ,0.0000150000 ,0.0001500000 ,0.0000020000 ,0.0000000150 ,0.0000002470 ],
				[0.0000840000 ,83.6130000000 ,8361.3000000000 ,1.0000000000 ,0.8361300000 ,0.0000836130 ,9.0000320000 ,1296.3255810000 ,0.0000320000 ,0.0125420000 ,0.1254190000 ,0.0012540000 ,0.0000125400 ,0.0002070000 ],
				[0.0001000000 ,100.0000000000 ,10000.0000000000 ,1.1959860000 ,1.0000000000 ,0.0000010000 ,10.7639150000 ,1550.3875970000 ,0.0000003861 ,0.0150000000 ,0.1500000000 ,0.0015000000 ,0.0000150000 ,0.0002470000 ],
				[100.0000000000 ,100000000.0000000000 ,10000000000.0000000000 ,1195986.0000000000 ,1000000.0000000000 ,1.0000000000 ,10763915.0000000000 ,1550387597.0000000000 ,38.6115290000 ,15000.0000000000 ,150000.0000000000 ,1500.0000000000 ,15.0000000000 ,247.0000000000 ],
				[0.0000090000 ,9.2903000000 ,929.0300000000 ,0.1111110000 ,0.0929030000 ,0.0000009290 ,1.0000000000 ,144.0356590000 ,0.0000003587 ,0.0013940000 ,0.0139350000 ,0.0001390000 ,0.0000010000 ,0.0000230000 ],
				[0.0000000645 ,0.0645000000 ,6.4500000000 ,0.0007710000 ,0.0006450000 ,0.0000000065 ,0.0069430000 ,1.0000000000 ,0.0000000025 ,0.0000100000 ,0.0000970000 ,0.0000009675 ,0.0000000097 ,0.0000001593 ],
				[258.9992100000 ,258999210.0000000000 ,25899921000.0000000000 ,3097594.2917110000 ,2589992.1000000000 ,2.5899920000 ,27878454.8150720000 ,4015491628.1679800000 ,1.0000000000 ,38849.8815000000 ,388498.8150000000 ,3884.9881500000 ,38.8498820000 ,639.7280490000 ],
				[0.0066670000 ,6666.6666670000 ,666666.6666670000 ,79.7324000000 ,66.6666670000 ,0.0066670000 ,717.5943330000 ,103359.1731330000 ,0.0025740000 ,1.0000000000 ,10.0000000000 ,0.1000000000 ,0.0010000000 ,0.0164670000 ],
				[0.0066670000 ,666.6666670000 ,66666.6666670000 ,7.9732400000 ,6.6666670000 ,0.0066670000 ,71.7594330000 ,10335.9173130000 ,0.0025750000 ,0.1000000000 ,1.0000000000 ,0.0100000000 ,0.0001000000 ,0.0016470000 ],
				[0.0666670000 ,66666.6666670000 ,6666666.6666670000 ,797.3240000000 ,666.6666670000 ,0.0066670000 ,7175.9433330000 ,1033591.7313330000 ,0.0025740000 ,10.0000000000 ,100.0000000000 ,1.0000000000 ,0.0100000000 ,0.1646670000 ],
				[6.6666670000 ,6666666.6666670000 ,666666666.6666670000 ,79732.4000000000 ,66666.6666670000 ,0.0666670000 ,717594.3333330000 ,103359173.1333330000 ,0.0257400000 ,1000.0000000000 ,10000.0000000000 ,100.0000000000 ,1.0000000000 ,16.4666670000 ],
				[0.4046860000 ,404686.2700000000 ,40468627.0000000000 ,4839.9911330000 ,4046.8627000000 ,0.0040470000 ,43560.0861190000 ,6274205.7368420000 ,0.0015630000 ,60.7029400000 ,607.0294050000 ,6.0702940000 ,0.0607030000 ,1.0000000000 ]                    
                    ],
                    [
                    [1.0000000000 ,10.0000000000 ,100.0000000000 ,3.3333330000 ,0.0001800000 ,333.3333330000 ,33.3333330000 ,3.7040000000 ,0.3645380000 ,3.3333330000 ,333333333.3333330000 ,333333333.3333330000 ,3333.3333330000 ,333333.3333330000 ,1.0936130000 ,13.1233600000 ,0.0020700000 ,0.1000000000],
				[0.1000000000 ,1.0000000000 ,10.0000000000 ,0.3333330000 ,0.0000180000 ,33.3333330000 ,3.3333330000 ,0.0000670000 ,0.0364540000 ,0.0333330000 ,33333333.3333330000 ,0.0033330000 ,333.3333330000 ,33333.3333330000 ,1.0936130000 ,1.3123360000 ,0.0000210000 ,0.0100000000],
				[0.0100000000 ,0.1000000000 ,1.0000000000 ,0.0333330000 ,0.0000020000 ,3.3333330000 ,0.3333330000 ,0.0000070000 ,0.0036450000 ,0.0033330000 ,3333333.3333330000 ,0.0000030000 ,33.3333330000 ,3333.3333330000 ,0.0109360000 ,0.1312340000 ,0.0000020000 ,0.0010000000 ],
				[0.3000000000 ,3.0000000000 ,30.0000000000 ,1.0000000000 ,0.0000540000 ,100.0000000000 ,10.0000000000 ,0.0002000000 ,0.1093610000 ,0.1000000000 ,100000000.0000000000 ,0.0001000000 ,1000.0000000000 ,100000.0000000000 ,0.3280840000 ,0.1312340000 ,0.0000620000 ,0.0300000000], 
				[5556.0000000000 ,55560.0000000000 ,555600.0000000000 ,18520.0000000000 ,1.0000000000 ,1852000.0000000000 ,185200.0000000000 ,3.7040000000 ,2025.3712760000 ,1852.0000000000 ,1609340000000.0000000000 ,1.8520000000 ,18520000.0000000000 ,1852000000.0000000000 ,6076.1156800000 ,72913.3863080000 ,1.1500920000 ,555.6000000000], 
				[0.0030000000 ,0.0300000000 ,0.3000000000 ,0.0100000000 ,0.0000005400 ,1.0000000000 ,0.1000000000 ,0.0000020000 ,0.0010940000 ,0.0010000000 ,1000000.0000000000 ,0.0000010000 ,10.0000000000 ,1000.0000000000 ,0.0032810000 ,0.0393700000 ,0.0000006210 ,0.0003000000 ],
				[0.0300000000 ,0.3000000000 ,3.0000000000 ,0.1000000000 ,0.0000050000 ,10.0000000000 ,1.0000000000 ,0.0000200000 ,0.0109360000 ,0.0100000000 ,10000000.0000000000 ,0.0000100000 ,100.0000000000 ,10000.0000000000 ,0.0328080000 ,0.3937010000 ,0.0000060000 ,0.0030000000], 
				[1500.0000000000 ,15000.0000000000 ,150000.0000000000 ,5000.0000000000 ,0.2700000000 ,500000.0000000000 ,50000.0000000000 ,1.0000000000 ,546.8065000000 ,500.0000000000 ,500000000000.0000000000 ,0.5000000000 ,5000000.0000000000 ,500000000.0000000000 ,1640.4200000000 ,19685.0395000000 ,0.3105000000 ,150.0000000000], 
				[2.7432000000 ,27.4320000000 ,274.3200000000 ,9.1440000000 ,0.0004940000 ,914.4000000000 ,91.4400000000 ,0.0018290000 ,1.0000000000 ,0.9144000000 ,914400000.0000000000 ,0.0009140000 ,9144.0000000000 ,914400.0000000000 ,3.0000000000 ,36.0000000000 ,0.0005680000 ,0.2743200000 ],
				[3.0000000000 ,30.0000000000 ,300.0000000000 ,10.0000000000 ,0.0005400000 ,1000.0000000000 ,100.0000000000 ,0.0020000000 ,1.0936130000 ,1.0000000000 ,1000000000.0000000000 ,0.0010000000 ,10000.0000000000 ,1000000.0000000000 ,3.2808400000 ,39.3700790000 ,0.0006210000 ,0.3000000000], 
				[0.0000000030 ,0.0000000300 ,0.0000003000 ,0.0000000100 ,0.0000000000 ,0.0000010000 ,0.0000001000 ,0.0000000000 ,0.0000000011 ,0.0000000010 ,1.0000000000 ,0.0000000000 ,0.0000100000 ,0.0010000000 ,0.0000000033 ,0.0000000394 ,0.0000000000 ,0.0000000003 ],
				[3000.0000000000 ,30000.0000000000 ,300000.0000000000 ,10000.0000000000 ,0.5400000000 ,1000000.0000000000 ,100000.0000000000 ,2.0000000000 ,1093.6130000000 ,1000.0000000000 ,1000000000000.0000000000 ,1.0000000000 ,10000000.0000000000 ,1000000000.0000000000 ,3280.8400000000 ,39370.0790000000 ,0.6210000000 ,300.0000000000 ],
				[0.0003000000 ,0.0030000000 ,0.0300000000 ,0.0010000000 ,0.0000000540 ,0.1000000000 ,0.0100000000 ,0.0000002000 ,0.0001090000 ,0.0001000000 ,100000.0000000000 ,0.0000001000 ,1.0000000000 ,100.0000000000 ,0.0003280000 ,0.0039370000 ,0.0000000621 ,0.0000300000 ],
				[0.0000030000 ,0.0000300000 ,0.0003000000 ,0.0000100000 ,0.0000000005 ,0.0010000000 ,0.0001000000 ,0.0000000020 ,0.0000010000 ,0.0000010000 ,1000.0000000000 ,0.0000000010 ,0.0100000000 ,1.0000000000 ,0.0000030000 ,0.0000390000 ,0.0000000006 ,0.0000003000 ],
				[0.9144000000 ,9.1440000000 ,91.4400000000 ,3.0480000000 ,0.0001650000 ,304.8000000000 ,30.4800000000 ,0.0006100000 ,0.3333330000 ,0.3048000000 ,304800000.0000000000 ,0.0003050000 ,3048.0000000000 ,304800.0000000000 ,1.0000000000 ,12.0000000000 ,0.0001890000 ,0.0914400000 ],
				[0.0762000000 ,0.7620000000 ,7.6200000000 ,0.2540000000 ,0.0000140000 ,25.4000000000 ,2.5400000000 ,0.0000000020 ,0.0277780000 ,0.0254000000 ,25400000.0000000000 ,0.0000250000 ,254.0000000000 ,25400.0000000000 ,0.0833330000 ,1.0000000000 ,0.0000160000 ,0.0076200000 ],
				[4828.0200000000 ,48280.2000000000 ,482802.0000000000 ,16093.4000000000 ,0.8690440000 ,1609340.0000000000 ,160934.0000000000 ,3.2186800000 ,1759.9951450000 ,1609.3400000000 ,1609340000000.0000000000 ,1.6093400000 ,16093400.0000000000 ,1609340000.0000000000 ,5279.9870460000 ,63359.8429380000 ,1.0000000000 ,482.8020000000], 
				[10.0000000000 ,100.0000000000 ,1000.0000000000 ,33.3333330000 ,0.0018000000 ,3333.3333330000 ,333.3333330000 ,0.0066670000 ,3.6453770000 ,3.3333330000 ,3333333333.3333300000 ,0.0033330000 ,33333.3333330000 ,3333333.3333330000 ,10.9361330000 ,131.2335970000 ,0.0020700000 ,1.0000000000 ]
                    ],
                    [
                    [1.0000000000 ,0.0625010000 ,15.9988710000 ,0.0000310000 ,0.0000280000 ,436.1538460000 ,0.0002840000 ,43.9534880000 ,0.0022320000 ,0.0283500000 ,0.0005580000 ,0.0044640000 ],
				[15.9997180000 ,1.0000000000 ,255.9774270000 ,0.0005000000 ,0.0004540000 ,6978.3384620000 ,0.0045360000 ,703.2434110000 ,0.0357160000 ,0.4535920000 ,0.0089290000 ,0.0714280000 ],
				[0.0625040000 ,0.0039070000 ,1.0000000000 ,0.0000020000 ,0.0000020000 ,27.2615380000 ,0.0000180000 ,2.7472870000 ,0.0001400000 ,0.0017720000 ,0.0000350000 ,0.0002790000 ],
				[31999.4620850000 ,2000.0012500000 ,511955.2710810000 ,1.0000000000 ,0.9071850000 ,13956688.3080410000 ,9.0718470000 ,1406487.9690840000 ,71.4317260000 ,907.1847400000 ,17.8579320000 ,142.8571030000 ],
				[35273.3690000000 ,2204.6240000000 ,564334.0860000000 ,1.1020000000 ,1.0000000000 ,15384615.3850000000 ,10.0000000000 ,1550387.5970000000 ,78.7400000000 ,1000.0000000000 ,19.6850000000 ,157.4730000000 ],
				[0.0022930000 ,0.0001430000 ,0.0366820000 ,0.0000000716 ,0.0000000650 ,1.0000000000 ,0.0000006500 ,0.1007750000 ,0.0000050000 ,0.0000650000 ,0.0000010000 ,0.0000100000 ],
				[3527.3369000000 ,220.4624000000 ,56433.4086000000 ,0.1102000000 ,0.1000000000 ,1538461.5385000000 ,1.0000000000 ,155038.7597000000 ,7.8740000000 ,100.0000000000 ,1.9685000000 ,15.7473000000 ],
				[0.0227510000 ,0.0014220000 ,0.3639950000 ,0.0000007108 ,0.0000006450 ,9.9230770000 ,0.0000006500 ,1.0000000000 ,0.0000510000 ,0.0006450000 ,0.0000130000 ,0.0001020000 ],
				[447.9717860000 ,27.9987250000 ,7167.0428920000 ,0.0139950000 ,0.0127000000 ,195384.6153890000 ,0.1270000000 ,19689.9224820000 ,1.0000000000 ,12.7000000000 ,0.2500000000 ,1.9999070000 ],
				[35.2733690000 ,2.2046240000 ,564.3340860000 ,0.0011020000 ,0.0010000000 ,15384.6153850000 ,0.0100000000 ,1550.3875970000 ,0.0787400000 ,1.0000000000 ,0.0196850000 ,0.1574730000 ],
				[35.2733690000 ,111.9948990000 ,28668.1715689999 ,0.0559820000 ,0.0508000000 ,781538.4615580000 ,0.5080000000 ,78759.6899280000 ,3.9999920000 ,50.8000000000 ,1.0000000000 ,7.9996280000 ],
				[223.9961220000 ,14.0000020000 ,3583.6851030000 ,0.0069980000 ,0.0063500000 ,97696.7692330000 ,0.0635030000 ,9845.4108530000 ,0.5000220000 ,6.3502900000 ,0.1250050000 ,1.0000000000 ]
                    ],
                    [
                    [1.0000000000 ,0.0000010000 ,0.0000350000 ,0.0625000000 ,0.0002640000 ,0.0000080000 ,0.0010000000 ,0.0002200000 ],
				[1000000.0000000000 ,1.0000000000 ,35.3144750000 ,62500.0000000000 ,264.2007930000 ,8.3864480000 ,1000.0000000000 ,219.9736030000 ],
				[28317.0000000000 ,0.0283170000 ,1.0000000000 ,1769.8125000000 ,7.4813740000 ,0.2374790000 ,28.3170000000 ,6.2289930000 ],
				[16.0000000000 ,0.0000160000 ,0.0005650000 ,1.0000000000 ,0.0042270000 ,0.0001340000 ,0.0160000000 ,0.0035200000 ],
				[3785.0000000000 ,0.0037850000 ,0.1336650000 ,236.5625000000 ,1.0000000000 ,0.0317430000 ,3.7850000000 ,0.8326000000 ],
				[119240.0000000000 ,0.1192400000 ,4.2108980000 ,7452.5000000000 ,31.5033030000 ,1.0000000000 ,119.2400000000 ,26.2296520000 ],
				[1000.0000000000 ,0.0010000000 ,0.0353140000 ,62.5000000000 ,0.2642010000 ,0.0083860000 ,1.0000000000 ,0.2199740000 ],
				[4546.0000000000 ,0.0045460000 ,0.1605400000 ,0.1605400000 ,1.2010570000 ,0.0381250000 ,4.5460000000 ,1.0000000000 ]
                    ],
                    [
                        [1.0000000000 ,33.8000000000 ],
				        [(17.2222220000),1.0000000000 ]
                    ]
];