# js-design-libraries
 
## General

This design library used for the purpose of reduce the time for code the basic design.

Library is access without import other libarary.

## Installation

    a) npm module
    b) cdn

## Usage


design("id-selector").funtion();

## Example

<span style="color: #f1f1f1">text : { } #apply the css value to format text</span>

<table style="width:100%">
    <tr>
        <th>Function</th>
        <th>Properties</th>
        <th>default</th>
    </tr>
    <tr>
        <td>.bubble()</td>
        <td>
<pre>{
    count : "",
    background : "",
    size : ""
}</pre></td>
        <td>
        count: 50<br/>
        background: random_color</br>
        size: random_size
        </td>    
    </tr>    
    <tr>
        <td>.typewriter()</td>
        <td><pre>{
    data : [],    
    text : {}
}</pre></td>
        <td>&nbsp;</td>    
    </tr>  
    <tr>
        <td>.tagCloud()</td>
        <td>
    <pre>{
    data:[],
    text:{}
}
</pre></td>
        <td>&nbsp;</td>    
    </tr>
    <tr>
        <td>.skillBar()</td>
        <td>
    <pre>{
    skill:{ key:value, key:value },
    text:{}
    barColor:"",
    background: "",
    animate:true
}</pre></td>
        <td>
        animate : false<br/>
        background : grey<br/>
        barColor : random_value
        </td>    
    </tr>  

</table>


## Example
**bubble()**

```javascript
    design("#demo").bubble({
        count:50,
        background:"#072f5f", 
        size:"50px"
    });
```


**typewriter()**
```javascript
    design("#demo").typewriter({
        data:["Developer","Freelancer"],
        text:{
            color:"red",            
            "font-size":"80px",
            "font-weight":"800"
        }
    });
```    

> tagCloud(): 

```javascript    
    design("#demo").tagCloud({
        data:["Web Development","CSS","HTML"],
        text:{
            background:"yellow",
            color:"green",
            margin:"20px"
        }
    });
```


> skillBar()

```javascript    
    design("#demo").skillBar({
        skill:{laptop: 5,mobile:7},
        text:{
            "font-size":"18px",
            "font-weight":"800",
            "text-transform":"uppercase"
        },
        barColor:"",
        background: "",
        animate:true
    });
```
