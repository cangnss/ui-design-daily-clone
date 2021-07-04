import './App.css';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Search from './components/Search/Search';
import Filters from './components/Filters/Filters';
import Contents from './components/Contents/Contents';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Search />
      <Filters />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
