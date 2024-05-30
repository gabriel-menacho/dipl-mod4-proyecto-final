"use client";

import { IMainProps } from "./types";
import { styled, Box } from "@mui/material";
import styles, { mainClasses } from "./styles";
import clsx from "clsx";
import Table from "../Table";

const testId = "main";

const Main = styled(Box)(styles.main);

export default function ({ className, products = []}: IMainProps) {
  const classProps = clsx(className, mainClasses.root);
  return (
    <Main className={classProps} data-testid={testId}>
     <Table data={products} />
    </Main>
  );
}

export type { IMainProps };
export { mainClasses };
export { testId as MainTestId };
