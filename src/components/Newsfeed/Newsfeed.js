import React from "react";
import styled from "styled-components";
import { submissionList } from "../../../mockData";
import Card from "./Card/Card";

export function Newsfeed({ className }) {
  return (
    <div className={className}>
      <ul>
        {submissionList.map(submission => {
          const { id } = submission;
          return <Card key={id} data={submission} />;
        })}
      </ul>
    </div>
  );
}

export default styled(Newsfeed)`
  ul {
    padding: 0;
  }
`;
