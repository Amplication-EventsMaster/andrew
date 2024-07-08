import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type LocationUpdateInput = {
  address?: string | null;
  city?: CityWhereUniqueInput | null;
};
