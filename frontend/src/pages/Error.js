import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";
function ErrorPage() {
  const error = useRouteError();
  let title = "ERROR";
  let message = "There is a problem";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page Not Found";
    message = "Couldn't finde a page or resource";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
}

export default ErrorPage;
