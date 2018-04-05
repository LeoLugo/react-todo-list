import axios from 'axios'
import store from '../../services/store'


export function getList() {
	axios.get('http://localhost:3001/listitems').then(resp =>{
		store.dispatch({
			type: 'GET_LIST',	
			 payload: resp.data
		})
	})
}