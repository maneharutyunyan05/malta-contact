'use client';

import Image from "next/image";
import {Button} from "@/components/shadcn-ui/button";
import {cn} from "@/lib/utils";
import {ButtonLink} from "@/components/ui/button-link";
import {Logo} from "@/components/ui/logo";
import {useMenuStore} from "@/lib/hooks/useMenuStore";
import {NavigationMenuComponent} from "@/components/layout/navigation-menu";
import {mainNavItems} from "@/lib/configs/site";

export function Header() {
    const {isOpen, toggle} = useMenuStore();

    return (
        <header className={cn(
            "absolute top-0 left-0 w-full",
            "flex justify-between items-center",
            "ps-5 pe-3 md:px-10 lg:px-16 py-2 md:py-2 z-20"
        )}>
            <Logo/>

            <div className="hidden lg:flex gap-9">
                <NavigationMenuComponent items={mainNavItems} />
                <ButtonLink className="!h-[40px] !py-2 !px-5 !text-[16px]"/>
            </div>

            <Button
                className="lg:hidden z-20 bg-transparent border-none hover:bg-transparent p-0 h-fit"
                onClick={toggle}
            >
                <Image
                    src={isOpen ? "/images/header/close.svg" : "/images/header/menu_open.svg"}
                    alt={isOpen ? "close" : "menu"}
                    className="object-contain"
                    width={48}
                    height={48}
                />
            </Button>

            {
                isOpen && (
                    <div className={cn("absolute top-full left-0 w-full",
                        "flex flex-col items-center  lg:hidden pt-6"
                    )}>
                        <h3 className="text-light-blue leading-[36px] pb-[19.14px]">MENU</h3>
                        <NavigationMenuComponent items={mainNavItems} isMobile menuLinkClassName='text-[35px] '/>
                        <ButtonLink className="mt-[28.85px]"/>
                    </div>
                )
            }
        </header>
    );
}