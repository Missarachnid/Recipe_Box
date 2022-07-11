import styled from "styled-components";

const blue = "#247BA0";
const green = "#cbd4c2";

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

let HeaderStyles = styled.header`
  background-color: ${blue};
  border-bottom: 4px ${green} solid;
  color: white;
`;

let FooterStyles = styled.footer`
  margin-top: auto;
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

export {FooterStyles, AppStyles, LinkStyles, HeaderStyles};