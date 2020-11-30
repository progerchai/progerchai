import React from "react";
import dva, { connect } from "dva";
import { createBrowserHistory } from "history";

let app = dva({
  history: createBrowserHistory(),
});

app.model({
  namespace: "counter",
  state: {
    number: 0,
  },
  reducers: {
    // 更新数据
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
    add(state) {
      return { number: state.number + 2 };
    },
  },
  subscriptions: {},
});

function Counter(props) {
  return (
    <div>
      <div> {props.number} </div>
      <button onClick={() => props.dispatch({ type: "counter/add" })}>+</button>
    </div>
  );
}

let ConnectCounter = connect((state) => state.counter)(Counter);

app.router(() => <ConnectCounter />);
app.start("#root");
