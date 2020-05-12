import React, { Component } from 'react';
import './Drag.css'

export default class GoogleSearch extends Component {

    componentDidMount(){
        (function() {
            var cx = '011892817009944471391:udvdn0adpjm';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
    }

    render() {

        return (
            <div className="container gcse-search1">
			<div class="gcse-search">
                <input type="text"></input>
            </div>
			</div>
        );
    }
}