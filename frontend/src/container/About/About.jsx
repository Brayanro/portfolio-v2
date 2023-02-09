import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
import './About.scss'

const About = () => {
  const [studies, setStudies] = useState([])

  useEffect(() => {
    const query = '*[_type == "studies"]'
    client.fetch(query)
      .then(data => setStudies(data))
  }, [])

  return (
    <>
      <h2 className='head-text'>Sobre <span>Mi</span></h2>
      <div className='app__about-container'>
        <section className='app__about-profile'>
          <p>
            Desarrollador Frontend altamente capacitado en tecnologías web, con dominio en JavaScript, React, Next.js, Bootstrap, Tailwind, Material UI, Git. Apasionado por el desarrollo de software, las buenas prácticas de código y diseño, siempre estoy en busca de mejorar mis habilidades y conocimientos. Proactivo, colaborador y con la capacidad de trabajar en equipo. Soy estudiante de Ingeniería de Software y actualmente estoy en el décimo semestre.
          </p>
          <a className='p-text' href='../../../cv-Brayan-Rodriguez-Montealegre.pdf' download>Descargar CV</a>
        </section>
        <section className='app__about-study'>
          <p className='bold-text'>Estudios:</p>
          {studies.map(study => (
            <motion.div
              className='app__about-study-item'
              key={study.name}
            >
              <div className='app__about-study-year'>
                <p className='bold-text'>{study.year}</p>
              </div>
              <motion.div className='app__about-study-desc'>
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className='app__about-study-info'
                    data-tip
                    data-for={study.name}
                    key={study.name}
                  >
                    <h4 className='bold-text'>{study.name}</h4>
                    <p className='p-text'>{study.place}</p>
                  </motion.div>
                </>
              </motion.div>
            </motion.div>
          ))}
        </section>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'sobre mi',
  'app__whitebg'
)
