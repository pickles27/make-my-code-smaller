import React, { useState } from "react";
import styled from "styled-components";

export function Submission({ className }) {
  const [submissionText, setSubmissionText] = useState("");
  const onChangeTextInput = event => {
    setSubmissionText(event.target.value);
  };
  const onSubmitTextInput = event => {
    event.preventDefault();
    alert(submissionText);
    setSubmissionText("");
  };
  return (
    <form onSubmit={onSubmitTextInput} className={className}>
      <label>
        Submit your code here:
        <InputField value={submissionText} onChange={onChangeTextInput} />
        <SubmitButton />
      </label>
    </form>
  );
}

const SubmitButton = styled.input.attrs({
  type: "submit",
  value: "Submit"
})`
  width: 25%;
`;

const InputField = styled.textarea`
  width: 85%;
  min-height: 7rem;
  margin: 1.5rem;
`;

export default styled(Submission)`
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
