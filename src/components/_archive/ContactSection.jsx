import { forwardRef } from 'react';
import { Mail, Download } from 'lucide-react';
import Section from '../components/Section';
import HoverButton from '../components/HoverButton';

const ContactSection = forwardRef(({
  isVisible,
  color
}, ref) => {
  return (
    <Section id="contact" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full text-center">
        <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-8 flex items-center justify-center text-gray-500">
          [Photo]
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          Let's Connect
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Let's work together to build software that solves real problems and improves the human experience
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <HoverButton
            href="mailto:heatherlynn.frank@gmail.com?subject=Ethical%20Testing&body=Hi%20Heather%2C%0A%0AI%20read%20your%20thoughts%20on%20ethical%20testing%20and%20wanted%20to%20connect...%0A%0A"
            color={color}
            variant="solid"
          >
            <Mail className="inline w-5 h-5 mr-2" aria-hidden="true" />
            Get In Touch
          </HoverButton>
          <HoverButton
            href="/Heather_Frank_Automation_Engineer_Resume.pdf"
            download="Heather_Frank_Resume.pdf"
            color={color}
            variant="outline-gray"
          >
            <Download className="inline w-5 h-5 mr-2" aria-hidden="true" />
            Download Resume
          </HoverButton>
        </div>
      </div>
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
