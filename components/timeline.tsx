"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface TimelineEvent {
  year: number
  title: string
  subtitle: string
  description: string
  imageSrc: string
}

export default function Timeline() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: 2025,
      title: "Innovation begins",
      subtitle: "첫 프로토타입 런칭",
      description:
        "첫 프로토타입을 런칭하였습니다.",
      imageSrc: "https://img.freepik.com/free-photo/gyeongbokgung-palace_74190-3180.jpg?semt=ais_hybrid&w=740",
    },
    {
      year: 2024,
      title: "Series A Funding",
      subtitle: "시리즈 A 투자 유치",
      description:
        "주요 벤처 캐피탈로부터 시리즈 A 투자를 유치하여 기술 개발 및 팀 확장을 가속화했습니다. 핵심 AI 알고리즘 개발을 완료했습니다.",
      imageSrc: "https://m.motemote.kr/file_data/motemote20160302/2022/10/12/61ef6bdb2d66b82aa4f992b11be460e6.jpg",
    },
    {
      year: 2023,
      title: "Research Breakthrough",
      subtitle: "연구 성과 달성",
      description:
        "AI 분야에서 중요한 연구 성과를 달성하여 주요 학술 저널에 게재되었습니다. 초기 팀을 구성하고 비전을 확립했습니다.",
      imageSrc:
        "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      year: 2022,
      title: "Company Founded",
      subtitle: "회사 설립",
      description:
        "Birzont의 창립자들이 모여 회사를 설립했습니다. AI를 통해 인류와 가까운 친구들의 미래에 기여한다는 비전을 가지고 시작했습니다.",
      imageSrc:
        "https://i.namu.wiki/i/giX9o1762e3S2xNnyvmLXnE_wSMvJcWZB5EUnFw3TBo2KDxHVSDS9Vav9R7vlSldjbHc7fQi2t2oc1qrXr-TKA.webp",
    },
  ]

  const [activeYear, setActiveYear] = useState<number>(2025)
  const activeEvent = timelineEvents.find((event) => event.year === activeYear) || timelineEvents[0]

  // 오른쪽 타임라인과 왼쪽 카드에 대한 ref 생성
  const timelineRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [cardHeight, setCardHeight] = useState<number | null>(null)

  // 타임라인 높이에 따라 카드 높이 조정
  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const timelineHeight = timelineRef.current.offsetHeight
        setCardHeight(timelineHeight)
      }
    }

    // 초기 높이 설정
    updateHeight()

    // 창 크기 변경 시 높이 업데이트
    window.addEventListener("resize", updateHeight)

    // 타임라인 항목 변경 시에도 높이 업데이트
    const timeoutId = setTimeout(updateHeight, 100)

    return () => {
      window.removeEventListener("resize", updateHeight)
      clearTimeout(timeoutId)
    }
  }, [activeYear])

  return (
    <div className="w-full overflow-hidden py-16 bg-white">
      <div className="w-full py-12">
        <div className="flex flex-col md:flex-row w-full mb-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-600 font-medium mb-2">OUR JOURNEY</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#333]">Company Timeline</h2>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Birzont의 성장 과정과 주요 이정표를 확인하세요. 우리는 지속적인 혁신과 발전을 통해 AI 기술의 미래를
              만들어가고 있습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          {/* 왼쪽 카드 - 이미지와 내용 */}
          <div
            ref={cardRef}
            className="w-full md:w-3/5 relative rounded-3xl overflow-hidden"
            style={{
              height: cardHeight ? `${cardHeight}px` : "auto",
              minHeight: "500px", // 최소 높이 설정
            }}
          >
            <Image
              src={activeEvent.imageSrc || "/placeholder.svg"}
              alt={`${activeEvent.year} - ${activeEvent.title}`}
              fill
              className="object-cover transition-opacity duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 ease-in-out"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-6xl font-bold mb-2">{activeEvent.year}</h2>
              <h3 className="text-3xl font-bold mb-2">{activeEvent.title}</h3>
              <p className="text-xl mb-4">{activeEvent.subtitle}</p>
              <p className="text-lg">{activeEvent.description}</p>
            </div>
          </div>

          {/* 오른쪽 타임라인 */}
          <div ref={timelineRef} className="w-full md:w-2/5 bg-gray-50 rounded-3xl p-8 flex items-start h-auto">
            <div className="relative w-full">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-black"></div>

              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative pl-12 py-6 cursor-pointer transition-all duration-300 group ${
                    activeYear === event.year ? "opacity-100" : "opacity-90 hover:opacity-100"
                  }`}
                  onClick={() => setActiveYear(event.year)}
                >
                  <div
                    className={`absolute left-4 w-4 h-4 rounded-full -translate-x-1/2 transition-all duration-300 ${
                      activeYear === event.year
                        ? "bg-[#146bf7] transform scale-125"
                        : "bg-black group-hover:bg-[#146bf7]"
                    }`}
                  ></div>
                  <h3
                    className={`text-5xl font-bold transition-all duration-300 ${
                      activeYear === event.year
                        ? "text-[#146bf7] opacity-100"
                        : "text-black group-hover:text-[#146bf7] opacity-90"
                    }`}
                  >
                    {event.year}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
