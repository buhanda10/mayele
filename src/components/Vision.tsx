'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';

// === STYLES ===

const VisionSection = styled.section`
  padding: 8rem 2rem;
  background: ${theme.colors.darker};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, ${theme.colors.primary}40, transparent);
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Badge = styled(motion.div)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid ${theme.colors.primary}40;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${theme.colors.secondary};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  backdrop-filter: blur(10px);
  background: rgba(108, 99, 255, 0.05);
`;

const IconWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background: ${theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: ${theme.fonts.heading};
`;

const Highlight = styled.span`
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.gray};
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const StatsRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  font-family: ${theme.fonts.heading};
  background: ${theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.gray};
  margin-top: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const Glow = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, ${theme.colors.primary}10, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

// === COMPOSANT ===

export default function Vision() {
  return (
    <VisionSection id="vision">
      <Glow
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <Container>
        {/* Badge */}
        <Badge
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Notre Vision
        </Badge>

        {/* Icône */}
        <IconWrapper
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
        >
          👁️
        </IconWrapper>

        {/* Titre */}
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Highlight>Devenir une référence</Highlight> africaine dans la conception de solutions numériques innovantes
        </Title>

        {/* Description */}
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Chez Mayele Tech, nous ne construisons pas seulement du code. Nous façonnons l&apos;avenir numérique de la RDC,
          une solution à la fois. Notre ambition est de devenir le partenaire technologique incontournable pour les
          entreprises qui veulent passer au niveau supérieur.
        </Description>

        {/* Stats */}
        <StatsRow
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Made in DRC</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>+10</StatNumber>
            <StatLabel>Projets Livrés</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support Client</StatLabel>
          </StatItem>
        </StatsRow>
      </Container>
    </VisionSection>
  );
}