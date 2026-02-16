import type { Metadata } from "next";
import {inter} from "@/config/font";
import { Toaster } from "sonner";
import "./globals.css";
import {Header} from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";

export const metadata: Metadata = {
    title: "Malta Contact",
    description: "Get in touch with Malta Contact for inquiries, support, and business opportunities."
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header />

        <main>
            {children}
        </main>

        <Footer />

        <Toaster richColors position="top-right"/>
        </body>
        </html>
    );
}
