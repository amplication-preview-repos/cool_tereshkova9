import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reportDate?: SortOrder;
  totalAbsent?: SortOrder;
  totalLate?: SortOrder;
  totalPresent?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
