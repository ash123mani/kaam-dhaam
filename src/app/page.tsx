import styles from "./page.module.css";

import { PageHeader } from "@/app/components/page-header";
import { TasksActionBar } from "@/app/components/tasks-action-bar";

export default function Home() {
  return (
    <main className={styles.main}>
      <PageHeader />
      <section className={styles.tasksListSection}>
        <TasksActionBar />
      </section>
    </main>
  );
}
