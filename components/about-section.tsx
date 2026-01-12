"use client";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { ArrowRight, FacebookIcon, InstagramIcon, LinkedinIcon, LucideYoutube, MessageCircle, MessageCircleMore, YoutubeIcon } from "lucide-react";
import { useRef } from "react";

export default function AboutSection3() {
    const heroRef = useRef<HTMLDivElement>(null);
    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };
    const scaleVariants = {
        visible: (i: number) => ({
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.4,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            opacity: 0,
        },
    };
    return (
        <section className="py-8 px-4 bg-black" ref={heroRef}>
            <div className="max-w-6xl mx-auto">
                <div className="relative">
                    {/* Header with social icons */}
                    <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
                        <div className="flex items-center gap-2  text-xl">
                            <span className="text-blue-500 animate-spin">✱</span>
                            <TimelineContent
                                as="span"
                                animationNum={0}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="text-sm font-medium text-white"
                            >
                                Who we are
                            </TimelineContent>
                        </div>
                        <div className="flex gap-4">
                            <TimelineContent
                                as="a"
                                animationNum={0}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5  bg-black border-green-500 rounded-lg flex items-center justify-center  cursor-pointer"
                            >
                                {/* <img src="https://pro-section.ui-layouts.com/facebook.svg" alt="fb" width={24} height={24} /> */}
                                <i className="text-gray-500 hover:text-green-500"><MessageCircleMore size={24} /></i>
                            </TimelineContent>
                            <TimelineContent
                                as="a"
                                animationNum={1}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border-green-500 rounded-lg flex items-center justify-center  cursor-pointer"
                            >
                                {/* <img src="https://pro-section.ui-layouts.com/instagram.svg" alt="insta" width={24} height={24} /> */}
                                <i className="text-gray-500 hover:text-red-500"><InstagramIcon size={24} /></i>
                            </TimelineContent>
                            <TimelineContent
                                as="a"  
                                animationNum={2}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                href="https://www.linkedin.com/naymur-rahman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border-green-500 rounded-lg flex items-center justify-center  cursor-pointer"
                            >
                                <i className="text-gray-500 hover:text-blue-500"><LinkedinIcon size={24} /></i>
                            </TimelineContent>
                        </div>
                    </div>

                    <TimelineContent
                        as="figure"
                        animationNum={4}
                        timelineRef={heroRef}
                        customVariants={scaleVariants}
                        className="relative group"
                    >
                        <svg
                            className="w-full"
                            width={"100%"}
                            height={"100%"}
                            viewBox="0 0 100 40"
                        >
                            <defs>
                                <clipPath
                                    id="clip-inverted"
                                    clipPathUnits={"objectBoundingBox"}
                                >
                                    <path
                                        d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                                        fill="#D9D9D9"
                                    />
                                </clipPath>
                            </defs>
                            <image
                                clipPath="url(#clip-inverted)"
                                preserveAspectRatio="xMidYMid slice"
                                width={"100%"}
                                height={"100%"}
                                xlinkHref="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=1200&auto=format&fit=crop"
                            ></image>
                        </svg>
                    </TimelineContent>

                    {/* Stats */}
                    <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
                        <TimelineContent
                            as="div"
                            animationNum={5}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            className="flex gap-4"
                        >
                            <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                                {/* <span className="text-red-500 font-bold">10+</span> */}
                                <span className="text-primary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Product-focused delivery</span>
                                <span className="text-gray-400">|</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                                <span className="text-primary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Modern tech stack</span>
                                <span className="text-gray-400">|</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                                <span className="text-primary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Founder-led approach</span>
                                <span className="text-gray-400">|</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                                <span className="text-primary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Scalable solutions</span>
                                <span className="text-gray-400">|</span>
                            </div>
                        </TimelineContent>
                        <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
                            <TimelineContent
                                as="div"
                                animationNum={6}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="flex lg:text-5xl sm:text-xl text-xl items-center gap-2 mb-2"
                            >

                                <span className="text-primary italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-semibold uppercase">Startup & </span>
                                {/* <span className="text-gray-300 uppercase">business focused</span> */}
                            </TimelineContent>
                            <TimelineContent
                                as="div"
                                animationNum={7}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
                            >
                                <span className="text-gray-400 font-bold uppercase">business focused</span>
                            </TimelineContent>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        {/* <TimelineContent as="h1" animationNum={8} timelineRef={heroRef} customVariants={revealVariants} className="text-4xl md:text-5xl !leading-[110%] font-semibold text-gray-900 mb-8">
              Crafting Words That Make a Difference.
            </TimelineContent> */}
                        <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-gray-300 mb-8">
                            <VerticalCutReveal
                                splitBy="words"
                                staggerDuration={0.1}
                                staggerFrom="first"
                                reverse={true}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 30,
                                    delay: 3,
                                }}
                            >
                                Building Digital Products That Make a Difference.
                            </VerticalCutReveal>
                        </h1>

                        <TimelineContent
                            as="div"
                            animationNum={9}
                            timelineRef={heroRef}
                            customVariants={revealVariants}
                            className="grid md:grid-cols-2 gap-8 text-gray-300"
                        >
                            <TimelineContent
                                as="div"
                                animationNum={10}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="sm:text-base text-xs"
                            >
                                <p className="leading-relaxed text-justify">
                                    <span className="text-primary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Creative Agency</span> is a modern digital agency helping startups, founders, and growing businesses 
                                    build scalable web, AI, and digital products.
                                    <br />
                                    We combine clean design, strong engineering, and AI-first thinking to create solutions that are fast, reliable, and built for long-term growth.
                                </p>
                            </TimelineContent>
                            <TimelineContent
                                as="div"
                                animationNum={11}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="sm:text-base text-xs"
                            >
                                <p className="leading-relaxed text-justify">
                                    <span className="text-primary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Our approach </span>is product-driven and collaborative. We take time to understand your goals, users, and challenges before building solutions that truly add value.
                                    <br />
                                    From early-stage ideas to production-ready platforms, we focus on clarity, performance, and quality at every step.
                                </p>
                            </TimelineContent>
                        </TimelineContent>
                    </div>

                    <div className="md:col-span-1">
                        <div className="text-right">
                            <TimelineContent
                                as="div"
                                animationNum={12}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="text-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase text-xl mb-2"
                            >
                                CREATIVE AGENCY
                            </TimelineContent>
                            <TimelineContent
                                as="div"
                                animationNum={13}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="text-gray-200 italic text-sm mb-8"
                            >
                                Founder-Led Digital Agency
                            </TimelineContent>

                            <TimelineContent
                                as="div"
                                animationNum={14}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="mb-6"
                            >
                                <p className="text-gray-400 font-medium mb-4">
                                    We partner closely with our clients to design, build, and launch digital products that are ready to scale.
                                </p>
                            </TimelineContent>

                            <TimelineContent
                                as="button"
                                animationNum={15}
                                timelineRef={heroRef}
                                customVariants={revealVariants}
                                className="bg-neutral-900 hover:bg-neutral-950 shadow-lg shadow-neutral-900 border border-neutral-700 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-lg cursor-pointer font-semibold"
                            >
                                LET'S COLLABORATE <ArrowRight className="" />
                            </TimelineContent>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
