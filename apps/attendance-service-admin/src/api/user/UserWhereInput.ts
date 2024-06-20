import { AttendanceRecordListRelationFilter } from "../attendanceRecord/AttendanceRecordListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type UserWhereInput = {
  attendanceRecords?: AttendanceRecordListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  reports?: ReportListRelationFilter;
  username?: StringFilter;
};
