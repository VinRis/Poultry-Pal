import PageHeader from "@/components/common/page-header";
import DiagnosisForm from "./diagnosis-form";

export default function DiagnosePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="AI Disease Diagnosis"
        description="Upload a picture of a sick chicken or its droppings for analysis."
      />
      <div className="mt-8">
        <DiagnosisForm />
      </div>
    </div>
  );
}
