import React from "react";

import ExpenseCreator from './ExpenseCreator'
import { Table, TableHead, TableBody, TableRow, TableCell, AppBar, Toolbar, Button, Typography, Card, CardContent, Box, Grid } from "@material-ui/core";


class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            expenses: [],
            totalExpenses: 0.00,

        }

    }


    handleNewExpense = (newExpense) => {
        
        this.setState((prevState, props) => ({
            expenses: [...prevState.expenses, newExpense],
            totalExpenses: prevState.totalExpenses + parseFloat(newExpense.amount)
        }));
        
    }

    render() {

        return (

            <div className="content">
                <Grid container spacing={3}>

                <Grid item xs={4} style={{textAlign: 'center'}}>
                <Card style={{display: 'inline-block'}} >
                    <CardContent>
                        <Typography>
                            Total Monthly Expenses:
                        </Typography>
                        <Typography variant="h5">
                            {
                              "$ " + this.state.totalExpenses
                            }
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>   

                <Grid item xs={4} style={{textAlign: 'center'}}>
                <Card style={{display: 'inline-block'}} >
                    <CardContent>
                        <Typography>
                            Todays Date:
                        </Typography>
                        <Typography variant="h5">
                            {
                                new Date().toString().slice(0,15)
                            }
                        </Typography>
                    </CardContent>
                </Card>
                </Grid> 

                <Grid item xs={4} style={{textAlign: 'center'}}>
                <ExpenseCreator handleNewExpense={this.handleNewExpense}></ExpenseCreator>
                </Grid>

                <Grid item xs={12} >
                    <Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" variant="head">Desctription</TableCell>
                            <TableCell align="left" variant="head">Type</TableCell>
                            <TableCell align="left" variant="head">Spender</TableCell>
                            <TableCell align="left" variant="head">Date</TableCell>
                            <TableCell align="right" variant="head">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.expenses.map((expense, index) => {
                            return (<TableRow key={index} hover={true}>
                                <TableCell align="left" variant="body">{expense.description}</TableCell>
                                <TableCell align="left" variant="body">{expense.type}</TableCell>
                                <TableCell align="left" variant="body">{expense.spender}</TableCell>
                                <TableCell align="left" variant="body">{expense.date.toString().slice(0,15)}</TableCell>
                                <TableCell align="right" variant="body">{expense.amount}</TableCell>

                            </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
                </Card>
                </Grid>
                </Grid>
            </div>

        );
    }
}


export default Content;