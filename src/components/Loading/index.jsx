import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer className="loading-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & > div {
    box-sizing: border-box;
    display: block;
    position: fixed;
    top: 40%;
    left: 47%;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #c8e6c9;
    border-radius: 50%;
    animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #c8e6c9 transparent transparent transparent;
  }

  &:div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
