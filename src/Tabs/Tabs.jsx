import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {

  state = {
    activeTabIndex: this.props.defaultActiveTabIndex
  };


  componentDidUpdate(prevProps, prevState) {

    const {onTabChange} = this.props;
    const {activeTabIndex} = this.state;

    if (prevState.activeTabIndex !== activeTabIndex) {
      onTabChange(activeTabIndex);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.activeTabIndex !== nextState.activeTabIndex;
  }

  renderTabs = () => {

    const {children} = this.props;
    const {activeTabIndex} = this.state;

    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        clickHandler: this.handleTabClick,
        tabIndex: index,
        isActive: activeTabIndex === index
      });
    });
  };

  renderActiveTabContent = () => {

    const {children} = this.props;
    const {activeTabIndex} = this.state;


    if (children[activeTabIndex]) {
      if (typeof children[activeTabIndex].props.children === "function") {
        return children[activeTabIndex].props.children();
      }
      return children[activeTabIndex].props.children;
    }
    return null;
  };

  handleTabClick = (tabIndex) => {
    this.setState({activeTabIndex: tabIndex});
  };

  render() {
    return (
          <div className="tabs">
            <ul className="tabs-list">
              {this.renderTabs()}
            </ul>
            <div className="tabs-content">
              {this.renderActiveTabContent()}
            </div>
          </div>
    );
  }
}


Tabs.propTypes = {
  defaultActiveTabIndex: PropTypes.number,
  onTabChange: PropTypes.func
};

Tabs.defaultProps = {
  defaultActiveTabIndex: 0,
  onTabChange: tabNumber => {
  }
};

export default Tabs;