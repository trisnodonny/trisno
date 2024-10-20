import ProjectCard from "@components/partial/ProjectCard";

export default function MyProject() {
  return (
    <section className="myproject" data-section="show">
      <div className="myproject-wrapper">
        <div className="title">
          <div className="top"><span className="slash">/</span>Project.</div>
          <p>Selected work I've taken on in the past.</p>
        </div>
        <ul className="card-wrapper">
          <li><ProjectCard /></li>
          <li><ProjectCard /></li>
          <li><ProjectCard /></li>
        </ul>
      </div>
    </section>
  );
}
