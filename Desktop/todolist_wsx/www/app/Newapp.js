import React, {Component} from 'react';
import classNames from "classnames";
import './Newapp.css';
import { Icon, Button } from 'antd';
import PraiseButton from "./PraiseButton.js";
import Thumb from "./Thumb.js";


export default class Newapp extends Component{


   constructor(){
       super();
       this.state = {
          todos : [],
          addClass:false,
       }
    //    console.log(this.state.addClass+"44");
   }
   plus(){
    
    if(this.state.todos.length==0){

        this.setState({
            todos:[true],
            addClass:true
        });
        
    }else{
        this.setState({
            todos : [],
            addClass:false
          });
    }
   
  }

//   big(){
//       this.setState({
//           addClass:'btn2'
//       })
//   }

    render(){
        return(
            <div>
                  <PraiseButton todos={this.state.todos} plus={this.plus.bind(this)} />
                   <span>
                        <Button type="primary" className='btn' onClick={()=>{this.plus()}}>
                            <Thumb todos2={this.state.addClass}/>  
                            
                        </Button>
                   </span>
               
            </div>
        )
        
    }


}