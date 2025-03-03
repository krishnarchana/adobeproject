import React from "react";
import { Provider, defaultTheme, ActionButton, Menu, Item, MenuTrigger } from "@adobe/react-spectrum";
import Add from "@spectrum-icons/workflow/Add";
import ChevronDown from "@spectrum-icons/workflow/ChevronDown";

interface DropdownProps {
    menuItems: { id: number; label: string }[];
    selectedItem?: string;
}

const DropdownComponent: React.FC<DropdownProps> = ({ menuItems, selectedItem }) => {
    return (
        <Provider theme={defaultTheme}>
            <div className="dropdown-container">
                <div className="custom-dropdown">
                    <MenuTrigger>
                        {selectedItem === "action" ?
                            <ActionButton isQuiet>
                                Actions <ChevronDown />
                            </ActionButton>
                            :
                            <ActionButton isQuiet>
                                Create <Add />
                            </ActionButton>
                        }
                        <Menu>
                            {menuItems && menuItems.map((item: any) => (
                                <Item key={item.id}>{item.label}</Item>
                            ))}
                        </Menu>
                    </MenuTrigger>
                </div>

            </div>
        </Provider>
    );
};

export default DropdownComponent;
