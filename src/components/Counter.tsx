import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionType } from "../actions/actionTypes";
import { RootState } from "../combineReducer/rootReducer";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: ActionType.INCREMENT });
  };

  const handleSub = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: ActionType.DECREMENT });
  };

  return (
    <>
      <h1>Count Value is {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSub}>Sub</button>
    </>
  );
};

export default Counter;
