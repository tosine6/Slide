import React, { Component } from 'react';
import './Drag.css'

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state={
			result:[],
		}
	}


	register = (data) => {

    this.setState({ loading: true })
    fetch('http://localhost:8081/api/clients/',
        {
            crossDomain: true,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => {


            if (response.status === 201) {
                this.setState({
                    isRegistered: true,
                })
            }

            else {
                this.setState({
                    errs: this.state.emailAddress + "\nalready exists",
                    loading: false
                })

            }
        })
        .catch((err) => {
            console.error(err);
            this.setState({ errs: err.toString() })
        });
}


    searchButton =() =>{
		fetch("https://google-search3.p.rapidapi.com/api/v1/search", 
		{
	        method: "POST",
	        headers: {
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "14c4634755msh3061ecc29a1f900p168f7ajsn91804078af32",
		"content-type": "application/json",
		"accept": "application/json"
	},
	body: {
		"country": "US",
		"get_total": false,
		"hl": "us",
		"language": "lang_en",
		"max_results": 100,
		"q": "simi ft poe",
		"uule": ""
	}
})
.then(response => {
    console.log(response);
    // this.setState({
    //     result: response
    // });
})
.catch(err => {
	console.log(err);
});
    }

    render() {
        return (
            <div className="container gcse-search1">
			<div class="gcse-search"></div>
				
	{/* <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl" style={{marginTop: "100px"}}>
 		<div>
    		<input type="text" id="q" name="q" title="Search this site" alt="Search Text" maxlength="256" placeholder="Search music"/>
    		<input type="hidden" id="cx" name="cx" value="011892817009944471391:udvdn0adpjm" />
   			<input type="image" id="searchSubmit" name="submit" src="https://www.flaticon.com/free-icon/active-search-symbol_34148" alt="Go" title="Submit"/>
			<button type="submit" id="searchSubmit" name="submit" title="submit" className="btn btn-primary">Search</button>
 		</div>
	</form> */}
			</div>
        );
    }
}
