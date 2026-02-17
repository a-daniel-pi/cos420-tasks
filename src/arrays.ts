/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length == 0) {
        return [];
    }
    return [numbers.at(0), numbers.at(-1)];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((value: number): number => value * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((value: string): number => {
        const result: number = parseInt(value);
        if (result != result) {
            // parseInt returns nan on invalid input
            return 0;
        } else {
            return result;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((value: string): number => {
        let money: string = value;
        if (value.at(0) == "$") {
            money = value.slice(1);
        }
        const result: number = parseInt(money);
        if (result != result) {
            // parseInt returns nan on invalid input
            return 0;
        } else {
            return result;
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
        .filter((msg: string): boolean => msg.at(-1) != "?")
        .map((msg: string): string => {
            if (msg.at(-1) == "!") {
                return msg.toUpperCase();
            }
            return msg;
        });
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.reduce((count: number, value: string): number => {
        if (value.length < 4) {
            return count + 1;
        }
        return count;
    }, 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.reduce((all: boolean, color: string): boolean => {
        if (color == "red") {
            return all;
        }
        if (color == "green") {
            return all;
        }
        if (color == "blue") {
            return all;
        }
        return false;
    }, true);
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum: number = addends.reduce(
        (result: number, value: number): number => result + value,
        0,
    );
    let addeq: string = "0";
    if (addends.length != 0) {
        addeq = addends
            .slice(1)
            .reduce(
                (result: string, value: number): string =>
                    result + "+" + value.toString(),
                addends.at(0),
            );
    }
    return sum.toString() + "=" + addeq;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let result: number[] = [...values];
    let index: number = values.findIndex((value: number): boolean => value < 0);
    if (index == -1) {
        let sum: number = values
            .slice(0, result.length)
            .reduce((prev: number, cur: number): number => prev + cur, 0);
        result.splice(result.length, 0, sum);
    } else {
        let sum: number = values
            .slice(0, index)
            .reduce((prev: number, cur: number): number => prev + cur, 0);
        result.splice(index + 1, 0, sum);
    }
    return result;
}
