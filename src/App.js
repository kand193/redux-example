import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./TodoStore";

function App(props) {
  return (
    <div className="App">
      {props.todoList.map((todo, index) => (
        <div key={index}>
          <input
            value={todo}
            onChange={(e) =>
              props.updateTodo({
                index: index,
                value: e.target.value,
              })
            }
          />
          <button onClick={() => props.removeTodo(index)}>삭제</button>
          <br />
        </div>
      ))}
      <br />
      <button onClick={() => props.addTodo()}>추가</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: () => dispatch(addTodo()),
  removeTodo: (index) => dispatch(removeTodo(index)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
