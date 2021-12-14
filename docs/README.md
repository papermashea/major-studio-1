# Design Movements Documentation 
### Shea Molloy | MS1 Fall 2021

## Project 1: Quantitative
### Pantone movements in color
This initial phase of the project helped me to assess the data structure and rethink my inial UI. I experimented with Tableau to more easily represent the data with the given data structure, and learned a lot about the Cooper's API specificities, limits, and methods. 

<table>
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project1/AmericanArt.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project1/AmericanHistory.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project1/CooperHewitt.jpg" width ="300px" height ="auto" ></td>    
   </tr> 
</table>

**Deliverables**
* [Sketches](https://github.com/papermashea/major-studio-1/tree/main/brainstorming/sketches/project1)
* [Design](https://xd.adobe.com/view/d299399c-8486-45f2-b753-02d7de67df73-87ca/)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/1.Quantitative)
* [Overview](https://docs.google.com/presentation/d/1QzGkGTPvUFs3Aj1rZ4C12igurs2dNlk_P6w-ofXsZ5E/edit?usp=sharing)

## Project 2: Quantitative
### Movements [in color, in form]: adding text data
In this phase of the project, I was able to explore how the data objects function in different representations, and evaluate the feasibiity of subsets like "period", "media" and "year". I was able to explore beeswarm, wordcloud, and event handling in D3 and consider working with other data sets, which I decided against in the end.

<table>
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/ch1.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/ch.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/nhm.jpg" width ="300px" height ="auto" ></td>    
	<td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/nmah.jpg" width ="300px" height ="auto" ></td>
   </tr> 
</table>

**Deliverables**
* [Sketches](https://github.com/papermashea/major-studio-1/tree/main/brainstorming/sketches/project2)
* [Design](https://xd.adobe.com/view/ebab6dc1-27ef-4874-90b8-311b8129d59a-bef8/)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/2.Quantitative/public)
* [Overview](https://drive.google.com/file/d/1549nzDabWF18OyRG7zLyLsEzvfFT4y4Y/view?usp=sharing)

## Project 3: Interactive
### Design Movements: Filters, interactivity, ui
In the interactive form of the project, I worked a gallery view, an origin visuaization, and the filters that would be able to be built given the final generated, flattened, and processed non-null data. Working with the finalized data gave me insight into which filters would be better handled by D3, and which views had gaps in the pattern assessment. I ended up reworking my gallery a few times in order to generate the filters cleanly using D3.

<table>
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project3/UI.jpg" width ="300px" height ="auto" ></td>    
	<td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project3/place.jpg" width ="300px" height ="auto" ></td>
   </tr> 
</table>

**Deliverables**
* [Sketches](https://github.com/papermashea/major-studio-1/tree/main/brainstorming/sketches/project3)
* [Design](https://xd.adobe.com/view/e3851996-fd01-4302-9f48-a1c638a5aae3-b6d6/)
* [Prototype](https://github.com/papermashea/major-studio-1/tree/main/3.Interactive/public)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/cooper_data)
* [Overview](https://docs.google.com/presentation/d/1gGld_FpAXmp3FU0zIYHTgfgfVmvVDLzoqfV3A_VWNE0/edit?usp=sharing)


## Final Prototype 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

**Deliverables**
* [Design](https://xd.adobe.com/view/e3851996-fd01-4302-9f48-a1c638a5aae3-b6d6/)
* [Prototype](https://github.com/papermashea/major-studio-1/tree/main/1.Quantitative)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/1.Quantitative)
* [Overview](https://docs.google.com/presentation/d/1rfRLomEcmW1GT4V1BoBvC7_sq2WUYBbn2AKdiq6AwEE/edit?usp=sharing)




### Workflow
**Local**
- node app.js
- http-server -c-1 -a localhost -p 8000

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
npm i d3-collection --save

**Data Notes**
- Data work => [cooper_data](https://github.com/papermashea/major-studio-1/tree/main/cooper_data)
- Node work => [00.cooper](https://github.com/papermashea/major-studio-1/tree/main/00.cooper)
- CH = Cooper Hewitt
- SI = Smithsonian Institute