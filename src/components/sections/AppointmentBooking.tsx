"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { CalendarClock } from "lucide-react";
import { site } from "@/data/site";

const calendlyUrl = (
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/abir-hossan/30min"
).trim();

export default function AppointmentBooking() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  const showFallback = !calendlyUrl || widgetError;

  return (
    <div className="appointment-booking-card">
      <div className="appointment-card-header">
        <span className="appointment-icon" aria-hidden="true">
          <CalendarClock size={23} />
        </span>
        <div>
          <p className="appointment-card-kicker">BOOK A CONVERSATION</p>
          <h3>10 Minute Meeting</h3>
        </div>
        <span className="appointment-duration">10 MIN</span>
      </div>

      {showFallback ? (
        <div className="appointment-fallback" role="status">
          <p>
            {widgetError
              ? "The booking calendar could not be loaded right now."
              : "Online booking is not configured yet."}
          </p>
          <a href={`mailto:${site.email}`}>Email me to arrange a time</a>
          {widgetError && calendlyUrl ? (
            <a
              className="appointment-fallback-secondary"
              href={calendlyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open Calendly in a new tab
            </a>
          ) : null}
        </div>
      ) : (
        <>
          <div
            className="calendly-inline-widget"
            ref={widgetRef}
            data-url={calendlyUrl}
            role="region"
            aria-label="Calendly 10 Minute Meeting scheduler"
            aria-busy={!scriptReady}
          >
            {!scriptReady ? (
              <p className="appointment-loading" role="status">
                Loading the booking calendar...
              </p>
            ) : null}
          </div>
          <Script
            id="calendly-inline-widget-script"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
            onReady={() => {
              if (!widgetRef.current?.querySelector("iframe")) {
                console.error("Calendly loaded without creating its inline iframe.");
                setWidgetError(true);
                return;
              }
              setScriptReady(true);
            }}
            onError={(error) => {
              console.error("Calendly widget script failed to load.", error);
              setWidgetError(true);
            }}
          />
        </>
      )}
    </div>
  );
}
