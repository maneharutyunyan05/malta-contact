import {NavigationMenuComponent} from "@/components/layout/navigation-menu";
import {cn} from "@/lib/utils";
import {ButtonLink} from "@/components/ui/button-link";
import {Logo} from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className={cn(
            "bg-primary rounded-t-[2rem] flex flex-col gap-10 md:gap-16 ",
            "px-5 md:px-20 pt-14 pb-9 md:p-20 md:pb-8 mt-10 md:mt-[7rem]"
        )}>
            <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
                <div className={cn(
                    "flex flex-col gap-2.5 items-center text-center md:text-start md:items-start m",
                    "max-w-96 x-auto md:mx-0"
                )}>
                    <Logo/>
                    <p className="pt-3 md:pt-0 text-lg text-white">
                        A trusted point of contact connecting people with reliable local professionals in Malta.
                    </p>
                    <span className="text-[10px] text-white font-normal">
                        All enquiries are handled discreetly and confidentially.
                    </span>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-[2.3125rem] justify-center items-center">
                    <div className="lg:hidden">
                        <NavigationMenuComponent isMobile menuLinkClassName="text-[14px]"/>
                    </div>

                    <div className="hidden lg:block">
                        <NavigationMenuComponent menuLinkClassName="text-[14px]"/>
                    </div>

                    <ButtonLink/>
                </div>
            </div>

            <div
                className={cn(
                    "flex flex-col md:flex-row justify-between items-center gap-6",
                    "text-white text-center md:text-left "
                )}>
                <div className="max-w-xl">
                    <span className="text-[10px] font-bold">Disclaimer</span>
                    <p className="text-[0.625rem]">
                        This website provides introductions only. No legal, financial, banking, investment, or
                        professional advice is offered. All services are provided by independent third parties,
                        and no responsibility is assumed for third-party actions or outcomes.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-5">
                    <p className="text-sm">© 2026 MaltaContact</p>
                    <p className="text-sm">Cookies settings</p>
                </div>
            </div>
        </footer>
    );
}
