
import './App.css';
import Button from './components/button/Button';
import Greetings from './components/greetings/Greetings'
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button label="Click Me"></Button>
          <Greetings message='Lela'/>
      </header>
    </div>
  );
}

export default App;
