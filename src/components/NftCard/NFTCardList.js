import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './NFTCardList.css'

const NFTCardList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/data')
            .then(response => setData(response.data))
            .catch(error => console.log({ error }));

    }, [])

    return (
        <div className='container'>
            {data.map(nft => {
                return <div key={nft.contract_name} className='card'>
                    <p className='nftLogo'><img src={nft.logo_url} alt={nft.contract_name} /></p>
                    <h2 className='nftName'>{nft.contract_name}</h2>
                    <h3 className='nftBanner'><img src={nft.banner_url} alt={nft.contract_name} /></h3>
                    <h4 className='nftTotal'>Total Items: {nft.items_total}</h4>
                </div>
            })}


        </div>
    )
}

export default NFTCardList