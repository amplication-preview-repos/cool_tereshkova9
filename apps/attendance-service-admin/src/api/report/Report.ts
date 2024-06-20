import { User } from "../user/User";

export type Report = {
  createdAt: Date;
  id: string;
  reportDate: Date | null;
  totalAbsent: number | null;
  totalLate: number | null;
  totalPresent: number | null;
  updatedAt: Date;
  user?: User | null;
};
