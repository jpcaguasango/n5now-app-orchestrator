import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@n5now/app-rick-and-morty",
  app: () => System.import("@n5now/app-rick-and-morty"),
  activeWhen: ["/rick-and-morty"],
});

registerApplication({
  name: "@n5now/app-simpsons",
  app: () => System.import("@n5now/app-simpsons"),
  activeWhen: ["/simpsons"],
});

start({
  urlRerouteOnly: true,
});
