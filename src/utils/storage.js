export function getEmail() {
  const email = localStorage.getItem("email");
  return email;
}
export function getAdminEmail() {
  const email = localStorage.getItem("adminEmail");
  return email;
}
