import React, {Component} from 'react'
import {getList} from '../../actions/GetList/GetList'
import {connect} from 'react-redux'

class List extends Component {

	componentDidMount(){
		getList()
	}

	deleteTask = (e) => {
		console.log(e.target.value)
	}


	render() {
		return(
			<ul>
				{this.props.listitems.map(item => (
					<div key={"item" + item.id}><button type="button">Complete</button> <li>{item.itemtext}</li><button type="button" value={item.id} onClick={this.deleteTask}>Delete</button></div>
					))}
			</ul>
			)
	}
}





function mapStateToProps(state) {
	return{
		listitems: state.listitems
	}
}

export default connect(mapStateToProps)(List)