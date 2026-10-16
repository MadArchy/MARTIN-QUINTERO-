(() => {
  const D = window.MARTIN;
  if (!D) return;

  const ICO = {
    helmet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-5 3.5-9 8-9s8 4 8 9"/><path d="M3 14h18"/><path d="M7 14v2.5a2.5 2.5 0 0 0 2.5 2.5h5A2.5 2.5 0 0 0 17 16.5V14"/><path d="M9.5 11.5h5"/><path d="M12 5v2"/></svg>`,
    frame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M5 20V10l7-5 7 5v10"/><path d="M9 20v-6h6v6"/><path d="M9 14h6"/></svg>`,
    wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z"/></svg>`,
    gears: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="3"/><path d="M10 3.5v1.2M10 15.3v1.2M3.5 10h1.2M15.3 10h1.2M5.4 5.4l.85.85M13.75 13.75l.85.85M5.4 14.6l.85-.85M13.75 6.25l.85-.85"/><circle cx="16.5" cy="16.5" r="2.2"/><path d="M16.5 12.8v.7M16.5 19.5v.7M12.8 16.5h.7M19.5 16.5h.7"/></svg>`,
    flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c2 3 1 5-1 7 3 0 6 2 6 6a7 7 0 1 1-14 0c0-4 3-6 5-7-1-2 1-4 4-6z"/></svg>`,
    factory: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 20h20M4 20V10l6 4V10l6 4V6h4v14"/></svg>`,
    cut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.12 15.88M14.5 14.5 20 20M8.12 8.12 12 12"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7l8-4z"/><path d="m9 12 2 2 4-4"/></svg>`,
    gem: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9l4-6z"/><path d="M2 9h20M12 21 8 9l4-6 4 6-4 12z"/></svg>`,
    target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2M22 12h-2M12 22v-2M4.5 4.5l1.5 1.5"/></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3.5"/><path d="M22 21v-2a3.5 3.5 0 0 0-2.5-3.35"/><path d="M16.5 3.6a3.5 3.5 0 0 1 0 6.8"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
    wa: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 3.3 17.8L2 22l4.3-1.1A11 11 0 1 0 20.5 3.5z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"/></svg>`,
    map: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    fb: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.3 4 15.5 4 14.7 4 12.5 4 11 5.3 11 7.8V10.5H8.5v3H11V20h3v-6.5z"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5z"/></svg>`,
    tk: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2.09-2.79v-3.5a6.34 6.34 0 1 0 5.43 6.29V8.75a8.2 8.2 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-.88-.15z"/></svg>`,
    yt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12.2s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.5 5.2 12 5.2 12 5.2s-6.5 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8 2.3.5 8.8.5 8.8.5s6.5 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.8 15.5v-6.6l5.7 3.3-5.7 3.3z"/></svg>`,
  };

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ok = (v) => Boolean(v && String(v).trim());

  const waUrl = (msg) => {
    if (!ok(D.business.whatsapp)) return null;
    const n = String(D.business.whatsapp).replace(/\D/g, "");
    if (!n) return null;
    return `https://wa.me/${n}?text=${encodeURIComponent(msg || D.business.whatsappPrefill)}`;
  };

  $("#servicesGrid").innerHTML = D.services
    .map(
      (s) => `<article class="svc">
        <div class="svc-media">
          <img src="${s.image}?v=15" alt="${s.title}" loading="lazy" />
          <div class="svc-media__bar">
            <div class="svc-ico" aria-hidden="true">${ICO[s.icon]}</div>
            <a class="arrow" href="#contacto" aria-label="Cotizar ${s.title}">${ICO.arrow}</a>
          </div>
        </div>
        <div class="svc-body">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      </article>`,
    )
    .join("");

  $("#whyGrid").innerHTML = D.why
    .map(
      (w) => `<article class="why-card">
        <div class="ico" aria-hidden="true">${ICO[w.icon]}</div>
        <div class="why-card__text"><h3>${w.title}</h3><p class="${w.caps ? "is-caps" : ""}">${w.text}</p></div>
      </article>`,
    )
    .join("");

  $("#projectsGrid").innerHTML = D.projects
    .map(
      (p) => `<article class="proj" id="p-${p.id}">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
        <div class="proj-cap"><div><h3>${p.title}</h3><p>${p.text}</p></div><a class="arrow" href="#p-${p.id}" aria-label="${p.title}">${ICO.arrow}</a></div>
      </article>`,
    )
    .join("");

  const tel = ok(D.business.phone) ? `tel:${String(D.business.phone).replace(/[^\d+]/g, "")}` : null;
  const wa = waUrl();
  const contacts = [
    {
      t: "Llámanos",
      d: ok(D.business.phone) ? D.business.phone : "Teléfono pendiente de configuración.",
      i: ICO.phone,
      h: tel,
    },
    {
      t: "Visítanos",
      d: ok(D.business.address) ? D.business.address : "Dirección pendiente de configuración.",
      i: ICO.map,
      h: ok(D.business.mapsUrl) ? D.business.mapsUrl : null,
    },
  ];

  $("#contactRow").innerHTML = contacts
    .map((c) => {
      const inner = `<div class="ico" aria-hidden="true">${c.i}</div><div class="c-card__text"><h3>${c.t}</h3><p>${c.d}</p></div>`;
      return c.h
        ? `<a class="c-card link" href="${c.h}"${c.t === "Visítanos" ? ' target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`
        : `<div class="c-card">${inner}</div>`;
    })
    .join("");

  const mapFrame = $("#contactMap");
  if (mapFrame && ok(D.business.mapsEmbed)) {
    mapFrame.src = D.business.mapsEmbed;
    mapFrame.hidden = false;
  }

  const mapsDirect =
    ok(D.business.mapsLat) && ok(D.business.mapsLng)
      ? `https://maps.google.com/?q=${D.business.mapsLat},${D.business.mapsLng}`
      : D.business.mapsUrl;
  const qrLink = $("#qrMapsLink");
  const qrImg = $("#qrMapsImg");
  if (qrLink && ok(mapsDirect)) {
    qrLink.href = mapsDirect;
  }
  if (qrImg && ok(D.business.qrMaps)) {
    qrImg.src = `${D.business.qrMaps}?v=36`;
  }

  const waBtn = $("#waBtn");
  if (wa) {
    waBtn.href = wa;
    waBtn.target = "_blank";
    waBtn.rel = "noopener noreferrer";
    $("#waNote").textContent = "";
  } else {
    waBtn.href = "#contacto";
    $("#waNote").textContent = "Configura WhatsApp en web/js/data.js para activar el enlace real.";
  }

  const social = [
    ["facebook", "fb", "Facebook"],
    ["instagram", "ig", "Instagram"],
    ["tiktok", "tk", "TikTok"],
    ["youtube", "yt", "YouTube"],
  ];
  $("#socials").innerHTML = social
    .map(([k, ik, label]) => {
      const href = D.business.social[k];
      return ok(href)
        ? `<a class="social social--${k}" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${label}">${ICO[ik]}</a>`
        : `<span class="social social--${k}" title="${label} pendiente" aria-label="${label} pendiente">${ICO[ik]}</span>`;
    })
    .join("");

  $("#year").textContent = new Date().getFullYear();

  const header = $("#header");
  const burger = $("#burger");
  const nav = $("#nav");
  const brandFloat = document.querySelector(".brand--float");
  const onScroll = () => {
    const scrolled = scrollY > 20;
    header.classList.toggle("scrolled", scrolled);
    brandFloat?.classList.toggle("is-compact", scrolled);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  $$("#nav a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      burger.classList.remove("open");
      document.body.style.overflow = "";
    }),
  );

  const links = $$("[data-link]");
  const sections = links.map((l) => document.getElementById(l.dataset.link)).filter(Boolean);
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle("active", l.dataset.link === e.target.id));
      });
    },
    { rootMargin: "-35% 0px -50% 0px", threshold: 0.25 },
  );
  sections.forEach((s) => navObserver.observe(s));

  $("#allProjects").addEventListener("click", (e) => {
    e.preventDefault();
    $("#projectsGrid").scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
