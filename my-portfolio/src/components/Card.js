import React from 'react'; 

import CardInfo from '../components/Cardinfo';

function Card(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}>

        </div>

    );
}