'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar, Trophy } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Certified Associate (OCA)',
    issuer: 'Oracle Corporation',
    date: 'Database Administration',
    color: 'cyan',
  },
];

const achievement = {
  title: 'Key Professional Achievements',
  event: '18+ Years of Database Excellence',
  date: 'Career Highlights',
  description:
    'Led migration of on-premises SQL Server databases to Azure SQL VMs, reducing infrastructure costs by £100,000. Delivered Oracle-to-SQL Server migration, saving £50,000 annually. Implemented High Availability using database mirroring with failover clustering, achieving 99.99% uptime. Mentored 2 junior DBAs in database administration and security best practices.',
};

const Certifications = () => {
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
    hidden: { opacity: 0, y: 45, scale: 0.93 },
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

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'bg-[#00ffb2]/10 border-[#00ffb2]/20 hover:bg-[#00ffb2]/15',
      purple: 'bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/15',
      green: 'bg-green-500/10 border-green-500/20 hover:bg-green-500/15',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getIconColor = (color: string) => {
    const colors = {
      cyan: 'text-[#00ffb2]',
      purple: 'text-purple-400',
      green: 'text-green-400',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="certifications" className="py-32 px-6 lg:px-12 relative">
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00ffb2] opacity-5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
          opacity: [0.05, 0.095, 0.05],
        }}
        transition={{
          duration: 11,
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
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5f5f5]">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-[#00ffb2] cyan-glow"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass rounded-2xl p-6 border ${getColorClasses(
                cert.color
              )}`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 35px rgba(0, 255, 178, 0.2)",
              }}
              transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] as any }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <Award className={`w-5 h-5 ${getIconColor(cert.color)}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-[#f5f5f5]">{cert.title}</h3>
                  <p className="text-sm font-medium mb-2 text-[#d5d5d5]">{cert.issuer}</p>
                  <div className="flex items-center gap-1 text-sm text-[#8b8b8b]">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="glass rounded-2xl p-8 border border-[#00ffb2]/30"
          whileHover={{
            scale: 1.02,
            borderColor: "rgba(0, 255, 178, 0.5)",
            boxShadow: "0 20px 60px rgba(0, 255, 178, 0.25)",
          }}
          transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] as any }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#00ffb2]/10 rounded-lg border border-[#00ffb2]/20">
              <Trophy className="w-8 h-8 text-[#00ffb2]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-[#f5f5f5]">{achievement.title}</h3>
              <p className="text-lg font-semibold text-[#d5d5d5] mb-2">{achievement.event}</p>
              <div className="flex items-center gap-1 text-sm text-[#8b8b8b] mb-4">
                <Calendar className="w-4 h-4" />
                <span>{achievement.date}</span>
              </div>
              <p className="text-[#d5d5d5] leading-relaxed">{achievement.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
