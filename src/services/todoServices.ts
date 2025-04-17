import axios from "axios";
import { TodoInterface } from "@/types";

export const getTodos = async () => {
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

export const addTodo = async (data: TodoInterface) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      data,
    });
    return res.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};
