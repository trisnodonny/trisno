export const routeClick = (route) => ({
  home: route === "home" ? false : true,
  project: route === "project" ? false : true,
  shelf: route === "shelf" ? false : true,
})