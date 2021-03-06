import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import {PostsList} from './features/posts/postsList'
import { AddPostForm } from './features/posts/AddPostForm'
import {SinglePostPage} from './features/posts/SinglePostsPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path='/posts/:postId' component={SinglePostPage}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
