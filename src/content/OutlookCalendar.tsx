import React, { useState, useEffect } from "react";
import { Grid, View, Text, Button, Flex } from "@adobe/react-spectrum";
import { ChevronRight, ChevronDown, Eye } from "lucide-react";

const data = [
    { label: "Events" },
    { label: "Offers & Promotions" },
    { label: "Gifts" }
];
const quarters = [
    { label: "Q1 24", months: ["JAN", "FEB", "MAR"]},
];
let staticColData = [
    { label: "Events" },
    { label: "Offers & Promotions" }
];

export default function OutlookCalendar() {
    const [expanded, setExpanded] = useState(false);
    const [hexpanded, setHExpanded] = useState(false);

    return (
        <Grid
            areas={["fixed quarters"]}
            columns={["150px", "auto"]}
            rows={["auto"]}
            gap="size-100"
            height="66vh"
            width="100%"
            UNSAFE_style={{ overflowX: "hidden", overflowY:"auto" }}
        >
            {/* Fixed Left Column */}
            <View>
                <Flex gap="10px" alignItems="center" height="65px" width="158px" UNSAFE_style={{ padding: "5px 0px 0px 20px" }}>
                    <Eye size={16} />
                    <ChevronDown size={16} />
                </Flex>
                {staticColData.map((item, index) => (
                    <View
                        key={index}
                        UNSAFE_style={{ backgroundColor:"#FBFBFB" }}
                        borderColor="gray-500"
                        borderWidth="thin"
                        borderRadius="small"
                        height={hexpanded ? "307px" : "187px"}
                        width="158px"
                    >
                        <Flex justifyContent="space-between" alignItems="center" UNSAFE_style={{ padding: "5px 5px 0px 5px" }}>
                            <Text>{item.label}</Text>
                            <Eye size={16} />
                        </Flex>
                    </View>
                ))}
            </View>

            {/* Scrollable Quarter Columns */}
            <View overflow="auto" UNSAFE_style={{ width: "100%", minWidth:"1100px" }}>
                <Grid columns={`repeat(${quarters.length}, 300px)`} gap="size-200">
                    {quarters.map((quarter, index) => (
                        <View key={index}>
                            <Flex gap="20px" alignItems="center" height="50px">
                                <Text UNSAFE_style={{marginLeft:"10px"} }>{quarter.label}</Text>
                                {expanded ? <ChevronDown size={16} onClick={() => setExpanded(!expanded)} /> : <ChevronRight size={16} onClick={() => setExpanded(!expanded)} />}
                                {hexpanded ? <ChevronDown size={16} onClick={() => setHExpanded(!hexpanded)} /> : <ChevronRight size={16} onClick={() => setHExpanded(!hexpanded)} />}
                            </Flex>
                            {expanded ?
                                <Flex>
                                    {quarter.months.map((month, i) => (
                                        <Flex
                                            key={i}
                                        >
                                            <Text UNSAFE_style={{
                                                textAlign: "center",
                                                borderLeft: i > 0 ? "1px solid gray" : "none",
                                                width:"320px"
                                            }}>{month}</Text>
                                        </Flex>
                                    ))}
                                </Flex>
                                :
                                <Flex>
                                    {quarter.months.map((month, i) => (
                                        <Flex
                                            key={i}
                                        >
                                        <Text
                                            key={i}
                                            UNSAFE_style={{
                                                textAlign: "center",
                                                borderLeft: i > 0 ? "1px solid gray" : "none",
                                                width:"15vh"
                                            }}
                                        >
                                            {month}
                                            </Text>
                                        </Flex>
                                    ))}
                                </Flex>}
                            {/* Rows for each quarter */}
                            {expanded ? (
                                <>
                                    <View UNSAFE_style={{ border: "1px solid gray", padding: "10px", width: "950px", height:"164px" }}>
                                    <Grid
                                        columns={`repeat(${quarter.months.length}, 1fr)`}
                                    >
                                        {data.map((month, i) => (
                                            <Flex
                                                key={i}
                                                direction="row" alignItems="center"
                                                UNSAFE_style={{ width: "285px", height: hexpanded ? "80px" : "40px", borderRadius: "10px", border: "1px solid gray", backgroundColor: "#fff", padding: "0px 0px 0px 0px", margin: "10px" }}
                                            >
                                                <View width="25%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center", backgroundColor: "#D5D1D1", borderRadius: "10px 0px 0px 10px" }}>
                                                    <Text UNSAFE_style={{ fontWeight: "bold" }}>aa</Text>
                                                </View>

                                                {/* Right Section (75%) */}
                                                <View width="75%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center" }}>
                                                    <Text>aaa</Text>
                                                </View>
                                            </Flex>
                                        ))}
                                    </Grid>
                                    </View>
                                    <View UNSAFE_style={{ border: "1px solid gray", padding: "10px", width: "950px", height:"164px" }}>
                                        <Grid
                                            columns={`repeat(${quarter.months.length}, 1fr)`}
                                        >
                                            {data.map((month, i) => (
                                                <Flex
                                                    key={i}
                                                    direction="row" alignItems="center"
                                                    UNSAFE_style={{ width: "285px", height: hexpanded ? "80px" : "40px", borderRadius: "10px", border: "1px solid gray", backgroundColor: "#fff", padding: "0px 0px 0px 0px", margin: "10px" }}
                                                >
                                                    <View width="25%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center", backgroundColor: "#D5D1D1", borderRadius: "10px 0px 0px 10px" }}>
                                                        <Text UNSAFE_style={{ fontWeight: "bold" }}>aa</Text>
                                                    </View>

                                                    {/* Right Section (75%) */}
                                                    <View width="75%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center" }}>
                                                        <Text>aaa</Text>
                                                    </View>
                                                </Flex>
                                            ))}
                                        </Grid>
                                    </View>
                                </>
                            ) :
                                (<>
                                    <View UNSAFE_style={{ border: "1px solid gray", padding: "10px", width: "300px" }}>
                                    {data.map((_, i) => (
                                        <Flex
                                            key={i}
                                            direction="row" alignItems="center"
                                            UNSAFE_style={{ width: "285px", height:hexpanded ? "80px" : "40px", borderRadius: "10px", border:"1px solid gray", backgroundColor: "#fff", padding:"0px 0px 0px 0px", margin:"10px" }}
                                        >
                                            <View width="25%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center", backgroundColor: "#D5D1D1", borderRadius: "10px 0px 0px 10px" }}>
                                                <Text UNSAFE_style={{ fontWeight: "bold" }}>aa</Text>
                                            </View>

                                            {/* Right Section (75%) */}
                                            <View width="75%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center" }}>
                                                <Text>aaa</Text>
                                            </View>
                                        </Flex>
                                    ))}
                                    </View>
                                    <View UNSAFE_style={{ border: "1px solid gray", padding: "10px", width: "300px" }}>
                                        {data.map((_, i) => (
                                            <Flex
                                                key={i}
                                                direction="row" alignItems="center"
                                                UNSAFE_style={{ width: "285px", height: hexpanded ? "80px" : "40px", borderRadius: "10px", border: "1px solid gray", backgroundColor: "#fff", padding: "0px 0px 0px 0px", margin: "10px" }}
                                            >
                                                <View width="25%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center", backgroundColor: "#D5D1D1", borderRadius: "10px 0px 0px 10px" }}>
                                                    <Text UNSAFE_style={{ fontWeight: "bold" }}>aa</Text>
                                                </View>

                                                {/* Right Section (75%) */}
                                                <View width="75%" height="100%" UNSAFE_style={{ textAlign: "center", alignContent: "center" }}>
                                                    <Text>aaa</Text>
                                                </View>
                                            </Flex>
                                        ))}
                                    </View>
                                    </>
                                )}
                        </View>
                    ))}
                </Grid>
            </View>
        </Grid>
    );
}