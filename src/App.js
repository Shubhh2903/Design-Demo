/** @format */

import FontStyle from "./font/FontStyle";
import HeaderSection from "./components/HeaderSection";
import Content from "./components/Content"
import Service from "./components/Service";
import CaseStudy from "./components/CaseStudy";
function App() {
  return (
    <>
      <FontStyle />
      <HeaderSection />
      <Content/>
      <Service/>
      <CaseStudy/>
      <h1>working nice</h1>
    </>
  );
}

export default App;
