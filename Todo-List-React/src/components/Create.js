import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList'
import styles from "./style.module.css"

export default function Create() {
    const [i, setI] = useState(1)
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [done, setDone] = useState(0)


    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleButton = (event) => {
        setI(i+1)
        event.preventDefault()
        setTodo("")
       setTodoList([{name: todo, id: i}, ...todoList])
       console.log(todoList)
       console.log(i)
    }
  return (
    <div className={styles.todoform}>
        <div className={styles.createBox}>
              <input className={styles.inp} type="text" onChange={handleChange} value={todo} placeholder='add Todo List'/>
              <button className={styles.btn} type="submit" onClick={handleButton}>Add</button>
          </div>
          <p style={{fontSize: '1rem', fontWeight: 'bold',alignSelf: 'flex-start',paddingInline: '16%'}}>{todoList.length === 0 ? '': `You have ${todoList.length} tasks left`}</p>
        {todoList.map((item)=>(
        <TodoList done={done} setDone={setDone} todoList={todoList} todoItem={item} setTodoList={setTodoList}/>
        ))}
          <p style={{fontSize: '1rem', fontWeight: 'bold',alignSelf: 'flex-start',paddingInline: '16%', margin: '20px 0'}}>{done === 0 ? '': `You have completed ${done} tasks`}</p>
    </div>
  )
}
