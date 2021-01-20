import { DataSet } from "vis-network/standalone";

export interface Node {
  id: number;
  label: string;
}

export interface Edge {
  id: number;
  from: number;
  to: number;
}

export interface GraphData {
  nodes: DataSet<Node>;
  edges: DataSet<Edge>;
}
