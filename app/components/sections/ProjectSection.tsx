"use client";

import { useState, useRef } from "react";

export default function ProjectSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const projects = [
    {
      title: "Lumilab Apparel",
      category: "E-Commerce / Web Dev",
      desc: "Website pre-order apparel brand (hoodie, t-shirt, training pants) yang di-host via Biznity Hub.",
      link: "https://lumilab.biznityhub.com",
    },
    {
      title: "Web BEM LP3I Jaksel",
      category: "Organization / Portal",
      desc: "Pengembangan portal resmi Badan Eksekutif Mahasiswa Politeknik LP3I Jakarta Kampus Pasar Minggu untuk informasi kegiatan & aspirasi.",
      link: "#",
    },
    {
      title: "Zenko Kissaten",
      category: "Web Development",
      desc: "Pengembangan website kafe konsep Showa retro lengkap dengan integrasi Google Maps iframe dan deployment GitHub.",
      link: "#",
    },
  ];

  const designs = [
    {
      title: "Retro Lime Mascot Illustration",
      category: "Character Design",
      image: "/video/haram1.gif",
    },
    {
      title: "Desain Poster / Banner Kreatif",
      category: "Graphic Design",
      image: "/img/ASSET-1.png",
    },
    {
      title: "UI/UX & App Concept",
      category: "Interface Design",
      image: "/img/ASSET-2.png",
    },
  ];

  const videoProjects = [
    {
      title: "Motion UI Interaction Demo",
      category: "Video Motion",
      src: "/video/ini-perta.gif",
      isGif: true,
      desc: "Demonstrasi animasi komponen interaktif.",
    },
    {
      title: "Showcase Reel Video",
      category: "MP4 Video",
      src: "/video/perta oi.mp4",
      isGif: false,
      desc: "Showcase video projek dengan kontrol audio Mute/Unmute.",
    },
  ];

  const infiniteDesigns = [...designs, ...designs, ...designs];

  const documents = [
    {
      title: "Laporan Pertanggungjawaban (LPJ) BEM",
      category: "Dokumen Organisasi",
      desc: "Dokumentasi kegiatan sosial pembagian bantuan makanan untuk warga Jalan Pertanian III C.",
      fileSize: "PDF • 2.4 MB",
      downloadUrl: "/docs/lpj-bem.pdf",
    },
    {
      title: "Analisis Kepuasan Belanja Online vs Offline",
      category: "Research / SPSS & Tableau",
      desc: "Studi komparatif menggunakan Independent Sample t-Test SPSS 27 dan visualisasi data Tableau.",
      fileSize: "PDF • 4.1 MB",
      downloadUrl: "/docs/riset-lp3i.pdf",
    },
  ];

  return (
    <section id="projects" className="max-w-[1180px] mx-auto px-6 py-24 text-[#f1f0e9]">
      
    {/* Header Section dengan Gradient Kelihatan Jelas Bolak-Balik */}
<div className="relative rounded-md p-10 mb-20 overflow-hidden bg-[#171815] border border-[#30312c]">
  
  {/* Layer Gradient Bolak-Balik Kanan Kiri (Warna Ditingkatkan) */}
  <div className="absolute inset-0 opacity-80 pointer-events-none bg-gradient-to-r from-[#d7ff68]/35 via-[#171815] to-[#d7ff68]/35 animate-ambient-slow" />

  {/* Glow Orb Kiri-Kanan Biar Makin Berasa Fluid-nya */}
  <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#d7ff68]/20 rounded-full blur-2xl pointer-events-none animate-pulse" />
  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#d7ff68]/20 rounded-full blur-2xl pointer-events-none animate-pulse" />

  <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
    <div>
      <p className="font-mono text-[10px] tracking-[0.1em] text-[#d7ff68] uppercase mb-3 font-semibold flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#d7ff68] animate-ping" />
        SELECTED WORKS & ARCHIVE
      </p>
      <h2 className="text-[42px] md:text-[58px] font-extrabold tracking-tight text-[#f1f0e9] leading-none">
        Proyek, Desain, <br />
        Video & Dokumen
      </h2>
    </div>
    <p className="text-[15px] text-[#8c8e84] max-w-[380px] leading-relaxed">
      Kumpulan project web dev, karya desain visual, preview video/GIF, arsip dokumen organisasi BEM, riset, dan catatan blog.
    </p>
  </div>
</div>

      {/* 1. Grid Portofolio Web / Apps */}
      <div className="mb-24">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#d7ff68] mb-8 pb-3 border-b border-[#30312c]">
          01 // Web Development Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-[#30312c] rounded-md p-8 bg-[#171815] group flex flex-col justify-between transition-all duration-300 hover:border-[#d7ff68]">
              <div>
                <div className="mb-5">
                  <span className="inline-block bg-[#20211d] text-[#d7ff68] border border-[#30312c] text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-[22px] font-bold text-[#f1f0e9] mb-3 leading-tight">{project.title}</h4>
                <p className="text-[13px] text-[#8c8e84] leading-relaxed mb-8">{project.desc}</p>
              </div>
              <div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] font-bold text-[#d7ff68] hover:underline uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  Kunjungi Project <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Autoplay Infinite Carousel Desain */}
      <div className="mb-24">
        <div className="flex justify-between items-center mb-8 pb-3 border-b border-[#30312c]">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#d7ff68]">
            02 // Visual Design & Branding
          </h3>
          <span className="font-mono text-[10px] text-[#8c8e84] tracking-wider uppercase">
            Arahkan kursor untuk pause
          </span>
        </div>

        <div className="overflow-hidden py-2">
          <div className="animate-marquee gap-6">
            {infiniteDesigns.map((design, index) => (
              <div 
                key={index} 
                className="w-[300px] md:w-[350px] border border-[#30312c] rounded-md overflow-hidden bg-[#171815] group relative transition-all duration-300 hover:border-[#d7ff68] flex-shrink-0"
              >
                <div className="relative h-[420px] p-5 flex items-center justify-center overflow-hidden bg-[#20211d]">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                  />
                  <div className="absolute top-4 left-4 bg-[#10110f]/90 text-[#d7ff68] border border-[#30312c] font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded">
                    {design.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Motion Graphics & Video Projects */}
      <div className="mb-24">
        <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#d7ff68] mb-8 pb-3 border-b border-[#30312c]">
          03 // Motion Graphics & Video Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoProjects.map((vid, index) => (
            <div key={index} className="border border-[#30312c] rounded-md p-8 bg-[#171815] group flex flex-col justify-between transition-all duration-300 hover:border-[#d7ff68]">
              <div>
                <div className="mb-5">
                  <span className="inline-block bg-[#20211d] text-[#d7ff68] border border-[#30312c] text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded">
                    {vid.category}
                  </span>
                </div>
                <h4 className="text-[22px] font-bold text-[#f1f0e9] mb-2">{vid.title}</h4>
                <p className="text-[13px] text-[#8c8e84] leading-relaxed mb-6">{vid.desc}</p>
              </div>

              {/* Media Container */}
              <div className="relative rounded border border-[#30312c] bg-[#20211d] aspect-video flex items-center justify-center overflow-hidden">
                {vid.isGif ? (
                  <img 
                    src={vid.src} 
                    alt={vid.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <video 
                      ref={videoRef}
                      src={vid.src} 
                      autoPlay 
                      loop 
                      muted={isMuted}
                      playsInline 
                      className="w-full h-full object-cover"
                    />
                    
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-4 right-4 bg-[#10110f]/90 hover:bg-[#d7ff68] hover:text-[#10110f] text-[#f1f0e9] text-[10px] font-mono px-3 py-1.5 rounded border border-[#30312c] transition-all flex items-center gap-2"
                    >
                      {isMuted ? "🔇 SOUND OFF" : "🔊 SOUND ON"}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Dokumen & Blogspot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Dokumen / Arsip */}
        <div className="border border-[#30312c] rounded-md p-8 bg-[#171815] transition-all duration-300 hover:border-[#d7ff68]">
          <h3 className="text-[20px] font-bold text-[#f1f0e9] mb-8 flex items-center justify-between">
            <span>Arsip Dokumen & Riset</span>
            <span className="text-[10px] text-[#d7ff68] font-mono border border-[#30312c] px-2.5 py-1 rounded">PDF / DOCS</span>
          </h3>
          <div className="flex flex-col gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="p-5 border border-[#30312c] rounded bg-[#20211d]/50 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-[#d7ff68] transition-all">
                <div className="w-full md:w-auto pr-0 md:pr-4">
                  <h4 className="text-[15px] font-semibold text-[#f1f0e9]">{doc.title}</h4>
                  <p className="text-[13px] text-[#8c8e84] mt-1">{doc.desc}</p>
                  <span className="inline-block mt-2 text-[10px] text-[#d7ff68] font-mono uppercase">{doc.fileSize}</span>
                </div>
                <a 
                  href={doc.downloadUrl}
                  download
                  className="mt-4 md:mt-0 font-mono text-[10px] px-4 py-2 bg-[#d7ff68] text-[#10110f] font-bold uppercase tracking-wider rounded hover:bg-[#c2ef4f] transition-colors whitespace-nowrap"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Blogspot Card */}
        <div className="border border-[#30312c] rounded-md p-8 bg-[#171815] flex flex-col justify-between transition-all duration-300 hover:border-[#d7ff68]">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#d7ff68] font-mono">PERSONAL NOTES</span>
              <span className="w-2 h-2 rounded-full bg-[#d7ff68] animate-pulse"></span>
            </div>
            <h3 className="text-[32px] font-bold tracking-tight text-[#f1f0e9] mb-4 leading-tight">Baca Tulisan & Catatan Gw di Blogspot</h3>
            <p className="text-[14px] text-[#8c8e84] leading-relaxed mb-10 max-w-[420px]">
              Tempat gw menuangkan pemikiran seputar teknologi, pengalaman organisasi kampus, catatan coding, dan cerita seru lainnya.
            </p>
          </div>
          
          <a 
            href="https://nama-blog-lu.blogspot.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#d7ff68] text-[#10110f] text-center font-mono text-[11px] font-bold uppercase tracking-[0.15em] rounded hover:bg-[#c2ef4f] transition-colors"
          >
            Buka Blogspot &rarr;
          </a>
        </div>

      </div>

    </section>
  );
}