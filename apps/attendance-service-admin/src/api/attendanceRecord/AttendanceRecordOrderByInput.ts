import { SortOrder } from "../../util/SortOrder";

export type AttendanceRecordOrderByInput = {
  checkInTime?: SortOrder;
  checkOutTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
