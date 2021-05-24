import React from 'react'
import Navbar from '../components/Navbar';
import sort from './../assets/images/sort.png';
import Newscard from '../components/Newscard'


class Health extends React.Component{
  constructor(props){
    super(props)
    this.state={
      news:[],
      loading:true
    }
  }

  getNews=async()=>{
    const res= await fetch('https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=f2b12a6becc84f6cb6fbbc38d0f8e957')
    const data = await res.json();
      this.setState({news:data.articles, loading:false})

  }



  componentDidMount(){
    this.getNews();
  }


render(){
  return(
  <div>
  <Navbar/>
  <div class="flex-container">
     <div className="sidebars left-sidebar">
    <h3>Categories</h3>
        <div className="leftside-content">
          <a href="/Politics"onClick={this.state.onclick}>
           <div className="f-column">
           <center>
           <div className="leftside-flex science">S</div>
           <span className="left-span">Science</span>
           </center>
           </div>
            </a>


           <a href="/Health">
           <div className="f-column ">
           <center>
           <div className="leftside-flex health">H</div>
           <span className="left-span">Health</span>
           </center>
            </div>
            </a>

           <a href="/Tech">
           <div className="f-column ">
           <center>
           <div className="leftside-flex tech">T</div>
           <span className="left-span">Tech</span>
           </center>
         </div>
           </a>


           <a href="/Sport">
           <div className="f-column ">
           <center>
           <div className="leftside-flex sport">S</div>
           <span className="left-span">Sport</span>
           </center>
           </div>
           </a>

            <a href="/Bussiness">
           <div className="f-column " >
           <center>
           <div className="leftside-flex business">B</div>
           <span className="left-span">Business</span>
           </center>
           </div>
           </a>


             <a href="/Others">
           <div className="f-column ">
           <div className="leftside-flex entertainment">E</div>
           <span className="left-span">Entert</span>
           </div>
            </a>

        </div>
        <div className="down-box">my name is Blessing</div>
     </div>


     <div className="content">
         <span>Health News</span>
         <div className="sort">
         <img src={sort}width="20"/>
         </div>
         {
            this.state.loading? <p>fetching news....</p>:
            this.state.news.map((val, key)=>{
              return(
              <Newscard headline={val.title}
              content={val.description}
              time={val.publishedAt}
              url={val.url}
              key={key}
              />
            );
          })


         }


   </div>

     <div className="sidebars right-sidebar">
      <div className="right-box"></div>
      <h5 className="right-h6">Team</h5>

      <div className="rightflex-container">
      <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        </div>
        <div className="rightflex">
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>
        <div className="right-dot"></div>

      </div>
     </div>
   </div>
  </div>
);
}
}

export default Health;
