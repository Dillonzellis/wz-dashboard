import Image from "next/image";

export const KbIntro = () => {
  return (
    <>
      <div className="mb-2 text-4xl font-bold">The Kyle Calculator</div>
      <p className="mb-6 text-lg text-gray-400">
        Because the math is just too damn hard
      </p>
      <Image
        src="/kb-calc-avatar.jpg"
        alt="Kyle Calculator Avatar"
        height={320}
        width={320}
        className="mb-8 max-w-[150px] rounded-full border-1 border-neutral-100 object-contain shadow-lg"
      />
      <div className="pb-8 text-center text-gray-300 italic">
        &quot;guys... there is uhhh an average 2.7 people per team...&quot;
      </div>
    </>
  );
};
