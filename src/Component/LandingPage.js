import React from "react";
import { connect } from "react-redux";
import ReactSplit, { SplitDirection } from "@devbookhq/splitter";
import Form from "./Form";
import HomePage from "./HomePage";
import { Flex } from "./Style";

function LandingPage(props) {
  const {
    store: { successfulCount, failedCount },
  } = props;

  return (
    <ReactSplit direction={SplitDirection.Vertical}>
      <ReactSplit direction={SplitDirection.Horizontal}>
        <Form />
        <HomePage />
      </ReactSplit>
      <Flex>
        <Flex direction='column'>
          <p className='heading'>Total Request Count : </p>
          <p className='heading'>Success Request Count : </p>
          <p className='heading'>Fail Request Count : </p>
        </Flex>
        <Flex direction='column'>
          <p>{successfulCount + failedCount}</p>
          <p>{successfulCount}</p>
          <p>{failedCount}</p>
        </Flex>
      </Flex>
    </ReactSplit>
  );
}

const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});

export default connect(mapStateToProps)(LandingPage);
