import "../styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/shared/Nav";
import Banner from "../components/shared/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <div className="portfolio-app">
    <Nav/>
   {Component.name==="Home"&&<Banner/>} 
    <div className="container">
  <Component {...pageProps} />
  </div>
</div>
    );
}
export default MyApp;
