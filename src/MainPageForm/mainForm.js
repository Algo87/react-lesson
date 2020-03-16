import React from "react";

function MainForm() {
    return(
        <div className="b-iShack-form  b-iShack">
            <div className="b-iShack-container">
                <h3>Остались вопросы по работе сервиса?</h3>
                <p>Оставьте заявку, и мы свяжемся с вами</p>
                <form id="iShack-form" noValidate>

                    <label className="b-label-inp name-inp ishack-js">
                        <input name="user_name" placeholder="Имя" required type="text"/>
                    </label>
                    <label className="b-label-inp mail-inp ishack-js">
                        <input name="user_email" placeholder="E-mail" required type="email"/>
                    </label>
                    <label className="b-label-inp tel-inp ishack-js">
                        <input name="user_tel" placeholder="Телефон" required type="tel"/>
                    </label>
                    <label className="b-label-inp site-inp ishack-js">
                        <input name="user_url" required placeholder="Сайт" type="text"/>
                    </label>
                    <label className="b-label-textarea b-label-inp message-textarea ishack-js">
                        <textarea placeholder="Вопрос" required></textarea>
                    </label>
                    <button className="iShack-form-btn blue-btn" type="submit">Отправить</button>
                    {/*<div className="preloader-container">*/}

                    {/*    <svg className="lds-eclipse" height="200px" preserveAspectRatio="xMidYMid"*/}
                    {/*         style="animation-play-state: running; animation-delay: 0s; background: none;"*/}
                    {/*         viewBox="0 0 100 100" width="200px"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg">*/}
                    {/*        <path d="M20 50A30 30 0 0 0 80 50A30 32 0 0 1 20 50" fill="#00b9ff"*/}
                    {/*              ng-attr-d="{{config.pathCmd}}"*/}
                    {/*              ng-attr-fill="{{config.color}}" stroke="none"*/}
                    {/*              style="animation-play-state: running; animation-delay: 0s;"*/}
                    {/*              transform="rotate(144 50 51)">*/}
                    {/*            <animateTransform attributeName="transform" begin="0s" calcMode="linear"*/}
                    {/*                              dur="1s" keyTimes="0;1" repeatCount="indefinite"*/}
                    {/*                              style="animation-play-state: running; animation-delay: 0s;"*/}
                    {/*                              type="rotate"*/}
                    {/*                              values="0 50 51;360 50 51">*/}

                    {/*            </animateTransform>*/}
                    {/*        </path>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}

                </form>
            </div>
        </div>
    )

}

export default MainForm;