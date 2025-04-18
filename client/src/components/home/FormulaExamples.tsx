import { useMemo, useEffect } from "react";
import { Calculator, Shapes, BarChart4 } from "lucide-react";

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
          displayMode: true
        });
      });
    }
  }, [formula]);

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
      <div className="math-formula font-bold text-center mb-3">{formula}</div>
      <p className="text-gray-600 text-sm mt-2 text-center">{description}</p>
    </div>
  );
};

const FormulaExamples = () => {
  const formulas = useMemo(() => [
    {
      section: "Đại số",
      icon: <Calculator className="h-5 w-5 text-blue-600 mr-2" />,
      color: "border-l-blue-600",
      items: [
        { formula: "(a + b)^2 = a^2 + 2ab + b^2", description: "Bình phương của tổng hai số" },
        { formula: "(a - b)^2 = a^2 - 2ab + b^2", description: "Bình phương của hiệu hai số" },
        { formula: "(a + b)(a - b) = a^2 - b^2", description: "Nhân tổng với hiệu của hai số" },
        { formula: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3", description: "Lập phương của tổng hai số" }
      ]
    },
    {
      section: "Hình học",
      icon: <Shapes className="h-5 w-5 text-purple-600 mr-2" />,
      color: "border-l-purple-600",
      items: [
        { formula: "V_{chóp} = \\frac{1}{3} \\times S_{đáy} \\times h", description: "Thể tích của hình chóp" },
        { formula: "S_{xq chóp tam giác đều} = 3 \\times \\frac{1}{2} \\times a \\times h'", description: "Diện tích xung quanh của hình chóp tam giác đều" },
        { formula: "S_{xq chóp tứ giác đều} = 4 \\times \\frac{1}{2} \\times a \\times h'", description: "Diện tích xung quanh của hình chóp tứ giác đều" }
      ]
    },
    {
      section: "Thống kê",
      icon: <BarChart4 className="h-5 w-5 text-green-600 mr-2" />,
      color: "border-l-green-600",
      items: [
        { formula: "\\bar{x} = \\frac{\\sum_{i=1}^{n} x_i}{n}", description: "Trung bình cộng của dãy số" },
        { formula: "\\text{Mode = giá trị xuất hiện nhiều nhất}", description: "Mốt (giá trị nhiều nhất)" },
        { formula: "\\text{Trung vị = giá trị ở giữa dãy đã sắp xếp}", description: "Trị trung vị của dãy số" }
      ]
    }
  ], []);

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-gray-900">Công thức quan trọng</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {formulas.map((formulaSection, index) => (
          <div key={index} className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 border-l-[5px] ${formulaSection.color}`}>
            <div className="p-5">
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-4 flex items-center">
                {formulaSection.icon}
                {formulaSection.section}
              </h3>
              <div className="space-y-4">
                {formulaSection.items.map((formula, idx) => (
                  <Formula key={idx} formula={formula.formula} description={formula.description} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormulaExamples;
