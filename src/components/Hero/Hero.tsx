import * as S from './Hero.style'
import { motion } from 'framer-motion' // Add this import
import SorosImage from '../../assets/images/soros_transparant_half.png'
import SocialIcons from './Socialicon'

const NewHero = (): JSX.Element => {
  return (
    <S.Container id='my-profile'>
      <S.Grid>
        {/* Left Column with scroll animations */}
        <S.LeftColumn
          variants={S.containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <S.Greeting variants={S.greetingVariants}>
            你好! <span>I am</span>
          </S.Greeting>

          <S.NameContainer>
            <S.Name variants={S.nameVariants}>Soros Lie</S.Name>
            <S.ChineseName 
              variants={S.chineseNameVariants}
              custom={1}
            >
              (李龙神)
            </S.ChineseName>
          </S.NameContainer>

          <S.Title variants={S.titleVariants}>Sr. Quality Assurance</S.Title>

          {/* Futuristic Divider with Shimmer Effect */}
          <S.Divider variants={S.dividerVariants} />

          {/* Social Icons with stagger */}
          <S.SocialContainer
            variants={S.socialContainerVariants}
          >
            <SocialIcons variants={S.socialIconVariants} />
          </S.SocialContainer>

          {/* Stats Box with animated numbers */}
          <S.StatsBox variants={S.statsBoxVariants}>
            <S.StatItem
              as={motion.div} // Changed from S.motion.div to motion.div
              variants={S.statItemVariants}
              custom={0}
            >
              <S.StatNumber>4.5+</S.StatNumber>
              <S.StatLabel>Years Experience</S.StatLabel>
            </S.StatItem>
            <S.StatItem
              as={motion.div} // Changed from S.motion.div to motion.div
              variants={S.statItemVariants}
              custom={1}
            >
              <S.StatNumber>10+</S.StatNumber>
              <S.StatLabel>Projects Contribution</S.StatLabel>
            </S.StatItem>
            <S.StatItem
              as={motion.div} // Changed from S.motion.div to motion.div
              variants={S.statItemVariants}
              custom={2}
            >
              <S.StatNumber>4+</S.StatNumber>
              <S.StatLabel>Automation Builds</S.StatLabel>
            </S.StatItem>
          </S.StatsBox>
        </S.LeftColumn>

        {/* Right Column - Hidden on mobile */}
        <S.RightColumn
          variants={S.rightColumnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <S.ImageContainer>
            {/* Background glow effect */}
            <motion.div // Changed from S.motion.div to motion.div
              style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(19,204,158,0.15) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: 0,
              }}
              variants={S.backgroundGlowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            />
            
            {/* Circle Wrapper */}
            <S.CircleWrapper>
              <S.WhiteCircle
                variants={S.circleVariants}
                whileHover="hover"
              />
            </S.CircleWrapper>

            {/* Image on top */}
            <S.ProfileImage
              src={SorosImage}
              alt='Soros Lie'
              variants={S.imageVariants}
              whileHover="hover"
            />
          </S.ImageContainer>
        </S.RightColumn>
      </S.Grid>
    </S.Container>
  )
}

export default NewHero