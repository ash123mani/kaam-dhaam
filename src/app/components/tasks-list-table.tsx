import styles from './tasks-list-table.module.css';

export function TasksListTable() {
  return (
    <table className={styles.tasksListTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fake Task</td>
          <td>Medium</td>
        </tr>
        <tr>
          <td>Fake Task 2</td>
          <td>Medium 2</td>
        </tr>
        <tr>
          <td>Fake Task 3</td>
          <td>Medium 3</td>
        </tr>
        <tr>
          <td>Fake Task 3</td>
          <td>Medium 3</td>
        </tr>
        <tr>
          <td>Fake Task 3</td>
          <td>Medium 3</td>
        </tr>
      </tbody>
    </table>
  )
}