"use client";

import clsx from "clsx";
import styles, { footerClasses } from "./styles";
import { IFooterProps } from "./types";
import { Box, styled } from "@mui/material";
import Copyright from "../Copyright";

const testId = "footer";

const Footer = styled(Box)(styles.footer);

export default function (props: IFooterProps) {
  const classProps = clsx(props.className, footerClasses.root);

  return (
    <Footer className={classProps} data-testid={testId}>
      <Copyright />
    </Footer>
  );
}

export type { IFooterProps };
export { footerClasses };
export { testId as FooterTestId };
