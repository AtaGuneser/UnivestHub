
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/data')
      .then(response => setData(response.data))
      .catch(error => console.log({error}));

  }, [])


  return (
    <div className="App">

      <NavBar></NavBar>

      {data.map(nft => {
        return <div key={nft.contract_name}>
          <h2>{nft.contract_name}</h2>
          <h4>{nft.items_total}</h4>
          <p><img src={nft.logo_url} alt={nft.contract_name} style={{ width: "100px" }} /></p>
        </div>
      })}

      <Footer></Footer>

    </div>
  );
}

export default App;
