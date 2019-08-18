import React from "react";
import { Typography, Toolbar, AppBar } from "@material-ui/core";

function Topbar() {
    return (

        <div className="topbar">
            <AppBar position='relative' style={{backgroundColor: 'white'}}>
                <Toolbar style={{ alignItems: 'center' }}>
                    <Typography variant="h4" style={{ color: 'black', align: 'center' }}>Expense Tracker</Typography>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default Topbar;