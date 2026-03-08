import Image from "next/image";
import {cn} from "@/lib/utils";

interface Props {
    textClassName?: string;
    imageClassname?: string;
}

export function Logo({textClassName, imageClassname}: Props) {
    return (
        <div className="flex gap-2 items-center">
            <div className={cn("relative w-[22.53px] h-[22.53px] md:w-8 md:h-8", imageClassname)}>
                <Image src="/images/logo.png"
                       alt="logo"
                       fill
                       className="object-contain"/>
            </div>
            <div
                className={cn(
                    "flex items-center text-[16.9px] leading-[2.0625rem] md:text-[2.25rem] md:leading-[47px]",
                    textClassName
                )}>
                <span className="font-bold text-white">
                  Malta
                </span>
                <span
                    className="font-normal text-white">Contact</span>
            </div>
        </div>
    )
}