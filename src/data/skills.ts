export type Skill = { name: string; category: string; description: string; color: string; orbit: number; phase: number; speed: number };
export const skills: Skill[] = [
 {name:"React",category:"Frontend Library",description:"Composable UI built with reusable components and state-driven interfaces.",color:"#61dafb",orbit:2.08,phase:0.15,speed:0.24},
 {name:"Next.js",category:"Full-Stack Framework",description:"App Router, server rendering, route handlers, and production web experiences.",color:"#f8fafc",orbit:2.35,phase:1.0,speed:-0.18},
 {name:"Node.js",category:"Runtime",description:"Server-side JavaScript, APIs, and backend application logic.",color:"#8cc84b",orbit:2.55,phase:2.05,speed:0.16},
 {name:"TypeScript",category:"Programming Language",description:"Type-safe application code with explicit contracts and maintainable data models.",color:"#3178c6",orbit:2.28,phase:3.1,speed:-0.21},
 {name:"Python",category:"Programming Language",description:"General-purpose programming for scripting, automation, and backend utilities.",color:"#ffd343",orbit:2.4,phase:4.1,speed:0.19},
 {name:"MongoDB",category:"Database",description:"Document-oriented data modeling and application persistence.",color:"#47a248",orbit:2.65,phase:5.05,speed:-0.15},
 {name:"CSS3",category:"Styling",description:"Responsive layout, design systems, transitions, and polished visual details.",color:"#2965f1",orbit:2.15,phase:5.8,speed:0.2},
 {name:"Git",category:"Version Control",description:"Source control workflows, branches, and collaborative development practices.",color:"#f05032",orbit:2.52,phase:6.4,speed:-0.17},
];
