import "../styles/globals.scss";
import { AppPropsWithLayout } from "models/common";
import { EmptyLayout } from "components/common/layouts/EmptyLayout";
import { SWRConfig } from "swr";
import { fetcher } from "api-client/axios-client";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig
      value={{
        fetcher,
        shouldRetryOnError: false,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
