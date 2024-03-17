const SingleExp = ({
  id,
  company,
  title,
  time,
  texts,
  category,
  university,
  course,
}) => {
  return (
    <div className="leading-10" style={{marginBottom: '1.5rem'}}>
      <div className="flex justify-between mb-2 border-b border-gray-50">
        <h2 className="text-2xl font-bold leading-10">
          {category === "education" ? university : company}
        </h2>
        <p className="text-xl">{time}</p>
      </div>
      <h3 className="text-xl text-emerald-400 font-bold mb-4">{title}</h3>
      <ul className="list-disc ml-10 leading-8">
        {course ? <li>Relevant courses: {course}</li> : ""}
      </ul>
      <ul className="list-disc ml-10 leading-8">
        {category === "experience"
          ? texts.map((text, index) => <li key={index}>{text}</li>)
          : null}
      </ul>
    </div>
  );
};

export default SingleExp;
