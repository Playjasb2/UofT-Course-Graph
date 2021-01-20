import React from "react";
import { DataSet } from "vis-network/standalone";
import CourseNetwork from "../components/CourseNetwork";

import nodes from "../data/nodes.json";
import edges from "../data/edges.json";

const Home: React.FC = () => {
  const options = {
    autoResize: true,
    height: "100%",
    width: "100%",
  };

  const graphData = {
    nodes: new DataSet(nodes),
    edges: new DataSet(edges),
  };

  const network = <CourseNetwork data={graphData} options={options} />;

  return network;
};

export default Home;
