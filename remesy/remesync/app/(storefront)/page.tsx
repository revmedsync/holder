import { Section1 } from "../component1/Section1";
import { Section2 } from "../component1/Section2";
import { Section3 } from "../component1/Section3";
import { Section3_1 } from "../component1/Section3_1";
import { Section4 } from "../component1/Section4";

export default function IndexPage(){
    return (
        <>
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section3_1/>
            <Section4/>
        </div>
        </>
    )
}