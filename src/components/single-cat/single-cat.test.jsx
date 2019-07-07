import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import SingleCat from "./single-cat";
configure({ adapter: new Adapter() });

describe("<SingleCat />", () => {
  let data = {
    url: "xyz"
  };
  let component = shallow(<SingleCat data={data} />);

  it("Should have image url", () => {
    const wrapper = component.find("img").prop("src");
    expect(wrapper).toEqual(data.url);
  });
});
