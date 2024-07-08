import { LocationCreateNestedManyWithoutCitiesInput } from "./LocationCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  state?: string | null;
  name?: string | null;
  country?: string | null;
  locations?: LocationCreateNestedManyWithoutCitiesInput;
};
