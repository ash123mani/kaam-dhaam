"use client"

import { PageHeader } from "@/app/components/page-header";
import { TasksActionBar } from "@/app/components/tasks-action-bar";
import { Table, TableProps } from "@/shared/table/table";
import { AddTaskFormModal } from "@/app/components/add-task-form-modal";
import { useState } from "react";

import styles from "./page.module.css";

export type TasksBarActionType = 'add' | 'sort' | 'filter'

export default function Home() {
  const [currentAction, setCurrentAction] = useState<TasksBarActionType | null>(null);

  function handleTaskBarActionClick(actionType: TasksBarActionType) {
    setCurrentAction(actionType)
  }

  return (
    <main className={styles.main}>
      <PageHeader />
      <section className={styles.tasksListSection}>
        <TasksActionBar onTaskBarActionClick={handleTaskBarActionClick}/>
        <div className={styles.tasksListTableContainer}>
          <Table columns={columns} dataSource={dataSource}/>
        </div>
        {currentAction === 'add' &&
            <AddTaskFormModal
              open={currentAction == 'add'}
              onAddTaskSubmit={() => {}}
              onClose={() => setCurrentAction(null)}
            />}
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
      return <p>{rowData.address}</p>
    }
  },
];
