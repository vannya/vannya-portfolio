import React, { Component } from 'react';
import PageHeader from '../common/PageHeader';
import Button from "../common/Button";
import * as auth from "../../firebase/auth";
import {db} from "../../firebase/firebase";
import firebase from "firebase";

class Admin extends Component {
  state = { 
    date: "",
    events: "",
    email: "",
    password: "",
    isLoggedIn: false
  }

  componentDidMount(){
    this.isLoggedIn();
  }
  

  addPost(newPost){
    db.collection("posts").add({
      date: newPost.date,
      events: newPost.events
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  loginForm = () => {
    return (
      <form action="">
        <input type="email"/>
        <input type="password"/>
      </form>
    );
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    if(!!this.state.date && !!this.state.events) {
      let eventArr = this.state.events.slice().split("\n");
      let postDate = this.state.date.slice();
      if(this.validateDate(postDate)) {
        let newPost = {
          date: this.state.date,
          events: eventArr
        };
        this.addPost(newPost);
      }
    }
  }

  handleOnLoginSubmit = (e) => {
    e.preventDefault();
    if(!!this.state.email && !!this.state.password) {
      auth.doSignInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({
        email: "",
        password: ""
      })
    }
  }

  validateDate(date) {
    if(date.length === 8) {
      let dateToTest = date.split("/").map(item => {return Number(item)});
      if(typeof dateToTest[0] === "number" && !isNaN(dateToTest[0]) && (dateToTest[0] > 0 && dateToTest[0] < 13 )) {
        if(typeof dateToTest[1] === "number" && !isNaN(dateToTest[1]) && (dateToTest[0] > 0 && dateToTest[0] < 32 )) {
          if(typeof dateToTest[2] === "number" && !isNaN(dateToTest[2])) {
            return true;
          };
        };
      };
    } else {
      return false;
    }
  }

  //User Logged in?
  isLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({
          isLoggedIn: true
        })
      } else {
        // User is signed out.
        this.setState({
          isLoggedIn: false
        })
      }
    }).bind(this);
  }

  render() {
    if(this.state.isLoggedIn) {
      return (
        <div className="admin">
          <PageHeader text="Admin Dashboard" />
          <div className="admin-subheader">Daily Log</div>
          <form className="daily-form" onSubmit={(e) => this.handleOnSubmit(e)}>
            <p>Date:</p>
            <input name="date" placeholder="MM/DD/YY" onChange={(e) => this.handleOnChange(e)} />
            <p>Events:</p>
            <textarea name="events" placeholder="One event per line" onChange={(e) => this.handleOnChange(e)}/>  
            <Button type="submit" text="Add Daily Log" coloration="submit-btn" />
          </form>
          <Button onClick={() => auth.doSignOut()} type="button" text="Sign Out" coloration="btn" />
        </div>
      );
    } else {
      return (
        <div className="admin">
          <form onSubmit={(e) => this.handleOnLoginSubmit(e)}>
            <PageHeader text="Sign In" />
            <p>Email: </p>
            <input type="email" placeholder="Email" name="email" onChange={(e) => this.handleOnChange(e)} />
            <p>Password: </p>
            <input type="password" placeholder="Password" name="password" onChange={(e) => this.handleOnChange(e)} />
            <Button type="submit" text="Sign In" coloration="submit-btn" />
            </form>
        </div>
      );
    }
  }
}

export default Admin;