/**
	Kyle Harkema
	Tutorial from facebook.
	Used for lab8 CS336 at Calvin College
 */

import React from 'react';
import ReactDOM from 'react-dom';

import CommentBox from './commentBox.js';

import '../css/base.css';

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
