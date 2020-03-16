import React from "react";

function FooterContact(props) {
    const footerContactData=props.contactData;
    const contactList=footerContactData.map((itm, index)=>
        <li className="b-footer__contact-phones" key={index}>
            <a className="b-footer__contact-link" href={itm.contactHref}>

                <img src={itm.contactImg}/>
                {/*<img src={itm.contactImg}/>*/}
                {/*<img src={require(bind(this), itm.contactImg)}/>*/}

            </a>
            <div className="b-footer__contact-phones-inner">
                <a className="b-footer__contact-phones-link" href={itm.contactHref}>{itm.contactText}</a>
            </div>
        </li>
    );
    return(
        <ul className="b-footer__contact">
            {contactList}
        </ul>
    )

}

export default FooterContact;