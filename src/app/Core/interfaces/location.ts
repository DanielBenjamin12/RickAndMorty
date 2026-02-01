import { Info } from "./info";

export interface Location {
  id : number;
  name : string;
  type : string;
  dimension : string;
  residents : string[];
  url : string;
  created : string;
}

export interface AllLocations {
  info : Info;
  results: Location[];
}
