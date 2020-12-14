import React from "react";
import dva, { connect } from "./dva";
import { createBrowserHistory } from "history";
import { Router, Route, Link } from "./dva/router";
import key from "keymaster";
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
    minus(state) {
      return { number: state.number - 1 };
    },
    // ["counter/add"](state) {
    //   // ["counter/add"] 这样写的原因是,getReducer还没有对 type 做处理
    //   return { number: state.number + 1 };
    // },
  },
  effects: {
    *asyncAdd(state, { put }) {
      yield delay(1000);
      yield put({ type: "add" });
    },
  },
  subscriptions: {
    keyEvent({ history, dispatch }) {
      window.onresize = function () {
        dispatch({ type: "add" });
      };
    },
  },
});

function Counter(props) {
  return (
    <div>
      <div> {props.number} </div>
      <button onClick={() => props.dispatch({ type: "counter/add" })}>+</button>
      <button onClick={() => props.dispatch({ type: "counter/minus" })}>
        -
      </button>
      <button onClick={() => props.dispatch({ type: "counter/asyncAdd" })}>
        asyncAdd
      </button>
    </div>
  );
}

let ConnectCounter = connect((state) => state.counter)(Counter);
function Home() {
  return <div>home</div>;
}

// app.router(() => <ConnectCounter />);
app.router(({ history }) => (
  <Router history={history}>
    <>
      <Link to="/">home</Link>
      <br />
      <Link to="/counter">counter</Link>
      <Route path="/" component={Home}></Route>
      <Route path="/counter" component={ConnectCounter}></Route>
    </>
  </Router>
));
app.start("#root");

// 自定义延迟函数
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
