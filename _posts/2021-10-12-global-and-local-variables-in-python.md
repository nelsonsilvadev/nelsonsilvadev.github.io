---
layout: post
excerpt: Blog
title: 'Global and Local Variables in Python'
description: 'Discover how to work with global and local variables in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, global variables, local variables, variables, global, local, variable, post'
date: 2021-10-12
categories: [Python]
---

In this post, you will learn how to work with global and local variables so that you can use that same knowledge and thus evolve.

- global variables are all those that are defined outside a function (in the "root" of our code) and have a global scope;
- local variables are all those that are defined inside a function;
- in short, not all variables are accessible from all places in our code.

```python
access = 'Global'

def updateAccess():
  access = 'Local'
  print('Access inside the function:', access)

updateAccess()
print('Access outside the function:', access)

'''
  Access inside the function: Local
  Access outside the function: Global
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/K6-_AwbMk34" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/K6-_AwbMk34){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211012/variaveis-globais-e-locais-em-python/){:target="\_blank"}.

### _Happy coding!_
