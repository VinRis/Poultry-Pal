import Diagnosis from "./diagnosis-form";

export default function DiagnosePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="text-center">
        <p className="mt-2 text-muted-foreground text-lg">
          Upload a clear photo of the sick bird or droppings to get a diagnosis and recommended actions.
        </p>
      </div>
      <div className="mt-8">
        <Diagnosis />
      </div>
    </div>
  );
}
