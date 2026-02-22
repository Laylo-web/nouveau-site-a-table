import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.hero-elem', {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex flex-col justify-end overflow-hidden">
            {/* Background Image / Abstract */}
            <div className="absolute inset-0 z-0 bg-brand-background">
                {/* Heavy primary-to-black gradient overlay but keep warmth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/95 via-[#af431d]/40 to-black/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#140F0D] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-28 md:pb-32">
                <div className="max-w-3xl">
                    <h1 className="text-white flex flex-col gap-2 mb-6">
                        <span className="hero-elem font-sans font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight text-[#EFE4D9]">
                            Le fait-maison, c'est le
                        </span>
                        <span className="hero-elem font-drama italic text-6xl md:text-8xl lg:text-9xl text-white ml-2 md:ml-8 leading-tight drop-shadow-lg">
                            réconfort.
                        </span>
                    </h1>

                    {/* Subtext removed for cleaner aesthetics */}

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="hero-elem magnetic-btn bg-brand-primary text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_8px_30px_rgb(175,67,29,0.3)] hover:scale-105 transition-all duration-300"
                        >
                            <span className="relative z-10 pointer-events-none">Dégustation offerte</span>
                        </button>
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="hero-elem magnetic-btn bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                        >
                            <span className="relative z-10 pointer-events-none">Être rappelé</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
