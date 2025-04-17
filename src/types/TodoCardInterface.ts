export interface TodoInterface {
  title: string;
  completed: boolean;
  id: string;
}

export interface TodoCardProps {
  todo: TodoInterface;
  onDelete: (id: string) => void;
}
