import React, { PureComponent } from 'react';
import TextField from '@mui/material/TextField';
class Layout extends React.Component {
    render() { 
        state = {
            EnteredName:""
        }
        return (
        <div>
            <h1>Enter Place Name Here</h1>
            <TextField onChange={(e)=>this.setState({EnteredName: e.target.state})} id="outlined-basic" label="Outlined" variant="outlined" />
            <h2>{this.state.EnteredName}</h2>
        </div>);
    }
}
 
export default Layout;