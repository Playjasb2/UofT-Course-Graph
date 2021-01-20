import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { GraphData } from "./GraphTypes";

interface Props {
  data: GraphData;
  options: {
    [key: string]: string | boolean | Props["options"];
  };
}

// markup
const CourseNetwork: React.FC<Props> = (props: Props) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element && element.current) {
      new Network(element.current, props.data, props.options);
    }
  });

  let containerStyle = {
    //define container width and height.
    width: "100%",
    height: "100%",
  };

  return <div style={containerStyle} ref={element} />;
};

export default CourseNetwork;
