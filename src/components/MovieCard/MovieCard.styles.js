import styled from 'styled-components';

export const Card = styled.div`
  min-height: 340px;
  flex-grow: 1;
  width: 260px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin-bottom: 50px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

export const Image = styled.img`
  border-radius: 10px 10px 0px 0px;
  width: 100%;
`;

export const Text = styled.div`
  font-size: 16px;
  font-family: sans-serif;
  text-align: center;
  padding: 10px;
`;

export const Rating = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  margin: 15px;
  background: white;
  font-size: 14px;
  text-align: center;
  font-family: sans-serif;
  line-height: 30px;
  border: 1px solid black;
`;
