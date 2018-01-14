import React,{Component} from 'react';
import classnames from 'classnames';
import './Thumb.css';

export default class Thumb extends Component{
    constructor({todos2}){
        super();
    }


    // "anticon icon-like2 '${this.state.addClass}' "

    render(){
         let v = this.props.todos2;
        //  console.log(v);
        return(
            <div>
                
                <i className={v?"anticon icon-like2 btn2":"anticon icon-like2"}   style={{ fontSize: 18, color: 'red' }} />{" "}点击
            </div>
        )
    }
}