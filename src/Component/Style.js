import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  place-content: center;
`;
export const SplitContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-top;
  border-radius: 8px;
  background: #121114;
`;

export const LeftContainer = styled.div`
  position: relative;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  padding: 16px;
  border: 2px solid #dadada;
  .heading {
    margin: 0;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
    margin-bottom: 0.35em;
    color: #1976d2;
  }
`;

export const RightContainer = styled(LeftContainer)`
  overflow: overlay;
  height: 500px;
  .feed-container {
    padding: 35px;
  }
`;
export const BottomContainer = styled(LeftContainer)`
  background: #ffffff;
  p {
    margin: 0 0 1rem 4rem;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
`;

export const Div = styled.div`
  height: 100%;
  width: 100%;
 
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-top;

  border-radius: 8px;
  background: #d0efed47;

  overflow-y: auto;
`;

export const Container = styled.div`

`

export const ImageUploaded = styled.img`
   height: 190px;
   width: 100%;
`