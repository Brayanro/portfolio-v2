import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'

const AppWrap = (Component, idName, classNames) => function HOC () {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
        <div className='copyright'>
          <p className='p-text'>
            Hecho con ❤️ por <a href='https://github.com/Brayanro' target='_blank' rel='noreferrer'>Brayan Rodriguez Montealegre</a>
          </p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
