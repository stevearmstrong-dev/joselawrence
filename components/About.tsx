'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

const About = () => {
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
    <section id="about" className="py-32 px-6 lg:px-12 relative">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#00ffb2] opacity-5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 12,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5f5f5]">About Me</h2>
          <div className="w-20 h-1 bg-[#00ffb2] cyan-glow"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <p className="text-base md:text-lg text-[#d5d5d5] leading-relaxed mb-6">
              I'm a Senior SQL Server DBA with 18+ years of experience delivering high-availability
              database solutions across financial services and fintech sectors. My expertise spans from
              managing mission-critical VLDBs up to 10+ TB to implementing enterprise-grade migrations
              and performance optimizations in 24x7 high-transaction OLTP environments.
            </p>
            <p className="text-base md:text-lg text-[#d5d5d5] leading-relaxed mb-6">
              With proven expertise in Azure SQL (IaaS & PaaS), I've led migrations that reduced
              infrastructure costs by £100,000 and implemented High Availability solutions achieving
              99.99% uptime. I specialize in query performance tuning, disaster recovery planning,
              and building automated processes with PowerShell and T-SQL.
            </p>
            <p className="text-base md:text-lg text-[#d5d5d5] leading-relaxed">
              Currently at NewDay Ltd, I administer 50+ SQL Server databases supporting high-volume
              financial transactions for millions of customers. I'm passionate about database security,
              mentoring junior DBAs, and collaborating with cross-functional teams to deliver robust
              database solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass glass-hover p-6 rounded-2xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#00ffb2]/10 rounded-lg flex-shrink-0 border border-[#00ffb2]/20">
                  <Award className="w-5 h-5 text-[#00ffb2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-[#f5f5f5]">OCA Certified</h3>
                  <p className="text-sm text-[#8b8b8b] leading-relaxed">
                    Oracle Certified Associate in Database Administration with Master of Computer
                    Applications (MCA) - First Class honours.
                  </p>
                  <p className="text-xs text-[#00ffb2] mt-2 font-medium">Oracle Corporation</p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover p-6 rounded-2xl transition-all">
              <h3 className="text-lg font-semibold mb-4 text-[#f5f5f5]">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00ffb2] rounded-full cyan-glow"></span>
                  <span className="text-[#d5d5d5]">£100K+ cost savings via migrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00ffb2] rounded-full cyan-glow"></span>
                  <span className="text-[#d5d5d5]">99.99% database uptime achieved</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00ffb2] rounded-full cyan-glow"></span>
                  <span className="text-[#d5d5d5]">30% query performance improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#00ffb2] rounded-full cyan-glow"></span>
                  <span className="text-[#d5d5d5]">18+ years DBA experience</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
