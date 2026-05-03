'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(108,99,255,0.15) 0%, transparent 70%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(108,99,255,0.03) 2px,
      rgba(108,99,255,0.03) 4px
    );
    animation: gridMove 20s linear infinite;
  }

  @keyframes gridMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(100px); }
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 900px;
`;

const Tagline = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.secondary};
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: ${theme.colors.gray};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: ${theme.colors.gradient};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
  letter-spacing: 0.5px;
  box-shadow: 0 0 30px rgba(108,99,255,0.3);

  &:hover {
    box-shadow: 0 0 50px rgba(108,99,255,0.5);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <FloatingShape
        style={{
          width: "400px",
          height: "400px",
          background: theme.colors.primary,
          top: "10%",
          right: "-100px",
        }}
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <FloatingShape
        style={{
          width: "300px",
          height: "300px",
          background: theme.colors.secondary,
          bottom: "10%",
          left: "-80px",
        }}
        animate={{
          y: [0, -40, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <HeroContent>
        <Tagline
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Innovation • Performance • Croissance
        </Tagline>

        <Title
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Votre Transformation Digitale Commence Ici
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nous concevons des solutions numériques puissantes qui propulsent votre business vers de nouveaux sommets.
        </Subtitle>

        <CTAButton
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contactez-nous
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
}