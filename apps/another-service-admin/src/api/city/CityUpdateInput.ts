import { LocationUpdateManyWithoutCitiesInput } from "./LocationUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  state?: string | null;
  name?: string | null;
  country?: string | null;
  locations?: LocationUpdateManyWithoutCitiesInput;
};
