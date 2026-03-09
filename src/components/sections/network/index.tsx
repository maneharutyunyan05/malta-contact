import Image from "next/image"
import {Heading} from "@/components/ui/heading"
import {cn} from "@/lib/utils"
import {merriweather} from "@/config/font"
import {ButtonLink} from "@/components/ui/button-link";
import data from "@/data/network.json";

export function NetworkSection() {
    return (
        <section className="flex flex-col md:gap-20 px-5 md:px-20 pb-[64px] pt-[82px] md:py-28 text-primary">
            <div className="flex flex-col gap-6 max-w-[768px] text-center md:text-start pb-[33px] md:pb-0">
                <Heading as="h2" className="m-0 leading-[48px] md:leading-[62px]">
                    {data.title}
                </Heading>

                {data.content.map((desc, index) => (
                    <p className=" text-[1rem] md:text-[18px] md:leading-[1.762rem]" key={index}>
                        {desc}
                    </p>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-[38px] md:gap-12 flex-wrap pb-[54px] md:pb-0">
                {data.features.map(({icon, text}) => (
                    <div key={text}
                         className={cn(
                             "flex flex-col mx-auto max-w-[284px] gap-[15px] md:gap-6 ",
                             "mx-auto items-center md:items-start text-center md:text-start"
                         )}>
                        <Image src={icon}
                               alt={text}
                               width={48}
                               height={48}
                               className="object-contain"
                        />

                        <Heading as={"h3"} className={cn(
                            "font-medium md:text-[32px] leading-[30px] md:leading-[38px] break-words",
                            merriweather.className
                        )}>
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
