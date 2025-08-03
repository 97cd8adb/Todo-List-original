import { useState } from 'react'
import './App.css'

const App = () => {
  //入力フォーム
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  //応用でゴミ箱機能追加
  const [trashTodos, setTrashedTodos] = useState([]);
  
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
  const onClickTrash = (targetIndex) => {
    //関数newTodosを定義してfilter関数を用いてtargetIndex以外があるTodoリストを作成し引渡し、ゴミ箱へ移動
    const newTodos = incompleteTodos.filter((todo, index) => index !== targetIndex);
    setIncompleteTodos(newTodos);
    setTrashedTodos([...trashTodos, incompleteTodos[targetIndex]])
  }
  const onClickBack = (targetIndex) => {
    //新しい完了Todoリストを作成（完了が押されたTodoをtargetIndexとし、それを除いたリスト）し、それを完了Todoリストへセット、未完了リストへtargetIndexを追加
    const newCompleteTodos = completeTodos.filter((todo, index) => index !== targetIndex );
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos([...incompleteTodos, completeTodos[targetIndex]])
  }
  const onClickRecover = (targetIndex) => {
    //新しい削除リスト（戻すボタンが押されたTodoをtargetIndexとし、それを除いたリスト）を作成し、trashTodosへセット、未完了リストへTargetIndexを追加
    const newTrashedTodos = trashTodos.filter((todo, index) => index !== targetIndex )
    setTrashedTodos(newTrashedTodos);
    setIncompleteTodos([...incompleteTodos, trashTodos[targetIndex]])
  }

  const onClickDelete = (targetIndex) => {
    //ゴミ箱からいらないリストを抹消
    const newTodos = trashTodos.filter((todo, index) => index !== targetIndex);
    setTrashedTodos(newTodos);
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
          <li key={index}>
            <span>
              {todo}
            </span>
            <span>
              <input onClick={() => onClickComplete(index)} type="button" value="完了" />
              <input onClick={() => onClickTrash(index)} type="button" value="削除" />
            </span>
          </li>
        )}
      </ul>
    </div>
    <div className="CompleteTodoArea">
      <p>完了のTodo</p>
      <ul>
        {completeTodos.map((todo, index) => 
          <li key={index} >
            <span>
              {todo}
            </span>
            <span>
              <input onClick={() => onClickBack(index)} type="button" value="戻す" />
            </span>
          </li>
        )}
      </ul>
    </div>
    <div className="TrashBox">
      <p>ゴミ箱</p>
        <ul>
          {trashTodos.map((todo, index) => 
            <li key={index} >
            <span>
              {todo}
            </span>
            <span>
              <input onClick={() => onClickRecover(index)} type="button" value="戻す" />
              <input onClick={() => onClickDelete(index)} type="button" value="抹消" />
            </span>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default App
