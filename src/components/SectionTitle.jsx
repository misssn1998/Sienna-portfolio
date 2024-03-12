import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className="mx-auto max-w-7xl pl-32 pr-28">
      <h2 className="divider divider-start text-6xl font-bold">{text} <span>.</span></h2>
    </div>
  );
}

export default SectionTitle