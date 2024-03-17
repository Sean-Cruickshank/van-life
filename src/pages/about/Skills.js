import { Link } from 'react-router-dom';
import { skillsData } from '../../data/skillsData';

export default function HardSkills() {
  
  const skillElement = skillsData.map((skill) => {
    return (
      <div className='about-skills-card' key={skill.id}>
        <Link className='button-linktext' to={skill.url}>
          {skill.title}
        </Link>
      </div>
    )
    
  })

  return (
    <div className='about-skills'>
      <h1>--- Hard Skills ---</h1>
      <p>Blurb about my experience with web development. Talk about what your interests are and your plans for the future</p>
      <div className='about-skills-container'>
        {skillElement}
      </div>

      <div className='about-skills-misc'>
        <h2>- Miscellaneous -</h2>
        <p>Versioning with GitHub</p>
        <p>Mobile App Development with Android Studio</p>
        <p>Networking - CCNA Level 6</p>
        <p>IT Service Management - ITIL</p>
      </div>
      
      <div className='about-skills-softskills'>
        <h1>--- Soft Skills ---</h1>
        <p>Blurb about soft skills</p>
      </div>
      
    </div>
    
  )
}