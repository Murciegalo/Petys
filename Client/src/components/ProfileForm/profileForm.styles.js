import styled from 'styled-components';

export const Cont = styled.div`
  max-width: 68rem;
  margin: 0 auto;
  padding: 0 8rem;
`;

export const Formu = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 2.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const FormInput = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1.6rem;
  color: inherit;
  padding: 1.25rem 1.75rem;
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
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;

export const UserPhoto = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const FormInputUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Btn = styled.button`
  padding: 1.25rem 3rem !important;
  font-size: 1.4rem !important;
  background-color: #55c57a;
  color: #fff;
`;
