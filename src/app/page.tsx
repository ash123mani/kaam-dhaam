import styles from "./page.module.css";

import { PageHeader } from "@/app/components/page-header";
import { TasksActionBar } from "@/app/components/tasks-action-bar";
import { TasksListTable } from "@/app/components/tasks-list-table";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader />
      <section className={styles.tasksListSection}>
        <TasksActionBar />
        <div className={styles.tasksListTableContainer}>
          <TasksListTable />
        </div>
      </section>
    </main>
  );
}
