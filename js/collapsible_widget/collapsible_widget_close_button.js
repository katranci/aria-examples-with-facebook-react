/** @jsx React.DOM */

var CollapsibleWidgetCloseButton = React.createClass({
  close: function() {
    this.props.toggle();
  },
  render: function() {
    return (
        <button
            className="collapsible-widget__close-button"
            onClick={this.close}>close</button>
    );
  }
});