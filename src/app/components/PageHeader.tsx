import { Input } from "@/shared/input";

import styles from "./PageHeader.module.css";


export function PageHeader() {
  return (
    <header className={styles.header}>
      <div>Kaam Dhaam</div>
      <Input placeholder="Search" />
    </header>
  )
}