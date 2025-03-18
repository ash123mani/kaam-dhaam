import type { ReactNode } from "react";

import styles from './tasks-list-table.module.css';


interface Column<SourceDataType> {
  key: string;
  title: string;
  render?: (rowData: SourceDataType) => ReactNode;
  dataIndex: string;
}

interface TableProps<SourceDataType> {
  columns: Column<SourceDataType>[],
  dataSource: SourceDataType[],
}

export function TasksListTable<SourceDataType extends  { [key: string]: string }>({ columns, dataSource }: TableProps<SourceDataType>) {
  return (
    <table className={styles.tasksListTable}>
      <thead>
        <tr>
          {columns.map((headerItem, index) =>
            <th key={index} className="font-regular">{headerItem.title}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data, index) => (
          <tr key={index}>
            {columns.map((column, index) =>
              <td key={index} className="font-medium">
                {column.render ?column.render(data) : data?.[column.dataIndex]}
              </td>
            )}
          </tr>
        )
        )}
      </tbody>
    </table>
  )
}