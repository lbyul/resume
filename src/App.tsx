import Profile from './components/Profile/Profile';
import Training from './components/Training/Training';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Certification from './components/Certification/Certification'

function App() {

  return (
    <main className='resume'>
      <article className='resume__container'>
        <Profile />
        <section className='resume__content'>
          <Training />
          <Skill />
          <Project />
          <Experience /> 
          <Education />
          <Certification />
        </section>
      </article>
    </main>
  )
}

export default App
