import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
  
  .header-left{
    display: flex;
    align-items: center;
  }

  .logo-icon--small {
    display: inline;
    vertical-align: middle;
  }

  .nav-header-left {
    margin-left: 40px;
    display: inline;
    vertical-align: middle;
  }

  .nav-header-right {
    display: inline-block;
    float: right;
    vertical-align: middle;
  }

`;

export default StyledHeader;