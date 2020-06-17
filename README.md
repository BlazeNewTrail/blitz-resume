# Blitz Resumé 

This is a static-site Salesforcy resume for Salesforce professionals who want to have some kind of web presence 👩🏽‍💻👨🏼‍💻.  

It is built using [Gridsome](https://gridsome.org) and [Salesforce Lightning Design System](https://www.lightningdesignsystem.com) 🤝

The resume format is highly inspired from the [JSON Resume](https://jsonresume.org) project.

Since it's a static-site, it can be hosted for free on many places. We are using [Vercel](https://vercel.com).

To get started: 
### 1. Create a new folder, change to it and clone the repo

1. `mkdir my-resume`
2. `cd my-resume` 
3. `git clone repo.git`

### 2. Next, install all dependencies (we recommend using yarn)

1. `yarn` or `npm install`

### 3. Run on localhost

1. Type `yarn serve` to start the local server. 

### 4. Modify resume.json

This file contains all the data that is served throughout the pages. Add / modify the data according to your needs.

### 5. Commit your changes

1. Once you are happy with all the changes, stop the localhost and commit your changes (ideally you would be on the master branch). Push them to GitHub. Then click the button below to deploy to Vercel. You can login / connect using GitHub (recommended) and various other ways.

### 6. Add your domain

1. Follow Vercel's documentation on how to point the deployment to your domain 🚀

## Caveats / Hidden Gems 💎

1. The website is available in two flavours. Modern Sidebar or Classic Topbar. The behaviour can be toggled using the boolean in [main.js]() line 74

    `VueC.prototype.$sidebar = true;`

2. SLDS uses Salesforce proprietary fonts. To avoid any problems, we have chosen some other fonts which look almost the same. Font alternatives:
Museo Sans,
Work Sans,
Noto Sans,
Open Sans,
Amble Regular.

3. We also use the awesome [Font Awesome]() library for additional icons. Please look into [main.js]() to see how we use them. Modifying / adding more should not be a problem. Contact us if you face any issues.

Happy coding 🎉🙌

