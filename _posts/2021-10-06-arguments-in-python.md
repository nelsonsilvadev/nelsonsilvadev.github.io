---
layout: post
excerpt: Blog
title: 'Arguments in Python'
description: 'Discover how to work with arguments in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, arguments, argument, post'
date: 2021-10-06
categories: [Python]
---

In this post, you will learn how to work with arguments so that you can use that same knowledge and thus evolve.

- arguments are like variables that receive their values (their content) when the function is called;
- these same arguments are considered to be local variables because they only exist inside the function;
- local variables are discarded when returning to the calling point.

```python
def personalData(name, age, nationality):
  print('Name:', name)
  print('Age:', age)
  print('Nationality:', nationality)

personalData('Nelson Silva', 25, 'Portuguese')
personalData('Larissa Fernandes', 37, 'Brazilian')

'''
  Name: Nelson Silva
  Age: 25
  Nationality: Portuguese
  Name: Larissa Fernandes
  Age: 37
  Nationality: Brazilian
'''
```

Don't forget to [watch the vídeo](https://youtu.be/rYJermgsgKk){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211006/argumentos-em-python/){:target="\_blank"}.

### _Happy coding!_
