import React, {Component} from 'react';


export default class Game extends Component{
    constructor(props){
        super(props);
        this.state={
            letter: "",
        }

    }

    handleLetterClick = () =>{
        this.setState({
            letter: "A"
        })
        console.log(this.letter)
    }

    render(){
        return(
            <div className="container">

            <div className="card">
                <h3 class="card-header text-center font-weight-bold text-uppercase py-4">SELECT LETTER</h3>
                <div className="card-body"></div>
                    <div id="table"></div>
                    <table class="table table-bordered table-responsive-md table-striped text-center">
                        <tbody>
                            <tr>
                            <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0" value="a" onClick={this.handleLetterClick}>A</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">B</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">C</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">D</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">E</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-danger btn-rounded btn-sm my-0">F</button></span>
                                </td>
                            </tr>
                            <tr>
                            <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">G</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">H</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">I</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">J</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">K</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-danger btn-rounded btn-sm my-0">L</button></span>
                                </td>
                            </tr>
                            <tr>
                            <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">M</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">N</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">O</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">P</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">Q</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-danger btn-rounded btn-sm my-0">R</button></span>
                                </td>
                            </tr>
                            <tr>
                            <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">S</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">T</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">U</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">V</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">W</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-danger btn-rounded btn-sm my-0">X</button></span>
                                </td>
                            </tr>
                            <tr>
                            <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">Y</button></span>
                                </td>
                                <td>
                                <span><button class="btn btn-success btn-rounded btn-sm my-0">Z</button></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            


            <div className="card">
                <h3 class="card-header text-center font-weight-bold text-uppercase py-4">WORD GAME</h3>
                <div className="card-body"></div>
                    <div id="table" className="table-editable"></div>
                    <table class="table table-bordered table-responsive-md table-striped text-center">
                        <thead>
                        <tr>
                            <th className="text-center">Letter</th>
                            <th className="text-center">Animal</th>
                            <th className="text-center">Person</th>
                            <th className="text-center">Place</th>
                            <th className="text-center">Things</th>
                            <th className="text-center">Country</th>
                            <th className="text-center">Start</th>
                            <th className="text-center">Stop</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">A</td>
                                <td class="pt-3-half" contenteditable="true">Antelope</td>
                                <td class="pt-3-half" contenteditable="true">Angela</td>
                                <td class="pt-3-half" contenteditable="true">Agege</td>
                                <td class="pt-3-half" contenteditable="true">Apple</td>
                                <td class="pt-3-half" contenteditable="true">Agentina</td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-success btn-rounded btn-sm my-0">Start</button></span>
                                </td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-danger btn-rounded btn-sm my-0">Stop</button></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">B</td>
                                <td class="pt-3-half" contenteditable="true">Antelope</td>
                                <td class="pt-3-half" contenteditable="true">Angela</td>
                                <td class="pt-3-half" contenteditable="true">Agege</td>
                                <td class="pt-3-half" contenteditable="true">Apple</td>
                                <td class="pt-3-half" contenteditable="true">Agentina</td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-success btn-rounded btn-sm my-0">Start</button></span>
                                </td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-danger btn-rounded btn-sm my-0">Stop</button></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">C</td>
                                <td class="pt-3-half" contenteditable="true">Antelope</td>
                                <td class="pt-3-half" contenteditable="true">Angela</td>
                                <td class="pt-3-half" contenteditable="true">Agege</td>
                                <td class="pt-3-half" contenteditable="true">Apple</td>
                                <td class="pt-3-half" contenteditable="true">Agentina</td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-success btn-rounded btn-sm my-0">Start</button></span>
                                </td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-danger btn-rounded btn-sm my-0">Stop</button></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">D</td>
                                <td class="pt-3-half" contenteditable="true">Antelope</td>
                                <td class="pt-3-half" contenteditable="true">Angela</td>
                                <td class="pt-3-half" contenteditable="true">Agege</td>
                                <td class="pt-3-half" contenteditable="true">Apple</td>
                                <td class="pt-3-half" contenteditable="true">Agentina</td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-success btn-rounded btn-sm my-0">Start</button></span>
                                </td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-danger btn-rounded btn-sm my-0">Stop</button></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">E</td>
                                <td class="pt-3-half" contenteditable="true">Antelope</td>
                                <td class="pt-3-half" contenteditable="true">Angela</td>
                                <td class="pt-3-half" contenteditable="true">Agege</td>
                                <td class="pt-3-half" contenteditable="true">Apple</td>
                                <td class="pt-3-half" contenteditable="true">Agentina</td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-success btn-rounded btn-sm my-0">Start</button></span>
                                </td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-danger btn-rounded btn-sm my-0">Stop</button></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="pt-3-half" contenteditable="true">F</td>
                                <td class="pt-3-half" contenteditable="true">Antelope</td>
                                <td class="pt-3-half" contenteditable="true">Angela</td>
                                <td class="pt-3-half" contenteditable="true">Agege</td>
                                <td class="pt-3-half" contenteditable="true">Apple</td>
                                <td class="pt-3-half" contenteditable="true">Agentina</td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-success btn-rounded btn-sm my-0">Start</button></span>
                                </td>
                                <td class="pt-3-half">
                                <span class="table-remove"><button type="button"
                                    class="btn btn-danger btn-rounded btn-sm my-0">Stop</button></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="card-footer text-center">
                        <button className="btn btn-success">Save Game</button>
                    </div>
                </div>
            </div>
        );
    }
}