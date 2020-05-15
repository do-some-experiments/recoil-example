import React from "react";

import {
  atom,
  useRecoilState,
} from "recoil";

import Preview from "./Preview";

const textState = atom({
  key: "textState",
  default: "",
});

function App() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />

      <Preview />
    </div>
  );
}

export default App;
