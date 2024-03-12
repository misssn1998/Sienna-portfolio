import {skills} from '../assets/data'

const Skills = () => {
  return (
    <div className='mx-auto py-2'>
        {skills.map((skill) => {
            const {id, text} = skill;
            return (
              <p key={id} className="badge px-2 py-4 bg-slate-700 mx-1 my-2 ">
                {text}
              </p>
            );
        })}
    </div>
  )
}

export default Skills