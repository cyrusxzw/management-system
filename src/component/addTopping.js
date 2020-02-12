import React from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

class AddTopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topping: {}
    };
    this.onToppingChange = this.onToppingChange.bind(this);
  }

  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  onToppingChange(key, value) {
    const { topping } = this.state;
    this.setState({
      topping: {
        ...topping,
        [key]: value
      }
    });

    console.log(this.state);
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    const nameError = isFieldTouched("name") && getFieldError("name");
    const priceError = isFieldTouched("price") && getFieldError("price");
    const { onAddNewTopping } = this.props;
    return (
      <Form className="add_topping_form" onSubmit={(event) => {
        const { topping } = this.state;
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log("Received values of form: ", values);
          }
        });
        axios.post("http://127.0.0.1:3000/toppings", topping).then(({ data }) => {
          //console.log(data);
          onAddNewTopping(data);
        });
      }}>
        <Form.Item
          validateStatus={nameError ? "error" : ""}
          help={nameError || ""}
        >
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input name!" }]
          })(
            <Input
              placeholder="name"
              onChange={event => {
                this.onToppingChange("name", event.target.value);
              }}
            />
          )}
        </Form.Item>

        <Form.Item
          validateStatus={priceError ? "error" : ""}
          help={priceError || ""}
        >
          {getFieldDecorator("price", {
            rules: [{ required: true, message: "Please input price!" }]
          })(
            <Input
              placeholder="price"
              onChange={event => {
                this.onToppingChange("price", event.target.value);
              }}
            />
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }
}


const WrappedAddTopping = Form.create({ name: 'add_topping' })(AddTopping);

export default WrappedAddTopping;