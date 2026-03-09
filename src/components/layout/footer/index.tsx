import {NavigationMenuComponent} from "@/components/layout/navigation-menu";
import {cn} from "@/lib/utils";
import {ButtonLink} from "@/components/ui/button-link";
import {Logo} from "@/components/ui/logo";
import {footerNavItems} from "@/lib/configs/site";
import {inter} from "@/config/font";

export function Footer() {
    return (
        <footer className={cn(
            "bg-primary rounded-t-[2rem] flex flex-col md:gap-[30px]",
            "px-4 md:px-20 pt-14 pb-[22px] md:p-20 md:pb-[30.77px] mt-[41px] md:mt-[112px]"
        )}
        >
            <div className="flex flex-col md:flex-row justify-between gap-[21px] md:gap-8 md:gap-0">
                <div
                    className={cn(
                        "flex flex-col gap-0 md:gap-2.5",
                        "items-center text-center md:items-start md:text-left",
                        "max-w-96 mx-auto md:mx-0"
                    )}
                >
                    <Logo textClassName="text-[36px] leading-[47px]" imageClassname="w-8 h-8"/>

                    <p className="pt-[21px] md:pt-0 text-lg text-white leading-[25.7px] md:leading-[21.5px] py-[21px]">
                        A trusted point of contact connecting people with reliable local professionals in Malta.
                    </p>

                    <span className="text-[0.625rem] text-white font-normal leading-[27px]">
                        All enquiries are handled discreetly and confidentially.
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-[25px] lg:gap-[24px] justify-center items-start">
                    <div className="lg:hidden w-full">
                        <NavigationMenuComponent
                            fontClassName={inter.className}
                            items={footerNavItems}
                            isMobile
                            className="gap-[1.5625rem] !font-semibold"
                            menuLinkClassName="text-[0.875rem] !leading-[21px]"
                        />
                    </div>

                    <div className="hidden lg:block">
                        <NavigationMenuComponent items={footerNavItems}/>
                    </div>

                    <ButtonLink
                        className="!h-[45px] md:!h-10 !text-[1rem] !py-[11px] md:!py-2 !px-5 mx-auto md:rounded-[12px]"/>
                </div>
            </div>

            <div
                className={cn(
                    "flex flex-col md:flex-row justify-between items-center gap-6",
                    "text-white text-center md:text-left pt-[36.98px] md:pt-0"
                )}
            >
                <div className="max-w-xl leading-[10.5px] md:leading-[14.5px]">
                    <span className="text-[10px] font-bold">
                        Disclaimer
                    </span>
                    <p className="text-[0.625rem]">
                        This website provides introductions only. No legal,
                        financial, banking, investment, or professional advice
                        is offered. All services are provided by independent
                        third parties, and no responsibility is assumed for
                        third-party actions or outcomes.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-1.5 md:gap-5 md:flex-row-reverse text-[13px]">
                    <p className="leading-[24.5px]">Cookies settings</p>
                    <p className="leading-[24.5px]">© 2026 MaltaContact</p>
                </div>
            </div>
        </footer>
    );
}
