---
layout: post
excerpt: Blog
title: 'Classes and Objects in Python'
description: 'Discover how to work with classes and objects in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, classes and objects, classes, objects, class, object, post'
date: 2021-10-22
categories: [Python]
---

In this post, you will learn how to work with classes and objects so that you can use that same knowledge and thus evolve.

- a class represents a set of objects, and defines their behavior through methods and which states it is able to maintain through its attributes;
- an object is an instance of a class and is capable of storing states through its attributes and reacting to messages sent to it.

```python
class Enemy:
   lives = 5

   def attack(self):
     print('I was attacked and lost a live.')
     self.lives -= 1

   def check Life(self):
     if self.lives <= 0:
       print('I\'m dead because I don\'t have any more lives.')
     else:
       print('I\'m still in combat and have', self.lives, 'lives.')

enemy1 = Enemy()
enemy2 = enemy()

enemy1.attack() # I was attacked and lost a live.
enemy1.attack() # I was attacked and lost a live.
enemy1.attack() # I was attacked and lost a live.
enemy1.checkLife() # I'm still in combat and have 2 lives.
enemy2.checkLife() # I'm still in combat and have 5 lives.
```

Don't forget to [watch the video](https://youtu.be/JzHlMtlohNE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211022/classes-e-objetos-em-python/){:target="\_blank"}.

### _Happy coding!_