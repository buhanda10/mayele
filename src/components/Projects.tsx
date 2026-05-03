'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFolder } from 'react-icons/fi';
import { theme } from '@/styles/theme';

// === STYLES ===

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: ${theme.colors.dark};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${theme.colors.darker};
  border: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  min-height: 420px;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div<{ $bgImage: string }>`
  height: 200px;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: top center;
  transition: transform 0.6s ease;
  position: relative;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 50%, ${theme.colors.darker} 100%);
`;

const CardContent = styled.div`
  padding: 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const CardIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: ${theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  font-family: ${theme.fonts.heading};
`;

const CardDescription = styled.p`
  color: ${theme.colors.gray};
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
`;

const CardLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
  color: ${theme.colors.secondary};
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.8rem;
  }

  svg {
    font-size: 1rem;
  }
`;

const TagRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(108, 99, 255, 0.15);
  color: ${theme.colors.primary};
  border: 1px solid rgba(108, 99, 255, 0.2);
`;

// === DONNÉES ===

const projects = [
  {
    id: 1,
    title: 'Gestion de Stock — Pharmacies',
    description:
      'Logiciel complet de gestion de stocks pour pharmacies, optimisant le suivi des médicaments, les alertes de péremption et les réapprovisionnements automatiques.',
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop',
    tags: ['SaaS', 'Gestion', 'Pharmacie'],
    link: '#',
  },
  {
    id: 2,
    title: 'Oriente-toi',
    description:
      "Plateforme web d'orientation pour étudiants permettant de découvrir les filières, métiers et établissements adaptés à leur profil et aspirations.",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
    tags: ['Web', 'Éducation', 'Orientation'],
    link: 'https://oriente-toi.alwaysdata.net/',
  },
  {
    id: 3,
    title: 'MyChurch',
    description:
      'Réseau social chrétien connectant les communautés religieuses, avec partage de contenus spirituels, événements et messagerie intégrée.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    tags: ['Social', 'Communauté', 'Mobile'],
    link: 'https://mychurch.alwaysdata.net',
  },
];

// === COMPOSANT ===

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        {/* Header */}
        <Header>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nos Réalisations
          </Badge>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Des <span>projets concrets</span> qui font la différence
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Chaque solution est pensée pour répondre à des besoins réels avec une exécution technique irréprochable.
          </Subtitle>
        </Header>

        {/* Grid */}
        <Grid>
          {projects.map((project, index) => (
            <Card
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <CardImage $bgImage={project.image}>
                <ImageOverlay />
              </CardImage>

              <CardContent>
                <CardIcon>
                  <FiFolder />
                </CardIcon>

                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>

                <TagRow>
                  {project.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagRow>

                {project.link !== '#' && (
                  <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Visiter le site <FiExternalLink />
                  </CardLink>
                )}
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
}