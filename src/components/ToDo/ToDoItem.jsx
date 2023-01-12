import { motion } from "framer-motion";

import React from 'react'

function ToDoItem({Task}) {
  return (
    <motion.li>
        <div>{Task.title}</div>
        <button>Edit</button>
        <button>Delete</button>
    </motion.li>
  )
}

export default ToDoItem