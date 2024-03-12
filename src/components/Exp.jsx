import SectionTitle from "./SectionTitle"
import {jobs} from "../assets/data"
import SingleExp from "./SingleExp";

const Exp = () => {
  return (
    <section id="exp">
      <SectionTitle text="Experience" />
      <div className="mx-auto max-w-7xl px-32 py-8 grid grid-rows-2">
        {jobs.map((job) => {
          const { id, company, title, time, text } = job;
          return <SingleExp key={id} {...job} />;
        })}
      </div>
    </section>
  );
}

export default Exp