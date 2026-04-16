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
        <p className="pb-6 text-white/60">{answer}</p>\n      </motion.div>
    </div>
  );
};

export default function App() {\n  const steps = [\n    {\n      title: "Bájate la App",\n      desc: "Bájate una wallet de verdad (Trust Wallet o Exodus). No te duermas, guarda bien tus 12 palabras que eso es oro.",\n      icon: <Smartphone className=\"w-10 h-10 text-[#00ff88]\" />,\n      size: \"col-span-2 md:col-span-1\"\n    },\n    {\n      title: \"Ponle Candado\",\n      desc: \"Nada de compartirlas con el consorte ni guardarlas en el chat de WhatsApp. ¡Seguridad primero, asere!\",\n      icon: <Lock className=\"w-10 h-10 text-blue-400\" />,\n      size: \"col-span-2 md:col-span-1\"\n    },\n    {\n      title: \"La Jugada del P2P\",\n      desc: \"Aprende a comprar sin que te estafen. Busca gente con estrellas y reputación en el mercado.\",\n      icon: <ArrowRightLeft className=\"w-10 h-10 text-purple-400\" />,\n      size: \"col-span-2\"\n    }\n  ];\n\n  return (\n    <div className=\"min-h-screen grid-bg selection:bg-[#00ff88]/30\">\n      {/* Navbar */}\n      <nav className=\"fixed top-0 w-full z-50 border-b border-white/5 glass px-6 py-4\">\n        <div className=\"max-w-7xl mx-auto flex justify-between items-center\">\n          <div className=\"flex items-center gap-2\">\n            <div className=\"bg-[#00ff88] p-2 rounded-lg\">\n              <Zap className=\"w-6 h-6 text-black fill-current\" />\n            </div>\n            <span className=\"text-xl font-bold tracking-tighter\">CUBA<span className=\"text-[#00ff88]\">CRYPTO</span></span>\n          </div>\n          <div className=\"hidden md:flex gap-8 text-sm font-medium text-white/70\">\n            <a href=\"#\" className=\"hover:text-white transition-colors\">La Jugada</a>\n            <a href=\"#\" className=\"hover:text-white transition-colors\">Seguridad</a>\n            <a href=\"#\" className=\"hover:text-white transition-colors\">FAQ</a>\n          </div>\n          <button className=\"bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-[#00ff88] transition-all\">\n            Entrar\n          </button>\n        </div>\n      </nav>\n\n      {/* Hero Section */}\n      <section className=\"relative pt-40 pb-20 px-6\">\n        <div className=\"max-w-4xl mx-auto text-center\">\n          <motion.div\n            initial={{ opacity: 0, scale: 0.9 }}\n            animate={{ opacity: 1, scale: 1 }}\n            transition={{ duration: 0.8 }}\n          >\n            <h1 className=\"text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent\">\n              ¡ASERE, PONTE DURO CON TUS USDT!\n            </h1>\n            <p className=\"text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto\">\n              La guía definitiva para que guardes tus verdes digitales sin que nadie te meta el pie. De Cuba para el mundo.\n            </p>\n            <div className=\"flex flex-col md:flex-row gap-4 justify-center\">\n              <button className=\"shiny-border bg-white text-black text-lg font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-transform\">\n                ¡Empezar el Volao! 🚀\n              </button>\n            </div>\n          </motion.div>\n        </div>\n      </section>\n\n      {/* Bento Grid */}\n      <section className=\"max-w-7xl mx-auto px-6 py-20\">\n        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">\n          {steps.map((step, i) => (\n            <BentoCard key={i} className={step.size} delay={i * 0.1}>\n              <div className=\"mb-10\">{step.icon}</div>\n              <h3 className=\"text-3xl font-bold mb-4\">{step.title}</h3>\n              <p className=\"text-white/50 text-lg leading-relaxed\">{step.desc}</p>\n            </BentoCard>\n          ))}\n        </div>\n      </section>\n\n      {/* FAQ Section */}\n      <section className=\"max-w-3xl mx-auto px-6 py-20\">\n        <h2 className=\"text-4xl font-bold mb-12 text-center\">Dudas de la gente dura</h2>\n        <div className=\"glass rounded-3xl p-8\">\n          <FAQItem \n            question=\"¿Necesito VPN para esto?\"\n            answer=\"Depende de la wallet, pero siempre es bueno tener uno a mano por si las moscas. Algunas apps se ponen pesadas con el IP de aquí.\"\n          />\n          <FAQItem \n            question=\"¿Cómo saco los pesos?\"\n            answer=\"La jugada es por P2P o con gente de confianza. Pasas tus USDT y te sueltan los pesos o los verdes por transferencia o en mano.\"\n          />\n          <FAQItem \n            question=\"¿Es legal esto?\"\n            answer=\"Andamos en una zona gris, pero mientras no te andes buscando líos raros, nadie te va a meter el pie por guardar tus ahorros en cripto.\"\n          />\n        </div>\n      </section>\n\n      {/* Footer */}\n      <footer className=\"relative py-20 px-6 border-t border-white/10 z-10 bg-[#050505]\">\n        <div className=\"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10\">\n          <div>\n            <div className=\"flex items-center gap-2 mb-4\">\n              <div className=\"bg-[#00ff88] p-1 rounded-lg\">\n                <Zap className=\"w-5 h-5 text-black fill-current\" />\n              </div>\n              <span className=\"font-display font-bold text-lg tracking-tight uppercase\">CUBA CRYPTO</span>\n            </div>\n            <p className=\"text-white/40 max-w-xs text-sm\">\n              Helping Cubans navigate the digital dollar since before it was cool. No te dejes timar.\n            </p>\n          </div>\n          \n          <div className=\"grid grid-cols-2 md:grid-cols-3 gap-12 text-sm\">\n            <div className=\"flex flex-col gap-4\">\n              <span className=\"font-bold uppercase tracking-widest text-[10px] text-[#00ff88]\">La Jugada</span>\n              <a href=\"#\" className=\"hover:text-[#00ff88] transition-colors\">Wallets</a>\n              <a href=\"#\" className=\"hover:text-[#00ff88] transition-colors\">P2P</a>\n            </div>\n            <div className=\"flex flex-col gap-4\">\n              <span className=\"font-bold uppercase tracking-widest text-[10px] text-[#00ff88]\">Social</span>\n              <a href=\"#\" className=\"hover:text-[#00ff88] transition-colors\">Telegram</a>\n              <a href=\"#\" className=\"hover:text-[#00ff88] transition-colors\">Twitter</a>\n            </div>\n            <div className=\"flex flex-col gap-4\">\n              <span className=\"font-bold uppercase tracking-widest text-[10px] text-[#00ff88]\">Legal</span>\n              <a href=\"#\" className=\"hover:text-[#00ff88] transition-colors\">Privacidad</a>\n              <a href=\"#\" className=\"hover:text-[#00ff88] transition-colors\">Términos</a>\n            </div>\n          </div>\n        </div>\n        \n        <div className=\"max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/20 font-bold\">\n          <div>© 2024 CUBA CRYPTO. PATRIA Y CRYPTO.</div>\n          <div>Hecho con 21st dev vibe por Stitch. 🇨🇺</div>\n        </div>\n      </footer>\n    </div>\n  );\n}
