import Qr from '../../assets/images/vcard-soros.png'
import * as S from './Profile.style'
import { MyFrammer } from '../../utils/framer'
import { SubHeading } from '../../constants/content/home'
import SocialMedias from '../socialMedias/SocialMedias'

const Profile = (): JSX.Element => {
  return (
    <S.Container id='my-profile'>
      <S.LeftSection
        variants={MyFrammer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <S.Heading>
          Hi, I&apos;m <span>Soros Lie</span>
        </S.Heading>
        <S.SubContent>{SubHeading[2]}</S.SubContent>
        <SocialMedias />
      </S.LeftSection>
      <S.RightSection
        variants={MyFrammer}
        initial='hidden'
        whileInView='visible'
        exit='hidden'
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <S.ImageBackground>
          <img src={Qr} alt='qr' />
        </S.ImageBackground>
      </S.RightSection>
    </S.Container>
  )
}

export default Profile
