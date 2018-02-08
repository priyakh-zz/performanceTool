window.ptbox = React.createClass({
	getInitialState: function() {
	        return{
	            data: this.props.data,
	            view:this.props.view,
	            gradeColor:['#52AC67','#FF841B','#449496','#4CAFEB','#FF6A71','#c60f13']
	        };
	    },
  render: function () {
  			var ref = this ; 
  			var panel = 'panel'
			$('.ptbbox .pageloadbox ol li:nth-child(5) .timingcircle').hover(function(e) {
			$('.domtime').addClass('active');
           $('.domtime').addClass('active');
		   }); 
			if(this.props.data!= ' '){

						setTimeout(function() {

							$(document).foundation();
							console.log("timeout")

						}, 500);
			  		return (                            	
						  	<div className="ptbbox">
							    <ul className="tabs" data-tabs="" id="example-tabs">
							      <li className="tabs-title is-active"><a href={"#"+ref.props.view+"10"} aria-selected="true">Page
							      Speed</a>
							      </li>

							      <li className="tabs-title"><a data-tabs-target={ref.props.view+"20"} href={"#"+ref.props.view+"2"}>Timing</a></li>

							      <li className="tabs-title"><a data-tabs-target={ref.props.view+"30"} href={"#"+ref.props.view+"3"}>Video</a></li>
							    </ul>

							    <div className="tabs-content" data-tabs-content="example-tabs">							   
							      <div className="tabs-panel is-active" id={ref.props.view+"10"}>

								        { 
								        	Object.keys(ref.props.data['pageSpeed']).map(function(key, frstindex) {
												   var grade = key; 
												   console.log(ref.props.data['pageSpeed'][key])
												   var rowData = ref.props.data['pageSpeed'][key];
												    return (
												    	<div key = {frstindex}>												        	
											        		  	<div  className="row gradebutton">
														          <div className="columns">
														            	<a style = {{backgroundColor: ref.state.gradeColor[frstindex]}} className="button alert" href="#">Grade {key}</a>
														          </div>
											        			</div> 

													        <div className="row" key = {frstindex} >
													          <div className="columns">
													            <ul className="accordion" data-accordion="" data-allow-all-closed="true">
													              <li className="accordion-item" data-accordion="" disabled="disabled">
													                <a href="" className="accordion-title">
													                <div className="accordtitle1">
													                  <ul>

													                    <li>Suggestion</li>
													                    <li>Score</li>
													                    <li>Tags</li>
													                  </ul>
													                </div>
													                </a>
													              </li>


													               { rowData.map(function(value, scndindex){
																   		return (
																        	<li key = {scndindex}  className="accordion-item" data-accordion-item="">
																                <a href="#" className="accordion-title">

																	                <div className="accordtitle">
																	                  <ul style = {{textAlign:'center'}}>
																	                    <li style={{float:'left',minWidth: '15%',maxWidth: '20%'}}>{value.title}</li>

																	                    <li style={{color:ref.state.gradeColor[frstindex]}}>
																	                      <div className="alert progress">
																	                        <div className="progress-meter" style={{width: value.score+'%',backgroundColor: ref.state.gradeColor[frstindex]}}></div>
																	                      </div>{grade} ({value.score})
																	                    </li>

																	                    <li>{value.tags.join()}</li>
																	                  </ul>
																	                </div>
																                </a>
																                <div className="accordion-content" data-tab-content="">
																                  <p><b>DESCRIPTION : </b>{value.description}</p>
																                  <p><b>ADVICE : </b>{value.advice}</p>
																                  {
																                  	value.offending.map(function(value,i){
																                  		return (
																				                  <p><a href={value} target="_blank" key = {i}>{value}</a><br/></p>

																                  		)
																                  	})
																                  }
																                </div>
															                </li>
												        				)
												        				})

											        				}

													            </ul>
													          </div>
													        </div>
													    </div>

								        			)
												   
												   })

												  
																			        								        
								    	}
							      </div>
							      <div className="tabs-panel" id={ref.props.view+"20"}>
							        <div className=" medium-12 columns content">
							          <p>Page Load Timings</p>

							          <p>RUM Speed Index: 8,024</p>

							          <div className="pageloadbox">
							            <ol>
							              <li>
							                <div className="shadowbox">
							                  <span className="label success">{ref.props.data['timings'].redirectsTime}</span> <span>Redirect</span>
							                </div>
							              </li>

							              <li>
							                <div className="shadowbox">
							                  <span className="label success">{ref.props.data['timings'].redirectsTime}</span> <span>Connect</span>
							                </div>
							              </li>

							              <li>
							                <div className="shadowbox">
							                  <span className="label success">{ref.props.data['timings'].timeBackend}</span> <span>Backend</span>
							                </div>
							              </li>



							              <li>
							                <div className="timingcircle">
							                  <p>{ref.props.data['timings'].timeToFirstByte}</p>

							                  <p>TTFB</p>
							                </div>
							              </li>

							              <li>
							                <div className="timingcircle">
							                  <p>{ref.props.data['timings'].timeToLastByte}</p>

							                  <p>TTLB</p>
							                </div>
							              </li>

							             
							            </ol>
							          </div>

							          <div className="domtime dropdown-pane hide-for-small-only" id="example-dropdown-1"
							          data-dropdown="" data-hover="true" data-hover-pane="true">
							            <div medium-12="">
							            <h3>DOM Interactive Time</h3>

							            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
							            when an unknown printer took a galley of type and scrambled it to make a type
							            specimen book. It has survived not only five centuries, bu</p><img src=
							            "table.png" alt="Smiley face" /></div>
							          </div>
							        </div>
							      </div>

							      <div className="tabs-panel" id={ref.props.view+"30"}>
				                  <p><a href={ref.props.data['video']} target="_blank">{ref.props.data['video']}</a><br/></p>

							      </div>
							    </div>
							  </div>


					);				
			}
			else {

				return null ;
			}
	}
});



