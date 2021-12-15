# Shea Molloy MS1 Fall 2021 | Design Movements Documentation 

**Class work:** [Class notes](https://docs.google.com/document/d/1JcsOy3ciMAGG6kFX-lYU0Dhz5JIF7P1kYWoRhnFgUl4/edit?usp=sharing), [Reading notes](https://docs.google.com/document/d/1lUSaqDBBx78vwWTyciHy_UwXrvqom9D_CIHpw5ABkBY/edit?usp=sharing), [Data work](https://github.com/papermashea/major-studio-1/tree/main/cooper_data)

### Branches
* aws: cloud 9 work, live lab work
* local: editing done locally using node in terminal and code editors
* main: merging of all code updates from class repo and progress in aws/local

### Workflow
* origin: https://github.com/visualizedata/major-studio-1
* upstream: https://github.com/papermashea/major-studio-1
* local dev: http-server -c-1 -a localhost -p 8000

## Project 1: Quantitative
### Pantone movements in color
This initial phase of the project helped me to assess the data structure and rethink my inial UI. I experimented with Tableau to more easily represent the data with the given data structure, and learned a lot about the Cooper's API specificities, limits, and methods. 

**Deliverables**
* [Sketches](https://github.com/papermashea/major-studio-1/tree/main/brainstorming/sketches/project1)
* [Design](https://xd.adobe.com/view/d299399c-8486-45f2-b753-02d7de67df73-87ca/)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/1.Quantitative)
* [Overview](https://docs.google.com/presentation/d/1QzGkGTPvUFs3Aj1rZ4C12igurs2dNlk_P6w-ofXsZ5E/edit?usp=sharing)

<table>
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project1/AmericanArt.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project1/AmericanHistory.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project1/CooperHewitt.jpg" width ="300px" height ="auto" ></td>    
   </tr> 
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project1/project1_v2/05.search_color.png" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project1/project1_v2/03.home_asset-selected.png" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project1/project1_v2/06.search_form-dropdown.png" width ="300px" height ="auto" ></td>    
   </tr> 
</table>


## Project 2: Quantitative
### Movements [in color, in form]: adding text data
In this phase of the project, I was able to explore how the data objects function in different representations, and evaluate the feasibiity of subsets like "period", "media" and "year". I was able to explore beeswarm, wordcloud, and event handling in D3 and consider working with other data sets, which I decided against in the end.

**Deliverables**
* [Sketches](https://github.com/papermashea/major-studio-1/tree/main/brainstorming/sketches/project2)
* [Design](https://xd.adobe.com/view/ebab6dc1-27ef-4874-90b8-311b8129d59a-bef8/)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/2.Quantitative/public)
* [Overview](https://drive.google.com/file/d/1549nzDabWF18OyRG7zLyLsEzvfFT4y4Y/view?usp=sharing)

<table>
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/ch1.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/ch.jpg" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/nhm.jpg" width ="300px" height ="auto" ></td>    
	<td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project2/nmah.jpg" width ="300px" height ="auto" ></td>
   </tr> 
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project2/form.png" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project2/form_period.png" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project2/form_query.png" width ="300px" height ="auto" ></td>    
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project2/form-selection.png" width ="300px" height ="auto" ></td>
   </tr> 
</table>


## Project 3: Interactive
### Design Movements: Filters, interactivity, ui
In the interactive form of the project, I worked a gallery view, an origin visuaization, and the filters that would be able to be built given the final generated, flattened, and processed non-null data. Working with the finalized data gave me insight into which filters would be better handled by D3, and which views had gaps in the pattern assessment. I ended up reworking my gallery a few times in order to generate the filters cleanly using D3.

**Deliverables**
* [Sketches](https://github.com/papermashea/major-studio-1/tree/main/brainstorming/sketches/project3)
* [Design](https://xd.adobe.com/view/e3851996-fd01-4302-9f48-a1c638a5aae3-b6d6/)
* [Prototype](https://github.com/papermashea/major-studio-1/tree/main/3.Interactive/public)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/cooper_data)
* [Overview](https://docs.google.com/presentation/d/1gGld_FpAXmp3FU0zIYHTgfgfVmvVDLzoqfV3A_VWNE0/edit?usp=sharing)

<table>
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project3/UI.jpg" width ="300px" height ="auto" ></td>    
	<td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/sketches/project3/place.jpg" width ="300px" height ="auto" ></td>
   </tr> 
  <tr>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project3/newGallery.png" width ="300px" height ="auto" ></td>
    <td> <img src="https://github.com/papermashea/major-studio-1/blob/main/brainstorming/mockups/project3/exports/InPlace_Home.png" width ="300px" height ="auto" ></td>
   </tr> 
</table>

## Final Prototype 
### Design Movements
The final prototype is looking a lot more like what I had originally envisioned, but with a cleaner comparison on each page. I ended up paring down the cross-filter interactivity in the finalized prototype and moving forward with 3 distinctly different visualizations for color, form, and origin data. Some functions of note that helped parse the data in a largely consistent way include: d3.nest, d3.rollup, d3.filter, d3.selectAll and d3.select, d3 on(change) and general update patterns.

**Abstract**
Design Movements - New perspectives for the Cooper Hewitt collection of design objects
Design Movements is an interactive visualization of the digitized design objects in the Cooper Hewitt collection. It reinterprets different perspectives of the collection as a whole to provide "bird's-eye" views of color, form, and place. In looking at color over time, form by frequency, and object origins spatially, users can explore the collection from a new view and draw their own conclusions about what design means to them, and where it may go in the future. 

**Deliverables**
* [Design](https://xd.adobe.com/view/e3851996-fd01-4302-9f48-a1c638a5aae3-b6d6/)
* [Prototype](https://papermashea.github.io/major-studio-1/)
* [Demo Video](https://drive.google.com/drive/u/1/folders/1-VueitiMNlIYAuE6E-wRrRiTyCAPeijk)
* [Code](https://github.com/papermashea/major-studio-1/tree/main/1.Quantitative)
* [Overview](https://docs.google.com/presentation/d/1rfRLomEcmW1GT4V1BoBvC7_sq2WUYBbn2AKdiq6AwEE/edit?usp=sharing)

### Final thoughts
Given specific direction I took with the designs for this data, I had to rework or write a lot of functionality from scratch in a way I haven't had to in past projects. I feel proud of level of understanding I was able to develop along the way and feel confident that I could continue building this project out in more efficent ways.*

