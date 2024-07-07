import { Component } from "react";
import check from './check.png';


export class GroceryList extends Component {
    state = {
    userInput:'',
    GroceryList:[]
    }

    onChangeEvent(e) {
        this.setState({userInput:e});
    }

    addItem(input) {
        if(input === '') {
           alert(" Please enter an item")
        }else{
        let listArrey = this.state.GroceryList;
        listArrey.push(input)
        this.setState({GroceryList: listArrey, userInput: ''})
        }
    }

    deleteItem() {
        let listArrey = this.state.GroceryList;
        listArrey = [];
        this.setState({GroceryList: listArrey})
    }

    crossedWord(event) {
       const li = event.target;
       li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
       e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="Что планируете сделать сегодня?"
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
                </div>
                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="add">Добавить</button>
                </div>
                <ul>
                {this.state.GroceryList.map((item, index) => (
                <li onClick={this.crossedWord} key={index}>
                    <img src={check} width="30px" alt="check"/>
                    {item}
                </li>
                ))}
            </ul>
            <div className="container">
            <button onClick={() => this.deleteItem()} className="delete">Удалить</button>
            </div>
            </form>
            </div>
        )
    }
}