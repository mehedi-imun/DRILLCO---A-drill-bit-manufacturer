import React from 'react';

const Blog = () => {

    const code = `
    const products = [ 
        {name:'iphone', color:'red',price:50300},
        {name:'samsung', color:'black',price:53000},
        {name:'oppo', color:'gold',price:5000},
        {name:'realme', color:'pink',price:5000},
        {name:'iphone', color:'indigo',price:50030}
    ];
    
    const handleSearchProduct = (name)=>{
        const myProduct = products.filter(mobiles => mobiles.name === name);
        console.log(myProduct);
    
    };
    handleSearchProduct('iphone')
    
    `


    return (
        <div className='px-12 mt-12 leading-8'>
            <h3 className='mb-5'>1 How will you improve the performance of a React Application?</h3>
            <p>
                during the initil rendering process, react builds a dom tree of compoonents. so  data changes in the dom tree, my want react to re render only those components that were affected by the change  skiping the other components in the tree that were not afected.
                howeve  react could end up re rendering all components in the dom tree, even though not all are afected. this will result in longer loading time, wasted time, and even wasted cpu resources.
                in this situation, my could configure every component to only render or diff when necessary, to avoid wasting resources and time.
                analyzing react components with chrom performance tab.
                react developer tools profiler.memoization with react.memo . bundling and miniefication.
            </p>
            <h3 className='mt-5'>2 What are the different ways to manage a state in a React application?</h3>
            <p>
                the four kinds of react state to manage.
                <p>1.local state : local state is data we manage in one or another component.local state is most often managed in react using the usestate hook.</p>
                <p>2.global state : global state is data we manage across multiple components.
                    global state is necesary when we want to get and update data anyhere in our app, or in multiple components at least.</p>
                <p>3.server state : data that comes from an external server that must be integrated with our ui state.
                    server state is a simple concept, but can be hard to manage alogside all of our local and global ui state</p>
                <p>4.url state :  data that exists on our urls, incluing the pathname and query parameters.
                    url state is often missing as a category of state, but it is an imprtant one.
                    in many cses, a lot of major parts of our aplication rely upon acessing url state. try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the url</p>
            </p>
            <h3 className='mt-5'>3 How does prototypical inheritance work?</h3>
            <p>everything in javascript is an object. even when creating a class is an object via an object literal or constructor function. this is how javascript does class-based programming as to other traditional object-oriented programming languages where they use the keyword class and inheritance.javascript version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. there are differences in its keyword syntax and how it works. there are also debates regarding pros and cons of javascript version of class-based programming.
                so, the core part of prototypal inheritance is that an object can point to another object and inherit all its properties. the main porpose is to alow multiple instance of an object to share common propertie hence the singleton pattern.
            </p>
            <h3 className='mt-5'>4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p> the state is a built-in react object that is used to contain data or information about the component. a components state can change over time; whenever it changes, the component re-renders. the change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render. State can be updated in response to event handlers, server responses, or prop changes. This is done using the setState() method. The setState() method enqueues all of the updates made to the component state and instructs React to re-render the component and its children with the updated state.
                Always use the setState() method to change the state object, since it will ensure that the component knows its been updated and calls the render() method .
                for example :
                <p>const [products, setProducts] = useState([]).
                    product can return only value , setProducts is a function take sumthings , if user do any  interact to change vale. thats whay i cant   do  set products = [...] , i  use the setProducts.
                </p>

            </p>
            <h3 className='mt-5'>5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <p>
                the javascript filter array function is used to filter an array based on specifie criteria. after filtering it returns an array with the values that pass the filter.
                the javascript filter function iterates over the existing values in an array and returns the values that pass. the search criteria in the javascript filter function are passed using a callbackfn.
                that why i use filter method for find product by name.
                <h4 className=' text-secondary'>for example :</h4>  <p className=' text-secondary'>
                    {code}
                </p>


            </p>
            <h3 className='mt-5'>6 What is a unit test? Why should write unit tests?</h3>
            <p>
                unit testing is important because softaware developers sometimes try to saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost defect fixing during system testing integration testing and even beta testing after application is built. if proper unit testing is done in early development, then it saves time and money in the end.
            </p>
        </div>
    );
};

export default Blog;