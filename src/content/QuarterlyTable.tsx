import React from "react";
import { Flex, View, Heading, Well} from "@adobe/react-spectrum";
//import Calendar from "@spectrum-icons/workflow/Calendar";
//import { Eye, FolderOpen } from "lucide-react";
//import ChevronDown from "@spectrum-icons/workflow/ChevronDown";
//import ChevronRight from "@spectrum-icons/workflow/ChevronDown";
import Flag from "@spectrum-icons/workflow/Flag";
import Settings from "@spectrum-icons/workflow/Settings";
import TableComponent from "./TableComponent";


const QuarterlyTable: React.FC = () => {
    /*const [expandedQuarters, setExpandedQuarters] = useState<Record<string, boolean>>({});

    const quarters = ["Q3'24", "Q4'24", "Q1'25"];
    const months = [
        { label: "Jul", quarter: "Q3'24" },
        { label: "Aug", quarter: "Q3'24" },
        { label: "Sep", quarter: "Q3'24" },
        { label: "Oct", quarter: "Q4'24" },
        { label: "Nov", quarter: "Q4'24" },
        { label: "Dec", quarter: "Q4'24" },
        { label: "Jan", quarter: "Q1'25" },
        { label: "Feb", quarter: "Q1'25" }
    ];

    const data = [
        { id: 1, label: "Item A", quarter: "Q3'24", month: "Jul" },
        { id: 2, label: "Item B", quarter: "Q3'24", month: "Jul" },
        { id: 3, label: "Item C", quarter: "Q3'24", month: "Aug" },
        { id: 4, label: "Item D", quarter: "Q4'24", month: "Oct" },
        { id: 5, label: "Item E", quarter: "Q4'24", month: "Nov" },
        { id: 6, label: "Item F", quarter: "Q4'24", month: "Nov" },
        { id: 7, label: "Item G", quarter: "Q1'25", month: "Jan" },
        { id: 8, label: "Item H", quarter: "Q1'25", month: "Feb" },
        { id: 9, label: "Item I", quarter: "Q1'25", month: "Feb" }
    ];

    */

    const worksData = [
        { id: 1, label: "Project Nex(GA)" },
        { id: 2, label: "Ps Web+Express Premium UK Offering" },
        { id: 3, label: "Project Concept(GA)" },
        { id: 4, label: "Substance 3D Viewer(GA)" },
        { id: 5, label: "Project Morpheus" }
    ];

    return (
        <Flex direction="row" height="100vh">
            {/* Left Column (Icons) */}
            <View width="30px" padding="size-100" backgroundColor="gray-200" UNSAFE_style={{ height: '500px', maxHeight: '500px' }}>
                <Flex direction="column" justifyContent="space-between" height="100%">
                    {/* Top Icons */}
                    <View>
                        <Flag size="S" UNSAFE_style={{ color: "gray", marginBottom: "10px" }} />
                        <Flag size="S" UNSAFE_style={{ color: "gray" }} />
                    </View>

                    {/* Bottom Icons */}
                    <View>
                        <Settings size="S" UNSAFE_style={{ color: "gray", marginBottom: "10px" }} />
                        <Settings size="S" UNSAFE_style={{ color: "gray" }} />
                    </View>
                </Flex>
            </View>

            <TableComponent></TableComponent>
            {/* Middle Column (Table) 
            <View flex="1" overflow="auto">
                <Grid
                    areas={["header header", "content content"]}
                    columns={["100px", "auto"]}
                    rows={["size-600", "auto"]}
                >
                    
                    <View gridArea="header" backgroundColor="gray-300" padding="size-100">
                        <Flex direction="row">
                            <View width="100px">
                                <Heading level={4}>Label</Heading>
                            </View>
                            <Flex direction="row" flex="1">
                                {quarters.map(q => (
                                    <View key={q} flex="1">
                                        <Flex direction="row" justifyContent="space-between">
                                            <Heading level={4}>{q}</Heading>
                                            <Button
                                                variant="primary"
                                                isQuiet
                                                onPress={() =>
                                                    setExpandedQuarters(prev => ({ ...prev, [q]: !prev[q] }))
                                                }
                                            >
                                                {expandedQuarters[q] ? <ChevronDown /> : <ChevronRight />}
                                            </Button>
                                        </Flex>
                                        <Divider />
                                        <Flex direction="row">
                                            {months
                                                .filter(m => m.quarter === q)
                                                .map(m => (
                                                    <View key={m.label} flex="1" padding="size-100">
                                                        <Heading level={5}>{m.label}</Heading>
                                                    </View>
                                                ))}
                                        </Flex>
                                    </View>
                                ))}
                            </Flex>
                        </Flex>
                    </View>

                    <View gridArea="content">
                        {quarters.map(q => (
                            <Flex key={q} direction="row" >
                                <View width="100px" padding="size-100">
                                    <Heading level={5}>{q}</Heading>
                                </View>

                                <Flex direction="row" flex="1">
                                    {expandedQuarters[q]
                                        ? months
                                            .filter(m => m.quarter === q)
                                            .map(m => (
                                                <View key={m.label} flex="1" padding="size-100">
                                                    {data
                                                        .filter(item => item.month === m.label)
                                                        .map(item => (
                                                            <Well key={item.id} marginBottom="size-100">
                                                                {item.label}
                                                            </Well>
                                                        ))}
                                                </View>
                                            ))
                                        : // Show items inside a single box when collapsed
                                        <View flex="1" padding="size-100">
                                            <Well>
                                                {data
                                                    .filter(item => item.quarter === q)
                                                    .map(item => item.label)
                                                    .join(", ")}
                                            </Well>
                                        </View>
                                    }
                                </Flex>
                            </Flex>
                        ))}
                    </View>
                </Grid>
            </View> */}

            {/* Middle Column (Table) */}
           
            {/* Right Column (Scrollable List) */}
            <View
                width="300px"
                backgroundColor="gray-200"
                padding="size-100"
                UNSAFE_style={{ height: '500px', maxHeight: '500px', overflowX: 'auto' }}
            >
                <Heading level={3} UNSAFE_style={{ textAlign: "center", width: "100%" }}>
                    In The Works
                </Heading>
                <Heading level={5} UNSAFE_style={{ textAlign: "center", width: "100%" }}>
                    TIER & RELEASE DATE TBD
                </Heading>
                <View overflow="auto">
                    {worksData.map((item) => (
                        <Well key={item.id} marginBottom="size-100">
                            {item.label}
                        </Well>
                    ))}
                </View>
            </View>

        </Flex>
    );
};

export default QuarterlyTable;
