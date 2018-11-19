import React, {Component} from 'react';
import PropTypes from 'prop-types';

//부모로부터 props가 자동으로 내려옴
//함수형으로 바꾼거다
const AddLi = (props) =>{
    let inputBox;
    const onClickAddButton = () =>{
         props.handleAddedData(inputBox.value);
         inputBox.value ="";
         inputBox.focus();
    }
    return(
        <div className="input-group input-group-lg">
            <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={input => {inputBox = input}}/>
            <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={onClickAddButton}>등록</button>
            </span>
        </div>
    );
}

AddLi.propTypes = {
    handleAddedData: PropTypes.func.isRequired
}

export default AddLi;

//class AddLi extends Component{
//
//    constructor(){
//         super();
//         this.onClickAddButton = this.onClickAddButton.bind(this);
//     }
//
//     onClickAddButton(){
//         console.log(this.inputBox.value);
//         this.props.handleAddedData(this.inputBox.value);
//         this.inputBox.value ="";
//         this.inputBox.focus();
//     }
//     render(){
//        return(
//            <div className="input-group input-group-lg">
//                <input type="text" className="form-control" placeholder="할 일을 입력해주세요" ref={input => {this.inputBox = input}}/>
//                <span className="input-group-btn">
//                    <button className="btn btn-primary" type="button" onClick={this.onClickAddButton}>등록</button>
//                </span>
//            </div>
//        )
//     }
//}
