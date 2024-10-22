import { Checkbox, Group, Input } from "@mantine/core"

export const FieldCheckbox: React.FC = ({createHelpText}) => {
    return (
        <div>
            <Group>
                <Checkbox
                    defaultChecked
                    color="violet"
                    radius="xl"
                    size="md"
                />
                <Input variant="unstyled" size="md" placeholder="Option 1" onChange={createHelpText} />
            </Group>
            <Input variant="unstyled" placeholder="Hepl text" />
        </div>
    )
}