"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { site } from "@/data/site";

type SubmissionState = "idle" | "sending" | "success" | "error";

const faqs = [
  {
    question: "What’s your pricing?",
    answer: "Share your project requirements and I’ll propose a scope, timeline, and estimate.",
  },
  {
    question: "How fast can you deliver?",
    answer: "Delivery depends on the scope and complexity. Once we discuss your requirements, I’ll share a realistic timeline.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. I collaborate remotely with individuals, startups, and teams across different locations.",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Your message could not be sent. Please try again.");
      }

      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="contact-reference-section contact-showcase">
      <div className="contact-showcase-inner">
        <p className="contact-showcase-eyebrow">CONTACT</p>
        <h2 className="contact-showcase-title">LET’S BUILD SOMETHING.</h2>
        <p className="contact-showcase-tagline">Quick replies. Honest communication. Real work.</p>
        <p className="contact-showcase-description">Have a project in mind? Tell me a little about it.</p>

        <form className="contact-showcase-form" onSubmit={handleSubmit}>
          <div className="contact-form-fields">
            <label>
              <span>NAME</span>
              <input
                autoComplete="name"
                name="name"
                placeholder="Your name"
                minLength={2}
                maxLength={100}
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              <span>EMAIL</span>
              <input
                autoComplete="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                maxLength={254}
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          </div>
          <label className="contact-message-field">
            <span>MESSAGE</span>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={4}
              minLength={10}
              maxLength={5000}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <label className="contact-honeypot" aria-hidden="true" tabIndex={-1}>
            <span>Leave this field empty</span>
            <input
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
            />
          </label>
          <button className="contact-gmail-button" type="submit" disabled={status === "sending"}>
            <Send size={14} /> {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {feedback && (
            <p className={`contact-form-feedback is-${status}`} role="status" aria-live="polite">
              {feedback}
            </p>
          )}
          <p className="contact-form-note">
            Prefer email? Write directly to <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </form>

        <div className="contact-reference-socials contact-showcase-socials" aria-label="Social links">
          <a href={`mailto:${site.email}`} aria-label="Send email"><Mail size={17} /></a>
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
        </div>

        <div className="contact-faq">
          <p className="contact-faq-heading">FAQ</p>
          <div className="contact-faq-list">
            {faqs.map((faq) => (
              <details className="contact-faq-item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
