import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "antd";

export default class ToppingTable extends React.Component {

  render() {
    const { toppings } = this.props;
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
                    <TableCell><Button>Delete</Button></TableCell>
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
