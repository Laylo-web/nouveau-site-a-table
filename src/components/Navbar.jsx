import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isPlusOpen, setIsPlusOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
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

    // Close mobile menu on scroll
    useEffect(() => {
        if (mobileOpen) {
            const close = () => setMobileOpen(false);
            window.addEventListener('scroll', close, { passive: true });
            return () => window.removeEventListener('scroll', close);
        }
    }, [mobileOpen]);

    const navLinks = [
        { label: 'Accueil', target: 'top' },
        { label: 'Comment ça marche', target: 'features' },
        { label: 'Nos formules', target: 'pricing' },
        { label: 'Nos menus', target: 'pricing' }
    ];

    const plusLinks = [
        { label: 'Notre engagement', target: 'philosophy' },
        { label: 'Nos producteurs', target: 'protocol' },
        { label: 'Casiers Gourmands', target: 'pricing' },
        { label: 'Crédit d\u2019impôt SAP', target: 'pricing' },
        { label: 'Contact', target: 'contact' }
    ];

    const handleNav = (target) => {
        setMobileOpen(false);
        if (target === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-3 md:px-4">
                <nav
                    ref={navRef}
                    className="flex items-center justify-between px-4 md:px-5 py-2 md:py-2.5 rounded-full w-full max-w-6xl transition-all duration-300"
                >
                    {/* Logo */}
                    <div
                        className="flex items-center hover-lift cursor-pointer"
                        onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    >
                        <img
                            src="/logo.png"
                            alt="À Table Logo"
                            className="h-9 md:h-12 w-auto transition-all duration-300 pointer-events-none drop-shadow-md"
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8 font-semibold text-sm">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNav(link.target)}
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
                                {plusLinks.map((item) => (
                                    <button
                                        key={item.label}
                                        onClick={() => handleNav(item.target)}
                                        className="text-left text-brand-dark hover:bg-white/50 px-3 py-2 rounded-xl text-sm transition-colors hover:text-brand-primary"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <button
                        onClick={() => handleNav('contact')}
                        className={`magnetic-btn hidden md:flex px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${scrolled ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:scale-105' : 'bg-white/90 text-brand-primary shadow-lg shadow-white/10 hover:bg-white hover:scale-105'}`}
                    >
                        <span className="relative z-10 pointer-events-none">Dégustation offerte</span>
                    </button>

                    {/* Mobile hamburger button */}
                    <button
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </nav>
            </div>

            {/* Mobile drawer overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setMobileOpen(false)}
            />

            {/* Mobile drawer */}
            <div
                className={`fixed top-0 right-0 z-50 w-[80vw] max-w-sm h-full bg-brand-surface shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close button */}
                <div className="flex justify-end p-5">
                    <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary/10 text-brand-dark">
                        <X size={20} />
                    </button>
                </div>

                {/* Nav items */}
                <div className="flex flex-col px-6 gap-1 flex-1 overflow-y-auto">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => handleNav(link.target)}
                            className="text-left font-sans font-semibold text-lg text-brand-dark py-3 border-b border-brand-primary/10 hover:text-brand-primary transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}

                    <div className="mt-4 mb-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-brand-primary font-bold">Plus</span>
                    </div>
                    {plusLinks.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNav(item.target)}
                            className="text-left font-sans text-base text-brand-dark/80 py-2.5 hover:text-brand-primary transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-brand-primary/10">
                    <button
                        onClick={() => handleNav('contact')}
                        className="w-full bg-brand-primary text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_8px_30px_rgb(175,67,29,0.3)] hover:scale-[1.02] transition-all duration-300"
                    >
                        Dégustation offerte
                    </button>
                </div>
            </div>
        </>
    );
}
