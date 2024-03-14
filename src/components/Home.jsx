import React from "react";
import { ChartContainer } from "@mui/x-charts";
import { LinePlot, MarkPlot } from "@mui/x-charts/LineChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const Home = () => {
  const data = [{ value: 5 }, { value: 10 }, { value: 15 }, { value: 20 }];

  const size = {
    width: 250,
    height: 200,
  };

  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  return (
    <div className="bg-gray-200 p-8">
      <div>
        <p className="text-2xl text-gray-600 font-[600]">Dashboard</p>
      </div>

      <div className="flex justify-between">
        <div className="bg-white my-8 w-[150px] h-[110px]">
          <div className="text-end mt-2 mr-2">
            <p className="text-green-500">+6%&#9650;</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">43</p>
            <p>New Tickets</p>
          </div>
        </div>

        <div className="bg-white my-8 w-[150px] h-[110px]">
          <div className="text-end mt-2 mr-2">
            <p className="text-red-500">-3%&#9660;</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">17</p>
            <p>Closed Today</p>
          </div>
        </div>

        <div className="bg-white my-8 w-[150px] h-[110px]">
          <div className="text-end mt-2 mr-2">
            <p className="text-green-500">+9%&#9650;</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">7</p>
            <p>New Replies</p>
          </div>
        </div>

        <div className="bg-white my-8 w-[150px] h-[110px]">
          <div className="text-end mt-2 mr-2">
            <p className="text-green-500">+3%&#9650;</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">27.3k</p>
            <p>Followers</p>
          </div>
        </div>

        <div className="bg-white my-8 w-[150px] h-[110px]">
          <div className="text-end mt-2 mr-2">
            <p className="text-red-500">-2%&#9660;</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">$95</p>
            <p>Daily Earnings</p>
          </div>
        </div>

        <div className="bg-white my-8 w-[150px] h-[110px]">
          <div className="text-end mt-2 mr-2">
            <p className="text-red-500">-1%&#9660;</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold">621</p>
            <p>Products</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-white w-[50%] border border-solid border-gray-300">
          <div className="p-4">
            <p className="text-xl">Development Activity</p>
          </div>
          <hr />

          <div>
            <ChartContainer
              width={500}
              height={300}
              series={[{ type: "line", data: pData }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              sx={{
                ".MuiLineElement-root": {
                  stroke: "#8884d8",
                  strokeWidth: 2,
                },
                ".MuiMarkElement-root": {
                  stroke: "#8884d8",
                  scale: "0.6",
                  fill: "#fff",
                  strokeWidth: 2,
                },
              }}
              disableAxisListener
            >
              <LinePlot />
              <MarkPlot />
            </ChartContainer>
          </div>
          <hr />

          <div className="">
            <div>
              <ul className="flex justify-evenly py-3 font-semibold">
                <li>USER</li>
                <li>COMMIT</li>
                <li>DATE</li>
              </ul>
              <hr />
            </div>

            <div>
              <ul className="flex justify-evenly py-3">
                <li>Ronald Bradly</li>
                <li>Initial Commit</li>
                <li>May 18, 2020</li>
              </ul>
              <hr />
            </div>

            <div>
              <ul className="flex justify-evenly py-3">
                <li>Russel Gibson</li>
                <li>Main Structure</li>
                <li>April 22, 2018</li>
              </ul>
              <hr />
            </div>

            <div>
              <ul className="flex justify-evenly py-3">
                <li>Beverly Strong</li>
                <li>Left sidebar</li>
                <li>April 15, 2023</li>
              </ul>
              <hr />
            </div>

            <div>
              <ul className="flex justify-evenly py-3">
                <li>Jonathan Ether</li>
                <li>Left sidebar</li>
                <li>October 15, 2023</li>
              </ul>
              <hr />
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <div className="bg-blue-100 p-4 border border-solid border-blue-200 mb-3">
            <p>
              <span className="font-semibold">Read our documentation </span>
              with code sample.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white  border border-solid border-gray-300">
              <div className="p-4">
                <p className="text-gray-500 font-semibold">Chart title</p>
              </div>
              <hr />

              <div className="py-4 pl-24">
                <PieChart
                  series={[
                    {
                      arcLabel: (item) => `${item.value}`,
                      data,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: "white",
                    },
                  }}
                  {...size}
                />
              </div>
            </div>

            <div className="bg-white border border-solid border-gray-300">
              <div className="p-4">
                <p className="text-gray-500 font-semibold">Today's Profit</p>
              </div>
              <hr />

              <div className="py-4 pl-24">
                <PieChart
                  series={[
                    {
                      arcLabel: (item) => `${item.value}`,
                      data,
                    },
                  ]}
                  sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                      fill: "white",
                    },
                  }}
                  {...size}
                />
              </div>
            </div>

            <div className="bg-white border border-solid border-gray-300">
              <div className="p-4">
                <p className="text-gray-500 font-semibold">New Feedback</p>
              </div>
              <hr />

              <div className="py-4">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["group A", "group B", "group C"],
                    },
                  ]}
                  series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                  ]}
                  width={350}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
