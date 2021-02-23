import React,{Component} from 'react';
import Cardlist from'./Cardlist';
import Searchbox from './searchbox.js';
import Scroll from './Scroll.js';
import { robots } from './robots.js';


	//create a class
	//总是放在 parent component 所以 parent component
	//可以将状态交给 child component
class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
		    searchfield:''
		}
		//console.log('constructor');
	}

	 componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
	 	.then(response=>{
	 		return response.json();})
	 	.then(users=>{this.setState({robots:users})})
		

	 }
	//必须写成这样的形式 =(event)=>
	//否则 this.state指的是event的state
	onSearchChange=(event)=>{
      this.setState({searchfield:event.target.value})
     
	}
	render (){
		const filterR=this.state.robots.filter(robots =>{
      	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
		//console.log('render');
	if(this.state.robots.length===0)
		{return <h1>Loading</h1>}
	else{
	return(
		<div className='tc'>
			<h1>Robotfriends</h1>

			<Searchbox searchfield={this.state.searchfield} searchchange={this.onSearchChange}/>
         <Scroll>
			<Cardlist robots={filterR}/>
		 </Scroll>
		</div>
		);}
    }
}

export default App;