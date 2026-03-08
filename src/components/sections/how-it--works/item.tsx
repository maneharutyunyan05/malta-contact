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
        <div className="flex text-white gap-[10px]">
            <div className='flex items-start h-fit'>
                <span
                    className={cn(
                        "h-fit text-[45px] inline-block lining-nums w-12 leading-[48px] md:leading-[38px] px-[10.52px]",
                        merriweather.className
                    )}> {number}</span>
            </div>
            <div>
                <Heading as="h3" className={cn(
                    "leading-[30px] md:leading-[38px] ",
                    merriweather.className
                )}> {title}</Heading>
                <p className="pt-4 text-[14px] leading-[1.3125rem] md:text-[1rem] md:leading-[1.5rem]">
                    {description}
                </p>
            </div>
        </div>
    );
}