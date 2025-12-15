'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Code2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="bg-[#08070e] min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
