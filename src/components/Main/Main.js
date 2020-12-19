import React from 'react';
import Home from '../Home/Home';
import Project1 from '../Projects/Project1';

class Main extends React.Component {
    
    renderHomeContent = () => {
        return <div>
            <Home />
        </div>;
    }

    renderProjectsContent = () => {
        return <div>
            <Project1 />
        </div>;
    }

    renderContent() {
        switch (this.props.content) {
            case 'home':
                return this.renderHomeContent();
            case 'projects':
                return this.renderProjectsContent();
            case 'about':
                return null;
            default:
                return null;
        }
    }
    render() {
        return (
            <div style={{ paddingTop: '1rem' }}>
                {this.renderContent()}
            </div>
        );
    }
}

export default Main;