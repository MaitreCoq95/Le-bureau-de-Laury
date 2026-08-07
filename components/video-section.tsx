"use client"

export function VideoSection() {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          >
            <source src="/video-avant-apres.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
