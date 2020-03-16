import React from "react";
import "../index.css";

function For() {
    return (
        <div className="b-iShack-for  b-iShack" id="b-iShack-for">
            <div className="b-iShack-container">
                <h3>Для кого этот сервис?</h3>

                <div className="b-iShack-for-wrapp">
                    <div className="b-iShack-for-item">
                        <img src="img/for-1.svg"/>
                            <p className="b-iShack-text b-iShack-for-info"><span>Для новичков.</span> Сервис прост и
                                понятен в
                                использовании.
                                А чтобы было еще удобней, мы подготовили для вас <a href="#"> чек-лист по запуску
                                    контекстной
                                    рекламы.</a>
                            </p>
                    </div>

                    <div className="b-iShack-for-item">
                        <img src="img/for-2.svg"/>
                            <p className="b-iShack-text b-iShack-for-info"><span>Для специалистов.</span> Объединяйте
                                работу с
                                рекламными кампаниями Google и Яндекса в одном аккаунте со всем необходимым функционалом
                            </p>
                    </div>

                    <div className="b-iShack-for-item">
                        <img src="img/for-3.svg"/>
                            <p className="b-iShack-text b-iShack-for-info"><span>Для физических лиц.</span> Сервис прост
                                и понятен в использовании. А чтобы было еще удобней, мы подготовили для вас чек-лист по
                                запуску
                                контекстной рекламы.
                            </p>
                    </div>


                    <div className="b-iShack-for-item">
                        <img src="img/for-4.svg"/>
                            <p className="b-iShack-text b-iShack-for-info"><span>Для юридических лиц.</span> Работайте в
                                сервисе и
                                получайте
                                все необходимые документы (счета, акты, договоры)
                            </p>
                    </div>


                    <div className="b-iShack-for-item">
                        <img src="img/for-5.svg"/>
                            <p className="b-iShack-text b-iShack-for-info">
                                <span>Для рекламных агентств/фрилансеров.</span> Создавайте
                                клиентские аккаунты и управляйте ими через один общий аккаунт. А еще обратите внимание
                                на нашу
                                <a href="#">партнерскую программу</a>
                            </p>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default  For;