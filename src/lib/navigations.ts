import { Contact, Notebook } from "@lucide/svelte";
import { Gallery } from "flowbite-svelte";
import { HomeOutline, UsersGroupSolid } from "flowbite-svelte-icons";

export const navigationItems = [
  {
    path: "/services",
    label: "Services",
    Icon: HomeOutline,
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    Icon: Contact,
  },
  {
    path: "/about",
    label: "About",
    Icon: UsersGroupSolid,
  },
  {
    path: "/contact",
    label: "Contact",
    Icon: Contact,
  },
  {
    path: "/blog",
    label: "Blog",
    Icon: Notebook,
  }
];
