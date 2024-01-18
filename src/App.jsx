import './App.css'
import Acces from './Components/Acces/Acces'

function App() {
  

  return (
    <div className='mainWrapper'>
      <div className='logos'>
        <img src="./logo.svg" alt="logoImage" />
        <img src="./pod.svg" alt="podImage" />
      </div>
      <div className='bannerImage'>
        <img src="./singer.png" alt="singerImage" />
      </div>
      <Acces />
    </div>
  )
}

export default App
