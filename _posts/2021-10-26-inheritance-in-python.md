---
layout: post
excerpt: Blog
title: 'Inheritance in Python'
description: 'Discover how to work with inheritance in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, inheritance, post'
date: 2021-10-26
categories: [Python]
---

In this post, you will learn how to work with inheritance so that you can use that same knowledge and thus evolve.

- inheritance is a mechanism by which a class (subclass) can extend another class (superclass) to take advantage of its possible variables (attributes) and its behavior (methods).

```python
class Father:
  lastName = 'Silva'

  def favoriteFood(self):
    print('My favorite food is seafood rice.')

class Son(Father):
  firstName = 'Nelson'
  age = 25

  def information(self):
    print('Name:', self.firstName, self.lastName)
    print('Age:', self.age)

person = Son()
person.information()
person.favoriteFood()

'''
  Name: Nelson Silva
  Age: 25
  My favorite food is seafood rice.
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/7cVfMDDAk64" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/7cVfMDDAk64){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211026/heranca-em-python/){:target="\_blank"}.

### _Happy coding!_
