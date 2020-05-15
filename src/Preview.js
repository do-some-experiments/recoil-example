import React from "react";
import { useRecoilValue } from "recoil";

import { textState } from "./textState";

function Preview() {
  const text = useRecoilValue(textState);


  return (
    <div>
      Echo: {text}
    </div>
  );
}

export default Preview;
