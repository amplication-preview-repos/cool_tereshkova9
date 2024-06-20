import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReportUpdateInput = {
  reportDate?: Date | null;
  totalAbsent?: number | null;
  totalLate?: number | null;
  totalPresent?: number | null;
  user?: UserWhereUniqueInput | null;
};
