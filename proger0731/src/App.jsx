import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseenterSingle: 0,
      mouseoverSingle: 0,

      mouseenter: 0,
      mouseover: 0,
    };
  }
  /**
   * 为元素绑定mouseover 与mouseenter 监听函数
   */
  componentDidMount() {
    document.getElementById("over").addEventListener("mouseover", () => {
      console.log("mouseover");
      this.setState({ mouseoverSingle: this.state.mouseoverSingle + 1 });
      document.getElementById(
        "over"
      ).innerHTML = `mouseover 事件：${this.state.mouseoverSingle}`;
    });

    document.getElementById("enter").addEventListener("mouseenter", () => {
      console.log("mouseenter");
      this.setState({ mouseenterSingle: this.state.mouseenterSingle + 1 });
      document.getElementById(
        "enter"
      ).innerHTML = `mouseenter 事件：${this.state.mouseenterSingle}`;
    });

    document.getElementById("over2").addEventListener("mouseover", () => {
      console.log("mouseover");
      this.setState({ mouseover: this.state.mouseover + 1 });
      document
        .getElementById("over2")
        .getElementsByTagName(
          "span"
        )[0].innerHTML = `mouseover 事件：${this.state.mouseover}`;
    });

    document.getElementById("enter2").addEventListener("mouseenter", () => {
      console.log("mouseenter");
      this.setState({ mouseenter: this.state.mouseenter + 1 });
      document
        .getElementById("enter2")
        .getElementsByTagName(
          "span"
        )[0].innerHTML = `mouseenter 事件：${this.state.mouseenter}`;
    });
  }
  render() {
    return (
      <div className="body">
        <div className="test">
          <span>没有子元素：</span>
          <div id="over" className="over">
            mouseover 事件：
          </div>
          <div id="enter" className="enter">
            mouseenter 事件：
          </div>
          <span>两者没有区别，效果一样</span>
        </div>

        <div className="test">
          <span>有子元素：</span>
          <div id="over2" className="over">
            <span>mouseover 事件：</span>
            <div className="child"></div>
          </div>
          <div id="enter2" className="enter">
            <span>mouseenter 事件：</span>
            <div className="child"></div>
          </div>
          <span>
            只有在鼠标指针穿过被选元素时，才会触发 mouseenter
            事件,穿过其子元素不触发mouseenter
          </span>
        </div>
      </div>
    );
  }
}

export default App;
