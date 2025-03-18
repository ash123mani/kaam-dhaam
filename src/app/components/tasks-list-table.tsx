import styles from './tasks-list-table.module.css';

export function TasksListTable() {
  return (
    <table className={styles.tasksListTable}>
      <thead>
        <tr>
          <th className="font-regular">Name</th>
          <th className="font-regular">Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-medium">Fake Task</td>
          <td className="font-medium">Medium</td>
        </tr>
        <tr>
          <td className="font-medium">Fake Task 2</td>
          <td className="font-medium">Medium 2</td>
        </tr>
        <tr>
          <td className="font-medium">Fake Task 3</td>
          <td className="font-medium">Medium 3</td>
        </tr>
        <tr>
          <td className="font-medium">Fake Task 3</td>
          <td className="font-medium">Medium 3</td>
        </tr>
        <tr>
          <td className="font-medium">Fake Task 3</td>
          <td className="font-medium">Medium 3</td>
        </tr>
      </tbody>
    </table>
  )
}