---
layout: post
excerpt: Blog
title: 'Modules in Python'
description: 'Discover how to work with modules in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, modules, module, post'
date: 2021-10-15
categories: [Python]
---

In this post, you will learn how to work with modules so that you can use that same knowledge and thus evolve.

- modules are basically objects with attributes that can be linked through a reference;
- they allow you to group your code, which makes everything easier to understand and use;

`dir(module)` | Returns an ordered list of strings containing the names defined in the module in question

- this same list contains the names of all variables and functions that were defined in that same module.

```python
# import math
# from math import sqrt
from math import *

# print('Module content:', dir(math))
# print('sqrt function:', sqrt(10))
print('pi value:', pi) # pi value: 3.141592653589793
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/HuvfFhMmsbI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/HuvfFhMmsbI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211015/modulos-em-python/){:target="\_blank"}.

### _Happy coding!_
