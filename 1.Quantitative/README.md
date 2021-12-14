## Project 1 V1: Quantitative
### Pantone movements in color

### Class work
- [Fall 2021 Class notes](https://docs.google.com/document/d/1JcsOy3ciMAGG6kFX-lYU0Dhz5JIF7P1kYWoRhnFgUl4/edit?usp=sharing)
- [Fall 2021 Reading notes](https://docs.google.com/document/d/1lUSaqDBBx78vwWTyciHy_UwXrvqom9D_CIHpw5ABkBY/edit?usp=sharing)
- [Interactive, high fidelity mockup for Cooper Hewitt Design Data](https://xd.adobe.com/view/d299399c-8486-45f2-b753-02d7de67df73-87ca/)
- [High fidelity prototype images](brainstorming/mockups/project1_v2)

![Cooper Hewitt: Movements in color](brainstorming/mockups/project1_v2/03.home_asset-selected.png)

### Workflow
- origin: https://github.com/visualizedata/major-studio-1
- upstream: https://github.com/papermashea/major-studio-1

#### Branches 
- aws: cloud 9 work, live lab work
- local: editing done locally using node in terminal and code editors
- main: merging of all code updates from class repo and progress in aws/local


**Data needed**
- id
- accession_number (this maps to SI)
- title
- url
- period_id
- media_id
- type_id
- date
- medium
- type
- description
- woe:country

**Filter ideas**
- Date of object
- Date of acquisition
- Past Pantone COY
- Map display

**Interesting quantitative points**
- Total COY by decade
- Medium count
- Type count

**Data notes**
- Need to clean up missing dates in live code
- 481/500 yellow assets sampled had no period id
- 486/500 grey assets sampled had no period id
- color data not associated with the object
- node module appears to have trouble authenticating, curl requests work ok


### Workflow


**Local**
- node app.js

**Modules**
npm i express --save
npm i d3 --save
npm i fs -- save
npm i request --save
npm i dotenv --save
npm i rita --save
npm i bootstrap --save
npm i d3-cloud --save
npm i d3-array --save


**Legend**
- CH = Cooper Hewitt
- SI = Smithsonian Institute