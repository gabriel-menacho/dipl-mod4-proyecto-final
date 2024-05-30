import { IProduct } from "../Main/types";

export interface ITableProps {
  className?: string;
  data?: IProduct[];
  editable?: boolean;
}
