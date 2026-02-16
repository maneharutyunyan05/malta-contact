import Image from "next/image";

export function Logo() {
    return (
        <div className="flex gap-2 items-center">
            <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image src="/images/logo.png"
                       alt="logo"
                       fill
                       className="object-contain"/>
            </div>
            <div className="flex items-center">
                <span className="text-[1.625rem] md:text-[2.25rem] font-bold text-white">Malta</span>
                <span className="text-[1.625rem] md:text-[2.25rem] font-normal text-white">Contact</span>
            </div>
        </div>
    )
}