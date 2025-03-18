import styles from "./page.module.css";

import { PageHeader } from "@/app/components/page-header";
import { TasksActionBar } from "@/app/components/tasks-action-bar";
import { Table } from "@/shared/table/table";


export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader />
      <section className={styles.tasksListSection}>
        <TasksActionBar />
        <div className={styles.tasksListTableContainer}>
          <Table columns={columns} dataSource={dataSource}/>
        </div>
      </section>
    </main>
  );
}

const dataSource = [
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

const columns = [
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
  },
];
