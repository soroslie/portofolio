import { Experience } from '../../types/experience'
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext'
import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'

const MyExperience: Experience[] = [
  {
    name: 'manual testing',
    list: [
      {
        name: 'XLSmart - Web Grosir Website',
        link: '',
        is_active: true
      },
      {
        name: 'XLSmart - OLA Web Grosir Website',
        link: 'https://mitra.smartfren.com/digital-outlet',
        is_active: true
      },
      {
        name: 'Smartfren - EFORM Website',
        link: 'https://pascabayar-gallery.smartfren.com/login',
        is_active: true
      },
      {
        name: 'Smartfren - VIVA Website',
        link: 'https://play.google.com/store/apps/details?id=com.smartfren.snoc&hl=id',
        is_active: false
      },
      {
        name: 'Shopee - Invoice Feature',
        link: 'https://shopee.co.id/',
        is_active: false
      },
      {
        name: 'Shopee - Marketplace Core Features',
        link: 'https://shopee.co.id/',
        is_active: false
      },
      {
        name: 'Shopee - Seller Wallet',
        link: 'https://seller.shopee.co.id/',
        is_active: false
      },
      {
        name: 'ShopeePay App [MY ID TH]',
        link: 'https://play.google.com/store/apps/details?id=com.shopeepay.id&hl=id',
        is_active: false
      }
    ],
    icon: <RemoveRedEyeOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'automation',
    list: [
      {
        name: 'XLSmart - OLA Web Grosir',
        link: 'https://mitra.smartfren.com/digital-outlet',
        is_active: true
      },
      {
        name: 'Smartfren - Eform',
        link: 'https://pascabayar-gallery.smartfren.com/login',
        is_active: true
      },
      {
        name: 'Shopee - Marketplace Core Features',
        link: 'https://shopee.co.id/',
        is_active: false
      }
    ],
    icon: <QueuePlayNextIcon fontSize='inherit' />
  },
  {
    name: 'API automation',
    list: [
      {
        name: 'XLSmart - TYK',
        link: '',
        is_active: false
      }
    ],
    icon: <RestorePageOutlinedIcon fontSize='inherit' />
  },

  {
    name: 'Front-end Web',
    list: [
      {
        name: 'Polytron - Tiarapot Company Profile & CMS',
        link: '',
        is_active: false
      },
      {
        name: 'Polytron - Employee Self Service & Dashboard',
        link: 'https://ess.polytron.co.id/login',
        is_active: false
      },
      {
        name: 'Polytron - V-CARD to QR Generator',
        link: '',
        is_active: false
      }
    ],
    icon: <DevicesOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'BACK-END API',
    list: [
      {
        name: 'Polytron - Employee Self Service API',
        link: '',
        is_active: false
      },
      {
        name: 'My Polytron API',
        link: '',
        is_active: false
      },
      {
        name: 'Polytron - Ansemble Games API (Support)',
        link: '',
        is_active: false
      }
    ],
    icon: <DescriptionOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'mobile apps',
    list: [
      {
        name: 'My Polytron App',
        link: 'https://play.google.com/store/apps/details?id=com.polytron.mypolytron&hl=id',
        is_active: false
      }
    ],
    icon: <StayPrimaryPortraitIcon fontSize='inherit' />
  }
]

export default MyExperience
