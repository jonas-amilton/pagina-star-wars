import React from "react";
import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";

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
];
