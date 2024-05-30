"use client";

import clsx from "clsx";
import styles, { headerClasses } from "./styles";
import { IHeaderProps } from "./types";
import { styled, Box } from "@mui/material";
import HeaderButtons from "../HeaderButtons";

const testId = "header";

const Header = styled(Box)(styles.header);

export default function (props: IHeaderProps) {
  const classProps = clsx(props.className, headerClasses.root);

  return (
    <Header className={classProps} data-testid={testId}>
      <HeaderButtons loggedIn={props.loggedIn} />
    </Header>
  );
}

export type { IHeaderProps };
export { headerClasses };
export { testId as HeaderTestId };
