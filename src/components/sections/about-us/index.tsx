import {Heading} from "@/components/ui/heading";
import {cn} from "@/lib/utils";
import Image from "next/image";
import data from "@/data/about-us.json";

export function AboutUsSection() {
    return (
        <section id="about-us"
                 className={cn(
                     "bg-primary text-white flex flex-col gap-[50px] md:gap-14 rounded-[2rem]",
                     "px-5 md:px-20 pt-[64px] pb-[78px] md:py-28"
                 )}>
            <div className="max-w-[1120px] mx-auto text-center flex flex-col gap-[50px] md:gap-[56px]">
                <div className="flex flex-col">
                    <span className="text-light-blue font-semibold text-[14px] md:text-[16px] pb-[6px] md:pb-6">{data.subtitle}</span>
                    <Heading as="h2" className="text-white leading-[48px] md:leading-[62px] pb-[41px] md:pb-6">{data.title}</Heading>
                    <p className="text-[16px] md:text-[18px] pb-[50px] md:pb-6"> {data.description}</p>


                    <span className="text-white text-[25px] md:text-[32px] font-semibold leading-[35.1px] md:leading-[45px]">
                        <span className="md:block">We exist to remove that friction —</span>
                        <span className="underline md:block">NO cost</span>
                    </span>
                </div>
                <span className="text-[1rem] md:text-[18px] font-light leading-[21.6px] md:leading-[22.5px] text-center max-w-[1120px] mx-auto">
                    Through a
                    <span className="font-medium">trusted local network built over time</span>
                    , we help people reach the right professionals from the start, avoiding unnecessary delays, uncertainty, and costly mistakes.
                </span>
            </div>

            <div className="flex flex-col gap-6">
                <Heading as="h4" className=" text-white text-center leading-[32px]">
                    What this means in practice
                </Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {data.items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-[15px] md:gap-6">
                            <Image
                                src={item.icon}
                                width={40}
                                height={40}
                                alt="icon"
                                className="object-contain"
                            />
                            <p className="font-medium text-center text-[18px] md:text-[15px] px-2 leading-[27px] md:leading-[22.5px]">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}