import Lottie from "react-lottie";
import animationDataCalendar from "../../../Assets/10298-calendar.json";
import animationDataWorking from "../../../Assets/28273-working-together.json";
import animationDataCObid from "../../../Assets/37279-covid19.json";

const defaultOptionsCalendar = {
  loop: true,
  autoplay: true,
  animationData: animationDataCalendar,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptionsCovid = {
  loop: true,
  autoplay: true,
  animationData: animationDataCObid,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const defaultOptionsworking = {
  loop: true,
  autoplay: true,
  animationData: animationDataWorking,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const AnimacionTrabajos = (
  <Lottie options={defaultOptionsworking} height={180} width={180} style={{ margin: "none" }} />
);

export const AnimacionCalenadrio = (
  <Lottie options={defaultOptionsCalendar} height={180} width={180} style={{ margin: "none" }} />
);

export const AnimacionCoid = (
  <Lottie options={defaultOptionsCovid} height={180} width={180} style={{ margin: "none" }} />
);

export const Descripcion1 = (
  <>
    <h2 style={{ textAlign: "center" }}>
      Cuida Tu Salud <br />y <br />
      La de los Demás
    </h2>
    <p>Ya no se que mas poner</p>{" "}
  </>
);
