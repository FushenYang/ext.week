import { copyTextToClipboard, showHUD,LaunchProps } from "@raycast/api"


interface Arguments {
    shift: string;
}

export default async (props: LaunchProps<{ arguments: Arguments }>) => {
    const { shift } = props.arguments;
    const day_change = parseInt(shift) || 0;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + day_change);
    // currentDate.setDate(currentDate.getDate() + shift);
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1 ).toString();
    const day = currentDate.getDate().toString();
    const formattedDate = `${year}-${month}-${day}`;
    await copyTextToClipboard(formattedDate)
    showHUD(`${formattedDate} 进入剪切板`)
}
