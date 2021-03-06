let React = require('react');
let SvgIcon = require('../../svg-icon');

let EditorFormatAlignJustify = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>
      </SvgIcon>
    );
  }

});

module.exports = EditorFormatAlignJustify;