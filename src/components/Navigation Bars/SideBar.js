import React from 'react';

class SideBar extends React.Component {

    renderHomeButtons = () => {
        return <div>
            <button>
                Home
            </button>
        </div>;
    }

    renderProjectsButtons = () => {
        return <div>
            <button>
                Project1
            </button>
            <button>
                Project2
            </button>
            <button>
                Project3
            </button>
        </div>;
    }
    renderSideBar() {
        switch (this.props.content) {
            case 'home':
                return this.renderHomeButtons();
            case 'projects':
                return this.renderProjectsButtons();
            case 'about':
                return null;
            default:
                return null;
        }
    }

    render() {
        return (
            <div className="sidenav">
                {this.renderSideBar()}
            </div>
        );
    }
}

export default SideBar;