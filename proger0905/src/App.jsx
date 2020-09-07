import React from "react";
import styles from "./App.less";
import { AMapScene, Marker } from "@antv/l7-react";
function App() {
  return (
    <>
      <AMapScene
        map={{
          center: [120.190683, 30.260876],
          pitch: 0,
          style: "light",
          zoom: 17,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Marker
          option={{
            color: "red",
          }}
          anchor="bottom"
          lnglat={[120.190683, 30.260876]}
        >
          <div className={`test ${styles.focusPoint}`}>123</div>
        </Marker>
      </AMapScene>
    </>
  );
}

export default App;
