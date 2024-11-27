"use client";
import Button from "@/components/Button";
import designImg1 from "@/assets/images/design-example-1.png";
import designImg2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorImg from '@/assets/images/cursor-you.svg'


export default function Hero() {
    const [leftScope, leftAnimate] = useAnimate();
    const [leftPointer, leftPointerAnimate] = useAnimate();
    const [rightScope, rightAnimate] = useAnimate();
    const [rightPointer, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftAnimate([
            [leftScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointer.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointer.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointer.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightAnimate([
            [rightScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
            [rightScope.current, {x: 0, y: 0}, {duration: 0.5}]
        ])

        rightPointerAnimate([
            [rightPointer.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
            [rightPointer.current, {x: 175, y: 0}, {duration: 0.5}],
            [rightPointer.current, {x: 0, y: [0, 20 ,0]}, {duration: 0.5}]
        ])
    }, []);

    return (
        <section className="py-24 overflow-x-clip" style={{cursor: `url(${cursorImg.src}), auto`}}>
            <div className="container relative">
                <motion.div
                    ref={leftScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image src={designImg1} alt="Design Image 1" draggable="false" />
                </motion.div>
                <motion.div
                    ref={leftPointer}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Adrean" />
                </motion.div>
                <motion.div ref={rightScope} initial={{opacity: 0, x: 100, y: 100}} drag  className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designImg2} alt="Design Image 2" draggable="false" />
                </motion.div>
                <motion.div ref={rightPointer} initial={{opacity: 0, x: 275, y: 100}} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" colors="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldnt slow you down. Layers combines
                    powerful features with d intuitive interface that keep you
                    in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 w-full md:flex-1"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
