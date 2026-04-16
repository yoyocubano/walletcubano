import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Zap, 
  Shield, 
  Wallet, 
  ArrowRight, 
  ChevronDown, 
  Smartphone,
  Lock,
  ArrowRightLeft,
  ShieldCheck,
  Smartphone as Phone
} from 'lucide-react';

const wallets = [
  {
    title: "Phantom (Solana)",
    desc: "La más rápida para Solana. Ideal para recibir pagos con feos bajos.",
    icon: <Zap className="w-8 h-8 text-purple-400" />
  },
  {
    title: "Trust Wallet",
    desc: "Multi-chain. Sirve para todo: USDT, BTC, BNB. Imprescindible.",
    icon: <Wallet className="w-8 h-8 text-[#00ff88]" />
  },
  {
    title: "MetaMask",
    desc: "Para los más pro. Perfecta para Web3 y redes como BSC o Polygon.",
    icon: <Globe className="w-8 h-8 text-orange-400" />
  }
];

const platforms = [
  {
    title: "CoinEx (P2P)",
    desc: "Exchange internacional que acepta cubanos. Su P2P tiene ofertas en CUP y MLC.",
    type: "Exchange + P2P"
  },
  {
    title: "QvaPay",
    desc: "La pasarela de pago por excelencia para Cuba. El puente comercial.",
    type: "Pasarela + Wallet"
  },
  {
    title: "CubaXchange / QBita",
    desc: "Plataformas especializadas para comprar BTC con CUP/MLC directamente.",
    type: "P2P Especializado"
  }
];

const faqs = [
  {
    q: "¿Necesito VPN para esto?",
    a: "Depende de la wallet, pero siempre es bueno tener uno a mano. Algunas apps se ponen pesadas con el IP de aquí, aunque wallets como Phantom funcionan directo."
  },
  {
    q: "¿Cómo saco los pesos?",
    a: "La jugada es por P2P (como en CoinEx) o con pasarelas como QvaPay. Pasas tus USDT y ellos te pasan los pesos o MLC por transferencia de inmediato."
  },
  {
    q: "¿Es legal esto?",
    a: "Las personas naturales pueden usar cripto libremente en Cuba. Solo está regulado para empresas. Es una forma segura de guardar tus ahorros."
  }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    {
      title: "La Wallet Sagrada",
      desc: "Bájate Phantom o Trust Wallet. Nada de custodios raros, tus llaves son el tesoro.",
      icon: <Wallet className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "El Volao del P2P",
      desc: "Entra a CoinEx o QvaPay. Consigue tus primeros pesos digitales de cubano a cubano.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Blindaje Total",
      desc: "Aprende a proteger tu semilla. Si compartes tus 12 palabras, se perdió el mambo.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00ff88]/30 overflow-x-hidden">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none" />
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3 border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00ff88] rounded-lg flex items-center justify-center">
              <Zap className="text-black w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight italic">CUBA CRYPTO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#guia" className="hover:text-[#00ff88] transition-colors">La Guía</a>
            <a href="#wallets" className="hover:text-[#00ff88] transition-colors">Wallets</a>
            <a href="#plataformas" className="hover:text-[#00ff88] transition-colors">Plataformas</a>
          </div>
          <button className="glass px-5 py-2 rounded-full text-sm font-bold hover:bg-white/10 transition-all border border-white/20">
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/20 mb-8"
          >
            <Globe className="w-3 h-3 text-[#00ff88]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#00ff88]">Actualizado 2025 - De Cuba para el mundo</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-6xl md:text-8xl leading-[0.9] mb-8"
          >
            ¡ASERE, PONTE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d2fd]">DURO CON LAS CRYPTO!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            La guía definitiva para que guardes tus verdes digitales sin que nadie te meta el pie. 
            Domina CoinEx, QvaPay y las mejores wallets del momento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <button className="bg-[#00ff88] text-black px-10 h-16 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              ¡Empezar el Volao! 🚀
            </button>
            <button className="glass px-10 h-16 rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/20">
              Ver Guía
            </button>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="guia" className="relative py-20 px-6 z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-[#00ff88]/30 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/40 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wallets & Platforms Combined */}
      <section id="wallets" className="relative py-20 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-black mb-8 italic tracking-tighter">1. Wallets recomendados</h2>
              <div className="space-y-4">
                {wallets.map((w, i) => (
                  <div key={i} className="glass p-6 rounded-2xl flex gap-6 items-center border-white/5 hover:bg-white/5 transition-colors">
                    <div className="flex-shrink-0">{w.icon}</div>
                    <div>
                      <h4 className="font-bold text-xl">{w.title}</h4>
                      <p className="text-white/40 text-sm">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="plataformas">
              <h2 className="text-4xl font-black mb-8 italic tracking-tighter text-[#00d2fd]">2. Exchanges y Pasarelas</h2>
              <div className="space-y-4">
                {platforms.map((p, i) => (
                  <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:bg-white/5 transition-colors">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#00ff88] mb-2">{p.type}</div>
                    <h4 className="font-bold text-xl mb-2">{p.title}</h4>
                    <p className="text-white/40 text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-6 max-w-4xl mx-auto z-10">
        <h2 className="font-display font-bold text-4xl mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
          Dudas de la gente dura
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/50 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="glass rounded-[3rem] p-12 border-[#00ff88]/20 bg-gradient-to-br from-[#00ff88]/5 to-transparent">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 italic tracking-tighter">
            <ShieldCheck className="text-[#00ff88]" /> Pautas de Seguridad
          </h2>
          <ul className="space-y-6 text-white/60">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></div>
              <span><strong>No dependas de un solo exchange:</strong> Por el bloqueo, cualquiera puede cerrar. Mantén tus ahorros en tu wallet personal (Phantom/Trust).</span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></div>
              <span><strong>La semilla es sagrada:</strong> Nadie (ni soporte de apps, ni el consorte) necesita tus 12 palabras. El que te las pida te va a estafar.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></div>
              <span><strong>Verifica la red:</strong> Si mandas USDT por la red equivocada (ej: mandas de TRC20 a ERC20), el dinero se pierde en el aire. Haz pruebas pequeñas primero.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-white/10 z-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00ff88] rounded-lg flex items-center justify-center">
                <Zap className="text-black w-5 h-5 fill-current" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight italic text-white">CUBA CRYPTO</span>
            </div>
            <p className="text-white/40 max-w-xs text-sm italic">
              Navigating the crypto world from Cuba with style and safety.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-white/60">
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest text-[10px] text-white/40">Recursos</span>
              <a href="#" className="hover:text-[#00ff88]">Wallets</a>
              <a href="#" className="hover:text-[#00ff88]">Exchanges</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest text-[10px] text-white/40">Seguridad</span>
              <a href="#" className="hover:text-[#00ff88]">Semilla</a>
              <a href="#" className="hover:text-[#00ff88]">VPN</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold uppercase tracking-widest text-[10px] text-white/40">Legal</span>
              <a href="#" className="hover:text-[#00ff88]">Privacidad</a>
              <a href="#" className="hover:text-[#00ff88]">Términos</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[12px] text-white/20">
          <div>© 2024 CUBA CRYPTO. PATRIA Y CRYPTO.</div>
          <div>Hecho con 21st dev vibe por Stitch. 🇨🇺</div>
        </div>
      </footer>
    </div>
  );
}
