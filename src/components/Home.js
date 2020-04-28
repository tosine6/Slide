import React, {Component} from 'react';
import beer from '../lotties/beer.json';
import Lottie from 'react-lottie';
import Reward from 'react-rewards';
import home from '../lotties/stay-home';
import stay from '../lotties/stay';
import ClapButton from 'react-clap-button';
import FadeIn from 'react-fade-in';
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
                    <Lottie options={stay_home}
                    height={300}
                    width={300}
                    />
                    <Lottie options={defaultOptions}
                    height={300}
                    width={300}
                    />
                    {/* <FadeIn transitionDuration={400}>
  <div>Element 1</div>
  <div>Element 2</div>
  <div>Element 3</div>
  <div>Element 4</div>
  <div>Element 5</div>
  <div>Element 6</div>
</FadeIn> */}
                </div>
                <h5 className="text-center">Stay home and have a bottle of beer</h5>

                <div className="text-center">

                <ClapButton
                isClicked={false}
                />
                </div>
            </div>
        );
    }
}