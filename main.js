
window.HelloMessage = React.createClass({
	getInitialState: function() {
	        return{
	            data : " ",
	            loading : false,
	            desktopData : " "
	        };
	    },	
    performanceEvaluate : function (e){
    	var link = document.getElementById("searchlink").value


		console.log("enter")
    	if(e.keyCode == 13){
    	document.getElementById("loading").classList.remove("hide");
    	document.getElementById("load").classList.remove("hide");

    	 document.getElementById("searchlink").setAttribute("disabled", "");

    	var ref = this ; 
		console.log("enter")

		$.ajax({
                    url: "http://188.165.221.177:5000/perfomance_audit?url="+link+"&device=mobile",                  
                    type: 'GET',
                   
				    crossDomain: true,
				    dataType: 'json',
                    success: function (data) {
                		console.log(data);
				    	document.getElementById("loading").classList.add("hide");
				    	document.getElementById("searchlink").removeAttribute("disabled", "");

                    	if(data.ERRORCODE){

                    	}
                    	else{
		                    var datap  = data;                  
		                    ref.setState({"data":datap},function(){
		                    			console.log(this.state);
		                    			ref.setState({"loading":false})

		                    }); 
                    	}
                   
                        //and when we get the query back we
                        //stick the results in the scope
                    },
                });

		$.ajax({
                    url: "http://188.165.221.177:5000/perfomance_audit?url="+link+"&device=desktop",                  
                    type: 'GET',
                   
				    crossDomain: true,
				    dataType: 'json',
                    success: function (data) {
           			document.getElementById("load").classList.add("hide");

                    	if(data.ERRORCODE){

                    	}
                    	else{
		                    var datap  = data;                  
		                    ref.setState({"desktopData":datap},function(){
		                    			console.log(this.state);
		                    			ref.setState({"loading":false})

		                    }); 
                    	}
                 
                        //and when we get the query back we
                        //stick the results in the scope
                    },
                });

		// $.ajax({
  //                   url: "http://188.165.221.177:5000/perfomance_audit?url="+link+"&device=desktop&video=True",                  
  //                   type: 'GET',
                   
		// 		    crossDomain: true,
		// 		    dataType: 'json',
  //                   success: function (data) {
  //                   	if(data.ERRORCODE){

  //                   	}
  //                   	else{
		//                     var datap  = data.video;
		//                     var link = "https://ipfs.io/ipfs/"+datap;                  
		//                     ref.setState({"desktoplink":link},function(){
		//                     			console.log(this.state);
		//                     			ref.setState({"loading":false})

		//                     }); 
  //                   	}
                 
  //                       //and when we get the query back we
  //                       //stick the results in the scope
  //                   },
  //               });

		// $.ajax({
  //                   url: "http://188.165.221.177:5000/perfomance_audit?url="+link+"&device=mobile&video=True",                  
  //                   type: 'GET',
                   
		// 		    crossDomain: true,
		// 		    dataType: 'json',
  //                   success: function (data) {
  //                   	if(data.ERRORCODE){

  //                   	}
  //                   	else{
		//                     var datap  = data.video;
		//                     var link = "https://ipfs.io/ipfs/"+datap;                  
		//                     ref.setState({"mobilelink":link},function(){
		//                     			console.log(this.state);
		//                     			ref.setState({"loading":false})

		//                     }); 
  //                   	}
                 
  //                       //and when we get the query back we
  //                       //stick the results in the scope
  //                   },
  //               });
  //  $.getJSON('data.json', function(data) {
  //  	ref.setState({"data":data},function(){
		// console.log(this.state.data);
  //   });
  //  });	
    	}
		

  
  	 
	},
	componentDidMount : function(){
		
	$(document).foundation();

	},
  render: function () {
  	console.log("this.state.performanceEvaluate",this.performanceEvaluate)
    return ( <div>

			<window.search performanceEvaluate = {this.performanceEvaluate}/>
			
	    	<section className="dmtabs" id="tabbox">
            <article>
					  	<div className="column">
						    <div className=" medium-12 columns content">

									<ul className="tabs" data-active-collapse="true" data-tabs id="collapsing-tabs">
									  <li className="tabs-title is-active"><a href="#panel1c" aria-selected="true">MOBLIE</a></li>
									  <li className="tabs-title"><a href="#panel2c">DESKTOP</a></li>
									 
									</ul>

								<div className="tabs-content" data-tabs-content="collapsing-tabs">
								  	<div className="tabs-panel is-active" id="panel1c">
								 		<window.performance data = {this.state.data} view="mobile"/>
										<p className="missingpara">This page is missing some common performance optimizations that may result in slow user experience. Please investigate recommendations below.</p>
										<window.ptbox data = {this.state.data} view="mobile" link = {this.state.mobilelink}/>							
									</div>
								  		<div className="tabs-panel" id="panel2c">
									    	<window.performance data = {this.state.desktopData} view="desktop"/>
										<p className="missingpara">This page is missing some common performance optimizations that may result in slow user experience. Please investigate recommendations below.</p>
										<window.ptbox data = {this.state.desktopData} view="desktop" link = {this.state.desktoplink}/>
										<div className="loading hide" id="load"></div>
									  	</div>
								</div>
								<div className="loading hide" id="loading"></div>

								


							</div>
						</div>
					</article>
			</section>
		</div> 
		);
  }
});

ReactDOM.render(<window.HelloMessage/>, document.getElementById('root'));