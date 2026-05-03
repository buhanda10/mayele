'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiArrowUp, 
  FiPhone, 
  FiMail, 
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter 
} from 'react-icons/fi';
import { theme } from '@/styles/theme';

// === STYLES ===

const FooterSection = styled.footer`
  padding: 6rem 2rem 2rem;
  background: ${theme.colors.darker};
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.03);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const CtaBanner = styled(motion.div)`
  background: ${theme.colors.gradient};
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
    animation: rotateGlow 10s linear infinite;
  }

  @keyframes rotateGlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const CtaContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CtaTitle = styled.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  font-family: ${theme.fonts.heading};
`;

const CtaText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const CtaButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: white;
  color: ${theme.colors.dark};
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BrandColumn = styled.div``;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  font-family: ${theme.fonts.heading};
  margin-bottom: 1rem;
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const BrandDescription = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const SocialIcon = styled(motion.a)`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: ${theme.colors.cardBg};
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: white;
    border-color: ${theme.colors.primary};
  }
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: ${theme.fonts.heading};
  color: white;
`;

const FooterLink = styled.a`
  display: block;
  color: ${theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${theme.colors.gray};
  font-size: 0.9rem;
  margin-bottom: 0.8rem;

  svg {
    color: ${theme.colors.secondary};
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.85rem;
`;

const BackToTop = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${theme.colors.cardBg};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  color: white;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: ${theme.fonts.body};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary}20;
    border-color: ${theme.colors.primary}40;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin: 2rem 0;
`;

const HighlightText = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
`;

// === COMPOSANT ===

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        {/* CTA Banner */}
        <CtaBanner
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CtaContent>
            <CtaTitle>
              Votre business mérite mieux qu&apos;un simple site web
            </CtaTitle>
            <CtaText>
              Construisons ensemble une solution digitale qui <HighlightText>propulse votre croissance</HighlightText>.
            </CtaText>
            <CtaButton
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiArrowUp style={{ transform: 'rotate(45deg)' }} />
              Démarrer un projet
            </CtaButton>
          </CtaContent>
        </CtaBanner>

        {/* Footer Grid */}
        <FooterGrid>
          {/* Brand */}
          <BrandColumn>
            <Logo>Mayele Tech</Logo>
            <BrandDescription>
              Organisation spécialisée dans la conception, le développement et
              l&apos;intégration de solutions numériques modernes en Afrique.
            </BrandDescription>
            <SocialLinks>
              <SocialIcon 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FiGithub />
              </SocialIcon>
              <SocialIcon 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FiTwitter />
              </SocialIcon>
            </SocialLinks>
          </BrandColumn>

          {/* Liens rapides */}
          <FooterColumn>
            <ColumnTitle>Navigation</ColumnTitle>
            <FooterLink href="#vision">Notre Vision</FooterLink>
            <FooterLink href="#projects">Projets</FooterLink>
            <FooterLink href="#expertise">Expertise</FooterLink>
            <FooterLink href="#about">Qui sommes-nous ?</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </FooterColumn>

          {/* Contact */}
          <FooterColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <ContactItem>
              <FiPhone />
              +243 858 814 961
            </ContactItem>
            <ContactItem>
              <FiMail />
              Contact@mayele-tech.com
            </ContactItem>
            <ContactItem>
              <FiMapPin />
              RDCongo
            </ContactItem>
          </FooterColumn>
        </FooterGrid>

        {/* Bottom Bar */}
        <BottomBar>
          <Copyright>
            © {currentYear} Mayele Tech. Tous droits réservés.
          </Copyright>
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowUp />
            Retour en haut
          </BackToTop>
        </BottomBar>

        {/* Message final */}
        <Divider />
        <Copyright style={{ textAlign: 'center', fontSize: '0.8rem' }}>
          Construit avec ❤️ pour propulser la RDC numérique
        </Copyright>
      </Container>
    </FooterSection>
  );
}