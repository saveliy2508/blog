type Mods = Record<string, boolean | string>

/**
 * Аналог библиотеки classNames
 * @param cls основной класс
 * @param mods модификаторы
 * @param additional дополнительные классы
 */

export function classNames (cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([className, value])=> Boolean(value))
            .map(([className])=> className)
    ].join(' ')
}
