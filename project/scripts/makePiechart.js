/*

Course: Endproject
Minor programming, University of Amsterdam
Raoul Lieben
10556346

makeBarchart.js : creates the barchart graph and sorts the data for checkboxevent

*/

// margins barchart
var piemargin = {top: 20, right: 20, bottom: 30, left: 40, gap: 50},
	piewidth = 400 + piemargin.left + piemargin.right,
	pieheight = 210 + piemargin.top + piemargin.bottom;

// appends nonfrail barchart svg to div element
var pieboulder = d3.select("#col-sm-4").append("svg")
	.attr("id", "svgpieboulder")
	.attr("width", piewidth)
	.attr("height", pieheight);


// creates the barchart and updates if checkbox is checked
function makePiechart(boulderdata){
	var data = [2, 4, 8, 10];

    var svg = d3.select("svg"),
        width = svg.attr("width"),
        height = svg.attr("height"),
        radius = Math.min(width, height) / 2,
        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

    // Generate the pie
    var pie = d3.pie();

    // Generate the arcs
    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")

    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);
};
