"use client";

import type { MouseEvent, ReactNode } from "react";

type DeliveryLinkProps = {
  appPackage: string;
  children: ReactNode;
  className: string;
  label: string;
  webUrl: string;
};

export default function DeliveryLink({
  appPackage,
  children,
  className,
  label,
  webUrl,
}: DeliveryLinkProps) {
  function openDeliveryApp(event: MouseEvent<HTMLAnchorElement>) {
    if (!/Android/i.test(navigator.userAgent)) return;

    event.preventDefault();
    const destination = webUrl.replace(/^https:\/\//, "");
    const fallback = encodeURIComponent(webUrl);
    window.location.href = `intent://${destination}#Intent;scheme=https;package=${appPackage};S.browser_fallback_url=${fallback};end`;
  }

  return (
    <a
      href={webUrl}
      onClick={openDeliveryApp}
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}