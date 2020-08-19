# FIIMaterials Frontend

## Introduction

The purpose of this project is to help students from `Alexandru Ioan Cuza University - Faculty of Computer Science` find materials easily such as courses, seminars, and exams.
The materials are stunt mainly by me, but I was helped so `thanks to all students who helped me with these materials`. Keep an eye on the site when the section "about" appears.
I decided to rebuild the whole project with React and Django instead of Angular and Firebase and change the UI from Material Design to Bootstrap. I also changed the site language to english because It felt weird
naming things in romanian. The project is "open source" now because... why not. Who's curious how an app like this works, can see the code easily. For now, `this app is not opened for contributions` mainly because 
I want to learn how to make FullStack from scratch, and I put this project on my cv as a personal project.

The idea of this project was born when two students posted a link with their own version of materials on the facebook page. I was in my dormitory room, and I started to think "I could build a website.". I just learned the basics of Angular, and it was the perfect time to make something practical with it. And I start coding. In a week I published the first version. Later, I hadn't so much traffic on the website, and I was also familiar with Android... AN ANDROID APP. I thought that users could remember easily this project if they had an app on their phone. And I started coding again. This time it took me two weeks or so, In that weird period the C0VID. I was very proud when I gained ~60 active installs. It is nice to build something that other people use.

## Future and beyond 
Now it's a more complex app. As you can see the users can create an account, rate the classes and leave a feedback. I want to make this app as good as possible, and complete these materials with all years. The mobile app will be rebuild with React Native for IOS phones.  

## About The App
The frontend it was originally made with Angular and Material Design as a UI library. In the summer holiday of 2020 I rebuild the app picking React and Bootstrap because React it was the most popular frontend framework at that time and the site was pretty hard to make with material. A much wiser choice. The app send requests to fetch all the data(cuz I'm not crazy to hardcode all in there) to a backend.

I am trying to keep the code and logic as clean to easy look into the (messy) code. That's why, having a spaghetti code, I decided to split the logic and refactor(ahh, my 'favorite' word) adding a pattern to the app. Below you can see how it looks like.

<img alt="app design" src="https://i.postimg.cc/Pq7hF4RC/frontend-pattern-01.jpg" height="400">

Messy? Probably. It could've been worse? Definitely.

The app it's deployed on Firebase, which I strongly recommend, and it's available to this url : [Site Page](https://fiimaterials.valentinstamate.com)

### The project has
 - [X] A much better design (hopefully...)
 - [X] Materials
 - [X] Resources
 - [X] Authentication
 - [X] Feedback
 - [X] Class rating
 - [X] Useful links
 - [ ] About
 - [X] Contact
 - [ ] Recover password
 - [X] Verify Email
 - [ ] Change user info
