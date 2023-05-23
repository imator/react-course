import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  // const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) return;
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    // console.log(tokenDuration);

    //her sayfa yyenilendiğinde duration sabit olsaydı ör 1 saat her sayfa yenilendiğinde 1 saat token süresi olacaktı. Böyle olmaması için geçen süreyi hafızaladık
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
