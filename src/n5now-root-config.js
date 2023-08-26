import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@n5now/app-rick-and-morty",
  app: () => System.import("@n5now/app-rick-and-morty"),
  activeWhen: ["/rick-and-morty"],
});

start({
  urlRerouteOnly: true,
});
