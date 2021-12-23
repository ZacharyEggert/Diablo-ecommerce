//sentence case
export function sentenceCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//capital case
export function capitalCase(str: string): string {
    const words = str.split(' ');
    return words.map((word) => sentenceCase(word)).join(' ');
}
