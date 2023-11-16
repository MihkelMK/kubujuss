function xlBoard2_extrude_1_outline_fn(){
    return new CSG.Path2D([[376.2967869,-181.9890854],[381.7319868,-161.7046432]]).appendArc([380.3177731,-159.2551535],{"radius":2,"clockwise":false,"large":false}).appendPoint([357.1611384,-153.0503519]).appendArc([357.110159,-153.0359658],{"radius":2,"clockwise":true,"large":false}).appendPoint([342.7179547,-148.7680097]).appendArc([341.2941827,-146.6762327],{"radius":2,"clockwise":true,"large":false}).appendPoint([342.5680896,-132.1154108]).appendArc([340.7500116,-129.94871],{"radius":2,"clockwise":false,"large":false}).appendPoint([324.3290349,-128.5120607]).appendArc([322.7912685,-127.5534941],{"radius":2,"clockwise":true,"large":false}).appendPoint([320.0684055,-123.0442559]).appendArc([318.6996881,-122.1077732],{"radius":2,"clockwise":false,"large":false}).appendPoint([313.312165,-121.1689023]).appendArc([312.8379118,-121.1434956],{"radius":2,"clockwise":false,"large":false}).appendPoint([300.1939256,-121.9727771]).appendArc([299.9862514,-121.9973545],{"radius":2,"clockwise":false,"large":false}).appendPoint([293.6914099,-123.0785719]).appendArc([293.5258789,-123.1142778],{"radius":2,"clockwise":false,"large":false}).appendPoint([289.5694755,-124.1447546]).appendArc([289.5308215,-124.1552367],{"radius":2,"clockwise":false,"large":false}).appendPoint([276.9771694,-127.694825]).appendArc([276.8068366,-127.7512135],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.2624711,-131.0119394]).appendArc([267.9974809,-131.0925376],{"radius":2,"clockwise":true,"large":false}).appendPoint([265.8635931,-131.5831005]).appendArc([265.6973599,-131.6139829],{"radius":2,"clockwise":true,"large":false}).appendPoint([252.9275356,-133.431786]).appendArc([252.8894128,-133.4368394],{"radius":2,"clockwise":true,"large":false}).appendPoint([234.2486297,-135.7256397]).appendArc([232.507276,-137.9544706],{"radius":2,"clockwise":false,"large":false}).appendPoint([239.1413597,-191.9847464]).appendArc([239.120558,-192.604733],{"radius":2,"clockwise":true,"large":false}).appendPoint([237.8180634,-199.4047106]).appendArc([237.9693949,-200.625458],{"radius":2,"clockwise":false,"large":false}).appendPoint([247.4652435,-221.0110113]).appendArc([250.0274159,-222.0208796],{"radius":2,"clockwise":false,"large":false}).appendPoint([271.0754816,-213.5169091]).appendArc([271.2646294,-213.4512959],{"radius":2,"clockwise":true,"large":false}).appendPoint([286.3471916,-209.0516583]).appendArc([287.6998643,-206.5473548],{"radius":2,"clockwise":false,"large":false}).appendPoint([283.3500742,-192.3086289]).appendArc([284.3471693,-189.9462181],{"radius":2,"clockwise":true,"large":false}).appendPoint([285.7521802,-189.2226947]).appendPoint([303.3007327,-183.9435617]).appendArc([303.5749831,-183.8816939],{"radius":2,"clockwise":true,"large":false}).appendPoint([309.9146492,-182.9136159]).appendArc([312.1020616,-184.2237219],{"radius":2,"clockwise":true,"large":false}).appendPoint([312.5886266,-185.599217]).appendArc([314.1987874,-186.913196],{"radius":2,"clockwise":false,"large":false}).appendPoint([328.7558228,-188.9365879]).appendArc([328.998113,-188.9856915],{"radius":2,"clockwise":true,"large":false}).appendPoint([352.0607086,-195.1652953]).appendArc([354.5101983,-193.7510816],{"radius":2,"clockwise":false,"large":false}).appendPoint([357.8748458,-181.1940462]).appendArc([360.3243355,-179.7798325],{"radius":2,"clockwise":true,"large":false}).appendPoint([373.8472972,-183.4032991]).appendArc([376.2967869,-181.9890854],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom2_case_fn() {
                    

                // creating part 0 of case xlBottom2
                let xlBottom2__part_0 = xlBoard2_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom2__part_0_bounds = xlBottom2__part_0.getBounds();
                let xlBottom2__part_0_x = xlBottom2__part_0_bounds[0].x + (xlBottom2__part_0_bounds[1].x - xlBottom2__part_0_bounds[0].x) / 2
                let xlBottom2__part_0_y = xlBottom2__part_0_bounds[0].y + (xlBottom2__part_0_bounds[1].y - xlBottom2__part_0_bounds[0].y) / 2
                xlBottom2__part_0 = translate([-xlBottom2__part_0_x, -xlBottom2__part_0_y, 0], xlBottom2__part_0);
                xlBottom2__part_0 = rotate([0,0,0], xlBottom2__part_0);
                xlBottom2__part_0 = translate([xlBottom2__part_0_x, xlBottom2__part_0_y, 0], xlBottom2__part_0);

                xlBottom2__part_0 = translate([-280,170,0], xlBottom2__part_0);
                let result = xlBottom2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom2_case_fn();
            }

        