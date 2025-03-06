import React, { useState } from "react";
import { TableView, TableHeader, TableBody, Column, Row, Cell } from "@adobe/react-spectrum";
import { Flex, View, Text, Button } from "@adobe/react-spectrum";

const quarters:any = {
    "Q1": ["Jan", "Feb", "Mar"],
    "Q2": ["Apr", "May", "Jun"],
    "Q3": ["Jul", "Aug", "Sep"],
    "Q4": ["Oct", "Nov", "Dec"],
};




const events: any = ["Event 1", "Promotion 1", "Offer 1", "Campaign 1"];


export default function CalendarView() {
    const [selectedYear, setSelectedYear] = useState("24");
    const [selectedQuarter, setSelectedQuarter] = useState("Q1");

    const headersData: any = Object.keys(quarters);


    const rows = events.map((event: any) => ({
        id: event,
        events: event,
        ...quarters[selectedQuarter].reduce((acc: any, month: any) => ({ ...acc, [month]: "-" }), {}),
    }));

    return (
        <Flex direction="column" gap="size-200" height="100vh" width="100%">
            {/* Header */}
            <Flex justifyContent="space-between" alignItems="center" UNSAFE_style={{ padding:"30px", backgroundColor:"gray"}}>
                <Text>{`Year '${selectedYear}`}</Text>
                <Button variant="primary">+</Button>
            </Flex>

            {/* Table */}
            <TableView aria-label="Custom Calendar Table" flexGrow={1} UNSAFE_style={{ overflow: "auto" }}>
                <TableHeader>
                    <Column>Events</Column>
                    {headersData.map((quarter: any, index:number) => (
                        <Column key={index}>
                                
                            {quarters[quarter].map((month:any, index2:number) => (
                                {month}
                            ))}
                        </Column>
                    ))}

                </TableHeader>
                <TableBody items={rows} >
                    {(row:any) => (
                        <Row key={row.id}>
                            {(columnKey) => <Cell>{row[columnKey]}</Cell>}
                        </Row>
                    )}
                </TableBody>
            </TableView>
        </Flex>
    );
}
