import React from 'react';

const Scroll=(props)=>{
	return (
       //双括号里面加css属性
      <div style={{overflowY:'scroll',border:'5px solid black',height:'500px'}}>
      	{props.children}
      </div>
		)
};

export default Scroll;