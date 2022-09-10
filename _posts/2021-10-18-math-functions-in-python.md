---
layout: post
excerpt: Blog
title: 'Math Functions in Python'
description: 'Discover how to work with math functions in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, math functions, functions, math, function, post'
date: 2021-10-18
categories: [Python]
---

In this post, you will learn how to work with math functions so that you can use that same knowledge and thus evolve.

`sin(variable)` | Calculate the sine
`cos(variable)` | Calculate the cosine
`tan(variable)` | Calculate the tangent
`floor(variable)` | Remove decimal value from given number
`ceil(variable)` | Round the given number to the next
`abs(variable)` | Returns the absolute value of the given number
`fsum(variable)` | Sum all numbers within a list (for example)
`pow(variableA, variableB)` | Multiplies its initial value multiple times (depending on the number of times)

```python
from math import *

numbers = [10, 20, 30, 40, 50]

print('Result of the sin() function:', sin(10.5)) # Result of the sin() function: -0.87969575997167
print('Result of the cos() function:', cos(10.5)) # Result of the cos() function: -0.4755369279959925
print('Result of the tan() function:', tan(10.5)) # Result of the tan() function: 1.8498999934219273
print('Result of the floor() function:', floor(10.5)) # Result of the floor() function: 10
print('Result of the ceil() function:', ceil(10.5)) # Result of the ceil() function: 11
print('Result of the abs() function:', abs(-10.5)) # Result of the abs() function: 10.5
print('Result of the fsum() function:', fsum(numbers)) # Result of the fsum() function: 150.0
print('Result of the pow() function:', pow(2, 5)) # Result of the pow() function: 32.0
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yA_QteaN0vs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/yA_QteaN0vs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/funcoes-matematicas-em-python/){:target="\_blank"}.

### _Happy coding!_
