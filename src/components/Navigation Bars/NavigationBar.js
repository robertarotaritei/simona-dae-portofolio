import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

class NavigationBar extends React.Component {

    render() {
        return (
            <AppBar position="fixed" style={{ background: '#063A4C' }}>
                <Toolbar variant="dense" style={{ maxHeight: '2rem' }}>
                <Container disableGutters>
                    <p>
                        Welcome 
                    </p>
                    </Container>
                    <Container disableGutters>
                        <div style={{ float: 'right' }}>
                            <button>
                                About
                            </button>
                        </div>
                    </Container>
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavigationBar;