import React from "react";
import { View, Flex, Text, Badge, Image, SearchField } from "@adobe/react-spectrum";

const HeaderComponent: React.FC = () => {
    return (
        <View
            UNSAFE_style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "80px",
                backgroundColor: "#fff"
            }}
        >
            {/* Left: Company Name with BETA label */}
            <Flex alignItems="center" UNSAFE_style={{ gap: '5px', paddingTop: "10px" }}>
                <Image
                    src="/images/adobelogo.jpeg"
                    alt="SVG Example"
                    objectFit="contain"
                    width="100px"
                    height="40px"
                />
                <Text UNSAFE_style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Roadmap
                </Text>
                <Badge variant="neutral" UNSAFE_className="beta-badge">BETA</Badge>
            </Flex>

            {/* Center: Search Box */}
            <View flex>
                <Flex justifyContent="center">
                    <SearchField
                        placeholder="Search"
                        UNSAFE_className="custom-search"
                    />
                </Flex>
            </View>

            {/* Right: Placeholder for future actions */}
            <View width="size-1600"></View>
        </View>
    );
};

export default HeaderComponent;
