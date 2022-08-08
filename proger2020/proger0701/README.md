> 公积金计算 demo
>
> 暂时复杂格式校验，使用 React Hooks 实现

---

[部署预览地址](http://www.proger.cn/proger2020/0701/build/)
运行方式 ，pull 代码到本地执行 `npm install` `npm start`

效果图：

![image-20200701233840220](https://www.proger.cn/proger2020/files/images/proger0701.jpg)

计算过程：每月 300 公积金为例

- 一年后，公积金账户余额为

  300 * 12 *2 = 7200 （公司和个人对半缴纳）

- 公积金月平均余额 为：

  (600 + 1200 + 1800 +...+ 7200)/12 = 46800/12 = 3900

- 公积金贷款额度为：

  3900\*15 = 58500

* 两年后，公积金账户余额为

  300 * 12 *2 \*2 = 14400 （公司和个人对半缴纳）

* 公积金月平均余额 为：

  (7800 +...+ 14400)/12 = 133200/12 = 11100

* 公积金贷款额度为：

  10800\*15 = 162000

- 三年后，公积金账户余额为

  300 * 12 *2 \*3 = 21600 （公司和个人对半缴纳）

- 公积金月平均余额 为：

  (15000 +...+ 21600)/12 = 219600/12 = 18300

- 公积金贷款额度为：

  18000\*15 = 27000