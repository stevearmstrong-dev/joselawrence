'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University',
    location: '',
    period: 'Completed',
    gpa: 'First Class',
    type: 'Master\'s Degree',
    coursework: [],
  },
];

const Education = () => {
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
    <section id="education" className="py-32 px-6 lg:px-12 relative">
      <motion.div
        className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#00ffb2] opacity-5 blur-[120px] rounded-full"
        animate={{
          scale: [1, 1.28, 1],
          x: [0, 35, 0],
          y: [0, -30, 0],
          opacity: [0.05, 0.085, 0.05],
        }}
        transition={{
          duration: 13,
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5f5f5]">Education</h2>
          <div className="w-20 h-1 bg-[#00ffb2] cyan-glow"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl p-8"
              whileHover={{
                scale: 1.02,
                borderColor: "rgba(0, 255, 178, 0.35)",
                boxShadow: "0 18px 50px rgba(0, 255, 178, 0.12)",
              }}
              transition={{ duration: 0.4, ease: [0.65, 0.05, 0, 1] as any }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0 flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-[#00ffb2]/10 rounded-lg mt-1 border border-[#00ffb2]/20">
                      <GraduationCap className="w-5 h-5 text-[#00ffb2]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-[#f5f5f5]">{edu.degree}</h3>
                      <p className="text-lg text-[#d5d5d5] font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#8b8b8b] ml-14">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="px-4 py-2 bg-[#00ffb2]/10 text-[#00ffb2] rounded-full border border-[#00ffb2]/20">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  <span className="text-sm text-[#8b8b8b]">{edu.type}</span>
                </div>
              </div>

              {edu.coursework.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm font-semibold text-[#d5d5d5] mb-3">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1.5 bg-white/5 text-[#d5d5d5] text-xs font-medium rounded-full border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
