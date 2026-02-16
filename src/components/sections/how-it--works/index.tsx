import {Heading} from "@/components/ui/heading"
import {ButtonLink} from "@/components/ui/button-link";
import data from "@/data/how-it-works.json";
import {cn} from "@/lib/utils";
import {Steps} from "@/components/sections/how-it--works/item";

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className={cn("flex flex-col gap-20",
            "rounded-[2rem] bg-primary px-5 md:px-20 py-10 md:py-28"
        )}>
            <div className="text-center md:text-start max-w-3xl">
                <span className="text-light-blue font-semibold text-[14px] md:text-[16px]">{data.subtitle}</span>
                <Heading as="h2" className="pb-6 pt-0 text-white">{data.title}</Heading>
                <p className="text-white">{data.description}</p>
            </div>
            <div className="flex flex-col gap-16 md:flex-row justify-between flex-wrap">
                {data.steps.map((step, index) => (
                    <div key={index} className="max-w-full lg:w-[25rem] flex-shrink-0 ">
                        <Steps
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <ButtonLink/>
            </div>
        </section>
    )
}