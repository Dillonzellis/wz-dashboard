import Image from "next/image";

export const KbIntro = () => {
  return (
    <>
      <div className="mb-2 text-4xl font-bold">The Kyle Calculator</div>
      <p className="mb-6 text-lg text-gray-400">
        Because the math is just too damn hard
      </p>
      {/* <Image */}
      {/*   src="/kb-calc-avatar.jpeg" */}
      {/*   alt="Kyle Calculator Avatar" */}
      {/*   height={200} */}
      {/*   width={200} */}
      {/*   className="mb-8 rounded-sm shadow-lg" */}
      {/* /> */}
      <div className="pb-8 text-center text-gray-300 italic">
        &quot;guys... there is uhhh an average 2.7 people per team...&quot;
      </div>
    </>
  );
};
