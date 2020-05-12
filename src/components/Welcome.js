import React, {Component} from 'react';
import { Alert } from 'react-alert'
import Lottie from 'react-lottie';
import Reward from 'react-rewards';
import Box from '../lotties/love-box.json';
import './Slide.css'



export default class Home extends Component{
    constructor(props){
        super(props)
        this.state=({

        })

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
        this.reward.rewardMe();
        alert("Hello Mother goddess")
    }

    render(){

        const image ={
            loop:true,
            autoplay: true,
            animationData: Box,            
        }

        return (
            <div className="container box">
                <div className="text-center">
                <Lottie options={image}
                    height={300}
                    width={300}
                />
                <h4>Hello Sunshine!</h4>

                <Reward
                    ref={ref => {
                        this.reward = ref;
                    }}
                    type="confetti"
                >
                <button onClick={() => this.clickMe()} className="btn btn-success">Click Me</button>
                </Reward>
                </div>
            </div>
        );
    }
}