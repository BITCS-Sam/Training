import React, { Component } from 'react'

export default class WindowSizeList extends Component {

    constructor(props) {
        super(props)
        this.state = { windowWidth: window.innerWidth, item: [] }
    }



    render() {
        return (
            <>
                <div>WindowSizeList</div>
                <div>{this.state.windowWidth}</div>
            </>
        )
    }
}
