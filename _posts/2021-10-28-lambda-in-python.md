---
layout: post
excerpt: Blog
title: 'Lambda in Python'
description: 'Discover how to work with lambda in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, lambda, post'
date: 2021-10-28
categories: [Python]
---

In this post, you will learn how to work with lambda so that you can use that same knowledge and thus evolve.

- lambda is used in the creation of anonymous functions and these are so called because they are not declared with the term "def";
- in short, lambda's main objective is to simplify certain and certain functions, and these do not use the term "return" but rather an expression.

```python
'''
  def addition(a, b, c):
    return a + b + c
'''

addition = (lambda a, b, c : a + b + c)

print('Addition result:', addition(25, 30, 45)) # Addition result: 100
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/0bSYL5vnh6k" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/0bSYL5vnh6k){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211028/lambda-em-python/){:target="\_blank"}.

### _Happy coding!_
