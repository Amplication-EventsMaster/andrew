import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderUpdateInput = {
  booking?: BookingWhereUniqueInput | null;
  method?: "EMAIL" | "SMS";
  scheduledDate?: Date;
  referenceId?: string | null;
  scheduled?: boolean;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
