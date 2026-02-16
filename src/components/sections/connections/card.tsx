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
        <Card className="w-[18.4375rem] sm:w-96 px-8 pt-8">
            <CardHeader className="p-0">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <Image
                        src={icon}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
                <Heading as="h3"
                         className={cn(
                             "leading-tight text-primary whitespace-normal",
                             "text-2xl md:text-3xl min-h-[100px]",
                             merriweather.className)}>
                    {title}
                </Heading>
            </CardHeader>
            <CardContent className="gap-0 whitespace-normal px-0 min-h-[9.84375rem] md:min-h-[7.03125rem]">
                <p className="text-smoky-blue text-[0.9375rem] md:text-4">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
}