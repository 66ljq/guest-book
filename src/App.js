import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentList from './components/CommentList'
import CommentBox from './components/CommentBox'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  render() {
    const { comments } = this.state
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <CommentList comments={comments}/>
        <CommentBox commentsLength={comments.length}
                    onAddComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
