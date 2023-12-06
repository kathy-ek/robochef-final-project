
# RoboChef (Pepper Mills Team)



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

Submitted under 'Final Project Submission'


## Team Members

- [Anthony El Chemaly](https://www.github.com/anthonychemaly)
- [Catherina El Khoury](https://www.github.com/kathy-ek)
- [Elie El Rayess](https://www.github.com/ElieElRayessUsek)
- [Rodaina Fayad](https://www.github.com/rodainaFay)
- [Fawzi El Khoury](https://www.github.com/fawzifkh)
- [Garo Margossian](https://www.github.com/GaroMar)


## Presented To

- [Br. Elie Saad](https://www.github.com/ES-USEK)



## Project Description

We recall from the report document:

``` RoboChef is our project for the Pepper Robot combining technology with the art of cooking. It allows the user to enjoy cooking again with Pepper's assistance. Our RoboChef offers various recipes, step-by-step instructions, cooking tips, and an interactive human-robot relationship which makes her a flexible friendly assistant that aims to change the way chefs approach cooking, making it an entertaining, enjoyable, and interactive journey. ```

#

Our scenario is as follows:

- We greet Pepper
- Pepper lets the chef know that of the keyword `suggest` 
- Upon saying `suggest`, the chef is prompted for what type of cuisine he/she wants
- The chef is then asked for the respective meal time.
- Upon answering, the chef has to choose one of possible dishes on the tablet.
- After meal choice, RoboChef narrates step by step instructions with capability of repeating, going forwards and backwards.
- During meal wait time, RoboChef suggests entertainment under the form of music and jokes.


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
- user input on screen (tapping buttons)
- extra behaviors (play song separate behavior)

## Repartition of Work

Each of the members had the chance to work on all aspects of the project during the semester - each contributing to his/her own use case in both document and code.

However, we split up into 3 respective teams to submit by the respective deadline. The repartition is as follows:

- Catherina El Khoury & Elie EL Rayess: Report
- Anthony El Chemaly & Rodaina Fayad: Code & Technical Report
- Fawzi El Khoury & Garo Margossian: Presentation

## Demonstration Video

```http
https://www.youtube.com/watch?v=Uu894MN5Nhs
```

[![Pepper Mills - Human Robotics Interaction - Final Demo
](https://img.youtube.com/vi/Uu894MN5Nhs/0.jpg)](https://www.youtube.com/watch?v=Uu894MN5Nhs)

