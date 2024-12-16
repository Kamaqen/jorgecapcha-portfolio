export function load({ request }) {
  const lang = request.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0];
  if (lang === "es") {
    return { redirect: "/es" };
  }
  return {};
}
