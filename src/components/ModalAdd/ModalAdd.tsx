import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components";
import { addTodo } from "@/services/todoServices";

type Inputs = {
  title: string;
  id: string;
  completed: boolean;
};

interface ModalAddProps {
  onClose: () => void;
  onAddTodo: (todo: { title: string; id: string; completed: boolean }) => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ onClose, onAddTodo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newTodo = {
      title: data.title,
      id: crypto.randomUUID(),
      completed: false
    };
    
    await addTodo(newTodo);
    onAddTodo(newTodo);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90%] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Creating TO DO
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register("title", { required: true })}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="Enter task title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">Title is required</p>
          )}
          <Button
            onClick={() => {}}
            disabled={false}
            buttonClass="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
            type="submit"
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ModalAdd;
