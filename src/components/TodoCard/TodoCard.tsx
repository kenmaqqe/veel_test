import React from "react";
import { TodoInterface } from "@/types";
import { Button, StatusIndicator } from "@/components";
import { deleteTodo } from "@/services/todoServices";

interface TodoCardProps extends TodoInterface {
  onDelete: (id: string | number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onDelete }) => {
  const [completed, setCompleted] = React.useState(todo.completed);

  const handleDelete = async (id: number | string) => {
    try {
      await deleteTodo(Number(id));
      onDelete(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div
      key={todo.id}
      className="w-full sm:w-[280px] p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col gap-3 border border-gray-100"
    >
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
        {todo.title}
      </h3>
      <StatusIndicator
        completed={completed}
        onToggle={() => setCompleted((prev) => !prev)}
      />
      <Button
        onClick={() => handleDelete(todo.id)}
        type="button"
        buttonClass="button-delete mt-auto w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium"
        disabled={false}
      >
        Delete
      </Button>
    </div>
  );
};

export default TodoCard;
