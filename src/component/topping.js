import React from "react";
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
    const { name: toppingName } = topping;
    //console.log(toppingName);
    const newToppings = toppings.filter(({ name }) => name !== toppingName);

    console.log(newToppings);
    this.setState({
      toppings: [...newToppings]
    });
  }

  onAddNewTopping(topping) {
    const { toppings } = this.state;
    this.setState({
      toppings: [...toppings, topping]
    });
  }

  render() {
    return (
      <div>
        <ToppingTable
          toppings={this.state.toppings}
          deleteTopping={this.deleteTopping}
        ></ToppingTable>
        <br />
        <br />
        <WrappedAddTopping
          onAddNewTopping={this.onAddNewTopping}
        ></WrappedAddTopping>
      </div>
    );
  }
}
