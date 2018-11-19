import React, {Component} from 'react';
import PropTypes from 'prop-types';

//함수형으로 변환
const TodoLi =(props) =>{
    const onClickRemoveBtn = () =>{
        props.handleRemovedData(props.todo);
    }

    return (
         <li>
            <span>{props.todo}</span>
            <span className="btn-container"><a href="#" onClick={onClickRemoveBtn}>삭제</a></span>
        </li>

    )
}

//class TodoLi extends Component{
//    constructor(){
//        super();
//        this.onClickRemoveBtn = this.onClickRemoveBtn.bind(this);
//    }
//
//    onClickRemoveBtn(){
//        this.props.handleRemovedData(this.props.todo);
//    }
//
//    render(){
//            return(
//                 <li>
//                    <span>{this.props.todo}</span>
//                    <span className="btn-container"><a href="#" onClick={this.onClickRemoveBtn}>삭제</a></span>
//                </li>
//            );
//        }
//    }

TodoLi.propTypes = {
    todo: PropTypes.string
    //todo: PropTypes.number
}
export default TodoLi;