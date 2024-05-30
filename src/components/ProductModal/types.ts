import { ModalProps } from "@mui/material";
import { IProduct } from "../Main/types";

export interface IProductModalProps extends Omit<ModalProps, 'children'> {
  className?: string;
  data?: Partial<IProduct>;
}
