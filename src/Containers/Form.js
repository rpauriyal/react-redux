import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addDetails,deleteDetails } from "../actions/action";

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
      description: "",
      disable: false,
      enable: false
    };
  }

  createData() {
    this.props.addDetails(
      this.state.post,
      this.state.heading,
      this.state.description,
      this.state.disable,
      this.state.enable,
    );
    // store.dispatch(this.state)
  }

  showDataHandler() {
    return true;
  }

  deleteDataHandler(index) {
    this.props.deleteDetails(
      index
    );
  }

  enableButtonHandler = () => {
    if (this.state.enable === false) {
      this.setState({ enable: true, disable: false });
    }
  };
  disableButtonHandler = () => {
    if (this.state.disable === false) {
      this.setState({ disable: true, enable: false });
    }
  };

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
            <Input
              type="radio"
              id="enable"
              name="radio"
              value="enable"
              onClick={() => this.enableButtonHandler()}
            />
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="enable">Enable</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Input
              type="radio"
              id="disable"
              name="radio"
              value="disable"
              onClick={() => this.disableButtonHandler()}
            />
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="disable">Disable</label>
          </span>
          <br />

          <Button onClick={() => this.createData()}>Create</Button>
          <Button onClick={() => this.showDataHandler()}>Show</Button>
        </FormWrapper>

        {res.map((value, index) => (
          <>
            <FormWrapper
              style={{
                display: "flex",
                justifyContent: "space-around",
                textAlign: "center",
                flexDirection: "row"
              }}
              key={index}
            >
              <p>Index:{index+1}</p>
              <p>POST:{value.post}</p>
              <p>HEADING: {value.heading}</p>
              <p>DESCRIPTION:{value.description}</p>
            </FormWrapper>
            <div style={{ display: "block",textAlign:'center' }}>
              <Button style={{ backgroundColor: "red", margin: '2px' }} onClick={()=>this.deleteDataHandler(index)}>Delete</Button>
              <Button style={{ backgroundColor: "lightBlue"  , margin:'2px'}}>Edit</Button>
            </div>
          </>
        ))}
      </>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addDetails ,deleteDetails}, dispatch);
}

const mapStateToProps = state => {
  return {
    details: state
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
