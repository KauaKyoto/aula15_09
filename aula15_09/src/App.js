import HelloEverbody from './components/helloEverbody';
import Frases from './components/frases';
import SayMyName from './components/sayMyName';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Hello Everbody =) </h1>
      <HelloEverbody />
      <h1> Sentence </h1>
      <Frases />
      <h1> About me </h1>
      <SayMyName name="Kyoto" profission="Psicologyst" age="16" dream="Best Support in LoL"/>
    </div>
  );
}

export default App;
