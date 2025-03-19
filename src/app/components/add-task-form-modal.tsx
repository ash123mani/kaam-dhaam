import { Modal } from "@/shared/modal";
import { Input } from "@/shared/input";
import { Button } from "@/shared/button";
import { useState } from "react";

import styles from './add-task-form-modal.module.css'

export function AddTaskFormModal() {
  const [showModal, setShowModal] = useState(true);

  if (!showModal) return null;

  return (
    <Modal onClose={() => setShowModal(false)}>
      <Modal.Header>Add Task</Modal.Header>
      <Modal.Content>
        <div className={styles.addTaskFormContent}>
          <Input label="Name" name="name" />
          <Input label="Description" name="description" />
          <Input label="Choose Due Date" name="dueDate" />
        </div>
      </Modal.Content>
      <Modal.Footer>
        <div className={styles.addTaskFormFooter}>
          <Button onClick={() => {setShowModal(false)}} style={{ flex: 1 }} variant="outline">Cancel</Button>
          <Button onClick={() => {setShowModal(false)}} style={{ flex: 1 }}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}