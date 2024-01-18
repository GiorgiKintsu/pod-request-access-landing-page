import './App.css'
import Acces from './Components/Acces/Acces'

function App() {
  

  return (
    <div className='mainWrapper'>
      <div className='secondcover'></div>
      <div className='logos'>
        <img src="./logo.svg" alt="logoImage" />
        <img src="./pod.svg" alt="podImage" />
      </div>
      <div className='bannerImage'>
        <div className='cover'></div>
        <img className='noneImage' src="./singer.png" alt="singerImage" />
        <div className='ragac'>
          <img src="./ragac.svg" alt="ragacWertilebi" />
        </div>
      </div>
      <Acces />
    </div>
  )
}

export default App
