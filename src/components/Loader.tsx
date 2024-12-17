import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html
      center
      className="bg-black/80 w-screen h-screen absolute z-50 flex justify-center items-center"
    >
      {progress} % loaded
    </Html>
  );
}
