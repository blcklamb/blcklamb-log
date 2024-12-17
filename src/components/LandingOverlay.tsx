import Link from "next/link";
import { SparklesCore } from "./ui/sparkles";

export default function LandingOverlay() {
  return (
    <div className="absolute top-0 z-20 w-full h-full flex flex-col justify-center text-center">
      <div className="flex flex-col items-center justify-center">
        <span className="absolute z-10 mx-auto text-white flex font-bold text-center ">
          깜냥을 쫓는 개발자, 김채정입니다.
        </span>
        <span className="relative top-0 w-fit h-auto justify-center blur-sm flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-bold text-transparent text-center select-auto">
          깜냥을 쫓는 개발자, 김채정입니다.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl md:text-6xl box-content font-extrabold text-transparent text-center select-none">
          BLCKLAMB.LOG
        </span>
        <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-3xl md:text-6xl font-extrabold text-transparent text-center select-auto">
          BLCKLAMB.LOG
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <Link href="/posts/all" className="z-10">
          <button
            type="button"
            className="font-bold px-4 py-2 rounded-sm bg-gray-700"
          >
            포스트 구경하기
          </button>
        </Link>
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
