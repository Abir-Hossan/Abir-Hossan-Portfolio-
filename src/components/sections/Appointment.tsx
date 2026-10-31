"use client";

import { motion, useReducedMotion } from "motion/react";
import AppointmentBooking from "@/components/sections/AppointmentBooking";

export default function Appointment() {
  const prefersReducedMotion = useReducedMotion();
  const animateOnScroll = prefersReducedMotion !== true;

  return (
    <section
      id="appointment"
      className="appointment-section section-pad"
      aria-labelledby="appointment-heading"
    >
      <div className="appointment-shell">
        <motion.div
          className="appointment-intro"
          initial={animateOnScroll ? { opacity: 0, y: 18 } : false}
          whileInView={animateOnScroll ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="appointment-eyebrow">LET&apos;S CONNECT</p>
          <h2 id="appointment-heading">Let&apos;s Schedule a Meeting</h2>
          <p className="appointment-description">
            Have a project, collaboration, or an interesting idea? Let&apos;s
            connect and discuss how we can build something amazing together.
          </p>
        </motion.div>

        <motion.div
          className="appointment-card-motion"
          initial={animateOnScroll ? { opacity: 0, y: 22 } : false}
          whileInView={animateOnScroll ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
        >
          <AppointmentBooking />
        </motion.div>
      </div>
    </section>
  );
}
