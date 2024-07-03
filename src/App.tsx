import './styles.css'
import { FetchDogList } from './components/DogListView/FetchDogList'


function App() {
  return (
    <div className='container'>
      <h1 className='title'>Doggos</h1>
      <FetchDogList/>
    </div>
  )
}

export default App
