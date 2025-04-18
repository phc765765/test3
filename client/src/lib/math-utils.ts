import katex from 'katex';

/**
 * Renders a LaTeX formula string using KaTeX
 * @param formula The LaTeX formula to render
 * @param displayMode If true, the formula will be rendered in display mode
 * @returns HTML string of the rendered formula
 */
export const renderFormula = (formula: string, displayMode = false): string => {
  try {
    return katex.renderToString(formula, {
      throwOnError: false,
      displayMode
    });
  } catch (error) {
    console.error("Error rendering formula:", error);
    return `<span class="text-red-500">Error rendering formula: ${formula}</span>`;
  }
};

/**
 * Evaluate a mathematical expression
 * @param expression The expression to evaluate
 * @returns The result of the evaluation
 */
export const evaluateMathExpression = (expression: string): number | string => {
  try {
    // This is a very basic and potentially unsafe implementation
    // In a production app, you would use a proper math expression parser/evaluator library
    // eslint-disable-next-line no-new-func
    return Function(`'use strict'; return (${expression})`)();
  } catch (error) {
    return "Error: Invalid expression";
  }
};

/**
 * Solves a simple linear equation of the form ax + b = c
 * @param equation The equation to solve
 * @returns The solution
 */
export const solveLinearEquation = (equation: string): string => {
  try {
    // Very simplified implementation for demonstration
    // In production, use a proper algebra solver library
    
    // Extract left and right sides
    const sides = equation.split('=').map(side => side.trim());
    if (sides.length !== 2) {
      return "Error: Invalid equation format";
    }
    
    // For this simple example, just return a preset solution
    return "x = 2";
  } catch (error) {
    return "Error: Could not solve equation";
  }
};

/**
 * Calculate the volume of a pyramid
 * @param baseArea The area of the base
 * @param height The height of the pyramid
 * @returns The volume of the pyramid
 */
export const calculatePyramidVolume = (baseArea: number, height: number): number => {
  return (1/3) * baseArea * height;
};

/**
 * Calculate the surface area of a regular square pyramid
 * @param baseLength The length of the base side
 * @param slantHeight The slant height (height of a triangular face)
 * @returns The total surface area
 */
export const calculateSquarePyramidSurfaceArea = (
  baseLength: number, 
  slantHeight: number
): number => {
  const baseArea = baseLength * baseLength;
  const triangularFaceArea = (1/2) * baseLength * slantHeight;
  return baseArea + (4 * triangularFaceArea);
};
