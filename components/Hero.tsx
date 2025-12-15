'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      transition: {
        duration: 0.75,
        ease: [0.65, 0.05, 0, 1] as any,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 relative overflow-hidden">
      {/* Cyan glow effect with parallax */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00ffb2] opacity-10 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full relative z-10"
      >
        <div className="text-center">
          <motion.div variants={itemVariants} className="inline-block">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-[#00ffb2] bg-[#00ffb2]/10 rounded-full border border-[#00ffb2]/20">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#f5f5f5]"
          >
            Jose Lawrence
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#d5d5d5] mb-8"
          >
            Senior SQL Database Administrator
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[#8b8b8b] max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            18+ years delivering high-availability database solutions across financial services and fintech.
            Expert in Azure SQL, enterprise migrations, and managing mission-critical VLDBs up to 10+ TB
            in 24x7 high-transaction OLTP environments.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:joselawrence@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ffb2] text-[#08070e] rounded-full font-semibold cyan-glow"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(0, 255, 178, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.65, 0.05, 0, 1] as any }}
            >
              <Mail className="w-5 h-5" />
              Get in touch
            </motion.a>
            <motion.a
              href="/Jose_Lawrence_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-[#d5d5d5]"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(0, 255, 178, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.65, 0.05, 0, 1] as any }}
            >
              View resume
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="mailto:joselawrence@gmail.com"
              className="p-3 hover:bg-white/5 rounded-full transition-all"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-[#d5d5d5] hover:text-[#00ffb2] transition-colors" />
            </a>
            <div className="flex items-center gap-2 text-[#8b8b8b] px-3">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">West Yorkshire, UK</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: [0.65, 0.05, 0, 1] as any
            }}
            className="inline-block"
          >
            <svg
              className="w-6 h-6 text-[#00ffb2] drop-shadow-[0_0_8px_rgba(0,255,178,0.6)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
