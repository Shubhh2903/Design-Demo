/** @format */

import FontStyle from "./font/FontStyle";
import HeaderSection from "./components/HeaderSection";
import Content from "./components/Content"
import Service from "./components/Service";
import CaseStudy from "./components/CaseStudy";
import Client from "./components/Client";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <FontStyle />
      <HeaderSection />
      <Content/>
      <Service/>
      <CaseStudy/>
      <Client/>
      <Contact/>
    </>
  );
}

export default App;
