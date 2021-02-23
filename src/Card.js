//import才能读jsx
//JSX 可以生成 React “元素”
import React from 'react';

const Card=(props)=>{
	const {name,email,id}=props;
	//return 的是整个jsx而不是html
	return(
	   //只能返回一样
       <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
  
        <img src={` https://robohash.org/${id}?200x200`}/>
       	<div>
       	<h2>{name}</h2> 
       	<p>{email}</p>>      	 
       	</div>
       </div>
		);
}

export default Card;