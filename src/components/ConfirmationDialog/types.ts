import { DialogProps } from "@mui/material";

export interface IConfirmationDialogProps extends DialogProps {
  className?: string;
  onConfirm: () => void;
  onClose: () => void;
}
