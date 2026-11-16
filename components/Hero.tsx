"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

const introVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.16,
    },
  },
};

const introItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <div className="hero-banner">
        <Image
          alt="brand logo"
          fill={true}
          className="hero-photo"
          fetchPriority="high"
          src="/images/image-02.jpg"
        />
        <motion.div
          className="wrap hero-intro"
          variants={introVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-location" variants={introItemVariants}>
            Family dentist in Houston, TX
          </motion.p>
          <motion.h1 className="big" id="hero-title" variants={introItemVariants}>
            Dental care for every smile
          </motion.h1>
          <motion.p className="lead" variants={introItemVariants}>
            From routine check-ups to braces and smile makeovers, our Houston
            team helps children and adults find care that fits their needs.
            General dentistry and orthodontics are available under one roof.
          </motion.p>
          <motion.div className="ctas" variants={introItemVariants}>
            <a className="pill" href="#visit">
              Book an appointment
            </a>
            <a className="pill team-call" href="tel:+18329414010">
              Call our team
            </a>
          </motion.div>
        </motion.div>
      </div>
      <nav aria-label="Explore treatments" className="hero-treatments">
        <a href="#general">General dentistry</a>
        <a href="#orthodontics">Orthodontics</a>
        <a href="#cosmetic">Cosmetic dentistry</a>
        <a href="#implants">Dental implants</a>
      </nav>
    </section>
  );
}
