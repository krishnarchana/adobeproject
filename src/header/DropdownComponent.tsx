import React from "react";
import { Provider, defaultTheme, ActionButton, Menu, Item, MenuTrigger } from "@adobe/react-spectrum";
import Add from "@spectrum-icons/workflow/Add";
import ChevronDown from "@spectrum-icons/workflow/ChevronDown";

const DropdownComponent: React.FC = () => {
    return (
        <Provider theme={defaultTheme}>
            <div className="dropdown-container">
                {/* Actions Dropdown */}
                <div className="custom-dropdown">
                    <MenuTrigger>
                        <ActionButton isQuiet>
                            Actions <ChevronDown />
                        </ActionButton>
                        <Menu>
                            <Item key="edit">Edit</Item>
                            <Item key="delete">Delete</Item>
                            <Item key="share">Share</Item>
                        </Menu>
                    </MenuTrigger>
                </div>

                {/* Create Dropdown */}
                <div className="custom-dropdown">
                    <MenuTrigger>
                        <ActionButton isQuiet>
                            Create <Add />
                        </ActionButton>
                        <Menu>
                            <Item key="new">New File</Item>
                            <Item key="folder">New Folder</Item>
                        </Menu>
                    </MenuTrigger>
                </div>
            </div>
        </Provider>
    );
};

export default DropdownComponent;
