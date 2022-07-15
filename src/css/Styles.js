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
  height: 300;
  border-radius: 4px;
  box-shadow: 3px 3px 6px ${green};
  margin: 20px;
  color: white;
  background-color: white;

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
      background: ${blue};
      border-color: ${green};
      border-radius: 4px;
      margin-bottom: 20px;
      padding: 6px;
    }
`;

const FullRecipeStyles = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  span{
    float: right;
    font-size: 1.2em;
    font-weight: 700;
  }
  div{
    background: white;
    padding: 20px;
    margin: 20px;
  }
  h3{
    margin: 0 20px 0 20px;
      padding-bottom: 8px;
      color: black;
      border-bottom: 2px solid ${green};
      margin-bottom: 30px;
  }
  img {
    width: 200px;
    height: auto;
  }
  ol{
    width: 250px;
    margin: 20px auto;
    padding-bottom: 20px;
    text-align: left;
    border-bottom: 2px solid ${green};
  }
  p {
    margin: 0 auto;
    width: 300px;
  }
  button {
    margin: 20px 30px;
    color: white;
      box-shadow: 2px 2px 3px ${green};
      background: ${blue};
      border-color: ${green};
      border-radius: 4px;
      margin-bottom: 20px;
      padding: 8px;
  }
`;

export {FooterStyles, AppStyles, LinkStyles, HeaderStyles, CardStyles, FullRecipeStyles};