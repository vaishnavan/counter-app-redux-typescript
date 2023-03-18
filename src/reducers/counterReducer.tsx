import { ActionType, CounterAction } from "../actions/actionTypes";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        count: state.count + 1
      };
    case ActionType.DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

export default counterReducer;
