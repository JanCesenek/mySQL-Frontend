import React, { useState } from "react";
import { useTodos } from "../hooks/todos";
import Page from "../components/Page";
import { api } from "../core/api";
import Todo from "../components/Todo";

export default function Home() {
  const [title, setTitle] = useState("");
  const { data, refetch } = useTodos();

  const handleSubmit = async (e) => {
    if (title?.length > 0) {
      await api.post("/todos", { title }).then(() => {
        setTitle("");
        refetch();
      });
    }
  };

  return (
    <Page>
      <div className="flex justify-center">
        <div className="flex gap-4 w-[500px] mb-4">
          <input
            type="text"
            placeholder="Add a todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
          />
          <button
            onClick={handleSubmit}
            disabled={title?.length === 0}
            className="disabled:opacity-50 rounded-md bg-indigo-300 text-white py-2 px-8 font-medium"
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        {data?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </Page>
  );
}
