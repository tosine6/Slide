import React, {Component} from 'react';



export default class ChatFooter extends Component{
    constructor(props){
        super(props)
        this.state={
            message: []
        }
    }

    render(){
        return(
            <div className="chat-footer">
                <form>
                    <input type="text" className="form-control" placeholder="Type here ..."></input>
                    <div className="form-buttons">
                        <button className="btn btn-light btn-floating" type="button">
                            <i className="fa fa-paperclip"></i>
                        </button>
                        <button className="btn btn-light btn-floating" type="button">
                            <i className="fa fa-microphone"></i>
                        </button>
                        <button className="btn btn-primary btn-floating" type="submit">
                            <i className="fa fa-send"></i>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}