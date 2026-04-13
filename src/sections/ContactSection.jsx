import { forwardRef } from 'react';
import { Mail } from 'lucide-react';
import Section from '../components/Section';
import HoverButton from '../components/HoverButton';

const ContactSection = forwardRef(({
  isVisible,
  color,
}, ref) => {
  return (
    <Section id="contact" ref={ref} isVisible={isVisible}>
      <div className="max-w-3xl w-full">

        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color }}>
          Work With Me
        </h2>

        <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed mb-12">
          <p>
            If you're part of a mission-driven organization thinking seriously about what ethical AI looks like in practice — not as a brand statement, but as a design constraint — I'd like to talk.
          </p>
          <p>
            I'm especially interested in connecting with teams who want someone in the room who asks hard questions before something ships. Teams building technology in service of communities, not the other way around.
          </p>
          <p>
            I'm drawn to shorter, focused engagements — the kind where we dig deep into a specific problem, build something genuinely useful, and leave people better off than we found them. I'm particularly interested in civic tech, social impact organizations, and industries where AI is moving fast and the ethical guardrails haven't caught up yet. If you're trying to figure out how to adopt AI responsibly before something goes wrong, that's exactly the conversation I want to have.
          </p>
        </div>

        <div className="mb-14">
          <HoverButton
            href="mailto:heatherlynn.frank@gmail.com"
            color={color}
            variant="solid"
          >
            <Mail className="inline w-5 h-5 mr-2" aria-hidden="true" />
            Get In Touch
          </HoverButton>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          I'm currently open to roles that center human-centered AI and community-focused work.
          If you're building something that fits, I'd like to hear about it.
        </p>

      </div>
    </Section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
