import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let d=new Date();
let r=d.getHours();
let greeting='';
const cssstyle={
};
if(r>=1 && r<12)
{
   greeting='Good Morning!';
   cssstyle.color="green";
}
else if(r>12 && r<19)
{
  greeting='Good Afternoon!';
  cssstyle.color="orange";
}
else
{
  greeting='Good Night!';
  cssstyle.color="black";
}




ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir,<span style={cssstyle}>{greeting}</span></h1>
  </div>

  </>,document.getElementById('root')

);
