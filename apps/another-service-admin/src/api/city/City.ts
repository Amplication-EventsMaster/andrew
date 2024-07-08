import { Location } from "../location/Location";

export type City = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  state: string | null;
  name: string | null;
  country: string | null;
  locations?: Array<Location>;
};
