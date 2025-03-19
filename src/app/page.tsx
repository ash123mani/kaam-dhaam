"use client"
import styles from "./page.module.css";

import { PageHeader } from "@/app/components/page-header";
import { TasksActionBar } from "@/app/components/tasks-action-bar";
import { Table, TableProps } from "@/shared/table/table";
import { AddTaskFormModal } from "@/app/components/add-task-form-modal";


export default function Home() {

  return (
    <main className={styles.main}>
      <PageHeader />
      <section className={styles.tasksListSection}>
        <TasksActionBar />
        <div className={styles.tasksListTableContainer}>
          <Table columns={columns} dataSource={dataSource}/>
        </div>
        <AddTaskFormModal />
      </section>
    </main>
  );
}

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (rowData: DataType) => {
      return <p className="font-bold">{rowData.address}</p>
    }
  },
];
