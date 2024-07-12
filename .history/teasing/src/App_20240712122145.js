
import './App.css';
import Game from './Game-Component/Game';

const App=()=>{
  return(
    <>
    {/* <div className="app.main-container">
      
      <h1 className="app.game-header">
      Welcome to the Brain Twister game 
      </h1>
      <div className="app.game-container">
<Game/>
      </div>
    </div> */}
    <div className="app.main-container">
      
      <h1 className="app.game-header">
      Welcome to the Brain Twister game 
      </h1>
      <div >
<Game/>
      </div>
    </div>
    </>
  )
}
export default App;