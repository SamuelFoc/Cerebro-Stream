## Naive Bayes

This algorithm is based on Bayes theorem which can be seen below.

$$ P(A|B) = \frac{P(B|A)P(A)}{P(B)}, $$

where

- $P(A|B)$ is a conditional probability. The probability of event $A$ occurring given that $B$ is true. It is also called the posterior probability of $A$ given $B$.
- $P(A), P(B)$ are the probabilities of observing $A$ and $B$ respectively without any given conditions. They are known as the prior probability and marginal probability.

`Look at the video reference to have stronger understanding of Bayes theorem` [[Video](https://www.youtube.com/watch?v=HZGCoVF3YvM)].

<br>

### Example

Imagine we have two coins. Each one has a $50$% chance that we'll get `Head` and $50$% chance that we'll get `Tail` after flipping the coin.<br>
Let's flip the coins and see what are the possible outcomes, or what would be the sample space $\mathbb{S}$.

<div style="display: flex; justify-content: center; margin: 40px 0;">
<img src="/articles/bayes1.png" alt="Flower" style="width:500px;"/></div>

$$ \mathbb{S} = \{ HH, HT, TH, TT \} $$

Let $A$ be the event that second coin is `Head` and $B$ be the event that first coin is `Tail`.

$$ P(A) = 2/4 = 0.5 $$
$$ P(B) = 2/4 = 0.5 $$

What is the probability that after first coin being `Tail` the second coin will be `Head`? In this case it is simply 50/50 beacuse after flipping the second coin we can get neither the `Tail` or `Head` and nothing else.

$$ P(B|A) = 1/2 = 0.5 $$

Using Baye's theorem we get

$$ P(A|B) = \frac{P(B|A)P(A)}{P(B)} = \frac{0.5 \cdot 0.5}{0.5} = 0.5 $$

Let's try to use this formula in practice. <br>

<br>

If $X = (x_1, x_2, \dots, x_n)$ is a features vector, so that all its components are mutualy independent, and $y$ is some state that we cares about, we can rewrite Baye's theorem or `Posterior probability` of event `y` given by state `X` in the folowing form.

$$ P(y|X) = \frac{P(X|y)P(y)}{P(X)} = \frac{P(x_1|y)\cdot P(x_2|y) \cdot \dots \cdot P(y)}{P(X)} $$

Where $P(y)$ is the prior probability or frequency of particular class(event), and $P(x_i|y)$ is the class conditional probability.

$$ P(x_i|y) = \frac{1}{\sqrt{2\pi\sigma^2_y}}\cdot\exp\left( -\frac{(x_i - \mu_y)^2}{2\sigma_y^2} \right) => \text{Gaussian distribution}$$

Using all of the above we can simply calculate probability of the output `y` under the given conditions `X`.
