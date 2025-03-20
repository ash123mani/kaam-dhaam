import { Button } from "@/shared/button";

import { TasksBarActionType } from "@/app/page";
import styles from "./tasks-action-bar.module.css";

interface TasksActionBarProps {
    onTaskBarActionClick: (action: TasksBarActionType) => void;
}

export function TasksActionBar({ onTaskBarActionClick }: TasksActionBarProps) {
  return(
    <div className={`"font-bold" ${styles.tasksActionBarContainer}`}>
      <Button onClick={() => onTaskBarActionClick('add')} variant="filled" width={120}>Add Task</Button>
      <Button onClick={() => onTaskBarActionClick('sort')} variant="outline" width={86}>Sort</Button>
      <Button onClick={() => onTaskBarActionClick('filter')} variant="outline" width={86}>Filter</Button>
    </div>
  )
}