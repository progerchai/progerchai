import React from "react";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        // { vendorId: 0x2341, productId: 0x8036 }, // Arduino Leonardo
        // { vendorId: 0x2341, productId: 0x8037 }, // Arduino Micro
        // { vendorId: 0x2341, productId: 0x804d }, // Arduino/Genuino Zero
        // { vendorId: 0x2341, productId: 0x804e }, // Arduino/Genuino MKR1000
        // { vendorId: 0x2341, productId: 0x804f }, // Arduino MKRZERO
        // { vendorId: 0x2341, productId: 0x8050 }, // Arduino MKR FOX 1200
        // { vendorId: 0x2341, productId: 0x8052 }, // Arduino MKR GSM 1400
        // { vendorId: 0x2341, productId: 0x8053 }, // Arduino MKR WAN 1300
        // { vendorId: 0x2341, productId: 0x8054 }, // Arduino MKR WiFi 1010
        // { vendorId: 0x2341, productId: 0x8055 }, // Arduino MKR NB 1500
        // { vendorId: 0x2341, productId: 0x8056 }, // Arduino MKR Vidor 4000
        // { vendorId: 0x2341, productId: 0x8057 }, // Arduino NANO 33 IoT
        // { vendorId: 0x239a, productId: 0x000e }, // Adafruit ItsyBitsy 32u4
        // { vendorId: 0x239a, productId: 0x800d }, // Adafruit ItsyBitsy 32u4
      ],
      device: null,
    };
  }

  testUSB() {
    console.log("test--->");
    navigator.usb
      .requestDevice({ filters: this.state.filters })
      .then((device) => {
        this.setState({ device });
        console.log(device);
        return device.open();
        // console.log(device.productName); // "Arduino Micro"
        // console.log(device.manufacturerName); // "Arduino LLC"
      })
      .then(() => {
        console.log(7777, this.state.device);
        return this.state.device.selectConfiguration(1);
      }) // Select configuration #1 for the device.
      .then(() => this.state.device.claimInterface(2)) // Request exclusive control over interface #2.
      .then(() =>
        this.state.device.controlTransferOut({
          requestType: "class",
          recipient: "interface",
          request: 0x22,
          value: 0x01,
          index: 0x02,
        })
      ) // Ready to receive data
      .then(() => this.state.device.transferIn(5, 64)) // Waiting for 64 bytes of data from endpoint #5.
      .then((result) => {
        let decoder = new TextDecoder();
        console.log("Received: " + decoder.decode(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
    navigator.usb.onconnect = () => {
      console.log("connected ");
    };
  }

  render() {
    return (
      <div className="Box">
        <button onClick={this.testUSB.bind(this)}>测试usb连接</button>
      </div>
    );
  }
}

export default Box;
