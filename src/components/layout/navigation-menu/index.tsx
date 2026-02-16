import {
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenu,
} from "@/components/shadcn-ui/navigation-menu";
import Link from "next/link";
import { mainNavItems } from "@/lib/configs/site";
import { cn } from "@/lib/utils";

interface Props {
    isMobile?: boolean;
    menuLinkClassName?: string;
}

export function NavigationMenuComponent({ isMobile, menuLinkClassName }: Props) {
    return (
        <NavigationMenu>
            <NavigationMenuList
                className={cn(
                    "flex",
                    isMobile && "flex-col w-full"
                )}
            >
                {mainNavItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                            className={cn(
                                "text-white font-semibold",
                                "hover:bg-transparent hover:text-white",
                                "focus:bg-transparent focus:text-white",
                                isMobile && "text-[35px]",
                                menuLinkClassName
                            )}
                        >
                            <Link href={item.href}>{item.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}