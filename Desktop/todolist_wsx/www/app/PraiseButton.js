import React,{Component} from 'react';
import classNames from "classnames";
import './PraiseButton.css';

export default class PraiseButton extends Component{
   constructor({plus,todos,chang}){
       super();
   }

   componentDidMount(){
       if(this.props.todos.length!=0){

           this.setState({
               todos : [],
               addClass:''
             })
       }
    //   console.log(123+this.state.todos)

   }

    render(){
        return(
            <div>
                {
                    this.props.todos.map((item,index)=>{
                       
                         if(index==0&&item==true){
                           return <span key={index} className='btn3' ><div className='btn4'>+1</div></span>
                           
                         }else{
                             
                            return ;
                         }
                    })
                }
                
            </div>
        )
    }


}