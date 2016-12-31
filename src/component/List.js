import React from "react";

class List extends React.Component{
  handleChange(id){
    this.props.handleCompleted(id);
  }
  handleDel(id){
    this.props.handleDel(id);
  }
  render(){
    let list = this.props.items.map(item =>
      <div key={item.id}>
        <input type="radio" checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
        <span style={item.completed ? {textDecoration:"line-through",opacity:"0.6"}: null}>{item.title}</span>
        <button onClick={this.handleDel.bind(this,item.id)} >删除</button>
      </div>
    )
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default List;
