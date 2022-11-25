import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-orange-300 my-8 mx-10 p-10 rounded-lg'>
                <h1 className="text-2xl font-bold">1. What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl font-bold my-4'>There are four main types of state you need to properly manage in your:</p>
                <p><span className='font-bold'>(a). Local (UI) state: </span>Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
                <br />
                <span className='font-bold'>(b). Global (UI) state:</span> Global state is data we manage across multiple components.
                <br />
                <span className='font-bold'>(c). Server state:</span> Data that comes from an external server that must be integrated with our UI state.
                <br />
                <span className='font-bold'>(d). URL state:</span> Data that exists on our URLs, including the pathname and query parameters..
                </p>
            </div>
            <div className='bg-orange-300 my-8 mx-10 p-10 rounded-lg'>
                <h1 className="text-2xl font-bold">2. How does prototypical inheritance work?</h1>
                <p className='text-xl font-medium my-4'>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
            </div>
            <div className='bg-orange-300 my-8 mx-10 p-10 rounded-lg'>
                <h1 className="text-2xl font-bold">3. What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl font-medium my-4'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."</p>
                <p className='text-xl font-medium my-4'>Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
            </div>
            <div className='bg-orange-300 my-8 mx-10 p-10 rounded-lg'>
                <h1 className="text-2xl font-bold">4. React vs. Angular vs. Vue?</h1>
                <p className='text-xl font-medium my-4'><span className='font-bold'>Angular.js</span> offers a very clear structure and lots of features. It allows development teams to move quickly to implementation without the need to define structures or look for additional libraries. However, it is often too overloaded for small projects and brings unnecessary ballast. <br /> <span className='font-bold'>React</span> is recommended for projects with front-end-heavy results. Since there are no clear structures, close cooperation between the development team is vital. React has a stronger server-side rendering support, making the library more SEO-friendly. <br /> <span className='font-bold'>Vue</span> may be used for a wide range of applications. It may give a great solution for virtually every project type due to its interoperability with other JavaScript frameworks and its ability to add more complicated logic to current programs.</p>
            </div>
        </div>
    );
};

export default Blog;