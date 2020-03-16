import React from "react";
import FaqElement from "./faqElement";

const data=[
    {title: "test1", body:"test1 body"},
    {title: "test2", body:"test1 body2"},
    {title: "test3", body:"test1 body3"},
];

function FAQ() {
    return (
        <div className="b-iShack-faq  b-iShack" id="b-iShack-faq">
            <div className="">

                <h3>Часто задаваемые вопросы</h3>

                <div className="b-faq__elements">
                    {data.map((itm, index) =>
                        <FaqElement data={data} activeClassName='js-active' className=" " title={itm.title} body={itm.body}/>
                    )}

                    <div className="b-faq__element b-element ">

                        <div className="b-element__question">
                            <div className="b-element__wrapper">Могу ли я воспользоваться вашим предложением, если я
                                физическое
                                лицо?
                            </div>
                        </div>
                        <div className="b-element__answer">
                            <p className="b-element__textual">К сожалению нет, в бонусной программе участвуют только
                                юридические
                                лица, заказавшие услуги у наших партнеров.</p>
                        </div>
                    </div>

                    <div className="b-faq__element b-element">
                        <div className="b-element__question">
                            <div className="b-element__wrapper">Могу ли я воспользоваться сразу всеми бонусами из вашего
                                предложения, или мне нужно выбрать только один?
                            </div>
                        </div>
                        <div className="b-element__answer">
                            <p className="b-element__textual">К сожалению нет, в бонусной программе участвуют только
                                юридические
                                лица, заказавшие услуги у наших партнеров.</p>
                        </div>
                    </div>


                    <div className="b-faq__element b-element">
                        <div className="b-element__question">
                            <div className="b-element__wrapper">Сколько примерно я сэкономлю на создании рекламной
                                кампании,
                                если
                                воспользуюсь скидкой 50%?
                            </div>
                        </div>
                        <div className="b-element__answer">
                            <p className="b-element__textual">К сожалению нет, в бонусной программе участвуют только
                                юридические
                                лица, заказавшие услуги у наших партнеров.</p>
                        </div>
                    </div>


                    <div className="b-faq__element b-element">
                        <div className="b-element__question">
                            <div className="b-element__wrapper">Что значит: вы компенсируете 90 у.е. на рекламу в
                                Google?
                                Как это
                                происходит?
                            </div>
                        </div>
                        <div className="b-element__answer">
                            <p className="b-element__textual">К сожалению нет, в бонусной программе участвуют только
                                юридические
                                лица, заказавшие услуги у наших партнеров.</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default FAQ;