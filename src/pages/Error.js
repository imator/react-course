import MainNavigation from "../components/MainNavigation";

function Error() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occured!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default Error;
