import React, { useState } from "react";
// import logo from "./logo.svg";
import { Button, Form, Input } from "antd";
import "./App.css";
import "antd/dist/antd.css";

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 3 },
};

function App() {
  //初始化result为0
  const [result, setResult] = useState({
    value: 0,
    last: 0,
    perMonthValue: 0,
  });
  //注意：根据hooks的规则，需要放到最外面的这个位置
  const [form] = Form.useForm();
  //定义函数
  const newResult = (data) => {
    setResult(() => data);
  };

  //计算逻辑 - 函数
  const calculater = async () => {
    let data = await form.validateFields();
    //遍历强转为number
    Object.keys(data).forEach((key) => {
      data[key] = Number(data[key]);
    });

    //计算公积金贷款额度
    //公积金账户余额-last：
    let last = data.numberPerMonth * data.workMonth * 2;
    // 公积金余额平均余额-perMonthValue：
    let start = last - data.numberPerMonth * 11 * 2;
    if (start < 0) {
      start = 0;
    }
    let mounth = data.workMonth;
    if (data.workMonth > 12) mounth = 12;
    let perMonthValue = ((start + last) * 12) / 2 / 12;
    //公积金贷款额度-value
    let value = perMonthValue * data.multiple;
    if (value > 500000) {
      value = 500000;
    }
    newResult({ value: value, last: last, perMonthValue: perMonthValue });
  };
  return (
    <div className="App">
      <h1>公积金计算demo</h1>
      <div>
        <Form
          {...layout}
          name="calculater"
          initialValues={{ maxLoan: 500000, multiple: 15 }}
          layout="horizontal"
          form={form}
        >
          <Form.Item
            label="每月缴纳公积金金额："
            name="numberPerMonth"
            rules={[
              { required: true, message: "请输入您的每月缴纳公积金金额!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="地区公积金倍数："
            name="multiple"
            rules={[
              {
                required: true,
                message: "请输入您所在的地区公积金贷款倍数!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="工作月数："
            name="workMonth"
            rules={[{ required: true, message: "请输入您目前工作的月数!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="地区公积金贷款额度上限："
            name="maxLoan"
            rules={[
              {
                required: true,
                message: "请输入您所在地区的公积金贷款额度上限!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" onClick={calculater}>
            计算
          </Button>
        </Form>
        <spna className={"alarmDescription"}>
          注意：公积金缴费公司与个人各缴纳一半，所以个人缴纳的金额的双倍为最终公积金账户余额。
        </spna>
        <span className={"resultSpan"}>公积金账户余额：{result.last}</span>
        <span className={"resultSpan"}>
          公积金月平均余额：{result.perMonthValue}
        </span>
        <span className={"resultSpan"}>公积金贷款额度：{result.value}</span>
      </div>
    </div>
  );
}

export default App;
