import { motion } from 'motion/react';
import { 
  Wallet, 
  ShieldCheck, 
  ArrowRightLeft, 
  Download, 
  Lock, 
  ChevronDown,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';
import { useState } from 'react';

// --- Componentes Reutilizables ---

const BentoCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`glass rounded-3xl p-6 hover:border-white/20 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#00ff88] transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/60">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function App() {
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
      desc: "La pasarela de pago por excelencia para Cuba. El puente entre cripto y moneda local.",
      type: "Pasarela + Wallet"
    },
    {
      title: "CubaXchange / QBita",
      desc: "Plataformas especializadas para comprar BTC con CUP/MLC directamente.",
      type: "P2P Especializado"
    }
  ];

  return (
    <div className="min-h-screen grid-bg selection:bg-[#00ff88]/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 glass px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#00ff88] p-2 rounded-lg">
              <Zap className="w-6 h-6 text-black fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tighter">CUBA<span className="text-[#00ff88]">CRYPTO</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a href="#wallets" className="hover:text-white transition-colors">Wallets</a>
            <a href="#plataformas" className="hover:text-white transition-colors">Plataformas</a>
            <a href="#guia" className="hover:text-white transition-colors">Guía</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-[#00ff88] transition-all">
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase opacity-70">Actualizado 2025 - Edición Cuba</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
              ¡ASERE, PONTE DURO CON LAS CRYPTO!
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto">
              La guía definitiva para guardar tus USDT y cobrar en MLC/CUP sin que nadie te meta el pie.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="shiny-border bg-white text-black text-lg font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-transform">
                Ver Guía Completa 🚀
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wallets Section */}
      <section id="wallets" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Wallet className="text-[#00ff88]" /> 1. Wallets recomendados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wallets.map((w, i) => (
            <BentoCard key={i} delay={i * 0.1}>
              <div className="mb-6">{w.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{w.title}</h3>
              <p className="text-white/50">{w.desc}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Platforms Section */}
      <section id="plataformas" className="max-w-7xl mx-auto px-6 py-20 bg-white/[0.01]">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <ArrowRightLeft className="text-blue-400" /> 2. Exchanges y Pasarelas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <BentoCard key={i} delay={i * 0.1}>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#00ff88] mb-4">{p.type}</div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-white/50">{p.desc}</p>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* Guide Section */}
      <section id="guia" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">3. El Paso a Paso para Cuba</h2>
        <div className="space-y-4">
          <BentoCard delay={0.1}>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-[#00ff88] flex-shrink-0">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Crea tu Wallet No-Custodio</h4>
                <p className="text-white/40">Bájate Phantom o Trust Wallet. Lo más importante: <strong>guarda tus 12 palabras en papel</strong>. Si las pierdes, perdiste el dinero, consorte.</p>
              </div>
            </div>
          </BentoCard>
          <BentoCard delay={0.2}>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-blue-400 flex-shrink-0">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Entra en CoinEx o QvaPay</h4>
                <p className="text-white/40">Crea tu cuenta y verifica tu identidad (KYC). Están pensadas para cubanos, así que no te darán bateo con el pasaporte o el ID de aquí.</p>
              </div>
            </div>
          </BentoCard>
          <BentoCard delay={0.3}>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-purple-400 flex-shrink-0">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Haz la jugada del P2P</h4>
                <p className="text-white/40">Compra USDT pagando con Transfermóvil o EnZona. Confirma el pago y espera a que te liberen los fondos. ¡Ya estás en el juego!</p>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Safety Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="glass rounded-[3rem] p-12 border-[#00ff88]/20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
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
      <footer className="relative py-20 px-6 border-t border-white/10 z-10 bg-[#050505]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#00ff88] p-1 rounded-lg">
                <Zap className="w-5 h-5 text-black fill-current" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight uppercase">CUBA CRYPTO</span>
            </div>
            <p className="text-white/40 max-w-xs text-sm">
              Inspirado en crypto4dummy y el toque. Ayudando a los cubanos a navegar el dólar digital.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 text-[10px] uppercase tracking-widest text-white/20 font-bold">
            <div>© 2024 - PATRIA Y CRYPTO.</div>
            <div>Hecho con 21st dev vibe por Stitch. 🇨🇺</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
