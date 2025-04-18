import { useMemo, useEffect } from "react";

interface FormulaProps {
  formula: string;
  description: string;
}

const Formula = ({ formula, description }: FormulaProps) => {
  // Rendering formula with KaTeX
  useEffect(() => {
    if (typeof window !== 'undefined' && window.katex) {
      const elements = document.querySelectorAll('.math-formula');
      elements.forEach(element => {
        window.katex.render(element.textContent || '', element as HTMLElement, {
          throwOnError: false,
          displayMode: false
        });
      });
    }
  }, [formula]);

  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <div className="math-formula">{formula}</div>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

const FormulaExamples = () => {
  const formulas = useMemo(() => [
    {
      section: "Hằng đẳng thức đáng nhớ",
      items: [
        { formula: "(a + b)^2 = a^2 + 2ab + b^2", description: "Bình phương của tổng hai số" },
        { formula: "(a - b)^2 = a^2 - 2ab + b^2", description: "Bình phương của hiệu hai số" },
        { formula: "(a + b)(a - b) = a^2 - b^2", description: "Nhân tổng với hiệu của hai số" }
      ]
    },
    {
      section: "Công thức tính thể tích và diện tích",
      items: [
        { formula: "V_{chóp} = \\frac{1}{3} \\times S_{đáy} \\times h", description: "Thể tích của hình chóp" },
        { formula: "S_{xq chóp tam giác đều} = 3 \\times \\frac{1}{2} \\times a \\times h'", description: "Diện tích xung quanh của hình chóp tam giác đều" },
        { formula: "S_{xq chóp tứ giác đều} = 4 \\times \\frac{1}{2} \\times a \\times h'", description: "Diện tích xung quanh của hình chóp tứ giác đều" }
      ]
    }
  ], []);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Công thức quan trọng</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formulas.map((formulaSection, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 p-5">
            <h3 className="font-heading font-bold text-lg text-gray-900 mb-3">{formulaSection.section}</h3>
            <div className="space-y-3">
              {formulaSection.items.map((formula, idx) => (
                <Formula key={idx} formula={formula.formula} description={formula.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormulaExamples;
