import { ActionButton } from "@adobe/react-spectrum";

interface LinkButtonProps {
    name?: string;
}

const LinkButtonComponent: React.FC<LinkButtonProps> = ({ name }) => {
    return (
        <ActionButton
            isQuiet
            UNSAFE_style={{
                color: "#4381D9",
                textDecoration: "none",
                fontWeight: "normal",
            }}
        >
            {name}
        </ActionButton>
    );
}
export default LinkButtonComponent;