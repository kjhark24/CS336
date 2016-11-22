/**
	Kyle Harkema
	Tutorial from facebook.
	Used for lab8 CS336 at Calvin College
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import CommentBox from './commentBox.js';
import CommentEdit from './commentEdit.js';

import '../css/base.css';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={CommentBox}/>
		<Route path="/:id" component={CommentEdit}/>
    </Router>
), document.getElementById('content')
);
