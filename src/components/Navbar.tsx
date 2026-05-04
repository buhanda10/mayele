'use client';

import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiFileText } from 'react-icons/fi';  // Icône document
import { theme } from '@/styles/theme';

// === STYLES (inchangés sauf ajout du TarifButton) ===

const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${props => props.scrolled ? '0.8rem 2rem' : '1.2rem 2rem'};
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'};
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  font-size: 1.4rem;
  font-weight: 800;
  font-family: ${theme.fonts.heading};
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  text-decoration: none;
  z-index: 1001;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  z-index: 1001;
`;

// Bouton Tarifs stylé
const TarifButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.3rem;
  border-radius: 50px;
  background: ${theme.colors.gradient};
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 25px rgba(108, 99, 255, 0.5);
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    /* Sur très petit écran, on peut ne garder que l'icône */
    padding: 0.6rem;
    span {
      display: none;
    }
  }
`;

const BurgerButton = styled(motion.button)`
  width: 40px;
  height: 28px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BurgerLine = styled(motion.span)<{ top?: boolean; bottom?: boolean }>`
  position: absolute;
  width: 28px;
  height: 2px;
  background: white;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);
  top: ${props => props.top ? '25%' : props.bottom ? '75%' : '50%'};
  transform-origin: center;
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 0.98);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
`;

const MenuLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MenuLink = styled(motion.a)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  font-family: ${theme.fonts.heading};
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const MenuNumber = styled.span`
  font-size: 0.9rem;
  color: ${theme.colors.secondary};
  margin-right: 0.5rem;
  font-weight: 500;
`;

// === DONNÉES ===

const links = [
  { number: '01', label: 'Accueil', href: '#hero' },
  { number: '02', label: 'Vision', href: '#vision' },
  { number: '03', label: 'Projets', href: '#projects' },
  { number: '04', label: 'Expertise', href: '#expertise' },
  { number: '05', label: 'À propos', href: '#about' },
  { number: '06', label: 'Contact', href: '#contact' },
];

// === COMPOSANT ===

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        {/* Logo */}
        <Logo 
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mayele Tech
        </Logo>

        {/* Bouton Tarifs + Burger */}
        <RightSide>
          {/* Bouton Tarifs */}
          <TarifButton
            href="/Tarif.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiFileText />
            <span>Tarifs</span>
          </TarifButton>

          {/* Burger */}
          <BurgerButton
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Menu"
          >
            <BurgerLine 
              top
              animate={isOpen ? { top: '50%', rotate: -45 } : { top: '25%', rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <BurgerLine 
              bottom
              animate={isOpen ? { top: '50%', rotate: 45 } : { top: '75%', rotate: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          </BurgerButton>
        </RightSide>
      </Nav>

      {/* Menu Overlay (inchangé) */}
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MenuLinks
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {links.map((link) => (
                <MenuLink
                  key={link.number}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  variants={{
                    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                    closed: { opacity: 0, y: 40, transition: { duration: 0.3 } },
                  }}
                >
                  <MenuNumber>{link.number}.</MenuNumber>
                  {link.label}
                </MenuLink>
              ))}
            </MenuLinks>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
}