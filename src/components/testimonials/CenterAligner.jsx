import React from "react";

export default function CenterAligner({ children, className }) {
  return (
    <section
      className={`flex items-center justify-center min-h-screen ${className}`}
    >
      <div className="max-w-[1200px] w-full mx-auto">{children}</div>
    </section>
  );
}
