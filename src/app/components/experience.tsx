import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import { styleText } from "util";
export const Experience = () => {
  return (
    <div className="h-auto py-10">
    <h1 className="text-center my-10 font-bold font-mono text-[30px]">Career</h1>
    <div className="flex flex-col lg:flex-row justify-center gap-4">
        {/* <!-- Education Section --> */}
        <div className="w-full lg:w-[45%] xl:w-[30%] h-auto lg:h-[500px]">
            <h1 className="text-center font-bold text-[20px]">Education</h1>
            <Timeline
                mode="alternate"
                className="text-white mt-10 text-[20px]"
                items={[
                    {
                        children: "Started Senior High School at Ofori Panin Senior High School in 2016",
                        color: "green",
                        style: { border: "1px solid pink", padding: "10px" },
                    },
                    {
                        children: "Completed Senior High in 2019",
                        color: "red",
                        style: { padding: "10px" },
                    },
                    {
                        children: "Began Tertiary Education at University of Professional Studies Accra (UPSA) in 2019",
                        color: "green",
                        style: { border: "1px solid pink", padding: "10px" },
                    },
                    {
                        children: "Completed Tertiary Education in 2023",
                        color: "red",
                        style: { padding: "10px" },
                    },
                ]}
            />
        </div>

        {/* <!-- Work Experience Section --> */}
        <div className="w-full lg:w-[45%] xl:w-[30%] h-auto lg:h-[500px]">
            <h1 className="text-center font-bold text-[20px]">Work Experience</h1>
            <Timeline
                mode="alternate"
                className="text-white mt-10 text-[20px]"
                items={[
                    {
                        children: "Did my Internship at the Ghana Prisons Headquarters - 09/2023",
                        color: "green",
                        style: { border: "1px solid pink", padding: "10px" },
                    },
                    {
                        children: "Completed Internship in month -10/2023",
                        color: "red",
                        style: { padding: "10px" },
                    },
                    {
                        children: "Started working at Innorik Ghana LTD as a national service personnel in 2023/2024",
                        color: "green",
                        style: { border: "1px solid pink", padding: "10px" },
                    },
                    {
                        children: "Still working at Innorik Ghana LTD as a national service personnel",
                        color: "green",
                        style: { padding: "10px" },
                    },
                ]}
            />
        </div>
    </div>
</div>

  );
};
