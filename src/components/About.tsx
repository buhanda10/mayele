'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { theme } from '@/styles/theme';
import Image from 'next/image';

// === STYLES ===

const AboutSection = styled.section`
  padding: 8rem 2rem;
  background: ${theme.colors.dark};
  position: relative;
  overflow: hidden;
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: radial-gradient(ellipse at center, ${theme.colors.primary}08, transparent 70%);
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
  background: rgba(108, 99, 255, 0.05);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  font-family: ${theme.fonts.heading};
  margin-bottom: 1rem;

  span {
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextBlock = styled(motion.div)``;

const Description = styled.p`
  color: ${theme.colors.gray};
  font-size: 1.1rem;
  line-height: 1.9;
  margin-bottom: 2rem;
`;

const ValuesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ValueItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.2rem;
  background: ${theme.colors.cardBg};
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.03);

  svg {
    color: ${theme.colors.secondary};
    font-size: 1.3rem;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ValueTitle = styled.span`
  font-weight: 600;
  color: white;
  display: block;
  margin-bottom: 0.2rem;
  font-family: ${theme.fonts.heading};
`;

const ValueDescription = styled.span`
  color: ${theme.colors.gray};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  max-height: 550px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    aspect-ratio: 16 / 9;
    max-height: 350px;
  }
`;


const ImageGlow = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 200px;
  height: 200px;
  background: ${theme.colors.primary};
  filter: blur(80px);
  opacity: 0.3;
  border-radius: 50%;
  pointer-events: none;
`;

const ImageFrame = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 100%;
  height: 100%;
  border: 2px solid ${theme.colors.secondary}40;
  border-radius: 24px;
  pointer-events: none;
`;

// === COMPOSANT ===

const values = [
  {
    title: 'Excellence technique',
    description: 'Chaque ligne de code est pensée pour durer. Pas de compromis sur la qualité.',
  },
  {
    title: 'Innovation continue',
    description: 'Nous restons en veille permanente pour intégrer les meilleures technologies.',
  },
  {
    title: 'Proximité client',
    description: 'Votre réussite est notre obsession. Nous avançons ensemble.',
  },
];

export default function About() {
  return (
    <AboutSection id="about">
      <GridOverlay />

      <Container>
        {/* Header */}
        <Header>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Notre Histoire
          </Badge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Qui sommes-<span>nous</span> ?
          </Title>
        </Header>

        {/* Contenu */}
        <Content>
          {/* Texte + valeurs */}
          <TextBlock
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Description>
              Mayele est une organisation spécialisée dans la conception, le développement et
              l&apos;intégration de solutions numériques modernes. Nous accompagnons entreprises et
              entrepreneurs dans leur transformation digitale à travers des applications
              performantes, des systèmes fiables et des outils innovants.
            </Description>

            <ValuesList>
              {values.map((value, index) => (
                <ValueItem
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <FiCheckCircle />
                  <div>
                    <ValueTitle>{value.title}</ValueTitle>
                    <ValueDescription>{value.description}</ValueDescription>
                  </div>
                </ValueItem>
              ))}
            </ValuesList>
          </TextBlock>

          {/* Image */}
          <ImageWrapper
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ImageFrame />
            <ImageGlow />
            <Image
              src="/img/mayele.png"
              alt="Logo de Mayele Tech"
              fill
              style={{ objectFit: 'cover', borderRadius: '24px' }}
              priority
              sizes="(max-width: 768px) 100vw, 100vw"
            />
          </ImageWrapper>
        </Content>
      </Container>
    </AboutSection>
  );
}