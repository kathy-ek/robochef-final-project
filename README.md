
# Recipe Recommendation Interaction With Pepper (Use Case 2 - Pepper Mills)



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Submitted as assignment: A3. Interaction with Pepper (extends A2)


## Team Members

- [Anthony El Chemaly](https://www.github.com/anthonychemaly)
- [Catherina El Khoury](https://www.github.com/kathy-ek)



## Presented To

- [Br. Elie Saad](https://www.github.com/ES-USEK)



## Implemented Features

We recall from the use case document:

``` The main objective of this use case is to improve the user’s culinary journey experience by enabling Pepper to offer personalized, data-driven recipe suggestions and recommendations that fit user preset preferences and current needs and wants. ```

#

Our scenario is as follows:

- We greet Pepper
- Pepper lets the chef know that of the keyword `suggest` 
- Upon saying `suggest`, the chef is prompted for what type of cuisine he/she wants
- The chef is then asked for the respective meal time.
- Upon answering, the chef has to choose one of possible dishes on the tablet.


Note: The tablet is in use in all steps to provide the chef with two perspectives and improve the overall UX.

#

In our dialogue, we made use of the following:
- `lexicon_enu.top` open-source english concepts (in a separate file)
- `concepts.top` file (specialized for our project)
- dialogue animations such as `^start(animations/Stand/Gestures/Hey_3)` and `^start(animations/Stand/Emotions/Positive/Winner_1)`
- `^rand`
- speech mode `^mode(contextual)` and tone `~joyful`
- pauses
- during the interaction, different images are shown on the tablet

## Bonus

We also had the chance to implement these bonus features:

- modified `displayinfo.js` that displays page texts, headings, human user input dictated to Pepper and choice options as images.
- We created two template diagrams in Choregraphe to address the issue of initializing and deleting memory key pairs on mount and unmount.
- implemented additional `choice.js`
- We also allowed for user choice by raising an event and handling it in the dialog when user picks a certain recipe by tapping on the tablet's screen.
- We had the chance to work with blocks beyond the dialog blocks such as the Subscribe Event block, insert data block, delete data block, Show Web View block...

## Demonstration Video

```http
https://www.youtube.com/watch?v=7mdnygGRvrs
```

[![Assignment 3 - Recipe Recommendation Use Case - Extends A2
](https://img.youtube.com/vi/7mdnygGRvrs/0.jpg)](https://www.youtube.com/watch?v=7mdnygGRvrs)

## Feedback

For feedback, please reach out to us at anthony.c.elchemaly@net.usek.edu.lb and catherina.n.elkhoury@net.usek.edu.lb

