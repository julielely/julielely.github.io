import React from 'react';

export function Landing() {
  return (
    <section className="py-16" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-12">
          <div className="flex-1 max-w-2xl">
            <h1
              className="font-sans font-semibold"
              style={{
                fontSize: '50px',
                lineHeight: 1.02,
                color: 'var(--color-text)',
              }}
            >
              Julie Lely
            </h1>

            <p
              className="mt-6 text-lg"
              style={{
                fontFamily: 'var(--font-family-sans)',
                fontSize: 'var(--type-body-size)',
                lineHeight: 'var(--line-height-default)',
                letterSpacing: 'var(--letter-spacing-body)',
                color: 'var(--color-text)',
              }}
            >
              product designer with specialties in prototyping, interaction design, and design systems
            </p>
          </div>

          {/* removed the external Figma image per request; keep a neutral surface box here */}
          <div className="w-56 h-56 flex-shrink-0 rounded-md" style={{ backgroundColor: 'var(--color-surface)' }} />
        </div>
      </div>
    </section>
  );
}

export default Landing;
