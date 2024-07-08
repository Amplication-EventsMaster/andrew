import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type LocationWhereInput = {
  id?: StringFilter;
  address?: StringNullableFilter;
  city?: CityWhereUniqueInput;
};
