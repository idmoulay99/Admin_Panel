import React from 'react'

function ToDoItem({ item,delteItem,index }) {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between" key={index}>
      {item.title}
      <button
        className="btn btn-danger btn-sm float-right"
        onClick={() => delteItem(index)}
      >
        Delete
      </button>
    </li>
    </>
  )
}

export default ToDoItem