"use client";

import React, { useEffect } from "react";
import { Button, TodoCard, ModalAdd } from "@/components";
import { getTodos } from "@/services/todoServices";
import { TodoInterface } from "@/types/TodoCardInterface";

const Page = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [list, setList] = React.useState<TodoInterface[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  const handleAddTodo = (newTodo: TodoInterface) => {
    setList((prevList) => [...prevList, newTodo]);
  };

  const handleDelete = (id: string) => {
    setList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getTodos();
        setList(data);
      } catch (err) {
        setError("Failed to load todos");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mb-6 sm:mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Todo List</h1>
          <Button
            onClick={() => setShowModal(true)}
            disabled={isLoading}
            type="button"
            buttonClass="button-create w-full sm:w-auto"
          >
            Create new
          </Button>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 place-items-center">
            {list.map((item) => (
              <TodoCard key={item.id} todo={item} onDelete={handleDelete} />
            ))}
            {list.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-8">
                No todos yet. Create your first todo!
              </div>
            )}
          </div>
        )}

        {showModal && (
          <ModalAdd
            onClose={() => setShowModal(false)}
            onAddTodo={handleAddTodo}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
