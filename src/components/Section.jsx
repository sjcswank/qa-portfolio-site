import { forwardRef } from 'react';

const Section = forwardRef(({
  id,
  isVisible,
  children,
  className = ''
}, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-6 py-12 md:py-20 scroll-mt-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
