import "../styles/globals.css";
import { AppPropsWithLayout } from "models/common";
import { EmptyLayout } from "components/common/layouts/EmptyLayout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
