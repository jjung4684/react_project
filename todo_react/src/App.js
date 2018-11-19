import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './containers/Todo'

if(module.hot){
    module.hot.accept();
}

//비지니스 로직은 다른곳에. 이곳은 마크업 단위로 코딩
ReactDOM.render(
    <Todo/>,
    document.getElementById('app')
)