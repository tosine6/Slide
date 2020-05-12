import React, {Component} from 'react';
import beer from '../lotties/beer.json';
import Lottie from 'react-lottie';
import stay from '../lotties/stay';
import ClapButton from 'react-clap-button';
import './Slide.css'
import GoogleSearch from './GoogleSearch';
import SubShare from './ShareButton';



export default class Home extends Component{
    constructor(props){
        super(props)
        this.state=({

        })

        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
        this.reward.rewardMe();
    }

    render(){

        const defaultOptions ={
            loop:true,
            autoplay: true,
            animationData: beer,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            
        }

        const stay_home ={
            loop:true,
            autoplay: true,
            animationData: stay,            
        }
        return (
            <div className="container">
                <div className="row">
                <div className="col-6">
                    </div>
                    <div className="col-6">
                        <GoogleSearch/>
                    </div>
                </div>
                <div className="row">
                    <Lottie options={stay_home}
                    height={300}
                    width={300}
                    />
                    <Lottie options={defaultOptions}
                    height={300}
                    width={300}
                    />
                </div>
                <h5 className="text-center">Stay home and have a bottle of beer</h5>

                <div className="text-center">
                <ClapButton
                isClicked={false}
                />
                </div>
                <div className="row">
                    <SubShare/>
                </div>
            </div>
        );
    }
}