import { copyTextToClipboard, showHUD } from "@raycast/api"

export default async () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentDate.getDay()];
    const formattedDate = `${year}-${month}-${day} ${week}`;
    await copyTextToClipboard(formattedDate)
    showHUD(`${formattedDate} 进入剪切板`)
}
