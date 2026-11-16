import {photos} from "./photos.js";
import React from "react";
import View from "./View.js";
import { D, L } from "./content.js";

export default class App extends React.Component {
  state = {
    lang: null,
    vw: 1440,
    reduce: false,
    inn: false,
    wm: 150,
    tIdx: 0,
    now: "",
    chat: false,
    chatPick: null,
    menu: false,
    fName: "",
    fMail: "",
    fMsg: "",
    err: false,
    sent: false,
  };
  headRef = React.createRef();
  logoRef = React.createRef();
  glowRef = React.createRef();
  shadowRef = React.createRef();
  wmBox = React.createRef();
  wmRef = React.createRef();
  lionRef = React.createRef();
  mqRef = React.createRef();
  chatRef = React.createRef();
  subRef = React.createRef();
  pillRef = React.createRef();
  live = { mx: 0, my: 0, x: 0, y: 0, roar: -99, mq: 0 };
  D = D;
  L = L;
  render() {
    return View(this.renderVals());
  }
  componentDidMount() {
    const q = new URLSearchParams(location.search);
    this.part = q.get("part") || "full";
    this.qLang = q.get("lang");
    this.freeze =
      q.has("t") && Number.isFinite(Number(q.get("t")))
        ? Number(q.get("t"))
        : null;
    this.seq0 = performance.now();
    this.skip = () => {
      if (performance.now() - this.seq0 >= 0)
        this.seq0 = Math.min(this.seq0, performance.now() - 6000);
    };
    ["wheel", "touchstart", "keydown", "pointerdown"].forEach((ev) =>
      addEventListener(ev, this.skip, { passive: true }),
    );
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    this.setState({ reduce: mq.matches, vw: innerWidth });
    this.motionQuery = mq;
    this.onMotion = (e) => this.setState({ reduce: e.matches });
    mq.addEventListener("change", this.onMotion);
    this.onEscape = (e) => {
      if (e.key === "Escape") this.setState({ menu: false, chat: false });
    };
    addEventListener("keydown", this.onEscape);
    this.onResize = () => {
      this.setState({ vw: innerWidth });
      this.fit();
    };
    this.onMove = (e) => {
      this.live.mx = (e.clientX / innerWidth) * 2 - 1;
      this.live.my = (e.clientY / innerHeight) * 2 - 1;
    };
    addEventListener("resize", this.onResize);
    addEventListener("mousemove", this.onMove);
    const fmt = new Intl.DateTimeFormat("de-DE", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const upd = () => this.setState({ now: fmt.format(new Date()) });
    upd();
    this.clk = setInterval(upd, 1000);
    this.io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = 1;
            e.target.style.transform = "none";
            this.io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    setTimeout(
      () =>
        document.querySelectorAll("[data-rv]").forEach((el) => {
          if (this.part === "full") this.io.observe(el);
          else {
            el.style.transition = "none";
            el.style.opacity = 1;
            el.style.transform = "none";
          }
        }),
      300,
    );
    setTimeout(() => this.fit(), 60);
    if (document.fonts && document.fonts.ready)
      document.fonts.ready.then(() => {
        this.fit();
        setTimeout(() => this.fit(), 400);
      });
    this.roarIv = setInterval(() => this.doRoar(), 9000);
    this.raf = requestAnimationFrame(this.frame);
  }
  componentDidUpdate(_, ps) {
    if (ps.vw !== this.state.vw) this.fit();
  }
  componentWillUnmount() {
    this.motionQuery?.removeEventListener("change", this.onMotion);
    removeEventListener("keydown", this.onEscape);
    removeEventListener("resize", this.onResize);
    removeEventListener("mousemove", this.onMove);
    ["wheel", "touchstart", "keydown", "pointerdown"].forEach((ev) =>
      removeEventListener(ev, this.skip),
    );
    clearInterval(this.clk);
    clearInterval(this.roarIv);
    cancelAnimationFrame(this.raf);
    this.io && this.io.disconnect();
  }
  doRoar() {
    if (this.freeze === null && performance.now() - this.seq0 > 4500)
      this.live.roar = performance.now() / 1000;
  }
  fit() {
    const el = this.wmRef.current,
      box = this.wmBox.current;
    if (!el || !box || !box.clientWidth) return;
    el.style.fontSize = "100px";
    const w = el.offsetWidth;
    if (!w) return;
    const size = Math.floor(((100 * box.clientWidth) / w) * 10) / 10;
    el.style.fontSize = size + "px";
    if (Math.abs(size - this.state.wm) > 0.2) this.setState({ wm: size });
  }
  geo() {
    const vw = innerWidth,
      vh = Math.max(innerHeight, 600),
      n = vw < 900;
    const H = n
        ? Math.min(vw * 1.25, vh * 0.62)
        : Math.min(vh * 0.9, vw * 0.62),
      W = (H * 1173) / 1341;
    return {
      n,
      vw,
      W,
      H,
      cx: vw * 0.5 - W * (n ? 0.08 : 0.06),
      by: vh + H * (n ? 0.06 : 0.07),
      pad:
        Math.max(20, Math.min(vw * 0.055, 80)) + Math.max(0, (vw - 1440) / 2),
    };
  }
  frame = (now) => {
    this.raf = requestAnimationFrame(this.frame);
    const li = this.lionRef.current,
      gl = this.glowRef.current,
      sh = this.shadowRef.current,
      wm = this.wmBox.current,
      wi = this.wmRef.current,
      lg = this.logoRef.current,
      hd = this.headRef.current,
      mq = this.mqRef.current,
      sb = this.subRef.current,
      pl = this.pillRef.current;
    if (!li) return;
    const fz = this.freeze !== null,
      red = this.red || fz,
      t = now / 1000,
      L = this.live,
      g = this.geo(),
      part = this.part,
      cl = (v) => Math.max(0, Math.min(1, v));
    const T = fz
      ? this.freeze
      : this.red || part === "main"
        ? 99
        : (now - this.seq0) / 1000;
    // First hold the two-line wordmark behind the lion, then lift it above.
    const liftProgress = cl((T - 4.3) / 1.3);
    const lift = liftProgress * liftProgress * (3 - 2 * liftProgress);
    const startWordmarkCenter = g.by - g.H + g.H * (g.n ? 0.3 : 0.37);
    if (!g.n) {
      g.H *= 1 - 0.28 * lift;
      g.W = g.H * 1173 / 1341;
      g.cx = g.vw * 0.5 - g.W * 0.06;
      g.by = Math.max(innerHeight, 600) + g.H * 0.07;
    }
    L.x += (L.mx - L.x) * 0.06;
    L.y += (L.my - L.y) * 0.06;
    const u = cl(T / 2.4),
      arr = u < 0.5 ? 8 * u * u * u * u : 1 - Math.pow(-2 * u + 2, 4) / 2,
      walk = 1 - arr;
    const idle = red ? 0 : cl((T - 2.8) / 1),
      wr = 1 - Math.pow(1 - cl((T - 2.7) / 0.9), 3),
      ui = cl((T - 3.4) / 0.4),
      gw = cl((T - 2.4) / 1.2);
    const p =
        part === "full" && !this.red
          ? Math.min(1, scrollY / (innerHeight * 0.85))
          : 0,
      e = p * p * (3 - 2 * p);
    const br = Math.sin((t * Math.PI) / 2) * idle,
      k = (t - L.roar) / 1.8,
      r = idle && k > 0 && k < 1 ? Math.sin(Math.PI * k) : 0,
      sw = Math.sin(t * 0.9) * 0.3 * idle;
    const px = -L.x * 16 * (1 - e) * idle,
      py = -L.y * 10 * (1 - e) * idle;
    const cx0 = g.cx + (g.vw + g.W * 0.3 - g.cx) * walk,
      bob = Math.sin(T * 9) * 6 * walk * (walk < 1 ? 1 : 0),
      settle = Math.sin(Math.PI * cl((T - 2.2) / 0.7)) * 0.008;
    const s =
      (1 + (36 / g.H - 1) * e) * (1 + (br * 0.006 + r * 0.02) * (1 - e));
    const bx = cx0 + (g.pad + 18 - cx0) * e,
      by = g.by + (56 - g.by) * e;
    li.style.width = g.W + "px";
    li.style.height = g.H + "px";
    li.style.transform =
      "translate3d(" +
      (bx - g.W / 2 + px) +
      "px," +
      (by - g.H + py + bob) +
      "px,0) scale(" +
      s +
      "," +
      s * (1 - settle) +
      ") rotate(" +
      (sw + Math.sin(T * 9 + 1) * 0.5 * walk) * (1 - e) +
      "deg)";
    li.style.opacity = e > 0.97 ? 0 : 1;
    if (gl) {
      const D = g.H * 1.02,
        gx = cx0 + g.W * 0.15,
        gy = g.by - g.H * 0.7;
      gl.style.width = gl.style.height = D + "px";
      gl.style.transform =
        "translate3d(" +
        (gx - D / 2 - px * 0.5) +
        "px," +
        (gy - D / 2 - py * 0.5) +
        "px,0) scale(" +
        (0.8 + 0.2 * gw + br * 0.02 + r * 0.14) +
        ")";
      gl.style.opacity = Math.min(1, 0.1 + 0.62 * gw + br * 0.06 + r * 0.28);
    }
    if (sh) {
      const w = g.W * 1.15;
      sh.style.width = w + "px";
      sh.style.transform = "translateX(" + (cx0 - w / 2) + "px)";
    }
    if (wm && wi) {
      const titleTop = 100;
      const availableHeight = Math.max(64, g.by - g.H - titleTop - 30);
      const finalScale = Math.min(0.85, availableHeight / Math.max(1, wm.offsetHeight));
      const titleScale = 1 + (finalScale - 1) * lift;
      const startTop = startWordmarkCenter - wm.offsetHeight / 2;
      const titleY = startTop + (titleTop - startTop) * lift;
      wm.style.transformOrigin = "50% 0";
      wm.style.transform = `translate3d(${-px * 0.4}px,${titleY - py * 0.3}px,0) scale(${titleScale})`;
      wi.style.transform = "translateY(" + (1 - wr) * 55 + "%)";
      wi.style.opacity = wr;
    }
    if (sb) sb.style.opacity = ui;
    if (pl) pl.style.opacity = ui;
    if (lg) {
      const on =
        part === "main" ||
        (part === "full" &&
          (this.red ? scrollY > innerHeight * 0.8 : e > 0.97));
      lg.style.opacity = on ? 1 : 0;
      lg.style.width = on ? "36px" : "0px";
      lg.style.marginRight = on ? "10px" : "0px";
    }
    if (hd) {
      const solid = part === "main" ? scrollY > 8 : scrollY > innerHeight * 0.9;
      hd.style.background = solid ? "rgba(11,9,9,.78)" : "transparent";
      hd.style.backdropFilter = hd.style.webkitBackdropFilter = solid
        ? "blur(16px)"
        : "none";
      hd.style.opacity = part === "main" ? 1 : ui;
      hd.style.pointerEvents = ui > 0.5 || part === "main" ? "auto" : "none";
    }
    const ch = this.chatRef.current;
    if (ch) {
      const on = part === "main" || scrollY > innerHeight * 0.8;
      ch.style.opacity = on ? 1 : 0;
      ch.style.pointerEvents = on ? "auto" : "none";
    }
    if (mq && !this.red) {
      L.mq -= 0.6;
      const half = mq.scrollWidth / 2;
      if (half && -L.mq > half) L.mq += half;
      mq.style.transform = "translate3d(" + L.mq + "px,0,0)";
    }
  };
  renderVals() {
    const s = this.state,
      part = this.part || "full",
      lang = s.lang || this.qLang || this.props.lang || "de",
      t = this.D[lang] || this.D.de,
      L = this.L[lang] || this.L.de;
    const red =
      s.reduce ||
      this.props.motion === false ||
      new URLSearchParams(location.search).get("motion") === "off";
    this.red = red;
    const vw = s.vw,
      narrow = vw < 900,
      mob = vw < 640;
    const spans = mob
      ? [12, 12, 12, 12, 12, 12]
      : narrow
        ? [6, 6, 6, 6, 6, 6]
        : [7, 5, 5, 7, 6, 6];
    const work = photos.map((photo, i) => ({
      ...photo,
      kind: lang === 'en' ? photo.enKind : photo.kind,
      title: lang === 'en' ? photo.enTitle : photo.title,
      col: spans[i % spans.length],
    }));
    const steps = L.steps.map((x, i) => ({
      num: "0" + (i + 1) + " / 03",
      title: x[0],
      sub: x[1],
      desc: x[2],
      delay: i * 110,
    }));
    const caseImages = [
      {src:'/assets/photos/football-royal-five.webp', alt:'Fußballspieler im FC Royal Five Trikot, Rückenansicht', position:'50% 30%', fit:'contain', ratio:'3/4'},
      {src:'/assets/photos/hotel-studio-ai.webp', alt:'KI-generierte Hotelszene mit Kameramann, Stativ und Softboxen im Hotelzimmer', position:'50% 50%', fit:'cover', ratio:'4/3', caption:lang==='en'?'AI-generated concept image':'KI-generiertes Konzeptbild'},
      {src:'/assets/photos/restaurant-shoot.webp', alt:'Kamera und Laptop bei einem Dreh im Gastronomiebereich', position:'50% 60%', fit:'cover', ratio:'4/3'},
    ];
    const cases = L.cases.map((x, i) => ({
      image: caseImages[i],
      tag: "0" + (i + 1) + " · " + x[0],
      title: x[1],
      before: x[2],
      did: x[3],
      m: x[4].map((m) => ({ v: m[0], l: m[1] })),
      colA: narrow ? 12 : 5,
      colB: narrow ? 12 : 7,
      padL: narrow ? "0" : "24px",
    }));
    const q = L.tests[s.tIdx % 3],
      pad = (v) => String(v).padStart(2, "0");
    const mag = (ev) => {
      if (this.red) return;
      const r = ev.currentTarget.getBoundingClientRect();
      ev.currentTarget.style.transform =
        "translate(" +
        (ev.clientX - r.left - r.width / 2) * 0.25 +
        "px," +
        (ev.clientY - r.top - r.height / 2) * 0.35 +
        "px)";
    };
    const unmag = (ev) => {
      ev.currentTarget.style.transform = "";
    };
    const on = lang === "de";
    return {
      t,
      work,
      steps,
      cases,
      mag,
      unmag,
      marquee: L.marq.concat(L.marq, L.marq, L.marq),
      logos: [t.logo, t.logo, t.logo, t.logo].slice(0, mob ? 2 : 4),
      headRef: this.headRef,
      logoRef: this.logoRef,
      glowRef: this.glowRef,
      shadowRef: this.shadowRef,
      wmBox: this.wmBox,
      wmRef: this.wmRef,
      lionRef: this.lionRef,
      mqRef: this.mqRef,
      chatRef: this.chatRef,
      subRef: this.subRef,
      pillRef: this.pillRef,
      showIntro: part === "main" ? "none" : "block",
      showMain: part === "intro" ? "none" : "block",
      lionPos: red || part === "intro" ? "absolute" : "fixed",
      wmSize: s.wm,
      wmDisp: "block",
      cueMob: narrow ? "flex" : "none",
      cueDesk: narrow ? "none" : "flex",
      subBottom: narrow ? "100px" : "48px",
      pillBottom: narrow ? "24px" : "48px",
      pillJustify: narrow ? "space-between" : "flex-end",
      navDisplay: narrow ? "none" : "flex",
      burgerDisplay: narrow ? "flex" : "none",
      menuDisplay: narrow && s.menu ? "flex" : "none",
      toggleMenu: () => this.setState((x) => ({ menu: !x.menu })),
      setDe: () => {
        document.documentElement.lang = "de";
        this.setState({ lang: "de" });
      },
      setEn: () => {
        document.documentElement.lang = "en";
        this.setState({ lang: "en" });
      },
      deBg: on ? "#F5F0ED" : "transparent",
      deFg: on ? "#1A0704" : "#F5F0ED",
      enBg: on ? "transparent" : "#F5F0ED",
      enFg: on ? "#F5F0ED" : "#1A0704",
      roar: () => this.doRoar(),
      quote: { text: q[0], who: q[1], role: q[2] },
      counter: pad((s.tIdx % 3) + 1) + " / 03",
      prevT: () => this.setState((x) => ({ tIdx: (x.tIdx + 2) % 3 })),
      nextT: () => this.setState((x) => ({ tIdx: (x.tIdx + 1) % 3 })),
      clock: s.now,
      fName: s.fName,
      fMail: s.fMail,
      fMsg: s.fMsg,
      onName: (e) => this.setState({ fName: e.target.value }),
      onMail: (e) =>
        this.setState({ fMail: e.target.value, err: false, sent: false }),
      onMsg: (e) => this.setState({ fMsg: e.target.value, sent: false }),
      submit: (e) => {
        e.preventDefault();
        const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.fMail);
        this.setState({ err: !ok, sent: ok });
        if (ok) {
          const blob = new Blob(
            [
              "NextLevel – Projektanfrage\n\nName: " +
                s.fName +
                "\nE-Mail: " +
                s.fMail +
                "\n\n" +
                s.fMsg,
            ],
            { type: "text/plain;charset=utf-8" },
          );
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "nextlevel-anfrage.txt";
          a.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
        }
      },
      mailBorder: s.err ? "#FF6B5E" : "rgba(255,255,255,.16)",
      errDisplay: s.err ? "block" : "none",
      sendLabel: s.sent ? t.sent : t.send,
      chatDisplay: part === "intro" ? "none" : "flex",
      chatPanel: s.chat ? "block" : "none",
      chatMsg: s.chatPick ? t.chatThanks : t.chatMsg,
      toggleChat: () => this.setState((x) => ({ chat: !x.chat })),
      chips: L.chips.map((c) => ({
        label: c,
        pick: () => {
          this.setState({
            chatPick: c,
            fMsg: c + " – ",
            chat: false,
            sent: false,
          });
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: this.red ? "auto" : "smooth" });
          document.querySelector("textarea").focus({ preventScroll: true });
        },
      })),
    };
  }
}
