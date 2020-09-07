import React, { useEffect } from "react";
import styles from "./App.less";
import { AMapScene, Marker } from "@antv/l7-react";
// import RNLocation from "react-native-location";
function App() {
  useEffect(() => {
    // RNLocation.configure({
    //   distanceFilter: 5.0,
    // });
    // RNLocation.requestPermission({
    //   ios: "whenInUse",
    //   android: {
    //     detail: "coarse",
    //   },
    // }).then((granted) => {
    //   if (granted) {
    //     console.log(1111, granted);
    //     this.locationSubscription = RNLocation.subscribeToLocationUpdates(
    //       (locations) => {
    //         /* Example location returned
    //         {
    //           speed: -1,
    //           longitude: -0.1337,
    //           latitude: 51.50998,
    //           accuracy: 5,
    //           heading: -1,
    //           altitude: 0,
    //           altitudeAccuracy: -1
    //           floor: 0
    //           timestamp: 1446007304457.029,
    //           fromMockProvider: false
    //         }
    //         */
    //       }
    //     );
    //   }
    // });
  });
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
          <div className={styles.focusPoint}></div>
        </Marker>
      </AMapScene>
    </>
  );
}

export default App;
