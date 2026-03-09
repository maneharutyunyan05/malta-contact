import {Heading} from "@/components/ui/heading";
import data from "@/data/connections.json";
import {HorizontalScroll} from "@/components/sections/connections/horizontal-scroll";
import {cn} from "@/lib/utils";

export function ConnectionsSection() {
    return (
        <section id="connections"
                 className="flex flex-col gap-12 pt-[3.1875rem] pb-[4.6875rem] md:pt-[8.875rem] md:pb-[7.40625rem]">
            <div className="px-5 md:px-20">
                <div className="max-w-3xl">
                    <span className={cn(
                        "inline-block text-smoky-blue font-semibold ",
                        "text-[0.875rem] md:text-[1rem] leading-[1.3125rem] md:leading-[1.5rem]"
                    )}>
                      {data.subtitle}
                    </span>
                    <Heading as="h2"
                             className="pt-4 text-primary leading-[3rem] sm:leading-[3.25rem] md:leading-[3.875rem]"
                    >
                        {data.title}
                    </Heading>
                    <p className="text-primary pt-6 text-[1rem] md:text-[1.125rem] leading-[1.5rem] md:leading-[1.6875rem]">
                        {data.description}
                    </p>
                </div>
            </div>
            <div>
                <HorizontalScroll features={data.features}/>
            </div>
        </section>
    )
}