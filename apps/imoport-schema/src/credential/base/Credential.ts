/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsInt,
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { User } from "../../user/base/User";
import { Type } from "class-transformer";
import { AppModel } from "../../appModel/base/AppModel";
import { DestinationCalendar } from "../../destinationCalendar/base/DestinationCalendar";

@ObjectType()
class Credential {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  typeField!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  key!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;

  @ApiProperty({
    required: false,
    type: () => AppModel,
  })
  @ValidateNested()
  @Type(() => AppModel)
  @IsOptional()
  appField?: AppModel | null;

  @ApiProperty({
    required: false,
    type: () => [DestinationCalendar],
  })
  @ValidateNested()
  @Type(() => DestinationCalendar)
  @IsOptional()
  destinationCalendars?: Array<DestinationCalendar>;
}

export { Credential as Credential };
