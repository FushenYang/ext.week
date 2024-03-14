import { copyTextToClipboard, showHUD } from "@raycast/api"

export default async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hour = currentDate.getHours().toString().padStart(2, '0');
    const minute = currentDate.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${year}${month}${day}${hour}${minute}`;
    await copyTextToClipboard(formattedDate)
    showHUD(`${formattedDate} 进入剪切板`)
}
