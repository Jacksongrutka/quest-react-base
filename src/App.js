import Content from './components/content/content'
import Btn from './components/button/button'
import './App.css';

const alertLabel = (label) =>{
    alert(label)
}

function App() {
  return (
    <div className="App">
      <Content text="no dia mais claro, na noite mais densa, o mal sucumbirá anti a minha presença, todo aquele que venera o mal há de penar, quando o poder do lanterna verde enfrentar" color="green"/>
      <Btn label="lanterna verde" alertLabel={alertLabel}/>
    </div>
  );
}

export default App;
