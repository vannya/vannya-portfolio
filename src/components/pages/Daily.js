import React, { Component } from 'react';
import * as firebase from '../../firebase/firebase';
import PageHeader from "../common/PageHeader";
import DailyPost from "../common/DailyPost";
import Pagination from "../common/Pagination";

class Daily extends Component {
  state = { 
    posts: [],
    pageOfItems: []
  }

  componentDidMount(){
    this.getDailyPost();
  }

  onChangePage = (pageOfItems) => {
    this.setState({
      pageOfItems: pageOfItems
    })
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
      let posts = this.state.posts.slice().sort(function (a, b) {
        if(a.date > b.date) {
          return -1;
        } else if (a.date < b.date) {
          return 1;
        } else {
          return 0;
        }
      });
      return posts.map((post,i) => {
        let postDate = post.date.toString();
        // TODO: Add pagination.
        return <DailyPost key={i} date={postDate} events={post.events} />
      })
    }
  }

  render() {
    return (
      <div className="daily">
        <PageHeader text="Daily Achievement Log" />
        <p className="daily-subheading">Not a fan of blogging, so let's try some logging...</p>
        {this.renderPosts()}
        <Pagination items={this.state.posts} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

export default Daily;