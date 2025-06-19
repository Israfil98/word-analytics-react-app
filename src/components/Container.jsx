import { useState } from "react";
import { FACEBOOK_NUMBER, INST_NUMBER } from "../lib/constants";
import Stats from "./Stats";
import TextArea from "./TextArea";

function Container() {
  const [text, setText] = useState("");
  const numberOfChars = text.length;
  const instNumberOfChars = INST_NUMBER - text.length;
  const facebookNumberOfChars = FACEBOOK_NUMBER - text.length;
  const numberOfWords = text.split(" ").filter((num) => num !== "").length;

  const props = {
    numberOfChars,
    instNumberOfChars,
    facebookNumberOfChars,
    numberOfWords,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats {...props} />
    </main>
  );
}

export default Container;
