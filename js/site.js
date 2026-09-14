(function () {
  const PHONE = "061 559 6743";
  const TEL = "+27615596743";
  const WA = "27615596743";
  const EMAIL = "info@kjtradeversatile.co.za";
  const ADDRESS = "16 Avon Road, Morgens Village, Mitchell's Plain, 7785";

  const page = document.body.getAttribute("data-page") || "";

  const nav = [
    { href: "index.html", id: "home", label: "Home" },
    { href: "about.html", id: "about", label: "About" },
    {
      id: "services",
      label: "Services",
      children: [
        { href: "services.html", label: "All Services" },
        { href: "gate-automation.html", label: "Gate Automation" },
        { href: "gate-fabrication.html", label: "Gate Fabrication" },
        { href: "garage-doors.html", label: "Garage Doors" },
        { href: "cctv.html", label: "CCTV Systems" },
      ],
    },
    { href: "gallery.html", id: "gallery", label: "Gallery" },
    { href: "projects.html", id: "projects", label: "Projects" },
    { href: "quote.html", id: "quote", label: "Request a Quote" },
    { href: "contact.html", id: "contact", label: "Contact" },
  ];

  const icon = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.2l-.33-.2-3.5.66.67-3.4-.22-.35A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.27-.13-1.6-.79-1.85-.88s-.43-.13-.61.13-.7.88-.86 1.06-.32.2-.59.07a7.4 7.4 0 0 1-2.18-1.35 8.2 8.2 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.55.12-.12.27-.32.4-.48a1.8 1.8 0 0 0 .27-.45.5.5 0 0 0 0-.48c-.07-.13-.61-1.47-.84-2.01s-.45-.46-.61-.47h-.52a1 1 0 0 0-.73.34 3.05 3.05 0 0 0-.95 2.26 5.3 5.3 0 0 0 1.12 2.8 12.1 12.1 0 0 0 4.64 4.1 15.8 15.8 0 0 0 1.56.58 3.74 3.74 0 0 0 1.72.11 2.8 2.8 0 0 0 1.84-1.3 2.27 2.27 0 0 0 .16-1.3c-.07-.12-.25-.2-.52-.33z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>',
  };

  function navHtml() {
    return nav
      .map((item) => {
        if (item.children) {
          const open = ["services", "gate-automation", "gate-fabrication", "garage-doors", "cctv"].includes(page);
          return `<div class="drop${open ? " open" : ""}">
            <span>${item.label} ▾</span>
            <div class="drop-menu">
              ${item.children
                .map(
                  (c) =>
                    `<a href="${c.href}"${document.location.pathname.endsWith(c.href) ? ' class="active"' : ""}>${c.label}</a>`
                )
                .join("")}
            </div>
          </div>`;
        }
        const active = page === item.id ? " active" : "";
        return `<a href="${item.href}" class="${active.trim()}">${item.label}</a>`;
      })
      .join("");
  }

  const topbar = document.getElementById("topbar");
  if (topbar) {
    topbar.className = "topbar";
    topbar.innerHTML = `<div class="container">
      <div class="topbar-links">
        <a href="tel:${TEL}">${icon.phone} Call Now · ${PHONE}</a>
        <a href="https://wa.me/${WA}" target="_blank" rel="noopener">${icon.chat} WhatsApp</a>
        <a href="mailto:${EMAIL}">${icon.mail} Email</a>
      </div>
      <span>Cape Town &amp; Western Cape</span>
    </div>`;
  }

  const header = document.getElementById("header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `<div class="container header-inner">
      <a class="brand" href="index.html">
        <img src="assets/logo-wordmark.png" alt="KJ Trading (Pty) Ltd logo" width="180" height="56" />
        <div class="brand-name">KJ Trading (Pty) Ltd<span>Access · Automation · Security</span></div>
      </a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">Menu</button>
      <nav class="nav" aria-label="Main">${navHtml()}</nav>
      <div class="header-cta">
        <a class="btn btn-ghost" href="tel:${TEL}">Call Now</a>
        <a class="btn btn-primary" href="quote.html">Request a Quote</a>
      </div>
    </div>`;
  }

  const footer = document.getElementById("footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `<div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="assets/logo-wordmark.png" alt="KJ Trading (Pty) Ltd" />
          <p>Professional gate automation, custom steel fabrication, sectional garage doors and CCTV installation throughout Cape Town and the Western Cape.</p>
        </div>
        <div>
          <h4>Company</h4>
          <a href="about.html">About</a>
          <a href="gallery.html">Gallery</a>
          <a href="projects.html">Projects</a>
          <a href="faq.html">FAQs</a>
          <a href="why-choose-us.html">Why Choose Us</a>
          <a href="brands.html">Brands</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="gate-automation.html">Gate Automation</a>
          <a href="gate-fabrication.html">Gate Fabrication</a>
          <a href="garage-doors.html">Garage Doors</a>
          <a href="cctv.html">CCTV</a>
          <a href="quote.html">Request a Quote</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:${TEL}">${PHONE}</a>
          <a href="mailto:${EMAIL}">${EMAIL}</a>
          <a href="contact.html">${ADDRESS}</a>
          <p>Mon–Fri 08:00–17:00<br>Sat 08:00–13:00</p>
          <h4 style="margin-top:1rem">Follow Us</h4>
          <a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp</a>
          <a href="https://www.facebook.com/search/top?q=KJ%20Trading%20Pty%20Ltd%20Cape%20Town" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
      <div class="footer-meta">
        <span>Copyright © 2026 KJ Trading (Pty) Ltd. All Rights Reserved.</span>
        <div class="lekker-row">
          <a href="https://lekker.network/" target="_blank" rel="noopener">
            <img src="assets/lekker-logo.png" alt="Powered by Lekker Network" />
          </a>
          <a href="https://lekker.network/the-lekker-network-verified" target="_blank" rel="noopener">
            <img class="lekker-badge" src="assets/lekker-badge.png" alt="Lekker Network Verified Level 1" />
          </a>
        </div>
      </div>
    </div>`;
  }

  if (!document.querySelector(".wa-float")) {
    const wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = `https://wa.me/${WA}?text=${encodeURIComponent("Hi KJ Trading, I would like a quote.")}`;
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat on WhatsApp");
    wa.innerHTML = icon.chat;
    document.body.appendChild(wa);

    const call = document.createElement("a");
    call.className = "call-float";
    call.href = `tel:${TEL}`;
    call.setAttribute("aria-label", "Call KJ Trading");
    call.innerHTML = icon.phone;
    document.body.appendChild(call);
  }

  const toggle = document.querySelector(".menu-toggle");
  const navEl = document.querySelector(".nav");
  if (toggle && navEl) {
    toggle.addEventListener("click", () => {
      const open = navEl.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navEl.querySelectorAll(".drop > span").forEach((span) => {
      span.addEventListener("click", (e) => {
        if (window.matchMedia("(max-width: 980px)").matches) {
          e.preventDefault();
          span.parentElement.classList.toggle("open");
        }
      });
    });
  }

  document.querySelectorAll(".js-check-list").forEach((ul) => {
    ul.querySelectorAll("li").forEach((li) => {
      li.insertAdjacentHTML("afterbegin", icon.check);
    });
  });

  const slides = document.querySelector(".slides");
  if (slides) {
    const total = slides.children.length;
    let i = 0;
    const dots = document.querySelector(".slider-nav");
    function go(n) {
      i = n;
      slides.style.transform = `translateX(-${i * 100}%)`;
      if (dots) {
        [...dots.children].forEach((d, idx) => d.classList.toggle("active", idx === i));
      }
    }
    if (dots) {
      for (let n = 0; n < total; n++) {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Show testimonial " + (n + 1));
        if (n === 0) b.className = "active";
        b.addEventListener("click", () => go(n));
        dots.appendChild(b);
      }
    }
    setInterval(() => go((i + 1) % total), 5500);
  }

  const counters = document.querySelectorAll("[data-count]");
  if (counters.length) {
    const run = (el) => {
      const target = Number(el.getAttribute("data-count"));
      const suffix = el.getAttribute("data-suffix") || "";
      let n = 0;
      const step = Math.max(1, Math.round(target / 40));
      const t = setInterval(() => {
        n += step;
        if (n >= target) {
          n = target;
          clearInterval(t);
        }
        el.textContent = n + suffix;
      }, 30);
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((c) => io.observe(c));
  }

  document.querySelectorAll("form[data-kj-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const lines = Object.entries(data)
        .filter(([k]) => k !== "images")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      const success = form.querySelector(".form-success");
      if (success) success.classList.add("show");
      const msg = `Hello KJ Trading, I would like a quote.\n\n${lines}`;
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
      form.reset();
    });
  });

  const lb = document.getElementById("lightbox");
  if (lb) {
    document.querySelectorAll("[data-full]").forEach((el) => {
      el.addEventListener("click", () => {
        lb.querySelector("img").src = el.getAttribute("data-full");
        lb.querySelector("p").textContent = el.getAttribute("data-caption") || "";
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", () => lb.classList.remove("open"));
  }
})();
