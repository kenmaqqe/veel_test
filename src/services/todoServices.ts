import axios from "axios";
import { TodoInterface } from "@/types/TodoCardInterface";

export const getTodos = async (): Promise<TodoInterface[]> => {
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching todo:", error);
    throw error;
  }
};

export const addTodo = async (todo: TodoInterface): Promise<TodoInterface> => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      todo,
    });
    return res.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
