
import NavBar from './components/NavBar/NavBar';
import NFTCardList from './components/NftCard/NFTCardList';
import Footer from './components/footer/Footer';
import './App.css'


function App() {
  
  return (
    <div className='app'>

      <NavBar></NavBar>
      <NFTCardList></NFTCardList>
      <Footer></Footer>

    </div>
  );
}

export default App;
