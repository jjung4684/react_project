import React, {Component} from 'react';
import PropTypes from 'prop-types';

//함수형으로 변환
const Title = (props) =>{
    return (
     <div className="page-header">
        <h1>{props.text}</h1>
    </div>
    )
}

//class Title extends Component{
//    render(){
//        return(
//            <div className="page-header">
//                <h1>{this.props.text}</h1>
//            </div>
//        );
//    }
//}

Title.propTypes = {
    text: PropTypes.string
}
export default Title;