"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, Plus, Menu, ArrowRight, X } from "lucide-react"

// Import components
import Timeline from "../components/timeline"
import BlogSection from "../components/blog-section"
import CareersSection from "../components/careers-section"

interface AppCardProps {
  title: string
  description: string
  defaultLogoSrc: string
  hoverLogoSrc: string
  bgColor: string
  link: string
  index: number
}

function AppCard({ title, description, defaultLogoSrc, hoverLogoSrc, bgColor, link, index }: AppCardProps) {
  const [showDescription, setShowDescription] = useState(false)
  const [showMobileModal, setShowMobileModal] = useState(false)
  const isMobileView = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  const getModalImage = () => {
    if (index === 0) {
      return "https://birzont.github.io/BirzontArchive/res/Prompistbg.png"
    } else if (index === 1) {
      return "https://play.ht/blog/wp-content/uploads/2024/04/what-is-perplexity-ai.webp"
    } else if (index === 2) {
      return "https://images.indianexpress.com/2025/04/perplexity.jpg"
    }
    return defaultLogoSrc
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    // 초기 설정
    handleResize()

    // 이벤트 리스너 추가
    window.addEventListener("resize", handleResize)

    // 클린업
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleDescription = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      // On mobile, show modal instead
      e.stopPropagation()
      isMobileView.current = true
      setShowMobileModal(true)
    } else {
      setShowDescription(!showDescription)
    }
  }

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const closeModal = () => {
    setShowMobileModal(false)
  }

  return (
    <>
      <div
        className="relative rounded-3xl aspect-square cursor-pointer overflow-hidden transition-all duration-500 flex flex-col group"
        style={{
          backgroundImage: `url(${bgColor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "inherit",
        }}
        onClick={toggleDescription}
      >
        {!showDescription ? (
          <>
            <div className="flex flex-col h-full animate-fadeIn p-4 sm:p-6 md:p-8 relative z-10">
              <div className="flex-grow flex items-center justify-center">
                <div
                  className="relative rounded-xl flex items-center justify-center overflow-hidden transition-all duration-200 bg-transparent"
                  style={{
                    width: isMobile ? "100%" : "clamp(120px, 80%, 240px)",
                    height: isMobile ? "100%" : "clamp(120px, 80%, 240px)",
                    maxWidth: "100%",
                  }}
                >
                  <Image
                    src={defaultLogoSrc || "/placeholder.svg"}
                    alt={title}
                    width={230}
                    height={230}
                    className="object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert w-full h-auto"
                    style={{
                      maxWidth: "clamp(100px, 100%, 230px)",
                      maxHeight: "clamp(100px, 100%, 230px)",
                    }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-0 transition-opacity duration-500">
                    <Image
                      src={defaultLogoSrc || "/placeholder.svg"}
                      alt={title}
                      width={230}
                      height={230}
                      className="object-contain"
                      style={{
                        maxWidth: "clamp(100px, 100%, 230px)",
                        maxHeight: "clamp(100px, 100%, 230px)",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="hidden md:flex justify-between items-center mt-4">
                <h2
                  className="font-bold text-black transition-colors duration-500 group-hover:text-white"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.875rem)" }}
                >
                  {title}
                </h2>
                <button
                  className="bg-black text-white rounded-full flex items-center justify-center border-none cursor-pointer transition-all duration-500 group-hover:bg-white group-hover:text-black"
                  style={{
                    width: "clamp(2rem, 3vw, 2.5rem)",
                    height: "clamp(2rem, 3vw, 2.5rem)",
                  }}
                >
                  <Plus
                    style={{
                      width: "clamp(0.875rem, 1.5vw, 1.25rem)",
                      height: "clamp(0.875rem, 1.5vw, 1.25rem)",
                    }}
                  />
                </button>
              </div>
            </div>
            {/* Mobile title outside the card - hidden in mobile mode */}
            {!isMobile && (
              <h2 className="md:hidden text-black mt-3 font-bold" style={{ fontSize: "clamp(1rem, 5vw, 1.25rem)" }}>
                {title}
              </h2>
            )}
          </>
        ) : (
          // 카드를 클릭했을 때 나타나는 어두운 배경에 radius 적용
          // 기존 div에 rounded-3xl 클래스 추가

          <div className="flex flex-col h-full animate-fadeIn p-8 text-white relative z-10 backdrop-blur-md bg-black/70 rounded-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-md flex items-center justify-center">
                <Image
                  src={defaultLogoSrc || "/placeholder.svg"}
                  alt={`${title} 아이콘`}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <h2
                className="font-bold transition-colors duration-500"
                style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}
              >
                {title}
              </h2>
            </div>
            <div className="flex flex-col">
              <p
                className="transition-colors duration-500 mb-2"
                style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
              >
                {description}
              </p>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit py-2 px-4 border border-white/70 text-white/80 rounded-xl no-underline transition-all duration-500 hover:bg-white hover:text-black hover:border-white flex items-center gap-2"
                style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
                onClick={handleLinkClick}
              >
                바로가기 <ArrowRight size={16} />
              </Link>
            </div>
            <div className="flex-grow"></div>
          </div>
        )}

        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>
      </div>

      {/* Mobile Modal */}
      {showMobileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={closeModal}>
          <div
            className="bg-white rounded-2xl w-full max-w-md max-h-[85vh] overflow-y-auto p-6 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 bg-[#f5f3f0] rounded-xl p-2 px-3">
                <Image
                  src={defaultLogoSrc || "/placeholder.svg"}
                  alt={title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h2 className="text-2xl font-bold text-black leading-tight" style={{ fontSize: "28px" }}>
                  {title}
                </h2>
              </div>
              <button
                className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* 16:9 비율의 이미지 추가 */}
            <div className="relative w-full aspect-video mb-6 overflow-hidden rounded-xl">
              <Image
                src={getModalImage() || "/placeholder.svg"}
                alt={`${title} 이미지`}
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-black">앱 설명</h3>
              <p className="text-gray-700 mb-4">{description}</p>
              <p className="text-gray-700 mb-4">
                이 앱은 사용자 경험을 최우선으로 설계되었으며, 직관적인 인터페이스와 강력한 기능을 제공합니다. 최신
                기술을 활용하여 개발된 이 앱은 사용자의 일상 생활과 업무 효율성을 크게 향상시킵니다.
              </p>
              <p className="text-gray-700">
                다양한 기능과 맞춤형 설정으로 각 사용자의 필요에 맞게 조정할 수 있으며, 지속적인 업데이트를 통해 새로운
                기능과 개선 사항이 추가됩니다.
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-medium"
                onClick={handleLinkClick}
              >
                앱 바로가기 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// 로고 슬라이더 컴포넌트
function LogoSlider() {
  const topRowLogos = [
    {
      name: "Slack",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png",
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
    },
    {
      name: "Facebook",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/2560px-Facebook_logo_%282023%29.svg.png",
    },
    {
      name: "OpenAI",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1280px-OpenAI_Logo.svg.png",
    },
    { name: "Amazon", src: "https://www.allaboutlean.com/wp-content/uploads/2019/10/Amazon-Logo.png" },
    {
      name: "Wrtn",
      src: "https://wrtn.io/wp-content/themes/wrtn-edited/images/logo.svg",
    },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900) // 모바일 기준점 변경
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full overflow-hidden py-16">
      <div className="bg-[#f8f6f0] rounded-3xl py-16 px-8 md:px-12">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-medium mb-2">INTEGRATIONS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#333]">Meet Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
            우리는 세계적인 기업들과 협력하여 혁신적인 AI 솔루션을 개발하고 있습니다. 함께 미래를 만들어가는 파트너들을
            소개합니다.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{
              animation: "marquee 15s linear infinite",
              willChange: "transform",
            }}
          >
            {topRowLogos.map((logo, index) => (
              <div
                key={`logo1-${index}`}
                className={`bg-white rounded-2xl ${isMobile ? "px-6 py-4" : "px-12 py-8"} flex items-center justify-center shadow-sm ${isMobile ? "mx-1" : "mx-5"} hover:shadow-md transition-all duration-300 hover:bg-[#0080ff] hover:text-white group`}
                style={{
                  minWidth: isMobile ? "160px" : "216px",
                  height: isMobile ? "70px" : "96px",
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={144}
                  height={48}
                  className={`${isMobile ? "h-8" : "h-12"} object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert`}
                />
              </div>
            ))}
            {/* 무한 스크롤을 위해 로고 복제 */}
            {topRowLogos.map((logo, index) => (
              <div
                key={`logo1-dup-${index}`}
                className={`bg-white rounded-2xl ${isMobile ? "px-6 py-4" : "px-12 py-8"} flex items-center justify-center shadow-sm ${isMobile ? "mx-1" : "mx-5"} hover:shadow-md transition-all duration-300 hover:bg-[#0080ff] hover:text-white group`}
                style={{
                  minWidth: isMobile ? "160px" : "216px",
                  height: isMobile ? "70px" : "96px",
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={144}
                  height={48}
                  className={`${isMobile ? "h-8" : "h-12"} object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert`}
                />
              </div>
            ))}
            {/* 추가 복제로 더 자연스러운 무한 루프 */}
            {topRowLogos.map((logo, index) => (
              <div
                key={`logo1-triple-${index}`}
                className={`bg-white rounded-2xl ${isMobile ? "px-6 py-4" : "px-12 py-8"} flex items-center justify-center shadow-sm ${isMobile ? "mx-1" : "mx-5"} hover:shadow-md transition-all duration-300 hover:bg-[#0080ff] hover:text-white group`}
                style={{
                  minWidth: isMobile ? "160px" : "216px",
                  height: isMobile ? "70px" : "96px",
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={144}
                  height={48}
                  className={`${isMobile ? "h-8" : "h-12"} object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [fadeTriggered, setFadeTriggered] = useState(false)
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [blinking, setBlinking] = useState(true)
  const [activeIndexes, setActiveIndexes] = useState<Set<number>>(new Set())
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pixelsRef = useRef<HTMLDivElement>(null)
  const fadeInSectionRef = useRef<HTMLElement>(null)
  const pixelElements = useRef<HTMLDivElement[]>([])
  const baseNumPixels = 150
  const navCardRef = useRef<HTMLDivElement>(null)
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([])
  let hideTimeout: NodeJS.Timeout

  useEffect(() => {
    createPixels(baseNumPixels)

    const handleScroll = () => {
      if (window.scrollY > 0) {
        // 50에서 0으로 변경
        setScrolled(true)
        setBlinking(false)
      } else {
        setScrolled(false)
        setBlinking(true)
      }

      if (
        !fadeTriggered &&
        fadeInSectionRef.current &&
        window.scrollY > fadeInSectionRef.current.offsetTop - window.innerHeight + 100
      ) {
        setFadeTriggered(true)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900)
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false)
      }
    }

    // Initial check
    handleResize()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    const blinkInterval = setInterval(blinkRandomPixels, 1000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      clearInterval(blinkInterval)
    }
  }, [fadeTriggered])

  useEffect(() => {
    const updateContentHeight = () => {
      const imageCanvas = document.querySelector(".image-canvas")
      if (!imageCanvas) return

      const canvasHeight = imageCanvas.clientHeight
      document.documentElement.style.setProperty("--canvas-height", `${canvasHeight}px`)

      // 왼쪽 콘텐츠 높이 설정 최적화
      const leftContent = document.querySelector(".left-content")
      if (leftContent) {
        leftContent.style.height = `${canvasHeight}px`
      }
    }

    // 초기 업데이트
    updateContentHeight()

    // 디바운스된 리사이즈 핸들러
    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(updateContentHeight, 100)
    }

    window.addEventListener("resize", handleResize)

    // 이미지 로드 후 한 번만 업데이트
    const imageLoadTimer = setTimeout(updateContentHeight, 500)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(imageLoadTimer)
      clearTimeout(resizeTimer)
    }
  }, [])

  const createPixels = (count: number) => {
    if (!pixelsRef.current) return // 모바일 체크 제거

    pixelsRef.current.innerHTML = ""
    pixelElements.current = []

    // 한 번에 DOM에 추가하기 위한 DocumentFragment 사용
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < count; i++) {
      const pixel = document.createElement("div")
      pixel.classList.add("pixel")
      pixel.style.top = `${Math.random() * 100}%`
      pixel.style.left = `${Math.random() * 100}%`
      pixel.style.position = "absolute"
      pixel.style.width = "2px"
      pixel.style.height = "2px"
      pixel.style.borderRadius = "50%"
      pixel.style.backgroundColor = "#fff"
      pixel.style.opacity = "0"
      pixel.style.transition = "opacity 0.3s ease-in-out, transform 0.5s ease-in-out"

      if (i < 3) pixel.style.backgroundColor = "hotpink"
      else if (i < 5) pixel.style.backgroundColor = "lime"

      fragment.appendChild(pixel)
      pixelElements.current.push(pixel)
    }

    pixelsRef.current.appendChild(fragment)
  }

  const blinkRandomPixels = () => {
    if (!blinking || !pixelElements.current.length) return // 모바일 체크 제거

    const newLitIndexes = new Set<number>()
    const blinkCount = Math.min(30 + Math.floor(baseNumPixels / 20), baseNumPixels)

    while (newLitIndexes.size < blinkCount) {
      const index = Math.floor(Math.random() * pixelElements.current.length)
      newLitIndexes.add(index)
    }

    // 상태 업데이트 최소화
    if (JSON.stringify([...newLitIndexes].sort()) !== JSON.stringify([...activeIndexes].sort())) {
      setActiveIndexes(newLitIndexes)
    }

    pixelElements.current.forEach((pixel, idx) => {
      if (newLitIndexes.has(idx)) {
        pixel.style.opacity = "0.8"
        pixel.style.transform = "translateY(0)"
      } else {
        pixel.style.opacity = "0"
      }
    })
  }

  const handleNavHover = (title: string, index: number) => {
    if (!navCardRef.current || !navItemRefs.current[index] || isMobile) return

    clearTimeout(hideTimeout)

    const header = document.getElementById("navbar")
    if (!header) return

    const headerRect = header.getBoundingClientRect()
    const cardWidth = 480

    // Calculate horizontal position based on the nav item
    const rect = navItemRefs.current[index]?.getBoundingClientRect()
    if (!rect) return

    let left = rect.left + window.scrollX + rect.width / 2 - cardWidth / 2

    // Adjust for specific items if needed
    if (title === "BiAI") {
      left = headerRect.right - cardWidth - 16
    }
    // For Career, center the card on the nav item
    else if (title === "Career") {
      const rect = navItemRefs.current[index]?.getBoundingClientRect()
      if (rect) {
        left = rect.left + window.scrollX + rect.width / 2 - cardWidth / 2
      }
    }

    // Keep card within screen boundaries
    left = Math.max(16, Math.min(left, window.innerWidth - cardWidth - 16))

    // Position card 5px below the navbar
    navCardRef.current.style.top = `${headerRect.bottom + 5}px`
    navCardRef.current.style.left = `${left}px`
    navCardRef.current.style.display = "flex"

    setTimeout(() => {
      setActiveCard(title)
    }, 10)
  }

  const handleNavLeave = () => {
    hideTimeout = setTimeout(() => {
      setActiveCard(null)
    }, 200)
  }

  const handleCardEnter = () => {
    clearTimeout(hideTimeout)
  }

  const handleCardLeave = () => {
    // No timeout, disappear immediately
    setActiveCard(null)
  }

  const playVideo = () => {
    setVideoPlaying(true)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header
        id="navbar"
        className={`fixed ${isMobile ? "top-0 w-full rounded-none px-4" : "top-5 left-1/2 -translate-x-1/2 w-[calc(95%+16px)] max-w-[1616px] rounded-xl px-12"} flex justify-between items-center py-4 z-50 transition-all duration-300 ${
          scrolled || (isMobile && mobileMenuOpen)
            ? isMobile
              ? "backdrop-blur-md bg-white text-black shadow-md"
              : "border-2 border-black backdrop-blur-md bg-white text-black shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className={`flex items-center ${isMobile ? "ml-2" : ""}`}>
          <Image
            src={
              isMobile
                ? scrolled || mobileMenuOpen
                  ? "https://birzont.github.io/BirzontArchive/res/birzont_bicon.png"
                  : "https://birzont.github.io/BirzontArchive/res/birzont_wicon.png"
                : scrolled
                  ? "https://birzont.github.io/BirzontArchive/res/birzont_black.png"
                  : "https://birzont.github.io/BirzontArchive/res/birzont_white.png"
            }
            alt="Birzont Logo"
            width={isMobile ? 36 : 120}
            height={isMobile ? 36 : 36}
            className="object-contain"
          />
        </div>

        <nav className={`${isMobile ? "hidden" : "flex"} gap-6 justify-end flex-1 mr-10`}>
          {["Company", "Product", "Blog", "Career", "BiAI"].map((item, index) => (
            <div
              key={item}
              ref={(el) => (navItemRefs.current[index] = el)}
              className="relative"
              onMouseEnter={() => handleNavHover(item, index)}
              onMouseLeave={handleNavLeave}
            >
              <Link
                href="#"
                className={`font-medium text-[1rem] transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100/70 ${
                  scrolled ? "text-black" : ""
                }`}
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        {isMobile ? (
          <button
            className={`text-${scrolled || mobileMenuOpen ? "black" : "white"} p-2 focus:outline-none`}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        ) : (
          <button
            className={`px-4 py-2 font-bold rounded-xl transition-all duration-300 whitespace-nowrap text-[1rem] ${
              scrolled
                ? "bg-black text-white border-2 border-transparent hover:bg-transparent hover:text-black hover:border-black"
                : "bg-black text-white border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white"
            }`}
          >
            시작하기
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`fixed top-[60px] left-0 w-full bg-white text-black z-40 shadow-lg transform transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className={`py-4 px-6 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0"}`}>
            {["Company", "Product", "Blog", "Career", "BiAI"].map((item, index) => (
              <Link
                key={item}
                href="#"
                className="block py-3 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50"
              >
                {item}
              </Link>
            ))}
            <div className="mt-4 pt-2">
              <button className="w-full px-5 py-3 font-bold rounded-xl bg-black text-white transition-all duration-300">
                시작하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Hero Section */}
      <section
        className={`${isMobile ? "min-h-screen flex flex-col items-start justify-center gap-4 w-[calc(96%-24px)]" : "h-screen flex flex-col md:flex-row items-center justify-between w-[calc(95%-110px)]"} max-w-[1506px] mx-auto ${isMobile ? "pt-[80px] pb-[40px]" : "pt-[100px]"}`}
      >
        <div
          className={`${isMobile ? "w-full pl-0" : "w-1/2"} max-w-full ${isMobile ? "max-w-[98%]" : "md:max-w-[50%]"} flex flex-col items-start justify-center ${isMobile ? "mb-6" : "mb-8 md:mb-0"} left-content`}
          style={{
            height: isMobile ? "auto" : "var(--canvas-height)",
            maxHeight: isMobile ? "none" : "var(--canvas-height)",
            gap: isMobile ? "1rem" : "clamp(0.5rem, 2vw, 1rem)",
            overflow: isMobile ? "visible" : "hidden",
            padding: isMobile ? "1rem 1.5rem 1rem 0" : "0",
          }}
        >
          <div className="relative w-auto">
            {!isMobile && (
              <Image
                src="https://avatars.githubusercontent.com/u/144044857?s=200&v=4"
                alt="Birzont Logo"
                width={isMobile ? 48 : 60}
                height={isMobile ? 48 : 60}
                className="object-contain mb-2 md:mb-5 logo-image"
              />
            )}
            <small
              className="font-mono block mb-2 md:mb-4 text-base logo-text"
              style={{ maxWidth: isMobile ? "48px" : "60px", fontSize: "clamp(12px, 1.5vw, 16px)" }}
            >
              Birzont
            </small>
          </div>
          <h1
            className="font-sans font-bold tracking-tight text-left"
            style={{
              fontSize: isMobile ? "clamp(1.5rem, 5vw, 2.5rem)" : "clamp(1.2rem, 2.5vw, 2.25rem)",
              lineHeight: isMobile ? "1.3" : "1.2",
            }}
          >
            AGI, we beliebe
            <br />
            that we are sowing the
            <br />
            seeds of change.
          </h1>
          <div
            className="leading-relaxed text-[#bbb] text-left font-['Apple_SD_Gothic_Neo',sans-serif]"
            style={{
              fontSize: isMobile ? "clamp(1rem, 3vw, 1.4rem)" : "clamp(0.75rem, 1.2vw, 1.125rem)",
              lineHeight: isMobile ? "1.5" : "1.4",
              marginTop: isMobile ? "0.5rem" : "0",
            }}
          >
            더 밝은내일을 위해서는
            <br />
            지속가능한 행성이 필요하며,
            <br />
            우리는 변화의 씨앗을 뿌리고 있음을 믿는다.
            {isMobile && (
              <button
                className="bg-white text-black font-bold border-2 border-transparent rounded-lg cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white mt-4 block"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                  padding: "0.75rem 1.5rem",
                }}
              >
                지금 시작하기
              </button>
            )}
          </div>

          {!isMobile && (
            <button
              className="bg-white text-black font-bold border-2 border-transparent rounded-lg cursor-pointer whitespace-nowrap transition-all duration-300 hover:bg-transparent hover:text-white hover:border-white"
              style={{
                fontSize: "clamp(0.7rem, 1vw, 1rem)",
                padding: "clamp(0.4rem, 0.8vw, 0.75rem) clamp(0.8rem, 1.5vw, 1.5rem)",
                marginTop: "0",
              }}
            >
              지금 시작하기
            </button>
          )}
        </div>

        <div
          className={`${isMobile ? "w-full mt-8" : "w-1/2"} relative overflow-hidden transition-all duration-400 rounded-3xl image-canvas ${
            scrolled ? "blur-sm" : ""
          }`}
          style={{
            aspectRatio: "16/9",
            maxHeight: isMobile ? "50vh" : "80vh",
            minHeight: isMobile ? "auto" : "500px",
            backgroundImage: `url('https://birzont.github.io/BirzontArchive/res/Nature.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div ref={pixelsRef} className="absolute inset-0 pointer-events-none mix-blend-screen z-10"></div>
        </div>
      </section>

      {/* Mobile-only spacer */}
      {isMobile && <div className="w-full bg-black" style={{ height: "100px" }}></div>}

      {/* Hero Message Section Background Wrapper */}
      <div className="w-full bg-white">
        <section
          ref={fadeInSectionRef}
          className={`text-center pt-20 pb-10 md:pt-[200px] md:pb-[80px] ${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(98%-80px)]"} max-w-[1600px] mx-auto transition-all duration-[1.2s] ${
            fadeTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/144044857?s=200&v=4"
            alt="Birzont Logo"
            width={130}
            height={130}
            className="object-contain mb-8 mx-auto"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-black">
            Birzont. we build AI
            <br />
            to serve humanity's future.
          </h1>
          <p className="text-lg md:text-xl max-w-[1100px] mx-auto leading-[1.8] text-[#999]">
            While no one can foresee every outcome AI will have on society, we do know that designing powerful
            technologies requires both bold steps forward and intentional pauses to consider the effects. That's why we
            focus on building tools with human benefit at their foundation.
          </p>
        </section>
      </div>

      {/* Video Section Background Wrapper */}
      <div className="w-full bg-white">
        <div
          className={`mt-0 py-0 ${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto pb-[60px]`}
        >
          <div className="relative max-w-[900px] w-full mx-auto rounded-[20px] overflow-hidden shadow-2xl aspect-video">
            <Image
              src="https://www.worldatlas.com/upload/1d/79/58/shutterstock-2231455191.jpg"
              alt="video thumbnail"
              width={1920}
              height={1080}
              className="w-full block"
            />

            {!videoPlaying && (
              <button
                onClick={playVideo}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-5 border-black text-black rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-4xl font-bold flex items-center justify-center cursor-pointer"
              >
                <Play className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:w-8 ml-1" />
              </button>
            )}

            {videoPlaying && (
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/FUq5d7dqlVY?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Feature Grid Background Wrapper */}
      <div className="w-full bg-white">
        <section
          className={`flex flex-col items-center py-16 md:py-20 ${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto`}
        >
          {/* Divider between video and app cards */}
          <div className="w-full border-t border-gray-200 mb-12 md:mb-16"></div>

          <div className="flex flex-col md:flex-row w-full mb-16 md:mb-20">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Our
                <br />
                Products
              </h2>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <p className="text-black text-lg md:text-xl leading-relaxed">
                Discover our innovative solutions designed to enhance your daily life and productivity. Each product is
                crafted with attention to detail and user experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-6 w-full py-4">
            {/* Card 1 */}
            <div className="w-full">
              <AppCard
                title="Prompist"
                description="Supported by OpenAI, Claude, Grok and Gemini "
                defaultLogoSrc="https://birzont.github.io/BirzontArchive/res/Prompist.png"
                hoverLogoSrc="https://sjc.microlink.io/NYxNKSWYrs6vtz_pVGBMgmxS7IWYZeKUOM_OjYMGPV68OrYIgoWpz3SyVT5rExrf9tSMNQ_gti_Pe4IdlqzdXA.jpeg"
                bgColor="https://img.freepik.com/premium-photo/old-paper-texture-empty-vintage-background-text_84485-2503.jpg"
                link="https://google.com"
                index={0}
              />
            </div>

            {/* Card 2 */}
            <div className="w-full">
              <AppCard
                title="Bloxer"
                description="이 앱은 사용자에게 혁신적인 서비스를 제공합니다. 간편한 인터페이스와 다양한 기능으로 일상 생활을 더욱 편리하게 만들어 드립니다."
                defaultLogoSrc="https://birzont.github.io/BirzontArchive/res/Bloxer.png"
                hoverLogoSrc="https://sjc.microlink.io/NYxNKSWYrs6vtz_pVGBMgmxS7IWYZeKUOM_OjYMGPV68OrYIgoWpz3SyVT5rExrf9tSMNQ_gti_Pe4IdlqzdXA.jpeg"
                bgColor="https://img.freepik.com/premium-photo/old-paper-texture-empty-vintage-background-text_84485-2503.jpg"
                link="https://google.com"
                index={1}
              />
            </div>

            {/* Card 3 */}
            <div className="w-full">
              <AppCard
                title="Jibung"
                description="Pepsi의 공식 앱으로, 최신 프로모션과 이벤트 정보를 확인할 수 있습니다. 다양한 음료 제품에 대한 정보와 특별 할인 혜택을 제공합니다."
                defaultLogoSrc="https://birzont.github.io/BirzontArchive/res/Jibung.png"
                hoverLogoSrc="https://sjc.microlink.io/NYxNKSWYrs6vtz_pVGBMgmxS7IWYZeKUOM_OjYMGPV68OrYIgoWpz3SyVT5rExrf9tSMNQ_gti_Pe4IdlqzdXA.jpeg"
                bgColor="https://img.freepik.com/premium-photo/old-paper-texture-empty-vintage-background-text_84485-2503.jpg"
                link="https://google.com"
                index={2}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Logo Slider Section */}
      <div className="w-full bg-white">
        <section className={`${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto`}>
          <LogoSlider />
        </section>
      </div>

      {/* Timeline Section */}
      <div className="w-full bg-white">
        <section className={`${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto`}>
          <Timeline />
        </section>
      </div>

      {/* Blog Section */}
      <div className="w-full bg-white border-t border-gray-200">
        <section className={`${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto`}>
          <BlogSection />
        </section>
      </div>

      {/* Careers Section */}
      <div className="w-full bg-white">
        <section className={`${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto`}>
          <CareersSection />
        </section>
      </div>

      {/* Footer Section */}
      <div className="w-full bg-black">
        <footer
          className={`${isMobile ? "w-[calc(96%-24px)]" : "w-[calc(95%-110px)]"} max-w-[1506px] mx-auto py-16 text-white`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="https://avatars.githubusercontent.com/u/144044857?s=200&v=4"
                  alt="Birzont Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />
                <span className="text-xl font-bold">Birzont</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building AI to serve humanity's future.
                <br />© 2025 Birzont. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://linkedin.com/company/birzont/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link
                  href="https://x.com/birzont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="http://instagram.com/birzont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@birzont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/birzont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://pinterest.com/birzont/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 11.5c-.5-1.5.5-3 2-3.5s3.5 0 4 1.5c.5 2-1 3-2 3s-1.5-.5-2-1.5"></path>
                    <path d="M12 9v13"></path>
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@birzont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8a4 4 0 0 0 0 8"></path>
                    <path d="M15 8a4 4 0 0 1 4 4"></path>
                    <line x1="19" y1="8" x2="19" y2="16"></line>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">회사</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    소개
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    연혁
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    팀
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    채용
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">제품</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Birzont
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    naamuib
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Bloxer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    BiAI
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">문의</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    고객 지원
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    파트너십
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    개인정보 처리방침
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    이용약관
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Birzont Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                개인정보 처리방침
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                이용약관
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                쿠키 정책
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Nav Hover Card */}
      <div
        ref={navCardRef}
        className={`fixed border border-gray-200 shadow-lg rounded-xl bg-white text-black w-[520px] p-0 z-[1000] overflow-hidden ${
          activeCard
            ? "opacity-100 translate-y-0 flex flex-col transition-opacity duration-500 ease-in-out"
            : "opacity-0 translate-y-0 pointer-events-none hidden"
        }`}
        onMouseEnter={handleCardEnter}
        onMouseLeave={handleCardLeave}
      >
        <div className="flex w-full">
          {/* 왼쪽: 클릭 가능한 텍스트 요소들 */}
          <div className="flex-1 p-8 pt-4 pl-6">
            {activeCard === "Company" && (
              <>
                <h3 className="font-bold text-lg mb-4">회사 소개</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      About Company
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Brand identity
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Our Team
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {activeCard === "Product" && (
              <>
                <h3 className="font-bold text-lg mb-4">제품 라인업</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Prompist
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Bloxer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Jibung
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {activeCard === "Blog" && (
              <>
                <h3 className="font-bold text-lg mb-4">블로그 카테고리</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      AGI
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Everything
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Research
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {activeCard === "Career" && (
              <>
                <h3 className="font-bold text-lg mb-4">채용 정보</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Talent pool
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      Culture Fits
                    </Link>
                  </li>
                </ul>
              </>
            )}

            {activeCard === "BiAI" && (
              <>
                <h3 className="font-bold text-lg mb-4">BiAI 플랫폼</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      기능 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      사용 사례
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      가격 정책
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      개발자 문서
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">
                      API 레퍼런스
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>

          {/* 오른쪽: 이미지 - 수정된 부분 */}
          <div className="w-[280px] p-4 flex items-center">
            {activeCard === "Company" && (
              <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="https://birzont.github.io/BirzontArchive/res/CompassPen.png"
                  alt="Company"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {activeCard === "Product" && (
              <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="https://birzont.github.io/BirzontArchive/res/GatLamp.png"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {activeCard === "Blog" && (
              <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="https://birzont.github.io/BirzontArchive/res/CoffeeBook.png"
                  alt="Blog"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {activeCard === "Career" && (
              <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="https://birzont.github.io/BirzontArchive/res/TreeBuilding.png"
                  alt="Career"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {activeCard === "BiAI" && (
              <div className="w-full aspect-square relative rounded-xl overflow-hidden">
                <Image
                  src="https://birzont.github.io/BirzontArchive/res/CobbleMac.png"
                  alt="BiAI"
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
