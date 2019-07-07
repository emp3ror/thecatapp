import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./app";

configure({ adapter: new Adapter() });

describe("<app />", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
  });
});
