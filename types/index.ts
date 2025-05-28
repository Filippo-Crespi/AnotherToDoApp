export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  categoryId: string;
  completed: boolean;
}
