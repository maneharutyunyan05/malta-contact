'use client';

import Image from "next/image";
import {Button} from "@/components/shadcn-ui/button";
import {cn} from "@/lib/utils";
import {ButtonLink} from "@/components/ui/button-link";
import {Logo} from "@/components/ui/logo";
import {useMenuStore} from "@/lib/hooks/useMenuStore";
import {NavigationMenuComponent} from "@/components/layout/navigation-menu";

export function Header() {
    const {isOpen, toggle} = useMenuStore();

    return (
        <header className={cn(
            "absolute top-0 left-0 w-full",
            "flex justify-between items-center",
            "px-5 md:px-10 lg:px-16 py-4 md:py-5 z-20"
        )}>
            <Logo/>

            <div className="hidden lg:flex gap-9">
                <NavigationMenuComponent/>
                <ButtonLink/>
            </div>

            <Button
                className="lg:hidden z-20 bg-transparent border-none hover:bg-transparent"
                onClick={toggle}
            >
                <Image
                    src={isOpen ? "/images/header/close.svg" : "/images/header/menu_open.svg"}
                    alt={isOpen ? "close" : "menu"}
                    className="object-contain"
                    width={isOpen ? 14 : 24}
                    height={isOpen ? 14 : 24}
                />
            </Button>

            {
                isOpen && (
                    <div className={cn("absolute top-full left-0 w-full",
                        "flex flex-col items-center p-5 gap-4 lg:hidden"
                    )}>
                        <h3 className="text-light-blue">MENU</h3>
                        <NavigationMenuComponent isMobile/>
                        <ButtonLink/>
                    </div>
                )
            }
        </header>
    );
}