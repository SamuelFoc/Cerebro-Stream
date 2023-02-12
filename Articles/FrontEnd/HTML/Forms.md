## Creating HTML Forms

HTML forms are used to gather information from users. They can be used for a variety of purposes, such as collecting feedback, ordering products, or registering for an account. In this lesson, we will cover the basics of creating HTML forms.

#### Form Structure

A HTML form consists of a series of form elements, such as text fields, checkboxes, and radio buttons. The &lt;form&gt; element defines the form, and the various form elements are placed inside the form. For example:

    <form>
      <label for="name">Name:</label>
      <input type="number" id="name" name="name">
      <br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
      <br><br>
      <input type="submit" value="Submit">
    </form>

<div style="display: flex;justify-content: center;margin: 50px 0px">
    <img src="/Articles/FrontEnd/HTML/form1.png" width="80%" alt="Image vs code"/>
</div>

#### Form Elements

There are several different types of form elements that can be used to gather information from users. Some of the most commonly used form elements include:

- &lt;input type="text"&gt; for text fields
- &lt;input type="email"&gt; for email fields
- &lt;input type="radio"&gt; for radio buttons
- &lt;input type="checkbox"&gt; for checkboxes
- &lt;select&gt; and &lt;option&gt; for drop-down lists
- &lt;textarea&gt; for multi-line text fields

<div style="display: flex;justify-content: center;margin: 50px 0px">
    <img src="/Articles/FrontEnd/HTML/form2.png" width="80%" alt="Image vs code"/>
</div>

#### Labels

It's important to use labels for form elements to ensure that they are properly accessible. The &lt;label&gt; element is used to define a label for a form element, and the for attribute is used to associate the label with the form element. For example:

&lt;label for="email">Email:&lt;/label&gt;<br>
&lt;input type="email" id="email" name="email"&gt;

Submitting the Form: Once the user has entered the information they want to submit, they can press the "submit" button to send the information to the server. The submit button is created using the &lt;input type="submit"&gt; element.

#### Practice

Try creating a simple form with multiple form elements, such as text fields, radio buttons, and checkboxes.

In the next lesson, we will cover how to style HTML pages using CSS.
