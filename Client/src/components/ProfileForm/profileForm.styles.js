import styled from 'styled-components';

export const Cont = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
`;

export const Header = styled.h2`
  color: #fff;
`;

export const Formu = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 2.5rem;
`;

export const FormLabel = styled.label`
  position: relative;
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
`;

export const FormInput = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.2rem;
  color: inherit;
  padding: 0.5rem;
  width: 100%;
  background-color: #fff;
  background-color: #f2f2f2;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FormPhotoUpload = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

export const UserPhoto = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const FormInputUpload = styled.input`
  font-size: 1rem;
  color: #fff;
`;

export const Btn = styled.button`
  min-width: 20%;
  padding: 1rem;
  border-radius: 5px;
  font-size: 20px;
  letter-spacing: 1px;
  color: #fff;
  background: none;
  border: none;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
  &:hover {
    cursor: pointer;
    color: #f5ea77;
    font-weight: bold;
    border-bottom: 0px solid #fff;
    border-right: 0px solid #fff;
    border-top: 3px solid #f5ea77;
    border-left: 3px solid #f5ea77;
  }
`;
