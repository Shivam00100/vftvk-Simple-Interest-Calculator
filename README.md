# coding-project-template
# Project - Simple Interest Calculator

# Objectives

1.  Clone the project repo.
2.  Modify the html file as per requirements.
3.  Modify the css file as per requirements.
4.  Modify the javascript file as per requirements.
5.  Verify if the app is working properly.
6.  Upload to GitHub and submit the github pages URL for peer review.

# Exercise 1 : Clone the project repo.

1.  In the project prepration phase you have forked the project into your GitHub Account. Copy the URL from your repository.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/copy_cloneurl.png">

2.  Open a new terminal.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/newterminal.png">

3.  Clone the project repository onto your local machine or the Theia environment from the github fork, using the URL you copied in step 1.

```
git clone <paste your repo clone url here>
```

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/gitclone_remoteurl.png">

# Exercise 2 : Modify the html file.

In this exercise, you will correct any mistakes in the existing code and also add any missing tags.

1.  On the file explorer navigate to the `index.html`.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/indexhtmledit.png">

1.  Doctype is missing. Add the doctype.

```html
<!DOCTYPE html>
```

2.  Add "Simple Interest Calculator" as title.

```html
<title>Any relevant title you want to give</title>
```

3.  Move all the content which currently is in the `<body>` to a `<div>` tag.

4.  Set the class attribute of this div to 'maindiv'.

```html
<div class="maindiv">
.
.
.
.
</div>
```

5.  Modify the input text box for interest rate to a slider using the `<input type="range">` tag.

```html
<input type="range"  id="rate" min="minval" max="maxval" value="default_val">
```

6.  For the rate input, set the attributes min to 1, max to 20 and step to 0.25 and the default value to 10.25.

*Range is an elegant way to input numeric input. But the drawback is that it does not visually show value the user has selected.*

7.  To show the value selected by the `range`, create a `<span>` element right after the range.

```html
<span id="rate_val">
</span>
```

8.  Inside the '<span>\` tag add the text "10.25 %".

```html
<span id="rate_val">
10.25%
</span>
```

9.  Modify the input text box for "No of years" into a dropdown box with options 1 to 10.

```html
<select id="years">
    <option value="1">1</option>
    <!-- fill in the rest of the values-->
</select>
```

10. Change the name of "Compute" button to "Compute Interest".

11. Below the "Compute Interest" button create an empty `<span>` and set its id to 'result'.

```html
<span id="result">

</span>
```

12. Add a copyright message using the `<footer>` tag.

```
<footer>

        &#169; This Calculator belongs to --your name--


</footer>
```

# Exercise 3 : Modify the css file.

In this exercise, you will correct the look and feel of the web page.

1.  On the file explorer navigate to the style sheet.

<img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Project/images/stylesheet.png">

2.  Set the body color to 'black', font to arial and font color to white.

```css
body {background-color:black;font-family:arial;color:white}
```

3.  Set the `<h1>` color to 'grey' and font to verdana.

```css
h1{color:grey;font-family:verdana}
```

4.  Create an entry for class 'maindiv'.

```css
.maindiv {
}
```

5.  Set the background color to white, font color to black, width to 300 pixels, and padding to 20px in the newly created maindiv class.

6.  Set the border radius to 25 px.

7.  Align the div to the center of the page.

<details><summary>Click to see how the new class should look like</summary>

```css
.maindiv {
    background-color:white;
    color:black;
    width:300px;
    padding:20px;
    border-radius:25px;
    align:center
}
```

</details>

8.  Visualize your html file in the browser and make sure that you have not missed anything.

# Exercise 4 : Modify the javascript file.

In this exercise, you will write the javascript code in the file **script.js** to implement the simple interest calculation logic.

1.  Before we start writing any javascript, make sure that the button in html file has the onclick attribute set to "compute()"

2.  Create a variable called 'principal' and assign to it the value of the input element "principal"

```js
    var principal = document.getElementById("principal").value;
```

3.  Create a variable called rate and assign to it the value of the input element "rate"

```js
    var rate = document.getElementById("rate").value;
```

4.  Create a variable called years and assign to it the value of the input element "years"

```js
    var years = document.getElementById("years").value;
```

5.  Create a variable called interest and assign to it the value of `principal * years * rate / 100`

```js
    var interest = principal * years * rate /100;
```

6.  Write the logic to convert the 'No of Years' into the actual year in the future.

```js
    var year = new Date().getFullYear()+parseInt(years);
```

7.  Write a function that reads the value of the range slider and displays it the `<span>`adjacent to the slider.

```js
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
```

8.  Link this function with an "onchange" event on the range input.

9.  Change the slider, and test if the display in the span is being updated dynamically.

10. Get the reference to the element named 'result'

11. When "Compute Interest" is clicked, set its inner html property to the below text.

    If you deposit 1000000,<br>
    at an interest rate of 3.5%.<br>
    You will receive an amount of 175000,<br>
    in the year 2025<br>

*The number above are for indication only. Make sure the output contains the relevant values by using the correct variables*

<details><summary>Click here for a sample</summary>

```js
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
```

</details>

12. Make sure that the input you have taken as "No of Years" is converted into an actual year.

13. Make sure the numbers in the result are highlighted.

14. Add validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"

15. Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box. You can refer to the <a href="https://labs.cognitiveclass.ai/tools/theiadocker/?utm_medium=Exinfluencer&utm_source=Exinfluencer&utm_content=000026UJ&utm_term=10006555&utm_id=NA-SkillsNetwork-Channel-SkillsNetworkCoursesIBMDeveloperSkillsNetworkCD0101ENSkillsNetwork20336975-2021-01-01&md_instructions_url=https%3A%2F%2Fcf-courses-data.s3.us.cloud-object-storage.appdomain.cloud%2FIBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork%2Flabs%2FTheia+Labs%2F02+-+HTML5+Elements%2Finstructions.md.html" target="_new">Javascript Form Validation lab</a>.

16. You are done with the coding. Let us proceed to next exercise where we test the code.

17. Write comments in your code. They not only help you score more marks in the project, but also help you to debug and maintain the code in the long term.

# Exercise 5 : Test the app.

Now that you have finished coding your app. Let us do some basic testing, before we release it.

1.  Enter these values in the form.

    Amount = 0<br>

    Rate = 1<br>

    No. of Years = 1<br>

Click on Compute button.

You should see an alert "Enter a positive number".

2.  Enter these values in the form.

    Amount = 99999

    Rate = 9

    No. of Years = 9

Click on Compute button.
You should see the following output.

```
If you deposit 99999,<br>
at an interest rate of 9.<br>
You will receive an amount of 80999.19,<br>
in the year 2029<br>
```

As I write this, the year is 2020, so 2029 is correct.

If you app has passed both the test cases, it is time to go to the next excercise.

Otherwise, start debugging your code to see where you went wrong.

# Exercise 6 : Upload to GitHub and submit the github pages URL for peer review.

When you are done with all the changes in the project, commit and push to GitHub. You do not have to create a Push Request back to the original IBM repository.

If you need to refresh your memory on how to commit and push to GitHub in Theia lab environment, please refer to this lab [Working with git in the Theia lab environment](https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/GitHubLabs/Github_commit.md.html)

Open the URL of your project in a browser. (You created this URL in Exercise 1)

You should see your completed project.

Submit this URL for peer review.

## Author(s)

<h4> Ramesh Sannareddy<h4/>

### Other Contributor(s)

Rav Ahuja

## Changelog

| Date       | Version | Changed by        | Change Description                        |
| ---------- | ------- | ----------------- | ----------------------------------------- |
| 2020-09-09 | 1.2     | Lavanya           | Added some pics and explicit instructions |
| 2020-09-09 | 1.1     | Ramesh Sannareddy | Added 'publishing to gitpages'            |
| 2020-08-23 | 1.0     | Ramesh Sannareddy | Initial version created                   |
