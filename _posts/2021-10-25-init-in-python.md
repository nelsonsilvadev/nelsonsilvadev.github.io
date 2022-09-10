---
layout: post
excerpt: Blog
title: 'init in Python'
description: 'Discover how to work with init in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, init, constructors, construtor, post'
date: 2021-10-25
categories: [Python]
---

In this post, you will learn how to work with init so that you can use that same knowledge and thus evolve.

- init is basically a constructor and its function is to initialize everything that is necessary when creating a certain object.

```python
class Person:
  def __init__(self, firstName, lastName, age):
    self.firstName = firstName
    self.lastName = lastName
    self.age = age

  def information(self):
    print('Name:', self.firstName, self.lastName)
    print('Age:', self.age)

  def checkEntrance(self):
    if self.age >= 18:
      print('This person can enter the place because he is of legal age.')
    else:
      print('This person cannot enter the site because he is a minor.')

pessoa1 = Person('Nelson', 'Silva', 25)
pessoa2 = Person('Larissa', 'Fernandes', 17)

pessoa1.information()
pessoa1.checkEntrance()

'''
  Name: Nelson Silva
  Age: 25
  This person can enter the place because he is of legal age.
'''

pessoa2.information()
pessoa2.checkEntrance()

'''
  Name: Larissa Fernandes
  Age: 17
  This person cannot enter the site because he is a minor.
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/6a0ZhURjP6s" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/6a0ZhURjP6s){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/init-em-python/){:target="\_blank"}.

### _Happy coding!_
