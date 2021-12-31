import React from "react";
import { connect } from "react-redux";

import { Resizable } from "rc-easyui";
import Form from "./Form";
import { Flex, LeftContainer, RightContainer, BottomContainer } from "./Style";

function LandingPage(props) {
  const {
    store: { successfulCount, failedCount },
  } = props;

  const resizePropsLeftContainer = { minWidth: 300, minHeight: 400 };
  const resizePropsRightContainer = { minWidth: 100, minHeight: 100 };
  const resizePropsBottomContainer = { minWidth: 100, minHeight: 50 };
  return (
    <Flex direction="column" style={{ padding: 2 }}>
      <Flex>
        <Resizable {...resizePropsLeftContainer}>
          <LeftContainer>
            <Form />
          </LeftContainer>
        </Resizable>
        <Resizable {...resizePropsRightContainer}>
          <RightContainer>
            <div className="heading">Update</div>
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
      </Resizable>
    </Flex>
  );
}

const mapStateToProps = ({ reducer }) => ({
  store: reducer,
});

export default connect(mapStateToProps)(LandingPage);
