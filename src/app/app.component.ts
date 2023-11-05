import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { BlogRaw } from './models/blog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  constructor(private blogService: BlogService) {}
  data = [
    {
      title: ' A First Look At State Of Angular Development in 2020',
      author: 'author 1',
      content:
        'Are you planning to implement a project idea using Angular? Or are you just researching to see if you should put your time into it? Then you should take a look over this post and check out what it’s new for 2020. The article is short, easy to follow, and it gives you useful insights into this popular framework.',
      date: '2023-11-06',
    },
    {
      title:
        ' Angular For Beginners Guide: Why Angular? Understanding The Top Benefits',
      author: 'author ',
      content:
        'If you are interested in starting to work with Angular, you should first understand the main benefits of this framework and why you should use it to the detriment of other frameworks. This article covers everything you need to know about this subject. And it should! It is written by the ones who created the framework 🙂 ',
      date: '2023-11-20',
    },
    {
      title: 'Difference Between AngularJs and Angular3',
      author: 'someone 3',
      content:
        'If you are new to Angular, you may be confused as to what Angular and AngularJS are and the differences between them. If this is the case, you should read this article and understand why they have almost the same name, what features make the difference, and which one you should use in your project.',
      date: '2023-11-08',
    },
    {
      title:
        'AngularJS Vs. Angular 2 Vs. Angular 4: Understanding the Differences',
      author: 'unknown',
      content:
        'In February, Angular 9 was released this year, but you may choose to start using the oldest versions of it. This article explains very well what are the differences between those three versions of Angular, by emphasizing the performance and the advantage&disadvantage of each version. Also, at the end of the article, you will find a useful image that summarizes the information for a better understanding.',
      date: '2023-06-06',
    },
    {
      title:
        'Angular vs. Vue.js vs. React.js – which one you should choose in 2020?',
      author: 'author 4',
      content:
        'If you are starting your way in front-end development, you probably know that you can use many front-end technologies. This article may be a good starting point in choosing the one that fits your needs, mainly because these three are the most popular among developers. If you are not a beginner, you should check the article to see if there is a better option than the framework you already use.',
      date: '02/20/2010',
    },
    {
      id: 6,
      title:
        'Angular 9 for Beginners — How to Install Your First App with Angular CLI',
      author: 'about me',
      content:
        'As I said, Angular 9 is already out, and this article explains in great detail how you can install your first app with Angular CLI. The materials from freeCodeCamp are always highly qualitative, so you may want to take a look over this one.',
      date: '2023-07-17',
    },
    {
      title: 'Angular Animations Explained with Examples',
      author: 'about me',
      content:
        'Animations are considered among the most complex parts of the graphic design for web pages, and they are required if you want your design to be eye-catching. If you are an Angular developer, you should take a look over this article where you will learn how to set up animations in Angular and the methods to use. And you will also find animations examples. This article covers everything you need to know about the basic animating with Angular.',
      date: '2023-05-02',
    },
    {
      title: 'Top Free Angular Templates You Need to Have',
      author: 'about me',
      content:
        'Creating your web design from scratch with dedicated designers can be very expensive and time-consuming. This is why using a template can ease your life. Many Angular templates are already available on the market, but this article can help you find the one that fits your needs. It contains a list of 8 amazing Angular templates that you can start using right now because they are free!',
      date: '2023-05-11',
    },
    {
      title: ' Best 10 Angular Material Themes for Spring 2020',
      author: 'about me',
      content:
        'If the previous article did not help you enough, you should take a look over this one. It showcases a collection of 10 awesome Angular templates that are using or are inspired by Google’s Material Design.',
      date: '2023-02-28',
    },
    {
      title: '15 Free & Open-Source Angular Components',
      author: 'Somebody1',
      content:
        'This article can help you in the research process if you are planning your dev project based on Angular. It contains a list of useful, free, and Angular open-source components that can be attached to your project. Also, it can help you find your inspiration.',
      date: '2023-01-23',
    },
  ];

  ngOnInit() {}
}
