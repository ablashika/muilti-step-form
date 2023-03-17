
import '../src/styles.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";




function App() {
  return (
    <div className="App">
     <Router>      
        <Routes>
          <Route exact={true} path="/" element={<FirstStep/>} />
          <Route exact={true} path="/step-two" element={<SecondStep/>} />
        </Routes>
      </Router>

   
    </div>
  );
}

export default App;
