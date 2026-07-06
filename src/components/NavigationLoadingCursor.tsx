"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const ROUTE_LOADING_CLASS = "route-loading";
const LOADING_TIMEOUT_MS = 6000;

const isModifiedClick = (event: MouseEvent) =>
  event.button !== 0 ||
  event.metaKey ||
  event.ctrlKey ||
  event.shiftKey ||
  event.altKey;

const shouldShowLoadingCursor = (event: MouseEvent) => {
  if (isModifiedClick(event)) {
    return false;
  }

  if (!(event.target instanceof Element)) {
    return false;
  }

  const anchor = event.target.closest("a[href]") as HTMLAnchorElement | null;

  if (!anchor || anchor.hasAttribute("download")) {
    return false;
  }

  if (anchor.target && anchor.target !== "_self") {
    return false;
  }

  const href = anchor.getAttribute("href");

  if (!href || href.startsWith("#")) {
    return false;
  }

  const currentUrl = new URL(window.location.href);
  const nextUrl = new URL(anchor.href);

  if (nextUrl.origin !== currentUrl.origin) {
    return false;
  }

  return (
    nextUrl.pathname !== currentUrl.pathname ||
    nextUrl.search !== currentUrl.search
  );
};

export default function NavigationLoadingCursor() {
  const pathname = usePathname();
  const cursorRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const stopFrameRef = useRef<number | null>(null);
  const previousPathnameRef = useRef(pathname);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (previousPathnameRef.current === pathname) {
      return;
    }

    previousPathnameRef.current = pathname;

    stopFrameRef.current = window.requestAnimationFrame(() => {
      stopFrameRef.current = window.requestAnimationFrame(() => {
        document.documentElement.classList.remove(ROUTE_LOADING_CLASS);

        if (timeoutRef.current !== null) {
          window.clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }

        stopFrameRef.current = null;
      });
    });

    return () => {
      if (stopFrameRef.current !== null) {
        window.cancelAnimationFrame(stopFrameRef.current);
        stopFrameRef.current = null;
      }
    };
  }, [pathname]);

  useEffect(() => {
    const moveCursor = (x: number, y: number) => {
      if (!cursorRef.current) {
        return;
      }

      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const stopLoading = () => {
      document.documentElement.classList.remove(ROUTE_LOADING_CLASS);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (stopFrameRef.current !== null) {
        window.cancelAnimationFrame(stopFrameRef.current);
        stopFrameRef.current = null;
      }
    };

    const startLoading = () => {
      const lastPointer = lastPointerRef.current;

      if (lastPointer) {
        moveCursor(lastPointer.x, lastPointer.y);
      }

      if (stopFrameRef.current !== null) {
        window.cancelAnimationFrame(stopFrameRef.current);
        stopFrameRef.current = null;
      }

      document.documentElement.classList.add(ROUTE_LOADING_CLASS);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(stopLoading, LOADING_TIMEOUT_MS);
    };

    const handlePointerMove = (event: PointerEvent) => {
      lastPointerRef.current = { x: event.clientX, y: event.clientY };

      if (document.documentElement.classList.contains(ROUTE_LOADING_CLASS)) {
        moveCursor(event.clientX, event.clientY);
      }
    };

    const handleClick = (event: MouseEvent) => {
      if (!shouldShowLoadingCursor(event)) {
        return;
      }

      lastPointerRef.current = { x: event.clientX, y: event.clientY };
      moveCursor(event.clientX, event.clientY);
      startLoading();
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", startLoading);
    window.addEventListener("pageshow", stopLoading);
    window.addEventListener("beforeunload", startLoading);

    return () => {
      stopLoading();
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", startLoading);
      window.removeEventListener("pageshow", stopLoading);
      window.removeEventListener("beforeunload", startLoading);
    };
  }, []);

  return <div ref={cursorRef} className="route-loading-cursor" aria-hidden />;
}
