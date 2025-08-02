import { useState } from 'react'
import './App.css'

const App = () => {
  //入力フォーム
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])
  const onChangeText = ( e ) => {
    //eから入力値を取得し、状態にセット
    setTodoText(e.target.value)
  }
  const onClickAdd = () => {
    //入力が空なら何もしない,新しいTodoをincompleteTodosに追加,入力欄を空に戻す
    if(todoText === "") return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("")
  }
  const onClickComplete = (targetIndex) => {
    //関数newTodsを定義してtargetIndexを除いたTodoリストを未完了のTodoリストへセットし、完了リストにtargetIndexを追加
    const newTodos = incompleteTodos.filter((todo, index) => index !== targetIndex );
    setIncompleteTodos(newTodos);
    setCompleteTodos([...completeTodos, incompleteTodos[targetIndex]])
  }

  return (
    <>
    <div className="InputTodoArea">
      <input
        value={todoText}
        onChange={onChangeText}
        type="text"
        placeholder="Todoを入力"
      />
      <input
        onClick={onClickAdd}
        type="button"
        value="追加"
      />
    </div>
    <div className="IncompleteTodoArea">
      <p>未完了のTodo</p>
      <ul>
        {incompleteTodos.map((todo, index) => 
          <li key={index} >
            {todo}
            <input onClick={()=> onClickComplete(index)} type="button" value="完了" />
            <input type="button" value="削除" />
          </li>
        )}
      </ul>
    </div>
    <div className="CompleteTodoArea">
      <p>完了のTodo</p>
      <ul>
        <li>
          todo1
          <input type="button" value="完了" />
        </li>
      </ul>
    </div>
    </>
  )
}

export default App
