import { AppProvider } from "./app.context";
import MainPage from "./pages/main-page";

function App() {
  return (
    <>
      <AppProvider>
        <MainPage />
      </AppProvider>
    </>
  );
}
export default App;
