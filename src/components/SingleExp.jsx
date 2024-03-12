

const SingleExp = ({id, company, title, time, texts}) => {
  return (
    <div className="mb-12 leading-10">
      <div className="flex justify-between mb-4 border-b border-gray-50">
        <h2 className="text-2xl font-bold leading-10">{company}</h2>
        <p className="text-xl">{time}</p>
      </div>
      <h3 className="text-xl text-emerald-400 font-bold mb-4">{title}</h3>
      <ul className="list-disc ml-10 leading-8">
        {texts.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </div>
  );
}

export default SingleExp