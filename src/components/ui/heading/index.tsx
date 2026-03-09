"use client";

import React, {FC, ReactNode} from "react";
import clsx from "clsx";
import {merriweather} from "@/config/font";

interface IHeadingProps {
    children?: ReactNode;
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: FC<IHeadingProps & HeadingProps> = (
    {
        children,
        as = "h1",
        className,
    }) => {
    const H = as;

    return (
        <H
            className={clsx(
                [
                    as === "h1" && [
                        "text-[45px] leading-[54px] font-medium",
                        "sm:text-[56px] sm:leading-[67px]",
                        "md:text-[72px] md:leading-[86px]",
                        merriweather.className
                    ],
                    (as === "h2") && [
                        "text-[40px] sm:text-[48px] md:text-[52px]",
                        merriweather.className
                    ],
                    (as === "h3") && "text-[25px] sm:text-[29px] mdu:text-[32px]",
                    (as === "h4") && "text-[18px]",
                    (as === "h5") && "text-[14px] md:text-[16px]",
                    (as === "h6") && "text-[10px]",
                    "font-bold font-inter",
                    className,
                ]
            )}
        >
            {children}
        </H>
    );
};

Heading.displayName = "Heading";
export {Heading};