import { links } from "../assets/data";

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-32 py-4 flex flex-col justify-between sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Sienna <span className="text-emerald-600">Nguyen</span>
        </h2>
        <div className="flex gap-x-10">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
