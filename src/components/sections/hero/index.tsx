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
        <section className="relative ">
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
                "relative z-10 max-w-3xl text-white transition-opacity duration-300 ",
                "flex flex-col gap-6 px-6 md:px-14 lg:px-20 pt-24 md:pt-52 pb-32 md:pb-64",
                isOpen && "opacity-0"
            )}>

                <Heading>{data.title}</Heading>
                <p className="text-lg md:text-xl">{data.description}</p>

                <ButtonLink href="#reach-out"/>
            </div>
        </section>
    );
}