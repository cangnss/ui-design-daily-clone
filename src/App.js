import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Search />
      <Filters />
    </div>
  );
}

export default App;
