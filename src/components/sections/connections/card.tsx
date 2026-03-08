import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/shadcn-ui/card";
import Image from "next/image";
import {merriweather} from "@/config/font";
import {cn} from "@/lib/utils";
import {Heading} from "@/components/ui/heading";

interface FeaturesCardProps {
    icon: string;
    title: string;
    description: string;
}

export function FeatureCard({
                                icon,
                                title,
                                description
                            }: FeaturesCardProps) {
    return (
        <Card className="w-[18.5625rem] md:w-[22.9375rem] px-8 py-8 md:pb-[2.625rem] gap-12 shadow-none border-[#3E4F64] rounded-[2.5rem]">
            <CardHeader className="p-0 gap-6 ">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src={icon}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
                <Heading
                    as="h3"
                    className={cn(
                        "text-primary font-semibold  min-h-[6.25rem] md:min-h-[3.9375rem] ",
                        "text-[2.0625rem] leading-[2.0625rem] md:text-[2rem] md:leading-[1.96875rem]",
                        merriweather.className
                    )}
                >
                    {title}
                </Heading>
            </CardHeader>
            <CardContent className="px-0 min-h-[9.375rem] md:min-h-[6.25rem]">
                <p className="text-[#3E4F64] text-[0.9375rem] leading-[1.3375rem] md:text-[1rem] md:leading-[1.35rem]">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}