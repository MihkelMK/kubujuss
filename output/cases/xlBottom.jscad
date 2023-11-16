function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[68.4340759,-181.9890854],[62.998876,-161.7046432]]).appendArc([64.4130897,-159.2551535],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.5697244,-153.0503519]).appendArc([87.6207038,-153.0359658],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.0129081,-148.7680097]).appendArc([103.4366801,-146.6762327],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.1627732,-132.1154108]).appendArc([103.9808512,-129.94871],{"radius":2,"clockwise":true,"large":false}).appendPoint([120.4018279,-128.5120607]).appendArc([121.9395943,-127.5534941],{"radius":2,"clockwise":false,"large":false}).appendPoint([124.6624573,-123.0442559]).appendArc([126.0311747,-122.1077732],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.4186978,-121.1689023]).appendArc([131.892951,-121.1434956],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.5369372,-121.9727771]).appendArc([144.7446114,-121.9973545],{"radius":2,"clockwise":true,"large":false}).appendPoint([151.0394529,-123.0785719]).appendArc([151.2049839,-123.1142778],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.1613873,-124.1447546]).appendArc([155.2000413,-124.1552367],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.7536934,-127.694825]).appendArc([167.9240262,-127.7512135],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.4683917,-131.0119394]).appendArc([176.7333819,-131.0925376],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.8672697,-131.5831005]).appendArc([179.0335029,-131.6139829],{"radius":2,"clockwise":false,"large":false}).appendPoint([191.8033272,-133.431786]).appendArc([191.84145,-133.4368394],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.4822331,-135.7256397]).appendArc([212.2235868,-137.9544706],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.5895031,-191.9847464]).appendArc([205.6103048,-192.604733],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.9127994,-199.4047106]).appendArc([206.7614679,-200.625458],{"radius":2,"clockwise":true,"large":false}).appendPoint([197.2656193,-221.0110113]).appendArc([194.7034469,-222.0208796],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.6553812,-213.5169091]).appendArc([173.4662334,-213.4512959],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.3836712,-209.0516583]).appendArc([157.0309985,-206.5473548],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.3807886,-192.3086289]).appendArc([160.3836935,-189.9462181],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.9786826,-189.2226947]).appendPoint([141.4301301,-183.9435617]).appendArc([141.1558797,-183.8816939],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.8162136,-182.9136159]).appendArc([132.6288012,-184.2237219],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.1422362,-185.599217]).appendArc([130.5320754,-186.913196],{"radius":2,"clockwise":true,"large":false}).appendPoint([115.97504,-188.9365879]).appendArc([115.7327498,-188.9856915],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.6701542,-195.1652953]).appendArc([90.2206645,-193.7510816],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.856017,-181.1940462]).appendArc([84.4065273,-179.7798325],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.8835656,-183.4032991]).appendArc([68.4340759,-181.9890854],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([-140,170,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        