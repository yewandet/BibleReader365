var options = {
    thumbnailData: [{
      title: 'View Notes',
      number: 0,
      header: 'Take Notes',
      description: 'Put down your thoughts while you go through the passages without leaving the page. Then go over the notes you took on your own time or rediscover them whenever you read through the same passage.',
      imageUrl: 'http://c.fastcompany.net/multisite_files/fastcompany/imagecache/1280/poster/2014/04/3029713-poster-p-notetaking.jpg'
  
  },{
      title: 'Start Reading',
      number: 0,
      header: 'Begin your journey through the Bible in one year',
      description: 'Put down your thoughts while you go through the passages without leaving the page. Then go over the notes you took on your own time or rediscover them whenever you read through the same passage.',
      imageUrl: 'http://www.theblaze.com/wp-content/uploads/2013/09/bible3-620x388.jpg'
    }]
  };
    
  var element = React.createElement(ThumbnailList, options);
  ReactDOM.render(element, document.querySelector('.target'));
  var Badge = React.createClass({displayName: "Badge",
      render: function() {
          return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
          this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
  });
  
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });
    
    return React.createElement("div", null, 
      list
    )
  }
});
  var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});