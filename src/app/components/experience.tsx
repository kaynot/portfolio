import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { styleText } from "util";
export const Experience = () => {
  return (
    <div className="h-[700px]">
      <h1 className="text-center my-10 text-bold font-mono text-[30px]">
        Career
      </h1>
      <div className="flex justify-center">
        <div className=" w-[30%] h-[500px]">
          <h1 className="text-center text-bold text-[20px]">Education</h1>
          <Timeline
            mode="alternate"
            className="text-white mt-10 text-[20px] "
            items={[
              {
                children: " Started SHS at Ofori Panin Senior High School in 2016 ",
                color: "green",
                style:{border: "1px solid green", padding: "10px", backgroundColor:"pink",color:"black"}
              },
              {
                children: "Completed SHS in 2019",
                color: "red",
                style:{ padding: "10px"}
              },
              {
                children: `Begun University at University of Professional Sudies Accra (UPSA) in 2019`,
                color: "green",
                style:{border: "1px solid green", padding: "10px", backgroundColor:"pink",color:"black"}
              },
              {
                color: "red",
                children: "Network problems being solved 2015-09-01",
              },
              {
                children: "Create a services site 2015-09-01",
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                children: "Technical testing 2015-09-01",
              },
            ]}
            
          />

        </div>
        <div className="bg-blue-200 w-[30%] ">
          <h1 className="text-center text-bold text-[20px]">Work Experience</h1>
        </div>
      </div>
    </div>
  );
};
