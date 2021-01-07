import 'package:flutter/material.dart';

class Hello extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Center(
      child: new Text(
        'Hello WorldWorldW orldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorld',
        textAlign: TextAlign.left,
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(fontSize: 20.0, color: Color.fromRGBO(255, 0, 255, 1)),
      ),
    );
  }
}
