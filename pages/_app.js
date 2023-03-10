import Layout from "../Components/Layout/Layout";
import "../styles/globals.css";
import "react-notifications/lib/notifications.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;
