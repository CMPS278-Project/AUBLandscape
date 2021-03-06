# AUB Landscape Plant Database

## Demo Video
[Link to Video](https://drive.google.com/file/d/13gdVQWLu9Cu9zq9DjbFR3hRfJkUqm0nH/view)

## Description

This project is about creating a revamped version of AUB’s landscape department’s website that is, mainly, used to display and manage profiles of plants. You may always refer to [the old website](https://landscapeplants.aub.edu.lb/) to get an idea about what each of the below mentioned specifications exactly means.

The structure and the data about the profile of plants (landscape info, botanical info, horticulture management) should be taken directly from the website (mind that different categories have different profiles).

## Frontend:
1. [X] There should be a page header and footer that are visible at all times.
2. [X] The header should contain AUB’s icon and the name of the department and the faculty to which it belongs. Any time the user clicks on AUB’s icon, he/she should be redirected to the landing page of the website.
3. [X] The front page should show an excerpt (2 lines or 3) of the “About us” section that ends with a “…more” link. Once clicked, the user should stay on the same page (and not redirected as it is the case now with the website) and the full content of the “About us” page should be shown then.
4. [X] The front page should show a snapshot of a plant that is currently considered under the spotlights and allow the user to view its complete profile if he/she chooses to.
5. The client should be able to:
    1. Search for plants by:
        - [X] Name
        - [X] Common name
        - [X] Scientific name
        - [X] Alphabetically
        - [X] Any of its properties (origin, height, uses, leaf, flower, etc.)
    2. Identify a plant by:
        - [X] Size/shape
        - [X] Leaf
        - [X] Flower
        - [X] Fruit
        - [X] Trunk
    3. [X] View the image gallery and filter the plants by type and sort the results in asc and desc order of two different properties.
    4. [X] The image gallery should allow the user to choose the number of images to show at a given moment in time. The user can then modify that number and the page should react accordingly.
    5. [X] Browse plants by categories: fragrant plants, flowering plants, edible plants, etc.
    6. [X] The search results or pages that browse plants should all have the same layout. They should show a snapshot of a plant as shown below (e.g. its main image, its name, type, flower, height, etc.).
    7. [X] A zoomed version of the plant’s image should be show automatically every time the user hovers the mouse over it. When the mouse is out, the zoomed version should disappear.
    8. [X] View a plant’s complete profile
    9. [X] Search a plant directly on Google with a single mouse click
    10. [X] Check the glossary about plants (currently the page shows all the terms, which makes loading the page slow. Change this behavior to make the page lighter on the network and while being viewed).
    11. [ ] Download the profile of a plant in PDF format
    12. [X] See a list of useful links
    13. [X] Use a Contact Us page to send a message to the website’s admins. It should also include a captcha to avoid bots.
    14. [X] Access a page that tells more about the website/project (About us)
6. [X] The footer should contain copyright information and links to the Glossary, About us,


## Backend:
The admin should be able to:
1. [ ] Define categorical and classificatory information about plants
2. [X] Add new plants
3. [X] Search for a plant (in ways similar to what a user can do).
4. [X] View a plant’s profile
5. [X] Modify a plant’s profile
6. [X] Delete a plant
7. [X] Reply (by email) to messages submitted using the “Contact Us” page i.e. your page should send an email to the original sender of the message

## Project deliverables:
- Complete source code (zipped)
- An Excel sheet that shows who did what in each team.
- A 20 minutes recording where you present your project. All 3 members of the team
should contribute and the whole team is responsible to show how much effort was put
in the project. If the size of your video does not allow it to be uploaded, then submit a
link to it after uploading it to the cloud.

## Work Split
| Tasks                             | Ali Chehab | Jamal Al-Khatib | Marwan Bassam |
|-----------------------------------|------------|-----------------|---------------|
| About us Page                     |            | X               |               |
| Admin Add new Plant Backend       |            | X               |               |
| Admin Add new Plant Frontend      |            | X               |               |
| Admin Delete Plant Backend        |            | X               |               |
| Admin Delete Plant Frontend       |            | X               |               |
| Admin Edit a Plant Backend        |            | X               |               |
| Admin Edit a Plant Frontend       |            | X               |               |
| Admin Messages Backend            |            | X               |               |
| Admin Messages Frontend           |            | X               |               |
| Database                          |            | X               |               |
| Filter By Category Backend        |            |                 | X             |
| Filter By Category Frontend       |            |                 | X             |
| Filter By Criteria Backend        |            |                 | X             |
| Filter By Criteria Frontend       |            |                 | X             |
| Filter By Identification Backend  |            |                 | X             |
| Filter By Identification Frontend |            |                 | X             |
| Filter By Letter Backend          |            | X               |               |
| Filter By Letter Frontend         | X          | X               |               |
| Filter By Name Backend            |            | X               |               |
| Filter By Name Frontend           |            | X               |               |
| Get Admin Privelages Page         |            | X               |               |
| Glossary Backend                  |            | X               |               |
| Glossary Frontend                 |            | X               |               |
| Header/Footer Design              |            |                 | X             |
| Home Page Backend                 |            | X               |               |
| Home Page Frontend                |            |                 | X             |
| Image Gallery Backend             | X          |                 |               |
| Image Gallery Frontend            | X          |                 |               |
| Image Zoom Functionality          | X          |                 |               |
| PDF Download Functionality        | X          |                 |               |
| Plant Profile Page Backend        |            | X               |               |
| Plant Profile Page Design         | X          |                 | X             |
| Search On Google Functionality    |            | X               |               |
| SpotLight Plant                   |            | X               |               |
| Useful Links Page                 |            |                 | X             |
