import React, { Component } from 'react';
import webshare from 'react-web-share-api';
import {WhatsappShareButton, EmailShareButton, EmailIcon, FacebookMessengerIcon, FacebookMessengerShareButton, TwitterShareButton,TwitterIcon, WhatsappIcon} from "react-share";
import {Passers} from 'prop-passer';
import './Drag.css';
import FadeIn from 'react-fade-in';



function SubShare({
    url = String(window.location),
    title = "Good Time App",
    shareImage="https://www.steadylearner.com/static/images/brand/prop-passer.png",
    size ="2.5rem",
}){

const ListPropPassers = Passers({
    url,
    className:"",
})({
    className:"",
})("li")


return(
    <ListPropPassers>
        <FadeIn transitionDuration={400}>
        <WhatsappShareButton
            title={title}
            text={shareImage}>
                <WhatsappIcon
                    size={size}
                    round={true}
                    />
        </WhatsappShareButton>
        <TwitterShareButton
            title={title}>
                <TwitterIcon
                    size={size}
                    round={true}/>
        </TwitterShareButton>
        <FacebookMessengerShareButton
        quote={title}>
            <FacebookMessengerIcon
            size={size}
            round={true}
            />
        </FacebookMessengerShareButton>
        <EmailShareButton
        title={title}>
            <EmailIcon
            size={size}
            round={true}
            />
        </EmailShareButton>
        </FadeIn>
    </ListPropPassers>
)

}

export default SubShare