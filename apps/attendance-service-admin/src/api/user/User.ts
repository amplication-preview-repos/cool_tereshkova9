import { AttendanceRecord } from "../attendanceRecord/AttendanceRecord";
import { Report } from "../report/Report";
import { JsonValue } from "type-fest";

export type User = {
  attendanceRecords?: Array<AttendanceRecord>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reports?: Array<Report>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
