
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { 
    Mail, Globe, Linkedin, Github, Download, 
    Calendar, Share2, QrCode, X, ChevronDown, 
    ChevronUp, Languages, Wallet, Lightbulb 
} from 'lucide-react';
import { DATA, T } from './constants';
import { Language } from './types';
import { ActionButton } from './components/ActionButton';
import { SocialIcon } from './components/SocialIcon';

const App: React.FC = () => {
    const [lang, setLang] = useState<Language>('fr');
    const [showQR, setShowQR] = useState(false);
    const [showServices, setShowServices] = useState(false);

    // Defensive URL check: Ensure we are not accidentally executing inside a weird context
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.has('onload')) {
            console.warn('Potential external script injection detected via onload parameter. Ignoring.');
        }
    }, []);

    // Get a clean URL (strictly origin + pathname)
    const cleanUrl = useMemo(() => {
        try {
            const url = new URL(window.location.href);
            return url.origin + url.pathname;
        } catch (e) {
            return "https://virtual-card-pro.vercel.app/";
        }
    }, []);

    const handleShare = useCallback(async () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title: DATA.name,
                    text: `${DATA.title[lang]} - ${DATA.company}`,
                    url: cleanUrl,
                });
            } catch (err) {
                // If sharing is cancelled or fails, fallback to QR
                if ((err as Error).name !== 'AbortError') {
                    console.error('Share error:', err);
                    setShowQR(true);
                }
            }
        } else {
            setShowQR(true);
        }
    }, [lang, cleanUrl]);

    const downloadVCard = useCallback(() => {
        const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${DATA.name}
N:Gouaho;Déto Jean-Luc;;;
ORG:${DATA.company}
TITLE:${DATA.title[lang]}
EMAIL;type=INTERNET;type=WORK:${DATA.email}
TEL;type=CELL:${DATA.phone}
URL:${DATA.website}
ADR;type=WORK:;;;Granby;QC;;Canada
NOTE:Services: ${DATA.stack.join(', ')}
END:VCARD`;
        
        const blob = new Blob([vCardContent], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${DATA.name.replace(/\s+/g, '_')}_Contact.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, [lang]);

    const handleGoogleWallet = useCallback(() => {
        // We avoid fetching and creating blobs to bypass some CSP/CORS issues with external image servers
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(cleanUrl)}&color=000000&bgcolor=ffffff&format=png&margin=20`;
        
        // Open in new tab or attempt direct download
        const link = document.createElement('a');
        link.href = qrUrl;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("download", "Business_Card_QR.png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            alert(T[lang].walletAlert);
        }, 500);
    }, [lang, cleanUrl]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-50 font-sans relative overflow-hidden">
            
            {/* Background Animation */}
            <div className="absolute inset-0 animated-bg z-0 pointer-events-none"></div>

            <div className="w-full max-w-[380px] mx-auto z-10 relative">
                
                {/* Header Toolbar */}
                <div className="flex justify-between items-center mb-4 px-2">
                     <button 
                        onClick={() => setLang(l => l === 'fr' ? 'en' : 'fr')}
                        className="bg-white/60 backdrop-blur-md p-2 rounded-full shadow-sm border border-white text-xs font-bold text-slate-600 flex items-center gap-1 hover:bg-white transition-colors"
                        aria-label="Toggle Language"
                    >
                        <Languages size={14} /> {lang.toUpperCase()}
                    </button>
                    <button 
                        onClick={handleShare}
                        className="bg-white/60 backdrop-blur-md p-2 rounded-full shadow-sm border border-white text-slate-600 hover:text-indigo-600 hover:bg-white transition-colors"
                        aria-label="Share Contact"
                    >
                        <Share2 size={18} />
                    </button>
                </div>

                <div className="glass-card rounded-[2.5rem] p-6 pb-8 relative overflow-hidden transition-all duration-300">
                    
                    {/* Availability Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full shadow-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold text-emerald-700 tracking-wide uppercase">{T[lang].openToWork}</span>
                        </div>
                    </div>

                    {/* Identity Section */}
                    <div className="text-center">
                        <div className="relative inline-block mb-4">
                            <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-indigo-900 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white mx-auto">
                                {DATA.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                            </div>
                            <div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md">
                                <Lightbulb size={16} className="text-indigo-600" />
                            </div>
                        </div>
                        
                        <h1 className="text-xl font-bold text-slate-900 leading-tight">{DATA.name}</h1>
                        <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mt-1 mb-1">{DATA.company}</p>
                        <p className="text-slate-500 text-sm font-medium">{DATA.title[lang]}</p>
                    </div>

                    {/* Keywords Chips */}
                    <div className="mt-6 mb-6">
                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
                            {DATA.stack.map((tech, index) => (
                                <span key={index} className="px-3 py-1.5 bg-white text-slate-600 rounded-lg text-[10px] font-semibold border border-slate-100 shadow-sm whitespace-nowrap">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Primary Grid Actions */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button 
                            onClick={() => window.location.href = `mailto:${DATA.email}`}
                            className="bg-slate-900 hover:bg-slate-800 text-white py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-slate-900/10"
                        >
                            <Mail size={18} />
                            <span className="text-sm font-medium">{T[lang].contact}</span>
                        </button>
                        <button 
                            onClick={() => window.open(DATA.calendly, '_blank', 'noopener,noreferrer')}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
                        >
                            <Calendar size={18} />
                            <span className="text-sm font-medium">{T[lang].book}</span>
                        </button>
                    </div>

                    {/* Services Accordion */}
                    <div className="mb-4">
                        <button 
                            onClick={() => setShowServices(!showServices)}
                            className="w-full flex items-center justify-between p-4 bg-white/50 hover:bg-white border border-white/60 rounded-2xl transition-all shadow-sm"
                        >
                            <div className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                                <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
                                    <Lightbulb size={16} />
                                </div>
                                {T[lang].services}
                            </div>
                            {showServices ? <ChevronUp size={16} className="text-slate-400"/> : <ChevronDown size={16} className="text-slate-400"/>}
                        </button>
                        
                        {showServices && (
                            <div className="mt-2 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                {DATA.services[lang].map((service, i) => (
                                    <div key={i} className="bg-white/60 p-4 rounded-xl border border-white/40 text-left shadow-sm">
                                        <div className="font-bold text-xs text-indigo-900 mb-1">{service.name}</div>
                                        <div className="text-[11px] text-slate-600 leading-relaxed">{service.desc}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Secondary Action List */}
                    <div className="space-y-3">
                        <ActionButton 
                            onClick={handleGoogleWallet} 
                            icon={<Wallet size={18} />} 
                            text={T[lang].wallet} 
                            subtext={T[lang].walletSub}
                        />
                        <ActionButton 
                            onClick={downloadVCard} 
                            icon={<Download size={18} />} 
                            text={T[lang].save} 
                            subtext=".vcf"
                        />
                         <ActionButton 
                            onClick={() => window.open(DATA.website, '_blank', 'noopener,noreferrer')}
                            icon={<Globe size={18} />} 
                            text={T[lang].portfolio}
                            subtext="jldigitalservices.com"
                            highlight
                        />
                    </div>

                    {/* Social Footer */}
                    <div className="mt-8 pt-6 border-t border-slate-200/50 flex justify-center gap-4">
                        <SocialIcon href={DATA.linkedin} icon={<Linkedin size={20} />} />
                        <SocialIcon href={DATA.github} icon={<Github size={20} />} />
                        <button 
                            onClick={() => setShowQR(true)} 
                            className="text-slate-400 hover:text-indigo-600 transition-colors p-2"
                            aria-label="Show QR Code"
                        >
                            <QrCode size={20} />
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-1 text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-md">
                            <span>NEQ:</span>
                            <span className="font-mono">{DATA.neq}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* QR Code Modal Overlay */}
            {showQR && (
                <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs relative text-center">
                        <button 
                            onClick={() => setShowQR(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-800"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="mb-4 mt-2">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-indigo-600 mb-3">
                                <QrCode size={24} />
                            </div>
                            <h3 className="font-bold text-slate-800 text-lg">{T[lang].scan}</h3>
                            <p className="text-xs text-slate-500 mt-1">{DATA.name}</p>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl inline-block mb-4 border border-slate-100">
                            <img 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(cleanUrl)}&color=1e293b&bgcolor=f8fafc`} 
                                alt="QR Code" 
                                className="w-48 h-48 mix-blend-multiply"
                                loading="lazy"
                            />
                        </div>
                        
                        <button 
                            onClick={() => setShowQR(false)}
                            className="w-full py-3 rounded-xl bg-slate-100 text-slate-600 font-semibold text-sm hover:bg-slate-200 transition-colors"
                        >
                            {T[lang].close}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
