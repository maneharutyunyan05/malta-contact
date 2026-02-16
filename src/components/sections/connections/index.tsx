import {Heading} from "@/components/ui/heading";
import data from "@/data/connections.json";
import {HorizontalScroll} from "@/components/sections/connections/horizontal-scroll";

export function ConnectionsSection() {
    return (
        <section id="connections" className="flex flex-col gap-12 py-10 md:py-28">
            <div className="px-5 md:px-20 max-w-4xl">
                <span className="text-smoky-blue font-semibold text-[14px] md:text-[16px]">{data.subtitle}</span>
                <Heading as="h2" className=" text-primary">{data.title}</Heading>
                <p className="text-primary pt-5">{data.description}</p>
            </div>
            <div>
                <HorizontalScroll features={data.features}/>
            </div>
        </section>
    )
}