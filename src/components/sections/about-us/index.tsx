import {Heading} from "@/components/ui/heading";
import {cn} from "@/lib/utils";
import Image from "next/image";
import data from "@/data/about-us.json";

export function AboutUsSection() {
    return (
        <section id="about-us"
                 className={cn(
                     "bg-primary text-white flex flex-col gap-14 rounded-[2rem]",
                     "px-5 md:px-20 py-10 md:py-28"
                 )}>
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
                <span className="text-light-blue font-semibold text-[14px] md:text-[16px]">{data.subtitle}</span>
                <Heading as="h2" className="text-white">{data.title}</Heading>
                <p>{data.description}</p>

                <Heading as="h3" className="text-white">
                    We exist to remove that friction — at{" "}
                    <span className="underline">NO</span> cost
                </Heading>

                <p>{data.extra} </p>
            </div>

            <div className="flex flex-col gap-6">
                <Heading as="h4" className="pb-6 pt-0 text-white text-center">
                    What this means in practice
                </Heading>
                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {data.items.map((item, index) => (
                        <div key={index}
                             className={cn(
                                 "flex flex-col justify-center items-center",
                                 "max-w-[276px] mx-auto md:max-w-full gap-4 md:gap-6"
                             )}>
                            <Image
                                src={item.icon}
                                width={40}
                                height={40}
                                alt="icon"
                                className="object-contain"
                            />
                            <p className="font-medium text-center ">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}