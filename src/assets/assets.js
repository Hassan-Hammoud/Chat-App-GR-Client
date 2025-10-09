// import avatar_icon from './avatar_icon.png'
// import gallery_icon from './gallery_icon.svg'
// import help_icon from './help_icon.png'
// import logo_icon from './logo_icon.svg'
// import logo_big from './logo_big.svg';
// import logo from './logo.png'
// import search_icon from './search_icon.png'
// import send_button from './send_button.svg'
// import menu_icon from './menu_icon.png'
// import arrow_icon from './arrow_icon.png'
// import code from './code.svg'
// import bgImage from './bgImage.svg'
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import profile_alison from './profile_alison.png';
import profile_enrique from './profile_enrique.png';
import profile_marco from './profile_marco.png';
import profile_martin from './profile_martin.png';
import profile_richard from './profile_richard.png';

const assets = {
  logo_big:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028423/logo_big_nsrfhm.svg',
  //   logo_big,
  logo: 'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028424/logo_dgm05n.png',
  avatar_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028436/avatar_icon_pkckrp.png',
  send_button:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028431/send_button_tkcshi.svg',
  search_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028431/search_icon_ajbhgq.png',
  profile_martin:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028430/profile_martin_lk34u0.png',
  arrow_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028436/arrow_icon_rwitpl.png',
  code: 'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028436/code_ehswha.svg',
  menu_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028425/menu_icon_vpy046.png',
  gallery_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028423/gallery_icon_lodts3.svg',
  help_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028423/help_icon_rdszcv.png',
  logo_icon:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028425/logo_icon_imxszi.svg',
  bgImage:
    'https://res.cloudinary.com/dmmtbk5lg/image/upload/v1760028436/bgImage_xgevok.svg',
};

export default assets;

export const imagesDummyData = [pic1, pic2, pic3, pic4, pic1, pic2];

export const userDummyData = [
  {
    _id: '680f50aaf10f3cd28382ecf2',
    email: 'test1@greatstack.dev',
    fullName: 'Alison Martin',
    profilePic: profile_alison,
    bio: 'Hi Everyone, I am Using QuickChat',
  },
  {
    _id: '680f50e4f10f3cd28382ecf9',
    email: 'test2@greatstack.dev',
    fullName: 'Martin Johnson',
    profilePic: profile_martin,
    bio: 'Hi Everyone, I am Using QuickChat',
  },
  {
    _id: '680f510af10f3cd28382ed01',
    email: 'test3@greatstack.dev',
    fullName: 'Enrique Martinez',
    profilePic: profile_enrique,
    bio: 'Hi Everyone, I am Using QuickChat',
  },
  {
    _id: '680f5137f10f3cd28382ed10',
    email: 'test4@greatstack.dev',
    fullName: 'Marco Jones',
    profilePic: profile_marco,
    bio: 'Hi Everyone, I am Using QuickChat',
  },
  {
    _id: '680f516cf10f3cd28382ed11',
    email: 'test5@greatstack.dev',
    fullName: 'Richard Smith',
    profilePic: profile_richard,
    bio: 'Hi Everyone, I am Using QuickChat',
  },
];

export const messagesDummyData = [
  {
    _id: '680f571ff10f3cd28382f094',
    senderId: '680f5116f10f3cd28382ed02',
    receiverId: '680f50e4f10f3cd28382ecf9',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    seen: true,
    createdAt: '2025-04-28T10:23:27.844Z',
  },
  {
    _id: '680f5726f10f3cd28382f0b1',
    senderId: '680f50e4f10f3cd28382ecf9',
    receiverId: '680f5116f10f3cd28382ed02',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    seen: true,
    createdAt: '2025-04-28T10:23:34.520Z',
  },
  {
    _id: '680f5729f10f3cd28382f0b6',
    senderId: '680f5116f10f3cd28382ed02',
    receiverId: '680f50e4f10f3cd28382ecf9',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    seen: true,
    createdAt: '2025-04-28T10:23:37.301Z',
  },
  {
    _id: '680f572cf10f3cd28382f0bb',
    senderId: '680f50e4f10f3cd28382ecf9',
    receiverId: '680f5116f10f3cd28382ed02',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    seen: true,
    createdAt: '2025-04-28T10:23:40.334Z',
  },
  {
    _id: '680f573cf10f3cd28382f0c0',
    senderId: '680f50e4f10f3cd28382ecf9',
    receiverId: '680f5116f10f3cd28382ed02',
    image: img1,
    seen: true,
    createdAt: '2025-04-28T10:23:56.265Z',
  },
  {
    _id: '680f5745f10f3cd28382f0c5',
    senderId: '680f5116f10f3cd28382ed02',
    receiverId: '680f50e4f10f3cd28382ecf9',
    image: img2,
    seen: true,
    createdAt: '2025-04-28T10:24:05.164Z',
  },
  {
    _id: '680f5748f10f3cd28382f0ca',
    senderId: '680f5116f10f3cd28382ed02',
    receiverId: '680f50e4f10f3cd28382ecf9',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    seen: true,
    createdAt: '2025-04-28T10:24:08.523Z',
  },
];
