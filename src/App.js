import './App.css';
import Nav from "./components/Nav"
import Card from './components/Card';
import data from './data';

function App() {
  const locations = data.map(location => {
    return (
      <Card 
        key={location.id}
        {...location}
      />
    )
  })
  return (
    <div>
      <Nav />
      <div className='locations'>
        {locations}
      </div>
    </div>
  );
}

export default App;
