
const rows = [
  {
    height: "260px",
    images: [
      { src: "/emmanuelagida_portrait.svg", width: "45%", position: "object-center"},
      { src: "/emmanuelagida_portrait.svg", width: "30%", position: "object-top"},
      { src: "/emmanuelagida_portrait.svg", width: "25%", position: "object-center"},
    ],
  },
  {
    height: "220px",
    images: [
      { src: "/emmanuelagida_portrait.svg", width: "35%", position: "object-center"},
      { src: "/emmanuelagida_portrait.svg", width: "25%", position: "object-top"},
      { src: "/emmanuelagida_portrait.svg", width: "40%", position: "object-center"},
    ],
  },
  {
    height: "200px",
    images: [
      { src: "/emmanuelagida_portrait.svg", width: "20%", position: "object-top"},
      { src: "/emmanuelagida_portrait.svg", width: "45%", position: "object-center"},
      { src: "/emmanuelagida_portrait.svg", width: "35%", position: "object-top"},
    ],
  },
];

const Case = () => {

  return (
    <section className="py-16 px-6 w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-[2px] bg-yellow-500" />
        <p className="text-xs tracking-widest uppercase text-white/50">
          Strategic Engagements
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10 gap-4">
        <h2 className="text-4xl font-black uppercase">Leadership In Action.</h2>
        <p className="text-white/60 text-sm max-w-xs">
          A curated glimpse into key moments—engaging with communities,
          leading initiatives, and shaping conversations that matter.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-1"
            style={{ height: row.height }}
          >
            {row.images.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="overflow-hidden"
                style={{ width: img.width }}
              >
                <img
                  src={img.src}
                  alt={`Gallery image ${imgIndex + 1}`}
                  className={`w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ${img.position}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Case;