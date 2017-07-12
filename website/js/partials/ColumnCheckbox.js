/*global module: false, require: false */

var React = require('react');
var PureRenderMixin = require('../helpers/PureRenderMixin'); // deep-equals version of PRM
var {Input} = require('react-bootstrap');

var ColumnCheckbox = React.createClass({
    mixins: [PureRenderMixin],
    onChange: function (e) {
        return this.props.onChange(e.target.value);
    },
    render: function () {
        var {label, title, initialCheck} = this.props;
        return (
            <div>
            <Input type="checkbox" label={title} checked={initialCheck[label]} onChange={this.onChange} />
            </div>
        );
    }
});

module.exports = ColumnCheckbox;