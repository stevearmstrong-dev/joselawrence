'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Cloud, Database, Wrench, Users, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Database Systems',
    icon: Database,
    skills: ['SQL Server 2008-2019', 'Azure SQL (IaaS/PaaS)', 'MySQL', 'PostgreSQL', 'Oracle 11g/12c'],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    skills: ['SSMS', 'SSIS', 'SSRS', 'SSAS', 'SQL Profiler', 'Visual Studio', 'Team Foundation Server'],
  },
  {
    title: 'Redgate Suite',
    icon: CheckCircle2,
    skills: ['SQL Monitor', 'SQL Compare', 'SQL Backup', 'Index Manager'],
  },
  {
    title: 'Core Competencies',
    icon: Code2,
    skills: ['High Availability', 'Mirroring', 'Clustering', 'Performance Tuning', 'Disaster Recovery', 'TDE Encryption', 'CDC', 'Query Optimization'],
  },
  {
    title: 'Scripting & Automation',
    icon: Cloud,
    skills: ['T-SQL', 'PowerShell', 'Capacity Planning'],
  },
  {
    title: 'Platforms',
    icon: Database,
    skills: ['Windows Server 2012-2019', 'Red Hat Enterprise Linux', 'Azure'],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.65, 0.05, 0, 1] as any,
      },
    },
  };

  return (
    <section id="skills" className="py-32 px-6 lg:px-12 relative">
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#00ffb2] opacity-5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.35, 1],
          x: [0, 40, 0],
          y: [0, 30, 0],
          opacity: [0.05, 0.09, 0.05],
        }}
        transition={{
          duration: 14,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5f5f5]">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#00ffb2] cyan-glow"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-2xl flex flex-col"
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(0, 255, 178, 0.3)",
                  boxShadow: "0 15px 40px rgba(0, 255, 178, 0.15)",
                }}
                transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] as any }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-[#00ffb2]/10 rounded-lg flex-shrink-0 border border-[#00ffb2]/20">
                    <Icon className="w-5 h-5 text-[#00ffb2]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#f5f5f5]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 flex-1">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1.5 bg-white/5 text-[#d5d5d5] text-xs font-medium rounded-full border border-white/10 hover:border-[#00ffb2]/30 hover:bg-[#00ffb2]/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
