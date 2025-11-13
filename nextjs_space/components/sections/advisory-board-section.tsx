
"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

interface BoardMember {
  name: string;
  title: string;
  claimToFame: string;
  bio: string;
  image: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Jasrita Dhir",
    title: "Strategic Advisor, Brand & Marketing",
    claimToFame: "TedX Speaker and Senior Vice President of Marketing",
    bio: "Jasrita is a master brand-builder with a track record of driving growth for major corporations. Her expertise ensures our AI solutions are leveraged not just for efficiency, but to create powerful market positioning and lasting customer loyalty.",
    image: "/board-members/jasrita-dhir.png"
  },
  {
    name: "Karen Mousseau",
    title: "Strategic Advisor, Talent Acquisition",
    claimToFame: "Senior Talent Acquisition Strategist",
    bio: "Karen is a recruitment powerhouse with deep roots in technical and corporate hiring at IBM, BMO and Accenture. She builds elite teams that drive AI innovations, business shifts, and cybersecurity defenses forward.",
    image: "/board-members/karen-mousseau.png"
  },
  {
    name: "Neil Dhawan, CPA",
    title: "Strategic Advisor, Finance & Business Transformation",
    claimToFame: "Regional Manager, with over a decade in senior financial management roles across diverse industries.",
    bio: "Neil is a seasoned finance strategist adept at navigating complex global environments, driving change management, and optimizing financial operations. His expertise strengthens our AI-driven business transformations, ensuring robust financial frameworks and cybersecurity-aligned strategies for sustainable growth.",
    image: "/board-members/neil-dhawan.png"
  },
  {
    name: "Senthil Parthiban",
    title: "Strategic Advisor, Data & Business Intelligence",
    claimToFame: "Data consultant across healthcare, utilities, insurance, and finance, mastering Microsoft BI stack (ADF, SSIS, Power BI), ETL, data warehousing, and machine learning.",
    bio: "Senthil transforms raw data into strategic gold through BI and ML expertise. His work unlocks powerful insights for our AI platforms, fueling secure and efficient business transformations.",
    image: "/board-members/senthil-parthiban.png"
  },
  {
    name: "Andrea Morris",
    title: "Strategic Advisor, Product & Audience Innovation",
    claimToFame: "President & Founder, AM-FM Productions",
    bio: "As a successful entrepreneur who has navigated the music industry for 25 years, Andrea is an expert in identifying 'the next big thing. She brings this 'star-making' intuition to our innovation process, guiding our team and our clients on how to cut through the noise, captivate an audience, and build products that truly stand out.",
    image: "/board-members/andrea-morris.png"
  },
  {
    name: "Guneet Chhabra",
    title: "Strategic Advisor, Digital Transformation",
    claimToFame: "Founder and CEO of Adroit Infosystems",
    bio: "Guneet is a visionary digital entrepreneur who transforms emerging tech into scalable global successes. He empowers our clients to navigate AI-driven changes with seamless business transformations and ironclad cybersecurity measures.",
    image: "/board-members/guneet-chhabra.png"
  },
  {
    name: "Leonard Kuek",
    title: "Strategic Advisor, AI Talent & Automation",
    claimToFame: "Senior Talent Acquisition Consultant specializing in Technology",
    bio: "Leonard is an expert talent acquisition strategist, with a focus on automating recruitment workflows. Leonard brings over 2 decades of expertise honed through clients like Marriott International, T-Mobile, BMO etc. His strategies ensure that teams and clients assemble top-tier expertise for technology & innovation.",
    image: "/board-members/leonard-kuek.png"
  },
  {
    name: "Dr Sukhi Pritam",
    title: "Strategic Advisor, Healthcare & Technology",
    claimToFame: "Deployment Leader at Alberta Health Services, specializing in emergency and critical care systems.",
    bio: "Sukhi excels in high-stakes communications and deployment in healthcare, ensuring seamless crisis response. He advises us on AI tools for resilient transformations in mission-critical sectors.",
    image: "/board-members/sukhi-pritam.png"
  },
  {
    name: "Tapan Jha",
    title: "Strategic Advisor, Cybersecurity",
    claimToFame: "Ranked as Top 10 Cyber Forensic Solution Provider",
    bio: "Tapan is a pioneer in cybersecurity forensics and emergency response, with a proven track record in innovative tech development. His guidance fortifies our cybersecurity frameworks, ensuring secure AI deployments and resilient business transformations.",
    image: "/board-members/tapan-jha.png"
  },
  {
    name: "Marlon Gibbs",
    title: "Strategic Advisor, Talent Acquisition & Recruitment",
    claimToFame: "Senior Talent Acquisition Consultant at Stantec; former recruitment leader at Bell, Hatch, Ceridian, and IBM, with over a decade of expertise in full-cycle recruitment across technical and corporate roles.",
    bio: "Marlon is a recruitment powerhouse, adept at sourcing elite talent for complex technical and business roles. His strategic approach to talent acquisition, honed at top-tier firms, ensures AI-driven transformations and cybersecurity initiatives are powered by the best teams, delivering unmatched results.",
    image: "/board-members/marlon-gibbs.png"
  }
];

export default function AdvisoryBoardSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(boardMembers.length / itemsPerPage);

  const handleNext = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentMembers = () => {
    const startIndex = currentIndex * itemsPerPage;
    return boardMembers.slice(startIndex, startIndex + itemsPerPage);
  };

  // Auto-rotate every 6 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-qgd-fg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Strategic Advisory Board
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our core partners in navigating complex challenges and achieving our mission.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-qgd-card dark:bg-slate-800 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-slate-700 group"
            aria-label="Previous board members"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-qgd-card dark:bg-slate-800 p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-slate-700 group"
            aria-label="Next board members"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden px-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 35 },
                  opacity: { duration: 0.4 }
                }}
                className="grid md:grid-cols-2 gap-8"
              >
                {getCurrentMembers().map((member, idx) => (
                  <motion.div
                    key={member.name}
                    className="bg-qgd-card dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 group h-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="p-6 sm:p-8 flex flex-col gap-6 h-full min-h-[380px]">
                      {/* Top Section: Image + Name Only */}
                      <div className="flex items-center gap-4 sm:gap-6">
                        {/* Circular Image */}
                        <div className="flex-shrink-0">
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-blue-100 dark:ring-blue-900/30 group-hover:ring-blue-300 dark:group-hover:ring-blue-700 transition-all duration-300 shadow-lg">
                            <Image
                              src={member.image}
                              alt={`${member.name} - ${member.title}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="112px"
                              priority={idx < 2}
                            />
                          </div>
                        </div>

                        {/* Name Only (Right of Image) */}
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-qgd-fg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                            {member.name}
                          </h3>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent" />

                      {/* Bottom Section: Title + Centered Content */}
                      <div className="flex-1 flex flex-col items-center justify-start space-y-4 text-center px-2">
                        {/* Title */}
                        <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 leading-snug">
                          {member.title}
                        </p>

                        {/* Claim to Fame */}
                        <div className="flex items-start gap-3 justify-center max-w-prose">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex-shrink-0" />
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed text-left">
                            {member.claimToFame}
                          </p>
                        </div>
                        
                        {/* Bio */}
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify max-w-prose">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-blue-600 to-indigo-600' 
                    : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            Backed by industry leaders with decades of combined experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
