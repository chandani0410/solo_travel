import logo from './logo.svg';
import './App.css';
import ProjectHead from './components/header'
import destination from './components/destination_data';
import Journal from './components/dataDisplay'
import './index.css'
function App() {

  const travel = destination.map(dest => {
    return(
      <Journal 
        key = {dest.id}
        {...dest}
      />
    )
  })
  
  return (
    <div className="App">
      <ProjectHead />
      <section className = "journal">
        {travel}
      </section>
    </div>
  );
}

export default App;
