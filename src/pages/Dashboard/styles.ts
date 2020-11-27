import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 24px;
`;

export const NewPost = styled.div`
  color: #999591;
  margin-bottom: 34px;
  h2 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
  }
  div {
    position: relative;
    margin-top: 24px;

    textarea {
      color: #f4ede8;
      border: none;
      border-radius: 10px;
      width: 100%;
      height: 140px;
      font-style: normal;
      font-size: 16px;
      line-height: 32px;
      background: #3e3b47;
      padding: 16px 24px;
      outline: none;
    }

    span {
      position: absolute;
      width: 1px;
      height: calc(100% - 40px);
      background: #ff9000;
      left: 1px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  button {
    display: block;
    background: #ff9000;
    border-radius: 10px;
    outline: none;
    border: none;
    padding: 12px 26px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #f4ede8;
    margin-top: 8px;
    margin-left: auto;
    transition: 300ms;
    &:hover {
      background: ${shade(0.2, '#FF9000')};
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

export const Post = styled.div`
  background: #3e3b47;
  border-radius: 10px;

  display: flex;
  padding: 12px;
  position: relative;
  img {
    width: 50px;
    height: 50px;
    margin-right: 12px;
    border-radius: 50%;
  }
  div {
    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #f4ede8;
      margin-bottom: 12px;
    }
    p {
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: #999591;
    }
    span {
      position: absolute;
      top: 12px;
      right: 12px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 8px;
      }
    }
  }

  & + div {
    margin-top: 16px;
  }
`;
