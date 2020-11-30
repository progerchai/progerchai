import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
export default function (opts = {}) {
  let history = opts.history || createBrowserHistory();
  let app = {
    _models: [],
    model,
    _router: null,
    router,
    start,
  };
  function model(model) {
    app._models.push(model);
  }
  function router(routerConfig) {
    app._router = routerConfig;
  }
  function start(container) {
    let reducers = getReducers(app);
    app._store = createStore(reducers);
    ReactDOM.render(
      <Provider store={app._store}>{app.router()}</Provider>,
      container
    );
  }
}

/**
 * 将所有的model 的reducer 以namespace 为key 整合成新的reducers
 * {
 * namespace1:function(state,action){},
 * namespace2:function(state,action){}
 * }
 * @param {*} app
 */
function getReducers(app) {
  let reducers = {}; //用来合并,会传递给combineReducers
  for (const model of app._models) {
    // 这里的state 是这个 model 对应的分状态
    reducers[model.namespace] = function (state, action) {
      let model_reducers = model["reducers"]; // 拿到一个model 的所有reducer
      let reducer = model_reducers[action.type]; // model_reducers['counter/add'] =>  model_reducers['add']
      if (reducer) {
        return reducer(state, action);
      }
      return state;
    };
  }
  return combineReducers(reducers);
}
