'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'joselawrence@gmail.com',
    href: 'mailto:joselawrence@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '07516 178 958',
    href: 'tel:+447516178958',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'West Yorkshire, UK',
    href: null,
  },
];

const socialLinks = [
  {
    icon: ExternalLink,
    label: 'Certifications',
    href: '#certifications',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.65, 0.05, 0, 1] as any,
      },
    },
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 relative">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00ffb2] opacity-10 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.22, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5f5f5]">Let's Connect</h2>
          <div className="w-20 h-1 bg-[#00ffb2] mx-auto mb-6 cyan-glow"></div>
          <p className="text-lg md:text-xl text-[#d5d5d5] max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a chat
            about technology and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-6"
                whileHover={{
                  scale: 1.08,
                  borderColor: "rgba(0, 255, 178, 0.4)",
                  boxShadow: "0 15px 40px rgba(0, 255, 178, 0.2)",
                }}
                transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] as any }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#00ffb2]/10 rounded-full mb-3 border border-[#00ffb2]/20">
                    <Icon className="w-5 h-5 text-[#00ffb2]" />
                  </div>
                  <p className="text-xs text-[#8b8b8b] mb-1 uppercase tracking-wide">{item.label}</p>
                  <p className="text-base font-semibold text-[#f5f5f5]">{item.value}</p>
                </div>
              </motion.div>
            );

            return item.href ? (
              <a key={index} href={item.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.a
            href="mailto:joselawrence@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00ffb2] text-[#08070e] rounded-full font-semibold text-base cyan-glow"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 70px rgba(0, 255, 178, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.65, 0.05, 0, 1] as any }}
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-3 hover:bg-white/5 rounded-full transition-all group"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5 text-[#8b8b8b] group-hover:text-[#00ffb2] transition-colors" />
                  </a>
                );
              })}
            </div>
            <p className="text-[#8b8b8b] text-sm font-medium">
              © {new Date().getFullYear()} Jose Lawrence
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
