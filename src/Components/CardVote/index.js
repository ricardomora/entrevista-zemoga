import React from "react";
import Button from "@material-ui/core/Button";
import "./index.scss";
import Rate from "../../Components/Rate";
import ButtonVote from "../../Components/ButtonVote";

class CardVote extends React.Component {
  state = {
    selection: {},
    vote: true
  };

  setSelectionVote(selection) {
    this.setState({
      selection
    });
  }

  voteNow = () => {
    const { selection } = this.state;
    this.props.onVote(selection);
    this.setState({ selection: {}, vote: false });
  };

  render() {
    const {
      agree,
      disagree,
      image,
      topic,
      name,
      date,
      description
    } = this.props.item;
    const { index } = this.props;
    const { vote, selection } = this.state;

    const total = agree + disagree;
    const agreeLabel = Math.round((agree * 100) / total) + "%";
    const disagreeLabel = Math.round((disagree * 100) / total) + "%";

    return (
      <div className="card-vote">
        <div className="content" style={{ backgroundImage: `url(${image})` }}>
          <Rate agreeLabel={agreeLabel} disagreeLabel={disagreeLabel} />
          <div className="box-info">
            <div className="box-buttom candidate-name">
              <ButtonVote type={agree > disagree ? "agree" : "disagree"} />
              <h1>{name}</h1>
            </div>
            <h5>
              <b>{date}</b> in {topic}
            </h5>
            <h2>{description}</h2>
            {vote && (
              <div className="box-buttom">
                <ButtonVote
                  type="agree"
                  index={index}
                  active={selection.vote == 'agree'}
                  onClick={() => this.setSelectionVote({ vote: 'agree', index })}
                />
                <ButtonVote
                  type="disagree"
                  index={index}
                  active={selection.vote == 'disagree'}
                  onClick={() =>
                    this.setSelectionVote({ vote: 'disagree', index })
                  }
                />
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={this.voteNow}
                >
                  Vote now
                </Button>
              </div>
            )}
            {!vote && (
              <div className="box-buttom">
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => this.setState({ vote: true })}
                >
                  Vote again
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CardVote;
