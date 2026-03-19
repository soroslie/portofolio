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
        is_active: true,
        role: 'Sr. QA Automation',
        description:
          'Tested the newly developed unified web grosir platform for Axis, Smartfren, and XL, ensuring seamless integration and functionality across all three brands.',
        fe_frameworks: ['ReactJS'],
        be_frameworks: ['Go'],
        testing_tools: ['Postman'],
        testing_technique: ['Manual Testing', 'Regression Testing', 'Smoke Testing'],
        other_tools: ['JIRA']
      },
      {
        name: 'XLSmart - OLA Web Grosir Website',
        link: 'https://mitra.smartfren.com/digital-outlet',
        is_active: true,
        role: 'Sr. QA Automation',
        description:
          'Led testing efforts including test task breakdown, debugging production issues, and identifying risk concerns for new feature development and regression testing on both user-facing website and CMS platform.',
        fe_frameworks: ['ReactJS'],
        be_frameworks: ['Go', 'MariaDB'],
        testing_tools: ['Cypress', 'Postman', 'Katalon'],
        testing_technique: [
          'Manual Testing',
          'Regression Testing',
          'Smoke Testing',
          'Automation Testing',
          'Sanity Testing'
        ],
        other_tools: ['Redis', 'JIRA']
      },
      {
        name: 'Smartfren - EFORM Website',
        link: 'https://pascabayar-gallery.smartfren.com/login',
        is_active: true,
        role: 'Sr. QA Automation',
        description:
          'Managed testing responsibilities and raised risk concerns during new feature development and regression testing cycles to ensure product quality and stability.',
        fe_frameworks: ['VueJS'],
        be_frameworks: ['Go', 'PostgreSQL'],
        testing_tools: ['Cypress'],
        testing_technique: [
          'Manual Testing',
          'Regression Testing',
          'Automation Testing',
          'Sanity Testing'
        ],
        other_tools: ['JIRA']
      },
      {
        name: 'Smartfren - VIVA Website',
        link: 'https://play.google.com/store/apps/details?id=com.smartfren.snoc&hl=id',
        is_active: false,
        role: 'UAT Tester',
        description:
          'Collaborated with third-party vendors to perform UAT testing for the VIVA application, reviewing UAT test cases against SRS and BRD documentation to ensure requirement coverage.',
        fe_frameworks: [],
        be_frameworks: [],
        testing_tools: [],
        testing_technique: ['UAT Testing', 'Manual Testing', 'Regression Testing'],
        other_tools: []
      },
      {
        name: 'Shopee - Invoice Feature',
        link: 'https://shopee.co.id/',
        is_active: false,
        role: 'Feature QA',
        description:
          'Participated in requirement discussions, raised risk concerns during BRD, PRD, and Technical Design reviews, and performed testing for new features and regression cycles.',
        fe_frameworks: ['ReactJS', 'React Native'],
        be_frameworks: ['Go', 'Python', 'PostgreSQL'],
        testing_tools: ['Postman'],
        testing_technique: ['Manual Testing', 'Regression Testing', 'Smoke Testing'],
        other_tools: ['JIRA', 'Confluence', 'Internal Debugging Tools']
      },
      {
        name: 'Shopee - Seller Wallet',
        link: 'https://seller.shopee.co.id/',
        is_active: false,
        role: 'Feature QA',
        description:
          'Actively contributed to requirement meetings, identified potential risks during design phases, and conducted comprehensive testing for new features and regression scenarios.',
        fe_frameworks: ['ReactJS', 'React Native'],
        be_frameworks: ['Go', 'PostgreSQL'],
        testing_tools: ['Charles Proxy', 'Cypress', 'Postman'],
        testing_technique: ['Manual Testing', 'Regression Testing', 'Smoke Testing'],
        other_tools: ['JIRA', 'Confluence', 'Internal Debugging Tools']
      },
      {
        name: 'Shopee - Marketplace Core Features',
        link: 'https://shopee.co.id/',
        is_active: false,
        role: 'Regression Tester',
        description:
          'Executed weekly regression testing cycles and reported bugs to developers, ensuring platform stability and timely resolution of issues.',
        fe_frameworks: ['ReactJS', 'React Native'],
        be_frameworks: ['Go', 'Python', 'PostgreSQL'],
        testing_tools: [],
        testing_technique: ['Regression Testing', 'Smoke Testing'],
        other_tools: ['JIRA', 'Confluence', 'Internal Debugging Tools']
      },
      {
        name: 'ShopeePay App [MY ID TH]',
        link: 'https://play.google.com/store/apps/details?id=com.shopeepay.id&hl=id',
        is_active: false,
        role: 'Regression Tester',
        description:
          'Conducted weekly regression testing cycles and reported defects to developers, maintaining application quality across multiple regions.',
        fe_frameworks: ['React Native'],
        be_frameworks: [],
        testing_tools: ['Postman'],
        testing_technique: ['Regression Testing', 'Smoke Testing'],
        other_tools: ['JIRA', 'Confluence', 'Internal Debugging Tools']
      }
    ],
    icon: <RemoveRedEyeOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'automation',
    list: [
      {
        name: 'XLSmart - OLA Web Grosir Website',
        link: 'https://mitra.smartfren.com/digital-outlet',
        is_active: true,
        role: 'Sr. QA Automation',
        description:
          'Led end-to-end testing efforts including task breakdown, production issue debugging, and risk assessment for new features and regression testing on both user website and CMS platform.',
        fe_frameworks: ['ReactJS'],
        be_frameworks: ['Go', 'MariaDB'],
        testing_tools: ['Cypress', 'Postman', 'Katalon'],
        testing_technique: [
          'Manual Testing',
          'Regression Testing',
          'Smoke Testing',
          'Automation Testing',
          'Sanity Testing'
        ],
        other_tools: ['Redis', 'JIRA']
      },
      {
        name: 'Smartfren - EFORM Website',
        link: 'https://pascabayar-gallery.smartfren.com/login',
        is_active: true,
        role: 'Sr. QA Automation',
        description:
          'Managed testing activities and identified risk concerns during new feature development and regression cycles to ensure product reliability.',
        fe_frameworks: ['VueJS'],
        be_frameworks: ['Go', 'PostgreSQL'],
        testing_tools: ['Cypress'],
        testing_technique: [
          'Manual Testing',
          'Regression Testing',
          'Automation Testing',
          'Sanity Testing'
        ],
        other_tools: ['JIRA']
      },
      {
        name: 'Shopee - Marketplace Core Features',
        link: 'https://shopee.co.id/',
        is_active: false,
        role: 'Regression Tester',
        description:
          'Performed weekly regression testing cycles and reported bugs to developers, utilizing multiple automation tools to enhance testing efficiency.',
        fe_frameworks: ['ReactJS', 'React Native'],
        be_frameworks: ['Go', 'Python', 'PostgreSQL'],
        testing_tools: ['Katalon', 'Postman', 'Charles Proxy', 'XCUITest', 'Espresso'],
        testing_technique: ['Regression Testing', 'Smoke Testing'],
        other_tools: ['JIRA', 'Confluence', 'Internal Debugging Tools']
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
        is_active: false,
        role: 'QA Automation',
        description:
          'Implemented API automation testing using Cypress and Postman, with Allure reporting for comprehensive test result visualization.',
        fe_frameworks: [],
        be_frameworks: [],
        testing_tools: ['Cypress', 'Allure', 'Postman'],
        testing_technique: ['API Testing', 'Automation Testing'],
        other_tools: ['Allure']
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
        is_active: false,
        role: 'FE Developer',
        description:
          'Developed company profile website and CMS using Vue.js and Bootstrap, with Node.js Express backend and MySQL database.',
        fe_frameworks: ['VueJS', 'Bootstrap'],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: ['Manual Testing'],
        other_tools: ['Postman', 'Asana']
      },
      {
        name: 'Polytron - Employee Self Service & Dashboard',
        link: 'https://ess.polytron.co.id/login',
        is_active: false,
        role: 'FE Developer',
        description:
          'Built employee self-service portal and admin dashboard using Express.js and Bootstrap, integrated with Redis for caching and MySQL for data persistence.',
        fe_frameworks: ['Express.js', 'Bootstrap'],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: ['Manual Testing'],
        other_tools: ['Redis', 'Asana', 'Postman']
      },
      {
        name: 'Polytron - V-CARD to QR Generator',
        link: '',
        is_active: false,
        role: 'Fullstack Developer',
        description:
          'Created a V-CARD to QR code generator application using Express.js and Bootstrap, implementing MySQL database and Redis caching for optimal performance.',
        fe_frameworks: ['Express.js', 'Bootstrap'],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: ['Manual Testing'],
        other_tools: ['Redis', 'Asana', 'Postman']
      }
    ],
    icon: <DevicesOutlinedIcon fontSize='inherit' />
  },
  {
    name: 'BACK-END API',
    list: [
      {
        name: 'Polytron - Employee Self Service API',
        link: 'https://ess.polytron.co.id/login',
        is_active: false,
        role: 'BE Developer',
        description:
          'Designed and developed RESTful APIs for CMS and employee dashboard using Node.js Express and MySQL, implementing Redis for caching and optimizing response times.',
        fe_frameworks: ['Express.js', 'Bootstrap'],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: ['API Testing', 'Integration Testing'],
        other_tools: ['Redis', 'Asana', 'Postman']
      },
      {
        name: 'My Polytron API',
        link: '',
        is_active: false,
        role: 'Supporting BE Developer',
        description:
          'Provided backend support including template creation, bug fixes, code refactoring, and database design review for the My Polytron application.',
        fe_frameworks: ['Flutter'],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: ['Code Review', 'Bug Fixing'],
        other_tools: ['Asana', 'Postman']
      },
      {
        name: 'Polytron - Ansemble Games API (Support)',
        link: '',
        is_active: false,
        role: 'Supporting BE Developer',
        description:
          'Assisted in backend API development for gaming platform, providing maintenance and optimization support.',
        fe_frameworks: [],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: ['API Testing', 'Code Review'],
        other_tools: ['Postman']
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
        is_active: false,
        role: 'Mobile Developer',
        description:
          'Collaborated with one other developer to build a cross-platform mobile application using Flutter, with Node.js Express backend and MySQL database.',
        fe_frameworks: ['Flutter'],
        be_frameworks: ['Node.js Express', 'MySQL'],
        testing_tools: [],
        testing_technique: [],
        other_tools: ['Asana', 'Postman']
      }
    ],
    icon: <StayPrimaryPortraitIcon fontSize='inherit' />
  }
]

export default MyExperience