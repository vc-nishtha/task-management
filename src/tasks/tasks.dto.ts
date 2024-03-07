export class Task {
  id?: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export const TASK_STATUS = {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
} as const;

export type TaskStatus = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];
