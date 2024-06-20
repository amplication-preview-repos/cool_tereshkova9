import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceRecordCreateInput = {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
