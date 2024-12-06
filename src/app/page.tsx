import LandingOverlay from "@/components/LandingOverlay";
import FloatingSheep from "@/components/LandingSample";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={null}>
        <FloatingSheep />
      </Suspense>
      <LandingOverlay />
    </div>
  );
}
