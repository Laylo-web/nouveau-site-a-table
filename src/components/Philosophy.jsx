import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
    const containerRef = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const bgRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Background parallax
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });

            // Text reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'center center',
                    scrub: 1,
                }
            });

            tl.from(textRef1.current, { opacity: 0, y: 30, duration: 1 })
                .from(textRef2.current, { opacity: 0, y: 30, duration: 1 }, "+=0.2");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full py-24 md:py-40 flex items-center justify-center overflow-hidden bg-brand-dark"
        >
            {/* Background Texture */}
            <div
                ref={bgRef}
                className="absolute inset-0 -top-[20%] h-[140%] w-full opacity-10"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1556910103-1c02745a8286?q=80&w=2000&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) contrast(150%)',
                }}
            ></div>

            {/* Dark gradient fade at top and bottom to blend sections smoothly */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-background/5 via-transparent to-brand-background/5 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-12">
                <p ref={textRef1} className="font-sans text-2xl md:text-4xl text-white/50 font-medium leading-relaxed max-w-3xl">
                    Beaucoup de services de portage misent sur <br className="hidden md:block" />
                    la <span className="line-through opacity-80 decoration-white/40">standardisation</span>, le surgelé, l'impersonnel.
                </p>

                <p ref={textRef2} className="font-drama italic text-4xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl">
                    Nous, on mise sur le <span className="text-brand-primary font-serif">fait maison</span>, <br className="hidden md:block" />
                    le local, et l'humain.
                </p>
            </div>
        </section>
    );
}
