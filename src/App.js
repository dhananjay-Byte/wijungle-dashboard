import './App.css';
import Test from './test';
import ChartComponent from './chartComponent';
import data from './output_data.json'
import Dashboard from './Charts/dashboard';
function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <ChartComponent data={data}/> */}
      <Dashboard data={data}/>
    </div>
  );
}

export default App;
