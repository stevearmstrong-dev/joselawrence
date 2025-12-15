'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Senior SQL Database Administrator',
    company: 'NewDay Ltd',
    type: 'Full Time, Permanent',
    location: 'West Yorkshire, UK',
    period: 'June 2017 – Present',
    highlights: [
      'Administer 50+ SQL Server databases supporting high-volume financial transactions across Development, Staging, and Production environments for millions of customers',
      'Centralised management of Azure SQL deployments, including scaling and disaster recovery, reducing recovery time by 40%',
      'Conduct performance tuning using execution plans, DMVs, and SQL Profiler, improving query performance by 30%',
      'Standardised database monitoring using Redgate SQL Monitor across all production servers, increasing database uptime to 99.99%',
      'Implement and maintain database security controls including TDE encryption, role-based access, and audit logging',
      'Provide on-call support and collaborate with infrastructure, networking, and development teams for incident resolution',
    ],
    tags: ['SQL Server', 'Azure SQL', 'Performance Tuning', 'Redgate', 'TDE Encryption', 'PowerShell'],
  },
  {
    title: 'SQL Database Administrator & Developer',
    company: 'MyUtilityGenius',
    type: 'Full Time, Permanent',
    location: 'UK',
    period: 'June 2012 – June 2017',
    highlights: [
      'Developed both Domestic and Commercial energy comparison engines with multiple calculators, serving 100,000+ customers',
      'Administered 20+ databases across Development, Staging, and Production environments on SQL Server 2008R2/2012/2014 and SQL Azure',
      'Automated tariff uploads and SFTP batch file transfers using PowerShell, resulting in £25,000 cost savings',
      'Restructured database schema through normalisation and index optimisation, improving query performance by 20%',
      'Led data migration from SQL Server 2008R2 to 2012, including SSIS package migration, achieving zero data loss',
      'Trained 2 new database staff and maintained integrity checks, re-indexing, and statistics updates',
    ],
    tags: ['SQL Server', 'SQL Azure', 'SSIS', 'PowerShell', 'Database Migration'],
  },
  {
    title: 'SQL Database Administrator',
    company: 'IceniMobile',
    type: 'Full Time, Permanent',
    location: 'UK',
    period: 'August 2010 – May 2012',
    highlights: [
      'Administered 15+ databases across Development, QA, Localisation, Staging, and Production environments',
      'Configured High Availability using database mirroring with failover clustering, ensuring 99.9% uptime for payment systems',
      'Set up automated daily performance test runs, capturing Perfmon counters and SQL traces for analysis',
      'Prepared database growth forecasts for 6, 12, 18, and 24-month horizons to support capacity planning',
      'Implemented Change Data Capture (CDC) and automated Business Intelligence deployment checks',
      'Trained new DBA staff and provided on-call support via ticketing system',
    ],
    tags: ['SQL Server', 'High Availability', 'Mirroring', 'CDC', 'Performance Testing'],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: [0.65, 0.05, 0, 1] as any,
      },
    },
  };

  return (
    <section id="experience" className="py-32 px-6 lg:px-12 relative">
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-[#00ffb2] opacity-5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -25, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5f5f5]">Work Experience</h2>
          <div className="w-20 h-1 bg-[#00ffb2] cyan-glow"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-8"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(0, 255, 178, 0.4)",
                boxShadow: "0 20px 60px rgba(0, 255, 178, 0.1)",
              }}
              transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] as any }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2 text-[#f5f5f5]">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-lg text-[#d5d5d5] mb-2">
                    <Briefcase className="w-5 h-5 text-[#00ffb2]" />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="text-[#8b8b8b]">•</span>
                    <span className="text-[#8b8b8b]">{exp.type}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b8b8b]">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#00ffb2] rounded-full mt-2 flex-shrink-0 cyan-glow"></span>
                    <span className="text-[#d5d5d5] leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1.5 bg-white/5 text-[#d5d5d5] text-xs font-medium rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
