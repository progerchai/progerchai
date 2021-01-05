class Post {
  const Post({this.title, this.author, this.imageUrl});
  final String title;
  final String author;
  final String imageUrl;
}

final List<Post> posts = [
  Post(title: 'title1', author: 'progerchai@qq.com', imageUrl: 'xxxx.jpg'),
  Post(title: 'title2', author: 'progerchai@qq.com', imageUrl: 'xxxx.jpg'),
];
