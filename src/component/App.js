import React from "react";

import List from "./List";
import TodoControl from "./Control";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {title:"dddd",completed:false,id:1},
        {title:"qqqq",completed:true,id:2}
      ],
      show:0
    }
  }
  a(id){
    let index = this.state.items.findIndex(ele => id == ele.id);
    return index;
  }
  handleCompleted(id){
    let index = this.a(id);
    this.state.items[index].completed=!this.state.items[index].completed;
    this.setState({items:this.state.items});
  }
  handleDel(id){
    let index = this.a(id)
    if(this.state.items[index].completed==true){
      this.state.items.splice(index,1);
      this.setState({items:this.state.items})
    }
  }
  handleShow(i){
    this.setState({show:i})
  }
  handleClick(e){
      e.preventDefault();
      let inputValue = this.refs.input.value.trim();
      this.refs.input.value=null;
      if(inputValue==""){
        this.refs.input.focus();
        return alert("输入内容不能为空！")
      }
      let date = new Date();
      let newItem = {title:inputValue,completed:false,id:date.getTime()}
      this.state.items.push(newItem);
      this.setState({items:this.state.items})
    }
  render(){
    if(this.state.show==0){
    var showItems=this.state.items;
  }else if(this.state.show==1){
    var showItems=this.state.items.filter(function (element) {
      return element.completed==false;
    })
  }else if(this.state.show==2){
      var showItems=this.state.items.filter(function (element){
        return element.completed==true;
      })
    }
    return(
      <div>
        <h1>Todos</h1>
        <List items={showItems} handleCompleted={this.handleCompleted.bind(this)} handleDel={this.handleDel.bind(this)} />
        <input type="text" ref="input"/>
        <button onClick={this.handleClick.bind(this)}>Add # {this.state.items.length+1}</button>
        <Control handleShow={this.handleShow.bind(this)} show = {this.state.show}
      </div>
    )
  }
}

export default App;
