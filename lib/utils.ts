export function formatDate(date: Date | string) {
    if (typeof date === "string") return date;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export function formatDateLabel(dateStr: string): string {
    if (dateStr.toLowerCase() === "now") return "Present";
    const [day, month, year] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

export function calculateDuration(startStr: string, endStr: string): string {
    const [sDay, sMonth, sYear] = startStr.split("/").map(Number);
    const startDate = new Date(sYear, sMonth - 1, sDay);

    let endDate: Date;
    if (endStr.toLowerCase() === "now") {
        endDate = new Date();
    } else {
        const [eDay, eMonth, eYear] = endStr.split("/").map(Number);
        endDate = new Date(eYear, eMonth - 1, eDay);
    }

    const totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const parts = [];
    if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);
    return parts.join(", ");
}

export function formatLink(input: string) {
    const match = input.match(/https?:\/\/[^?\s]+/);
    return match ? match[0].replace(/https?:\/\//, '') : input;
}