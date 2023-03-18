export enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

interface CountIncrement {
  type: ActionType.INCREMENT;
}

interface CounterDecrement {
  type: ActionType.DECREMENT;
}

export type CounterAction = CountIncrement | CounterDecrement;
