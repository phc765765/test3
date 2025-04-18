import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Curriculum from "@/pages/Curriculum";
import StudyMaterials from "@/pages/StudyMaterials";
import Exercises from "@/pages/Exercises";
import ExerciseDetails from "@/pages/ExerciseDetails";
import Quizzes from "@/pages/Quizzes";
import Tools from "@/pages/Tools";
import SimilarTriangles from "@/pages/SimilarTriangles";
import AlgebraicExpressions from "@/pages/AlgebraicExpressions";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/curriculum" component={Curriculum} />
      <Route path="/study-materials" component={StudyMaterials} />
      <Route path="/exercises" component={Exercises} />
      <Route path="/exercises/:category" component={Exercises} />
      <Route path="/exercises/:category/:subcategory" component={Exercises} />
      <Route path="/exercises/:category/:subcategory/:id" component={ExerciseDetails} />
      <Route path="/quizzes" component={Quizzes} />
      <Route path="/tools" component={Tools} />
      <Route path="/similar-triangles" component={SimilarTriangles} />
      <Route path="/algebraic-expressions" component={AlgebraicExpressions} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-grow">
            <Router />
          </div>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
