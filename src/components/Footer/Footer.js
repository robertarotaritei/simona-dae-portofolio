import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className={this.props.getTheme('footer', this.props.theme)}>
                <p>Copyright</p>
            </div>
        );
    }
}

export default Footer;