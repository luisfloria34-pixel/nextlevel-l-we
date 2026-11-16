import {ProjectBrands} from './ProjectBrands.js';
import ContactForm from "./ContactForm.js";
import {VideoShowcase,AppShowcase} from "./Showcases.js";
import React from "react";
const h = React.createElement;
export default function View(v) {
  const {
    burgerDisplay,
    cases,
    chatDisplay,
    chatMsg,
    chatPanel,
    chatRef,
    chips,
    clock,
    counter,
    cueDesk,
    cueMob,
    deBg,
    deFg,
    enBg,
    enFg,
    errDisplay,
    fMail,
    fMsg,
    fName,
    glowRef,
    headRef,
    lionPos,
    lionRef,
    logoRef,
    logos,
    mag,
    mailBorder,
    marquee,
    menuDisplay,
    mqRef,
    navDisplay,
    nextT,
    onMail,
    onMsg,
    onName,
    pillBottom,
    pillJustify,
    pillRef,
    prevT,
    quote,
    roar,
    sendLabel,
    setDe,
    setEn,
    shadowRef,
    showIntro,
    showMain,
    steps,
    subBottom,
    subRef,
    submit,
    t,
    toggleChat,
    toggleMenu,
    unmag,
    wmBox,
    wmDisp,
    wmRef,
    wmSize,
    work,
  } = v;
  return h(
    React.Fragment,
    null,
    h(
      "header",
      {
        ref: headRef,
        style: {
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "50",
          transition: "background .3s",
        },
      },
      h(
        "div",
        {
          style: {
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "20px clamp(20px,5.5vw,80px)",
            boxSizing: "content-box",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            position: "relative",
          },
        },
        h(
          "a",
          {
            href: "#top",
            style: {
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#F5F0ED",
              font: "600 15px/1 'Geist',sans-serif",
              letterSpacing: "-.01em",
            },
          },
          h(
            "span",
            {
              ref: logoRef,
              style: {
                width: "0",
                height: "36px",
                flex: "none",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#8F1F1A",
                display: "block",
                opacity: "0",
                transition: "opacity .25s,width .25s,margin .25s",
              },
            },
            h("img", {
              src: "/assets/lion.webp",
              alt: "",
              style: {
                width: "122px",
                margin: "-9px 0 0 -73px",
                display: "block",
              },
            }),
          ),
          "NextLevel",
        ),
        h(
          "nav",
          {
            style: {
              display: navDisplay,
              gap: "32px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              font: "400 14px/1 'Geist',sans-serif",
            },
          },
          h(
            "a",
            { href: "#services", style: { textDecoration: "none" } },
            t.nSvc,
          ),
          h("a", { href: "#work", style: { textDecoration: "none" } }, t.nWork),
          h(
            "a",
            { href: "#process", style: { textDecoration: "none" } },
            t.nProc,
          ),
          h(
            "a",
            { href: "#pricing", style: { textDecoration: "none" } },
            t.nPrice,
          ),
        ),
        h(
          "div",
          { style: { display: "flex", alignItems: "center", gap: "12px" } },
          h(
            "div",
            {
              style: {
                display: "flex",
                border: "1px solid rgba(255,255,255,.22)",
                borderRadius: "999px",
                padding: "3px",
                font: "500 12px/1 'Geist',sans-serif",
                letterSpacing: ".06em",
              },
            },
            h(
              "button",
              {
                onClick: setDe,
                "aria-label": "Deutsch",
                "aria-pressed": deBg !== "transparent",
                style: {
                  border: "0",
                  cursor: "pointer",
                  borderRadius: "999px",
                  height: "28px",
                  padding: "0 11px",
                  font: "inherit",
                  letterSpacing: "inherit",
                  background: deBg,
                  color: deFg,
                },
              },
              "DE",
            ),
            h(
              "button",
              {
                onClick: setEn,
                "aria-label": "English",
                "aria-pressed": enBg !== "transparent",
                style: {
                  border: "0",
                  cursor: "pointer",
                  borderRadius: "999px",
                  height: "28px",
                  padding: "0 11px",
                  font: "inherit",
                  letterSpacing: "inherit",
                  background: enBg,
                  color: enFg,
                },
              },
              "EN",
            ),
          ),
          h(
            "a",
            {
              href: "#contact",
              style: {
                display: navDisplay,
                alignItems: "center",
                height: "36px",
                padding: "0 16px",
                borderRadius: "999px",
                background: "#F5F0ED",
                color: "#1A0704",
                font: "500 14px/1 'Geist',sans-serif",
                textDecoration: "none",
              },
              className: "state-1",
            },
            t.start,
          ),
          h(
            "button",
            {
              onClick: toggleMenu,
              "aria-label": "Menü",
              "aria-expanded": menuDisplay !== "none",
              "aria-controls": "mobile-menu",
              style: {
                display: burgerDisplay,
                flexDirection: "column",
                justifyContent: "center",
                gap: "6px",
                width: "44px",
                height: "44px",
                border: "0",
                background: "transparent",
                cursor: "pointer",
                padding: "0 10px",
                boxSizing: "border-box",
              },
            },
            h("i", {
              style: {
                display: "block",
                height: "1.5px",
                background: "#F5F0ED",
              },
            }),
            h("i", {
              style: {
                display: "block",
                height: "1.5px",
                background: "#F5F0ED",
              },
            }),
          ),
        ),
      ),
      h(
        "div",
        {
          id: "mobile-menu",
          style: {
            display: menuDisplay,
            flexDirection: "column",
            margin: "0 20px",
            padding: "8px 20px",
            borderRadius: "20px",
            background: "#151212",
            border: "1px solid rgba(255,255,255,.1)",
            boxShadow: "0 24px 60px -20px rgba(0,0,0,.7)",
            font: "400 20px/1 'Geist',sans-serif",
          },
        },
        h(
          "a",
          {
            href: "#services",
            onClick: toggleMenu,
            style: {
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid rgba(255,255,255,.1)",
            },
          },
          t.nSvc,
        ),
        h(
          "a",
          {
            href: "#work",
            onClick: toggleMenu,
            style: {
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid rgba(255,255,255,.1)",
            },
          },
          t.nWork,
        ),
        h(
          "a",
          {
            href: "#process",
            onClick: toggleMenu,
            style: {
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid rgba(255,255,255,.1)",
            },
          },
          t.nProc,
        ),
        h(
          "a",
          {
            href: "#pricing",
            onClick: toggleMenu,
            style: {
              textDecoration: "none",
              padding: "16px 0",
              borderBottom: "1px solid rgba(255,255,255,.1)",
            },
          },
          t.nPrice,
        ),
        h(
          "a",
          {
            href: "#contact",
            onClick: toggleMenu,
            style: {
              textDecoration: "none",
              padding: "16px 0",
              color: "#FF5A2B",
            },
          },
          t.start + " →",
        ),
      ),
    ),
    h(
      "main",
      { id: "top", "data-root": "1", style: { overflowX: "clip" } },
      h(
        "section",
        {
          "data-sec": "intro",
          "data-screen-label": "01 Intro",
          onClick: roar,
          style: {
            display: showIntro,
            position: "relative",
            height: "100vh",
            minHeight: "600px",
            overflow: "hidden",
            background:
              "radial-gradient(120% 95% at 50% 40%,#8F1F1A 0%,#6B0E0C 40%,#4C0001 80%)",
          },
        },
        h("div", {
          ref: glowRef,
          style: {
            position: "absolute",
            left: "0",
            top: "0",
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side,rgba(255,106,58,.6),rgba(255,90,43,.2) 48%,rgba(255,90,43,0) 72%)",
            pointerEvents: "none",
            opacity: "0",
            willChange: "transform,opacity",
          },
        }),
        h("div", {
          ref: shadowRef,
          style: {
            position: "absolute",
            left: "0",
            bottom: "-70px",
            height: "170px",
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side,rgba(20,0,0,.75),rgba(20,0,0,0))",
            pointerEvents: "none",
          },
        }),
        h(
          "h1",
          {
            ref: wmBox,
            "aria-label": "NextLevel",
            style: {
              position: "absolute",
              top: "0",
              left: "clamp(20px,5.5vw,80px)",
              right: "clamp(20px,5.5vw,80px)",
              margin: "0",
              overflow: "hidden",
              textAlign: "center",
              willChange: "transform",
            },
          },
          h(
            "span",
            {
              ref: wmRef,
              style: {
                display: "inline-block",
                whiteSpace: "nowrap",
                textAlign: "left",
                font: "900 expanded " + wmSize + "px/.82 'Archivo',sans-serif",
                letterSpacing: "-.02em",
                color: "#F5F0ED",
                opacity: "0",
                willChange: "transform,opacity",
              },
            },
            h("span", { style: { display: wmDisp } }, "NEXT"),
            h("span", { style: { display: wmDisp } }, "LEVEL"),
          ),
        ),
        h(
          "div",
          {
            ref: lionRef,
            style: {
              position: lionPos,
              left: "0",
              top: "0",
              zIndex: "60",
              pointerEvents: "none",
              transformOrigin: "50% 100%",
              opacity: "0",
              willChange: "transform",
            },
          },
          h("img", {
            src: "/assets/lion.webp",
            alt: t.lionAlt,
            style: {
              display: "block",
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 0 26px rgba(255,90,43,.38))",
            },
          }),
        ),
        h(
          "div",
          {
            ref: subRef,
            style: {
              position: "absolute",
              left: "clamp(20px,5.5vw,80px)",
              bottom: subBottom,
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              zIndex: "61",
              opacity: "0",
            },
          },
          h(
            "p",
            {
              style: {
                margin: "0",
                maxWidth: "280px",
                font: "400 clamp(18px,1.4vw,20px)/1.35 'Geist',sans-serif",
                color: "#F5F0ED",
                textShadow: "0 1px 12px rgba(40,0,0,.6)",
              },
            },
            t.introLine,
          ),
          h(
            "div",
            {
              style: {
                display: cueDesk,
                alignItems: "center",
                gap: "12px",
                font: "500 12px/1 'Geist',sans-serif",
                letterSpacing: ".14em",
                textTransform: "uppercase",
              },
            },
            h("i", {
              style: {
                display: "block",
                width: "40px",
                height: "1px",
                background: "#F5F0ED",
              },
            }),
            t.scroll,
          ),
        ),
        h(
          "div",
          {
            ref: pillRef,
            style: {
              position: "absolute",
              left: "clamp(20px,5.5vw,80px)",
              right: "clamp(20px,5.5vw,80px)",
              bottom: pillBottom,
              display: "flex",
              justifyContent: pillJustify,
              alignItems: "center",
              zIndex: "61",
              pointerEvents: "none",
              opacity: "0",
            },
          },
          h(
            "div",
            {
              style: {
                display: cueMob,
                alignItems: "center",
                gap: "10px",
                font: "500 12px/1 'Geist',sans-serif",
                letterSpacing: ".14em",
                textTransform: "uppercase",
              },
            },
            h("i", {
              style: {
                display: "block",
                width: "28px",
                height: "1px",
                background: "#F5F0ED",
              },
            }),
            t.scroll,
          ),
          h(
            "a",
            {
              href: "#contact",
              onMouseMove: mag,
              onMouseLeave: unmag,
              style: {
                pointerEvents: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "56px",
                padding: "0 28px",
                borderRadius: "999px",
                background: "#F5F0ED",
                color: "#4C0001",
                font: "500 16px/1 'Geist',sans-serif",
                textDecoration: "none",
                boxShadow: "0 24px 60px -20px rgba(0,0,0,.6)",
                transition: "transform .25s ease",
              },
              className: "state-2",
            },
            t.start + " ",
            h("span", {}, "→"),
          ),
        ),
      ),
      h(
        "div",
        {
          style: {
            display: showMain,
            position: "relative",
            zIndex: "2",
            background:
              "radial-gradient(900px 600px at 82% 0%,rgba(143,31,26,.28),rgba(143,31,26,0) 70%),#0B0909",
          },
        },
        h(
          "section",
          {
            id: "statement",
            "data-sec": "statement",
            "data-screen-label": "02 Statement",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding:
                "clamp(140px,14vw,200px) clamp(20px,5.5vw,80px) clamp(64px,7vw,96px)",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              },
            },
            h(
              "div",
              {
                style: {
                  font: "500 12px/1 'Geist',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#FF5A2B",
                },
              },
              t.eyebrow,
            ),
            h(
              "h2",
              {
                style: {
                  margin: "0",
                  maxWidth: "1080px",
                  font: "300 clamp(44px,7.2vw,104px)/1 'Geist',sans-serif",
                  letterSpacing: "-.045em",
                  textWrap: "balance",
                },
              },
              t.h1a + " ",
              h(
                "span",
                {
                  style: {
                    background:
                      "linear-gradient(100deg,#FF8A4C,#FF5A2B 50%,#E0301E)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontWeight: "400",
                  },
                },
                t.h1b,
              ),
              " " + t.h1c,
            ),
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: "32px",
                },
              },
              h(
                "p",
                {
                  style: {
                    margin: "0",
                    maxWidth: "520px",
                    font: "400 clamp(18px,1.4vw,20px)/1.5 'Geist',sans-serif",
                    color: "#A8A09C",
                    textWrap: "pretty",
                  },
                },
                t.sub,
              ),
              h(
                "div",
                { style: { display: "flex", gap: "12px", flexWrap: "wrap" } },
                h(
                  "a",
                  {
                    href: "#contact",
                    onMouseMove: mag,
                    onMouseLeave: unmag,
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      height: "56px",
                      padding: "0 28px",
                      borderRadius: "999px",
                      background: "#FF5A2B",
                      color: "#1A0704",
                      font: "500 16px/1 'Geist',sans-serif",
                      textDecoration: "none",
                      transition: "transform .25s ease,background .2s",
                    },
                    className: "state-3",
                  },
                  t.start,
                ),
                h(
                  "a",
                  {
                    href: "#work",
                    onMouseMove: mag,
                    onMouseLeave: unmag,
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      height: "56px",
                      padding: "0 28px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,.28)",
                      boxSizing: "border-box",
                      color: "#F5F0ED",
                      font: "500 16px/1 'Geist',sans-serif",
                      textDecoration: "none",
                      transition: "transform .25s ease,background .2s",
                    },
                    className: "state-4",
                  },
                  t.see,
                ),
              ),
            ),
          ),
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1) .1s,transform .9s cubic-bezier(.2,.7,.2,1) .1s",
                marginTop: "clamp(64px,8vw,112px)",
                borderTop: "1px solid rgba(255,255,255,.1)",
                paddingTop: "24px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px 48px",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "12px 24px",
                  font: "400 15px/1 'Geist',sans-serif",
                },
              },
              h(
                "span",
                {
                  style: {
                    font: "500 12px/1 'Geist',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#A8A09C",
                  },
                },
                t.builtFor,
              ),
              h("span", {}, t.sec1),
              h("span", {}, t.sec2),
              h("span", {}, t.sec3),
            ),
            h(ProjectBrands, {english: t.nWork === 'Work'}),
          ),
        ),
        h(
          "div",
          {
            style: {
              overflow: "hidden",
              borderBlock: "1px solid rgba(255,255,255,.1)",
              padding: "28px 0",
            },
          },
          h(
            "div",
            {
              ref: mqRef,
              style: {
                display: "flex",
                width: "max-content",
                willChange: "transform",
              },
            },
            marquee.map((l, index) =>
              h(
                React.Fragment,
                { key: index },
                h(
                  "span",
                  {
                    style: {
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "40px",
                      marginRight: "40px",
                      font: "300 clamp(28px,3.2vw,44px)/1 'Geist',sans-serif",
                      letterSpacing: "-.03em",
                      whiteSpace: "nowrap",
                      color: "#F5F0ED",
                    },
                  },
                  l,
                  h("i", {
                    style: {
                      display: "block",
                      width: "8px",
                      height: "8px",
                      background: "#FF5A2B",
                      transform: "rotate(45deg)",
                    },
                  }),
                ),
              ),
            ),
          ),
        ),
        h(
          "section",
          {
            id: "services",
            "data-sec": "services",
            "data-screen-label": "03 Services",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px) 0",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
                marginBottom: "clamp(40px,5vw,72px)",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                },
              },
              h(
                "div",
                {
                  style: {
                    font: "500 12px/1 'Geist',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#FF5A2B",
                  },
                },
                "01 — " + t.nSvc,
              ),
              h(
                "h2",
                {
                  style: {
                    margin: "0",
                    font: "300 clamp(36px,4.5vw,64px)/1.05 'Geist',sans-serif",
                    letterSpacing: "-.035em",
                  },
                },
                t.svcTitle,
              ),
            ),
            h(
              "p",
              {
                style: {
                  margin: "0",
                  maxWidth: "360px",
                  font: "400 18px/1.5 'Geist',sans-serif",
                  color: "#A8A09C",
                },
              },
              t.svcSub,
            ),
          ),
          h(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,260px),1fr))",
                gap: "24px",
              },
            },
            h(
              "article",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1),border-color .2s",
                  background: "#151212",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "20px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "state-5",
              },
              h("img",{className:"service-photo",src:"/assets/photos/restaurant-shoot.webp",alt:"Arbeitsplatz mit Laptop und Monitoren",loading:"lazy",decoding:"async",width:1000,height:750}),
              h(
                "div",
                {
                  style: {
                    padding: "24px 12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      font: "500 12px/1 'Geist',sans-serif",
                      letterSpacing: ".14em",
                      color: "#A8A09C",
                    },
                  },
                  "01",
                ),
                h(
                  "h3",
                  {
                    style: {
                      margin: "0",
                      font: "400 24px/1.15 'Geist',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  t.s1t,
                ),
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      font: "400 16px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                      textWrap: "pretty",
                    },
                  },
                  t.s1d,
                ),
              ),
            ),
            h(
              "article",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1) .09s,transform .9s cubic-bezier(.2,.7,.2,1) .09s,border-color .2s",
                  background: "#151212",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "20px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "state-6",
              },
              h("img",{className:"service-photo",src:"/assets/photos/IMG_8675.webp",alt:"Kamera bei einem Dreh im Freien",loading:"lazy",decoding:"async",width:1000,height:750}),
              h(
                "div",
                {
                  style: {
                    padding: "24px 12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      font: "500 12px/1 'Geist',sans-serif",
                      letterSpacing: ".14em",
                      color: "#A8A09C",
                    },
                  },
                  "02",
                ),
                h(
                  "h3",
                  {
                    style: {
                      margin: "0",
                      font: "400 24px/1.15 'Geist',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  t.s2t,
                ),
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      font: "400 16px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                      textWrap: "pretty",
                    },
                  },
                  t.s2d,
                ),
              ),
            ),
            h(
              "article",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1) .18s,transform .9s cubic-bezier(.2,.7,.2,1) .18s,border-color .2s",
                  background: "#151212",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "20px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "state-7",
              },
              h("img",{className:"service-photo",src:"/assets/photos/IMG_4645.webp",alt:"Blick hinter die Kulissen eines Studiodrehs",loading:"lazy",decoding:"async",width:1000,height:750}),
              h(
                "div",
                {
                  style: {
                    padding: "24px 12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      font: "500 12px/1 'Geist',sans-serif",
                      letterSpacing: ".14em",
                      color: "#A8A09C",
                    },
                  },
                  "03",
                ),
                h(
                  "h3",
                  {
                    style: {
                      margin: "0",
                      font: "400 24px/1.15 'Geist',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  t.s3t,
                ),
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      font: "400 16px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                      textWrap: "pretty",
                    },
                  },
                  t.s3d,
                ),
              ),
            ),
            h(
              "article",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1) .27s,transform .9s cubic-bezier(.2,.7,.2,1) .27s,border-color .2s",
                  background: "#151212",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "20px",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                },
                className: "state-8",
              },
              h('a',{href:'#apps',className:'service-app-preview','aria-label':'App-Projekte ansehen'},h('img',{src:'/assets/photos/meister-app.webp',alt:'meister. App',loading:'lazy',decoding:'async'})),
              h(
                "div",
                {
                  style: {
                    padding: "24px 12px 16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: "1",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      font: "500 12px/1 'Geist',sans-serif",
                      letterSpacing: ".14em",
                      color: "#A8A09C",
                    },
                  },
                  "04",
                ),
                h(
                  "h3",
                  {
                    style: {
                      margin: "0",
                      font: "400 24px/1.15 'Geist',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  t.s4t,
                ),
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      font: "400 16px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                      textWrap: "pretty",
                    },
                  },
                  t.s4d,
                ),
              ),
            ),
          ),
        ),
        h(VideoShowcase,{english:t.nWork==='Work'}),
        h(
          "section",
          {
            id: "work",
            "data-sec": "work",
            "data-screen-label": "04 Work",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px) 0",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
                marginBottom: "clamp(40px,5vw,72px)",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                },
              },
              h(
                "div",
                {
                  style: {
                    font: "500 12px/1 'Geist',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#FF5A2B",
                  },
                },
                "02 — " + t.nWork,
              ),
              h(
                "h2",
                {
                  style: {
                    margin: "0",
                    font: "300 clamp(36px,4.5vw,64px)/1.05 'Geist',sans-serif",
                    letterSpacing: "-.035em",
                  },
                },
                t.workTitle,
              ),
            ),
            h(
              "p",
              {
                style: {
                  margin: "0",
                  maxWidth: "360px",
                  font: "400 18px/1.5 'Geist',sans-serif",
                  color: "#A8A09C",
                },
              },
              t.workSub,
            ),
          ),
          h(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns: "repeat(12,minmax(0,1fr))",
                gap: "24px",
              },
            },
            work.map((c, index) => h('article', {
              key:c.src, 'data-rv':'1', className:'photo-card',
              style:{gridColumn:'span '+c.col}
            },
              h('img',{src:c.src,alt:c.alt,loading:'lazy',decoding:'async',width:1200,height:900,style:{objectPosition:c.position,objectFit:c.fit||'cover'}}),
              h('div',{className:'photo-card-shade','aria-hidden':'true'}),
              h('span',{className:'photo-category'},c.kind),
              h('div',{className:'photo-caption'},h('span',{className:'photo-number'},String(index+1).padStart(2,'0')),h('h3',{},c.title))
            )),
          ),
        ),
        h(AppShowcase,{english:t.nWork==='Work'}),
        h(
          "section",
          {
            id: "process",
            "data-sec": "process",
            "data-screen-label": "05 Process",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px) 0",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "clamp(40px,5vw,72px)",
              },
            },
            h(
              "div",
              {
                style: {
                  font: "500 12px/1 'Geist',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#FF5A2B",
                },
              },
              "03 — " + t.nProc,
            ),
            h(
              "h2",
              {
                style: {
                  margin: "0",
                  font: "300 clamp(36px,4.5vw,64px)/1.05 'Geist',sans-serif",
                  letterSpacing: "-.035em",
                },
              },
              t.procTitle,
            ),
          ),
          h(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,240px),1fr))",
                gap: "24px",
              },
            },
            steps.map((s, index) =>
              h(
                React.Fragment,
                { key: index },
                h(
                  "div",
                  {
                    "data-rv": "1",
                    style: {
                      opacity: "0",
                      transform: "translateY(28px)",
                      transition:
                        "opacity .9s cubic-bezier(.2,.7,.2,1) " +
                        s.delay +
                        "ms,transform .9s cubic-bezier(.2,.7,.2,1) " +
                        s.delay +
                        "ms",
                      borderTop: "1px solid rgba(255,255,255,.22)",
                      paddingTop: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                    },
                  },
                  h(
                    "div",
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        font: "500 12px/1 'Geist',sans-serif",
                        letterSpacing: ".14em",
                        color: "#A8A09C",
                      },
                    },
                    h("i", {
                      style: {
                        display: "block",
                        width: "8px",
                        height: "8px",
                        background: "#FF5A2B",
                        transform: "rotate(45deg)",
                      },
                    }),
                    s.num,
                  ),
                  h(
                    "div",
                    {
                      style: {
                        font: "900 expanded clamp(56px,6.2vw,88px)/.9 'Archivo',sans-serif",
                        letterSpacing: "-.02em",
                        textTransform: "uppercase",
                      },
                    },
                    s.title,
                  ),
                  h(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      },
                    },
                    h(
                      "div",
                      {
                        style: {
                          font: "400 24px/1.15 'Geist',sans-serif",
                          letterSpacing: "-.02em",
                        },
                      },
                      s.sub,
                    ),
                    h(
                      "p",
                      {
                        style: {
                          margin: "0",
                          font: "400 16px/1.5 'Geist',sans-serif",
                          color: "#A8A09C",
                          maxWidth: "340px",
                          textWrap: "pretty",
                        },
                      },
                      s.desc,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        h(
          "section",
          {
            id: "cases",
            "data-sec": "cases",
            "data-screen-label": "06 Case studies",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px) 0",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "clamp(40px,5vw,72px)",
              },
            },
            h(
              "div",
              {
                style: {
                  font: "500 12px/1 'Geist',sans-serif",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#FF5A2B",
                },
              },
              "04 — " + t.caseLabel,
            ),
            h(
              "h2",
              {
                style: {
                  margin: "0",
                  font: "300 clamp(36px,4.5vw,64px)/1.05 'Geist',sans-serif",
                  letterSpacing: "-.035em",
                },
              },
              t.caseTitle,
            ),
          ),
          cases.map((c, index) =>
            h(
              React.Fragment,
              { key: index },
              h(
                "article",
                {
                  "data-rv": "1",
                  style: {
                    opacity: "0",
                    transform: "translateY(28px)",
                    transition:
                      "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                    display: "grid",
                    gridTemplateColumns: "repeat(12,minmax(0,1fr))",
                    gap: "24px",
                    borderTop: "1px solid rgba(255,255,255,.1)",
                    paddingBlock: "clamp(24px,3vw,40px)",
                  },
                },
                h('figure', {className:'case-photo',style:{gridColumn:'span '+c.colA,margin:0}},
                  h('img',{src:c.image.src,alt:c.image.alt,loading:'lazy',decoding:'async',width:1200,height:900,style:{aspectRatio:c.image.ratio,objectFit:c.image.fit,objectPosition:c.image.position}}),
                  c.image.caption ? h('figcaption',{},c.image.caption) : null
                ),
                h(
                  "div",
                  {
                    style: {
                      gridColumn: "span " + c.colB,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "32px",
                      paddingLeft: c.padL,
                    },
                  },
                  h(
                    "div",
                    {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      },
                    },
                    h(
                      "div",
                      {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          flexWrap: "wrap",
                        },
                      },
                      h(
                        "span",
                        {
                          style: {
                            font: "500 12px/1 'Geist',sans-serif",
                            letterSpacing: ".14em",
                            textTransform: "uppercase",
                            color: "#A8A09C",
                          },
                        },
                        c.tag,
                      ),
                      h(
                        "span",
                        {
                          style: {
                            display: "inline-flex",
                            alignItems: "center",
                            height: "24px",
                            padding: "0 10px",
                            border: "1px solid rgba(255,255,255,.22)",
                            borderRadius: "999px",
                            font: "500 11px/1 'Geist',sans-serif",
                            letterSpacing: ".1em",
                            textTransform: "uppercase",
                            color: "#A8A09C",
                          },
                        },
                        t.ex,
                      ),
                    ),
                    h(
                      "h3",
                      {
                        style: {
                          margin: "0",
                          font: "300 clamp(28px,3vw,40px)/1.1 'Geist',sans-serif",
                          letterSpacing: "-.03em",
                          maxWidth: "560px",
                          textWrap: "balance",
                        },
                      },
                      c.title,
                    ),
                    h(
                      "div",
                      {
                        style: {
                          display: "grid",
                          gridTemplateColumns:
                            "repeat(auto-fit,minmax(min(100%,220px),1fr))",
                          gap: "24px",
                        },
                      },
                      h(
                        "div",
                        {},
                        h(
                          "div",
                          {
                            style: {
                              font: "500 12px/1 'Geist',sans-serif",
                              letterSpacing: ".14em",
                              textTransform: "uppercase",
                              color: "#A8A09C",
                              marginBottom: "10px",
                            },
                          },
                          t.before,
                        ),
                        h(
                          "p",
                          {
                            style: {
                              margin: "0",
                              font: "400 16px/1.5 'Geist',sans-serif",
                              textWrap: "pretty",
                            },
                          },
                          c.before,
                        ),
                      ),
                      h(
                        "div",
                        {},
                        h(
                          "div",
                          {
                            style: {
                              font: "500 12px/1 'Geist',sans-serif",
                              letterSpacing: ".14em",
                              textTransform: "uppercase",
                              color: "#A8A09C",
                              marginBottom: "10px",
                            },
                          },
                          t.did,
                        ),
                        h(
                          "p",
                          {
                            style: {
                              margin: "0",
                              font: "400 16px/1.5 'Geist',sans-serif",
                              textWrap: "pretty",
                            },
                          },
                          c.did,
                        ),
                      ),
                    ),
                  ),
                  h(
                    "div",
                    {
                      style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
                        gap: "24px",
                        borderTop: "1px solid rgba(255,255,255,.1)",
                        paddingTop: "24px",
                      },
                    },
                    c.m.map((m, index) =>
                      h(
                        React.Fragment,
                        { key: index },
                        h(
                          "div",
                          {},
                          h(
                            "div",
                            {
                              style: {
                                font: "800 expanded clamp(28px,3vw,40px)/1 'Archivo',sans-serif",
                                letterSpacing: "-.02em",
                              },
                            },
                            m.v,
                          ),
                          h(
                            "div",
                            {
                              style: {
                                font: "400 14px/1.2 'Geist',sans-serif",
                                color: "#A8A09C",
                                marginTop: "10px",
                              },
                            },
                            m.l,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        h(
          "section",
          {
            id: "voices",
            "data-sec": "voices",
            "data-screen-label": "07 Testimonials",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px) 0",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                marginBottom: "40px",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                },
              },
              h(
                "span",
                {
                  style: {
                    font: "500 12px/1 'Geist',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#FF5A2B",
                  },
                },
                "05 — " + t.voices,
              ),
              h(
                "span",
                {
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    height: "24px",
                    padding: "0 10px",
                    border: "1px solid rgba(255,255,255,.22)",
                    borderRadius: "999px",
                    font: "500 11px/1 'Geist',sans-serif",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#A8A09C",
                  },
                },
                t.exQuote,
              ),
            ),
            h(
              "span",
              {
                style: {
                  font: "500 12px/1 'Geist',sans-serif",
                  letterSpacing: ".14em",
                  color: "#A8A09C",
                },
              },
              counter,
            ),
          ),
          h(
            "blockquote",
            {
              "aria-live": "polite",
              style: {
                margin: "0",
                maxWidth: "1060px",
                minHeight: "3.4em",
                font: "300 clamp(28px,3.9vw,56px)/1.12 'Geist',sans-serif",
                letterSpacing: "-.035em",
                textWrap: "balance",
              },
            },
            quote.text,
          ),
          h(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                marginTop: "40px",
                borderTop: "1px solid rgba(255,255,255,.1)",
                paddingTop: "24px",
              },
            },
            h(
              "div",
              {},
              h(
                "div",
                { style: { font: "500 16px/1 'Geist',sans-serif" } },
                quote.who,
              ),
              h(
                "div",
                {
                  style: {
                    font: "400 14px/1 'Geist',sans-serif",
                    color: "#A8A09C",
                    marginTop: "8px",
                  },
                },
                quote.role,
              ),
            ),
            h(
              "div",
              { style: { display: "flex", gap: "8px" } },
              h(
                "button",
                {
                  onClick: prevT,
                  "aria-label": "Vorheriges Zitat",
                  style: {
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,.28)",
                    background: "transparent",
                    cursor: "pointer",
                    font: "400 18px 'Geist',sans-serif",
                    color: "#F5F0ED",
                  },
                  className: "state-10",
                },
                "←",
              ),
              h(
                "button",
                {
                  onClick: nextT,
                  "aria-label": "Nächstes Zitat",
                  style: {
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,.28)",
                    background: "transparent",
                    cursor: "pointer",
                    font: "400 18px 'Geist',sans-serif",
                    color: "#F5F0ED",
                  },
                  className: "state-11",
                },
                "→",
              ),
            ),
          ),
        ),
        h(
          "section",
          {
            id: "pricing",
            "data-sec": "pricing",
            "data-screen-label": "08 Pricing",
            style: {
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px) 0",
              boxSizing: "content-box",
            },
          },
          h(
            "div",
            {
              "data-rv": "1",
              style: {
                opacity: "0",
                transform: "translateY(28px)",
                transition:
                  "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "24px",
                marginBottom: "clamp(40px,5vw,72px)",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                },
              },
              h(
                "div",
                {
                  style: {
                    font: "500 12px/1 'Geist',sans-serif",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#FF5A2B",
                  },
                },
                "06 — " + t.nPrice,
              ),
              h(
                "h2",
                {
                  style: {
                    margin: "0",
                    font: "300 clamp(36px,4.5vw,64px)/1.05 'Geist',sans-serif",
                    letterSpacing: "-.035em",
                  },
                },
                t.priceTitle,
              ),
            ),
            h(
              "p",
              {
                style: {
                  margin: "0",
                  maxWidth: "360px",
                  font: "400 18px/1.5 'Geist',sans-serif",
                  color: "#A8A09C",
                },
              },
              t.priceSub,
            ),
          ),
          h(
            "div",
            {
              style: {
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,320px),1fr))",
                gap: "24px",
              },
            },
            h(
              "article",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1),border-color .2s",
                  background: "#151212",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "20px",
                  padding: "clamp(24px,3vw,40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "48px",
                },
                className: "state-12",
              },
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                },
                h(
                  "h3",
                  {
                    style: {
                      margin: "0",
                      font: "400 24px/1.15 'Geist',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  t.s3t,
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                  },
                },
                h(
                  "span",
                  {
                    style: {
                      font: "400 24px/1 'Geist',sans-serif",
                      color: "#A8A09C",
                    },
                  },
                  t.from,
                ),
                h(
                  "div",
                  {
                    style: {
                      font: "900 expanded clamp(64px,8vw,112px)/.9 'Archivo',sans-serif",
                      letterSpacing: "-.03em",
                      whiteSpace: "nowrap",
                    },
                  },
                  "50 €",
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: "24px",
                    flexWrap: "wrap",
                    borderTop: "1px solid rgba(255,255,255,.1)",
                    paddingTop: "24px",
                  },
                },
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      maxWidth: "300px",
                      font: "400 16px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                    },
                  },
                  t.p1d,
                ),
                h(
                  "a",
                  {
                    href: "#contact",
                    style: {
                      font: "500 16px/1 'Geist',sans-serif",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    },
                  },
                  t.ask + " →",
                ),
              ),
            ),
            h(
              "article",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1) .09s,transform .9s cubic-bezier(.2,.7,.2,1) .09s,border-color .2s",
                  background: "#151212",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: "20px",
                  padding: "clamp(24px,3vw,40px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "48px",
                },
                className: "state-13",
              },
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                },
                h(
                  "h3",
                  {
                    style: {
                      margin: "0",
                      font: "400 24px/1.15 'Geist',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  t.s1t,
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    alignItems: "baseline",
                    gap: "16px",
                  },
                },
                h(
                  "span",
                  {
                    style: {
                      font: "400 24px/1 'Geist',sans-serif",
                      color: "#A8A09C",
                    },
                  },
                  t.from,
                ),
                h(
                  "div",
                  {
                    style: {
                      font: "900 expanded clamp(64px,8vw,112px)/.9 'Archivo',sans-serif",
                      letterSpacing: "-.03em",
                      whiteSpace: "nowrap",
                    },
                  },
                  "500 €",
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: "24px",
                    flexWrap: "wrap",
                    borderTop: "1px solid rgba(255,255,255,.1)",
                    paddingTop: "24px",
                  },
                },
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      maxWidth: "300px",
                      font: "400 16px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                    },
                  },
                  t.p2d,
                ),
                h(
                  "a",
                  {
                    href: "#contact",
                    style: {
                      font: "500 16px/1 'Geist',sans-serif",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    },
                  },
                  t.ask + " →",
                ),
              ),
            ),
          ),
        ),
        h(
          "section",
          {
            id: "contact",
            "data-sec": "contact",
            "data-screen-label": "09 Closing CTA",
            style: {
              marginTop: "clamp(96px,11vw,160px)",
              borderTop: "1px solid rgba(255,255,255,.1)",
              background:
                "radial-gradient(80% 90% at 50% 120%,rgba(143,31,26,.6),rgba(143,31,26,0) 70%)",
            },
          },
          h(
            "div",
            {
              style: {
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "clamp(96px,11vw,160px) clamp(20px,5.5vw,80px)",
                boxSizing: "content-box",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(min(100%,400px),1fr))",
                gap: "clamp(48px,6vw,96px)",
                alignItems: "start",
              },
            },
            h(
              "div",
              {
                "data-rv": "1",
                style: {
                  opacity: "0",
                  transform: "translateY(28px)",
                  transition:
                    "opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                },
              },
              h(
                "h2",
                {
                  style: {
                    margin: "0",
                    font: "300 clamp(44px,6.2vw,88px)/1 'Geist',sans-serif",
                    letterSpacing: "-.045em",
                    textWrap: "balance",
                  },
                },
                t.cta,
              ),
              h(
                "p",
                {
                  style: {
                    margin: "0",
                    maxWidth: "440px",
                    font: "400 clamp(18px,1.4vw,20px)/1.5 'Geist',sans-serif",
                    color: "#A8A09C",
                  },
                },
                t.ctaSub,
              ),
              h(
                "a",
                {
                  href: "mailto:floria.luis@icloud.com",
                  style: {
                    font: "400 clamp(20px,1.8vw,24px)/1 'Geist',sans-serif",
                    textDecoration: "underline",
                    textDecorationColor: "#FF5A2B",
                    textUnderlineOffset: "6px",
                    alignSelf: "flex-start",
                  },
                },
                "floria.luis@icloud.com",
              ),
            ),
            h(ContactForm,{name:fName,email:fMail,message:fMsg,onName,onMail,onMsg,english:t.nWork==='Work'}),
          ),
        ),
        h(
          "footer",
          {
            "data-sec": "footer",
            "data-screen-label": "10 Footer",
            style: { borderTop: "1px solid rgba(255,255,255,.1)" },
          },
          h(
            "div",
            {
              style: {
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "64px clamp(20px,5.5vw,80px) 96px",
                boxSizing: "content-box",
              },
            },
            h(
              "div",
              {
                style: {
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(min(100%,200px),1fr))",
                  gap: "40px 24px",
                  alignItems: "start",
                },
              },
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      font: "900 expanded 24px/1 'Archivo',sans-serif",
                      letterSpacing: "-.02em",
                    },
                  },
                  "NEXTLEVEL",
                ),
                h(
                  "p",
                  {
                    style: {
                      margin: "0",
                      maxWidth: "240px",
                      font: "400 14px/1.5 'Geist',sans-serif",
                      color: "#A8A09C",
                    },
                  },
                  t.slogan,
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    font: "400 14px/1 'Geist',sans-serif",
                  },
                },
                h(
                  "a",
                  { href: "#services", style: { textDecoration: "none" } },
                  t.nSvc,
                ),
                h(
                  "a",
                  { href: "#work", style: { textDecoration: "none" } },
                  t.nWork,
                ),
                h(
                  "a",
                  { href: "#process", style: { textDecoration: "none" } },
                  t.nProc,
                ),
                h(
                  "a",
                  { href: "#pricing", style: { textDecoration: "none" } },
                  t.nPrice,
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    font: "400 14px/1 'Geist',sans-serif",
                  },
                },
                h(
                  "a",
                  {
                    href: "/impressum.html",
                    style: { textDecoration: "none" },
                  },
                  "Impressum",
                ),
                h(
                  "a",
                  {
                    href: "/datenschutz.html",
                    style: { textDecoration: "none" },
                  },
                  "Datenschutz",
                ),
                h(
                  "a",
                  { href: "/agb.html", style: { textDecoration: "none" } },
                  "AGB",
                ),
              ),
              h(
                "div",
                {
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    font: "400 14px/1 'Geist',sans-serif",
                  },
                },
                h(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    },
                  },
                  h("i", {
                    style: {
                      display: "block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF5A2B",
                    },
                  }),
                  t.status,
                ),
                h(
                  "div",
                  { style: { color: "#A8A09C" } },
                  "Tuttlingen, " + t.country,
                ),
                h(
                  "div",
                  {
                    style: {
                      color: "#A8A09C",
                      fontVariantNumeric: "tabular-nums",
                    },
                  },
                  clock + " " + t.tz,
                ),
              ),
            ),
            h(
              "div",
              {
                style: {
                  marginTop: "64px",
                  borderTop: "1px solid rgba(255,255,255,.1)",
                  paddingTop: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                  font: "400 13px/1 'Geist',sans-serif",
                  color: "#A8A09C",
                },
              },
              h("span", {}, "© 2026 NextLevel"),
              h(
                "a",
                {
                  href: "#top",
                  style: { textDecoration: "none", color: "#A8A09C" },
                },
                t.back + " ↑",
              ),
            ),
          ),
        ),
      ),
    ),
    h(
      "div",
      {
        ref: chatRef,
        style: {
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: "55",
          opacity: "0",
          transition: "opacity .3s",
          display: chatDisplay,
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "12px",
        },
      },
      h(
        "div",
        {
          style: {
            display: chatPanel,
            width: "min(300px,calc(100vw - 40px))",
            background: "#151212",
            border: "1px solid rgba(255,255,255,.14)",
            borderRadius: "20px",
            padding: "20px",
            boxSizing: "border-box",
            boxShadow: "0 24px 60px -20px rgba(0,0,0,.7)",
          },
        },
        h(
          "div",
          {
            style: {
              font: "500 12px/1 'Geist',sans-serif",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#A8A09C",
              marginBottom: "12px",
            },
          },
          t.chatTitle,
        ),
        h(
          "div",
          {
            style: {
              font: "400 16px/1.4 'Geist',sans-serif",
              marginBottom: "16px",
            },
          },
          chatMsg,
        ),
        h(
          "div",
          { style: { display: "flex", flexWrap: "wrap", gap: "8px" } },
          chips.map((c, index) =>
            h(
              React.Fragment,
              { key: index },
              h(
                "button",
                {
                  onClick: c.pick,
                  style: {
                    height: "36px",
                    border: "1px solid rgba(255,255,255,.22)",
                    background: "transparent",
                    color: "#F5F0ED",
                    borderRadius: "999px",
                    padding: "0 14px",
                    font: "400 14px 'Geist',sans-serif",
                    cursor: "pointer",
                  },
                  className: "state-20",
                },
                c.label,
              ),
            ),
          ),
        ),
      ),
      h(
        "button",
        {
          onClick: toggleChat,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            height: "44px",
            border: "1px solid rgba(255,255,255,.14)",
            cursor: "pointer",
            background: "#1D1919",
            color: "#F5F0ED",
            borderRadius: "999px",
            padding: "0 16px",
            font: "500 14px/1 'Geist',sans-serif",
            boxShadow: "0 24px 60px -20px rgba(0,0,0,.7)",
          },
        },
        h("i", {
          style: {
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#FF5A2B",
          },
        }),
        t.chatBtn,
      ),
    ),
  );
}
