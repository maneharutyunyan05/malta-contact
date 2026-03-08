'use client'
import sendFeedbackMessageAction from "@/lib/action/sendFeedbackMessageAction";
import {useActionState, useEffect} from "react";
import {ReachOutSchema as schema} from "@/components/sections/reach-out/schema";

import {toast} from "sonner"
import {useForm} from 'react-hook-form'

import {zodResolver} from "@hookform/resolvers/zod";
import {FieldGroup, FieldSet} from "@/components/shadcn-ui/field";
import {Spinner} from "@/components/shadcn-ui/spinner";
import {Text} from "@/components/ui/form/text";
import {Textarea} from "@/components/ui/form/textarea";
import {Button} from "@/components/shadcn-ui/button";
import {cn} from "@/lib/utils";
import {merriweather} from "@/config/font";
import {Heading} from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/reach-out.json";

export function ReachOutSection() {
    const notifySuccess = () =>
        toast.success("Your message has been sent successfully! We will get back to you shortly.");
    const notifyError = () =>
        toast.error("Oops! Something went wrong. Please try sending your message again.");

    const [state, formAction, pending] = useActionState(sendFeedbackMessageAction, null);

    const form = useForm({
        disabled: pending,
        resolver: zodResolver(schema),
        mode: "onTouched",
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            message: ""
        },
    });

    useEffect(() => {
        if (!pending && state?.success === true) {
            notifySuccess();
            form.reset();
        }
        if (!pending && state?.success === false) {
            notifyError();
        }
    }, [pending, state]);

    const {isValid} = form.formState;

    return (
        <section id="reach-out" className={cn(
            "flex flex-col md:flex-row gap-8 gap-20 md:gap-0",
            "px-4 md:px-20 pt-[61px] pb-[71px]  md:py-28",
        )}>
            <div className="flex-1 flex flex-col ">
                <p className="text-smoky-blue pb-[6px] md:pb-4">{data.subtitle}</p>
                <Heading as="h2" className={cn(
                    "text-primary font-bold text-4xl leading-[48px]  md:leading-[62px] pb-6",
                    merriweather.className)}>{data.title}</Heading>
                <p className="text-primary text-[1rem] md:text-[18px] pb-8">{data.description}</p>

                <div className="flex flex-col gap-4 py-2">
                    {data.contact_info.map((contact, i) => (
                        <div key={i} className="text-primary flex gap-4 items-center text-sm md:text-[1rem]">
                            <Image
                                src={contact.icon.src}
                                width={24}
                                height={24}
                                alt={contact.icon.alt}
                                className="object-contain"
                            />
                            {contact.type === "email" ? (
                                <Link href={`mailto:${contact.value}`} className="underline">
                                    {contact.value}
                                </Link>
                            ) : (
                                <Link href={`tel:${contact.value}`} className="underline">
                                    {contact.value}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1">
                <form action={formAction}>
                    <FieldGroup className="gap-[17px] md:gap-6 max-w-[600px]">
                        <FieldSet className="text-[#000E21]">
                            <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                                <Text
                                    inputClassName="h-12"
                                    className="gap-2"
                                    name="first_name"
                                    label="First Name"
                                    required
                                    control={form.control}
                                />
                                <Text inputClassName="h-12"
                                      className="gap-2"
                                      name="last_name"
                                      label="Last Name"
                                      required
                                      control={form.control}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 md:gap-2">
                                <Text inputClassName="h-12"
                                      className="gap-2"
                                      name="email"
                                      label="Email"
                                      required
                                      control={form.control}
                                />
                                <Text inputClassName="h-12"
                                      className="gap-2"
                                      name="phone_number"
                                      label="Phone Number"
                                      required
                                      control={form.control}
                                />
                            </div>

                            <div className="">
                                <Textarea
                                    className="gap-2 !text-[1rem] font-normal"
                                    name="message"
                                    label="Message (include preferred date & time)"
                                    required
                                    inputClassName="h-[332px]"
                                    placeholder="Type your message..."
                                    control={form.control}
                                />
                            </div>
                        </FieldSet>
                        <div className="flex justify-center md:justify-start">
                            <Button disabled={!isValid || pending}
                                    className={cn("w-fit text-[1rem] py-[10px] px-[100px] md:px-6 h-11",
                                    )}
                                    type="submit">
                                {pending && <Spinner/>}
                                Submit
                            </Button>
                        </div>
                    </FieldGroup>
                </form>
            </div>
        </section>
    )
}