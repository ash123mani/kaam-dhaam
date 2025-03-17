import styles from "./page.module.css";

import { Input } from "@/app/components/input/input";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>Kaam Dhaam</div>
        <Input placeholder="Search" />
      </header>
      <div className="font-bold">
          Tasks
      </div>
    </main>
  );
}
