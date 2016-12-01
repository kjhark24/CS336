import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';

import CommentForm from './commentForm.js';
import CommentList from './commentList.js';
import { store, ActionTools } from './flux';

module.exports = React.createClass({
	
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
	store.dispatch(ActionTools.addComment(comment));
  },
	componentWillMount() {
    	this.unsubscribe = store.subscribe(() => {
    	    this.setState({
        	    data: store.getState().data
        	});
    	});
	},
	componentWillUnmount: function() {
    	     this.unsubscribe();
	},
  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

