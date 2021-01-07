import 'package:flutter/material.dart';
import 'package:hello_world/model/post.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(title: 'Welcome to Flutter', home: new Home());
  }
}

class Home extends StatelessWidget {
  Widget _listItemBuilder(BuildContext context, int index) {
    return Container(
      color: Colors.white,
      margin: EdgeInsets.all(0),
      child: Column(children: <Widget>[
        new Image.network(posts[index].imageUrl),
        SizedBox(height: 20.0),
        Text(posts[index].title, style: Theme.of(context).textTheme.title),
        Text(posts[index].author, style: Theme.of(context).textTheme.subhead),
        SizedBox(height: 20)
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        backgroundColor: Colors.grey[100],
        appBar: new AppBar(
          title: new Text('Welcome to Flutter'),
        ),
        body: ListView.builder(
          itemCount: posts.length,
          itemBuilder: _listItemBuilder,
        ));
  }
}

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
