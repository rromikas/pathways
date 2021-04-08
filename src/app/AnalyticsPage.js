import ParticipantsList from "components/ParticipantsList";
import { participants, analyticsData } from "data";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, Tooltip } from "recharts";
import { curveCardinal } from "d3";
import { useEffect } from "react";

const AnalyticsPage = ({ scrollToTop }) => {
  const cards = [
    { title: "Total RSVP", value: 250 },
    { title: "Total Joined", value: 200 },
    { title: "Runtime", value: "1:25:52" },
  ];

  const figures = [
    { title: "Participants", value: 150 },
    { title: "Breakout groups", value: "N/A" },
    { title: "Schools/speakers", value: 15 },
  ];

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <div>
      <div className="row">
        {cards.map((x, i) => (
          <div className={`md:col-4 sm:col-6 col-12 mb-7`} key={`card-${i}`}>
            <div className="w-fulll h-full text-white rounded p-3 bg-orange-400 bg-gradient-to-r from-orange-400 to-orange-300">
              <div className="h-32px">{x.title}</div>
              <div className="text-center text-40px">{x.value}</div>
              <div className="h-32px"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        <div className="md:w-7/12 w-full md:pr-7">
          <div className="shadow-custom px-7 py-20 rounded-md mb-7">
            <div className="h-224px">
              <ResponsiveContainer>
                <AreaChart
                  width={730}
                  height={250}
                  data={analyticsData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="strokeA" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#1999d1" />
                      <stop offset="100%" stopColor="#ff6a9b" />
                    </linearGradient>
                    <linearGradient id="strokeB" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#45b9d8" />
                      <stop offset="100%" stopColor="#be88f7" />
                    </linearGradient>
                    <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fd67be" stopOpacity={0.5} />
                      <stop offset="0.2%" stopColor="#fd67be" stopOpacity={0.5} />
                      <stop offset="10.77%" stopColor="#fd8fcf" stopOpacity={0.5} />
                      <stop offset="21.86%" stopColor="#fdb1de" stopOpacity={0.5} />
                      <stop offset="33.74%" stopColor="#feceea" stopOpacity={0.5} />
                      <stop offset="46.46%" stopColor="#fee3f3" stopOpacity={0.5} />
                      <stop offset="60.43%" stopColor="#fef3f9" stopOpacity={0.5} />
                      <stop offset="76.58%" stopColor="#fefcfd" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#fff" stopOpacity={0.5} />
                    </linearGradient>
                    <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopOpacity={0.5} stopColor="#86b1f6" />
                      <stop offset=".121" stopOpacity={0.5} stopColor="#a3c4f8" />
                      <stop offset=".282" stopOpacity={0.5} stopColor="#c4d9fa" />
                      <stop offset=".448" stopOpacity={0.5} stopColor="#dee9fc" />
                      <stop offset=".62" stopOpacity={0.5} stopColor="#f0f5fd" />
                      <stop offset=".799" stopOpacity={0.5} stopColor="#fbfcfe" />
                      <stop stopOpacity={0.5} stopColor="#fff" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid vertical={false} />
                  <Tooltip
                    cursor={false}
                    content={(props) => {
                      let payload = props.payload;
                      return payload ? (
                        <div
                          style={{
                            background: "white",
                            padding: "7px 14px",
                            borderRadius: 7,
                            boxShadow:
                              "0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%)",
                            fontSize: 14,
                            fontWeight: 400,
                          }}
                        >
                          <div className="flex mb-2">
                            <div className="mr-2">Value A:</div>
                            <div>{payload.length ? payload[0].value : ""} </div>
                          </div>
                          <div className="flex">
                            <div className="mr-2">Value B:</div>
                            <div>{payload.length ? payload[1].value : ""}</div>
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      );
                    }}
                  ></Tooltip>
                  <Area
                    type={curveCardinal}
                    dataKey="a"
                    stroke="url(#strokeA)"
                    strokeWidth="5"
                    fillOpacity={1}
                    fill="url(#colorA)"
                  />
                  <Area
                    type={curveCardinal}
                    dataKey="b"
                    stroke="url(#strokeB)"
                    strokeWidth="5"
                    fillOpacity={1}
                    fill="url(#colorB)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between">
              {analyticsData.map((x, i) => (
                <div key={`x-label-${i}`}>{x.label}</div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap">
            {figures.map((x, i) => (
              <div className="mr-7" key={`figure-${i}`}>
                <div className="flex flex-wrap items-center mb-7">
                  <div className="w-224px">{x.title}:</div>
                  <div className="w-96px">{x.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-5/12 w-full shadow-custom rounded-md h-5gd flex flex-col">
          <ParticipantsList participants={participants} dark={false}></ParticipantsList>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
