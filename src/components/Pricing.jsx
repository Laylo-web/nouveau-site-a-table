import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
    const formulas = [
        {
            name: "Formule 1",
            price: "11,90 €",
            items: ["Entrée ou Potage", "Plat de résistance", "Laitage"],
            pop: false
        },
        {
            name: "Formule 2",
            price: "12,90 €",
            items: ["Entrée ou Potage", "Plat de résistance", "Dessert artisanal"],
            pop: true
        },
        {
            name: "Formule 3",
            price: "13,90 €",
            items: ["Entrée", "Potage (pour le soir)", "Plat de résistance", "Laitage et Dessert"],
            pop: false
        }
    ];

    return (
        <section className="py-32 px-6 bg-brand-background relative z-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-drama italic text-4xl md:text-5xl text-brand-dark mb-4">Nos formules</h2>
                    <p className="font-sans text-brand-dark/70 max-w-lg mx-auto text-lg">
                        Des recettes qui changent tous les jours, adaptées à vos envies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-20">
                    {formulas.map((formula, idx) => (
                        <div
                            key={idx}
                            className={`rounded-[2rem] p-8 ${formula.pop
                                ? 'bg-brand-primary text-white scale-100 md:scale-105 shadow-2xl shadow-brand-primary/20 relative z-10'
                                : 'bg-brand-surface border border-brand-primary/10 text-brand-dark'
                                }`}
                        >
                            <h3 className="font-sans font-bold text-xl mb-2 opacity-90">{formula.name}</h3>
                            <div className="mb-8">
                                <span className="font-mono text-4xl font-bold">{formula.price}</span>
                                <span className={`text-sm ${formula.pop ? 'text-white/70' : 'text-brand-dark/50'}`}> / repas</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {formula.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={18} className={`mt-0.5 ${formula.pop ? 'text-white' : 'text-brand-primary'}`} />
                                        <span className={`font-sans ${formula.pop ? 'text-white/90' : 'text-brand-dark/80'}`}>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {formula.pop && (
                                <button
                                    onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="magnetic-btn w-full bg-[#1F1A17] text-[#F4EFE8] py-4 rounded-full text-xs font-bold uppercase tracking-wider block text-center shadow-md hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
                                >
                                    <span className="relative z-10 pointer-events-none">La plus choisie</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-white/50 border border-brand-primary/10 rounded-[2rem] p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center shadow-sm">
                    <div className="md:w-1/2">
                        <h4 className="font-sans font-bold text-xl text-brand-dark mb-4 flex items-center gap-3">
                            <span className="bg-[#878232]/10 text-[#878232] p-2 rounded-xl">SAP</span>
                            Crédit d’impôt -50% <br />(avance immédiate)
                        </h4>
                        <p className="text-brand-dark/70 font-sans text-sm mb-6">
                            Nous sommes agréés Services à la Personne (SAP). Profitez de l'avance immédiate de l'URSSAF.
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="magnetic-btn bg-brand-primary text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest w-full md:w-auto block text-center shadow-[0_8px_30px_rgb(175,67,29,0.3)] hover:scale-105 transition-all duration-300"
                        >
                            <span className="relative z-10 pointer-events-none">Demander une dégustation offerte</span>
                        </button>
                    </div>

                    <div className="md:w-1/2 bg-brand-surface rounded-2xl p-6">
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-brand-dark font-sans">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></div>
                                Le prix affiché correspond à votre reste à charge.
                            </li>
                            <li className="flex gap-3 text-sm text-brand-dark font-sans">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></div>
                                L’avance immédiate applique la réduction automatiquement.
                            </li>
                            <li className="flex gap-3 text-sm text-brand-dark font-sans">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></div>
                                On vous explique simplement si besoin.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
