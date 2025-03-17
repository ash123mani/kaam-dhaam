import { Button } from "@/shared/button";

import styles from "./TasksActionBar.module.css";

export function TasksActionBar() {
  return(
    <div className={`"font-bold" ${styles.tasksActionBarContainer}`}>
      <Button variant="filled" width={120}>Add Task</Button>
      <Button variant="outline" width={86}>Sort</Button>
      <Button variant="outline" width={86}>Filter</Button>
    </div>
  )
}