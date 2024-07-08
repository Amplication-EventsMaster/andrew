import { InputJsonValue } from "../../types";
import { UserCreateNestedManyWithoutEventTypesInput } from "./UserCreateNestedManyWithoutEventTypesInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";
import { DestinationCalendarWhereUniqueInput } from "../destinationCalendar/DestinationCalendarWhereUniqueInput";
import { BookingCreateNestedManyWithoutEventTypesInput } from "./BookingCreateNestedManyWithoutEventTypesInput";
import { AvailabilityCreateNestedManyWithoutEventTypesInput } from "./AvailabilityCreateNestedManyWithoutEventTypesInput";
import { EventTypeCustomInputCreateNestedManyWithoutEventTypesInput } from "./EventTypeCustomInputCreateNestedManyWithoutEventTypesInput";
import { WebhookCreateNestedManyWithoutEventTypesInput } from "./WebhookCreateNestedManyWithoutEventTypesInput";
import { HashedLinkWhereUniqueInput } from "../hashedLink/HashedLinkWhereUniqueInput";
import { WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput";

export type EventTypeCreateInput = {
  title: string;
  slug: string;
  description?: string | null;
  position: number;
  locations?: InputJsonValue;
  length: number;
  hidden: boolean;
  users?: UserCreateNestedManyWithoutEventTypesInput;
  userId?: number | null;
  team?: TeamWhereUniqueInput | null;
  eventName?: string | null;
  timeZone?: string | null;
  periodType: "UNLIMITED" | "ROLLING" | "RANGE";
  periodStartDate?: Date | null;
  periodEndDate?: Date | null;
  periodDays?: number | null;
  periodCountCalendarDays?: boolean | null;
  requiresConfirmation: boolean;
  recurringEvent?: InputJsonValue;
  disableGuests: boolean;
  hideCalendarNotes: boolean;
  minimumBookingNotice: number;
  beforeEventBuffer: number;
  afterEventBuffer: number;
  seatsPerTimeSlot?: number | null;
  schedulingType?: "ROUND_ROBIN" | "COLLECTIVE" | null;
  schedule?: ScheduleWhereUniqueInput | null;
  price: number;
  currency: string;
  slotInterval?: number | null;
  metadata?: InputJsonValue;
  successRedirectUrl?: string | null;
  destinationCalendar?: DestinationCalendarWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutEventTypesInput;
  availability?: AvailabilityCreateNestedManyWithoutEventTypesInput;
  customInputs?: EventTypeCustomInputCreateNestedManyWithoutEventTypesInput;
  webhooks?: WebhookCreateNestedManyWithoutEventTypesInput;
  hashedLink?: HashedLinkWhereUniqueInput | null;
  workflows?: WorkflowsOnEventTypeCreateNestedManyWithoutEventTypesInput;
};
