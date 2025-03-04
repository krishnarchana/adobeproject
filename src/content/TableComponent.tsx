import { TableView, TableHeader, TableBody, Column, Row, Cell } from "@adobe/react-spectrum";
import { View, Flex, Text, Icon } from "@adobe/react-spectrum";
import { Eye } from "lucide-react";

const TableComponent = () => {
    const data = [
        { id: 1, type: "Event", q1: "Q1 Data 1", q2: "Q2 Data 1", q3: "Q3 Data 1", q4: "Q4 Data 1" },
        { id: 2, type: "Promotion", q1: "Q1 Data 2", q2: "Q2 Data 2", q3: "Q3 Data 2", q4: "Q4 Data 2" },
        { id: 3, type: "Offer", q1: "Q1 Data 3", q2: "Q2 Data 3", q3: "Q3 Data 3", q4: "Q4 Data 3" },
        { id: 4, type: "Campaign", q1: "Q1 Data 4", q2: "Q2 Data 4", q3: "Q3 Data 4", q4: "Q4 Data 4" },
    ];

    // Define quarterly data with month labels
    const quarters = [
        { label: "Q1'24", months: ["JAN", "FEB", "MAR"] },
        { label: "Q2'24", months: ["APR", "MAY", "JUN"] },
        { label: "Q3'24", months: ["JUL", "AUG", "SEP"] },
        { label: "Q4'24", months: ["OCT", "NOV", "DEC"] },
    ];

    return (
        <View width="100%" overflow="auto">
            <TableView aria-label="Fixed First Column Table" height="400px">

                <TableHeader>
                    <Column width={150}>
                        <Text>Type</Text>
                    </Column>

                    <Column width={200}>
                        <Text>Q1'24</Text>
                    </Column>
                    <Column width={200}>
                        <Text>Q2'24</Text>
                    </Column>
                    <Column width={200}>
                        <Text>Q3'24</Text>
                    </Column>
                    <Column width={200}>
                        <Text>Q3'24</Text>
                    </Column>

                </TableHeader>


                <TableBody>
                    {data.map((item) => (
                        <Row key={item.id}>
                            {/* Fixed First Column */}
                            <Cell>
                                <Flex direction="row" alignItems="center" justifyContent="space-between">
                                    <Text>{item.type}</Text>
                                </Flex>
                            </Cell>

                            {/* Scrollable Data Columns */}
                            <Cell>
                                <Text>{item.q1}</Text>
                            </Cell>
                            <Cell>
                                <Text>{item.q2}</Text>
                            </Cell>
                            <Cell>
                                <Text>{item.q3}</Text>
                            </Cell>
                            <Cell>
                                <Text>{item.q4}</Text>
                            </Cell>
                        </Row>
                    ))}
                </TableBody>

            </TableView>
        </View>
    );
};

export default TableComponent;
