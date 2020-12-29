import React from 'react';

class SideBar extends React.Component {

    renderHomeButtons = () => {
        return <div>
            <li className="nav-item">
                <button className="nav-link">
                    <i className="fas fa-home"></i>
                    <span className="link-text">Home</span>
                </button>
            </li>
        </div>;
    }

    renderProjectsButtons = () => {
        return <div>
            <li className="nav-item">
                <button className="nav-link">
                    <i class="fas fa-palette"></i>
                    <span className="link-text">Project 1</span>
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link">
                    <i class="fas fa-palette"></i>
                    <span className="link-text">Project 2</span>
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link">
                    <i class="fas fa-palette"></i>
                    <span className="link-text">Project 3</span>
                </button>
            </li>
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
            <nav className={this.props.getTheme('navbar', this.props.theme)}>
                <ul className="navbar-nav">
                    <li className="logo">
                        <button className="nav-link">
                            <span className="link-text logo-text">Simona</span>
                            <i class="fas fa-angle-double-right"></i>
                        </button>
                    </li>
                    {this.renderSideBar()}
                    <li className="nav-item" id="themeButton">
        <button className="nav-link" onClick={this.props.changeTheme}>
          {this.props.theme === 'light' ? (
            <i class="fas fa-sun"></i>
          ) : (
            <i class="fas fa-moon"></i>
          )}
          <span className="link-text">Themify</span>
        </button>
      </li>
                </ul>
            </nav>
        );
    }
}

export default SideBar;