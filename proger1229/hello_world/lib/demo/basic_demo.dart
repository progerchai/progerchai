import 'package:flutter/material.dart';

class BasicDemo extends StatelessWidget {
  final TextStyle _textStyle = TextStyle(
    fontSize: 16.0,
  );
  final String _author = 'progerchai';
  final String _title = 'title';
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          Text('hello'),
          Text('world'),
          Text(
            '$_author---$_title,您将完成一个简单的移动应用程序，功能是：为一个创业公司生成建议的名称。用户可以选择和取消选择的名称、保存（收藏）喜欢的名称。该代码一次生成十个名称，当用户滚动时，会生成一新批名称。用户可以点击导航栏右边的列表图标，以打开到仅列出收藏名称的新页面。',
            style: _textStyle,
            maxLines: 4,
            overflow: TextOverflow.ellipsis,
          )
        ],
      ),
    );
  }
}
