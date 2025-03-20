import { Modal } from "@/shared/modal";
import { Input } from "@/shared/input";
import { Button } from "@/shared/button";

import styles from './add-task-form-modal.module.css'

interface AddTaskFormModalProps {
    open: boolean;
    onClose: () => void;
    onAddTaskSubmit: () => void;
}

export function AddTaskFormModal({ open, onClose, onAddTaskSubmit }: AddTaskFormModalProps) {
  if (!open) return null;

  return (
    <Modal onClose={onClose}>
      <Modal.Header>Add Task</Modal.Header>
      <Modal.Content>
        <div className={styles.addTaskFormContent}>
          <Input label="Name" name="name" />
          <Input label="Description" name="description" cols={5}  />
          <Input type="date" label="Choose Due Date" name="dueDate" />
        </div>
      </Modal.Content>
      <Modal.Footer>
        <div className={styles.addTaskFormFooter}>
          <Button onClick={onClose} style={{ flex: 1 }} variant="outline">Cancel</Button>
          <Button onClick={onAddTaskSubmit} style={{ flex: 1 }}>Add Task</Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}