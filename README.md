# jquery.dataTree

A simple jquery plugin that generates a dynamic expandable data-tree list from a static list.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example.

##### HTML
```
    <pre id="ex1" title="html"><code>
        <nav id="navigationMenu">
            <li><a href="#menuItem1">Home</a></li>
            <li><a href="#menuItem2">About</a></li>
            <li><a href="#menuItem3">More Info</a></li>
            <li><a href="#menuItem4">Contact</a></li>
        </nav>
    </code></pre>
```

##### javascript
```
    <script src="http://code.jquery.com/jquery-2.0.1.min.js"></script>
    <script src="src/jquery.codeIt.min.js"></script>
    <script>
        $(function () {
            $('#ex4').codeIt({
                format:'html',
                syntax:{'html':{
                'values':{
                'find':'(<.*?)(".*?")(.*?>)',
                'replace':'$1<span class="htmlValue">$2</span>$3'
                },
                'attributes':{
                'find':'(<.*?)(\\s(.*?))?(>)',
                'replace':'$1<span class="htmlAttribute">$2</span>$4'
                },
                'tags':{
                'find':'(<.*?>)',
                'replace':'<span class="htmlTag">$1</span>'
                }
                }
                });
        });
    </script>
```

##### css
```
    figure {
        border: #999999 1px solid;
    }
    .htmlTag {
        color: #0000CC;
        font-weight: bold;
    }
    .htmlAttribute {
        color: #FF0000;
        font-weight: normal;
    }
    .htmlValue {
        color: #AA00CC;
        font-weight: bold;
    }
```
## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.dataTree/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details