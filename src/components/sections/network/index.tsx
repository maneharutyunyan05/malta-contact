import Image from "next/image"
import {Heading} from "@/components/ui/heading"
import {cn} from "@/lib/utils"
import {merriweather} from "@/config/font"
import {ButtonLink} from "@/components/ui/button-link";
import data from "@/data/network.json";

export function NetworkSection() {
    return (
        <section className="flex flex-col gap-8 md:gap-20 px-5 md:px-20 py-10 md:py-28 text-primary">
            <div className="flex flex-col gap-6 max-w-[768px] text-center md:text-start">
                <Heading as="h2">{data.title}</Heading>

                {data.content.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-[38px] md:gap-12 flex-wrap">
                {data.features.map(({icon, text}) => (
                    <div key={text}
                         className={cn("flex flex-col mx-auto max-w-[275px] gap-6",
                             "items-center md:items-start text-center md:text-start"
                         )}>
                        <Image src={icon}
                               alt={text}
                               width={48}
                               height={48}
                               className="object-contain"
                        />

                        <Heading as={"h3"} className={cn("font-medium", merriweather.className)}>
                            {text}
                        </Heading>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <ButtonLink/>
            </div>
        </section>
    )
}
