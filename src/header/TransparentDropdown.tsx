import { MenuTrigger, Button, Menu, Item } from "@adobe/react-spectrum";
import ChevronDown from "@spectrum-icons/workflow/ChevronDown";

interface CustomDropdownProps {
    name?: string;
}

const TransparentDropdown: React.FC<CustomDropdownProps> = ({ name }) => {
    return (
        <MenuTrigger>
            <Button
                variant="primary"
                UNSAFE_style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "#888",
                    fontWeight: "500"
                }}
            >
                {name} <ChevronDown size="S" />
            </Button>
            <Menu>
                <Item key="1">Option 1</Item>
                <Item key="2">Option 2</Item>
                <Item key="3">Option 3</Item>
            </Menu>
        </MenuTrigger>
    );
}
export default TransparentDropdown;