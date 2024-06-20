import { User } from "../user/User";

export type AttendanceRecord = {
  checkInTime: Date | null;
  checkOutTime: Date | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
