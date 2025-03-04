import { TableView, TableHeader, TableBody, Column, Row, Cell } from "@adobe/react-spectrum";

// Dynamic JSON Data (Make sure it's not empty)
const jsonData = [
    { id: 1, name: "John Doe", age: 28, country: "USA" },
    { id: 2, name: "Jane Smith", age: 34, country: "Canada" },
    { id: 3, name: "Carlos Rodríguez", age: 41, country: "Spain" }
];

// Extract headers dynamically (only if jsonData has values)
const columns = jsonData.length > 0
    ? Object.keys(jsonData[0]).map((key) => ({
        key,
        name: key.charAt(0).toUpperCase() + key.slice(1) // Capitalize first letter
    }))
    : [];
export default function DynamicJSONTable() {
    return (
        <TableView aria-label="Dynamic JSON Table" selectionMode="none">
            {/* Dynamic Table Headers */}
            <TableHeader>
                {columns.map((col) => (
                    <Column key={col.key}>{col.name}</Column>
                ))}
            </TableHeader>

            {/* Dynamic Table Body */}
            <TableBody>
                {jsonData.map((row:any) => (
                    <Row key={row.id}>
                        {columns.map((col) => (
                            <Cell key={col.key}>{row[col.key]}</Cell>
                        ))}
                    </Row>
                ))}
            </TableBody>
        </TableView>
    );
}