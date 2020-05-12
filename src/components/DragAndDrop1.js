import React, { Component } from 'react';
import './Drag.css'




class DragAndDrop1 extends Component {

    state ={
        drag: false
    }
    dropRef = React.createRef() //specify the element we want to add to listener
    
    handleDrag = (e) =>{
        e.preventDefault()
        e.stopPropagation()
    }
    handleDragIn= (e) =>{
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setState({drag: true})
        }
    }
    handleDragOut = (e) =>{
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        if (this.dragCounter === 0) {
            this.setState({drag: false})
        }
    }

    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState({drag: false})
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
          this.props.handleDrop(e.dataTransfer.files)
          e.dataTransfer.clearData()
          this.dragCounter = 0    
        }
    }



    componentDidMount (){
        this.dragCounter = 0
        let div = this.dropRef.current
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount(){
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    // render(){
    //     return(
    //         <div style={{display: 'inline-block', position: 'relative', color: 'red'}} ref={this.dropRef}>
    //             {this.state.dragging &&
    //             <div className="drop-border">
    //                 <div className="drop">
    //                     <div>drop here ;)</div>
    //                     </div>
    //             </div>}
    //             {this.props.children}
    //         </div>
    //     );
    // }

    render(){
        return(
            <div ref={this.dropRef} className="drop-box">
                {/* {this.state.drag && */}
                <div className="drop-border">
                    <div className="drop">
                        <div>drop here ;)</div>
                        </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default DragAndDrop1