import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/shadcn-ui/accordion";

export interface AccordionItemProps {
    title: string;
    content: string;
}

export interface AccordionComponentProps {
    items: AccordionItemProps[];
}

export function AccordionComponent({items}: AccordionComponentProps) {
    return (
        <div>
            <Accordion type="multiple" className="w-full flex flex-col gap-4">
                {items.map((item, index) => (
                    <AccordionItem className="bg-white rounded-lg  px-6 " key={index} value={item.title}>
                        <AccordionTrigger className="text-[#031F43] text-[15px] md:text-[18px] font-bold py-[19.48px] border-none md:py-5" >{item.title}</AccordionTrigger>
                        <AccordionContent className="text-[#3E4F64] text-[13px] md:text-[16px] leading-[20px] md:leading-[24px] pb-6">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}