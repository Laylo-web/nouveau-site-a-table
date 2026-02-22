import React, { useState, useEffect, useRef } from 'react';
import { ChefHat, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isPlusOpen, setIsPlusOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        gsap.to(navRef.current, {
            backgroundColor: scrolled ? 'rgba(244, 239, 232, 0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(16px)' : 'blur(0px)',
            boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
            border: scrolled ? '1px solid rgba(175, 67, 29, 0.1)' : '1px solid transparent',
            color: scrolled ? '#1F1A17' : '#FFFFFF',
            duration: 0.4,
            ease: 'power2.inOut',
        });
    }, [scrolled]);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                ref={navRef}
                className="flex items-center justify-between px-5 py-2 md:py-2.5 rounded-full w-full max-w-6xl transition-all duration-300"
            >
                {/* Logo */}
                <div
                    className="flex items-center hover-lift cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <img
                        src="/logo.png"
                        alt="À Table Logo"
                        className="h-10 md:h-12 w-auto transition-all duration-300 pointer-events-none drop-shadow-md"
                    />
                </div>

                {/* Links */}
                <div className="hidden lg:flex items-center gap-8 font-semibold text-sm">
                    {[
                        { label: 'Accueil', target: 'top' },
                        { label: 'Comment ça marche', target: 'features' },
                        { label: 'Nos formules', target: 'pricing' },
                        { label: 'Nos menus', target: 'pricing' }
                    ].map((link) => (
                        <button
                            key={link.label}
                            onClick={() => {
                                if (link.target === 'top') {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="hover:text-brand-primary transition-colors hover-lift relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}

                    {/* Plus Dropdown */}
                    <div className="relative group" onMouseEnter={() => setIsPlusOpen(true)} onMouseLeave={() => setIsPlusOpen(false)}>
                        <button className="flex items-center gap-1 hover:text-brand-primary transition-colors hover-lift">
                            Plus <ChevronDown size={14} className={`transition-transform duration-300 ${isPlusOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div
                            className={`absolute top-full right-0 mt-4 w-56 bg-brand-surface border border-brand-primary/10 rounded-2xl shadow-xl p-3 flex flex-col gap-2 transition-all duration-300 origin-top-right ${isPlusOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                }`}
                        >
                            {[
                                { label: 'Notre engagement', target: 'philosophy' },
                                { label: 'Nos producteurs', target: 'protocol' },
                                { label: 'Casiers Gourmands', target: 'pricing' },
                                { label: 'Crédit d’impôt SAP', target: 'pricing' },
                                { label: 'Contact', target: 'contact' }
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="text-left text-brand-dark hover:bg-white/50 px-3 py-2 rounded-xl text-sm transition-colors hover:text-brand-primary"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`magnetic-btn hidden md:flex px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${scrolled ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:scale-105' : 'bg-white/90 text-brand-primary shadow-lg shadow-white/10 hover:bg-white hover:scale-105'}`}
                >
                    <span className="relative z-10 pointer-events-none">Dégustation offerte</span>
                </button>
            </nav>
        </div>
    );
}
