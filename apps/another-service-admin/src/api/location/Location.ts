import { City } from "../city/City";

export type Location = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  city?: City | null;
};
