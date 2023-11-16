function standoff_extrude_4_outline_fn(){
    return CAG.circle({"center":[105.6415316,-155.8690695],"radius":2.5})
.union(
    CAG.circle({"center":[88.9468099,-173.542178],"radius":2.5})
).union(
    CAG.circle({"center":[129.979695,-176.9571204],"radius":2.5})
).union(
    CAG.circle({"center":[146.8667536,-156.5782955],"radius":2.5})
).union(
    CAG.circle({"center":[168.6226376,-188.4720964],"radius":2.5})
).union(
    CAG.circle({"center":[180.3616916,-207.3285227],"radius":2.5})
).union(
    CAG.circle({"center":[198.2917389,-198.9879051],"radius":2.5})
).union(
    CAG.circle({"center":[185.4696352,-152.351296],"radius":2.5})
).union(
    CAG.circle({"center":[149.6636552,-133.7993613],"radius":2.5})
).union(
    CAG.circle({"center":[127.8883225,-142.0653069],"radius":2.5})
).extrude({ offset: [0, 0, 4] });
}


function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[105.6415316,-155.8690695],"radius":1.5})
.union(
    CAG.circle({"center":[88.9468099,-173.542178],"radius":1.5})
).union(
    CAG.circle({"center":[129.979695,-176.9571204],"radius":1.5})
).union(
    CAG.circle({"center":[146.8667536,-156.5782955],"radius":1.5})
).union(
    CAG.circle({"center":[168.6226376,-188.4720964],"radius":1.5})
).union(
    CAG.circle({"center":[180.3616916,-207.3285227],"radius":1.5})
).union(
    CAG.circle({"center":[198.2917389,-198.9879051],"radius":1.5})
).union(
    CAG.circle({"center":[185.4696352,-152.351296],"radius":1.5})
).union(
    CAG.circle({"center":[149.6636552,-133.7993613],"radius":1.5})
).union(
    CAG.circle({"center":[127.8883225,-142.0653069],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}


function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[68.4340759,-181.9890854],[62.998876,-161.7046432]]).appendArc([64.4130897,-159.2551535],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.5697244,-153.0503519]).appendArc([87.6207038,-153.0359658],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.0129081,-148.7680097]).appendArc([103.4366801,-146.6762327],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.1627732,-132.1154108]).appendArc([103.9808512,-129.94871],{"radius":2,"clockwise":true,"large":false}).appendPoint([120.4018279,-128.5120607]).appendArc([121.9395943,-127.5534941],{"radius":2,"clockwise":false,"large":false}).appendPoint([124.6624573,-123.0442559]).appendArc([126.0311747,-122.1077732],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.4186978,-121.1689023]).appendArc([131.892951,-121.1434956],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.5369372,-121.9727771]).appendArc([144.7446114,-121.9973545],{"radius":2,"clockwise":true,"large":false}).appendPoint([151.0394529,-123.0785719]).appendArc([151.2049839,-123.1142778],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.1613873,-124.1447546]).appendArc([155.2000413,-124.1552367],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.7536934,-127.694825]).appendArc([167.9240262,-127.7512135],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.4683917,-131.0119394]).appendArc([176.7333819,-131.0925376],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.8672697,-131.5831005]).appendArc([179.0335029,-131.6139829],{"radius":2,"clockwise":false,"large":false}).appendPoint([191.8033272,-133.431786]).appendArc([191.84145,-133.4368394],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.4822331,-135.7256397]).appendArc([212.2235868,-137.9544706],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.5895031,-191.9847464]).appendArc([205.6103048,-192.604733],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.9127994,-199.4047106]).appendArc([206.7614679,-200.625458],{"radius":2,"clockwise":true,"large":false}).appendPoint([197.2656193,-221.0110113]).appendArc([194.7034469,-222.0208796],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.6553812,-213.5169091]).appendArc([173.4662334,-213.4512959],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.3836712,-209.0516583]).appendArc([157.0309985,-206.5473548],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.3807886,-192.3086289]).appendArc([160.3836935,-189.9462181],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.9786826,-189.2226947]).appendPoint([141.4301301,-183.9435617]).appendArc([141.1558797,-183.8816939],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.8162136,-182.9136159]).appendArc([132.6288012,-184.2237219],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.1422362,-185.599217]).appendArc([130.5320754,-186.913196],{"radius":2,"clockwise":true,"large":false}).appendPoint([115.97504,-188.9365879]).appendArc([115.7327498,-188.9856915],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.6701542,-195.1652953]).appendArc([90.2206645,-193.7510816],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.856017,-181.1940462]).appendArc([84.4065273,-179.7798325],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.8835656,-183.4032991]).appendArc([68.4340759,-181.9890854],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function xlBoard_extrude_4_outline_fn(){
    return new CSG.Path2D([[68.4340759,-181.9890854],[62.998876,-161.7046432]]).appendArc([64.4130897,-159.2551535],{"radius":2,"clockwise":true,"large":false}).appendPoint([87.5697244,-153.0503519]).appendArc([87.6207038,-153.0359658],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.0129081,-148.7680097]).appendArc([103.4366801,-146.6762327],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.1627732,-132.1154108]).appendArc([103.9808512,-129.94871],{"radius":2,"clockwise":true,"large":false}).appendPoint([120.4018279,-128.5120607]).appendArc([121.9395943,-127.5534941],{"radius":2,"clockwise":false,"large":false}).appendPoint([124.6624573,-123.0442559]).appendArc([126.0311747,-122.1077732],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.4186978,-121.1689023]).appendArc([131.892951,-121.1434956],{"radius":2,"clockwise":true,"large":false}).appendPoint([144.5369372,-121.9727771]).appendArc([144.7446114,-121.9973545],{"radius":2,"clockwise":true,"large":false}).appendPoint([151.0394529,-123.0785719]).appendArc([151.2049839,-123.1142778],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.1613873,-124.1447546]).appendArc([155.2000413,-124.1552367],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.7536934,-127.694825]).appendArc([167.9240262,-127.7512135],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.4683917,-131.0119394]).appendArc([176.7333819,-131.0925376],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.8672697,-131.5831005]).appendArc([179.0335029,-131.6139829],{"radius":2,"clockwise":false,"large":false}).appendPoint([191.8033272,-133.431786]).appendArc([191.84145,-133.4368394],{"radius":2,"clockwise":false,"large":false}).appendPoint([210.4822331,-135.7256397]).appendArc([212.2235868,-137.9544706],{"radius":2,"clockwise":true,"large":false}).appendPoint([205.5895031,-191.9847464]).appendArc([205.6103048,-192.604733],{"radius":2,"clockwise":false,"large":false}).appendPoint([206.9127994,-199.4047106]).appendArc([206.7614679,-200.625458],{"radius":2,"clockwise":true,"large":false}).appendPoint([197.2656193,-221.0110113]).appendArc([194.7034469,-222.0208796],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.6553812,-213.5169091]).appendArc([173.4662334,-213.4512959],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.3836712,-209.0516583]).appendArc([157.0309985,-206.5473548],{"radius":2,"clockwise":true,"large":false}).appendPoint([161.3807886,-192.3086289]).appendArc([160.3836935,-189.9462181],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.9786826,-189.2226947]).appendPoint([141.4301301,-183.9435617]).appendArc([141.1558797,-183.8816939],{"radius":2,"clockwise":false,"large":false}).appendPoint([134.8162136,-182.9136159]).appendArc([132.6288012,-184.2237219],{"radius":2,"clockwise":false,"large":false}).appendPoint([132.1422362,-185.599217]).appendArc([130.5320754,-186.913196],{"radius":2,"clockwise":true,"large":false}).appendPoint([115.97504,-188.9365879]).appendArc([115.7327498,-188.9856915],{"radius":2,"clockwise":false,"large":false}).appendPoint([92.6701542,-195.1652953]).appendArc([90.2206645,-193.7510816],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.856017,-181.1940462]).appendArc([84.4065273,-179.7798325],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.8835656,-183.4032991]).appendArc([68.4340759,-181.9890854],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function board_extrude_4_outline_fn(){
    return new CSG.Path2D([[69.8482895,-179.5395957],[65.4483657,-163.1188567]]).appendArc([66.8625794,-160.669367],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.1658179,-155.4970798]).appendArc([86.1963165,-155.4886486],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.1401408,-150.3750145]).appendArc([105.5843936,-148.2772825],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.3294741,-133.9334889]).appendArc([106.1475521,-131.7667879],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.8506995,-130.3929406]).appendArc([123.318687,-129.5419777],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.6243877,-124.7856935]).appendArc([127.9259844,-123.956353],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.3852821,-123.1854388]).appendArc([132.8561809,-123.160448],{"radius":2,"clockwise":true,"large":false}).appendPoint([143.5046725,-123.8551203]).appendArc([143.7108879,-123.8793743],{"radius":2,"clockwise":true,"large":false}).appendPoint([149.0074622,-124.7831671]).appendArc([149.1767806,-124.8196678],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.8730712,-126.5698035]).appendArc([155.9079882,-126.5792675],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.4932942,-129.5513792]).appendArc([166.7101094,-129.6259048],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.8760932,-132.5583337]).appendArc([174.1098434,-132.6375342],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.5418833,-133.8400508]).appendArc([178.8029203,-133.8925124],{"radius":2,"clockwise":false,"large":false}).appendPoint([189.5659271,-135.3184525]).appendArc([189.5858137,-135.3209858],{"radius":2,"clockwise":false,"large":false}).appendPoint([208.335138,-137.6140076]).appendArc([210.0774415,-139.842955],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.6311593,-192.3437093]).appendArc([203.6254557,-192.7791029],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.3839201,-200.6575675]).appendArc([204.2474919,-201.5984357],{"radius":2,"clockwise":true,"large":false}).appendPoint([197.3132907,-218.761186]).appendArc([194.7097098,-219.8663405],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.2494614,-212.407916]).appendArc([176.0799143,-212.3481292],{"radius":2,"clockwise":false,"large":false}).appendPoint([160.8275338,-207.7292308]).appendArc([159.4861177,-205.2588002],{"radius":2,"clockwise":true,"large":false}).appendPoint([163.5928421,-191.0763595]).appendArc([162.3747354,-188.6476984],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.4814183,-187.1859758]).appendArc([158.368098,-187.1472598],{"radius":2,"clockwise":false,"large":false}).appendPoint([141.5161434,-181.9477198]).appendArc([141.1577425,-181.8722354],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.4717959,-180.9775291]).appendArc([131.2737998,-182.6008954],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.1225031,-183.4201301]).appendArc([129.4641382,-185.0329941],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.5086995,-187.5229118]).appendArc([113.2994381,-187.5671431],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.0843678,-192.7158056]).appendArc([91.6348781,-191.3015919],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.2702306,-178.7445565]).appendArc([85.8207409,-177.3303428],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.2977792,-180.9538094]).appendArc([69.8482895,-179.5395957],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = standoff_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([-140,170,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([-140,170,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
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
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            

                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([-140,170,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = board_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([-140,170,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.subtract(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = xlBottom_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = wall_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        