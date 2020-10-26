import React from "react";
import renderer from "react-test-renderer";
import Client from "../components/Client";

test(" Client renders correctly", () => {
  const tree = renderer.create(<Client />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Image displays correctly',() => {
  let Logo = renderer.create(<Client/>).getInstance();
  expect(Logo.change).toMatchSnapshot
});