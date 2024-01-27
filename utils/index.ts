export const removeSymbol = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
