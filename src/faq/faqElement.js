import React from "react";


class FaqItem extends React.Component {
    // const title=props.title;
    constructor(props) {
        super(props);
        this.title = props.title;
        this.body = props.body;
        // this.activeClassName = props.activeClassName;
        // this.className = props.className;
        // this.handleClickFunction=this.handleClickFunction.bind(this);
        // this.state={
        //     isActiveFaq:false
        // };
        // console.log(this.state.isActiveFaq);
    }

    // handleClickFunction(e) {
    //     e.preventDefault();
    //
    //     this.setState(state => ({
    //         isActiveFaq: !state.isActiveFaq
    //     }));
    //
    //     console.log(this);
    //
    // }

    render() {
        return (
            // <div className="b-faq__element b-element">
            <div onClick={this.handleClickFunction}>
                <div className="b-element__question">
                    <div className="b-element__wrapper">{this.title}
                    </div>
                </div>
                <div className=" b-element__answer">
                    <p className="b-element__textual">{this.body}</p>
                </div>

            </div>
        )
    }

    // const isActiveFaq=props.

}

// function FaqBody(props){
//     const body=props.body;
//
// }

class FaqElement extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        this.activeClassName = props.activeClassName;
        this.className = props.className;
        this.title = props.title;
        this.body = props.body;
        this.handleClickFunction = this.handleClickFunction.bind(this);
        this.state = {
            isActiveFaq: false
        };
        console.log(props);
    }

    handleClickFunction(e) {
        e.preventDefault();

        this.setState(state => ({
            isActiveFaq: !state.isActiveFaq
        }));

        console.log(this);

    }


    render() {

        return (
            <div className={((this.state.isActiveFaq) ? this.activeClassName : (this.className))}
                onClick={this.handleClickFunction}

            >
                <FaqItem title={this.title} body={this.body}/>
            </div>
        );
    }

}


export default FaqElement;