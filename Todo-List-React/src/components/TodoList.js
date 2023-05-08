import React from 'react'
import styles from "./style.module.css"


export default function TodoList(props) {
  
  const handleDelete = () => {
    props.setDone(prev => prev + 1)
    props.setTodoList((props.todoList).filter((item) => item.id !== props.todoItem.id))

  }

  return (
    <div className={styles.todoitem}>
    
        <h3 className={styles.task}>{props.todoItem.name}</h3>
        <button onClick={handleDelete} className={styles.doneBtn}>Done</button>
    
    </div>
  )
}
