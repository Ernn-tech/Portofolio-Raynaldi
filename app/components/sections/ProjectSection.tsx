"use client";

export default function ProjectSection() {
  const projects = [
    {
      title: "Lumilab Apparel",
      category: "E-Commerce / Web Dev",
      desc: "Website pre-order apparel brand (hoodie, t-shirt, training pants) yang di-host via Biznity Hub.",
      link: "https://lumilab.biznityhub.com",
    },
    {
      title: "GoodPhase Thrift",
      category: "Web & Social Media",
      desc: "Pengembangan platform & strategi digital buat brand thrift pakaian.",
      link: "#",
    },
    {
      title: "Zenko Kissaten",
      category: "Web Development",
      desc: "Pengembangan website kafe lengkap dengan integrasi Google Maps iframe dan deployment GitHub.",
      link: "#",
    },
  ];

  const designs = [
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
    {
      title: "Social Media Feed & Assets",
      category: "Branding",
      image: "/img/ASSET-3.jpg",
    },
  ];

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
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-24 text-white">
      
      {/* Header Section */}
      <div className="relative rounded-3xl p-10 mb-20 overflow-hidden shadow-2xl bg-[#1C1714]/80 border border-[#D97706]/20 backdrop-blur-sm">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <p className="text-[12px] tracking-[0.15em] text-[#D97706] uppercase mb-3 font-semibold">SELECTED WORKS & ARCHIVE</p>
            <h2 className="text-[48px] md:text-[60px] font-bold tracking-tight text-white leading-none">
              Proyek, Desain, <br/>Dokumen & Blog
            </h2>
          </div>
          <p className="text-[16px] text-white max-w-[380px] mt-6 md:mt-0 leading-relaxed">
            Kumpulan project web dev, karya desain visual, arsip dokumen organisasi BEM, riset akademik, dan catatan tulisan di Blogspot.
          </p>
        </div>
      </div>

      {/* 1. Grid Portofolio Web / Apps */}
      <div className="mb-24">
        <h3 className="text-[18px] font-semibold uppercase tracking-[0.15em] text-white mb-10 pb-3 border-b border-[#D97706]/30">
          Web Development Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-[#D97706]/20 rounded-2xl p-8 bg-[#1C1714]/90 group flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#D97706]">
              <div>
                <div className="mb-5">
                  <span className="inline-block bg-[#D97706] text-white text-[11px] tracking-wider uppercase px-3 py-1.5 font-mono rounded-full font-bold">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-[24px] font-bold text-white mb-4 leading-tight">{project.title}</h4>
                <p className="text-[15px] text-white leading-relaxed mb-8">{project.desc}</p>
              </div>
              <div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[14px] font-semibold text-[#FBBF24] uppercase tracking-wider hover:text-white transition-colors"
                >
                  Kunjungi Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Grid Hasil Desain & Aset Visual */}
      <div className="mb-24">
        <h3 className="text-[18px] font-semibold uppercase tracking-[0.15em] text-white mb-10 pb-3 border-b border-[#D97706]/30">
          Visual Design & Branding
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="border border-[#D97706]/20 rounded-2xl overflow-hidden bg-[#1C1714]/90 group relative transition-all duration-300 hover:shadow-2xl hover:border-[#D97706]">
              <div className="relative h-[480px] p-5 flex items-center justify-center overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <div className="absolute top-6 left-6 bg-[#D97706] text-white text-[11px] tracking-wider uppercase px-3.5 py-1.5 rounded-full font-bold shadow-md">
                  {design.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Dokumen & Blogspot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Dokumen / Arsip */}
        <div className="border border-[#D97706]/20 rounded-2xl p-10 bg-[#1C1714]/90 transition-all duration-300 hover:shadow-2xl hover:border-[#D97706]">
          <h3 className="text-[24px] font-bold text-white mb-10 flex items-center justify-between">
            <span>Arsip Dokumen & Riset</span>
            <span className="text-[12px] text-white tracking-widest uppercase font-mono border border-[#D97706]/30 px-3 py-1 rounded-md">PDF / DOCS</span>
          </h3>
          <div className="flex flex-col gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="p-6 border border-[#292524] rounded-xl flex justify-between items-center hover:border-[#D97706] hover:bg-[#292524]/60 transition-all duration-300">
                <div>
                  <h4 className="text-[16px] font-semibold text-white">{doc.title}</h4>
                  <p className="text-[14px] text-white mt-1.5">{doc.desc}</p>
                  <span className="inline-block mt-3 text-[11px] text-white font-mono uppercase tracking-wide">{doc.fileSize}</span>
                </div>
                <a 
                  href={doc.downloadUrl}
                  download
                  className="px-6 py-3 bg-[#D97706] text-white text-[12px] font-bold uppercase tracking-wider rounded-lg hover:bg-[#B45309] transition-colors whitespace-nowrap ml-6 shadow-sm"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Blogspot Card */}
        <div className="rounded-2xl p-10 text-white flex flex-col justify-between shadow-xl" style={{ background: 'linear-gradient(135deg, #29180F 0%, #D97706 100%)' }}>
          <div>
            <div className="flex justify-between items-center mb-10">
              <span className="text-[12px] tracking-[0.2em] uppercase text-white font-mono font-medium">PERSONAL NOTES</span>
              <span className="w-3 h-3 rounded-full bg-white animate-pulse shadow-lg shadow-white/50"></span>
            </div>
            <h3 className="text-[36px] font-bold tracking-tight mb-5 leading-tight">Baca Tulisan & Catatan Gw di Blogspot</h3>
            <p className="text-[16px] text-white leading-relaxed mb-12 max-w-[450px]">
              Tempat gw menuangkan pemikiran seputar teknologi, pengalaman organisasi kampus, catatan coding, dan cerita seru lainnya.
            </p>
          </div>
          
          {/* Tombol dengan background putih dan teks warna gelap/hitam */}
<a 
            href="https://nama-blog-lu.blogspot.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-white text-[#451A03]! text-center text-[14px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-[#F3F4F6] transition-colors shadow-lg"
          >
            Buka Blogspot &rarr;
          </a>
        </div>

      </div>

    </section>
  );
}