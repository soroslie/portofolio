import { Project } from '../../types/project'
import TiarapotImage from '../../assets/images/tiarapot.png'
import EssImage from '../../assets/images/ess.png'
import VcardImage from '../../assets/images/vcard.png'
import MyPolytronImage from '../../assets/images/my_polytron.png'
import ShopeePayImage from '../../assets/images/shopee_pay.png'
import ShopeeImage from '../../assets/images/shopee.png'

export const MyProjects: Project[] = [
  {
    name: 'Shopee Marketplace Order Regression Testing',
    resume_description:
      'Testing some features and functionalities from Shopee App and Website specially focusing on the seamless flow of Shopee order flow (android, iOS, website and mobile web)',
    description:
      'Testing all the features and functionalities from Shopee Pay App and Shopee Pay inside Shopee App. Handling Thailand, Vietnam, Brazil and Indonesia regions (android)',
    type: 'Testing',
    image: ShopeeImage,
    skill: ['regression testing'],
    color: '#EE4D2D'
  },
  {
    name: 'Shopee Pay Regression Testing',
    resume_description:
      'Testing all the features and functionalities from Shopee Pay App and Shopee Pay inside Shopee App. Handling Thailand, Vietnam, Brazil and Indonesia regions (android)',
    description:
      'Testing all the features and functionalities from Shopee Pay App and Shopee Pay inside Shopee App. Handling Thailand, Vietnam, Brazil and Indonesia regions (android)',
    type: 'Testing',
    image: ShopeePayImage,
    skill: ['regression testing'],
    color: '#EE4D2D'
  },
  {
    name: 'MyPolytron',
    resume_description:
      'Ex-Frontend Developer, MyPolytron is a hybrid mobile apps that helps Polytron to engage with their customers through their phones. Customers can access most of the features that Polytron website currently have (such as banner, product catalog, news, product warranty registration, service location and etc.) with this app along with app-exclusive promotional event. Developed the frontend using Flutter and helping the API side using NodeJS Express, Redis and MySQL.',
    description:
      'Ex-Frontend Developer, MyPolytron is a hybrid mobile apps that helps Polytron to engage with their customers through their phones. Customers can access most of the features that Polytron website currently have (such as banner, product catalog, news, product warranty registration, service location and etc.) with this app along with app-exclusive promotional event',
    heading: "Information regardings Polytron's products and services in your hand",
    type: 'Hybrid Mobile Apps',
    link: 'https://play.google.com/store/apps/details?id=com.polytron.mypolytron',
    image: MyPolytronImage,
    skill: ['flutter', 'Node', 'redis', 'MySQL', 'EJS'],
    color: '#ff0006'
  },
  {
    name: 'V-CARD to QR Generator',
    resume_description:
      'Ex-Fullstack Developer, V-CARD to QR Generator is a website to generate an excel file that contains employee information and a QR Code which contains V-CARD so the employee contact data could easily be shared and collected. Developed using NodeJS Express, Embedded Javascript and MySQL.',
    description:
      'Fullstack Developer, V-CARD to QR Generator is a website to generate an excel file that contains employee information and a QR Code which contains V-CARD so the employee contact data could easily be shared and collected',
    type: 'Website',
    image: VcardImage,
    skill: ['EJS', 'Node', 'MySQL'],
    color: '#4369d7'
  },
  {
    name: 'Polytron Employee Self Service',
    heading: 'Polytron Human Resource Data Approval',
    resume_description:
      'Ex-Backend Developer and Database Administrator, Polytron’s Employee Self Service is a website used by all Polytron employees to request change or fix about their education, biodata, family information, address and emergency contact. It is divided into 2 parts: the user (employees) part and the admin panel managed by the human resource department who approves/rejects the user’s document request changes. It is developed using NodeJS Express, Redis, Embedded Javascript, and MySQL.',
    description:
      'Ex-Backend Developer and Database Administrator, Polytron’s Employee Self Service is a website used by all Polytron employees to request change or fix about their education, biodata, family information, address and emergency contact. It is divided into 2 parts: the user (employees) part and the admin panel managed by the human resource department who approves/rejects the user’s document request changes',
    type: 'Website',
    link: 'https://ess.polytron.co.id',
    image: EssImage,
    skill: ['EJS', 'Node', 'MySQL', 'redis', 'md5'],
    color: '#fb3c35'
  },
  {
    name: 'Tiarapot Pro',
    resume_description:
      'Tiarapot is a website to help Polytron promote their new product which is Tiarapot Pro. This website features community recipes so the members could share recipes which have been approved by the Admin from the content management system panel. Most of the website’s banner and text are editable because everything was controlled by the admin panel. It is developed using VueJS, NodeJS Express, MySQL',
    description:
      'Tiarapot is a website to help Polytron promote their new product which is Tiarapot Pro. This website features community recipes so the members could share recipes which have been approved by the Admin from the content management system panel. Most of the website’s banner and text are editable because everything was controlled by the admin panel',
    type: 'Website',
    link: 'https://tiarapot.com',
    image: TiarapotImage,
    skill: ['Vue', 'Node', 'MySQL', 'redis'],
    color: '#a22c2c'
  }
]
