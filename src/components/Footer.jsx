import React from 'react';
import { ChefHat } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#1F1A17] text-[#F4EFE8] pt-24 pb-8 px-6 rounded-t-[4rem] mt-[-2rem] relative z-30">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand & Tagline */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="À Table Logo" className="h-12 w-auto pointer-events-none" />
                        </div>
                        <p className="font-sans text-[#F4EFE8]/70 text-lg leading-relaxed max-w-sm">
                            Portage de repas faits maison, ultra-frais, livrés à domicile pour seniors et leurs familles.
                        </p>

                        <div className="flex flex-col gap-2 mt-2">
                            <span className="font-mono text-sm tracking-widest uppercase text-brand-primary">Zone de livraison</span>
                            <p className="font-sans text-[#F4EFE8]/90 font-medium">Dinard • Pleurtuit • La Richardais</p>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="font-drama italic text-xl text-[#EFE4D9] mb-2">Notre Service</h4>
                        <ul className="space-y-3 font-sans text-[#F4EFE8]/60 text-sm">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Accueil</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Comment ça marche</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Nos formules</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Nos menus</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Casiers Gourmands</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 flex flex-col gap-4">
                        <h4 className="font-drama italic text-xl text-[#EFE4D9] mb-2">Engagements & Contact</h4>
                        <ul className="space-y-3 font-sans text-[#F4EFE8]/60 text-sm">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Notre engagement qualité</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Nos producteurs partenaires</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Crédit d’impôt SAP -50%</a></li>
                        </ul>

                        <button
                            onClick={() => window.location.href = 'mailto:contact@atable-repas.fr'}
                            className="magnetic-btn bg-brand-primary text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest w-max mt-4 shadow-[0_8px_30px_rgb(175,67,29,0.3)] hover:scale-105 transition-all duration-300"
                        >
                            <span className="relative z-10 pointer-events-none">Nous contacter</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 bg-black/20 px-4 py-2 rounded-full border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-[#878232] animate-pulse"></div>
                        <span className="font-mono text-xs uppercase text-[#878232] tracking-widest font-semibold">Service opérationnel</span>
                    </div>

                    <div className="flex gap-6 font-sans text-[#F4EFE8]/40 text-xs">
                        <a href="#" className="hover:text-[#F4EFE8] transition-colors">Mentions légales</a>
                        <a href="#" className="hover:text-[#F4EFE8] transition-colors">CGV</a>
                        <a href="#" className="hover:text-[#F4EFE8] transition-colors">Politique de confidentialité</a>
                    </div>

                    <div className="font-sans text-[#F4EFE8]/40 text-xs">
                        © {new Date().getFullYear()} À Table. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
}
