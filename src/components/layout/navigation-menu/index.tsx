import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/shadcn-ui/navigation-menu";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {merriweather} from "@/config/font";
import {INavItem} from "@/lib/configs/site";

interface Props {
    items: INavItem[]
    isMobile?: boolean
    menuLinkClassName?: string
    className?: string
    fontClassName?: string
}

export function NavigationMenuComponent({
                                            items,
                                            isMobile,
                                            menuLinkClassName,
                                            className,
                                            fontClassName =  merriweather.className
                                        }: Props) {

    if (isMobile) {
        return (
            <ul
                className={cn(
                    "flex flex-col w-full items-center",
                    className
                )}
            >
                {items.map((item) => (
                    <li key={item.href} className="w-full text-center">
                        <Link
                            href={item.href}
                            className={cn(
                                "block text-white !leading-[80px]",
                                menuLinkClassName,
                                fontClassName
                            )}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex">
                {items.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                            asChild
                            className={cn(
                                "text-white text-[16px] px-4",
                                "hover:bg-transparent hover:text-white",
                                "focus:bg-transparent focus:text-white",
                                menuLinkClassName
                            )}
                        >
                            <Link href={item.href}>
                                {item.label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}