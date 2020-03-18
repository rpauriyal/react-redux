import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDetails } from "../actions/action";

const FormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 8px;
  margin: 12px auto;
  background-color: lightgreen;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Input = styled.input`
  margin: 12px auto;
  padding: 5px;
  outline: none;
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      heading: "",
      description: ""
    };
  }
  
  createData() {
    this.props.addDetails(
      this.state.post,
      this.state.heading,
      this.state.description
    );
    // store.dispatch(this.state)
  }

  render() {
    let res = this.props.details;
    return (
      <>
        <FormWrapper>
          <Input
            type="text"
            placeholder="post"
            name="post"
            onChange={event => this.setState({ post: event.target.value })}
          />
          <Input
            type="text"
            placeholder="heading"
            name="heading"
            onChange={event => this.setState({ heading: event.target.value })}
          />
          <Input
            type="text"
            placeholder="description"
            name="description"
            onChange={event =>
              this.setState({ description: event.target.value })
            }
          />
          <span>
            <Input type="radio" id="enable" name="radio" value="enable" />
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="enable">Enable</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input type="radio" id="disable" name="radio" value="disable" />
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="disable">Disable</label>
          </span>
          <br />
          <Button onClick={() => this.createData()}>Submit</Button>
        </FormWrapper>

        {res.map((value, index) => (
          <FormWrapper
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
              flexDirection: "row"
            }}
            key={index}
          >
            <p>Index:{index + 1}</p>
            <p>POST:{value.post}</p>
            <p>HEADING: {value.heading}</p>
            <p>DESCRIPTION:{value.description}</p>
            {alert("data is successfully added")}
          </FormWrapper>
        ))}
      </>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addDetails }, dispatch);
}

const mapStateToProps = state => {
  return {
    details: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
