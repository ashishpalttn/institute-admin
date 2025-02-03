import { useEffect, useState } from "react";
import Dropdown from "../components/DropDown";
import GenericInputField from "../components/GenericInputField";
import { getTestData, selectTestData } from "../store/testSlice";
import { useSelector, useDispatch } from "react-redux";

const TestPage = () => {
  const dispatch = useDispatch();
  const testData = useSelector(selectTestData);
  useEffect(() => {
    dispatch(getTestData());
  }, [dispatch]);



  return (
    <div>
      <div>This is a test page</div>
      <div></div>
    </div>
  );
};
export default TestPage;
