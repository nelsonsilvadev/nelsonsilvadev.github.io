---
layout: post
excerpt: Blog
title: 'Flexible Arguments in Python'
description: 'Discover how to work with flexible arguments in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, flexible arguments, flexible, arguments, argument, post'
date: 2021-10-11
categories: [Python]
---

In this post, you will learn how to work with flexible arguments so that you can use that same knowledge and thus evolve.

- flexible arguments are intended to make it unnecessary to define all the arguments of a function when they are undefined;
- in short, flexible arguments do not have a defined length;
- it is necessary to put the symbol `*` before a flexible argument is defined in the function.

```python
def printArguments(*arguments):
  for argument in arguments:
    print('Argument:', argument)

printArguments('I\'m a string.', 1, 1.5, True, ['ABC', 'DEF', 'GHI'])

'''
  Argument: I'm a string.
  Argument: 1
  Argument: 1.5
  Argument: True
  Argument: ['ABC', 'DEF', 'GHI']
'''
```

Don't forget to [watch the vídeo](https://youtu.be/LhcLdqNjvpc){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211011/argumentos-flexiveis-em-python/){:target="\_blank"}.

### _Happy coding!_
