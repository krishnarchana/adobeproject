import React from "react";
import { View, Flex, Text } from "@adobe/react-spectrum";
import DropdownComponent from "../header/DropdownComponent";
import HeaderControlsComponent from "../header/HeaderControlsComponent";

const HeaderMenuBarComponent: React.FC = () => {
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
            {/* Left: Company Name with BETA label */}
            <Flex alignItems="center" UNSAFE_style={{ gap: '5px', marginTop: "-50px" }}>
                <Text UNSAFE_style={{ fontSize: "18px", fontWeight: "bold", color: "#7D7D7D", marginLeft: "30px" }}>
                    DMe Major Moments Roadmap
                </Text>
                <DropdownComponent></DropdownComponent>
            </Flex>

            {/* Center: Search Box */}
            <View flex>
                <Flex justifyContent="center" UNSAFE_style={{
                    marginTop:"-50px"
                } }>
                    <HeaderControlsComponent></HeaderControlsComponent>
                </Flex>
            </View>

            {/* Right: Placeholder for future actions */}

        </View>
    );
};

export default HeaderMenuBarComponent;
