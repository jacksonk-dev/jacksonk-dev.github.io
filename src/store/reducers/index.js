import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';

const initialState = {
  profile: {
    name: 'je-kaypro',
    description: 'JavaScript and Python dev. Just a spoiler alert, am that guy you see in your dreams - the greatest Js & Python programmer in your 2020 dreams.',
    image: './images/profilePic.jpg',
    online: [
      {
        app: 'LinkedIn',
        link: 'https://www.linkedIn.com/in/jekaypro',
        Icon: FaLinkedin,
        username: 'jekaypro',
      },
      {
        app: 'Twitter',
        link: 'https://www.twitter.com/jekaypro',
        Icon: FaTwitter,
        username: 'jekaypro',
      },
      {
        app: 'Github',
        link: 'https://github.com/je-kaypro',
        Icon: FaGithub,
        username: 'je-kaypro',
      },
      {
        app: 'Instagram',
        link: 'https://www.instagram.com/je_kaypro/',
        Icon: FaInstagram,
        username: 'je_kaypro',
      },
      {
        app: 'Facebook',
        link: 'https://www.facebook.com/kamya.jackson.50',
        Icon: FaFacebookF,
      },
      {
        app: 'MixCloud',
        link: 'https://www.mixcloud.com/Deeje_kay_UG',
      },
      {
        app: 'Yote',
        link: 'https://yote.app/@j.kamya',
        username: 'j.kamya',
      },
    ],
  },

  projects: [
    {
      name: 'House With Me',
      description: `Real Estate Sales Funnel. 
        It lets you get in touch with a Real Estate Consultant,
         a friend of mine in Bahrain with details of what you need - a villa, apartment etc. 
         Feel free to use it if you are in Bahrain`,
      image: './images/projects/houseWithMe.jpg',
      url: 'http://housewithme.000webhostapp.com',
      linkText: 'Go To',
    },
    {
      name: 'Jobs We Go',
      description: `A platform for job advertisement. 
                    You can create accounts and share job related content 
                    - job opportunities, job related articles, career building opportunities etc`,
      image: './images/projects/jobsWeGo.jpg',
      url: 'https://jobs-we-go.firebaseapp.com',
      linkText: 'Check Out',
    },
    {
      name: 'Python CMD YouTube Downloader',
      description: 'A python script that downloads YouTube videos. Nothing fancy about it. This is something I did as part of my Python learning journey',
      image: './images/projects/pythonCMDYoutubeDownloader.jpeg',
      url: 'https://github.com/je-kaypro/python-youtube-downloader',
      linkText: 'See On Github',
    },
  ],
};

const reducer = (state = initialState) => state;

export default reducer;
