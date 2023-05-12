# platform-game-tommy-world

This is my first go at creating a "proper" game and will be using this the readme file of my repository to document my journey, and keep a record of the challenges I faced and hopefully my successes. I am a junior developer who completed a full stack boot camp in May 2022, and at the time of writing I'm working as a teaching assistant for said boot camp helping the next wave of new developers navigate their way through the world of tech, while seeking a full time developer position.

My plan for the game is it will be a side scrolling shooter, where the character is controlled using WASD and the mouse pointer is used to control aiming. I already forsee a multitude of technical challenges to overcome and anticipate there will be a number of challenges I'm not expecting.

The tech I am planning to use is React because I feel the component structure lends itself well to a project like this. There is going to be a lot of data flying around as well so I will be bringing in Redux to handle the state management.

Please feel free to fork this repo or send PRs, there is a lot of work here and I am totally up for collaborators to get involved, and people of The Jump - cohort 9 in particular.

Thanks for taking an interest in my work

Jon Pitans

<https://jon.pitans.co.uk>

feel free to network with me on LinkedIn

<https://www.linkedin.com/in/jon-pitans/>

8/5/2023 - First commit

Set up the project. Set up a game window and a simple block sprite which moves around the screen with WASD event listeners. Currently more than about 2 key presses per second crashes the browser, so obviously doing something very wrong thus far.

8/5/23 - improved key control

Made some changes to the algorithm that controls the sprite, working better and far more stable. I placed my event listeners inside of a use effect block to avoid data leaks, realised the instability was being caused by the event listeners reinitialising every time the DOM updated, ie all the time the sprite was in motion, so fixed by passing an empty array as second argument to use effect so it only ran once. Next thing is to implement Redux before getting in any deeper.

Also need to add in explicit behaviours for multiple keys pressed at once.

10/5/23 - added jump function and redux boilerplate

Added in boilerplate for redux, but still need to convert my existing props to redux. Added jump function using SUVAT equations and playing with the constants - will update the fucntion to make it easier to tweak going forward. Set explicit variables for jumpForce and gravity.

12/5/23 - more redux boilerplate

Adding the last of the Redux boilerplate to my React platform game project. All working apart from I can't get combineReducers to work, I think I'm having an issue with the keys.

12/5/23 - redux working, WASD mapped

Redux working properly now, figured out the issue with combineReducers and implemented. Created a reducer to handle WASD key presses and manage their state held/not held in the store.
