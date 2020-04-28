import React, {Component} from 'react';


export default class OrderForm extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return(
            <div className="container">
                <form>
                <h4>What would you like to do today</h4>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                        <input type='text'  class="form-control" name='encryption'  placeholder="Encryption" onChange={this.handleChange} required></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <select id="activation" class="form-control" form="upload-form" name="activation" onChange={this.handleChange} required>
                            <option >Choose </option>
                            <option value="ABP">ABP</option>
                            <option value="OTAA">OTAA</option>
                            </select>
                            <p class="validationError"></p>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}