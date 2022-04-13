import { useThree } from "@react-three/fiber";
import classNames from "classnames";

import s from "./style.module.scss";

const Content = () => {
  const { width: w, height: h } = useThree((state) => state.size);

  return (
    <>
      <section
        className={classNames(s.section, s.intro)}
        style={{
          top: "2rem",
        }}
      >
        <div>
          <p>
            Infinites AI+IRL are generative artworks generated during the
            minting process. They are real-time simulations built in three.js.
            Infinites AI are 512 artworks, and IRL is 1024 (Only 993 were
            minted).
          </p>
          <p>
            After creating the first two series, we explored converting a “flat”
            image into a 3D landscape. The results were reflected in Infinites
            Surfaces, airdropped collection to AI+IRL holders in Tezos.
          </p>
        </div>
        <div>
          <h1>The Islands</h1>
          <p>
            While we were dropping Infinites Surfaces, we had already started
            the creation of the Islands: Generative worlds that come out of the
            originals Infinites AI and IRL.
          </p>
        </div>
      </section>
      <section
        className={classNames(s.section, s.testLayout)}
        style={{
          top: h,
        }}
      >
        <h1>THE ISLANDS</h1>
      </section>
    </>
  );
};

export default Content;
