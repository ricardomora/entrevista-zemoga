import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Message from "../../Components/Message/index";
import AddMessage from "../../Components/AddMessage/index";
import Divider from "../../Components/Divider/index";
import CardVote from "../../Components/CardVote/index";

import "./index.scss";

import { CANDIDATES } from '../../Config/Constants/Data';

class Body extends React.Component {

  state = {
    items : JSON.parse(localStorage.getItem('CANDIDATES')) || CANDIDATES,
  }

  onVote = selection => {
    console.log('selection ', selection);
    const { vote, index} = selection;
    let refreshVotes = this.state.items;

    refreshVotes.map((item, id) => {
      if (id === index){
        console.log('vote ', vote);
        if (vote == 'agree'){
          item.agree += 1;
        } else {
          item.disagree += 1;
        }
      }
      return item;
    });

    this.setState({ items: refreshVotes })
    localStorage.setItem('CANDIDATES',JSON.stringify(refreshVotes))
  }

  getItem = () => {
    return this.state.items.map((item, index) => {
      return (
        <Grid item xs={12} sm={6}>
          <CardVote
            item={item}
            index={index}
            onVote={this.onVote}
          />
        </Grid>
      );
    });
  };

  render() {
    return (
      <Container fixed className="main-view">
        <Message />
        <h1 className="title-section">Votes</h1>
        <Grid container spacing={6}>
          {this.getItem()}
        </Grid>
        <AddMessage />
        <Divider />
      </Container>
    );
  }
}

export default Body;
