import React from "react";
import { submissionList } from "../../../mockData";
import { SubmissionCard } from "./Card/Card";

export default function Newsfeed() {
  return (
    <div>
      <ul>
        {submissionList.map(submission => {
          const { id } = submission;
          return <SubmissionCard key={id} data={submission} />;
        })}
      </ul>
    </div>
  );
}
