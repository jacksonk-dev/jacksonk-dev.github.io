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
    description: 'JavaScript and Python dev. Just a spoiler alert, am that guy you see in your dreams - the greatest Js & Python coder in your 2020 dreams.',
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
        app: 'Mixcloud',
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
      name: 'Jobs We Go',
      description: 'A platform for job advertisement',
      image: './images/projects/jobsWeGo.jpeg',
      url: 'https://jobswego.com',
      linkText: 'Visit',
    },

    {
      name: 'Python CMD Youtube Downloader',
      description: 'A python script that dowloads youtube videos. Nothing fancy about it. This is something I did as part of my Python learning journey',
      image: './images/projects/pythonCMDYoutubeDownloader.png',
      url: 'https://github.com/je-kaypro/python-youtube-downloader',
      linkText: 'See on github',
    },
  ],
};

const reducer = (state = initialState) => state;

export default reducer;
