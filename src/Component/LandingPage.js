import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Resizable } from "rc-easyui";
import ReactSplit, { SplitDirection } from "@devbookhq/splitter";
import Form from "./Form";
import HomePage from "./HomePage";
import {
  Flex,
  SplitContainer,
  LeftContainer,
  RightContainer,
  BottomContainer,
} from "./Style";

function LandingPage(props) {
  const {
    store: { addNewFeedRes, successfulCount, failedCount },
  } = props;
  // useEffect(() => {
  //   document.getElementById("feed-list").scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }, [addNewFeedRes]);
  const resizePropsLeftContainer = { minWidth: 300, minHeight: 400 };
  const resizePropsRightContainer = { minWidth: 100, minHeight: 100 };
  const resizePropsBottomContainer = { minWidth: 100, minHeight: 50 };
  return (
    <ReactSplit direction={SplitDirection.Vertical}>
      <ReactSplit direction={SplitDirection.Horizontal}>
        <Form />
        <HomePage />
      </ReactSplit>
      <Flex>
        <Flex direction="column">
          <p className="heading">Total Request Count : </p>
          <p className="heading">Success Request Count : </p>
          <p className="heading">Fail Request Count : </p>
        </Flex>
        <Flex direction="column">
          <p>{successfulCount + failedCount}</p>
          <p>{successfulCount}</p>
          <p>{failedCount}</p>
        </Flex>
      </Flex>
    </ReactSplit>

    // <Flex direction="column" style={{ padding: 2, height: "100%" }}>
    //   <ReactSplit direction={SplitDirection.Vertical}>
    //     <ReactSplit direction={SplitDirection.Horizontal}>
    //       <SplitContainer>
    //         <Form />
    //       </SplitContainer>
    //       <SplitContainer>
    //         <HomePage />
    //       </SplitContainer>
    //     </ReactSplit>
    //     <SplitContainer>
    // <Flex>
    //   <Flex direction="column">
    //     <p className="heading">Total Request Count : </p>
    //     <p className="heading">Success Request Count : </p>
    //     <p className="heading">Fail Request Count : </p>
    //   </Flex>
    //   <Flex direction="column">
    //     <p>{successfulCount + failedCount}</p>
    //     <p>{successfulCount}</p>
    //     <p>{failedCount}</p>
    //   </Flex>
    // </Flex>
    //     </SplitContainer>
    //   </ReactSplit>

    // </Flex>
  );
}

const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});

export default connect(mapStateToProps)(LandingPage);
/* <Flex>
        <Resizable {...resizePropsLeftContainer}>
          <LeftContainer>
            <Form />
          </LeftContainer>
        </Resizable>
        <Resizable {...resizePropsRightContainer}>
          <RightContainer id="feed-list">
            <HomePage />
          </RightContainer>
        </Resizable>
      </Flex>
      <Resizable {...resizePropsBottomContainer}>
        <BottomContainer>
          <Flex>
            <Flex direction="column">
              <p className="heading">Total Request Count : </p>
              <p className="heading">Success Request Count : </p>
              <p className="heading">Fail Request Count : </p>
            </Flex>
            <Flex direction="column">
              <p>{successfulCount + failedCount}</p>
              <p>{successfulCount}</p>
              <p>{failedCount}</p>
            </Flex>
          </Flex>
        </BottomContainer>
      </Resizable> */
