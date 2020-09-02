import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Card({ data, className }) {
  return (
    <div className={className}>
      <div>
        <Title>{data.title}</Title>
        <Author>{data.author}</Author>
      </div>
      <CodeBody>{data.body}</CodeBody>
      <Link to={`/submit/:${data.id}`}>Challenge</Link>
    </div>
  );
}

const Title = styled.h3`
  margin: .5em;
`;

const Author = styled.p`
  margin: 0;
`;

const CodeBody = styled.code`
  padding: 0em 2em;
`;

export default styled(Card)`
  border: solid lightgray 1px;
  box-shadow: 5px 5px 15px -6px #C6C6C6;
  margin: 1.7rem 1rem;
  padding: 2rem;
  min-height: 20rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
