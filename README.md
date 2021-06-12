# SQL EDITOR VIEW

SQL EDITOR VIEW is an application that allows users to simply execute SQL queries on a sample database or design their own tables and receive instant results. Anyone can use it to run SQL queries directly from their browsers without having to install anything. It comes with several features designed to make the experience as seamless and efficient as possible.

#### See Hosted Version [here](https://sql-editor-view.netlify.app/)
#### Sample table used: [sample.csv](https://github.com/rajat2502/SQL-Editor-View/blob/main/sample.csv)

## Features

- SQL queries may be executed instantaneously in the editor, which includes features such as **syntax highlighting**, **bracket matching**, and **automatic bracket closure**.
- **Download**, **Copy**, **Reset**, , and **Save** the program to localstorage.
- Copy the query result to clipboard.
- Use the features easily by utilising simple **keyboard shortcuts** such as **Ctrl - H** for download.

## Technologies used:

- **Frontend**: VueJS, TailwindCSS (CSS Framework), Codemirror (Editor's Interface)
- **Backend**: [Judge0 API](https://github.com/judge0/judge0)
- **Hosting**: Netlify.com
- **Performance Testing**: PageSpeed Insights, Lighthouse, Dareboost

## Page load time and Optimizations performed:

- Initially the page load of the website on Desktop was about 1s and on mobile phone was about 3.3s.
- Used Lighthouse, PageSpeed Insights and Dareboost to analyze the performance of the application.
- **Optimizations Performed**:
    - **Purging unused CSS**: TailwindCSS comes with a a lot of CSS and styles due to which a good amount of classes always remains unused. Using purging reduced the Gzipped CSS size from **450KB** to just **4KB**.
    - **Font-Display swap**: The project uses custom font, which initally blocked the page loading time for sometime, used the `font-display: swap` property to load the system font initially and once the page is loaded then only make request for the Custom font.
    - Used SVGs inplace of PNGs/JPEGs.
    - Rewritten reusable code and avoided any blocking code.
 - After performing the above optimizations the page load time reduced to a great extent. Now, the load time on Desktop is around **0.7s** and on mobile it is around **2.2s**.

Performance on Desktop             |  Performance on Mobile
:-------------------------:|:-------------------------:
![Performance on Desktop](https://user-images.githubusercontent.com/42200276/121773875-7b5d9780-cb9c-11eb-83b5-9fc1edbb02e1.png)  |  ![Performance on Mobile](https://user-images.githubusercontent.com/42200276/121773917-c5467d80-cb9c-11eb-9379-9b1b6783d82c.png)

- The above image shows the Lighthouse results on the application, the first one is for Desktop while the second is the performance on Mobile phones.



<details>
  <summary><strong>How to setup locally?</strong></summary>
 
  
- Fork and Clone the repo using
```
$ git clone https://github.com/rajat2502/SQL-Editor-View
$ cd SQL-Editor-View
```
- Get a new API key from [https://docs.rapidapi.com/docs/keys](https://docs.rapidapi.com/docs/keys) and replace it with `VUE_APP_RAPID_API_KEY` in `.env.example`. Also replace `VUE_APP_RAPID_API_URL` with the API Url.

- Rename the file `.env.example` to `.env`

- Install node dependencies using
```
$ yarn add
```
- Run Server at localhost using
```
$ yarn serve
```
  
</details>

## Screenshots

![Screenshot from 2021-06-12 15-36-35](https://user-images.githubusercontent.com/42200276/121774042-ac8a9780-cb9d-11eb-9e55-47157e0e0f58.png)

Mobile View 1             |  Mobile View 2
:-------------------------:|:-------------------------:
![Performance on Desktop](https://user-images.githubusercontent.com/42200276/121774045-b3b1a580-cb9d-11eb-8bf3-bf1ebe274853.png)  |  ![Performance on Mobile](https://user-images.githubusercontent.com/42200276/121774105-3b97af80-cb9e-11eb-88ce-a1046a37f087.png)









