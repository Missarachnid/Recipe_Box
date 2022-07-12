import styled from "styled-components";

const blue = "#247BA0";
const green = "#cbd4c2";

const AppStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

let HeaderStyles = styled.header`
  width: 100vw;
  background-color: ${blue};
  border-bottom: 4px ${green} solid;
  color: white;
`;

let FooterStyles = styled.footer`
  margin-top: auto;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  background-color: ${blue};
  color: white;
  border-top: 4px ${green} solid;
`;

const LinkStyles = styled.a`
  padding: 4px 20px;
`;

let CardStyles = styled.div`
  max-width: 200px;
  max-height: 300;
  border-radius: 4px;
  box-shadow: 3px 3px 6px ${green};
  margin: 20px;
  color: white;
  background-color: white;
  z-index: -300;

    img {
      margin-top: 20px;
      width: 200px;
      margin-top: 0;
      border-radius: 4px 4px 0 0;
    }

    h3 {
      margin: 0 20px 0 20px;
      padding-bottom: 8px;
      color: black;
      border-bottom: 2px solid ${green};
    }

    div {
      color: black;
    }
    button {
      color: white;
      box-shadow: 2px 2px 3px ${green};
      border: none;
      background: ${blue};
      border-radius: 4px;
      margin-bottom: 20px;
      padding: 6px;
    }
`;

export {FooterStyles, AppStyles, LinkStyles, HeaderStyles, CardStyles};