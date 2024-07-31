import { Section1 } from "../component1/Section1";
import { Section2 } from "../component1/Section2";
import { Section3 } from "../component1/Section3";
import { Section3_1 } from "../component1/Section3_1";
import { Section4 } from "../component1/Section4";
import { Section5 } from "../component1/Section5";
import { Section6 } from "../component1/Section6";
import { SVGUpFlow } from "../component1/svg^";
import { SVGDownFlow } from "../component1/svgV";
import { SVGDownFlow2 } from "../component1/svgV2";


export default function IndexPage(){
    return (
        <>
        <div>
            <Section1/>
            <SVGDownFlow/>
            <Section2/>
            <Section3/>
            <Section3_1/>
            <SVGUpFlow/>
            <Section4/>
            <Section5/>
            <SVGDownFlow2/>
            <Section6/>
        </div>
        </>
    )
}