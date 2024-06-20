import { AttendanceRecordUpdateManyWithoutUsersInput } from "./AttendanceRecordUpdateManyWithoutUsersInput";
import { ReportUpdateManyWithoutUsersInput } from "./ReportUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  attendanceRecords?: AttendanceRecordUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  reports?: ReportUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
