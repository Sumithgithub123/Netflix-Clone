
import './App.css';
import Banner from './componets/banner/banner';
import Navbar from './componets/navbar/navbar';
import Rowpost from './componets/rowpost/rowpost';
import { action,originals,comedy } from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' issmall/>
      <Rowpost url={comedy} title='Comedy' issmall/>
    </div>
  );
}

export default App;
