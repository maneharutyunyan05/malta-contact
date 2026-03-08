export interface INavItem {
    label: string;
    href: string;
}

export const mainNavItems: INavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Connections",
        href: "/#connections",
    },
    {
        label: "How it Works",
        href: "/#how-it-works",
    },
    {
        label: "About us",
        href: "/#about-us",
    },
]

export const footerNavItems: INavItem[] = [
    {
        label: "About us",
        href: "/#about-us",
    },
    {
        label: "Services",
        href: "/#services",
    },
    {
        label: "How it Works",
        href: "/#how-it-works",
    },
    {
        label: "Contact",
        href: "/#reach-out",
    },
]