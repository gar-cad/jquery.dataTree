# jquery.dataTree

A simple jquery plugin that generates a dynamic expandable data-tree list from a static list.

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example.

##### HTML
```
<div id="football">
    <span data-tree-branch="eng" data-tree-click="eng">England</span>
    <span data-tree-branch="eng-epl" data-tree-click="eng-epl">Premier League</span>
    <span data-tree-branch="eng-epl-arse" data-tree-click="eng-epl-arse">Arsenal</span>
    <span data-tree-branch="eng-epl-villa" data-tree-click="eng-epl-villa">Aston Villa</span>
    <span data-tree-branch="eng-epl-cdff" data-tree-click="eng-epl-cdff">Cardiff</span>
    <span data-tree-branch="eng-epl-lpool" data-tree-click="eng-epl-lpool">Liverpool</span>
    <span data-tree-branch="eng-epl-city" data-tree-click="eng-epl-city">Manchester City</span>
    <span data-tree-branch="eng-epl-utd" data-tree-click="eng-epl-utd">Manchester United</span>
    <span data-tree-branch="eng-chm" data-tree-click="eng-chm">Championship</span>
    <span data-tree-branch="eng-chm-brig" data-tree-click="eng-chm-brig">Brighton</span>
    <span data-tree-branch="eng-chm-leic" data-tree-click="eng-chm-leic">Leicester</span>
    <span data-tree-branch="eng-chm-forest" data-tree-click="eng-chm-forest">Nottingham Forest</span>
    <span data-tree-branch="eng-chm-wat" data-tree-click="eng-chm-wat">Watford</span>
    <span data-tree-branch="eng-lg1" data-tree-click="eng-lg1">League 1</span>
    <span data-tree-branch="eng-lg2" data-tree-click="eng-lg2">League 2</span>
    <span data-tree-branch="eng-lg2-chest" data-tree-click="eng-lg2-chest">Chesterfield</span>
    <span data-tree-branch="eng-lg2-york" data-tree-click="eng-lg2-york">York</span>
    <span data-tree-branch="sco" data-tree-click="sco">Scotland</span>
    <span data-tree-branch="sco-spl" data-tree-click="sco-spl">Scottish Premier League</span>
    <span data-tree-branch="sco-spl-aber" data-tree-click="sco-spl-aber">Aberdeen</span>
    <span data-tree-branch="sco-spl-cel" data-tree-click="sco-spl-cel">Celtic</span>
    <span data-tree-branch="sco-spl-utd" data-tree-click="sco-spl-utd">Dundee United</span>
    <span data-tree-branch="sco-spl-hearts" data-tree-click="sco-spl-hearts">Hearts</span>
    <span data-tree-branch="sco-spl-hibs" data-tree-click="sco-spl-hibs">Hibernian</span>
    <span data-tree-branch="sco-div1" data-tree-click="sco-div1">Scottish First DIvision</span>
    <span data-tree-branch="sco-div2" data-tree-click="sco-div2">Scottish Second DIvision</span>
</div>
```

##### javascript
```
    <script src="http://code.jquery.com/jquery-2.0.1.min.js"></script>
    <script src="src/jquery.dataTree.min.js"></script>
    <script>
        $(function () {
            $('#football').dataTree({
                delimeter: '-',
                openCSS: 'open2',
                closedCSS: 'closed2',
                endCSS: 'end2',
                opened: ['eng-epl', 'sco']
            });
        });
    </script>
```

##### css
```
    #football {
        color: #333333;
    }
    #football .open2 {
        text-transform: uppercase;
        font-weight: bold;
    }
    #football [data-tree-branch]{
        display: block;
    }
    #football .data-tree-level1 {
        margin-left: 20px;
    }
    #football .data-tree-level2 {
        margin-left: 40px;
    }
    #football .data-tree-level3 {
        margin-left: 60px;
    }
    #football .end2.data-tree-level0, #football .end2.data-tree-level1 {
        color: #CCCCCC;
    }
    #football .end2.data-tree-level2 {
        color: #CC0000;
    }
```
## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.dataTree/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details