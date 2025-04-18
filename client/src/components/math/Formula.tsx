import { useEffect, useRef } from "react";

interface FormulaProps {
  /**
   * The LaTeX formula to render
   */
  formula: string;
  
  /**
   * Whether to render the formula in display mode (centered, larger)
   * @default false
   */
  displayMode?: boolean;
  
  /**
   * Additional CSS class names to apply to the formula container
   */
  className?: string;
  
  /**
   * Description or explanation for the formula (optional)
   */
  description?: string;
}

/**
 * Formula component that renders LaTeX mathematical formulas using KaTeX
 */
const Formula = ({ 
  formula, 
  displayMode = false, 
  className = "", 
  description 
}: FormulaProps) => {
  const formulaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (formulaRef.current && window.katex) {
      try {
        window.katex.render(formula, formulaRef.current, {
          throwOnError: false,
          displayMode: displayMode,
          trust: true,
          strict: false
        });
      } catch (error) {
        console.error("Error rendering formula:", error);
        if (formulaRef.current) {
          formulaRef.current.textContent = `Error rendering formula: ${formula}`;
        }
      }
    }
  }, [formula, displayMode]);

  return (
    <div className={`bg-gray-50 p-3 rounded-lg ${className}`}>
      <div 
        ref={formulaRef}
        className={displayMode ? "flex justify-center" : "math-formula"}
      >
        {formula}
      </div>
      {description && (
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      )}
    </div>
  );
};

export default Formula;
