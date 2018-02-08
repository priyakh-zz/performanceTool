window.performance = React.createClass({
	getInitialState: function() {
	        return{
	            data: this.props.data,
	            view: this.props.view
	        };
	    },

  render: function () {
  	  	console.log("search",this.props.data)
  	  	var ref = this;
  	  	if(this.props.data!= " "){
  	  		console.log("ref",ref.props.data)

  	  		return (
				<div className="plpbox">
						  <div className="summary">
						    <p>SUMMARY</p>
						  </div>
						  <div className="speedscore">
						    <p> PAGE SPPED SCORE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="score">{ref.props.data['gpsi_score']['score']} %</span></p>
						    <hr/>
						  </div>
				  	<div className="box3">
									<div className="circle0">
											<p><span className="bold">{ref.props.data['performance']['grade']}</span>{ref.props.data['performance']['score']}</p>
											<p> PERFORMANCE  					
											  GRADE</p>
									</div>

						 			<div className="circle1">
										<p>{Math.round(ref.props.data['loadTime'] * 1000) / 1000}</p>
										<p> LOAD 
										  TIME</p>					 
									</div> 
									<div className="circle2">
										<p>{ref.props.data['pageSize']} mb</p>
										<p> PAGE SIZE </p>
									</div>
					</div>
						  <div  className="request">
							    <p>REQUEST</p>
							    <p>{ref.props.data['requests']}</p>
						  </div>
						
					   
				</div> 
			)
  	  	}
  	  	else 
  	  	{
  	  		return null;
  	  	}

    
  }
});

