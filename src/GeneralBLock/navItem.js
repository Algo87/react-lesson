import React from "react";
function NavItm(props){
    const data=props.data;
    const listItems=data.map((itm, index)=>
        <li key={index} className="b-iShack-header-nav-item"><a className="b-iShack-header-link" href={itm.hrefLink}>{itm.title}</a></li>);

    return(
        <ul>
            {listItems}
        </ul>
    )
}
export default NavItm;