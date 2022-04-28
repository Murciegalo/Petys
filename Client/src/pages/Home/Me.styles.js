import styled from 'styled-components';

export const UserView = styled.div`
  background-color: #fff;
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
  background-image: -webkit-gradient(linear, left top, right bottom, from(#7dd56f), to(#28b487));
  background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
  padding: 4rem 0;
`;
export const UserContent = styled.div`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 4rem 0;

  .user-view__form-container {
    max-width: 68rem;
    margin: 0 auto;
    padding: 0 8rem;
  }

  .nav__search {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .nav__search-btn {
    background: none;
    border: none;
    margin-right: 0.8rem;
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }
  .nav__search-btn svg {
    height: 2rem;
    width: 2rem;
    fill: #f7f7f7;
  }
  .nav__search-input {
    font-family: inherit;
    font-weight: inherit;
    text-transform: uppercase;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #f7f7f7;
    padding-bottom: 3px;
    border-bottom: 1px solid #999;
    width: 18rem;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .nav__search-input::-webkit-input-placeholder {
    color: #999;
  }
  .nav__search-input:-ms-input-placeholder {
    color: #999;
  }
  .nav__search-input::-ms-input-placeholder {
    color: #999;
  }
  .nav__search-input::placeholder {
    color: #999;
  }
  .nav__search-input:focus {
    outline: none;
    width: 25rem;
    border-bottom: 1px solid currentColor;
  }

  .form__photo-upload {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1.6rem;
  }

  .form__user-photo {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 50%;
    margin-right: 2rem;
  }

  .form__upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .form__upload:focus + label {
    outline: 3px solid #55c57a;
    outline-offset: 3px;
  }

  .form__upload + label {
    color: #55c57a;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid #55c57a;
    padding: 3px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    cursor: pointer;
  }
  .form__upload + label:hover {
    background-color: #55c57a;
    color: #fff;
    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 37.5em) {
    .nav__search {
      -webkit-box-ordinal-group: 0;
      -ms-flex-order: -1;
      order: -1;
      margin-bottom: 1.2rem;
    }
  }
`;
