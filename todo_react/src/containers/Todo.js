import React, {Component} from 'react';
import Title from '../components/Title'
import AddLi from '../components/AddLi'
import TodoLi from '../components/TodoLi'

/* props 방법
const text = 'To do List';
const todos =[
    '이것도 해야 되고',
    '저것도 해야 되고',
    '그것도 해야 되고',
    '언제 다 하나'
];

class Todo extends Component{

    render(){
        return(
            <div className="container">
                <Title text={text}/>
                <AddLi/>
                <hr/>
                <TodoLi todos={todos}/>
            </div>
        );
    }
}
*/

/* state 방법 */
class Todo extends Component{

    constructor(){
        super();
        this.state ={
            text : '',
             todos : []
        };
        this.handleAddedData = this.handleAddedData.bind(this);
        this.handleRemovedData = this.handleRemovedData.bind(this);
    }

    componentWillMount() {
     //debugger;
     console.log('componentWillMount');
    }
    componentDidMount() {
        const text = 'To Do List';
        const todos = [
            '이것도 해야 되고',
            '저것도 해야 되고',
            '그것도 해야 되고',
            '언제 다 하나'
        ];
        this.setState(() => {
            return{
                text : text,
                todos : todos
            };
        });

     console.log('componentDidMount');
    }
    componentWillReceiveProps() {
     console.log('componentWillReceiveProps');
    }
    componentWillUpdate() {
     console.log('componentWillUpdate');
    }
    componentDidUpdate() {
     console.log('componentDidUpdate');
    }
    componentWillUnmount() {
     console.log('componentWillUnmount');
    }

    handleAddedData (text){
        this.setState(({todos}) =>{
          todos.push(text);
          return {todos};
        });
    }

    handleRemovedData(text){
        this.setState((prevState)=>{
            const todos = prevState.todos;
            const idx = todos.indexOf(text);
            todos.splice(idx, 1);
            return {todos};
        });
    }

    render(){
        const todoLi = this.state.todos.map((todo, i )=>{
            return <TodoLi todo={todo} key={'todo' + i} handleRemovedData = {this.handleRemovedData}/>;
            });

        return(
            <div className="container">
                <Title text={this.state.text}/>{/* 주석을 요렇게 하는 거임 */}
                <AddLi  handleAddedData={this.handleAddedData}/>
                <hr/>
                <ul>
                    {todoLi}
                </ul>
            </div>
        );
    }
}

export default Todo;