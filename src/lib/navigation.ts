// src/navigation.ts
import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { localePrefix, locales, defaultLocale } from "./i18n";


export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);


