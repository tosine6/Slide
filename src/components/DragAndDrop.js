import React, { Component } from 'react';
import './Drag.css'
import SubShare from './ShareButton';

export default class AppDragDropDemo extends Component {

    state = {
        tasks: [
            {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
            {name:"React", category:"complete", bgcolor:"pink"},
            {name:"Vue", category:"complete", bgcolor:"skyblue"}
          ]
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
                <button className="btn btn-primary" onClick={() => this.geoButton()}>Share</button>
                <SubShare/>
                </div>
            </div>
        );
    }
}






// import React, { Component } from 'react';
// import webshare from 'react-web-share-api';
// import {WhatsappShareButton, EmailShareButton, TwitterShareButton,TwitterIcon, WhatsappIcon} from "react-share";
// // import {Passers} from 'prop-passer';
// import './Drag.css'
// import SubShare from './ShareButton';

// export default class AppDragDropDemo extends Component {

//     state = {
//         tasks: [
//             {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
//             {name:"React", category:"complete", bgcolor:"pink"},
//             {name:"Vue", category:"complete", bgcolor:"skyblue"}
//           ]
//     }

//     onDragStart = (ev, id) => {
//         console.log('dragstart:',id);
//         ev.dataTransfer.setData("id", id);
//     }

//     onDragOver = (ev) => {
//         ev.preventDefault();
//     }

//     onDrop = (ev, cat) => {
//        let id = ev.dataTransfer.getData("id");
       
//        let tasks = this.state.tasks.filter((task) => {
//            if (task.name == id) {
//                task.category = cat;
//            }
//            return task;
//        });

//        this.setState({
//            ...this.state,
//            tasks
//        });
//     }

//     shareButton = () =>{

//         if(navigator.share !== undefined){
//             navigator.share({
//                 title: "Share Link",
//                 url: 'https://codeburst.io/the-web-share-api-is-here-cb651d84eccd'
//             })
//             .then(() => console.log('Successful'))
//             .catch((error) => console.log("Error sharing", error))
//         }
//         else{
//             console.log("Web Share API not supported in your browser.")
//         }
//     }

//     render() {
//         var tasks = {
//             wip: [],
//             complete: []
//         }

//         this.state.tasks.forEach ((t) => {
//             tasks[t.category].push(
//                 <div key={t.name} 
//                     onDragStart = {(e) => this.onDragStart(e, t.name)}
//                     draggable
//                     className="draggable"
//                     style = {{backgroundColor: t.bgcolor}}
//                 >
//                     {t.name}
//                 </div>
//             );
//         });

//         return (
//             <div className="container">
//                 <h2 className="header">DRAG & DROP DEMO</h2>

//                 <div className="row">
//                 <div className="wip col-6"
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>{this.onDrop(e, "wip")}}>
//                     <span className="task-header">WIP</span>
//                     {tasks.wip}
//                 </div>
//                 <div className="droppable col-6" 
//                     onDragOver={(e)=>this.onDragOver(e)}
//                     onDrop={(e)=>this.onDrop(e, "complete")}>
//                      <span className="task-header">COMPLETED</span>
//                      {tasks.complete}
//                 </div>
//                 </div>
//                 <div className="row">
//                 <li><a href="https://twitter.com/intent/tweet?url=${http://localhost:3000/chat}&amp;text=${Good Time}">
//                     <svg viewBox="0 0 48 39" xmlns="http://www.w3.org/2000/svg"><path d="M43 9.7A27.9 27.9 0 010 34.6c5.2.6 10.4-.8 14.6-4-4.3-.2-8-3-9.2-7 1.5.4 3 .3 4.4-.1-4.7-1-8-5.2-7.9-9.8 1.4.8 2.9 1.2 4.5 1.2a9.9 9.9 0 01-3-13.1 28 28 0 0020.2 10.3 9.9 9.9 0 0116.8-9c2.3-.4 4.4-1.3 6.3-2.4a9.9 9.9 0 01-4.4 5.5c2-.3 4-.8 5.7-1.6a20 20 0 01-5 5.1" fill="#4DC8F1"/></svg> Twitter
//                 </a></li>
//                 <button className="btn btn-primary" onClick={() => this.shareButton()}>Share</button>
//                 <WhatsappShareButton
//                 url={'http://localhost:3000/tosine6/playlists'}
//                 title={"Good Time Link"}>
//                     <WhatsappIcon
//                         size={50}
//                         round={true}
//                         />
//                 </WhatsappShareButton>
//                 <TwitterShareButton
//                     url={'http://localhost:3000/chat'}
//                     title={"Share link"}>
//                         <TwitterIcon
//                         size={50}
//                         round={true}/>
//                 </TwitterShareButton>
//                 <SubShare/>
//                 </div>
//             </div>
//         );
//     }
// }