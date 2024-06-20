import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendanceRecordWhereInput = {
  checkInTime?: DateTimeNullableFilter;
  checkOutTime?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
