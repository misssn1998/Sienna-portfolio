import { FaGithubSquare } from "react-icons/fa";

const SingleProjects = ({ id, url, img, title, github, text, tech }) => {
  return (
    <div className="card mx-auto bg-base-100 mb-4">
      <div className=" bg-slate-800 rounded-lg">
        <figure className="px-10 pt-10 ">
          <img
            src={img}
            alt={title}
            className="rounded-xl"
          />
        </figure>
      </div>
      <div className="py-6 leading-10">
        <h2 className="card-title divider divider-start">{title}</h2>
        <div className="text-left text-emerald-300">{tech}</div>
        <p className="leading-8">
          {text}{" "}
          <span>
            <a
              href=""
              className="flex items-center link link-hover text-emerald-300"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleProjects;
