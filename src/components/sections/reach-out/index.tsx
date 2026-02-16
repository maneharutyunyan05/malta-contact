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
            "px-4 md:px-20 py-10 md:py-28",
        )}>
            <div className="flex-1 flex flex-col gap-4">
                <p className="text-smoky-blue">{data.subtitle}</p>
                <Heading as="h2" className={cn(
                    "text-primary font-bold text-4xl",
                    merriweather.className)}>{data.title}</Heading>
                <p className="text-primary">{data.description}</p>

                <div className="flex flex-col gap-4">
                    {data.contact_info.map((contact, i) => (
                        <div key={i} className="text-primary flex gap-4 items-center">
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
                    <FieldGroup className="gap-6 max-w-[600px]">
                        <FieldSet>
                            <div className="flex flex-col md:flex-row gap-2">
                                <Text
                                    name="first_name"
                                    label="First Name"
                                    required
                                    control={form.control}
                                />
                                <Text
                                    name="last_name"
                                    label="Last Name"
                                    required
                                    control={form.control}
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-2">
                                <Text
                                    name="email"
                                    label="Email"
                                    required
                                    control={form.control}
                                />
                                <Text
                                    name="phone_number"
                                    label="Phone Number"
                                    required
                                    control={form.control}
                                />
                            </div>

                            <div className="">
                                <Textarea
                                    name="message"
                                    label="Message (include preferred date & time)"
                                    required
                                    placeholder="Type your message..."
                                    control={form.control}
                                />
                            </div>
                        </FieldSet>
                        <div className="flex justify-center md:justify-start">
                            <Button disabled={!isValid || pending} className="w-fit" type="submit">
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