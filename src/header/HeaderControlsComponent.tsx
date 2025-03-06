import React, { useState } from "react";
import { Provider, defaultTheme, Button, ToggleButton, Flex } from "@adobe/react-spectrum";
import { DateRangePicker } from "@react-spectrum/datepicker";
import Calendar from "@spectrum-icons/workflow/Calendar";
import GraphBarVertical from "@spectrum-icons/workflow/GraphBarVertical";
import { CalendarDate } from "@internationalized/date";
import { Eye } from "lucide-react";
import Maximize from "@spectrum-icons/workflow/Maximize";
import { parseDate } from "@internationalized/date";
import { RangeValue } from "@react-types/shared";


const HeaderControlsComponent: React.FC = () => {
    const [view, setView] = useState("monthly");
    const [value, setValue] = useState({
        start: new CalendarDate(2024, 1, 1),
        end: new CalendarDate(2025, 8, 30),
    });

    return (
        <Provider theme={defaultTheme}>
            <Flex alignItems="center" gap="size-150" UNSAFE_className="header-controls">
                {/* Toggle Button - Monthly / Quarterly */}
                <div className="toggle-container">
                    <ToggleButton
                        isSelected={view === "monthly"}
                        onPress={() => setView("monthly")}
                        UNSAFE_className={`toggle-btn ${view === "monthly" ? "selected" : ""}`}
                    >
                        <Calendar /> Monthly
                    </ToggleButton>
                    <ToggleButton
                        isSelected={view === "quarterly"}
                        onPress={() => setView("quarterly")}
                        UNSAFE_className={`toggle-btn ${view === "quarterly" ? "selected" : ""}`}
                    >
                        <GraphBarVertical /> Quarterly
                    </ToggleButton>
                </div>

                {/* Date Range Picker */}
                
                    <DateRangePicker
                    onChange={(newValue) => newValue && setValue(newValue)}
                    granularity="day"
                    UNSAFE_className="custom-date-picker gray-border"
                    value={value}
                    />
               

                {/* Presentation Mode Button */}
                <Button variant="primary" UNSAFE_className="icon-button gray-border">
                    <Maximize /> Presentation Mode
                </Button>

                {/* Legend Button */}
            <Button variant="primary" UNSAFE_className="icon-button gray-border">
                    <Eye /> Legend
                </Button>
            </Flex>
        </Provider>
    );
};

export default HeaderControlsComponent;
