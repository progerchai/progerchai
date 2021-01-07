import 'package:flutter/material.dart';
import 'demo/listview_demo.dart';
import './demo/hello.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Welcome to Flutter',
      home: new Home(),
      theme: ThemeData(primarySwatch: Colors.yellow),
    );
  }
}

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        child: new Scaffold(
          backgroundColor: Colors.grey[100],
          appBar: new AppBar(
            leading: IconButton(
              icon: Icon(Icons.menu),
              tooltip: 'Navigration',
              onPressed: () => debugPrint('menu pressed'),
            ),
            title: new Text('Progerchai'),
            actions: <Widget>[
              IconButton(
                icon: Icon(Icons.search),
                tooltip: 'Navigration',
                onPressed: () => debugPrint('search pressed'),
              ),
            ],
            bottom: TabBar(
              tabs: <Widget>[
                Tab(icon: Icon(Icons.local_florist)),
                Tab(icon: Icon(Icons.change_history)),
                Tab(icon: Icon(Icons.directions_bike))
              ],
            ),
          ),
          body: TabBarView(
            children: <Widget>[
              Icon(
                Icons.local_florist,
                size: 128.0,
                color: Colors.black12,
              ),
              Icon(
                Icons.change_history,
                size: 128.0,
                color: Colors.black12,
              ),
              Icon(
                Icons.directions_bike,
                size: 128.0,
                color: Colors.black12,
              ),
            ],
          ),
        ));
  }
}