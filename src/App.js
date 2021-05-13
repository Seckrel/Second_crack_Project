import Main from './components/MainComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
