"use client";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import type { CSSProperties } from "react";
const SkillsGlobe=dynamic(()=>import("@/components/three/SkillsGlobe"),{ssr:false,loading:()=> <div className="globe-loading" role="status">Preparing the skills constellation…</div>});
export default function Skills(){return <section id="skills" className="skills-section section-pad"><div className="section-shell"><SectionHeading eyebrow="TECH STACK" title="My Skills" description="Tools I use to turn ideas into thoughtful, reliable digital products."/><div className="globe-panel"><SkillsGlobe/><div className="globe-caption"><span className="live-pulse"/> INTERACTIVE TECHNOLOGY FIELD <span>DRAG TO EXPLORE</span></div></div><div className="skill-tags" aria-label="Technology list">{skills.map(skill=><span key={skill.name} style={{"--skill-color":skill.color} as CSSProperties}>{skill.name}</span>)}</div></div></section>}
