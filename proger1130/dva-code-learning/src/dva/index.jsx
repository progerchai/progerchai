import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { combineReducers, createStore } from "redux";
import { Provider, connect } from "react-redux";
export { connect };
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
    let prefixModel = prefixNamespace(model);
    app._models.push(prefixModel);
  }
  function router(routerConfig) {
    app._router = routerConfig;
  }
  function start(container) {
    let reducers = getReducers(app);
    app._store = createStore(reducers);
    ReactDOM.render(
      <Provider store={app._store}>{app._router()}</Provider>,
      document.querySelector(container)
    );
  }

  return app;
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
    reducers[model.namespace] = function (state = model.state || {}, action) {
      let model_reducers = model["reducers"] || {}; // 拿到一个model 的所有reducer
      let reducer = model_reducers[action.type]; // model_reducers['counter/add'] =>  model_reducers['add']
      if (reducer) {
        return reducer(state, action);
      }
      return state;
    };
  }
  return combineReducers(reducers);
}

/**
 * 把reducer 对象的属性名 加上 `namespace`
 * @param {*} m
 */
function prefixNamespace(m) {
  let reducers = m.reducers;
  m.reducer = Object.keys(reducers).reduce((memo, key) => {
    let newKey = `${m.namespace}/${key}`;
    memo[newKey] = reducers[key];
    return memo;
  }, {});
  return m;
}
