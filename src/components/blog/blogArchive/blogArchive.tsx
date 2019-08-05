import React, { Component } from 'react';
import arrow_icon from '../../../assets/images/arrow_icon.png';
import blog_image from '../../../assets/images/blog_image.png';
import pagination_arrow from '../../../assets/images/pagination_arrow.png';
import pagination_arrow_right from '../../../assets/images/pagination_arrow_right.png';
import filter_technology from '../../../assets/images/filter_technology.png';
import filter_location from '../../../assets/images/filter_location.png';
import dropdown from '../../../assets/images/dropdown.png';
import slider from '../../../assets/images/slider.png';
import { Link } from 'react-router-dom';
import Post from '../../../core/Models/Post';
import './blogArchive.css';
import { resolve } from "inversify-react";
import { TYPES } from '../../../core/services/ioc.types';
import { BlogDataService } from '../../../core/services/data/BlogService/blog.data.service';
import { AxiosResponse } from 'axios';
import blog from '../blog';
import BlogTile from '../blogTile/blogTile';
import ReactPaginate from 'react-paginate';
import { TechnologyDataService } from '../../../core/services/data/TechnologyService/technology.data.service';
import { LocationDataService } from '../../../core/services/data/LocationService/location.data.service';
import Location from '../../../core/Models/Location';
import Technology from '../../../core/Models/Technology';



class blogArchive extends Component<{}, IBlogArchiveState> {



    @resolve(TYPES.BlogService) private readonly blogService: BlogDataService = {} as BlogDataService;
    @resolve(TYPES.TechnologyService) private readonly technologyService: TechnologyDataService = {} as TechnologyDataService;
    @resolve(TYPES.LocationService) private readonly locationService: LocationDataService = {} as LocationDataService;

    state = {
        showLocationDropdown: false,
        showTechnologyDropDown: false,
        blogArchive: [] as Post[],
        technologyList: [] as Technology[],
        locationList: [] as Location[],
        showSpinner: false,
    }
    

    componentDidMount() {
        this.getBlogArchive();
        this.getAllTechnology();
        this.getAllLocations();
    }


    render() {
        let pageCount:number = 10; 
        let blogArchives = null;
        let techList = null;
        let locationList = null;

        console.log(this.state.blogArchive, "blog Archives")
        if (this.state.blogArchive.length > 0) {
            blogArchives = this.state.blogArchive.slice(0,5).map(data => {
                return(
                    <div  key={data.id}  className="custom-flex-width">
                    <div className="custom-image-margin-bottom">
                        <BlogTile blogPost={data} type={'recent'}/>    
                    </div >
                </div>
                );
            });
        } else {
            blogArchives = null;
        }

        if(this.state.technologyList.length > 0){
            techList = this.state.technologyList.map((tech) => {
                return <div key={tech.technologyCode} className="custom-link pointer">{tech.name}</div>
            })
        }else {techList = null}


        if(this.state.locationList.length > 0){
            locationList = this.state.locationList.map((loc) => {
                return <div key={loc.locationCode} className="custom-link pointer">{loc.name}</div>
            })
        }else {locationList = null}



            return (
                <div className="blog-archives-container">
                    <Link to={'/blog'} className="back-button-margin" >
                        <div className="inline"><img className="img-size" src={arrow_icon} alt="" /></div>
                        <div className="inline custom-link">BACK</div>
                    </Link>

                    <div className="custom-blog-archive custom-H1">Blog Archive</div>
                    <div className="custom-filter">
                        <div  className="custom-link-filter custom-filter-technology"><img src={filter_technology} alt="" />
                            <p onClick={() => this.toggleDropdown('technology')} className="pointer">Filter by technology</p>
                            <img onClick={() => this.toggleDropdown('technology')} className="custom-dropdown-size pointer" src={dropdown} alt="" />
                            {this.state.showTechnologyDropDown ? 
                            <div className="custom-dropdown">
                            {techList}</div> : ''}
                        </div>
                        <div className="custom-link-filter custom-filter-location"><img src={filter_location} alt="" />
                            <p onClick={() => this.toggleDropdown('location')} className="pointer" >Filter by location</p>
                            <img onClick={() => this.toggleDropdown('location')} className="custom-dropdown-size pointer" src={dropdown} alt="" />
                            {this.state.showLocationDropdown ? <div className="custom-dropdown">
                            {locationList}</div> : ''}
                        </div>
                        

                        <div>
                            <div className="custom-slider-date">

                                <p>Jan 1, 1999   </p>
                                <p>Jun 12, 2019</p>
                            </div>

                            <img className="slider-img" src={slider} alt="" />
                        </div>

                    </div>
                    <div className="custom-img">
                        {this.state.blogArchive.length > 0 ? blogArchives : <div className="custom-H1">NO BLOG POST FOUND</div> }
                    </div>

                    <ReactPaginate
                    pageClassName="custom-pagination"
                    containerClassName="custom-pagination-container"
                    pageLinkClassName = "custom-a"
                    activeClassName ="custom-pagination-active"
                    activeLinkClassName="custom-active-tag"
                    previousClassName="custom-arrow-left"
                    previousLabel = ""
                    nextClassName="custom-arrow-right"
                    nextLabel = ""
                    pageCount={pageCount}       
                    pageRangeDisplayed={5} 
                    marginPagesDisplayed={10}
                   // onPageChange={this.handlePageClick}
                    />
                </div>

            )

      
    }

    
    getBlogArchive(){
        this.setState({
            ...this.state,
            showSpinner: true
        })
        this.blogService.getAllBlogPost().then(
            (res: AxiosResponse<Post[]>) => {
                this.setState({
                    ...this.state,
                    blogArchive: res.data,
                    showSpinner: false
                });
                console.log('get blog achives', this.state.blogArchive);
            }
        ).catch(err => {
            this.setState({
                ...this.state,
                showSpinner: false
            })
        });
    }

    toggleDropdown(type: string){
        var state = {...this.state}
        console.log(type);
        if(type === 'location'){
            let toggleDropdown = !state.showLocationDropdown
            this.setState({
                showLocationDropdown: toggleDropdown
            })
        }else if(type === 'technology'){
            let toggleDropdown = !state.showTechnologyDropDown
            this.setState({
                showTechnologyDropDown: toggleDropdown
            })
        }
    }

    getAllLocations(){
        this.locationService.getAllLocations().then(
            (res: AxiosResponse<Location[]>) => {
                this.setState({
                    ...this.state,
                    locationList: res.data
                })
            }
        ).catch(err => {
            console.log(err);
        });
    }

    getAllTechnology(){
        this.technologyService.getAllTechnologies().then(
            (res: AxiosResponse<Technology[]>) => {
                this.setState({
                    ...this.state,
                    technologyList: res.data
                })            }
        ).catch(err => {
            console.log(err);
        });
    }

    
}



export default blogArchive;

interface IBlogArchiveState{
    showLocationDropdown: boolean;
    showTechnologyDropDown: boolean;
    blogArchive: Post[];
    technologyList: Technology[];
    locationList: Location[];
    showSpinner: boolean;
}