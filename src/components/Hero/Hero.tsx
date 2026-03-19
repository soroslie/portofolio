import * as S from './Hero.style'
import SorosImage from '../../assets/images/soros_transparant_half.png'
import SocialIcons from './Socialicon'

const NewHero = (): JSX.Element => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Circle animation variants - FIXED
  const circleVariants = {
    initial: { 
      scale: 1,
      boxShadow: `
        0 20px 50px rgba(0, 0, 0, 0.8),
        0 0 0 2px rgba(255, 255, 255, 0.3),
        0 0 0 5px rgba(255, 255, 255, 0.1),
        inset 0 0 30px rgba(255, 255, 255, 0.2)
      `
    },
    hover: { 
      scale: 1.1,
      boxShadow: `
        0 30px 70px rgba(0, 0, 0, 0.9),
        0 0 0 3px rgba(255, 255, 255, 0.5),
        0 0 0 7px rgba(255, 255, 255, 0.2),
        inset 0 0 50px rgba(255, 255, 255, 0.3)
      `,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    initial: { 
      scale: 1,
      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.6))'
    },
    hover: { 
      scale: 1.05,
      filter: 'drop-shadow(0 40px 60px rgba(0, 0, 0, 0.9))',
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <S.Container id='my-profile'>
      <S.Grid>
        {/* Left Column */}
        <S.LeftColumn variants={staggerContainer} initial='hidden' animate='visible'>
          <S.Greeting variants={fadeInUp}>
            你好! <span>I am</span>
          </S.Greeting>

          <S.NameContainer variants={fadeInUp}>
            <S.Name>Soros Lie</S.Name>
            <S.ChineseName>(李龙神)</S.ChineseName>
          </S.NameContainer>

          <S.Title variants={fadeInUp}>Sr. Quality Assurance</S.Title>

          {/* Futuristic Divider with Shimmer Effect */}
          <S.Divider variants={fadeInUp} />

          {/* Social Icons */}
          <SocialIcons variants={fadeInUp} />

          {/* Stats Box */}
          <S.StatsBox variants={fadeInUp}>
            <S.StatItem>
              <S.StatNumber>3.5+</S.StatNumber>
              <S.StatLabel>Years Experience</S.StatLabel>
            </S.StatItem>
            <S.StatItem>
              <S.StatNumber>10+</S.StatNumber>
              <S.StatLabel>Projects Completed</S.StatLabel>
            </S.StatItem>
            <S.StatItem>
              <S.StatNumber>4+</S.StatNumber>
              <S.StatLabel>Automation Builds</S.StatLabel>
            </S.StatItem>
          </S.StatsBox>
        </S.LeftColumn>

        {/* Right Column - Hidden on mobile - FIXED */}
        <S.RightColumn
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <S.ImageContainer>
            {/* FIXED: Circle wrapper separates centering from animation */}
            <S.CircleWrapper>
              <S.WhiteCircle
                variants={circleVariants}
                initial="initial"
                whileHover="hover"
              />
            </S.CircleWrapper>

            {/* Image on top */}
            <S.ProfileImage
              src={SorosImage}
              alt='Soros Lie'
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
            />
          </S.ImageContainer>
        </S.RightColumn>
      </S.Grid>
    </S.Container>
  )
}

export default NewHero