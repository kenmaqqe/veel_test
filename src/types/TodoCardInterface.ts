export interface TodoInterface {
  title: string;
  completed: boolean;
  id: string;  // Changed to string since we use crypto.randomUUID()
}

export interface TodoCardProps {
  todo: TodoInterface;  // Reuse the TodoInterface instead of duplicating
  onDelete: (id: string) => void;  // Simplified to just string
}
