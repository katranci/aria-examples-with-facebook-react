/** @jsx React.DOM */

var CollapsibleWidgetRegion = React.createClass({
  componentDidUpdate: function() {
    if (this.props.isCollapsed == false) {
      this.getDOMNode().focus();
    }
  },
  render: function() {
    var display = this.props.isCollapsed === true ? 'none' : 'block';
    return (
        <div
          className="collapsible-widget__region"
          tabIndex="-1"
          style={{display: display}}
          ariaCollapsed={this.props.isCollapsed}>
          {this.props.children}
        </div>
    )
  }
});