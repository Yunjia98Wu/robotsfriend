import React from 'react';

const Searchbox =({searchfield,searchchange}) =>{
	return(
		<div>
		<input className='pa2 ba b--blue bg-lightest-blue'
		type='search' placeholder='search robots'
        onChange={searchchange}
		/>
		</div>
		);
}

export default Searchbox;
// 
