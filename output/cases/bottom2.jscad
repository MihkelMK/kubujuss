function board2_extrude_1_outline_fn(){
    return new CSG.Path2D([[374.8825733,-179.5395957],[379.2824971,-163.1188567]]).appendArc([377.8682834,-160.669367],{"radius":2,"clockwise":false,"large":false}).appendPoint([358.5650449,-155.4970798]).appendArc([358.5345463,-155.4886486],{"radius":2,"clockwise":true,"large":false}).appendPoint([340.590722,-150.3750145]).appendArc([339.1464692,-148.2772825],{"radius":2,"clockwise":true,"large":false}).appendPoint([340.4013887,-133.9334889]).appendArc([338.5833107,-131.7667879],{"radius":2,"clockwise":false,"large":false}).appendPoint([322.8801633,-130.3929406]).appendArc([321.4121758,-129.5419777],{"radius":2,"clockwise":true,"large":false}).appendPoint([318.1064751,-124.7856935]).appendArc([316.8048784,-123.956353],{"radius":2,"clockwise":false,"large":false}).appendPoint([312.3455807,-123.1854388]).appendArc([311.8746819,-123.160448],{"radius":2,"clockwise":false,"large":false}).appendPoint([301.2261903,-123.8551203]).appendArc([301.0199749,-123.8793743],{"radius":2,"clockwise":false,"large":false}).appendPoint([295.7234006,-124.7831671]).appendArc([295.5540822,-124.8196678],{"radius":2,"clockwise":false,"large":false}).appendPoint([288.8577916,-126.5698035]).appendArc([288.8228746,-126.5792675],{"radius":2,"clockwise":false,"large":false}).appendPoint([278.2375686,-129.5513792]).appendArc([278.0207534,-129.6259048],{"radius":2,"clockwise":false,"large":false}).appendPoint([270.8547696,-132.5583337]).appendArc([270.6210194,-132.6375342],{"radius":2,"clockwise":true,"large":false}).appendPoint([266.1889795,-133.8400508]).appendArc([265.9279425,-133.8925124],{"radius":2,"clockwise":true,"large":false}).appendPoint([255.1649357,-135.3184525]).appendArc([255.1450491,-135.3209858],{"radius":2,"clockwise":true,"large":false}).appendPoint([236.3957248,-137.6140076]).appendArc([234.6534213,-139.842955],{"radius":2,"clockwise":false,"large":false}).appendPoint([241.0997035,-192.3437093]).appendArc([241.1054071,-192.7791029],{"radius":2,"clockwise":true,"large":false}).appendPoint([240.3469427,-200.6575675]).appendArc([240.4833709,-201.5984357],{"radius":2,"clockwise":false,"large":false}).appendPoint([247.4175721,-218.761186]).appendArc([250.021153,-219.8663405],{"radius":2,"clockwise":false,"large":false}).appendPoint([268.4814014,-212.407916]).appendArc([268.6509485,-212.3481292],{"radius":2,"clockwise":true,"large":false}).appendPoint([283.903329,-207.7292308]).appendArc([285.2447451,-205.2588002],{"radius":2,"clockwise":false,"large":false}).appendPoint([281.1380207,-191.0763595]).appendArc([282.3561274,-188.6476984],{"radius":2,"clockwise":true,"large":false}).appendPoint([286.2494445,-187.1859758]).appendArc([286.3627648,-187.1472598],{"radius":2,"clockwise":true,"large":false}).appendPoint([303.2147194,-181.9477198]).appendArc([303.5731203,-181.8722354],{"radius":2,"clockwise":true,"large":false}).appendPoint([311.2590669,-180.9775291]).appendArc([313.457063,-182.6008954],{"radius":2,"clockwise":true,"large":false}).appendPoint([313.6083597,-183.4201301]).appendArc([315.2667246,-185.0329941],{"radius":2,"clockwise":false,"large":false}).appendPoint([331.2221633,-187.5229118]).appendArc([331.4314247,-187.5671431],{"radius":2,"clockwise":true,"large":false}).appendPoint([350.646495,-192.7158056]).appendArc([353.0959847,-191.3015919],{"radius":2,"clockwise":false,"large":false}).appendPoint([356.4606322,-178.7445565]).appendArc([358.9101219,-177.3303428],{"radius":2,"clockwise":true,"large":false}).appendPoint([372.4330836,-180.9538094]).appendArc([374.8825733,-179.5395957],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom2_case_fn() {
                    

                // creating part 0 of case bottom2
                let bottom2__part_0 = board2_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom2__part_0_bounds = bottom2__part_0.getBounds();
                let bottom2__part_0_x = bottom2__part_0_bounds[0].x + (bottom2__part_0_bounds[1].x - bottom2__part_0_bounds[0].x) / 2
                let bottom2__part_0_y = bottom2__part_0_bounds[0].y + (bottom2__part_0_bounds[1].y - bottom2__part_0_bounds[0].y) / 2
                bottom2__part_0 = translate([-bottom2__part_0_x, -bottom2__part_0_y, 0], bottom2__part_0);
                bottom2__part_0 = rotate([0,0,0], bottom2__part_0);
                bottom2__part_0 = translate([bottom2__part_0_x, bottom2__part_0_y, 0], bottom2__part_0);

                bottom2__part_0 = translate([-280,170,0], bottom2__part_0);
                let result = bottom2__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom2_case_fn();
            }

        