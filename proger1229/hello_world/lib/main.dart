import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Welcome to Flutter',
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('Welcome to Flutter'),
        ),
        body: new Center(
          child: new Text(
            'Hello WorldWorldW orldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorld',
            textAlign: TextAlign.left,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
                fontSize: 20.0, color: Color.fromRGBO(255, 0, 255, 1)),
          ),
        ),
      ),
    );
  }
}
