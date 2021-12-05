## Project 1 V1: Quantitative
### Pantone movements in color

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