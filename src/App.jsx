import { useState } from 'react'
import './App.css'

const App = () => {
  return (
    <>
    <div className="InputTodoArea">
      <input type="text" placeholder="Todoを入力" />
      <input type="button" value="追加"/>
    </div>
    <div className="IncompleteTodoArea">
      <h1>未完了のTodo</h1>
      <ul>
        <li>
          Todo1
          <input type="button" value="完了" />
          <input type="button" value="削除" />
        </li>
        <li>
          Todo2
          <input type="button" value="完了" />
          <input type="button" value="削除" />
        </li>
      </ul>
    </div>
    <div className="CompleteTodoArea">
      <h1>完了のTodo</h1>
      <ul>
        <li>
          Todo1
          <input type="button" value="削除" />
        </li>
        <li>
          Todo1
          <input type="button" value="削除" />
        </li>
      </ul>
    </div>
    </>
  )
}

export default App
