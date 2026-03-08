'use client';

import Image from "next/image";
import {cn} from "@/lib/utils";
import {Heading} from "@/components/ui/heading";
import {ButtonLink} from "@/components/ui/button-link";
import {useMenuStore} from "@/lib/hooks/useMenuStore";
import data from "@/data/hero.json";

export function HeroSection() {
    const {isOpen} = useMenuStore();

    return (
        <section className="relative pt-[112px]  md:pt-[7rem] md:pb-[2.125rem] min-h-[645px]">
            <Image src={data.image.src}
                   alt={data.image.alt}
                   fill
                   priority
                   className="object-cover rounded-br-[9.375rem] md:rounded-br-[12.5rem]"
            />

            <div className={cn(
                "absolute inset-0 rounded-br-[9.375rem] md:rounded-br-[12.5rem] bg-primary",
                "transition-opacity duration-300",
                isOpen ? "opacity-[0.85]" : "opacity-60"
            )}
            />

            <div className={cn(
                "relative z-10 max-w-[40.5rem] text-white transition-opacity duration-300 ",
                "flex flex-col gap-8 mx-6 md:mx-14 lg:mx-20 pt-[52.5px]  md:py-[10.413rem]",
                isOpen && "opacity-0 "
            )}>

                <Heading className="">{data.title}</Heading>
                <p className="text-[1rem] md:text-[1.125rem] ">{data.description}</p>

                <ButtonLink visible={!isOpen}
                            href="#reach-out"/>
            </div>
        </section>
    );
}