import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  reportDate?: DateTimeNullableFilter;
  totalAbsent?: IntNullableFilter;
  totalLate?: IntNullableFilter;
  totalPresent?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
