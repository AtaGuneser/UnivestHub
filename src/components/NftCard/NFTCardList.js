import React from 'react';

function NFTCard({ nftData }) {
    return (
        <div className="card">
            <img src={nftData.logo_url} alt={nftData.contract_name} />
            <div className="card-content">
                <div className="card-title">{nftData.contract_name}</div>
                <div className="card-info">
                    Sales: {nftData.sales_total} | Floor Price: {nftData.floor_price}
                </div>
                <div className="card-price">
                    Average Price: {nftData.average_price_30d}
                </div>
            </div>
        </div>
    );
}

export default function NFTCardList({ nftDataList }) {
    return (
        <div className="container">
            {nftDataList.map((nftData, index) => (
                <NFTCard key={index} nftData={nftData} />
            ))}
        </div>
    );
}
