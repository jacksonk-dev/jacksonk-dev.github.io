const initialState = {
  profile: {
    name: 'je-kaypro',
    description: 'JavaScript and Python dev. Just a spoiler alert, am that guy you see in your dreams - the greatest Js & Python coder in your 2020 dreams.',
    contacts: {
      LinkedIn: 'https://www.linkedIn.com/in/jekaypro',
      Yote: 'https://yote.app/@j.kamya',
    },
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
