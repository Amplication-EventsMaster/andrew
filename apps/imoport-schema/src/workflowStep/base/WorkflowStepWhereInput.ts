/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IntFilter } from "../../util/IntFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { EnumWorkflowStepAction } from "./EnumWorkflowStepAction";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumWorkflowStepTemplate } from "./EnumWorkflowStepTemplate";
import { WorkflowReminderListRelationFilter } from "../../workflowReminder/base/WorkflowReminderListRelationFilter";

@InputType()
class WorkflowStepWhereInput {
  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  stepNumber?: IntFilter;

  @ApiProperty({
    required: false,
    enum: EnumWorkflowStepAction,
  })
  @IsEnum(EnumWorkflowStepAction)
  @IsOptional()
  @Field(() => EnumWorkflowStepAction, {
    nullable: true,
  })
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";

  @ApiProperty({
    required: false,
    type: () => WorkflowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkflowWhereUniqueInput, {
    nullable: true,
  })
  workflow?: WorkflowWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sendTo?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  reminderBody?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  emailSubject?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumWorkflowStepTemplate,
  })
  @IsEnum(EnumWorkflowStepTemplate)
  @IsOptional()
  @Field(() => EnumWorkflowStepTemplate, {
    nullable: true,
  })
  template?: "REMINDER" | "CUSTOM";

  @ApiProperty({
    required: false,
    type: () => WorkflowReminderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WorkflowReminderListRelationFilter)
  @IsOptional()
  @Field(() => WorkflowReminderListRelationFilter, {
    nullable: true,
  })
  workflowReminders?: WorkflowReminderListRelationFilter;
}

export { WorkflowStepWhereInput as WorkflowStepWhereInput };
