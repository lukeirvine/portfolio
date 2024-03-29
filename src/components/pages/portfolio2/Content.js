import { imgs } from "../../../resources/images"

export const content = [
  {
    title: "Mixflip",
    date: "Winter 2023",
    img: [
      imgs.mixflip.dashboard,
      imgs.mixflip.demo1,
      imgs.mixflip.demo2
    ],
    bgColor: 'yellow',
    pars: [
      <>
        <a target="_blank" href="https://mixflip.io">Mixflip</a> is SaaS project I'm working on with sound producer 
        and friend, <a target="_blank" href="https://evergreenrecords.com/about/">David Olson</a>. It's 
        an embeddable audio player that demonstrates an audio engineer's production, mixing, or mastering skills by 
        swapping between two time-synced files in real time. 
      </>,
      <>
        This app integrates a number of different technologies. It's built in ReactJS using a Firebase database, but 
        uses Cloudflare's R2 storage for audio files because it has no egress fees. It also utilizes a cloud server 
        I set up on a Vultr instance that takes a new audio file from Cloudflare, creates a json file representing 
        the visualized waveform, and saves it back to Cloudflare. This allows the app to show waveforms without 
        processing the audio files on each load. 
      </>,
      <>
        Mixflip is also integrated with Chargebee using their API and some custom webhooks to seamlessly manage 
        our subscriptions and plans. Half of Mixflip's features are only available with a premium subscription plan.
      </>,
      <>
        This app has been a fun exercise in true full-stack development. There are essentially 3 different servers 
        running my back-end code: Firebase Cloud Functions running Chargebee webhooks to keep Mixflip up to date 
        with what the user is paying for, the Cloudflare R2 worker server to manage my storage's security and organization, 
        and a Vultr virtual machine instance that creates the visualized waveforms. 
      </>,
      <>
        You can try Mixflip for free with a 14-day trail at <a target="_blank" href="https://mixflip.io">mixflip.io</a>.
      </>
    ]
  },
  {
    title: "Camp Mivoden Mobile App",
    date: "Summer 2022",
    img: [
      imgs.mivodenApp.threeScreens,
      imgs.mivodenApp.mediaEditor,
      imgs.mivodenApp.scheduleEditor,
      imgs.mivodenApp.notifications
    ],
    bgColor: 'red',
    pars: [
      <>
        <a target="_blank" href="https://mivoden.com">Camp Mivoden</a> is a Christian summer camp and retreat center in Northern Idaho. I've had the privilege of working there for several 
        summers, so they asked me to create a mobile app that would feature camp media and provide 
        tools for new campers like an interactive map and up-to-date schedules.
      </>,
      <>
        From start to finish this app was a really fun learning experience. The administrative team 
        at Mivoden is less technically experienced so I got to interpret their desires into modular 
        features and realistic release versions. Once the minimum viable product was complete, 
        I spent the summer on-site monitoring the beta test. All the summer staff downloaded a beta version of the 
        app from Apple's TestFlight and gave me lots of helpful feedback and ideas. Throughout the summer I 
        worked on bug fixes, Apple App Store compliance, and the marketing materials for the App Store. Then towards 
        the end of the summer I released a finished version to the iOS app store for the final week of 
        campers to download and use.
      </>,
      <>
        This project also includes an accompanying web UI allowing Mivoden staff to edit schedules, media, 
        and map data without editing the code itself. The mobile app was built with React Native and 
        Expo's managed workflow, the web UI was built with ReactJS, and both apps use Google's Firebase for 
        a database, authentication, and cloud functions.
      </>,
      <>
        You can check out the Mivoden app on the <a target="_blank" href="https://apps.apple.com/us/app/camp-mivoden/id1628255508">App Store</a>.
      </>
    ]
  },
  {
    title: "Wordle Solver",
    date: "March 2022",
    img: [imgs.wordle.desktop],
    bgColor: 'blue',
    pars: [
      <>
        Wordle is a fun little word guessing game on the New York Times' <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">website</a>. 
        It only lets you try to guess one word a day, and it quickly took off on social media when everyone started 
        sharing how many guesses it took them.
      </>,
      <>
        I was fascinated by the type of clues the game gives you, and wondered how hard it would be to filter Wordle's 
        word list based on the clue criteria. As a web developer I had to build a UI so other people could use it too, 
        which was a challenge of its own because I wanted to replicate the UI of the game itself. What resulted is a Wordle 
        solver that is pretty intuitive, easy to use, and still allows the user to engage with the actual game because they 
        have to choose which word to guess next based on the filtered word list. 
      </>,
      <>
        You too can shamelessly cheat at Wordle <a target="_blank" href="https://lukeirvine.github.io/wordle-solver">here</a>. 
        I won't tell anyone. :)
      </>
    ]
  },
  {
    title: "Midi Display",
    date: "January 2022",
    img: ["https://i.imgur.com/CAMlsFN.png"],
    bgColor: 'yellow',
    pars: [
      <>
        When I started configuring my setup to teach online piano lessons, I looked for a simple app online that would display 
        a piano keyboard with highlighted keys based on midi signals from an external keyboard. I couldn't find any elegant 
        solutions that clearly displayed just a keyboard and the keys pressed, so I set out to create one.
      </>,
      <>
        The keyboard is created entirely using CSS, which was quite a fun and scalable process. It was so satisfying to only 
        create one octave and then loop through the code to create as many octaves as I wanted. The keyboard also has the capability 
        of showing you the name of the chord being played. This process takes a bit of AI, so I used a very helpful npm library for this 
        features. Building on the shoulders of giants is just so cool.
      </>,
      <>
        Another interesting concern for this app was speed of execution. The depressed notes are kept track of in an array 
        which has to be appended to or truncated each time a note is played or released. It also has to be searched by each 
        key for that key to know if it should be highlighted or not. Furthermore, the chord analyzer runs every time a key is 
        pressed or released, adding even more complexity. If not implemented in an efficient manner, the app can be 
        easily prone to lagging. I had to refactor the code several times to increase speed and eventually got to a point where 
        you didn't notice any lag, making the display feel like playing a real piano. 
      </>,
      <>
        This app is currently free to use at <a href="https://www.mididisplay.com" target="_blank">mididisplay.com</a>, though it will 
        soon be monetized and cost a buck or so.
      </>
    ]
  },
  {
    title: "GoalTop",
    date: "October 2021",
    img: [imgs.goaltop.dashboard],
    bgColor: 'pink',
    pars: [
      <>
        Goaltop was born out of having too many little things to do and no good way to keep 
        my eyes on the big milestones I was working towards. A whiteboard above my desk probably 
        would have worked, but I figured it'd be much more effective to have my goals right on 
        my desktop where I'd see them no matter where I was.
      </>,
      <>
        This app is currently in beta testing but will be available for public use soon.
      </>,
      <>
        If you'd like to participate in the
        beta, <a href="mailto: lukeirvinefreelance@gmail.com">email me</a> and
        I'll send you the beta access key.
      </>
    ]
  },
  {
    title: "Survey Counter",
    date: "July 2021",
    img: [imgs.surveyCounter.reports],
    bgColor: 'pink',
    pars: [
      <>
        I worked at a summer camp for a number of years where we handed out
        paper surveys to the kids every week, but counting them and getting
        any kind of real data from them was a real pain. So I developed this app
        that makes entering the data extremely fast and then creates a series of
        bar charts and averages for the data.
      </>,
      <>
        <p className="app-list-title">Additional Features:</p>
        <ul className="app-list">
            <li>Can download a json object for survey data to be uploaded to another account</li>
            <li>Can create a shareable link to display survey data without being logged in</li>
        </ul>
      </>,
      <>
        The camp staff in charge of the surveys loved using this app
        and enjoyed being able to quickly share results with other staff via
        the shareable link and will no doubt be using this app in future summers.
      </>
    ]
  },
  {
    title: "TV Display",
    date: "August 2021",
    img: [imgs.mealDash.dash2],
    bgColor: 'pink',
    pars: [
      <>
        This is another app for the summer camp I spent a number of years
        working for. During our family camps, we would have chaotic meal times
        where campers would try to listen for when they were dismissed for
        food and when they were dismissed for activities. It was a mess, so
        I developed a small webpage that we loaded up on a smart tv in the
        cafeteria, and a mobile site that controlled what was shown on
        the tv in real time.
      </>,
      <>
        All the camp leadership loved this app because it completely
        streamlined their meals, making for happier campers and more
        time for the campers to do the activities they came to do.
      </>
    ]
  },
  {
    title: "Small Groups Website",
    date: "December 2020",
    img: [imgs.smallGroups.groupCards],
    bgColor: 'pink',
    pars: [
      <>
        This is a website I developed to help religious organizations
        facilitate small group signups and facilitation. It shows potential group
        members the different groups available, how many people are in each along with
        other information, and allows them to sign up and leave different groups.
      </>,
      <>
        It's built using React.js, React Bootstrap Components, and Firebase.
        It utilizes several Firebase features such as the Realtime Database,
        Cloud Storage, Cloud Functions, and Authentication.
      </>,
      <>
        This app isn't in production yet, but will hopefully be implemented and
        used by Walla Walla Universtiy's Chaplain's Office in January of 2022.
      </>
    ]
  },
  // {
  //   title: "Maze",
  //   date: "February 2020",
  //   img: [imgs.maze.action],
  //   bgColor: 'pink',
  //   pars: [
  //     <>
  //       This is the first major computer science project I worked on in college and it was easily the most fun. 
  //       Humorously, this was written before I understood basic javascript modules, so all the code is in 
  //       a single 'index.html' file. It's massive! Also there are several notable bugs that make me think 
  //       back on the early coding days with fondness lol.
  //     </>,
  //     <>
  //       Anyways, maybe one day I'll go back and refactor it for fun. 
  //       Until then, you can play it <a target="_blank" href="https://lukeirvine.github.io/maze-with-enemies/">here</a>! 
  //       You'll need to wait a little bit for everything to load, and if you want sound, make sure to click 
  //       the sound button *before* you choose a level. It will be chaos if you click it after.
  //     </>
  //   ]
  // }
]