/// <reference types="react-scripts" />

import { FC, ReactNode } from "react";

declare type FCC<Props> = FC<Props> & { children: ReactNode };
