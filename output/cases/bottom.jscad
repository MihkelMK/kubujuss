function board_extrude_1_outline_fn(){
    return new CSG.Path2D([[69.8482895,-179.5395957],[65.4483657,-163.1188567]]).appendArc([66.8625794,-160.669367],{"radius":2,"clockwise":true,"large":false}).appendPoint([86.1658179,-155.4970798]).appendArc([86.1963165,-155.4886486],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.1401408,-150.3750145]).appendArc([105.5843936,-148.2772825],{"radius":2,"clockwise":false,"large":false}).appendPoint([104.3294741,-133.9334889]).appendArc([106.1475521,-131.7667879],{"radius":2,"clockwise":true,"large":false}).appendPoint([121.8506995,-130.3929406]).appendArc([123.318687,-129.5419777],{"radius":2,"clockwise":false,"large":false}).appendPoint([126.6243877,-124.7856935]).appendArc([127.9259844,-123.956353],{"radius":2,"clockwise":true,"large":false}).appendPoint([132.3852821,-123.1854388]).appendArc([132.8561809,-123.160448],{"radius":2,"clockwise":true,"large":false}).appendPoint([143.5046725,-123.8551203]).appendArc([143.7108879,-123.8793743],{"radius":2,"clockwise":true,"large":false}).appendPoint([149.0074622,-124.7831671]).appendArc([149.1767806,-124.8196678],{"radius":2,"clockwise":true,"large":false}).appendPoint([155.8730712,-126.5698035]).appendArc([155.9079882,-126.5792675],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.4932942,-129.5513792]).appendArc([166.7101094,-129.6259048],{"radius":2,"clockwise":true,"large":false}).appendPoint([173.8760932,-132.5583337]).appendArc([174.1098434,-132.6375342],{"radius":2,"clockwise":false,"large":false}).appendPoint([178.5418833,-133.8400508]).appendArc([178.8029203,-133.8925124],{"radius":2,"clockwise":false,"large":false}).appendPoint([189.5659271,-135.3184525]).appendArc([189.5858137,-135.3209858],{"radius":2,"clockwise":false,"large":false}).appendPoint([208.335138,-137.6140076]).appendArc([210.0774415,-139.842955],{"radius":2,"clockwise":true,"large":false}).appendPoint([203.6311593,-192.3437093]).appendArc([203.6254557,-192.7791029],{"radius":2,"clockwise":false,"large":false}).appendPoint([204.3839201,-200.6575675]).appendArc([204.2474919,-201.5984357],{"radius":2,"clockwise":true,"large":false}).appendPoint([197.3132907,-218.761186]).appendArc([194.7097098,-219.8663405],{"radius":2,"clockwise":true,"large":false}).appendPoint([176.2494614,-212.407916]).appendArc([176.0799143,-212.3481292],{"radius":2,"clockwise":false,"large":false}).appendPoint([160.8275338,-207.7292308]).appendArc([159.4861177,-205.2588002],{"radius":2,"clockwise":true,"large":false}).appendPoint([163.5928421,-191.0763595]).appendArc([162.3747354,-188.6476984],{"radius":2,"clockwise":false,"large":false}).appendPoint([158.4814183,-187.1859758]).appendArc([158.368098,-187.1472598],{"radius":2,"clockwise":false,"large":false}).appendPoint([141.5161434,-181.9477198]).appendArc([141.1577425,-181.8722354],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.4717959,-180.9775291]).appendArc([131.2737998,-182.6008954],{"radius":2,"clockwise":false,"large":false}).appendPoint([131.1225031,-183.4201301]).appendArc([129.4641382,-185.0329941],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.5086995,-187.5229118]).appendArc([113.2994381,-187.5671431],{"radius":2,"clockwise":false,"large":false}).appendPoint([94.0843678,-192.7158056]).appendArc([91.6348781,-191.3015919],{"radius":2,"clockwise":true,"large":false}).appendPoint([88.2702306,-178.7445565]).appendArc([85.8207409,-177.3303428],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.2977792,-180.9538094]).appendArc([69.8482895,-179.5395957],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = board_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([-140,170,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        