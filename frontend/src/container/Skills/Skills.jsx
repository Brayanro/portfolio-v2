import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { client, urlFor } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(skillsQuery)
      .then(data => {
        setSkills(data)
      })
  }, [])

  return (
    <>
      <h2 className='head-text'>Habilidades</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'habilidades',
  'app__whitebg'
)
