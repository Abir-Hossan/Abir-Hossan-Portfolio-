export type ExperienceItem = { title: string; subtitle: string; description: string; icon: string };
// The supplied Figma labels these cards as experience. They are presented as product/engineering focus areas, not fabricated employment history.
export const experience: ExperienceItem[] = [
 {title:"WebHR — HR Management",subtitle:"Product exploration",description:"HR workflows, employee management, and operational tools are useful reference points for building task-focused interfaces.",icon:"◈"},
 {title:"WebHR Kiosk — Time Clock",subtitle:"Interaction patterns",description:"Attendance and check-in flows highlight the importance of clear status, low-friction actions, and responsive layouts.",icon:"◷"},
 {title:"AI-powered workflows",subtitle:"Automation concepts",description:"Exploring how structured inputs and thoughtful interfaces can make automated workflows easier to understand.",icon:"✦"},
 {title:"File sharing experiences",subtitle:"Information architecture",description:"Thinking through safe, intuitive file access and the details that make common product flows feel reliable.",icon:"⬡"},
];
