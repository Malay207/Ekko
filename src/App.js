import './App.css';
import Dashboard from './components/dashboard';
import { Mainbody } from './components/Mainbody';

function App() {
  const setBg = () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
  }

  return (
    <div className="App">
      <Dashboard setbg={setBg} />
      <Mainbody />

    </div>

  );
}

export default App;
