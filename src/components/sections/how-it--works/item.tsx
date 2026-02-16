import {merriweather} from "@/config/font";
import {Heading} from "@/components/ui/heading";
import {cn} from "@/lib/utils";

export interface ItemProps {
    number: string;
    title: string;
    description: string;
}

export function Steps({
                          number,
                          title,
                          description
                      }: ItemProps) {
    return (
        <div className="flex gap-2 text-white">
            <div>
                <Heading as="h3" className={cn("lining-nums", merriweather.className)}> {number}</Heading>
            </div>
            <div>
                <Heading as="h3" className={merriweather.className}> {title}</Heading>
                <p className="pt-4">{description}</p>
            </div>
        </div>
    );
}