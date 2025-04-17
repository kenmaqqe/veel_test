"use client";

import React, { useEffect } from "react";
import { Button, TodoCard, ModalAdd } from "@/components";
import { getTodos } from "@/services/todoServices";

const page = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [list, setList] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        setList(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleAddTodo = (newTodo) => {
    setList((prevList) => [...prevList, newTodo]);
  };

  const handleDelete = (id: string | number) => {
    setList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 mb-6 sm:mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Todo List</h1>
          <Button
            onClick={() => setShowModal(true)}
            disabled={false}
            type="button"
            buttonClass="button-create w-full sm:w-auto"
          >
            Create new
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 place-items-center">
          {list?.map((item) => (
            <TodoCard key={item.id} todo={item} onDelete={handleDelete} />
          ))}
        </div>

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

export default page;
