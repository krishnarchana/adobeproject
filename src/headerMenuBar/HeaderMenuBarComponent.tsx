import React from "react";
import { View, Flex, Text, Image, Switch } from "@adobe/react-spectrum";
import DropdownComponent from "../header/DropdownComponent";
import HeaderControlsComponent from "../header/HeaderControlsComponent";
import TransparentDropdown from "../header/TransparentDropdown";
import LinkButtonComponent from "../header/LinkButtonComponent";

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
        <div style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.9)",
        }}>
        <View UNSAFE_style={{ border: "1px solid lightgray" }}>
            <View
                UNSAFE_style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "120px",
                    backgroundColor: "#FBFBFB"
                }}
            >

                <Flex alignItems="center" UNSAFE_style={{ gap: '5px', marginTop: "-30px" }}>
                    <Text UNSAFE_style={{ fontSize: "18px", fontWeight: "bold", color: "#7D7D7D", marginLeft: "30px" }}>
                        DMe Major Moments Roadmap
                    </Text>
                    <DropdownComponent menuItems={actionsArray} selectedItem="action" />
                    <DropdownComponent menuItems={createArray} selectedItem="create" />
                </Flex>

                <View>
                    <Flex justifyContent="center" UNSAFE_style={{
                        marginTop: "-30px"
                    }}>
                        <HeaderControlsComponent></HeaderControlsComponent>
                    </Flex>
                </View>

            </View>
            {/* 2nd view*/ }
            <View
                UNSAFE_style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#FBFBFB"
                }}
            >

                <Flex alignItems="center" UNSAFE_style={{ marginLeft:"25px", gap: '10px', marginTop: "-70px" }}>
                    <Text>Product Group</Text>
                    <Image
                        src="/images/copilot.jpg"
                        alt="SVG Example"
                        objectFit="contain"
                        width="22px"
                        height="22px"
                    />
                    <TransparentDropdown name="CPG"></TransparentDropdown>
                    <TransparentDropdown name="Category (2)"></TransparentDropdown>
                    <TransparentDropdown name="Product All"></TransparentDropdown>
                    <TransparentDropdown name="Web"></TransparentDropdown>
                    <TransparentDropdown name="Event"></TransparentDropdown>
                    <TransparentDropdown name="Advanced"></TransparentDropdown>
                    <LinkButtonComponent name="Clear All"></LinkButtonComponent>
                    <LinkButtonComponent name="Save View"></LinkButtonComponent>
                </Flex>

                <View>
                    <Flex justifyContent="center" UNSAFE_style={{
                        marginTop: "-50px", gap: "10px"
                    }}>
                        <TransparentDropdown name="View Options"></TransparentDropdown>
                        <Switch>Compact View</Switch>
                    </Flex>
                </View>

            </View>
            
            </View>
        </div>

    );
};

export default HeaderMenuBarComponent;
