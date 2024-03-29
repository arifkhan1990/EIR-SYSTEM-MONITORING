import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdDashboard,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";

// Auth Imports
import SignInCentered from "views/auth/signIn";

// Customer query page
import CustomerQuery from "views/admin/customerQuery";

const routes = [
  {
    name: "EIR System Monitor",
    layout: "/admin",
    path: "/dashboard",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "EIR System Monitor",
    layout: "/admin",
    path: "/customer-query",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: CustomerQuery,
  },
];

export default routes;
