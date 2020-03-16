import React from "react";
import "../index.css"
function Todo() {
    return(
        <div className="b-iShack-todo b-iShack" id="b-iShack-todo">
            <div className="b-iShack-container">
                <h3>Что вы сможете делать в сервисе?</h3>
                <div className="b-iShack-todo-wrapp">
                    <div className="b-iShack-todo-item">
                        <div className="b-iShack-todo-item-img">
                            <img src="img/todo-1.svg"/>
                        </div>
                        <p className="b-iShack-text b-iShack-todo-info">Создавать аккаунты и рекламные кампании в
                            системах
                            <span>Google</span>
                            и <span>Яндекс</span>
                        </p>
                    </div>
                    <div className="b-iShack-todo-item">
                        <div className="b-iShack-todo-item-img">
                            <img src="img/todo-2.svg"/>
                        </div>
                        <p className="b-iShack-text b-iShack-todo-info">Пополнять рекламные аккаунты
                            систем <span>Google</span>
                            и <span>Яндекс</span>
                        </p>
                    </div>
                    <div className="b-iShack-todo-item">
                        <div className="b-iShack-todo-item-img">
                            <img src="img/todo-3.svg"/>
                        </div>
                        <p className="b-iShack-text b-iShack-todo-info">Смотреть статистику рекламных кампаний
                        </p>
                    </div>
                    <div className="b-iShack-todo-item">
                        <div className="b-iShack-todo-item-img">
                            <img src="img/todo-4.svg"/>
                        </div>
                        <p className="b-iShack-text b-iShack-todo-info">Формировать отчеты и получать официальные
                            документы для ИП и
                            юрлиц (договоры, счета, акты)
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Todo;