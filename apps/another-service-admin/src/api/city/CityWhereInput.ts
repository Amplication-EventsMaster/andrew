import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationListRelationFilter } from "../location/LocationListRelationFilter";

export type CityWhereInput = {
  id?: StringFilter;
  state?: StringNullableFilter;
  name?: StringNullableFilter;
  country?: StringNullableFilter;
  locations?: LocationListRelationFilter;
};
