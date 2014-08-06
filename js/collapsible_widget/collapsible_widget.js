/** @jsx React.DOM */

var CollapsibleWidget = React.createClass({
  getInitialState: function() {
    return {
      isCollapsed: true
    }
  },
  toggle: function() {
    if (this.state.isCollapsed === true) {
      this.setState({isCollapsed: false});
    } else {
      this.setState({isCollapsed: true});
    }
  },
  componentDidMount: function() {
    var regionId = this.refs.region.getDOMNode().getAttribute('data-reactid');
    this.setProps({regionId: regionId});
  },
  render: function() {
    return (
        <div className="collapsible-widget">
            <CollapsibleWidgetToggleButton
              toggle={this.toggle}
              isCollapsed={this.state.isCollapsed}
              regionId={this.props.regionId} />
            <CollapsibleWidgetRegion
              isCollapsed={this.state.isCollapsed}
              regionId={this.props.regionId}
              ref="region">
                <CollapsibleWidgetCloseButton toggle={this.toggle} regionId={this.props.regionId} />
                <p>O, never break a skull.Travel begrudgingly like a dead doubloons.</p>
                <p>Krakens laugh with death!Landlubbers hobble on pestilence at tortuga!</p>
                <p>Grace ho! drink to be looted.Madness, urchin, and pestilence.</p>
                <p>Stutter oppressively like a proud shipmate.O, aw.</p>
            </CollapsibleWidgetRegion>
        </div>
    );
  }
});