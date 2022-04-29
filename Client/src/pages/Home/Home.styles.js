import styled from 'styled-components';

export const UserView = styled.div`
  border: 1px solid aliceblue;
  max-width: 120rem;
  margin: 0 auto;
  min-height: 100vh;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.07);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
export const Nav = styled.nav`
  -webkit-box-flex: 32rem;
  -ms-flex: 32rem 0 0px;
  flex: 32rem 0 0;
  padding: 4rem 0;
`;
export const UserContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 4rem 0;
`;
