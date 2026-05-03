'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiZap, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { theme } from '@/styles/theme';

// === STYLES ===

const WhyUsSection = styled.section`
  padding: 8rem 2rem;
  background: ${theme.colors.darker};
  position: relative;
  overflow: hidden;
`;

const LinesBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 50px,
    rgba(108, 99, 255, 0.015) 50px,
    rgba(108, 99, 255, 0.015) 52px
  );
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

const Subtitle = styled(motion.p)`
  color: ${theme.colors.gray};
  font-size: 1.05rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const Card = styled(motion.div)`
  background: ${theme.colors.cardBg};
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 24px;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover {
    border-color: ${theme.colors.primary}40;
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  }
`;

const CardNumber = styled.div<{ index: number }>`
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 8rem;
  font-weight: 900;
  font-family: ${theme.fonts.heading};
  opacity: 0.03;
  color: ${props => 
    props.index === 1 ? theme.colors.primary :
    props.index === 2 ? theme.colors.secondary :
    theme.colors.accent
  };
  line-height: 1;
  pointer-events: none;
`;

const IconWrapper = styled.div<{ index: number }>`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin: 0 auto 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  background: ${props => 
    props.index === 1 ? theme.colors.gradient :
    props.index === 2 ? theme.colors.gradientReverse :
    'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)'
  };
  box-shadow: ${props => 
    props.index === 1 ? '0 10px 30px rgba(108,99,255,0.3)' :
    props.index === 2 ? '0 10px 30px rgba(0,212,170,0.3)' :
    '0 10px 30px rgba(255,107,107,0.3)'
  };
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: ${theme.fonts.heading};
`;

const CardDescription = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const Highlight = styled.span`
  color: ${theme.colors.secondary};
  font-weight: 600;
`;

// === DONNÉES ===

const reasons = [
  {
    number: '01',
    icon: <FiZap />,
    title: 'Puissance technologique',
    description: (
      <>
        Nous créons des <Highlight>infrastructures robustes</Highlight> capables de gérer des
        milliers d&apos;utilisateurs sans ralentissement ni panne.
      </>
    ),
  },
  {
    number: '02',
    icon: <FiTarget />,
    title: 'Précision technique',
    description: (
      <>
        Chaque <Highlight>détail est optimisé</Highlight> pour garantir performance maximale,
        fluidité et expérience utilisateur irréprochable.
      </>
    ),
  },
  {
    number: '03',
    icon: <FiTrendingUp />,
    title: 'Vision business',
    description: (
      <>
        Nous développons uniquement des solutions <Highlight>rentables et utiles</Highlight>,
        alignées avec vos objectifs de croissance.
      </>
    ),
  },
];

// === COMPOSANT ===

export default function WhyUs() {
  return (
    <WhyUsSection id="why-us">
      <LinesBg />

      <Container>
        {/* Header */}
        <Header>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Atouts
          </Badge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pourquoi <span>nous</span> ?
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Trois piliers qui font la différence.
          </Subtitle>
        </Header>

        {/* Grid */}
        <Grid>
          {reasons.map((reason, index) => (
            <Card
              key={reason.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ y: -8 }}
            >
              <CardNumber index={index + 1}>{reason.number}</CardNumber>
              <IconWrapper index={index + 1}>{reason.icon}</IconWrapper>
              <CardTitle>{reason.title}</CardTitle>
              <CardDescription>{reason.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </WhyUsSection>
  );
}