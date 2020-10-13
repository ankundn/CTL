import React from "react";
import renderer from "react-test-renderer";
import Client from "../components/Client";

test(" Client renders correctly", () => {
  const tree = renderer.create(<Client />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('Monday image displays correctly',() => {
//   let MondayImage = renderer.create(<Monday/>).getInstance();
//   expect(MondayImage.change).toMatchSnapshot
// });