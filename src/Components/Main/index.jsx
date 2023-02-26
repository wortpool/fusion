import Buying from "./Buying";
import Costomisation from "./Costomisation";
import Description from "./Description";
import FpsBooster from "./FpsBooster";
import ScreenshotSlider from "./ScreenshotSlider";
import Team from "./Team/Team";

const Main = () => {
    return ( 
        <>
            <Description />
            <ScreenshotSlider />
            <Team />
            <FpsBooster />
            <Costomisation />
            <Buying />
        </>
     );
}
 
export default Main;