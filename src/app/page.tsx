import styles from "./page.module.css";

import { PageHeader } from "@/app/components/PageHeader";
import { TasksActionBar } from "@/app/components/TasksActionBar";

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
