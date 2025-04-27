"use client"

import Image from "next/image"

interface BlogPost {
  id: number
  title: string
  date: string
  imageSrc: string
  url: string
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "[콘텐츠 AI] AI가 대세라는데 우리 회사에 어떻게 활용할 수 있을까?",
      date: "2025.08.17",
      imageSrc: "https://i.pinimg.com/736x/14/b7/05/14b705fa261b1ab5dbbee32a601a253a.jpg",
      url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%BD%98%ED%85%90%EC%B8%A0-ai-ai%EA%B0%80-%EB%8C%80%EC%84%B8%EB%9D%BC%EB%8A%94%EB%8D%B0-%EC%9A%B0%EB%A6%AC-%ED%9A%8C%EC%82%AC%EC%97%90-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-986706f87df",
    },
    {
      id: 2,
      title: "요즘 이슈인 초거대 AI를 데이터 보안 문제 없이 사용할 수 있을까?",
      date: "2025.08.03",
      imageSrc: "https://i.pinimg.com/736x/28/e3/c6/28e3c68e36eb1b330bb7b35e159337ce.jpg",
      url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9A%94%EC%A6%98-%EC%9D%B4%EC%8A%88%EC%9D%B8-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EB%A5%BC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B3%B4%EC%95%88-%EB%AC%B8%EC%A0%9C-%EC%97%86%EC%9D%B4-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C-9f4ea5abf88",
    },
    {
      id: 3,
      title: "자연어에 이어 이미지도 이제 초거대 AI의 득점 시작?",
      date: "2025.08.03",
      imageSrc:
        "https://i.pinimg.com/736x/81/2f/20/812f2077e9815b35ce4789d24a49b981.jpg",
      url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%9E%90%EC%97%B0%EC%96%B4%EC%97%90-%EC%9D%B4%EC%96%B4-%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%8F%84-%EC%9D%B4%EC%A0%9C-%EC%B4%88%EA%B1%B0%EB%8C%80-ai%EC%9D%98-%EB%8F%85%EC%A0%90-%EC%8B%9C%EC%9E%91-fbd6dbaafacb",
    },
    {
      id: 4,
      title: "스탠포드 연구소와 벤처가 바라본 AI 동향: AI Index Report 2023",
      date: "2025.08.03",
      imageSrc:
        "https://i.pinimg.com/736x/f9/c3/db/f9c3db06ef9dee6428f38332c6fbd3bb.jpg",
      url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/%EC%8A%A4%ED%83%A0%ED%8F%AC%EB%93%9C-%EC%97%B0%EA%B5%AC%EC%86%8C%EC%99%80-%EB%A0%9B%EC%84%9C%EA%B0%80-%EB%B0%94%EB%9D%BC%EB%B3%B8-ai-%EB%8F%99%ED%96%A5-ai-index-report-2023-5ce69a86a3de",
    },
    {
      id: 5,
      title: "OpenAI의 상표권 문제, 너희 이제 진짜 CloseAI!?",
      date: "2025.08.03",
      imageSrc: "https://i.pinimg.com/736x/37/5f/ff/375fff127fbc42ea2c95ad3118c779ba.jpg",
      url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/openai%EC%9D%98-%EC%83%81%ED%91%9C%EA%B6%8C-%EB%AC%B8%EC%A0%9C-%EB%84%88%ED%9D%AC-%EC%9D%B4%EC%A0%9C-%EC%A7%84%EC%A7%A0-closeai%EB%8B%88-b76de3827540",
    },
    {
      id: 6,
      title: "AI에서 '멀티모달'이 무엇이고 왜 중요할까?",
      date: "2025.08.03",
      imageSrc: "https://i.pinimg.com/736x/72/08/4e/72084e6ead0494777077769b16d172cb.jpg",
      url: "https://medium.com/%EB%A0%9B%EC%84%9C-%ED%8C%80-%EB%B8%94%EB%A1%9C%EA%B7%B8/ai%EC%97%90%EC%84%9C-%EB%A9%80%ED%8B%B0%EB%AA%A8%EB%8B%AC%EC%9D%B4-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%99%9C-%EC%A4%91%EC%9A%94%ED%95%A0%EA%B9%8C-83b1733414f0",
    },
  ]

  return (
    <div className="w-full overflow-hidden py-16">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-bold text-black">버전트의 다양한 이야기</h2>
        <a
          href="#"
          className="px-5 py-2 border border-black rounded-lg text-black hover:bg-black hover:text-white transition-colors duration-300 font-medium"
        >
          더 알아보기
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <a href={post.url} key={post.id} className="group" target="_blank" rel="noopener noreferrer">
            <div className="transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={post.imageSrc || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 px-2">
                <h3 className="text-xl font-medium mb-3 line-clamp-2 text-black group-hover:text-[#664938] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
