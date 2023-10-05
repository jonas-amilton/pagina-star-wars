import React from "react";
import { Home, Characters, Planets } from "../pages/index";

export type TMapRoutes = {
  label: string;
  path: string;
  // eslint-disable-next-line no-undef
  component: React.FC;
};

export const routes: TMapRoutes[] = [
  {
    label: "Filmes",
    path: "/",
    component: Home,
  },
  {
    label: "Personagens",
    path: "/characters",
    component: Characters,
  },
  {
    label: "Planetas",
    path: "/planets",
    component: Planets,
  },
];
