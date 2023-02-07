## Linear Regression

#### Machine Learning Algorithms division

- Supervised
- Unsupervised
- Reinforcement

Linear regression belongs to `Supervised` MLA. This category is also divided into two groups.

- Regression
  - Simple linear regression
  - Multiple linear regression
  - Polynomial linear regression
- Classification

#### Simple Linear Regression (SLR)

In statistics, simple linear regression is a linear regression model with a single explanatory variable. That is, it concerns two-dimensional sample points with one independent variable and one dependent variable (conventionally, the x and y coordinates in a Cartesian coordinate system) and finds a linear function (a non-vertical straight line) that, as accurately as possible, predicts the dependent variable values as a function of the independent variable. The adjective simple refers to the fact that the outcome variable is related to a single predictor.

Consider we have a set of ${ n }$ data pairs ${ \{(x_i, y_i): i = 1,\dots, n\} }$. Next suppose that we can simply describe the relation between ${ x_i }$ and ${ y_i }$ by relation

$$ y_i = \beta\cdot x_i + \alpha + \epsilon_i ,\\ $$

where ${ \epsilon_i }$ is the error of SLR model. The goal is to find the best values of ${ \alpha }$ and ${ \beta }$ that the value of ${ \epsilon }$ will be minimized.

$$ \epsilon_i = y_i - \beta\cdot x_i - \alpha $$
