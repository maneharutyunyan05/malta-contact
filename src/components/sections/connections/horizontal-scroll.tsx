"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { FeatureCard } from "@/components/sections/connections/card"

export interface Feature {
    icon: string
    title: string
    description: string
}

export function HorizontalScroll({ features }: { features: Feature[] }) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [totalShift, setTotalShift] = useState(0)

    useEffect(() => {
        if (!containerRef.current) return

        const scrollWidth = containerRef.current.scrollWidth + 24
        const viewportWidth = window.innerWidth

        setTotalShift(scrollWidth - viewportWidth)
    }, [features])

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["end end", "start start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -totalShift])

    return (
        <div ref={sectionRef} className="relative w-full">
            <div className="h-[26.8125rem] md:h-[22.9375rem] flex items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    ref={containerRef}
                    className="flex items-center gap-8 pl-6 md:pl-20 pe-6"
                >
                    {features.map((item, index) => (
                        <div key={index} className="shrink-0 feature-card">
                            <FeatureCard {...item} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
