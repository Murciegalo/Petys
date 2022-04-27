import styled from 'styled-components';

export const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const Header = styled.h2`
  font-size: 35px;
  font-weight: 300;
  color: #fff;
  text-align: center;
`;

export const ProductList = styled.section`
  display: flex;
`;

export const Order = styled.section`
  text-align: right;
`;

export const Title = styled.h3`
  color: #ffff;
  font-size: 18px;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 10px;
  margin-top: 0;
  margin-left: 1rem;
`;

export const Info = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const InfoItems = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: #fff;
`;

export const Text = styled.span``;

export const TextBtn = styled.button`
  border: 1px solid #fff;
  background: none;
  color: #fff;
  padding: 0 1rem;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid #f5ea77 !important;
    color: #f5ea77 !important;
  }
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
