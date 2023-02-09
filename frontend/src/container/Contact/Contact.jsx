import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Contact.scss'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_6gjnquk', 'template_2pb696h', form.current, 'user_XPY6IOVxROlyJDFecPYPF')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
    e.target.reset()
  }

  return (
    <>
      <h2 className='head-text'>Contacto</h2>
      <div className='app__contact-cards'>
        <div className='app__contact-card'>
          <img src={images.email} alt='Email' />
          <a href='mailto:brayan7890123@gmail.com' className='p-text'>
            brayan7890123@gmail.com
          </a>
        </div>
        <div className='app__contact-card'>
          <img src={images.mobile} alt='Mobile' />
          <a href='tel:+573134556924' className='p-text'>
            +57 313 455 6924
          </a>
        </div>
      </div>
      <form className='app__contact-form app__flex' ref={form} onSubmit={sendEmail}>
        <div className='app__flex'>
          <input
            className='p-text'
            type='text'
            placeholder='Tu nombre'
            name='user_name'
            required
          />
        </div>
        <div className='app__flex'>
          <input
            className='p-text'
            type='email'
            placeholder='Tu correo electronico'
            name='user_email'
            required
          />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Tu mensaje'
            name='message'
            required
          />
        </div>
        <button className='p-text'>Enviar mensaje</button>
      </form>
    </>
  )
}

export default AppWrap(
  MotionWrap(Contact, 'app__contact'),
  'contacto',
  'app__primarybg'
)
