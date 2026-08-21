// @ts-check
import { module } from "@prisma/composer";
import nuxtService from "./service.mjs";

export default module("nuxt-app", ({ provision }) => {
  provision(nuxtService);
});
