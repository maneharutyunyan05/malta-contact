import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/shadcn-ui/navigation-menu";
import Link from "next/link";
import {mainNavItems} from "@/lib/configs/site";
import {cn} from "@/lib/utils";

interface Props {
    isMobile?: boolean;
    menuLinkClassName?: string;
    className?: string;
}

export function NavigationMenuComponent({isMobile, menuLinkClassName, className}: Props) {
    if (isMobile) {
        return (
            <ul className={cn(
                "flex flex-col w-full items-center",
                className)}>
                {mainNavItems.map((item) => (
                    <li key={item.href} className="w-full text-center">
                        <Link
                            href={item.href}
                            className={cn(
                                "block text-white font-semibold ",
                                menuLinkClassName
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
                {mainNavItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                            asChild
                            className={cn(
                                "text-white font-semibold",
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