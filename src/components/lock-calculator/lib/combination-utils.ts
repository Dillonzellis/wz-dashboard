import { CombinationPattern, CombinationResult } from "./types";

export function parsePattern(input: string): CombinationPattern {
  const pattern = input.toUpperCase().split("");
  const unknownPositions: number[] = [];
  const usedDigits = new Set<string>();

  pattern.forEach((char, index) => {
    if (char === "X" || char === "?") {
      unknownPositions.push(index);
    } else if (/[0-9]/.test(char)) {
      usedDigits.add(char);
    }
  });

  const availableDigits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ].filter((digit) => !usedDigits.has(digit));

  return {
    pattern,
    unknownPositions,
    usedDigits,
    availableDigits,
  };
}

export function getPermutationsIterative(
  arr: string[],
  length: number,
): string[][] {
  if (length === 0) return [[]];
  if (length === 1) return arr.map((item) => [item]);

  const result: string[][] = [];

  switch (length) {
    case 2:
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (i !== j) {
            result.push([arr[i], arr[j]]);
          }
        }
      }
      break;

    case 3:
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < arr.length; k++) {
            if (i !== j && i !== k && j !== k) {
              result.push([arr[i], arr[j], arr[k]]);
            }
          }
        }
      }
      break;

    case 4:
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < arr.length; k++) {
            for (let l = 0; l < arr.length; l++) {
              if (
                i !== j &&
                i !== k &&
                i !== l &&
                j !== k &&
                j !== l &&
                k !== l
              ) {
                result.push([arr[i], arr[j], arr[k], arr[l]]);
              }
            }
          }
        }
      }
      break;

    case 5:
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < arr.length; k++) {
            for (let l = 0; l < arr.length; l++) {
              for (let m = 0; m < arr.length; m++) {
                if (
                  i !== j &&
                  i !== k &&
                  i !== l &&
                  i !== m &&
                  j !== k &&
                  j !== l &&
                  j !== m &&
                  k !== l &&
                  k !== m &&
                  l !== m
                ) {
                  result.push([arr[i], arr[j], arr[k], arr[l], arr[m]]);
                }
              }
            }
          }
        }
      }
      break;

    case 6:
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          for (let k = 0; k < arr.length; k++) {
            for (let l = 0; l < arr.length; l++) {
              for (let m = 0; m < arr.length; m++) {
                for (let n = 0; n < arr.length; n++) {
                  if (
                    i !== j &&
                    i !== k &&
                    i !== l &&
                    i !== m &&
                    i !== n &&
                    j !== k &&
                    j !== l &&
                    j !== m &&
                    j !== n &&
                    k !== l &&
                    k !== m &&
                    k !== n &&
                    l !== m &&
                    l !== n &&
                    m !== n
                  ) {
                    result.push([
                      arr[i],
                      arr[j],
                      arr[k],
                      arr[l],
                      arr[m],
                      arr[n],
                    ]);
                  }
                }
              }
            }
          }
        }
      }
      break;

    default:
      return [];
  }

  return result;
}

export function generateCombinations(input: string): CombinationResult {
  const { pattern, unknownPositions, availableDigits } = parsePattern(input);

  if (unknownPositions.length > availableDigits.length) {
    throw new Error("Not enough available digits for the unknown positions");
  }

  const permutations = getPermutationsIterative(
    availableDigits,
    unknownPositions.length,
  );
  const combinations: string[] = [];

  permutations.forEach((perm) => {
    const combination = [...pattern];
    unknownPositions.forEach((pos, i) => {
      combination[pos] = perm[i];
    });
    combinations.push(combination.join(""));
  });

  return {
    combinations,
    count: combinations.length,
    pattern: input,
  };
}
