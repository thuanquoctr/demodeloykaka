import React, { useEffect } from "react";
type Props = {
  count: number;
  setCount: (count: number) => void;
};
export const Demso: React.FC<Props> = ({ count, setCount }) => {
  useEffect(() => {
    return () => {
      console.log("dong");

      setCount(0);
    };
  }, []);
  return <p>Thuan dem {count}</p>;
};
