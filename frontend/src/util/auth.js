import { redirect } from "react-router-dom";

export function getAuthToken() {
  //Token kontrolünün yapıldığı yer
  const token = localStorage.getItem("token");

  if (!token) return null;

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) return "EXPIRED";

  return token;
}
export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}

export function getTokenDuration() {
  const storedExpDate = localStorage.getItem("expiration");
  const expDate = new Date(storedExpDate); // Kayıt tarihini dijital tarih sayısına çevirdik
  const now = new Date(); //Şimdiki zamanın dijital tarih sayısı
  const duration = expDate.getTime() - now.getTime();
  return duration;
}
