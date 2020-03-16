import React from "react";
import './../index.css';
import MainImg from '../img/main-img.png'

function Main(){
    return(
        <div className="b-iShack-main b-iShack">
            <div className="b-iShack-container">
                <div className="b-iShack-main-info">
                    <h2>iShack – ваш бесплатный помощник
                        для автоматизации запуска и ведения контекстной рекламы
                    </h2>
                    <h3>Первый сервис в Беларуси, в котором вы можете работать
                        с <span>Google Рекламой</span> и <span>Яндекс.Директом</span> из одного аккаунта
                    </h3>
                    <a className="sing-in-btn blue-btn">Войти в систему</a>
                </div>
                <div className="b-iShack-main-img">
                    <img src={MainImg}/>
                </div>
            </div>
        </div>
    )
}

export default Main;