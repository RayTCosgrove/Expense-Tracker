import React from "react";
import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            dialogOpen: false,

            description: "",
            type: "",
            amount: 0,
            spender: ""


        }

    }

    handleOpen = () => {
        this.setState({ dialogOpen: true });
    }

    handleClose = () => {
        this.setState({ dialogOpen: false });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    };

    handleAdd = () =>{
        this.props.handleNewExpense({
            description: this.state.description,
            type: this.state.type,
            amount: this.state.amount,
            spender: this.state.spender
        })
        this.handleClose();
    }


        render() {

    return (

        <React.Fragment>

            <Button variant="outlined" onClick={this.handleOpen}>croatoa</Button>

            <Dialog open={this.state.dialogOpen} onClose={this.handleClose} >
                <DialogTitle>Add a new expense</DialogTitle>
                <DialogContent>
                    <DialogContentText>Please enter information about the expense.</DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        variant="outlined"
                        id="description"
                        label="Expense Description"
                        type="text"
                        onChange={this.handleChange("description")}
                    />
                    <br />
                    <TextField

                        margin="normal"
                        variant="outlined"
                        id="type"
                        label="Expense Type"
                        type="text"
                        onChange={this.handleChange('type')}

                    />
                    <br />
                    <TextField

                        margin="normal"
                        variant="outlined"
                        id="amount"
                        label="Expense Amount"
                        type="number"
                        onChange={this.handleChange('amount')}


                    />
                    <br />
                    <TextField

                        margin="normal"
                        variant="outlined"
                        id="spender"
                        label="Expense Spender"
                        type="text"
                        onChange={this.handleChange('spender')}

                    />
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                             </Button>
                        <Button onClick={this.handleAdd} color="primary">
                            Add
                            </Button>
                    </DialogActions>

                </DialogContent>

            </Dialog>


        </React.Fragment>


    );
}
}


export default Content;