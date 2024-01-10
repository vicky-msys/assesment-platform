import React, { useState } from "react";
import "./InsightDropDown.scss";
import { DatePicker } from "antd";
import { CaretDownOutlined, CloseCircleOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

function InsightDropDown({ handleDropDownInputChange }) {
  const [openMainMenu, setOpenMainMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [result, setResult] = useState("");

  const handleMainMenu = () => {
    if (openMainMenu) {
      setOpenMainMenu(false);
      return;
    }
    setOpenMainMenu(true);
  };

  const handleSubMenu = () => {
    if (openSubMenu) {
      setOpenSubMenu(false);
      return;
    }
    setOpenSubMenu(true);
  };

  const handleInputChange = (value) => {
    setResult(value);
    handleDropDownInputChange(value);

    setOpenMainMenu(false);
  };

  const handleDate = (value) => {
    // console.log(value[0]._d.getDate());
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    handleDropDownInputChange(value);
    const selectedDate =
      monthNames[value[0]._d.getMonth()] +
      " " +
      value[0]._d.getDate() +
      " - " +
      monthNames[value[1]._d.getMonth()] +
      " " +
      value[1]._d.getDate();
    setResult(selectedDate);
    setOpenMainMenu(false);
  };

  const handleClear = ()=>{
      setResult("")
      handleDropDownInputChange("")
  }
  return (
    <div>
      <div className="i-mains">
        <p className="i-lable">Date Range</p>
        <div
          className="i-drop-main"
          onClick={handleMainMenu}
          role="presentation"
        >
          <p>{result}</p>
          <div className="i-icon-container">
            {result === "" ? (
              <CaretDownOutlined onClick={handleMainMenu} />
            ) : (
              <CloseCircleOutlined onClick={handleClear}/>
            )}
          </div>
        </div>
      </div>
      {openMainMenu && (
        <div className="i-option-container">
          <p onClick={() => handleInputChange("Today")} role="presentation">
            Today
          </p>
          <p onClick={() => handleInputChange("This Week")} role="presentation">
            This Week
          </p>
          <p
            onClick={() => handleInputChange("This Month")}
            role="presentation"
          >
            This Month
          </p>
          <div className="i-custom" onClick={handleSubMenu} role="presentation">
            <p>Custom</p>
            <CaretDownOutlined onClick={handleSubMenu} />
          </div>
          {openSubMenu && (
            <div className="i-range-picker">
              <RangePicker onChange={(value) => handleDate(value)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default InsightDropDown;
