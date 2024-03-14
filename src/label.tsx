import { copyTextToClipboard, showHUD } from "@raycast/api"
//02-mar29-
export default async () => {
    const currentDate = new Date();
    //const year = currentDate.getFullYear().toString().slice(2);
    const month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'][currentDate.getMonth()];
    const monthnum = (currentDate.getMonth() +1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${monthnum}-${month}${day}-`;
    await copyTextToClipboard(formattedDate)
    showHUD(`${formattedDate} 进入剪切板`)
}
