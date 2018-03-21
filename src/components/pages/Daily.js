import React, { Component } from 'react';
import * as firebase from '../../firebase/firebase';
import PageHeader from "../common/PageHeader";
import DailyPost from "../common/DailyPost";

class Daily extends Component {
  state = { 
    posts: []
  }

  componentDidMount(){
    this.getDailyPost();
  }

  async getDailyPost() {
    var posts = [];
    await firebase.db.collection("posts").get().then((snapshot) => {
      snapshot.forEach((doc) => {
          posts.push(doc.data());
      });
    });
    await this.setState({
      posts: posts
    });
  }

  renderPosts = () => {
    if(!!this.state.posts) {
      return this.state.posts.reverse().map((post,i) => {
        let postDate = post.date.toString();
        return <DailyPost key={i} date={postDate} events={post.events} />
      })
    }
  }

  render() {
    return (
      <div className="daily">
        <PageHeader text="Daily Log" />
        <p className="daily-subheading">Not a fan of blogging, so let's try some logging...</p>
        {this.renderPosts()}
      </div>
    );
  }
}

export default Daily;