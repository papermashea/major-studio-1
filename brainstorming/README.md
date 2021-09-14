# Data Visualization Major Studio 1 Fall 2021
## Shea Molloy | Assignment 1 brainstorming

In looking through the datasets available in SI and various institutional collections, I've found that art and culture databases tended to inspire more questions in regards to the relationships between the images and data points while providing enough datapoints to tell an interesting story. I'm most interested in examining art, design, or engineering over time and I'd like to explore trend analysis through data visualization. See here for more exploratory notes:

- [Dataset research planning](https://docs.google.com/document/d/1SNF1BgPnOr2m5we1ozlK3mp-jXZS1CVq8DhAbI9GUps/edit?usp=sharing)

---

### [Cooper Hewitt](https://collection.cooperhewitt.org/) | Design Over Time
The Cooper Hewitt collection inspires questions about design trends over time, such as:
- What color defines each decade?
- What mediums were popular and when?
- What objects and pattern tags were popular and when.

For this initial quantitative visualization, I'd like to display the count of colors in archived objects according to the [Cooper Hewitt database](https://www.si.edu/search/collection-images?edan_q=&edan_fq%5B0%5D=unit_code%3ACHNDM%20OR%20unit_code%3ACHNDM_BL%20OR%20unit_code%3ACHNDM_YT&edan_fq%5B1%5D=%28set_name%3A%22Drawings%2C%20Prints%2C%20and%20Graphic%20Design%20Department%22%20AND%20set_name%3A%22Cooper%20Hewitt%2C%20Smithsonian%20Design%20Museum%20Collection%22%29&edan_fq%5B2%5D=object_type%3A%22Decorative%20arts%22%20OR%20object_type%3A%22Design%20drawings%22%20OR%20object_type%3A%22Drawings%22%20OR%20%22Embroidery%20%28visual%20works%29%22%20OR%20object_type%3A%22Prints%22%20OR%20object_type%3A%22Textiles%22&edan_fq%5B3%5D=media_usage%3A%22CC0%220) grouped by decade as a [Dot Matrix Chart](https://datavizcatalogue.com/methods/dot_matrix_chart.html) This could either be executed in 7-10 generalized groups or according to hex code prefixes. The data points overlap quite a bit (i.e. more than one color per object) and total 71k+ datapoints (some CC0, some not) - but otherwise the data from CH seems very flexible. Alernatively, I could display total dimension of objects organized by medium/decade as a [Proportional Area Chart](https://datavizcatalogue.com/methods/area_chart.html)from the [18k+ CC0 images in the Drawings, Prints and Graphic Design Cooper Hewitt Collection in SI](https://www.si.edu/search/collection-images?edan_q=&edan_fq%5B0%5D=unit_code%3ACHNDM%20OR%20unit_code%3ACHNDM_BL%20OR%20unit_code%3ACHNDM_YT&edan_fq%5B1%5D=%28set_name%3A%22Drawings%2C%20Prints%2C%20and%20Graphic%20Design%20Department%22%20AND%20set_name%3A%22Cooper%20Hewitt%2C%20Smithsonian%20Design%20Museum%20Collection%22%29&edan_fq%5B2%5D=object_type%3A%22Decorative%20arts%22%20OR%20object_type%3A%22Design%20drawings%22%20OR%20object_type%3A%22Drawings%22%20OR%20%22Embroidery%20%28visual%20works%29%22%20OR%20object_type%3A%22Prints%22%20OR%20object_type%3A%22Textiles%22&edan_fq%5B3%5D=media_usage%3A%22CC0%22). 

![Cooper Hewitt](images/CooperHewitt.jpg)

----

### [National Museum of American History](https://americanhistory.si.edu/collections/object-groups) | Advertising and Art in America
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
![American History](images/AmericanHistory.jpg)

---

### [American Art Museum](https://americanart.si.edu/) | I Am An American (Artist)
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
![American Art](images/AmericanArt.jpg)

---

