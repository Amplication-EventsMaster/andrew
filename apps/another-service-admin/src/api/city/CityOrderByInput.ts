import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  state?: SortOrder;
  name?: SortOrder;
  country?: SortOrder;
};
