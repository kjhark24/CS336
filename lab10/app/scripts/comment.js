import React from 'react';
import Remarkable from 'remarkable';
import ReactDOM from 'react-dom';

module.exports = React.createClass({
  rawMarkup: function() {
    var md = new Remarkable({html: true});
    var rawMarkup = md.render(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
},

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});                                  
