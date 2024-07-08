import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type LocationCreateInput = {
  address?: string | null;
  city?: CityWhereUniqueInput | null;
};
