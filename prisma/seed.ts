import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const chrsolr = await prisma.users.upsert({
    where: { email: "chr.solr@gmail.com" },
    update: {},
    create: {
      email: "chr.solr@gmail.com",
      username: "chrsolr",
      profileImageUrl:
        "https://media.licdn.com/dms/image/C5603AQGKKZ_eir17GA/profile-displayphoto-shrink_200_200/0/1516804819724?e=1684972800&v=beta&t=w8_wfA_H0axcRezYivEEiQNiZd6L7sbzry8axPj6E4A",
      blogPosts: {
        create: [
          {
            title: "Binary Clock",
            summary: "Creating a Binary Clock Component in ReacJS",
            coverImageUrl: "https://i.imgur.com/fP5ELin.png",
            slug: "binary-clock",
            markdown:
              "![](https://i.imgur.com/fP5ELin.png)\n\n# Binary Clock Component in ReacJS",
            active: false,
          },
          {
            title: "CoderCamps Bootcamp as a Student",
            summary:
              "I know plenty of people are looking into all these different programming Bootcamps. Since I attended one, I would like to share my opinion. I will start by talking about myself, and my programming experience prior to the camp. In addition I will share information about the structure of the camp during my time there.",
            coverImageUrl:
              "https://media.licdn.com/dms/image/C4D12AQGVVggsU6DJmQ/article-cover_image-shrink_423_752/0/1520153484632?e=1684972800&v=beta&t=nUDHhz9VY50Mr5UNCu26xSNSy7k7Y1AoLazNlPaW3G8",
            slug: "codercamps-bootcamp-as-a-student",
            markdown:
              "![](https://media.licdn.com/dms/image/C4D12AQGVVggsU6DJmQ/article-cover_image-shrink_423_752/0/1520153484632?e=1684972800&v=beta&t=nUDHhz9VY50Mr5UNCu26xSNSy7k7Y1AoLazNlPaW3G8)\n# CoderCamps Bootcamp as a Student\n\nI know plenty of people are looking into all these different programming Bootcamps. Since I attended one, I would like to share my opinion. I will start by talking about myself, and my programming experience prior to the camp. In addition I will share information about the structure of the camp during my time there.\n\n### About me\nAt age 29 I decided to get my G.E.D and go to college. I always loved computers, so choosing Information Technology was a no brainer. While working towards my degree I was introduced to an introductory C++ class. After that class all I wanted to do was programming. Since I also loved messing around with cellphones, I decided to learn more about mobile development. During the time I had a Windows Phone 7 cellphone. I started teaching myself C# and created my first application, a simple calculator.\n\nShortly after finishing my associate degree in Information Technology; I relocated to Rhode Island to pursue a Bachelors in Computer Science. The programming language taught in Rhode Island College was JAVA. Because of this and my love for mobile development, I started learning about Android Development. While at Rhode Island College I took a Software Engineer class where I built an app to find restaurants locally. I also designed an Xbox One Achievement tracker called  [Xchievements](https://www.youtube.com/watch?v=Sb2X2VhuPgY).\n\nBefore I could finish my degree I relocated once again to Houston, TX. My intentions were to find a job in the programming field. One day I saw a commercial about a programming Bootcamp advertising “Earn an average of $70k after graduation.” My first thought was “That’s BS”. But, I thought about it and decided to visit the school to get more information. My first impression was not great. I got an “it’s all bout business” vibe. After a week and much thinking and debating I decided to go.\n\n### Bootcamp time!\nSince I already had a programming background, I knew camp was not going to be as hard for me as my fellow classmates. Yes, I didn’t know anything about HTML, CSS3, JavaScript or anything that had to do with the web. But after being around and hearing so much programming you start picking up stuff quicker. I also had a month to prepare before the start of camp.\n\nAt the time, the camp was divided into three phases. Throughout all the different phases we built small applications imitating Facebook, Twitter and full CRUD (Create, Read, Update, Delete) applications. Below is a breakdown of the structure while I attended camp:\n\n#### Week 1-3\n-   HTML5\n-   CSS3\n-   JavaScript\n-   AngularJS\n\n#### Week 4-6\n-   C#\n-   ASP.NET MVC\n-   SQL Server\n-   Entity Framework\n-   Repository Pattern\n-   Web API\n-   Authentication\n\n#### Week 7-9\n-   Small group project\n-   Project inherited from previous group\n-   Individual project\n\n### Phase 1\n\nAt first, I was nervous to meet people as passionate as me about programming; as I was never surrounded by that type of environment while in college. Right away I knew everyone was there to learn. Of course, there were some personality issues between fellow students, including me; you just cannot have a bunch of people in a stressful environment without having some issues. The instructor was great. He could teach a caveman how to program, seriously. It was like he knew every form of making people learn.\n\nThe month I had to prepare really helped with HTML and CSS and the transition from an OOP language to JavaScript was seamless. In the other hand, I struggled getting my head around AngularJS. I was like “What the F*** is? Dependency Injection, Directives, Controllers and Services.” It was not a How? Question, but a Why? Question. So, I started to do my work as fast as I could and learned more about AngularJS. By the end of the first phase we got to know each other better, and everyone was getting on the same page.\n\n![](https://media.licdn.com/dms/image/C4D12AQEswgMFBdKamQ/article-inline_image-shrink_1500_2232/0/1520066214987?e=1684972800&v=beta&t=3djMkcY5F8jW39BgcZZ8hbE6yJwHJVAbU2IinxOGcLc)\n\n![](https://media.licdn.com/dms/image/C4D12AQEufCZ0uNH41A/article-inline_image-shrink_1500_2232/0/1520237234918?e=1684972800&v=beta&t=mo5y-t6YQtt-RL9QVEtbywantq5rPrR1TuaQwjPeTLA)\n\n### Phase 2\n\nThe second phase of the program was a little different. Thanks to my previous knowledge in OOP, the first week went smoothly. I took this opportunity and learned more about AngularJS and Twitter Bootstrap. I also helped my classmates understand C# and the OOP fundamentals. As we moved to ASP.NET, the pace picked up and things started getting overwhelming. I understood the classes but I would forget by the next day because we were being introduced to new logics everyday. I used my weekends to review everything we covered during the week.\n\nBy the third week most of the group had bonded. In our free time we played Jenga, went to lunch and solved programming problems together.\n\n![](https://media.licdn.com/dms/image/C4D12AQE57CN6jRM4Qg/article-inline_image-shrink_1500_2232/0/1520195237364?e=1684972800&v=beta&t=DvXIc3exMppjsUQFRV26eS2n9v9v8T6DRtkPOBemLQE)\n\n![](https://media.licdn.com/dms/image/C4D12AQHl0cUSNXi7gw/article-inline_image-shrink_1500_2232/0/1520063087886?e=1684972800&v=beta&t=CGJWeDaLZuyw5fuprqSdY9Lo3ZhqBqsJ_3KBIwnibx0)\n\n### Phase 3\n\nI feel like the third phase was where I learned the most. Not because I learned new skills, but because I got to use all the previous knowledge I learned at camp. During this phase we also got a chance to experience what to expect in the workplace. We needed to log our progress, complete tasks during given time and report all things to the staff, which pretended to be the client.\n\n![](https://media.licdn.com/dms/image/C4D12AQEGwZz6VuoIeQ/article-inline_image-shrink_1500_2232/0/1520040451164?e=1684972800&v=beta&t=PE3tTDYnDWdRoCAvtE7JRdmLhHMi0ZiKhEzCWZqFP6I)\n\n#### The Good\n\n-   Meet people with common passions\n-   Learn how others may solve a problem in a different way\n-   Learn plenty of information in a short time (This can be a bit stressful)\n-   Get help from real people and not my best friend stackoverflow.com\n-   Great environment\n\n#### The Bad\n\n-   This type of programming Bootcamp is not for everyone. It is pretty hard to get a grasp on programming in just 9 weeks with out prior knowledge. However it can be done.\n-   Do not go to Bootcamp for the wrong reasons. Remember that you are paying for this. If you are not willing to absorb everything you are taught, you wont get your moneys worth.\n-   Expanding on my previous bullet. Do not attend camp because you want a job or a great salary. To be a developer is not about knowing the syntax of a programming language. It is about taking a problem and figuring out how to solve it. You might think learning the basics will get you in the door. However if you don’t know how to brake down a problem, translate it to code and solve it efficiently, then you wont last long.\n\n### Overall\n\nCoding Bootcamp is good for people that want to learn programming or expand their knowledge, but only if they are incredibly passionate about it. Even though the boot camp staff wants you to succeed, it is all about your willingness to learn.\n\nThank you for reading.",
            active: true,
          },
          {
            title: "Animate Bootstrap 3 Menu Icon To (X)",
            summary:
              "In this post we are going to animate the Bootstrap Navigation Icon that is displayed in mobile devices. We'll be animating the transition from the Hamburger Icon (☰) to a Close Icon (×). This effect is used in many Webpages and Mobile Devices such as Android Devices. Let's get started!!",
            coverImageUrl: "https://i.imgur.com/wuKtuYc.jpg",
            slug: "animate-bootstrap-menu-icon-to-x",
            markdown:
              '![](https://i.imgur.com/wuKtuYc.jpg)\n\n# Animate Bootstrap Menu Icon To (X)\n\nIn this post we are going to animate the Bootstrap Navigation Icon that is displayed in mobile devices. We\'ll be animating the transition from the Hamburger Icon (&#9776;) to a Close Icon (&#215;). This effect is used in many Webpages and Mobile Devices such as Android Devices. Let\'s get started!!!\n\n### Pre-requisite\n1. Have Bootstrap already added to your page.\n2. Have a navbar component already added to your page. \n\n### The Trick\nWhenever the user clicks on the menu button, Bootstrap will remove the "collapsed" class in our menu button. Our trick consists of animating to a close icon (&#215;) whenever the "collapsed" class is not present in our menu button and to a Hamburger icon (&#9776;) when it is.\n\n### Close icon - (&#215;)\nFirst we\'ll be creating the Close Icon (&#215;). We need to target all of our menu icon bars by using the ".navbar-toggle span.icon-bar" in our CSS and set the animation transition speed to 300ms or whatever value works for you.\n```css\n.navbar-toggle span.icon-bar {\n\t-webkit-transition: all 300ms;\n\ttransition: all 300ms;\n}\n```\nNext we\'ll be targeting each bar individually. We are going to start with the first bar icon. First, we need to center it horizontally and then rotate it 45deg. We will accomplish this by using the translate and rotate values of the transform property.\n```css\n.navbar-toggle span.icon-bar:nth-child(2) {\n\t-webkit-transform: translateY(300%) rotate(45deg);\n\ttransform: translateY(300%) rotate(45deg);\n}\n```\n**NOTE:** *We are targeting the "nth-child(2)" because Bootstrap contains a screen reading span tag within our menu button as the first span. So the first icon bar is actually the second span.*\n\nNow, for the middle bar icon the effect we are aiming for is to fade out the bar icon as the transition is happening. To accomplish this effect, we are going to target the middle bar and set the opacity property to the value of 0.\n```css\n.navbar-toggle span.icon-bar:nth-child(3) {\n\topacity: 0;\n}\n```\nThe last bar icon is similar to the first bar icon but with negative values.\n```css\n.navbar-toggle span.icon-bar:nth-child(4) {\n\t-webkit-transform: translateY(-300%) rotate(-45deg);\n\ttransform: translateY(-300%) rotate(-45deg);\n}\n```\nNow we should be able to see the Close Icon in our navigation bar.\n\n### Hamburger icon - (&#9776;)\nThe Hamburger icon is very simple. All we have to do is to reset all the values we used to create the Close Icon. If you remember from the "The Trick" section, we\'ll do this whenever the "collapsed" class is present in our menu button.\n\nFor the first and last bar icon, we\'ll be resetting the translate and rotate values to 0. \n```css\n.navbar-toggle.collapsed span.icon-bar:nth-child(2) {\n\t-webkit-transform: translateY(0) rotate(0);\n}\n\n.navbar-toggle.collapsed span.icon-bar:nth-child(4) {\n\t-webkit-transform: translateY(0) rotate(0);\n}\n```\nAnd for the middle bar icon, we\'ll be resetting the opacity value back to 1.\n```css\n.navbar-toggle.collapsed span.icon-bar:nth-child(3) {\n\topacity: 1;\n}\n```\nNow we should be able to see the effect. The 3 bars of our navigation menu should turn into an (X) whenever the menu is open and turn back to the 3 bars whenever the menu is close.\n\n### Here is a Codepen version\n<iframe height="300" style="width: 100%;" scrolling="no" title="Bootstrap Menu Icon to &quot;X&quot;" src="https://codepen.io/chrsolr/embed/OXYpGG?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">\n  See the Pen <a href="https://codepen.io/chrsolr/pen/OXYpGG">\n  Bootstrap Menu Icon to &quot;X&quot;</a> by Christian Soler (<a href="https://codepen.io/chrsolr">@chrsolr</a>)\n  on <a href="https://codepen.io">CodePen</a>.\n</iframe>\n\nThank you for reading!!!',
            active: true,
          },
          {
            title: "Show/Hide Bootstrap Navbar on Scroll",
            summary:
              "Today I’ll show you an user experience trick for your website. I’ll teach you how to show/hide a Twitter Bootstrap 3 Navigation Bar depending in which direction the user scrolls. E.g. If the user scrolls down the navigation bar will hide giving the user more screen real state. If the user scrolls up the navigation bar will show so the user can use the navigation menu. Let’s get started!!!",
            coverImageUrl:
              "https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png",
            slug: "show-hide-bootstrap-navbar-on-scroll",
            markdown:
              "![](https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png)\n\n# Show/Hide Bootstrap Navbar on Scroll\n\nToday I'll show you an user experience trick for your website. I'll teach you how to show/hide a [Twitter Bootstrap 3](http://getbootstrap.com/) Navigation Bar depending in which direction the user scrolls. E.g. If the user scrolls down the navigation bar will hide giving the user more screen real state. If the user scrolls up the navigation bar will show so the user can use the navigation menu. Let's get started!!!\n\n### Pre-requisite\n1. Have [Bootstrap](http://getbootstrap.com/) already added to your page.\n2. Have a navbar component already added to your page.\n3. Have basic knowledge of [Typescript](https://www.typescriptlang.org/).\n\n### Html (Pug/Jade)\nHere is a basic [Bootstrap](http://getbootstrap.com/) Navigation Bar and some images just to have content in the page. This way we can view the effect taking place.\n```pug\nnav.navbar.navbar-default.navbar-fixed-top\n    .container\n        .navbar-header\n            button(type=\"button\", class=\"navbar-toggle collapsed\", data-toggle=\"collapse\", data-target=\"#navbar-top\", aria-expanded=\"false\")\n                span.sr-only Toggle navigation\n                span.icon-bar\n                span.icon-bar\n                span.icon-bar\n            a.navbar-brand(href=\"/\") GTA 5\n\n        .collapse.navbar-collapse(id=\"navbar-top\")\n            ul.nav.navbar-nav.navbar-right\n                li: a(href=\"http://keypunchers.io/\", data-toggle=\"collapse\", data-target=\".navbar-collapse.in\") KeyPunchers.io\n                li: a(href=\"https://github.com/iamrelos\", data-toggle=\"collapse\", data-target=\".navbar-collapse.in\") Github\n.row\n  .col-xs-12\n    img.img-reponsive(width=\"100%\", src=\"https://techfaqs.net/wp-content/uploads/2016/06/9d35e9cd02.jpg\")\n    \n.row\n  .col-xs-6\n    img.img-reponsive(width=\"100%\", src=\"https://howfix.net/wp-content/uploads/2016/12/GTA-Online-Bikers.jpg\")\n  .col-xs-6\n    img.img-reponsive(width=\"100%\", src=\"https://i.ytimg.com/vi/jl2xNWeujZs/maxresdefault.jpg\")\n    \n.row\n  .col-xs-12\n    img.img-reponsive(width=\"100%\", src=\"http://assets2.ignimgs.com/2013/09/12/gta-v-heistsjpg-e94705_1280w.jpg\")\n```\n\n### CSS (SASS)\nIn this approach the [CSS](https://www.w3schools.com/css/css_intro.asp) have nothing to do we the effect. It's just to change the navigation bar color and to remove some paddings.\n```scss\nbody {\n  padding-top: 50px;\n}\n\n.row {\n  margin: 0;\n  padding: 0;\n\n  [class^=\"col-\"] {\n    padding: 0;\n  }\n}\n\n.navbar-default {\n  border: 0;\n  background: rgba(73, 155, 234, 1);\n  background: -moz-linear-gradient(\n    left,\n    rgba(73, 155, 234, 1) 0%,\n    rgba(32, 124, 229, 1) 100%\n  );\n  background: -webkit-gradient(\n    left top,\n    right top,\n    color-stop(0%, rgba(73, 155, 234, 1)),\n    color-stop(100%, rgba(32, 124, 229, 1))\n  );\n  background: -webkit-linear-gradient(\n    left,\n    rgba(73, 155, 234, 1) 0%,\n    rgba(32, 124, 229, 1) 100%\n  );\n  background: -o-linear-gradient(\n    left,\n    rgba(73, 155, 234, 1) 0%,\n    rgba(32, 124, 229, 1) 100%\n  );\n  background: -ms-linear-gradient(\n    left,\n    rgba(73, 155, 234, 1) 0%,\n    rgba(32, 124, 229, 1) 100%\n  );\n  background: linear-gradient(\n    to right,\n    rgba(73, 155, 234, 1) 0%,\n    rgba(32, 124, 229, 1) 100%\n  );\n  filter: progid:DXImageTransform.Microsoft.gradient(\n      startColorstr='#499bea',\n      endColorstr='#207ce5',\n      GradientType=1\n    );\n}\n\n.nav.navbar-nav.navbar-right li a, .navbar-default .navbar-brand {\n  color: white;\n}\n```\n\n### JavaScript (TypeScript)\nWe are going to spend most of our time here. We are going to start by creating an empty class. The class constructor will take one optional parameter of type string; The tag that wraps all our navigation elements. This parameter will default to the [nav](https://www.w3schools.com/tags/tag_nav.asp) element. \n```typescript\n'use strict';\n\nclass NavbarUtils {\n\tconstructor(public tag?: string = 'nav') {}\n}\n```\n\nNext let's create a function and call it **initHideOnScroll** with the return type of void.\n```typescript\n'use strict';\n\nclass NavbarUtils {\n\tconstructor(public tag?: string = 'nav') {}\n\t\n\tinitHideOnScroll(): void {\n\t}\n}\n```\n\nInside the **initHideOnScroll** function is where all the magic will happen. Inside the function we are going to need a couple of variables. Here are their with a small description for their purpose:\n```typescript\n'use strict';\n\nclass NavbarUtils {\n\tconstructor(public tag?: string = 'nav') {}\n\t\n\tinitHideOnScroll(): void {\n\t\t// Store ref of this.\n\t\tconst _this = this;\n\t\t// How many pixel should the user scroll before the effect takes place.\n\t\tconst delta = 5;\n\t\t// How fast the animation should be in milliseconds.\n\t\tconst speed = 250;\n\t\t// Our navigation element wrapper\n\t\tconst $nav = $(`${_this.tag}`);\n\t\t// Last top position of the page. \n\t\tlet lastPosition = 0;\n\t\t// Flag to check if the user has scrolled.\n\t\tlet isScrolled = false;\n\t}\n}\n```\nNow we need to create an inner function that is going to run every time the user has scrolled. We are going to call it **onHasScrolled**.\n```typescript\ninitHideOnScroll(): void {\n\t// Store ref of this.\n\tconst _this = this;\n\t// How many pixel should the use scroll before the effect takes place.\n\tconst delta = 5;\n\t// How fast the animation should be in milliseconds.\n\tconst speed = 250;\n\t// Our navigation element wrapper\n\tconst $nav = $(`${_this.tag}`);\n\t// Last top position of the page. \n\tlet lastPosition = 0;\n\t// Flag to check if the user has scrolled.\n\tlet isScrolled = false;\n\n\t// Function that gets called when user has scrolled.\n\tfunction onHasScrolled() {\n\t\n\t}\n}\n```\n\nInside this function is where all the logic is going to be. First we need to get the current top position of the page. We do this by calling the Jquery **scrollTop** function on the window element.\n```typescript\nfunction onHasScrolled() {\n\tconst top = $(window).scrollTop();\n}\n```\n\nNow we need to calculate if the user has scrolled pass our minimum pixels. If the user has not pass our minimum pixels, we will do nothing.\n```typescript\nfunction onHasScrolled() {\n\tconst top = $(window).scrollTop();\n\n\tif (Math.abs(lastPosition - top) <= delta)\n        return;\n}\n```\n\nThe next step is where we will decide if we should show or hide the navigation bar. To hide the navigation bar the user must have scrolled pass the last position (in other words scrolled down) and the navigation bar height. After the user have satisfied those conditions, we are going to set the navigation bar CSS top property to the navigation bar height plus 10 extra pixel.  We are going to use Jquery **animate** function to set the CSS property and add the animation.\n```typescript\nfunction onHasScrolled() {\n\tconst top = $(window).scrollTop();\n\t\n\tif (Math.abs(lastPosition - top) <= delta)\n\t  return;\n\t\n\tif ((top > lastPosition) && (top > $nav.outerHeight())) {\n\t  $nav.animate({\n\t    top: `-${Number($nav.outerHeight() + 10)}px`\n\t  }, speed); \n\t}\n}\n```\n\nNow let's handle the case where the user scrolls up and we need to show the navigation bar.  To calculate this, we need to check if the user current position added to the windows height is less than the document height. If it is, we are going to set the navigation bar CSS top property to **0**. Lastly, we are going to set the **lastPosition** variable to the **top** variable.\n```typescript\nfunction onHasScrolled() {\n\tconst top = $(window).scrollTop();\n\t\n\tif (Math.abs(lastPosition - top) <= delta)\n\t  return;\n\t\n\tif ((top > lastPosition) && (top > $nav.outerHeight())) {\n\t  $nav.animate({\n\t    top: `-${Number($nav.outerHeight() + 10)}px`\n\t  }, speed);\n\t  \n\t} else {\n\t  if (top + $(window).height() < $(document).height()) {\n\t    $nav.animate({\n\t      top: '0px'\n\t    }, speed);\n\t  }\n\t}\n\t\n\tlastPosition = top;\n}\n```\n\nAt this point nothing should be happening. We still need to do two more thing. First,  we need to set our **isScrolled** flag to true if the user scrolls in any direction. Second, we need to check if the user has scroll every X amount of time and run our **onHasScrolled** function if the user has scrolled.\n```typescript\nclass NavbarUtils {\n  constructor(public tag: string = 'nav') {}\n  \n  initHideOnScroll(): void {\n    const _this = this;\n    const delta = 5;\n    const speed = 250;\n    const $nav = $(`${_this.tag}`);\n    let lastPosition = 0;\n    let isScrolled = false;\n    \n    function onHasScrolled() {\n\t\t\t...\n    }\n    \n    $(window).scroll(() => { isScrolled = true; });\n\n    setInterval(() => {\n      if (isScrolled) {\n        onHasScrolled();\n        isScrolled = false;\n      }\n    }, speed);\n  }\n}\n```\n\nNow all we need to do is to instantiate out class and call our **initHideOnScroll** function.\n```typescript\nnew NavbarUtils().initHideOnScroll();\n```\nHere is how our typescript should look like:\n```typescript\n'use strict';\n\nclass NavbarUtils {\n  constructor(public tag: string = 'nav') {}\n  \n  initHideOnScroll(): void {\n    const _this = this;\n    const delta = 5;\n    const speed = 250;\n    const $nav = $(`${_this.tag}`);\n    let lastPosition = 0;\n    let isScrolled = false;\n    \n    function onHasScrolled() {\n      const top = $(window).scrollTop();\n\n      if (Math.abs(lastPosition - top) <= delta)\n        return;\n\n      if ((top > lastPosition) && (top > $nav.outerHeight())) {\n        $nav.animate({\n          top: `-${Number($nav.outerHeight() + 10)}px`\n        }, speed);\n        \n      } else {\n        if (top + $(window).height() < $(document).height()) {\n          $nav.animate({\n            top: '0px'\n          }, speed);\n        }\n      }\n\n      lastPosition = top;\n    }\n    \n    $(window).scroll(() => { isScrolled = true; });\n\n    setInterval(() => {\n      if (isScrolled) {\n        onHasScrolled();\n        isScrolled = false;\n      }\n    }, speed);\n  }\n}\n\nnew NavbarUtils().initHideOnScroll();\n```\n\n### Codepen\n<iframe height='300' scrolling='no' title='Hide Navbar on Scroll' src='//codepen.io/Iamrelos/embed/RWbPBa/?height=300&theme-id=15917&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Iamrelos/pen/RWbPBa/'>Hide Navbar on Scroll</a> by Christian Soler (<a href='https://codepen.io/Iamrelos'>@Iamrelos</a>) on <a href='https://codepen.io'>CodePen</a>.\n</iframe>",
            active: true,
          },
        ],
      },
      socials: {
        create: [
          {
            fontAwesomeIconName: "faGithub",
            url: "https://github.com/chrsolr/",
          },
          {
            fontAwesomeIconName: "faCodepen",
            url: "https://codepen.io/chrsolr",
          },
          {
            fontAwesomeIconName: "faLinkedin",
            url: "https://www.linkedin.com/in/christiansoler/",
          },
          {
            fontAwesomeIconName: "faInstagram",
            url: "https://www.instagram.com/7w3n7y/",
          },
        ],
      },
    },
  });

  console.log({ chrsolr });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
