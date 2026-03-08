import {Button} from "@/components/shadcn-ui/button";
import NextLink from "next/link";
import {cn} from "@/lib/utils";

interface ButtonLinkProps {
    text?: string;
    href?: string;
    className?: string;
    visible?: boolean;
}

export function ButtonLink({
                               text = "Schedule a Meeting",
                               href = "#reach-out",
                               visible = true,
                               className = ""
                           }: ButtonLinkProps) {
    return (
        <Button asChild
                style={{display: visible ? "block" : "none"}}
                className={cn(
                    "bg-[#DD5757] hover:bg-[#DD5757] w-fit",
                    "px-[33px] py-[11px] md:py-[11.9px] md:px-6 text-[15px] md:text-[19.2px] h-[45px] md:h-[52.8px]",
                    className
                )}>
            <NextLink href={href}>{text}</NextLink>
        </Button>
    );
}