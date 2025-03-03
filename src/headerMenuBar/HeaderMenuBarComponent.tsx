import React from "react";
import { View, Flex, Text } from "@adobe/react-spectrum";
import DropdownComponent from "../header/DropdownComponent";
import HeaderControlsComponent from "../header/HeaderControlsComponent";

const HeaderMenuBarComponent: React.FC = () => {

    const actionsArray = [
        { id: 1, label: "action 1" },
        { id: 2, label: "action 2" },
        { id: 3, label: "action 3" },
        { id: 4, label: "action 4" },
    ];

    const createArray = [
        { id: 1, label: "create 1" },
        { id: 2, label: "create 2" },
        { id: 3, label: "create 3" },
        { id: 4, label: "create 4" },
    ];

    return (
        <View
            UNSAFE_style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "150px",
                backgroundColor: "#FBFBFB"
            }}
        >

            <Flex alignItems="center" UNSAFE_style={{ gap: '5px', marginTop: "-50px" }}>
                <Text UNSAFE_style={{ fontSize: "18px", fontWeight: "bold", color: "#7D7D7D", marginLeft: "30px" }}>
                    DMe Major Moments Roadmap
                </Text>
                <DropdownComponent menuItems={actionsArray} selectedItem="action" />
                <DropdownComponent menuItems={createArray} selectedItem="create" />
            </Flex>

            <View flex>
                <Flex justifyContent="center" UNSAFE_style={{
                    marginTop: "-50px"
                }}>
                    <HeaderControlsComponent></HeaderControlsComponent>
                </Flex>
            </View>

        </View>
    );
};

export default HeaderMenuBarComponent;
