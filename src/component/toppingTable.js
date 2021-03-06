import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "antd";
import axios from "axios";

export default class ToppingTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toppings, deleteTopping } = this.props;
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
              {toppings.map(topping => {
                const { id, name, price } = topping;
                return (
                  <TableRow key={id}>
                    <TableCell>{name}</TableCell>
                    <TableCell>{price}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => {
                          const { id } = topping;
                          axios
                            .delete(`https://pizza-order-system-backend.herokuapp.com/toppings/${id}`)
                            .then(
                                deleteTopping(topping)
                            );
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
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
