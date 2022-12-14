import './Super.css';
import React from 'react';

function Super(props) {

    let rateInput = React.createRef();
    let rateOut = React.createRef();

    function getvalue() {
        rateOut.current.innerHTML = rateInput.current.value;
    }

    return (
        <div className="hero">
            <img src={props.image} alt={props.name} title={props.name} />
            <div className="header">{props.name}</div>
            <nobr><span className="title">Задать рейтинг:</span><input onInput={getvalue} ref={rateInput} type="number" min="1" max="10" className="rate"></input></nobr>
            <div className="title">&#9734;&#9734;&#9734; Рейтинг: <span className="text" ref={rateOut}>{props.rating}</span></div>
            <div className="title">Подробнее: <span className="text">{props.description}</span></div>
            <div className="title">Вселенная: <span className="text">{props.features.universe}</span></div>
            <div className="title">Альтер-эго: <span className="text">{props.features.alterego}</span></div>
            <div className="title">Род деятельности: <span className="text">{props.features.career}</span></div>
            <div className="title">Друзья: <span className="text">{props.features.friends}</span></div>
            <div className="title">Суперсилы: <span className="text">{props.features.superpower}</span></div>
        </div >
    );
}

export default Super;