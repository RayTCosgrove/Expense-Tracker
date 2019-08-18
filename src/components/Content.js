import React from "react";

import ExpenseCreator from './ExpenseCreator'
import { Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";


class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            expenses: [],

        }

    }


    handleNewExpense = (newExpense) => {
        console.log(newExpense);
        this.setState((prevState, props) => ({
            expenses: [...prevState.expenses, newExpense]
        }));
    }

    render() {

        return (

            <div className="content">


                <ExpenseCreator handleNewExpense={this.handleNewExpense}></ExpenseCreator>



                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" variant="head">Desctription</TableCell>
                            <TableCell align="left" variant="head">Type</TableCell>
                            <TableCell align="left" variant="head">Spender</TableCell>
                            <TableCell align="right" variant="head">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.expenses.map((expense, index) => {
                            return (<TableRow key={index} hover={true}>
                                <TableCell align="left" variant="body">{expense.description}</TableCell>
                                <TableCell align="left" variant="body">{expense.type}</TableCell>
                                <TableCell align="left" variant="body">{expense.spender}</TableCell>
                                <TableCell align="right" variant="body">{expense.amount}</TableCell>

                            </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>

            </div>

        );
    }
}


export default Content;