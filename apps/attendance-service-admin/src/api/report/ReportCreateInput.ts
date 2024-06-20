import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportCreateInput = {
  reportDate?: Date | null;
  totalAbsent?: number | null;
  totalLate?: number | null;
  totalPresent?: number | null;
  user?: UserWhereUniqueInput | null;
};
