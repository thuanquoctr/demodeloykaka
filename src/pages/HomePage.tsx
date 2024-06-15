import React, { useEffect, useMemo, useState } from "react";
import { BookItem } from "../layouts/BookItem";
import { book } from "../models/book.model";
import { Demso } from "../layouts/Demso";

export const HomePage: React.FC = () => {
  const [listbook, setbook] = useState<book[]>([
    { id: 1, name: "thuan1", description: "mot" },
    { id: 2, name: "thuan2", description: "hai" },
    { id: 5, name: "thuan5", description: "nam" },
  ]);

  const removebook = (id: number) => {
    setbook(listbook.filter((b) => b.id !== id));
  };
  const [count, setCount] = useState(0);
  const [disible, setdisible] = useState(false);
  useEffect(() => {
    console.log("useEffect");
  }, []);

  useMemo(() => {
    return console.log("memo");
  }, [count]);

  return (
    <>
      {console.log("ok")}
      <div className="row">
        {listbook.map((item) => (
          <BookItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            rm={removebook}
          />
        ))}
        {disible && <Demso count={count} setCount={() => setCount(count)} />}
        <button
          onClick={() => {
            setdisible(true);
          }}
        >
          Open
        </button>
        <button
          onClick={() => {
            setdisible(false);
          }}
        >
          Close
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ++
        </button>
      </div>
    </>
  );
};
