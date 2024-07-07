import './App.css';
import image from'./weddingDay.jpg';
import imageTwo from'./theWeddingDay.jpg';
import {GroceryList} from'./GroceryList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={ image } width="300px" alt='weddingDay' />
      </div>
      <div className='container'>
        <h1>Свадебный чек-лист</h1>
      </div>
       <GroceryList />
      <div className='container'>
        <img src={ imageTwo } width="350px" alt='wedding' />
      </div>
    </div>
  );
}

export default App;
