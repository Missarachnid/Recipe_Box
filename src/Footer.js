import { FooterStyles, LinkStyles } from "./css/Styles.js";
import github from "./img/GitHub-Mark-Light-32px.png";
import website from "./img/202-sphere.svg";
const Footer = () => {
  return(
    <FooterStyles>
      <p>created by Melissa Kepler</p>
        <LinkStyles href="https://www.mmkepler.com" rel="noreferrer" target="_blank">
          <img src={website} alt="icon of a globe-like website link" width="28" height="28"/>
        </LinkStyles>
        
        
      <LinkStyles href="https://github.com/Missarachnid" rel="noreferrer" target="_blank">
        <img src={github} alt="GitHub octocat logo" width="28" height="28"/>
      </LinkStyles>
     
    </FooterStyles>
  )
}

export default Footer;