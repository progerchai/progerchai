class Post {
  const Post({this.title, this.author, this.imageUrl});
  final String title;
  final String author;
  final String imageUrl;
}

final List<Post> posts = [
  Post(
      title: 'title1',
      author: 'progerchai@qq.com',
      imageUrl:
          'https://pics7.baidu.com/feed/b219ebc4b74543a9cc3e3379385f0486b901142e.jpeg?token=ae3a355e908cb38d51dee1dd6365f6d9&s=B3800EEB0EB6FCDA04B5822B0300D056'),
  Post(
      title: 'title2',
      author: 'progerchai@qq.com',
      imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fhm%2F0u%2FQJ8557609321.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612620531&t=914a88ca53a3b7737cce304059f4ab06'),
  Post(
      title: 'title3',
      author: 'progerchai@qq.com',
      imageUrl:
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp49828772.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1612620531&t=f70d0c02fe8b682504d1a3711096b5bd'),
];
