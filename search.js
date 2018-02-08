window.search = React.createClass({
	performanceEvaluate: function(e){
		console.log("this.props.performanceEvaluate")
		this.props.performanceEvaluate(e,)
	},
  render: function () {
  	console.log("search",this)
  	var ref = this
    return ( <section className="searchbox " id="search">       
				    <div className=" medium-12 columns content">
						<p> Enter a URL  to get an intant performance audit remote for your website</p>
						  <input type="text" name="search" tabIndex="0"  id = "searchlink" onKeyDown = {ref.performanceEvaluate}/>
					</div>
		          </section> 
		    );
  }
});

