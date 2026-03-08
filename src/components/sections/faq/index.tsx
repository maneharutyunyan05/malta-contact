import {AccordionComponent} from "@/components/ui/custom-accordion";
import data from "@/data/faq.json";
import {cn} from "@/lib/utils";
import {merriweather} from "@/config/font";

export function FaqsSection() {
    return (
        <section className={cn(
            "flex flex-col gap-10 md:gap-20 rounded-[2rem] bg-primary",
            "px-5 md:px-20 pb-[79.55px] pt-[71px] md:pt-28 md:pb-[75px]"
        )}>
            <h2
                className={cn("text-white font-bold text-[1.875rem] sm:text-[48px] md:text-[52px] leading-[36px] md:leading-[62px]",
                    merriweather.className
                )}
            >
                {data.title}
            </h2>
            <AccordionComponent items={data.items}/>
        </section>
    )
}