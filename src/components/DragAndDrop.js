import React, { Component } from 'react';
import './Drag.css'
import SubShare from './ShareButton';
import Search from './Search';
import GoogleSearch from './GoogleSearch';

export default class AppDragDropDemo extends Component {

    state = {
        tasks: [
            {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
            {name:"React", category:"complete", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"}
          ],
          result: {}
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    shareButton = () =>{

        if(navigator.share !== undefined){
            navigator.share({
                title: "Share Link",
                url: 'https://codeburst.io/the-web-share-api-is-here-cb651d84eccd'
            })
            .then(() => console.log('Successful'))
            .catch((error) => console.log("Error sharing", error))
        }
        else{
            console.log("Web Share API not supported in your browser.")
        }
    }

    geoButton = () =>{

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getPosition);
        }
        function getPosition(position){
            console.log(position.coords.latitude, position.coords.longitude);
        }
    }

    searchButton =() =>{
        fetch("https://google-search3.p.rapidapi.com/api/v1/search", {
	        "method": "POST",
	        "headers": {
		"x-rapidapi-host": "google-search3.p.rapidapi.com",
		"x-rapidapi-key": "14c4634755msh3061ecc29a1f900p168f7ajsn91804078af32",
		"content-type": "application/json",
		"accept": "application/json"
	},
	"body": {
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
    this.setState({
        result: response
    });
})
.catch(err => {
	console.log(err);
});
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container">
                <h2 className="header">DRAG & DROP DEMO</h2>

                <div className="row">
                <div className="wip col-6"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className="droppable col-6" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </div>
                </div>
                <div className="row">
                <button className="btn btn-primary" onClick={() => this.searchButton()}>Share</button>
                <SubShare/>
                </div>
                <div>
                    <GoogleSearch/>
                </div>
            </div>
        );
    }
}