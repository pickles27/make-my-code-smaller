import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Card({ data, className }) {
  return (
    <div className={className}>
      <Title>{data.title}</Title>
      <Author>{data.author}</Author>
      <code>{data.body}</code>
      <Link to={`/submit/:${data.id}`}>Challenge</Link>
    </div>
  );
}

const Title = styled.h3`
  margin: 0;
`;

const Author = styled.p`
  margin: 0;
`;

export default styled(Card)`
  border: double thick purple;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 10rem;
  justify-content: space-around;
`;
