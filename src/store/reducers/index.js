import {
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';

const experienceYears = (new Date()).getFullYear() - 2015;

const initialState = {
  profile: {
    name: 'jacksonk.dev',
    description: `I am a front-end Software Engineer, a little backend here and there with ${experienceYears}+ years of experience. I love beautiful user interfaces and amazing user experience.`,
    image: './images/profilePic.jpg',
    online: [
      {
        app: 'Github',
        link: 'https://github.com/jacksonk-dev',
        Icon: FaGithub,
        username: 'jacksonk-dev',
      },
      {
        app: 'StackOverflow',
        link: 'https://stackoverflow.com/users/9135987/jacksonk-dev?tab=profile',
        Icon: FaStackOverflow,
        username: 'jacksonk-dev',
      },
      {
        app: 'LinkedIn',
        link: 'https://www.linkedIn.com/in/jacksonk-dev',
        Icon: FaLinkedin,
        username: 'jacksonk-dev',
      },
      {
        app: 'Twitter',
        link: 'https://www.twitter.com/jacksonk_dev',
        Icon: FaTwitter,
        username: 'jacksonk_dev',
      },
      {
        app: 'Medium',
        link: 'https://medium.com/@jacksonk.dev',
        Icon: FaMedium,
        username: 'jacksonk.dev',
      },
      // {
      //   app: 'Instagram',
      //   link: 'https://www.instagram.com/jacksonk.dev',
      //   Icon: FaInstagram,
      //   username: 'jacksonk.dev',
      // },
      // {
      //   app: 'Facebook',
      //   link: 'https://www.facebook.com/jackson.kamya.79',
      //   Icon: FaFacebookF,
      // },
      // {
      //   app: 'MixCloud',
      //   Icon: FaMixcloud,
      //   link: 'https://www.mixcloud.com/Deejekay_ug/',
      // },
      {
        app: 'Yote',
        link: 'https://yote.app/@j.kamya',
        username: 'j.kamya',
      },
    ],
  },

  projects: [
    {
      name: 'Jekay Technologies Website',
      description: 'Jekay Technologies Website',
      image: './images/projects/jekayTech.PNG',
      url: 'https://jk-tech-prod.firebaseapp.com',
      linkText: 'Go To',
    },
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
      image: './images/projects/pythonCMDYoutubeDownloader.jpg',
      url: 'https://github.com/jacksonk-dev/python-youtube-downloader',
      linkText: 'See On Github',
    },
  ],
};

const reducer = (state = initialState) => state;

export default reducer;
