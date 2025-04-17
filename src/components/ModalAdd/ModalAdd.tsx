import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components";
import { addTodo } from "@/services/todoServices";
import { TodoInterface } from "@/types/TodoCardInterface";

interface ModalAddProps {
  onClose: () => void;
  onAddTodo: (todo: TodoInterface) => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ onClose, onAddTodo }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoInterface>();

  const onSubmit: SubmitHandler<TodoInterface> = async (data) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const newTodo: TodoInterface = {
        title: data.title,
        id: crypto.randomUUID(),
        completed: false,
      };

      await addTodo(newTodo);
      onAddTodo(newTodo);
      onClose();
    } catch (err) {
      setError("Failed to create todo. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90%] relative">
        <button
          onClick={onClose}
          disabled={isSubmitting}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold p-2"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Creating TO DO
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("title", { required: true })}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black disabled:bg-gray-100"
            placeholder="Enter task title"
            disabled={isSubmitting}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">Title is required</p>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            onClick={() => {}}
            disabled={isSubmitting}
            buttonClass={`bg-blue-500 hover:bg-blue-600 text-white py-2.5 px-4 rounded-lg transition-colors duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            type="submit"
          >
            {isSubmitting ? "Creating..." : "Create"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
