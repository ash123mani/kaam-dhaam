import { Input } from "@/shared/input";

import styles from "./page-header.module.css";


export function PageHeader() {
  return (
    <header className={styles.header}>
      <div>Kaam Dhaam</div>
      <Input placeholder="Search" width={330} type="text" />
    </header>
  )
}