import { motion } from "framer-motion";
import ProfilePic from "../assets/foto.png";

const floatingSymbols = [
  { symbol: "ħ", top: "12%", left: "18%", size: "2xl", opacity: 0.6 },
  { symbol: "∇", top: "28%", left: "70%", size: "xl", opacity: 0.5 },
  { symbol: "Σ", top: "52%", left: "14%", size: "3xl", opacity: 0.7 },
  { symbol: "Ψ", top: "62%", left: "60%", size: "2xl", opacity: 0.6 },
  { symbol: "λ", top: "35%", left: "45%", size: "xl", opacity: 0.5 },
  { symbol: "E=mc²", top: "18%", left: "52%", size: "2xl", opacity: 0.6 },
  { symbol: "α", top: "42%", left: "30%", size: "xl", opacity: 0.5 },
  { symbol: "β", top: "55%", left: "75%", size: "xl", opacity: 0.4 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col md:flex-row justify-start md:justify-center items-center px-6 md:px-16 pt-16 md:pt-0 bg-[#020408]"
    >
      {/* Glow behind hero */}
      <motion.div
        className="absolute -z-10 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl opacity-20 top-20 left-10 md:left-32"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating symbols */}
      {floatingSymbols.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-[#38BDF8] font-bold select-none text-${item.size}`}
          style={{ top: item.top, left: item.left, opacity: item.opacity }}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2, textShadow: "0 0 8px #38BDF8" }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex flex-col justify-center items-start text-left mb-8 md:mb-0 md:pr-10 mt-4 md:mt-40"
      >
        <p className="text-2xl sm:text-3xl md:text-base font-bold text-[#ADBDD6] mb-0">
          Hey there!
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mb-1 leading-tight">
          I am <span className="text-[#38BDF8]">Al-mubarak</span> Jimoh
        </h1>

        <p className="text-lg sm:text-xl md:text-xl font-medium text-[#ADBDD6] max-w-lg">
          I build physics simulations, machine learning models, and data workflows that turn
          theoretical concepts into practical solutions, exploring applications across science,
          technology, and healthcare.
        </p>
      </motion.div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center"
        whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0 0 20px #38BDF8" }}
      >
        <img
          src={ProfilePic}
          alt="Al-mubarak Jimoh"
          className="w-64 sm:w-80 md:w-80 h-64 sm:h-80 md:h-80 rounded-full object-cover shadow-lg border-2 border-[#ADBDD6]"
        />
      </motion.div>
    </section>
  );
}
