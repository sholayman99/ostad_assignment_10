
import "../styles/Project.css";

const Project = () => {
   
  const arr = [
    {
      title: "Project-1",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Project-2",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Project-3",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Project-4",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Project-5",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Project-6",
      des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <section className="project-container">
      <h2>Our Top-Picked Projects__</h2>
      <div className="project-card">
        {arr.map((p, i) => (
          <div key={i}>
            <h3>{p.title} </h3>
            <p>{p.des} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
