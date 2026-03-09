import {Heading} from "@/components/ui/heading"
import {ButtonLink} from "@/components/ui/button-link";
import data from "@/data/how-it-works.json";
import {cn} from "@/lib/utils";
import {Steps} from "@/components/sections/how-it-works/item";

export function HowItWorksSection() {
    return (
        <section id="how-it-works" className={cn("flex flex-col md:gap-20",
            "rounded-[2rem] bg-primary px-4 md:px-20 pt-[62px] pb-[68px] md:py-28"
        )}>
            <div className="text-center md:text-start max-w-3xl pb-20 md:pb-0">
                <span
                    className="inline-block text-light-blue font-semibold text-[14px] leading-[21px] md:text-[16px] md:leading-[1.5rem] pb-[6px] md:pb-4">
                  {data.subtitle}
                </span>
                <Heading as="h2" className="text-white leading-[48px] md:leading-[62px] pb-6">{data.title}</Heading>
                <p className="text-white text-[1rem] md:text-[18px]">{data.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[68px] pb-[66px] md:pb-0">
                {data.steps.map((step, index) => (
                    <div key={index} className="w-full">
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