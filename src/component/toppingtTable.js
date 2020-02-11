import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default class ToppingTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toppings: []
    };
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

  render() {
    const { toppings } = this.state;
    return (
      <div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Topping Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {toppings.map(({ id, name, price }) => {
                return (
                  <TableRow key={id}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{price}</TableCell>
                    <TableCell><button>Delete</button></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    );
  }
}
