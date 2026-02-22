import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarDays, ClipboardList, Truck, ShieldCheck, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "Vous choisissez vos jours",
        body: "Minimum 4 repas par semaine, vous décidez quels jours vous souhaitez être livré. Vous pouvez modifier vos préférences à tout moment.",
        bullets: [
            "Minimum 4 repas/semaine",
            "Vous choisissez les jours",
            "Modifiable à tout moment"
        ],
        Icon: CalendarDays
    },
    {
        num: "02",
        title: "Vous recevez le menu papier",
        body: "Chaque semaine, nous vous envoyons un menu papier avec toutes les options. Vous cochez simplement vos choix et vous le retournez.",
        bullets: [
            "Menu hebdomadaire par courrier",
            "Simple à cocher",
            "Retour par courrier ou livreur"
        ],
        Icon: ClipboardList
    },
    {
        num: "03",
        title: "Votre repas est livré à domicile",
        body: "Nos livreurs vous apportent vos repas à domicile, 5 jours sur 7, dans une tournée organisée efficacement.",
        bullets: [
            "Service fiable et ponctuel",
            "Livraison 5 jours sur 7",
            "Repas prêts à déguster / à réchauffer"
        ],
        Icon: Truck
    },
    {
        num: "04",
        title: "SAP déduit automatiquement",
        body: "Vous ne payez que 50% du prix affiché. Nous gérons toutes les démarches administratives avec l’URSSAF pour vous.",
        bullets: [
            "50% déduits immédiatement",
            "Aucune démarche à faire",
            "Nous gérons tout l’administratif"
        ],
        Icon: ShieldCheck
    }
];

export default function Protocol() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            // Desktop pinned slider animation
            mm.add("(min-width: 768px)", () => {
                const cards = cardsRef.current;

                // Set initial states for cards (card 0 is already visible)
                gsap.set(cards.slice(1), { yPercent: 70, opacity: 0, scale: 0.95 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=350%", // Scrub over 3.5 viewport heights
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1
                    }
                });

                // Add a small pause at the very beginning
                tl.to({}, { duration: 0.2 });

                cards.forEach((card, i) => {
                    if (i === 0) return; // Skip first card, it's already there

                    tl.to(cards[i - 1], {
                        scale: 0.96,
                        opacity: 0,
                        filter: "blur(4px)",
                        yPercent: -15,
                        duration: 1
                    }, `step${i}`)
                        .to(card, {
                            yPercent: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: "power2.out"
                        }, `step${i}`);

                    // Add a pause at the end of each card animation to let the user read
                    tl.to({}, { duration: 0.8 });
                });
            });

            // Mobile fallback animation: simple stacked fade up
            mm.add("(max-width: 767px)", () => {
                cardsRef.current.forEach((card) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        },
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-0 md:min-h-[100dvh] bg-brand-background relative z-20 md:flex md:flex-col md:justify-center overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 w-full">

                {/* Header */}
                <div className="mb-12 md:mb-16 text-center md:text-left">
                    <h2 className="font-drama italic text-4xl md:text-5xl text-brand-dark mb-4">
                        Comment fonctionne À Table ?
                    </h2>
                    <p className="font-sans text-brand-dark/70 text-lg max-w-2xl md:mx-0 mx-auto">
                        Un service simple et sans contrainte, tout est pris en charge pour vous.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="relative md:h-[450px] w-full max-w-5xl mx-auto flex flex-col md:block gap-8 md:gap-0">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            ref={(el) => (cardsRef.current[idx] = el)}
                            className="md:absolute md:inset-0 w-full bg-brand-surface border border-brand-primary/10 rounded-[2rem] p-8 md:p-12 shadow-md flex flex-col md:flex-row gap-8 items-center"
                            style={{ zIndex: steps.length - idx }}
                        >
                            {/* Left Side: Icon & Number */}
                            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                                <span className="font-mono text-sm md:text-base font-bold text-brand-primary mb-4 tracking-widest uppercase">
                                    Étape {step.num}
                                </span>
                                <div className="w-24 h-24 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                                    <step.Icon size={40} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="w-full md:w-2/3 flex flex-col justify-center">
                                <h3 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark mb-4">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-brand-dark/70 text-base md:text-lg mb-8 leading-relaxed">
                                    {step.body}
                                </p>
                                <ul className="space-y-4">
                                    {step.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check size={20} className="text-[#878232] shrink-0 mt-0.5" strokeWidth={2.5} />
                                            <span className="font-sans text-brand-dark/80 font-medium">
                                                {bullet}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
