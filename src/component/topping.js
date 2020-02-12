import React from "react";
import { Layout, Menu, Icon, Typography } from "antd";
import ToppingTable from "./toppingTable";
import WrappedAddTopping from "./addTopping";


export default class Topping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       toppings: []
    };

    this.onAddNewTopping = this.onAddNewTopping.bind(this);
    this.deleteTopping = this.deleteTopping.bind(this);
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3000/toppings")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          toppings: data
        });
      });
  }

  deleteTopping(topping) {
    const { toppings } = this.state;
    const { name:toppingName } = topping;
    //console.log(toppingName);
    const newToppings = toppings.filter(({ name }) => name !== toppingName);

    console.log(newToppings);
    this.setState({
      toppings: [
        ...newToppings
      ]
    })
  }

  onAddNewTopping(topping) {
    const { toppings } = this.state;
    this.setState({
      toppings: [
        ...toppings,
        topping
      ]
    });
  }

  render() {
    const { Header, Content, Footer, Sider } = Layout;
    const { Title } = Typography;
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Topping</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Size</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff"}}><Title level={3} style={{ marginTop: "1rem"}}>Toppings</Title></Header>
            <Content style={{ margin: "0 16px" }}>
              <ToppingTable toppings={this.state.toppings} deleteTopping={this.deleteTopping}></ToppingTable>
              <br />
              <br />
              <WrappedAddTopping onAddNewTopping={this.onAddNewTopping}></WrappedAddTopping>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Pizza Management Sytstem
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
