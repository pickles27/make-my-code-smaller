import React from "react";
import styled from "styled-components";

export function Card({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export const SubmissionCard = styled(Card)`
  border: 2px solid red;
`;
