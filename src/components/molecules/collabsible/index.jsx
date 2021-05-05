import React from 'react'

export class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = { open: false }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <>
                <div onClick={(e)=>this.togglePanel(e)} className="collapse-header container p-3">
                    <span className="text-uppercase fw-bold">{this.props.title} ▼</span>
                </div>
                {this.state.open ? (
                <div className="collapse-content p-3 pb-0">
                    {this.props.children}
                </div>
                ) : null}
            </>
        );
    }
}