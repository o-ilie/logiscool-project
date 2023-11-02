import { useState } from "react";
import { TabsWrapper } from "../components";

const CARDS = 10;

const Sessions = () => {
  const [active, setActive] = useState(2);

  return (
    <div>
      <h1 className="title">PARCURSUL EDUCAȚIONAL AL COPILULUI TĂU</h1>
      <div className="text-base-400 text-base">
        Lorem ipsum dolor sit amet consectetur. Vitae pretium ultricies ac
        vivamus dolor. Varius magna blandit nunc eget diam nisl tincidunt.
      </div>
      <div className="w-full overflow-y-auto">
        <ul className="card mt-8 timeline timeline-horizontal shadow-none">
          {[...new Array(CARDS)].map((_, i) => (
            <li key={i} onClick={() => setActive(i)} className="timeline-item">
              <div className="timeline-badge ring-2 ring-primary-light ring-offset-4">
                {i + 1}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <TabsWrapper active={active} setActive={setActive}>
          {[...new Array(CARDS)].map((_, i) => (
            <div className="card card-carousel" key={i}>
              <h2>{"Card " + (i + 1)}</h2>
              <p>
                Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          ))}
        </TabsWrapper>
      </div>
    </div>
  );
};

export default Sessions;
