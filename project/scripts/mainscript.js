/*

Course: Endproject
Minor programming, University of Amsterdam
Raoul Lieben
10556346

mainscript.js : loads the data and creates all the graphs.
	also ensures the dropdown menu option calls the update function

*/

window.onload = function(){

	// loads the data and updates the graph and switches data on dropdown
	updateGraph();

	function updateGraph(error){
		if (error) throw error;

		d3.json('boulderdata.json', function(boulderdata2){
			var boulderdata = [2, 4, 8, 10];
			makePiechart(boulderdata);

			d3.select("#order").on("change",function(){

				switchData(this.value);
			});
		});
	};
};
