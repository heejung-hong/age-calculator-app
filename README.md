# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

#### Desktop View

![Screenshot 2024-09-29 at 1 51 44 PM](https://github.com/user-attachments/assets/024a1c54-3d5c-4373-8a15-856a94e2bef0)  ![Screenshot 2024-09-29 at 1 52 09 PM](https://github.com/user-attachments/assets/00c75034-6929-45c8-9a0e-f361cfe9e7ce)

![Screenshot 2024-09-29 at 1 53 21 PM](https://github.com/user-attachments/assets/ceb3760f-7a18-416f-9295-4135dacecaa0)  ![Screenshot 2024-09-29 at 1 56 00 PM](https://github.com/user-attachments/assets/1e420b30-d6f6-4b0a-a77a-38b97ac59e3a)

![Screenshot 2024-09-29 at 1 53 41 PM](https://github.com/user-attachments/assets/3657e56c-622b-4603-b0c8-aec25023f078)

#### Mobile View

![Screenshot 2024-09-26 at 1 15 42 PM](https://github.com/user-attachments/assets/71b70c9d-061f-47d9-a43b-eacde0ee36d0)

### Links

- [Solution URL here](https://github.com/heejung-hong/age-calculator-app)
- [Age Calculator Live Site URL here](https://heejung-hong.github.io/age-calculator-app/))

## My process

### Built with

- [React](https://react.dev/) - JS library
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### What I learned

This project took a while to complete starting from creating the functions to calculate the dates, the age, date validations, and errors. There were also many conditionals that were written and it took a while for figure out how to conditionally render the error messages. I also gained more knowledge in using Tailwind CSS and learning how to customize the sizing, understanding mobile first design, and implementing the break points.

To see how you can add code snippets, see below:

```html
<div className="font-semibold text-s text-left">
  {InvalidDay() || ErrorWhole() ? (
  <span className=" text-rose-500">DAY</span>
  ) : (
  <span className=" text-zinc-500 ">DAY</span>
  )}
</div>
```

```css
<div className="bg-white w-[343px] h-[486px] lg:w-[840px] lg:h-[680px] p-[25px] lg:p-[56px] rounded-t-[25px] lg:rounded-t-[40px] rounded-bl-[25px] lg:rounded-bl-[40px] rounded-br-[100px] lg:rounded-br-[200px]">
</div>
```

```js
function calBirth() {
  if (isNaN(dateObj) || dateObj > d) {
    return null;
  } else {
    setYears(Math.floor((totalDaysCurrent - totalYears) / 365));
    setMonths(Math.floor(((totalDaysCurrent - totalYears) % 365) / 31));
    setDays(Math.floor(((totalDaysCurrent - totalYears) % 365) % 31));
  }
}
```

### Continued development

Areas that I would like to continue develop is apply global css and use themes in Tailwind. I would like to improve the functionality of the date checker so that it automatically check the dates of the past correctly. I had to manually enter coding to make 4/31 return an error.

### Useful resources

- [Adding numbers in React](https://dev.to/this_mkhy/week-6-sum-two-numbers-app-1800) - This helped me to be able to calculate the totalYears from useState. Before is would concatenate the numbers not producing the total years required.
- [Date validations](https://www.freecodecamp.org/news/how-to-validate-a-date-in-javascript/) - This helped me to create the functions to check the dates for past and errors.
- [Deploy React static app on Github](https://medium.com/@aishwaryaparab1/deploying-vite-deploying-vite-app-to-github-pages-166fff40ffd3) - With this article, I was finally able to deploy a static React website on Github.

## Author

- Website - [Heejung Hong](https://heejunghong.com/)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)
