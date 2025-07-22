import { ValidationResult } from "../types";

export function validateInput(value: string): ValidationResult {
  if (!/^[0-9X]*$/.test(value)) {
    return { isValid: false, error: "Only digits (0-9) and X allowed" };
  }

  const digits = value.split("").filter((char) => char !== "X");
  const uniqueDigits = new Set(digits);

  if (digits.length !== uniqueDigits.size) {
    return { isValid: false, error: "Duplicate digits not allowed" };
  }

  return { isValid: true };
}

export function validatePattern(input: string): ValidationResult {
  if (input.length !== 6) {
    return { isValid: false, error: "Please enter exactly 6 characters" };
  }

  const unknownCount = (input.match(/[X?]/g) || []).length;
  if (unknownCount === 0) {
    return { isValid: false, error: "At least one X required" };
  }

  return { isValid: true };
}
