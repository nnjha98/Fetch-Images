import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
import React, { PureComponent } from 'react';


import { render } from '@testing-library/react';
import { Button } from '@mui/material';
import { Parser } from 'html-to-react';
import { parse } from 'node-html-parser';

// import Layout from 'C:/Users/nnjha/Documents/seventh/src/components/layout';
class App extends React.Component {
  state = {
    EnteredName:"",
    rawHTML:"",
    imgSource:"",
    imgSource2:""
}

  fetchImg=async ()=>
  {
    console.log("trying to get the image for : ",this.state.EnteredName);
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://www.bing.com/images/search?q='+this.state.EnteredName+'&first=1',
    };

    try
    {
      console.log("url : ", 'https://www.bing.com/images/search?q='+this.state.EnteredName+'&first=1&tsc=ImageBasicHover');
      var response = await axios(config);
      var root = parse(response.data);
      var re = /<img [^>]+src2="(https:\/\/[^">]+)"/g;
      // var results = re.exec(response.data);
      var m;
      var arr = [];

      do {
          m = re.exec(response.data);
          if (m) {
              console.log(m[1], m[2]);
              arr.push(m[1]);

          }
      } while (m);
      this.setState({imgSource2:arr[Math.floor(Math.random()*arr.length)]});
      // console.log(results);
      // try{
      // var itg = Math.floor(Math.random() * (100 - 26) + 26);
      // console.log("itg : ",itg);
      // console.log(root.querySelectorAll("a")[itg].firstChild.attributes.src2.replace("&w=42&h=42", ""));
      // this.setState({imgSource:root.querySelectorAll("a")[itg].firstChild.attributes.src2.replace("&w=42&h=42", "")})
      // }
      // catch(err)
      // {
      //   console.log("point1 err : ", err);
      // }
      
    }
    catch(err)
    {
      console.log(err);
    }
  }
    

render()
{
  return (
    <div className="App">
      <h1>Enter Place Name Here</h1>
      <TextField onChange={(e)=>this.setState({EnteredName:e.target.value})} id="outlined-basic" label="Enter name Here" variant="outlined" />
      <h2>{this.state.EnteredName}</h2>
      <Button onClick={()=>this.fetchImg()}>Try to fetch an image</Button>
      <div><img src={this.state.imgSource}/></div>
      <div><img src={this.state.imgSource2}/></div>
    </div>
  );
  }
}
 
export default App;

