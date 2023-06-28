import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Avatar from './components/Avatar'
import Homer from './assets/homer.jpg'
import Maggie from './assets/maggie.jpg'

function App() {
  const [count, setCount] = useState(0)
  
//on peut l ecrire comme ca aussi 
// const simpsonFamily = [
//{
//firstName : "Bart",
//lastName : "Simpson",
//image : "https://www......."

//}
// {
  //firstName : "Bart",
  //lastName : "Simpson",
  //image : "https://www......."
  
  //}

//]
// pour l appeler d une autre maniere :
// return (
//  <div className= {"Avatar"}>
// <Avatar avatar{simpsonFamily[0]]}/>
// <Avatar avatar{simpsonFamily[1]]}/>
// )
//</div>

//PAR CONTRE DANS AVATAR.JSX faire : 
// const Avatar ({avatar}) => {
  // <div className="Avatar">
  //<div>
  //  <img src={avatar.image} className="avatar" alt="avatar.firstName" />
  //<p> I am {avatar.firstName} {avatar.lastName}<p />
// </div>

  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

<Avatar 
image={Homer}
firstName="Homer"
/>


<Avatar 
image={Maggie}
firstName="Maggie"
/>





      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}


export default App
