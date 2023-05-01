import React from 'react'
import styles from "./style.module.css"

export default function TodoList(props) {
  const handleDelete = () => {
    props.setTodoList((props.todoList).filter((item) => item.id !==  props.todoItem.id))
  }
  return (
    <div>
      <div className={styles.todoitem}>
        <h3 className={styles.task}>{props.todoItem.name}</h3>
        <button onClick={handleDelete} className={styles.doneBtn}>Done</button>
      </div>
        
    </div>
  )
}
