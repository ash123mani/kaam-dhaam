import { ReactNode } from "react";
import styles from './table.module.css';
import { AnyObject } from "@/utils/types";

export interface Column<SourceDataType> {
    key: string;
    title: string;
    render?: (rowData: SourceDataType) => ReactNode;
    dataIndex: string;
}

export interface TableProps<SourceDataType> {
    columns: Column<SourceDataType>[],
    dataSource: SourceDataType[],
}


export function Table<SourceDataType extends  AnyObject>({ columns, dataSource }: TableProps<SourceDataType>) {
  return (
    <table className={styles.table}>
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
                {column.render ? column.render(data) :  data[column.dataIndex]}
              </td>
            )}
          </tr>
        )
        )}
      </tbody>
    </table>
  )
}