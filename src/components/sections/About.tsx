import SectionHeading from "@/components/ui/SectionHeading";

const values = [
  { title: "Full-Stack", detail: "Development" },
  { title: "Modern Web", detail: "Applications" },
  { title: "Clean Code", detail: "& UX" },
];

export default function About() {
  return (
    <section id="about" className="about section-shell section-pad">
      <SectionHeading
        eyebrow="ABOUT ME"
        title={
          <>
            Turning Ideas Into
            <br />
            <span className="gradient-text">Real Digital Experiences</span>
          </>
        }
        description="I build scalable, intuitive digital products with thoughtful design and reliable engineering. My focus is on performance, usability, and transforming real-world challenges into solutions."
      />

      <div className="value-grid">
        {values.map((value, index) => (
          <article className="value-card" key={value.title}>
            <span className="value-index">0{index + 1}</span>
            <h3>{value.title}</h3>
            <p>{value.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
