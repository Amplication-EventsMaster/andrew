import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CityTitle } from "../city/CityTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <ReferenceInput source="city.id" reference="City" label="city">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
