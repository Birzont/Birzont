"use client"

import Link from "next/link"

export default function CareersSection() {
  return (
    <div className="w-full overflow-hidden py-16">
      <div
        className="rounded-3xl py-24 px-8 md:px-12 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?cs=srgb&dl=pexels-eberhardgross-1421903.jpg&fm=jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black opacity-35"></div>

        {/* Content positioned above the overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[200px]">
          <h2 className="text-4xl font-bold mb-6 text-white">합류할 곳을 찾고 있나요?</h2>
          <p className="text-white/80 mb-2">버전트에서 아이디어를 실현하세요.</p>
          <p className="text-white/80 mb-10">우리는 인재 여러분들을 기다리고 있습니다.</p>

          <div className="flex justify-center">
            <Link
              href="mailto:contact@birzont.com"
              className="inline-block border border-white/70 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg py-3 px-8 font-medium"
            >
              채용공고 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
