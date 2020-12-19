import React from 'react';

class NavigationBar extends React.Component {

    render() {
        return (
            <div className="topnav">
                <div style={{ float: 'left', paddingLeft: '5rem' }}>
                
                    <p class="name">
                    <i class="fas fa-paint-brush"></i>
                        Simona Aroboaiei
                    </p>
                </div>
                <div style={{ float: 'right', paddingRight: '5rem' }}>
                    <button onClick={this.props.selectHome}>
                        Home
                    </button>
                    <button onClick={this.props.selectProjects}>
                        Projects
                    </button>
                    <button onClick={this.props.selectAbout}>
                        About
                    </button>
                </div>
            </div>
        );
    }
}

export default NavigationBar;