import { motion } from "framer-motion"

export default function Academics() {
  return (
    <section
      id="academics"
      className="px-8 md:px-24 py-1 bg-[#020408] text-white min-h-screen"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-4">
          // Academics & Resources
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Research &{" "}
          <span className="text-cyan-400">Academia</span>
        </h2>
      </motion.div>

      {/* Education & Training */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-14 border-l-4 border-cyan-400 pl-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
          Education & Training
        </h3>
        <p className="text-lg md:text-lg text-gray-400 leading-relaxed">
          I began my physics journey at the{" "}
          <strong className="text-white">University of Ilorin</strong>, where I
          gained foundational knowledge and life lessons. Currently, I am
          studying Physics and Material Science at{" "}
          <strong className="text-white">Kwara State University</strong> — a
          place that has shaped me in more ways than I can count.
        </p>
      </motion.div>

      {/* Research Work */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mb-14 border-l-4 border-cyan-400 pl-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
          Research Work
        </h3>
        <p className="text-lg md:text-lg text-gray-400 leading-relaxed">
          I am interested in medical physics, particularly in using simulations
          and computational approaches to solve real-world healthcare problems,
          while also exploring related areas in physics and material science. My
          work focuses on bridging theoretical concepts with practical
          applications, using tools like machine learning and data-driven
          modeling.
        </p>
      </motion.div>

      {/* Resources + Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">

        {/* Useful Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2 text-cyan-400">
            Useful Resources
          </h3>
          <p className="text-sm text-gray-500 font-mono mb-6">
            A curated list of resources I found particularly helpful.
          </p>
          <div className="space-y-3">
            {[
              { icon: "📄", label: "Noether Theorem", href: "/Noether Theorem.pdf" },
              { icon: "📄", label: "Introduction to Spin", href: "/QM_Spin.pdf" },
              { icon: "🌐", label: "Understanding Tensor Products", href: "https://www.math3ma.com/blog/the-tensor-product-demystified" },
              { icon: "🌐", label: "A Course on Cosmology", href: "https://cmb.wintherscoming.no/literature.php" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-900 border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 group"
              >
                <span>{item.icon}</span>
                <span className="text-sm font-mono tracking-wide">
                  {item.label}
                </span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Helpful Reports */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-2 text-cyan-400">
            Helpful Reports
          </h3>
          <p className="text-sm text-gray-500 font-mono mb-6">
            Reports I compiled while studying various topics.
          </p>
          <div className="space-y-3">
            {[
              { icon: "📄", label: "Introduction to Matrix Quantum Mechanics" },
              { icon: "📄", label: "Pedagogical report on 2508.03380v1" },
              { icon: "📄", label: "Statistics and QFT" },
              { icon: "📄", label: "Non-uniqueness of Vacuum" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-3 p-4 bg-gray-900 border border-gray-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 group"
              >
                <span>{item.icon}</span>
                <span className="text-sm font-mono tracking-wide">
                  {item.label}
                </span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Conferences & Talks */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="mb-2 border-l-4 border-cyan-400 pl-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-400">
          Conferences, Workshops & Talks
        </h3>
        <ul className="space-y-3">
          {[
            "DAE Symposium '23 at IISER Mohali (attended)",
            "Workshop on 'Observables in Quantum Gravity' '23 at IISER Mohali (attended)",
            "Monsoon Meet on Gauge Gravity '25 at IISc Bangalore (Talk Delivered)",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-base md:text-lg text-gray-400"
            >
              <span className="text-cyan-400 mt-1">→</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-base text-gray-400">
          You can find my detailed{" "}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline font-bold"
          >
            CV here →
          </a>
        </p>
       
      </motion.div>
     <div>
  <p className="text-cyan-400">Contact</p>

  <p>
    <a 
      href="mailto:your@email.com" 
      className="text-gray-400 hover:text-cyan-400 transition underline"
    >
      almubarakjimoh.physics@gmail.com
    </a>
  </p>
</div>
        
         
    </section>
  )
}
