import React, { useState } from "react";
import "./EventAgenda.css";

interface AgendaItem {
  id: number;
  time: string;
  title: string;
  description: string;
  isBreak?: boolean;
}

function EventAgenda() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]); // First item expanded by default

  const agendaItems: AgendaItem[] = [
    {
      id: 1,
      time: "05:45 PM",
      title: "Event Entry & Registration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 2,
      time: "06:00 PM",
      title: "Accelerate Digital Transformation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 3,
      time: "06:40 PM",
      title: "SAP Move & Business Value Session",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 4,
      time: "07:00 PM",
      title: "SHORT BREAK",
      description: "",
      isBreak: true,
    },
    {
      id: 5,
      time: "07:15 AM",
      title: "Transform your Business on the Cloud for RISE with SAP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 6,
      time: "07:30 PM",
      title: "Fireside Chat, a Customer Journey with RISE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 7,
      time: "07:45 PM",
      title: "Achieving Faster Time to Value",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 8,
      time: "08:30 PM",
      title: "Live Q/A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
    {
      id: 9,
      time: "09:00 PM",
      title: "Wrap-up & Networking Dinner",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    },
  ];

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="event-agenda-section">
      <div className="event-agenda-container">
        <div className="agenda-header">
          <div className="agenda-title-wrapper">
            <h2 className="agenda-title">
              <span className="title-light-gray">Event </span>
              <span className="title-agenda-orange">Agenda</span>
            </h2>
            <p className="agenda-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <button className="download-agenda-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Agenda
          </button>
        </div>

        <div className="agenda-day-header">
          <div className="day-label">DAY</div>
          <div className="day-info">
            <div className="day-name">Monday</div>
            <div className="day-date">June 12, 2025</div>
          </div>
        </div>

        <div className="agenda-items-list">
          {agendaItems.map((item) => (
            <div
              key={item.id}
              className={`agenda-item ${
                item.isBreak ? "agenda-item-break" : ""
              }`}
            >
              <div
                className="agenda-item-header"
                onClick={() => !item.isBreak && toggleItem(item.id)}
              >
                <div className="agenda-item-time">{item.time}</div>
                <div className="agenda-item-title">{item.title}</div>
                {!item.isBreak && (
                  <button
                    className={`agenda-toggle-btn ${
                      expandedItems.includes(item.id) ? "expanded" : ""
                    }`}
                    aria-label="Toggle details"
                  >
                    {expandedItems.includes(item.id) ? "−" : "+"}
                  </button>
                )}
              </div>
              {!item.isBreak && expandedItems.includes(item.id) && (
                <div className="agenda-item-description">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="agenda-gradient-bg"></div>
    </div>
  );
}

export default EventAgenda;
