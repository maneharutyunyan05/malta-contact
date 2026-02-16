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
];