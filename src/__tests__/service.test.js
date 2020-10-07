import React from "react";
import renderer from "react-test-renderer";
import Service from "../components/Servicew";

test(" Service renders correctly", () => {
  const tree = renderer.create(<Service />).toJSON();
  expect(tree).toMatchSnapshot();
}); 