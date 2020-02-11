import React from "react";
import { Layout, Menu, Icon } from "antd";
import ToppingTable from "./toppingtTable";
import WrappedAddTopping from "./addTopping";


export default class Topping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  render() {
    const { Header, Content, Footer, Sider } = Layout;
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
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content style={{ margin: "0 16px" }}>
              <ToppingTable></ToppingTable>
              <br />
              <br />
              <WrappedAddTopping></WrappedAddTopping>
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
