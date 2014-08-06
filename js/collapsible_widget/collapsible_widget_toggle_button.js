/** @jsx React.DOM */

var CollapsibleWidgetToggleButton = React.createClass({
  handleClick: function() {
    this.props.toggle();
  },
  componentDidUpdate: function() {
    if (this.props.isCollapsed === true) {
      this.getDOMNode().focus();
    }
  },
  render: function() {
    return (
        <button
          className="collapsible-widget__toggle-button"
          onClick={this.handleClick}
          aria-controls={this.props.regionId}>Show / Hide</button>
    );
  }
});