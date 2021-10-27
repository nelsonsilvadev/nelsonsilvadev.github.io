---
layout: post
excerpt: Blog
title: 'Multiple Inheritance in Python'
description: 'Discover how to work with multiple inheritance in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, multiple inheritance, inheritance, post'
date: 2021-10-27
categories: [Python]
---

In this post, you will learn how to work with multiple inheritance so that you can use that same knowledge and thus evolve.

- inheritance is a mechanism by which a class (subclass) can extend another class (superclass) to take advantage of its possible variables (attributes) and its behavior (methods);
- multiple inheritance makes it possible to inherit from multiple classes.

```python
class Father:
  height = 'Between 180 and 190 centimeters'
  eyeColor = 'Brown'

class Mom:
  def favoriteColor(self):
    print('My favorite color is white.')

class Filho(Father, Mom):
  def information(self):
    print('Name: Nelson Silva')
    print('Age: 25')
    print('Height:', self.height)
    print('Eye color:', self.eyeColor)

pessoa = Filho()
pessoa.information()
pessoa.favoriteColor()

'''
  Name: Nelson Silva
  Age: 25
  Height: Between 180 and 190 centimeters
  Eye color: Brown
  My favorite color is white.
'''
```

Don't forget to [watch the video](https://youtu.be/e4N5AHTSKG0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211027/multipla-heranca-em-python/){:target="\_blank"}.

### _Happy coding!_
