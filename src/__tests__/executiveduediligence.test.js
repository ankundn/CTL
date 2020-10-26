import React from "react";
import renderer from "react-test-renderer";
import ExecutiveDueDilligence from "../components/ExecutiveDueDilligence";

test(" Executive Due Diligence renders correctly", () => {
  const tree = renderer.create(<ExecutiveDueDilligence />).toJSON();
  expect(tree).toMatchSnapshot();
});