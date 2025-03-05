import PortfolioContainer from "./PortfolioContainer";
import { HeroUIProvider } from "@heroui/react";

const App = () =>
    <>
        <HeroUIProvider>
            <PortfolioContainer />
        </HeroUIProvider>
    </>

export default App;
