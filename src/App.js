// import ContactContextProvaider from "./components/context/ContactContext";
import ContactContextProvider from "./components/context/ContactContext";
import Header from "./components/Header";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <ContactContextProvider>
        <Header />
        <MainRoutes />
      </ContactContextProvider>
    </>
  );
}

export default App;
