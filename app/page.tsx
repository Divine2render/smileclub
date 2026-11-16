"use client";

import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import "./page.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PracticeIntro from "../components/PracticeIntro";
import Services from "../components/Services";
import Team from "../components/Team";
import Office from "../components/Office";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Visit from "../components/Visit";
import Footer from "../components/Footer";
import MobileBar from "../components/MobileBar";
import ChatWidget from "../components/ChatWidget";
import RevealSection from "../components/RevealSection";

export default function HomePage() {
  useEffect(() => {
    const menu = document.querySelector<HTMLElement>(".primary-nav");
    if (menu === null) return;
    const nav = menu;

    function closeMenus(except: Element | null = null): void {
      nav.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((item) => {
        if (item !== except) item.open = false;
      });
    }
    function onDocumentClick(event: MouseEvent): void {
      const target = event.target instanceof Element ? event.target : null;
      const summary = target?.closest("summary");
      if (summary && nav.contains(summary)) closeMenus(summary.parentElement);
      else if (!target || !nav.contains(target) || target.closest("a")) closeMenus();
    }
    function onMenuKeydown(event: KeyboardEvent): void {
      const target = event.target instanceof Element ? event.target : null;
      const item = target?.closest("details[open]");
      if (event.key === "Escape" && item) {
        closeMenus();
        item.querySelector("summary")?.focus();
      }
    }
    document.addEventListener("click", onDocumentClick);
    nav.addEventListener("keydown", onMenuKeydown);

    const navCheck = document.getElementById("navCheck") as HTMLInputElement | null;
    function setNav(open: boolean): void {
      if (navCheck) navCheck.checked = open;
      if (!open) closeMenus();
    }
    function onMenuClick(event: MouseEvent): void {
      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest("a")) setNav(false);
    }
    function onGlobalKeydown(event: KeyboardEvent): void {
      if (event.key === "Escape" && navCheck?.checked) {
        setNav(false);
        navCheck.focus();
      }
    }
    nav.addEventListener("click", onMenuClick);
    document.addEventListener("keydown", onGlobalKeydown);

    const rows = document.getElementById("rows") as HTMLElement | null;
    const pause = document.getElementById("pause") as HTMLButtonElement | null;
    function onPause(): void {
      if (!rows || !pause) return;
      const paused = rows.classList.toggle("paused");
      pause.setAttribute("aria-pressed", String(paused));
      pause.setAttribute(
        "aria-label",
        paused ? "Play animation" : "Pause animation",
      );
      pause.innerHTML = paused
        ? '<svg viewBox="0 0 12 12" fill="currentColor"><path d="M3 1.5v9l7.5-4.5z"/></svg>'
        : '<svg viewBox="0 0 12 12" fill="currentColor"><rect x="2" y="1.5" width="2.6" height="9" rx="1"/><rect x="7.4" y="1.5" width="2.6" height="9" rx="1"/></svg>';
    }
    pause?.addEventListener("click", onPause);

    const button = document.getElementById("chatBtn") as HTMLButtonElement | null;
    const chat = document.getElementById("chat") as HTMLElement | null;
    const chatBody = document.getElementById("chatB") as HTMLElement | null;
    function openChat(open: boolean): void {
      if (!chat || !button) return;
      chat.hidden = !open;
      button.setAttribute("aria-expanded", String(open));
      if (open) document.getElementById("chatI")?.focus();
      else button.focus();
    }
    function onChatButton(): void {
      openChat(chat?.hidden ?? true);
    }
    function onChatClose(): void {
      openChat(false);
    }
    function onChatKeydown(event: KeyboardEvent): void {
      if (event.key === "Escape") openChat(false);
    }
    function onChatSubmit(event: SubmitEvent): void {
      event.preventDefault();
      const input = document.getElementById("chatI") as HTMLInputElement | null;
      const message = input?.value.trim();
      if (!input || !message || !chatBody) return;
      const userMessage = document.createElement("div");
      userMessage.className = "msg me";
      userMessage.textContent = message;
      chatBody.appendChild(userMessage);
      const reply = document.createElement("div");
      reply.className = "msg";
      reply.textContent = "Thanks! A member of our team will reply shortly.";
      chatBody.appendChild(reply);
      input.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;
    }
    button?.addEventListener("click", onChatButton);
    document.getElementById("chatX")?.addEventListener("click", onChatClose);
    chat?.addEventListener("keydown", onChatKeydown);
    const chatForm = document.getElementById("chatF") as HTMLFormElement | null;
    chatForm?.addEventListener("submit", onChatSubmit);

    return () => {
      document.removeEventListener("click", onDocumentClick);
      nav.removeEventListener("keydown", onMenuKeydown);
      nav.removeEventListener("click", onMenuClick);
      document.removeEventListener("keydown", onGlobalKeydown);
      pause?.removeEventListener("click", onPause);
      button?.removeEventListener("click", onChatButton);
      document
        .getElementById("chatX")
        ?.removeEventListener("click", onChatClose);
      chat?.removeEventListener("keydown", onChatKeydown);
      chatForm?.removeEventListener("submit", onChatSubmit);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main id="top">
        <RevealSection>
          <Hero />
        </RevealSection>
        <RevealSection delay={0.04} from="right">
          <PracticeIntro />
        </RevealSection>
        <RevealSection>
          <Services />
        </RevealSection>
        <RevealSection delay={0.04} from="right">
          <Team />
        </RevealSection>
        <RevealSection>
          <Office />
        </RevealSection>
        <RevealSection delay={0.04} from="right">
          <Reviews />
        </RevealSection>
        <RevealSection>
          <Blog />
        </RevealSection>
        <RevealSection delay={0.04} from="right">
          <Visit />
        </RevealSection>
      </main>
      <RevealSection>
        <Footer />
      </RevealSection>
      <MobileBar />
      <ChatWidget />
    </MotionConfig>
  );
}
