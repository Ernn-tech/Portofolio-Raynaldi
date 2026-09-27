"use client";

export default function ProjectSection() {
  // Data list project web & aplikasi (Tanpa gambar, fokus text-only)
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

  // Data khusus Hasil Desain & Aset Visual (Full Image Poster Digital - Format Portrait Full Color)
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

  // Data dokumen / arsip
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
    <section id="projects" className="max-w-[1200px] mx-auto px-6 py-24 border-t border-[#d6d6d6]">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
        <div>
          <p className="text-[12px] tracking-[0.1em] text-[#818181] uppercase mb-2">Selected Works & Archive</p>
          <h2 className="text-[32px] md:text-[40px] font-normal tracking-tight text-black">
            Proyek, Desain, Dokumen & Blog
          </h2>
        </div>
        <p className="text-[14px] text-[#666] max-w-[360px] mt-4 md:mt-0">
          Kumpulan project web dev, karya desain visual, arsip dokumen organisasi BEM, riset akademik, dan catatan tulisan di Blogspot.
        </p>
      </div>

      {/* 1. Grid Portofolio Web / Apps (Text-Only Card) */}
      <div className="mb-16">
        <h3 className="text-[16px] font-medium uppercase tracking-[0.1em] text-black mb-6 pb-2 border-b border-[#e5e5e5]">
          Web Development Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-[#d6d6d6] rounded-lg p-8 bg-white group flex flex-col justify-between hover:border-black transition-colors">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-black text-white text-[10px] tracking-wider uppercase px-2.5 py-1 font-mono">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-[20px] font-medium text-black mb-3">{project.title}</h4>
                <p className="text-[14px] text-[#555] leading-relaxed mb-6">{project.desc}</p>
              </div>
              <div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[13px] font-medium text-black uppercase tracking-wider hover:opacity-75 transition-opacity"
                >
                  Kunjungi Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Grid Hasil Desain & Aset Visual (Full Image Poster Digital - Format Portrait Full Color & White BG) */}
      <div className="mb-16">
        <h3 className="text-[16px] font-medium uppercase tracking-[0.1em] text-black mb-6 pb-2 border-b border-[#e5e5e5]">
          Visual Design & Branding
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <div key={index} className="border border-[#d6d6d6] rounded-lg overflow-hidden bg-white group relative">
              <div className="relative h-[440px] p-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={design.image} 
                  alt={design.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 shadow-sm"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <div className="absolute top-3 left-3 bg-black text-white text-[10px] tracking-wider uppercase px-2.5 py-1">
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
        <div className="border border-[#d6d6d6] rounded-lg p-8 bg-white">
          <h3 className="text-[20px] font-medium text-black mb-6 flex items-center justify-between">
            <span>Arsip Dokumen & Riset</span>
            <span className="text-[11px] text-[#818181] tracking-wider uppercase font-mono">PDF / Docs</span>
          </h3>
          <div className="flex flex-col gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="p-4 border border-[#e5e5e5] rounded-md flex justify-between items-center hover:border-black transition-colors">
                <div>
                  <h4 className="text-[14px] font-medium text-black">{doc.title}</h4>
                  <p className="text-[12px] text-[#666] mt-0.5">{doc.desc}</p>
                  <span className="inline-block mt-2 text-[10px] text-[#818181] font-mono uppercase">{doc.fileSize}</span>
                </div>
                <a 
                  href={doc.downloadUrl}
                  download
                  className="px-4 py-2 bg-black text-white text-[11px] uppercase tracking-wider rounded hover:bg-[#333] transition-colors whitespace-nowrap ml-4"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Blogspot Card */}
        <div className="border border-[#d6d6d6] rounded-lg p-8 bg-[#111] text-white flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#818181] font-mono">Personal Notes</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <h3 className="text-[24px] font-medium tracking-tight mb-3">Baca Tulisan & Catatan Gw di Blogspot</h3>
            <p className="text-[14px] text-[#aaa] leading-relaxed mb-6">
              Tempat gw menuangkan pemikiran seputar teknologi, pengalaman organisasi kampus, catatan coding, dan cerita seru lainnya.
            </p>
          </div>
          
          <a 
            href="https://putraraynaldi.blogspot.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-white text-black text-center text-[12px] font-medium uppercase tracking-[0.15em] rounded hover:bg-[#e5e5e5] transition-colors"
          >
            Buka Blogspot &rarr;
          </a>
        </div>

      </div>

    </section>
  );
}