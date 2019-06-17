import React, { Component } from 'react'

class Box extends Component {
    render() {
        return (
            <div>
                <div className="Box" 
                    style={{
                        width: `${this.props.width}em`,
                        height: `${this.props.height}em`,
                        backgroundColor: this.props.bgColor
                    }} 
                />
                <button onClick={this.props.removeBox}>Delete Box</button>
            </div>
        )
    }
}

export default Box;