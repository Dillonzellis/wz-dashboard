export interface CombinationPattern {
  pattern: string[];
  unknownPositions: number[];
  usedDigits: Set<string>;
  availableDigits: string[];
}

export interface CombinationResult {
  combinations: string[];
  count: number;
  pattern: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}
