import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const labels = ["Cuisine du jour", "Produits locaux", "Équilibré & gourmand"];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % labels.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [labels.length]);

    return (
        <div className="bg-brand-surface border border-brand-primary/10 rounded-[2rem] p-8 flex flex-col justify-between h-[340px] shadow-sm relative overflow-hidden group">
            <div>
                <h3 className="text-brand-dark font-sans font-bold text-2xl mb-2">Fait maison ultra-frais</h3>
                <p className="font-sans text-brand-dark/70 text-sm">Approvisionnement chez nos producteurs locaux. Préparation le jour même.</p>
            </div>
            <div className="relative h-[120px] w-full flex items-center justify-center -mb-4">
                {labels.map((label, idx) => {
                    const isActive = idx === activeIndex;
                    const isPrev = idx === (activeIndex - 1 + labels.length) % labels.length;

                    let transform = "translateY(20px) scale(0.9) opacity-0";
                    let zIndex = 0;

                    if (isActive) {
                        transform = "translateY(0px) scale(1) opacity-100 z-10";
                        zIndex = 10;
                    } else if (isPrev) {
                        transform = "translateY(-15px) scale(0.95) opacity-50 z-0";
                        zIndex = 0;
                    }

                    return (
                        <div
                            key={idx}
                            className="absolute left-1/2 -translate-x-1/2 px-6 py-4 bg-[#F4EFE8] border border-[#af431d]/20 rounded-xl shadow-lg shadow-black/5 flex items-center gap-3 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-3/4 max-w-[220px]"
                            style={{ transform: `translateX(-50%) ${transform.replace('translateY', 'translateY')}`, zIndex }}
                        >
                            <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                            <span className="font-drama font-semibold text-brand-dark italic whitespace-nowrap">{label}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState('');
    const [msgIndex, setMsgIndex] = useState(0);
    const messages = [
        "Avance immédiate activée.",
        "Vous ne payez que le reste à charge.",
        "SAP -50% appliqué automatiquement.",
        "Aucune démarche complexe."
    ];

    useEffect(() => {
        let currentText = '';
        let charIndex = 0;
        let isTyping = true;
        let timeout;

        const typeChar = () => {
            const fullText = messages[msgIndex];
            if (charIndex < fullText.length) {
                currentText += fullText.charAt(charIndex);
                setText(currentText);
                charIndex++;
                timeout = setTimeout(typeChar, 40 + Math.random() * 40);
            } else {
                timeout = setTimeout(() => {
                    setMsgIndex((prev) => (prev + 1) % messages.length);
                }, 2000);
            }
        };

        timeout = setTimeout(typeChar, 500);
        return () => clearTimeout(timeout);
    }, [msgIndex]);

    return (
        <div className="bg-[#1F1A17] text-[#F4EFE8] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between h-[340px] shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="font-sans font-bold text-2xl mb-2 text-[#EFE4D9]">Crédit d’impôt SAP -50%</h3>
                    <p className="font-sans text-white/60 text-sm max-w-[200px]">Déduit immédiatement via l'avance URSSAF.</p>
                </div>

                {/* Live Feed Label */}
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#878232] animate-pulse"></div>
                    <span className="font-mono text-[10px] uppercase text-[#878232] tracking-wider font-semibold">Live Feed</span>
                </div>
            </div>

            <div className="bg-black/30 rounded-xl p-4 font-mono text-xs md:text-sm text-[#878232] h-[80px] flex items-end">
                <span>{'>'} {text}<span className="inline-block w-2 h-4 bg-[#878232] ml-1 animate-pulse">_</span></span>
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S'];
    const [activeDays, setActiveDays] = useState([0, 1, 2, 3, 4]); // Lun-Ven active init

    useEffect(() => {
        const interval = setInterval(() => {
            // simulate alternating schedule every few seconds for visual effect
            setActiveDays(prev =>
                prev.length === 5 ? [0, 1, 3, 4, 5] : [0, 1, 2, 3, 4]
            );
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-brand-surface border border-brand-primary/10 rounded-[2rem] p-8 flex flex-col justify-between h-[340px] shadow-sm transform-gpu">
            <div>
                <h3 className="font-sans font-bold text-2xl mb-2 text-brand-dark">Tournées régulières</h3>
                <p className="font-sans text-brand-dark/70 text-sm">5 à 6 jours par semaine. Livraison souple.</p>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-6 gap-2">
                    {days.map((day, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <span className="font-mono text-[10px] text-brand-dark/50">{day}</span>
                            <div
                                className={`w-full aspect-square rounded-md border flex items-center justify-center transition-all duration-500 ${activeDays.includes(idx)
                                    ? 'bg-brand-primary border-brand-primary text-white scale-100 shadow-md shadow-brand-primary/20'
                                    : 'bg-transparent border-brand-dark/10 opacity-40 scale-90'
                                    }`}
                            >
                                {activeDays.includes(idx) && (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-4 border-t border-brand-primary/10 pt-4">
                    <span className="font-mono text-xs text-brand-dark/60 tracking-tight">Jours au choix — Plats congelables</span>
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="magnetic-btn bg-brand-primary text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-widest block text-center shadow-[0_4px_15px_rgb(175,67,29,0.3)] hover:scale-105 transition-all duration-300"
                    >
                        <span className="relative z-10 transition-transform pointer-events-none">Enregistrer</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 1,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-32 px-4 md:px-6 bg-brand-background relative z-20 rounded-t-[2rem] md:rounded-t-[3rem] -mt-10 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="font-drama italic text-3xl md:text-5xl text-brand-dark mb-3 md:mb-4">Fonctionnement simplifié</h2>
                    <p className="font-sans text-brand-dark/70 max-w-lg text-lg">
                        Tout est pensé pour votre tranquillité d’esprit, de la cuisine à la livraison.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="feature-card"><ShufflerCard /></div>
                    <div className="feature-card"><TypewriterCard /></div>
                    <div className="feature-card"><SchedulerCard /></div>
                </div>
            </div>
        </section>
    );
}
