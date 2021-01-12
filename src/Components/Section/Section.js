import s from "./Section.module.css";

function Section({ title, children }) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
