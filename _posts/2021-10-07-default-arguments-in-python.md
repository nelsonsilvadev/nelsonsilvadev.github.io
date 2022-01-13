---
layout: post
excerpt: Blog
title: 'Default Arguments in Python'
description: 'Discover how to work with default arguments in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, default arguments, default, arguments, argument, post'
date: 2021-10-07
categories: [Python]
---

In this post, you will learn how to work with default arguments so that you can use that same knowledge and thus evolve.

- default arguments are intended to use their default value when the user does not send any value for that argument.

```python
def doorState(state = True):
  if state:
    print('The door is open.')
  else:
    print('The door is closed.')

doorState(False) # The door is closed.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/dWk0XVIto3w" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/dWk0XVIto3w){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211007/argumentos-padrao-em-python/){:target="\_blank"}.

### _Happy coding!_
