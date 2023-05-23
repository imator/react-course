import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  //1. aşamada: adres çubuğundan hangi mod olduğunu tespit ediyoruz
  //searchParams bir URLSearchParams objesidir. içinden aradığımızı bulmak için get-i çağırmak lazım
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  //2. aşamada: mode ya login olmalı yada signup olmalı. İkiside değilse error
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported Mode" }, { status: 422 });
  }

  //3. aşamada: AuthForm dan gelen bilgileri ayıştırmak
  const data = await request.formData();
  //Json ile fetch yapmak için obje olarak verileştirme yapıyorum
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  //Status 422 Unprocessable Content
  //Status 401 Unauthorized
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  //Status 500 Internal Server Error
  if (!response.ok) {
    throw json({ message: "Could not authenticate user " }, { status: 500 });
  }

  //Yapmamız gereken işlem token alıp bir yerde saklamak.
  const resData = await response.json();
  const token = resData.token;

  //Token oluşturulan yer ****************
  localStorage.setItem("token", token);
  //Oluşturulma zamanınada ekliyorum
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1); //1 saat sonrası bilgisi oluşturma
  localStorage.setItem("expiration", expiration.toISOString());

  //Hiç bir problem yoksa
  return redirect("/");
}
